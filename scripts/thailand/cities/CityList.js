import { getCity } from "./CityData.js"
import { cityHTML } from "./CityHTML.js"

export const CityList = () => {
    const cities = getCity();
    const DOMLocation = document.querySelector(".cityBox");

    let cityHTMLRep = "";

    for (const oneCity of cities) {
        cityHTMLRep += cityHTML(oneCity);
    };

    DOMLocation.innerHTML = cityHTMLRep;

}