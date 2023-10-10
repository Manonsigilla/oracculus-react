let datas = []

async function init(){
    datas = await getDatas();
    getHoroscope(datas, 1)
    changeTop(datas, 1)
}
init()

async function getDatas(){
    const recup = await fetch ('/fichier.json');
    return await recup.json();
}

function getHoroscope(datas, id) {
        // Trouver un élément
        const Signe = datas.find(el => el.id === id);
        document.querySelector('#date').innerHTML = Signe.Date;
        document.querySelector('#signe').innerHTML = Signe.Signe;
        document.querySelector('#image').src = Signe.Image;
        document.querySelector('#amour').innerHTML = `<span>Amour : </span>${Signe.Amour}`;
        document.querySelector('#travail').innerHTML = `<span>Travail : </span>${Signe.Travail}`;
        document.querySelector('#argent').innerHTML = `<span>Argent : </span>${Signe.Argent}`;
        document.querySelector('#santé').innerHTML = `<span>Santé : </span>${Signe.Santé}`;
        document.querySelector('#famille').innerHTML = `<span>Famille et amis : </span>${Signe.Famille}`;
        document.querySelector('#conseil').innerHTML = `<span>Conseil : </span>${Signe.Conseil}`;
}

function changeTop(datas, id) {
    // signe précédent
    const prev = id <= 1 ? datas.length : id - 1;
    const prevSigne = datas.find(el => el.id === prev);

    const left = document.querySelector('.prev-signe');
    left.innerHTML = `${prevSigne.Signe} <span>${prevSigne.Date} </span>`;
    left.dataset.id = prev;

    // signe suivant
    const next = id >= datas.length ? 1 : id + 1;
    const nextSigne = datas.find(el => el.id === next);

    const right = document.querySelector('.next-signe');
    right.innerHTML = `${nextSigne.Signe} <span>${nextSigne.Date} </span>`;
    right.dataset.id = next;

}
// on gère l'événement au click des flèches de droite et gauche pour changer de signe

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
let index = 1;

arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    index = index >= datas.length ? 1 : index + 1
    getHoroscope(datas, index)
    changeTop(datas, index);
})
arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();
    
    index = index <= 1 ? datas.length : index - 1
    getHoroscope(datas, index)
    changeTop(datas, index);
})

// on gère l'événement sur les éléments du top
const leftHoroscope = document.querySelector('.prev-signe');
leftHoroscope.addEventListener('click', () =>{
    getHoroscope(datas, parseInt(leftHoroscope.dataset.id));
    changeTop(datas, parseInt(leftHoroscope.dataset.id));
})

const rightHoroscope = document.querySelector('.next-signe');
rightHoroscope.addEventListener('click', () =>{

    getHoroscope(datas, parseInt(rightHoroscope.dataset.id));
    changeTop(datas, parseInt(rightHoroscope.dataset.id));
})


const dateDuJour = new Date()
const jour = dateDuJour.getDate().toString().padStart(2, '0')
const mois = (dateDuJour.getMonth() + 1).toString().padStart(2, '0')
const annee = dateDuJour.getFullYear()

const dateFormatee = `${jour}/${mois}/${annee}`
document.querySelector('#dateJour').innerText = `HOROSCOPE DU ${dateFormatee}`