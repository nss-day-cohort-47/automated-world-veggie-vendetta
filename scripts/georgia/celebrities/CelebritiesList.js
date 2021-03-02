import { grabCeleb } from "./CelebritiesData.js"
import { celebHTML } from "./CelebritiesHTML.js"

export const georgiaCelebList = () => {
    const celebs = grabCeleb();
    const DOMLocation = document.querySelector(".celebBox");

    let celebHTMLRep = "";

    for (const oneCeleb of celebs) {
        celebHTMLRep += celebHTML(oneCeleb);
    };

    DOMLocation.innerHTML = celebHTMLRep;

};