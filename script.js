function createStar(){
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    document.getElementById("universe").appendChild(star);
}

function animateStars() {
    const starCount = 100;
    for(let i = 0; i < starCount; i++){
        createStar();
    }
}

console.log("Function is functioning");
animateStars();