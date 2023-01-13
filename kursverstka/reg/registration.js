
const formElement = document.getElementById('reg_form'); 
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const name = formData.get('uname');
    const exp = formData.get('exp');    
    const obj = {        
        username: name,
        exp: exp,
        level1: 0,
        level1: 0,
        level1: 0,
    }
    localStorage.setItem(localStorage.length+1, JSON.stringify(obj)) 
   
    window.location.href = "../game1/game.html"        
});