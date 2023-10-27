const DOMSelectors = {
    form: document.querySelector("#form"),
    card: document.querySelector(".card"),
    firstName: document.querySelector("#first-name"),
    lastName: document.querySelector("#last-name"),
    image: document.querySelector("#image"),
 /*    firstNameoutput: document.querySelector("#firstNameoutput"),
    lastNameoutput: document.querySelector("#lastNameoutput"),
    imageoutput: document.querySelector("#imageoutput"), */
    box: document.querySelector("#box"),
    //select the textbox
    //select all the h2s in one property
};
let cardnum = 0;
/* DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.firstName.value.push(DOMSelectors.h2s);
    DOMSelectors.lastName.value.push(DOMSelectors.h3s);
    DOMSelectors.password.value.push(DOMSelectors.h4s);
}); */

DOMSelectors.form.addEventListener("submit", function(event){
    cardnum++
    event.preventDefault();
    const card = DOMSelectors.card
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const image = DOMSelectors.image.value
    function divCreator(){
        card.insertAdjacentHTML(
            "afterbegin",
            `<div id=${cardnum}><div class=box><p id="firstNameoutput">${firstName}</p><p id="lastNameoutput">${lastName}</p><img id="imageoutput" src=${image}></img><button id="btn">Clear Profile</button></div></div>`
        );
        DOMSelectors.firstName.value = "";
        DOMSelectors.lastName.value = "";
        DOMSelectors.image.value = "";
    };
    divCreator();
    function clearFields(){
        const tempNum = cardnum;
        const button = document.getElementById("btn");
        button.addEventListener("click", function(event){
            const element = document.getElementById(tempNum);
            element.remove();
        });
    };
    clearFields();
    

    
});

{/* <p id="firstNameoutput"></p>
<p id="lastNameoutput"></p>
<img id="imageoutput" url = ""></img> */}