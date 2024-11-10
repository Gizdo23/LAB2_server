window.onload = () => {
    const checkbox = document.getElementById("myCheckbox") as HTMLInputElement;
    const textbox = document.getElementById("textinput1") as HTMLInputElement;
    const button1 = document.getElementById("button1") as HTMLButtonElement;

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            console.log("yay");
        }
    });
    button1.addEventListener("click", () => {
        const text = textbox.value
        console.log(text)
        textbox.value = ''
    });

    
};