const checkbox = document.getElementById('checkbox') as HTMLInputElement;
const textbox = document.getElementById('textinput1') as HTMLInputElement;
const button = document.getElementById('button1') as HTMLButtonElement;

checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        fetch('/checkbox-clicked', {
        method: 'POST'
      })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Log the server response
      })
      .catch(error => console.error('Error:', error));
    }
});

button.addEventListener('click', () => {
    const textValue = textbox.value;
    document.body.innerHTML += `<p>${textValue}</p>`;
    fetch('/parse-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textValue }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Log the server response
      })
      .catch(error => console.error('Error:', error));
})




  