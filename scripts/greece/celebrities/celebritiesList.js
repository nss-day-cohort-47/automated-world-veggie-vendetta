import { getCelebrity } from "./celebritiesData.js";

import { celebritiesHTML } from "./celebritiesHTML.js";

export const greeceCelebritiesList = () => {
    const everyCelebrity = getCelebrity();
    const DOMLocation = document.querySelector(".celebrities");

    let celebritiesHTMLRep = "";

    for  (const oneCelebrity of everyCelebrity) {
        celebritiesHTMLRep += celebritiesHTML(oneCelebrity);
    };

    DOMLocation.innerHTML = celebritiesHTMLRep;
};


