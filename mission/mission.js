let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme(){
    let current = selectElem.value;
    const newLogo = document.getElementById("logo");
    const newLogo2 = document.getElementById("logo2")

    if (current === 'dark'){
        document.body.className = 'dark';
        newLogo.style.display = "none";
        newLogo2.style.display = "inline"
           //change body to dark
           //change logo to the new logo
        newLogo.setAttribute("src", "mission/byu-logo_white.png");
    } else{
          //change body to light Or remove dark class from body
        document.body.className.remove('dark');
        newLogo.style.display = "inline";
        newLogo2.style.display="none";
          // change logo back to original logo 
        newLogo.setAttribute("src", "mission/byu-logo_blue.webp");
    }
}