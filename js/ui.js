
// Everything related to the THML  (Users).
class UI {

  // App inisialaization
    constructor(){
      this.init();
    }
      // When the App started
    init(){
        // display  the Category in <select>
        this.displayCategory();
        this.result = document.getElementById('result');
    }

    // Display Events
        displayEvents(events){

          //  console.log(events);
          //  Build the Template 
          let HTMLTemplate = '';

          // Loop through the Events and print the results
          events.forEach(eventInfo => {

            HTMLTemplate += `
            <div class= "col-md-4 mt-4">
               <div class= "card">
                  <div class= "card-body">
                    <img class= "img-fluid mb-2" src= "${eventInfo.logo !== null ? eventInfo.logo.url : '' }">
                </div>
                <div class= "card-body">
                   <div class="card-text">
                      <h2 class="text-center card-title">
                        ${eventInfo.name.text} </h2>
                        <p class="lead text-info"> Event Information : </p>
                        <p> ${eventInfo.description.text.substring(0,200)}...</p>
                        
                        <span class= "badge badge-secondary"> Date & Time : ${eventInfo.start.local} :: ${eventInfo.start.timezone} </span>

                         <a href="${eventInfo.url}"  target="_blank"
                         class ="btn btn-primary btn-block mt-4"> Get Tickets </a>
                   </div>
                </div>
              </div>
            </div>
            
            `;


          });

          this.result.innerHTML = HTMLTemplate;
          
        }

    // Display the Category
      displayCategory(){
          const categoriesList = eventBrite.getCategoriesAPI()
           .then(categories => {
            
            const categoriesList = categories.categories.categories;
            const categoriesSelect = document.querySelector('\#category');

            // loop through the list 
            categoriesList.forEach( category => {

              // Create the options
              const option = document.createElement('option');
              option.value = category.id;
              option.appendChild(document.createTextNode(category.name));
              categoriesSelect.appendChild(option);
            })

           })
             .catch(error => console.log(error));
      }

      // Display the error message 
          printMessage(message , className){

            // Create a div
            const div = document.createElement('div');
            div.className = className;

            // Add the text 
            div.appendChild(document.createTextNode(message));
            const searchEventDiv = document.querySelector('#search-events');
            searchEventDiv.appendChild(div);

            // Remove the Error message after 3 seconds
               setTimeout(() => {
                this.removeMessage();
               }, 2000);
          }

          // Remove the Error message
          removeMessage(){
            const alert = document.querySelector('.alert');
            if(alert){
              alert.remove();
            }
          }
          
}