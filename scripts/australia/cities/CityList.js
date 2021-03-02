import { City } from "./CityHTML.js";
import { getCity } from "./CityData.js";


/** Define the steps that need to be taken
 1. Get the array of Cities
 2. Get a reference to the location on the DOM where you want to display the list of cities
 3. Declare a variable to hold on to city HTML representations
 3. Loop over the array of cities and for each one, invoke the City component which returns HTML representation
 4. Finally set the dom equal to the variable containing the city html representations
 **/

export const CityList = () => {
	// 1. Get the array of City
	
	
    const allCities = getCity();
//debugger
	// 2. Get a reference to the location on the DOM where you want to display the list of cities
	const DOMLocation = document.querySelector("#cityList");
	// 3. Declare a variable to hold on to city HTML representations
	let cityHTMLRepresentations = "";
	// 3. Loop over the array of cities and for each one, invoke the City component which returns HTML representation
	for (const oneThingFromTheWorld of allCities) {
		//do something with the oneThingFromTheWorld
		cityHTMLRepresentations += City(oneThingFromTheWorld);
	}
	console.log("cityHTMLRepresentations", cityHTMLRepresentations);

	DOMLocation.innerHTML += cityHTMLRepresentations;

}
