import { getCeleb } from "./CelebrityData.js"
import { celebHTML } from "./CelebrityHTML.js"

export const CelebList = () => {
    const celebs = getCeleb();
    const DOMLocation = document.querySelector(".celebBox");

    let celebHTMLRep = "";

    for (const oneCeleb of celebs) {
        celebHTMLRep += celebHTML(oneCeleb);
    };

    DOMLocation.innerHTML = celebHTMLRep;

};