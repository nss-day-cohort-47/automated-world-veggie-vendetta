import { getLandmark } from "./LandmarkData.js"
import { landmarkHTML } from "./LandmarkHTML.js"

export const LandmarkList = () => {
    const landmarks = getLandmark();
    const DOMLocation = document.querySelector(".landmarkBox");

    let landmarkHTMLRep = "";

    for (const oneLandmark of landmarks) {
        landmarkHTMLRep += landmarkHTML(oneLandmark);
    }; 

    console.log("landmarkHTMLRep", landmarkHTMLRep)

    DOMLocation.innerHTML = landmarkHTMLRep;

};