const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector("#first-name"),
    lastName: document.querySelector("#last-name"),
    image: document.querySelector("#image"),
 /*    firstNameoutput: document.querySelector("#firstNameoutput"),
    lastNameoutput: document.querySelector("#lastNameoutput"),
    imageoutput: document.querySelector("#imageoutput"), */
    box: document.querySelector("#box"),
    button: document.querySelector("button"),
    //select the textbox
    //select all the h2s in one property
};
/* DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.firstName.value.push(DOMSelectors.h2s);
    DOMSelectors.lastName.value.push(DOMSelectors.h3s);
    DOMSelectors.password.value.push(DOMSelectors.h4s);
}); */

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const form = DOMSelectors.form
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const image = DOMSelectors.image.value
    const tempDiv = document.createElement("div");
    if (form) {
        form.insertAdjacentElement("afterend", tempDiv);
    }
    tempDiv.insertAdjacentHTML(
        "afterbegin",
        "<p id=firstNameoutput></p><p id=lastNameoutput></p><img id=imageoutput></img>"
      );
    document.getElementById("firstNameoutput").innerText = firstName
    document.getElementById("lastNameoutput").innerText = lastName
    document.getElementById("imageoutput").src = image
});
DOMSelectors.button.addEventListener('click', function(event){
    DOMSelectors.firstName.value = "";
    DOMSelectors.lastName.value = "";
    DOMSelectors.image.value = "";
});

{/* <p id="firstNameoutput"></p>
<p id="lastNameoutput"></p>
<img id="imageoutput" url = ""></img> */}