function click() {
    var hero = document.getElementById("hero")
    hero.innerHTML = "Hello button is clicked"
}
document.getElementById("bt").addEventListener("click" , click)