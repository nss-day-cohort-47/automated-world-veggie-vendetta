import { Landmark } from "./LandmarkHTML.js";
import { getLandmark } from "./LandmarkData.js";


/** Define the steps that need to be taken
 1. Get the array of Landmarks
 2. Get a reference to the location on the DOM where you want to display the list of landmarks
 3. Declare a variable to hold on to landmark HTML representations
 3. Loop over the array of landmarks and for each one, invoke the Landmark component which returns HTML representation
 4. Finally set the dom equal to the variable containing the landmark html representations
 **/

export const LandmarkList = () => {
	// 1. Get the array 
    const allLandmarks = getLandmark();
//debugger
	// 2. Get a reference to the location on the DOM where you want to display the list of landmarks
	const DOMLocation = document.querySelector("#landmarkList");
	// 3. Declare a variable to hold on to landmark HTML representations
	let cityHTMLRepresentations = "";
	// 3. Loop over the array of landmarks and for each one, invoke the Landmark component which returns HTML representation

	for (const oneThingFromTheWorld of allLandmarks) {
		//do something with the oneThingFromTheWorld
		landmarkHTMLRepresentations += Landmark(oneThingFromTheWorld);
	}
	console.log("landmarkHTMLRepresentations", landmarkHTMLRepresentations);

	DOMLocation.innerHTML += landmarkHTMLRepresentations;

}