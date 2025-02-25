document.addEventListener("DOMContentLoaded", function () {
    const nuageContainer = document.getElementById("nuage-mots");

    const mots = ["Curieux", "Rigoureux", "Passionné", "Autonome", "Créatif", "Innovant", "Analytique", "Esprit d'équipe", "Persévérant", "Polyvalent"];

    function creerMot(mot) {
        let span = document.createElement("span");
        span.className = "nuage-mot";
        span.innerText = mot;

        // Position aléatoire
        let x = Math.random() * 80;
        let y = Math.random() * 80;

        span.style.transform = `translate(${x}px, ${y}px)`;
        span.style.opacity = Math.random() * 0.5 + 0.5; // Entre 0.5 et 1

        nuageContainer.appendChild(span);

        // Animation aléatoire
        setInterval(() => {
            let newX = Math.random() * 80;
            let newY = Math.random() * 80;
            span.style.transform = `translate(${newX}px, ${newY}px)`;
            span.style.opacity = Math.random() * 0.5 + 0.5;
        }, 2000 + Math.random() * 2000);
    }

    mots.forEach(mot => creerMot(mot));
});

