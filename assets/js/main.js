/*
    Déclaration des variables
*/

let myNav = document.querySelectorAll('main section:nth-child(4) ul li a');
console.log(myNav);
//

/*
Activer la navigation
*/

// Faire une bouble sur myNav (collection de liens) (ForOf)
for(let item of myNav){
    // item => lien de la nav
    // console.log(item);

    // Capter le clic sur le lien
    item.addEventListener('click', (event) => {
        // Bloquer le comportement naturel de la balise
        event.preventDefault();
        item.classList.remove('active');
        item.classList.add('active');

        // Récupérer la valeur de l'attribut link-data
        const pageName = item.getAttribute('link-data');

        // Ajouter le contenu dans le DOM
        fetchHtmlData(pageName)
    });
}
//

/*
Création d'une fonction fetch
*/

const fetchHtmlData = (page = 'proprietes') => {

    fetch(`./assets/content/${page}.html`)
    // 1er callback: Analyse et traitement du fetch
    .then( rawReponse => {
        // console.log(rawReponse)

        // Renvoer la réponse au format texte
        return rawReponse.text()
    })
    // 2ème callback: Manipuler les données
    .then( textResponse => {
        // Ajouter le contenu dans le DOM            
        document.querySelector('main section:nth-child(4) article').innerHTML = textResponse

        // Envoyer le nom de la page dans le dernier then
        return page
    })

   // 3ème callback:
   .then( page => {
     console.log(page)
})

    // Capter les erreurs
    .catch( error => {
        console.error(error)
    })

}    
//

/*
    Charger le contenu de la page d'accueil
*/

fetchHtmlData()