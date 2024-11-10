"use strict";
window.onload = () => {
    const checkbox = document.getElementById("myCheckbox");
    const textbox = document.getElementById("textinput1");
    const button1 = document.getElementById("button1");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            console.log("yay");
        }
    });
    button1.addEventListener("click", () => {
        const text = textbox.value;
        console.log(text);
        textbox.value = '';
    });
};
