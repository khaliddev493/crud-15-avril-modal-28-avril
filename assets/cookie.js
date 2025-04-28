let cookie =document.cookie="nom=nougaoui";
let paragraphe = document.querySelector('p');
paragraphe.innerHTML =`          ${cookie.nom}
`;