// Write your JavaScript code here!
window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         console.log(response);
         let missionTarget  = document.getElementById("missionTarget");
         for(let i = 0; i < json.length; i++) {
            let image = "";
            for(let j = 0; j < json.length; j++) {
                image += json[j].image[j];
            }
               missionTarget.innerHTML += ` 
                  <div class = "Name">
                     <h3>${json[i].name}</h3>
                        <ul>
                           <li>Diameter: ${json[i].diameter}</li>
                           <li>Star: ${json[i].star}</li>
                           <li>Distance: ${json[i].distance}</li>
                           <li>Image: ${json[i].image}</li>
                           <li>Moons: ${json[i].moons}</li>
                        </ul>
                  </div>
                  </div>
                     <img class="image" src="${json[i].picture}"></img>
                     </div>
               `
        }
    })
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[pilotName=pilotName]");
      let copilotNameInput = document.querySelector("input[copilotName=copilotName]");
      //if(pilotNameInput.value === "" || copilotNameInput.value === "") {
        //alert("All fields are required!");         
      //}
   });

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
