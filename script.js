// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget  = document.getElementById("missionTarget"); 
            function index(json) {
               return json[Math.floor(Math.random()*json.length)];
            }   
            missionTarget.innerHTML += ` 
               <div>
                  <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${index(json).name}</li>
                        <li>Diameter: ${index(json).diameter}</li>
                        <li>Star: ${index(json).star}</li>
                        <li>Distance: ${index(json).distance}</li>
                        <li>Moons: ${index(json).moons}</li>
                     </ol>
                    <img class="image" src="${index(json).image}"></img>
                  </div>
               `
            })   //index selects random and data = json.name,
         })
   // Function to check letters and numbers
function alpha(name) {
 let letters = /^[a-zA-Z]+$/;
 if(name.value.match(letters)) {
   return true;
  } else { 
   return false; 
  }
  }
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass");
      let faultyItems = document.getElementById("faultyItems");
         
      if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
        alert("All fields are required!");   
        (faultyItems.style.visibility != "visible");             
      } else if(alpha(pilotNameInput) === false) {  
         alert("You must enter a valid name!")
         (faultyItems.style.visibility != "visible");  
      } else if(alpha(copilotNameInput) === false) {
         alert("You must enter a valid name!")   
         (faultyItems.style.visibility != "visible"); 
      } else if (isNaN(fuelLevelInput.value)) {
         alert("Please enter a valid number for fuel!");
         (faultyItems.style.visibility != "visible");  
      } else if(isNaN(cargoMassInput.value)) {
         alert("Please enter a valid number for cargo mass!");   
         (faultyItems.style.visibility != "visible");  
      } else 
         (faultyItems.style.visibility = "visible");
      
        
         if(fuelLevelInput.value < 10000) {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
            copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
            fuelStatus.innerHTML = "Fuel too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
         } else if(cargoMassInput.value > 10000) {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
            copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
            cargoStatus.innerHTML = "Cargo mass too high to take off!";
            launchStatus.innerHTML = "Shuttle not ready for launch!";
            launchStatus.style.color = "red";
         } else {
            faultyItems.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
            copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for Launch!";
         } 
   
         
      
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
      });
});
