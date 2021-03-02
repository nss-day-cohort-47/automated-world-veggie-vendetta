import { grabCity } from "./CitiesData.js"
import { cityHTML } from "./CitiesHTML.js"

export const thailandCityList = () => {
    const cities = grabCity();
    const DOMLocation = document.querySelector(".cityBox");

    let cityHTMLRep = "";

    for (const oneCity of cities) {
        cityHTMLRep += cityHTML(oneCity);
    };

    DOMLocation.innerHTML = cityHTMLRep;

}