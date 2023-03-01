// create variable to hold db connection
let db;




// establish a connection to IndexedDB database called 'pizza_hunt' and set it to version 1
const request = indexedDB.open('pizza', 1);  // By default, we start it at 1. This parameter is used to determine whether the database's structure has changed between connections


// We can't create an object store until the connection to the database is open, emitting an event that the request variable will be able to capture.
// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // save a reference to the database 
    const db = event.target.result;
    // create an object store (table) called `new_pizza`, set it to have an auto incrementing primary key of sorts 
    db.createObjectStore('new_pizza', { autoIncrement: true });
  };

  // upon a successful 
request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
    db = event.target.result;
  
    // check if app is online, if yes run uploadPizza() function to send all local db data to api
    if (navigator.onLine) {
      // we haven't created this yet, but we will soon, so let's comment it out for now
      // uploadPizza();
    }
  };
  
  request.onerror = function(event) { // error handeling 
    // log error here
    console.log(event.target.errorCode); // to inform us if anything ever goes wrong with the database interaction
    console.log('Somthing went wrong with the database interaction!', 'Refer2: public/assests/idb.js');
  };



