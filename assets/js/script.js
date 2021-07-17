const bar = document.getElementById("bar-top")
// scroll Home
function scrollHome () {
    window.scrollTo(0, 0);
};

// scroll Popular Products
function scrollPopular () {
    window.scrollTo(0, 725);
};

// scroll Black Friday
function scrollBlack () {
    window.scrollTo(0, 1450);
};

// localStorage do email
const inpEmail = document.getElementById("inpEmail");

function addEmail() {
    const key = localStorage.length;
    const value = inpEmail.value;

    if (value != "") {
    alert("Obrigado por cadastrar seu e-mail :)\nFique ligado nas promoções exclusivas do site!");
    localStorage.setItem(key, value);
    window.scrollTo(0, 0);
    };
};