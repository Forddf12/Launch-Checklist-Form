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
      } else if (isNaN(fuelLevelInput.value) === true || fuelLevelInput.value <= 0 || isNaN(cargoMassInput) === true || cargoMassInput.value <= 0) {
         alert("Please insert a valid number for fuel!")
      } else 
         (faultyItems.style.visibility = "visible");
      
        
         if(Number(fuelLevelInput.value) < 10000) {
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
            copilotStatus.innerHTML = `Copilot ${copilotNameInput.value} is ready for launch.`;
            fuelStatus.innerHTML = "Fuel too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
         } else if(Number(cargoMassInput.value) > 10000) {
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
