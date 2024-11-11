const checkbox = document.getElementById('myCheckbox') as HTMLInputElement;
const textbox = document.getElementById('textinput1') as HTMLInputElement;
const button = document.getElementById('button1') as HTMLButtonElement;
let clicked: boolean = false;



checkbox?.addEventListener('change', () => {
    if(checkbox.checked){
      clicked = true
        fetch('/checkbox-clicked', {
        method: 'POST'
      })
      .then(response => response.text())
      .then(data => {
        //console.log(data); // Log the server response
      })
      .catch(error => console.error('Error:', error));
    }else{
      clicked = false
    }
});

button.addEventListener('click', () => {
    const textValue = textbox.value;
    fetch('/parse-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textValue }),
      })
      .then(response => response.text())
      .then(data => {
        //document.body.innerHTML += data;
        let cleanData = data
        if(clicked == true){
          cleanData = DOMPurify.sanitize(data);
        }
        const container = document.createElement('div');
        container.innerHTML = cleanData; // Inject the response as HTML
        document.body.appendChild(container);
        
        if(clicked == false){
        const scripts = container.querySelectorAll('script');
        scripts.forEach((script) => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src; // Copy the src if it's an external script
        } else {
          newScript.textContent = script.textContent; // Copy inline script content
        }
        document.body.appendChild(newScript);
        script.remove(); // Remove the original script tag to avoid duplication
        
      });
      }
      
      })
      .catch(error => console.error('Error:', error));
})




  