"use strict"

let salle1 = ["dune"];
let placeMax = 20;

function dune(){
    let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let i = 0; i < 20; i++) {
        salle1.push( "n°" + tab[i]);

        for (let i = 0; i < salle1.length; i++) {
            if (Math.random() < 0.7){
                salle1[i] = ["libre"];
            }
            else {
                salle1[i] = ["occupée"];
            }

            salle1[i][1]="n°" + i;
        }
    }
    console.log(salle1);
}

console.log(salle1);
function projet () {

//variable nbre de place du client et choix du film
    let nbrPlace = +prompt("combien de place désirez-vous?");

//donner les places
    let pLibre=0;
    let vosPlaces = [];
        for (let i = 1; i < nbrPlace + 1; i++) {

            for (let i=0; i < salle1.length; i++)
                if (salle1[i][0] === "libre"){
                    pLibre++;
                }

            if (nbrPlace>pLibre){
                alert("Il reste "+pLibre+" disponible(s)");
                break
            }


             else if (salle1[i][0] === "libre") {
                console.log("Voici vos numéros de place: " + salle1[i][1]);
                vosPlaces.push(salle1[i][1]);
                salle1[i][0] = "occupée";

            } else if (salle1[i][0] === "occupée") {
                nbrPlace = nbrPlace + 1;
            }

        }
    alert("Voici vos numéros de place: " + vosPlaces);
}
