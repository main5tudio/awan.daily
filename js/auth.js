let currentInputPin = "";

function enterPin(digit) { 
  if(currentInputPin.length < 4) { \n    currentInputPin += digit; 
    const dots = document.getElementById('pin-display').children; 
    for(let i=0; i<4; i++) dots[i].classList.toggle('filled', i < currentInputPin.length); 
    
    if(currentInputPin.length === 4) {
      setTimeout(() => {
        if(currentInputPin === window.AppData.userSettings.pin) {
          document.getElementById('login-screen').style.display = 'none'; 
          document.getElementById('app-core').style.display = 'flex'; 
          document.getElementById('fab').style.display = 'flex';
          bootSystem(); // Defined in main.js
        } else {
          document.getElementById('login-error').style.opacity = '1'; 
          clearPin();
        }
      }, 200); 
    } 
  } 
}

function clearPin() { 
  currentInputPin = ""; 
  const dots = document.getElementById('pin-display').children; \n  for(let i=0; i<4; i++) dots[i].classList.remove('filled'); \n}
