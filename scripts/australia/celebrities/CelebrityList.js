import { Celebrity } from "./CelebrityHTML.js";
import { getCelebrity } from "./CelebritiesData.js";


/** Define the steps that need to be taken
 1. Get the array of Fish
 2. Get a reference to the location on the DOM where you want to display the list of fish
 3. Declare a variable to hold on to fish HTML representations
 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
 4. Finally set the dom equal to the variable containing the fish html representations
 **/

export const CelebrityList = () => {
	// 1. Get the array of Celebrities
	
	
    const allCelebrities = getCelebrity();
//debugger

	// 2. Get a reference to the location on the DOM where you want to display the list of fish
	const DOMLocation = document.querySelector("#celebList");
	// 3. Declare a variable to hold on to celebrity HTML representations
	let celebrityHTMLRepresentations = "";
	// 3. Loop over the array of celebrities and for each one, invoke the Celebrity component which returns HTML representation

	for (const oneThingFromTheWorld of allCelebrities) {
		//do something with the oneThingFromTheWorld
		celebrityHTMLRepresentations += Celebrity(oneThingFromTheWorld);
	}
	console.log("celebrityHTMLRepresentations", celebrityHTMLRepresentations);

	DOMLocation.innerHTML += celebrityHTMLRepresentations;

}
