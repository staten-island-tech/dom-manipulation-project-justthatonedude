const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector("#first-name"),
    lastName: document.querySelector("#last-name"),
    password: document.querySelector("#pass-word"),
    firstNameoutput: document.querySelector("#firstNameoutput"),
    lastNameoutput: document.querySelector("#lastNameoutput"),
    passwordoutput: document.querySelector("#passwordoutput"),
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
    const formValue = DOMSelectors.form.value
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const password = DOMSelectors.password.value
    DOMSelectors.firstNameoutput.innerText = firstName
    DOMSelectors.lastNameoutput.innerText = lastName
    DOMSelectors.passwordoutput.innerText = password
});