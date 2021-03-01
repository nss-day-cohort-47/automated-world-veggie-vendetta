import { getLandmark } from "./CityData.js"
import { landmarkHTML } from "./LandmarkHTML"

export const landmarkList = () => {
    const landmarks = getLandmark();
    const DOMLocation = document.querySelector(".landmarkBox");

    let landmarkHTMLRep = "";

    for (const oneLandmark of landmarks) {
        landmarkHTMLRep += landmarkHTML(oneLandmark);
    }; 

    console.log("landmarkHTMLRep", landmarkHTMLRep)

    DOMLocation.innerHTML = landmarkHTMLRep;

}