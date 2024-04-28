//Je déclare un tableau "cards" qui contient mes cartes (le nom de chaque carte apparait 2 fois) 
const cards = ['frog', 'frog', 'guinea-pig', 'guinea-pig', 'jaguar', 'jaguar', 'peacock', 'peacock', 'raccoon', 'raccoon', 'squirrel', 'squirrel', 'toucan', 'toucan', 'whale', 'whale'];
//J'initialise un compteur de coup "tryCount" à 0 et j'affiche la valeur dans le html (#counter) 
let tryCount = 0;
document.getElementById('counter').innerHTML = '0';
//J'initialise un compteur de clic "clicCount" à 0 
let clicCount = 0;
//J'initialise les variables "firstCard" et "secondCard" avec une valeur vide, elles contiendront le nom des cartes cliquées (selon le tableau)
let firstCard = '';
let secondCard = '';
//J'initialise les variables "firstId" et "secondId" qui contiendront la valeur de l'id de l'img cliquée par l'utilisateur
let firstId = '';
let secondId = '';
//J'initialise les variables "firstIdNumber" et "secondIdNumber" qui contiendront la valeur du numéro de l'id de l'img cliquée par l'utilisateur
let firstIdNumber = 0;
let secondIdNumber = 0;
//Je déclare les constantes qui seront utilisées pour modifier les src des img
const path = 'assets/img/';
const extension = '.jpg';


//Je déclare une fonction qui mélange mon tableau (shuffleArray)
function shuffleArray() {
    // https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
    cards.sort(() => Math.random() - 0.5);
}


//Au chargement de la page je mélange mon tableau
shuffleArray();
console.log(cards);

//Au clic de l'utilisateur sur une carte :
document.querySelector('#boardgame').addEventListener('click', function (e) {
    // - j'incrémente mon compteur de clic "clicCount"
    clicCount++;
    console.log(clicCount)
    //console.log(e.target); //e.target donne l'img cliquée
    // - si la valeur de "clicCount" vaut 1 alors
    if (clicCount == 1) {
        //      - je récupère l'id de la 1ère carte cliquée dans "firstId" 
        firstId = e.target.id;
        //      - je stock le numéro de l'id dans "firstIdNumber" (le numéro de l'id permettra d'aller chercher la valeur dans le tableau) 
        firstIdNumber = firstId.split('-')[1];
        //      - j'attribue à "firstCard" la valeur de l'index -1 du tableau (nom de la carte)
        firstCard = cards[firstIdNumber - 1];
        //      - je remplace la src de l'img cliquée par la carte du tableau "firstCard"
        document.getElementById(firstId).src = path + firstCard + extension;
    } else if (clicCount == 2) {
        // - sinon si "clicCount" vaut 2 alors
        //      - j'incrémente mon compteur de coup "tryCount"
        tryCount++;
        //      - je récupère l'id de la 2ème carte cliquée dans "secondId" 
        secondId = e.target.id;
        //      - je stock le numéro de son id dans "secondIdNumber"
        secondIdNumber = secondId.split('-')[1];
        //      - j'attribue à "secondCard" la valeur de l'index -1 du tableau (nom de la carte)
        secondCard = cards[secondIdNumber - 1];
        //      - je remplace la src de l'img cliquée par la carte du tableau "secondCard"
        document.getElementById(secondId).src = path + secondCard + extension;
        // Après un délai de 2 secondes (pour laisser le temps de voir les 2 cartes)
        setTimeout(() => {
            //      - je compare les 2 éléments de mon tableau
            //          - si "firstCard" et "secondCard" sont différents alors
            if (firstCard != secondCard) {
                //              - je remplace la src des img cliquées (firstId / secondId) par 'backcard'
                document.getElementById(firstId).src = path + 'backcard' + extension;
                document.getElementById(secondId).src = path + 'backcard' + extension;
            }
            //      - je réinitialise "clicCount" à 0
             clicCount = 0;
            //      - je réinitialise "firstCard" et "secondCard" à ''
            firstCard = '';
            secondCard = '';
            //      - je réinitialise "firstId" et "secondId" à ''
            firstId = '';
            secondId = '';
            //      - je réinitialise "firstIdNumber" et "secondIdNumber" à 0
            firstIdNumber = 0;
            secondIdNumber = 0;
        }, 2000);
    }
});




//Au clic sur le bouton "rejouer" je mélange mon tableau


//Reste à afficher tryCount, afficher la modale de fin de partie, rendre fonctionnel le btn rejouer, améliorer le design et les fonctionnalités (? ajouter une consigne, un compteur de victoires, une limite de coup pour gagner, des stat...?)