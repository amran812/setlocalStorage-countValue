 // Retrieve the count from local storage
 let count = localStorage.getItem("count");
 if (count === null) {
   count = 0;
 } 

 // Update the count displayed on the page
 const countElement = document.getElementById("count");
 countElement.innerText = "Count: " + count;

 function incrementCount() {
   // Increment the count and update the count displayed on the page
   count++;
   countElement.innerText = "Count: " + count;
    

   // Store the count in local storage
   localStorage.setItem("count", count.toString());
 }
