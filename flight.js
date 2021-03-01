
const vols = [{
  destination: 'Martinique',
  date_depart: '01/25/2019',
  compagnie_aerienne: 'Ryanair',
  numVol: 'xxxxx',
  prix: '350',
  dureeTrajet: '6'
},
{
  destination: 'Londres',
  date_depart: '07/25/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '150',
  dureeTrajet: '2'
},
{
  destination: 'Paris',
  date_depart: '08/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '50',
  dureeTrajet: '1'
},
{
  destination: 'Mexico',
  date_depart: '09/03/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '1350',
  dureeTrajet: '8'
},
{
  destination: 'Tokyo',
  date_depart: '12/12/2020',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '750',
  dureeTrajet: '14'
},
{
  destination: 'Tokyo',
  date_depart: '12/11/2020',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '850',
  dureeTrajet: '14'
}
];


//Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)
vols.forEach(element => console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet));


//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)

vols.forEach(vol =>  {
  if(vol.dureeTrajet < 7){
    console.log(vol)
  }
  });

//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)

vols.forEach(vol =>  {
  if(vol.destination === "Tokyo" && vol.compagnie_aerienne === "Air france"){
    console.log(vol)
  }
  });


//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france
vols.forEach(vol =>  {
  if(vol.prix > 700 && vol.compagnie_aerienne === "Air france"){
    console.log(vol)
  }
  });

//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures
vols.forEach(vol =>  {
  if (vol.compagnie_aerienne === 'Lufthansa' && vol.prix > 900 && vol.dureeTrajet < 15){
    console.log(vol)
  }
  });

//Appliquer une reduc de 20% sur chaque vol à destination de Tokyo.
vols.forEach(vol =>  {
  if(vol.destination === 'Tokyo'){
    vol.prix = vol.prix * 0.8; 
    console.log(vol)
  }
  });


//Allez voir ce qu'est un JSON ;)
//https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON



