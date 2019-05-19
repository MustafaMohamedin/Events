class EventBrite {
   
  // Constructor when instanciate
  constructor(){
    this.auth_token = '7J4CG5G2JZN5IRRLE72O';
    this.orderBy = 'date';
  }


  // Get the Event from API 
      async queryAPI(eventName , category){
        
        const eventsResponse = await fetch(

          `
          https://www.eventbriteapi.com/v3/events/search/?q=${eventName}
          &sort_by=${this.orderBy}&categories=${category}&token=${this.auth_token}
          `
        );

        // Wait for the Response and return as a JSON
        const events = await eventsResponse.json();

        // Return the Object 
           return {
             events
           }
          
      }


  // Get the Categories from REST API
    async  getCategoriesAPI(){
        // Query the API
      const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

      //  Hold the categoriesResponse and return as JSON
      const categories = await categoriesResponse.json();

      // Return the categories Object
        return{
           categories
        }
    }

}