document.addEventListener("DOMContentLoaded", function() {
    
     const buttons = document.querySelectorAll('button');

     buttons.forEach(button => {
         button.addEventListener('click', function() {
             alert("Vous avez cliqué sur un bouton !");
         });
     });

     // Gestion du formulaire de contact
     const form = document.querySelector('.contact-form');

     if (form) { // Vérifie si le formulaire existe
         form.addEventListener('submit', function(event) {
             event.preventDefault(); // Empêche le rechargement de la page
             alert("Votre message a été envoyé !");
             form.reset(); // Réinitialise le formulaire après l'envoi
         });
     }
});


document.addEventListener("DOMContentLoaded", function() {
    // Animation du texte d'accueil
    const welcomeText = document.querySelector('h1');
    const originalText = welcomeText.innerHTML;
    let animatedText = originalText.split('');
    welcomeText.innerHTML = '';

    animatedText.forEach((letter, index) => {
        setTimeout(() => {
            welcomeText.innerHTML += letter;
        }, 100 * index); // Délai pour chaque lettre
    });

    // Bouton pour afficher un message
    const projectButton = document.querySelector('button');
    projectButton.addEventListener('click', function() {
        alert("Vous allez être redirigé vers mes projets !");
    });

    // Changement de couleur de fond au clic
    document.body.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
