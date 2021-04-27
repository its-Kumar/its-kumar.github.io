// console.log('working')

let theme = localStorage.getItem('theme')
let themeChanger = document.getElementById('theme-change')

themeChanger.addEventListener("click", function () {
    let mode = null;
    theme = localStorage.getItem('theme')
    if (theme == 'light') {
        mode = 'dark';
        this.src = 'images/light.png';

    } if (theme == 'dark') {
        mode = 'light';
        this.src = 'images/dark.svg';

    }
    // console.log('option clicked', mode);
    setTheme(mode);
})

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

function setTheme(mode) {
    if (mode == "light") {
        document.getElementById('theme-style').href = "css/main.css";
    }
    if (mode == 'dark') {
        document.getElementById('theme-style').href = "css/dark.css";
    }
    localStorage.setItem('theme', mode);
}
