document.addEventListener("DOMContentLoaded", function () {
    const nuageContainer = document.getElementById("nuage-mots");

    const mots = ["Curieux", "Rigoureux", "Passionné", "Autonome", "Créatif", 
                  "Innovant", "Analytique", "Esprit d'équipe", "Persévérant", 
                  "Polyvalent", "Motivé", "Ingénieux", "Logique", "Réactif"];

    function creerMot(mot) {
        let span = document.createElement("span");
        span.className = "nuage-mot";
        span.innerText = mot;

        let maxX = nuageContainer.clientWidth - 100; // Évite les bords
        let maxY = nuageContainer.clientHeight - 40; // Évite les bords

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        span.style.left = `${x}px`;
        span.style.top = `${y}px`;

        nuageContainer.appendChild(span);

        setInterval(() => {
            let newX = Math.random() * maxX;
            let newY = Math.random() * maxY;
            span.style.left = `${newX}px`;
            span.style.top = `${newY}px`;
        }, 3000 + Math.random() * 2000);
    }

    mots.forEach(mot => creerMot(mot));
});
