(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;

  // Displays the name in the console at this stage:
  console.log(`Name on page load: ${nameStored}`);
  
  if(nameStored) {
    // If there is a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "Stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter your name");
      userName.focus();
    }
    // Gets the name the user entered:
    nameStored = userName.value;
    
    // Shows the name in "my-name":
    myName.innerHTML = nameStored;
    
    // Puts the name into localStorage:
    localStorage.name = nameStored;
    
    // Displays the name in the console at the final stage:
    console.log(`New name stored: ${nameStored}`);
    
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

}());