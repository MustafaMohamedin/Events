
// Instanciate both classes

const eventBrite = new EventBrite();
const ui = new UI();


// Listener for the submit button
 document.getElementById('submitBtn').addEventListener('click' , (e)  => {
    e.preventDefault();

    // Get the values from the form 
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    // Validate the fields
    if(eventName !== ''){
      //  Query Event Brite API
        eventBrite.queryAPI(eventName , category)
           .then(events => {
                const eventsList = events.events.events;
                  // Check for Events
                  if(eventsList.length > 0 ){
                    // Display the Events
                    ui.displayEvents(eventsList);
                    

                  }else{
                    // There are no Events found , Display an Error message
                    ui.printMessage('No Results found, Please try again', 'alert alert-danger text-center mt-4');
                  }
           });


    }else{
      
      //  Print an Error Message
       ui.printMessage('Add an Event or a City' , 'alert alert-danger text-center mt-4');
    }

 })
