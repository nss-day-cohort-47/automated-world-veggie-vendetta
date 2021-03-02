import { getCity } from "./citiesData.js";

import { citiesHTML } from "./citiesHTML.js";


export const greeceCitiesList = () => {
    const everyCity = getCity();
    const DOMLocation = document.querySelector(".cities");

    let citiesHTMLRep = "";

    for  (const oneCity of everyCity) {
        citiesHTMLRep += citiesHTML(oneCity);
    };

    DOMLocation.innerHTML = citiesHTMLRep;
};
