import { grabLandmark } from "./LandmarkData.js"
import { landmarkHTML } from "./LandmarkHTML.js"

export const georgiaLandmarkList = () => {
    const landmarks = grabLandmark();
    const DOMLocation = document.querySelector(".landmarkBox");

    let landmarkHTMLRep = "";

    for (const oneLandmark of landmarks) {
        landmarkHTMLRep += landmarkHTML(oneLandmark);
    }; 

    console.log("landmarkHTMLRep", landmarkHTMLRep)

    DOMLocation.innerHTML = landmarkHTMLRep;

};