function CollectData() {

var Apartements = document.getElementById("nb_appartments").value;
console.log("Apartements", Apartements);
var Floors = document.getElementById("nb_floors").value;
console.log("Floors", Floors);

AverageApp = Math.ceil(Apartements/Floors);
console.log("Average Appart", AverageApp);




}