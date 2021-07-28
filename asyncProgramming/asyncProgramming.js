/*
! ASYNCHRONOUS PROGRAMMING
-Generally, JS is a read from from to to bottom, performing each line 
of code one after another - this is known as synchronous
programming.
-ex. line 1 is run and completed before line 2 begins, which is
then run and completed before line 3, etc.

-This can become an issue when we fetch or gather, information
from an outside source, from something such as an API. If JS did 
not have the ability to run code asynchronously, we would be 
forced to wait for our line of code to finish as it tried to gather 
mountains of data from a database. Asynchronous code will allow
us to somewhat ignore the one line at a time rule.

- Asynchronous programming allows a program to do more than one
thing at a time.
- Make it possible to run long-running actions without stopping the
program to wait for a response

*/
// Synchronous code
const secondSync =() => {
    console.log('Second Hello');
  }
  const firstSync =() => {
    console.log('First Hello');
    secondSync();
    console.log('End');
  }

  firstSync();

// Synchronous Code
const networkRequest = () => {
    setTimeout(() => {
        //setTimeOut is a method that will work in the browser and node.
        // js - we are using it to simulate a network request 
        // setTimeOut has 2 parameters, the first is a callback function
        //(a function that we pass into a parameter), and the second is how time to wait
        // to wait measured in milliseconds
        console.log('Asynce Code');
            }, 2000)
} 

console.log('Hello World');

networkRequest();

console.log('The End');

 /*  
 !API

 -Application Program Interface

 - an API is something that will allow us to talk to other
 programs, such as a database or server, however, the API itself
 is not a database or server, it is the code with access pointss to the server
 -access to a server will come in the form of ENDPOINTS
 -endpoints direct us to sets of data

 REST API
 REpresentational State Transfer
 - creates an object of requested data
 from the client, and sends values back as a response

 methods:
 CRUD
 create (POST)
 Read (GET)
 Update (PUT)
Delete (DELETE) 
/ we will talk more about these in detail during blue badge /
! FETCH()

The fetch method is an asynchronous method, and is part of the browswer
window, NOT JS. This method will start the process of 'fetching',
or grabbing, a resource from the network, and will return a promise
which is fulfilled when the response is available 

-Promise is an unknown value that will eventually be filled with either a 
value or rejection (error)
-Pending: initial state, neither fulfilled or rejected 
-Fulfilled: meaning the operation completed successfully
-Rejected: meaning the operation failed.



*/