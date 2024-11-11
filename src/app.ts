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
        let cleanData
        if(clicked == true){
          cleanData = ''
          let cleanMap = [];
          let data1 = data
          console.log(data)
          console.log(data1)
          const forbidden = ['<', '>', '{', '}', '"'];
          for (let i = 0; i < data1.length; i++) {
            if(forbidden.includes(data1.charAt(i))){
              switch (data1.charAt(i)) {
                case '<':
                  cleanMap.push('&lt;');
                  break;
                case '>':
                  cleanMap.push('&gt;');
                  break;
                case '{':
                  cleanMap.push('&#123;');
                  break;
                case '}':
                  cleanMap.push('&#125;');
                  break;
                case '"':
                  cleanMap.push('&quot;');
                  break;
                default:
                  cleanMap.push(data1.charAt(i));
                  break;
              }
            }else{
              cleanMap.push(data1.charAt(i));
            }
            cleanData = cleanMap.join('');
          }
        }else{
          cleanData = data
        }
        console.log(cleanData)
        const xx = `
        <p>${cleanData}</p>
      `
        const container = document.createElement('div');
        container.innerHTML = cleanData; 
        document.body.appendChild(container);
        
        if(clicked == false){
        const scripts = container.querySelectorAll('script');
        scripts.forEach((script) => {
        const newScript = document.createElement('script');
        if (script.src) {
          newScript.src = script.src; 
        } else {
          newScript.textContent = script.textContent; 
        }
        document.body.appendChild(newScript);
        script.remove(); 
        
      });
      }
      
      })
      .catch(error => console.error('Error:', error));
})




  