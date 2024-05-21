document.getElementById("loginToggle").addEventListener("click", function() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginToggle").classList.add("active");
    document.getElementById("signupToggle").classList.remove("active");
    document.querySelector(".highlight").style.left = "0";
});

document.getElementById("signupToggle").addEventListener("click", function() {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupToggle").classList.add("active");
    document.getElementById("loginToggle").classList.remove("active");
    document.querySelector(".highlight").style.left = "100px"; // ajustez cette valeur selon la largeur du bouton
});
