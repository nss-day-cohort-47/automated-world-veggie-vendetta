import { getLandmark } from "./landmarksData.js";

import { landmarksHTML } from "./landmarksHTML.js";


export const greeceLandmarksList = () => {
    const everyLandmark = getLandmark();
    const DOMLocation = document.querySelector(".landmarks");

    let landmarksHTMLRep = "";

    for  (const oneLandmark of everyLandmark) {
        landmarksHTMLRep += landmarksHTML(oneLandmark);
    };

    DOMLocation.innerHTML = landmarksHTMLRep;
};
