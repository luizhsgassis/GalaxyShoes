const inpEmail = document.getElementById("inpEmail");

function addEmail() {
    const key = localStorage.length;
    const value = inpEmail.value;

    localStorage.setItem(key, value);
    location.reload();
};