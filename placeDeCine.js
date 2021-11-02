"use strict"

let salle1 = ["dune"];


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
/*
"use strict"

//Afficher le bouton des places

//faire disparaitre les autres
function effacerFilm(){
    document.getElementById("007").style.translate= 0;
    document.getElementById("shang-chi").style.opacity= 0;
    document.getElementById("eva").style.opacity= 0;
    document.getElementById("iWantYou").style.opacity= 0;
    document.getElementById("everyday").style.opacity= 0;
}

// Salles
let salle1 = "dune";
let salle2 = "007";
let salle3 = "shang-chi";
let salle4 = "eva";
let salle5 = "i want you";
let salle6 = "everyday";

//salle 1
function choixFilm() {
    let tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    if (document.getElementById("dune").alt === salle1) {
        salle1 = [];
        for (let i = 0; i < 20; i++) {
            salle1.push("n°" + tab1[i]);

            for (let i = 0; i < salle1.length; i++) {
                if (Math.random() < 0.7) {
                    salle1[i] = ["libre"];
                } else {
                    salle1[i] = ["occupée"];
                }

                salle1[i][1] = "n°" + i;
            }
        }
        effacerFilm();
        console.log(salle1);
       // afficherBouton();
    }
    else if(document.getElementById("007").alt === salle2){
        salle2 = [];
        for (let i = 0; i < 20; i++) {
            salle2.push("n°" + tab1[i]);

            for (let i = 0; i < salle2.length; i++) {
                if (Math.random() < 0.7) {
                    salle2[i] = ["libre"];
                } else {
                    salle2[i] = ["occupée"];
                }

                salle2[i][1] = "n°" + i;
            }
        }
        console.log(salle2);
        // afficherBouton();
    }
    else if(document.getElementById("shang-chi").alt === salle3){
        salle3 = [];
        for (let i = 0; i < 20; i++) {
            salle3.push("n°" + tab1[i]);

            for (let i = 0; i < salle3.length; i++) {
                if (Math.random() < 0.7) {
                    salle3[i] = ["libre"];
                } else {
                    salle3[i] = ["occupée"];
                }

                salle3[i][1] = "n°" + i;
            }
        }
        console.log(salle3);
        // afficherBouton();
    }
    else if(document.getElementById("eva").alt === salle4){
        salle4 = [];
        for (let i = 0; i < 20; i++) {
            salle4.push("n°" + tab1[i]);

            for (let i = 0; i < salle4.length; i++) {
                if (Math.random() < 0.7) {
                    salle4[i] = ["libre"];
                } else {
                    salle4[i] = ["occupée"];
                }

                salle4[i][1] = "n°" + i;
            }
        }
        console.log(salle4);
        // afficherBouton();
    }
    else if(document.getElementById("iWantYou").alt === salle5){
        salle5 = [];
        for (let i = 0; i < 20; i++) {
            salle5.push("n°" + tab1[i]);

            for (let i = 0; i < salle5.length; i++) {
                if (Math.random() < 0.7) {
                    salle5[i] = ["libre"];
                } else {
                    salle5[i] = ["occupée"];
                }

                salle5[i][1] = "n°" + i;
            }
        }
        console.log(salle5);
        // afficherBouton();
    }
    else if(document.getElementById("everyday").alt === salle6){
        salle6 = [];
        for (let i = 0; i < 20; i++) {
            salle6.push("n°" + tab1[i]);

            for (let i = 0; i < salle6.length; i++) {
                if (Math.random() < 0.7) {
                    salle6[i] = ["libre"];
                } else {
                    salle6[i] = ["occupée"];
                }

                salle6[i][1] = "n°" + i;
            }
        }
        console.log(salle6);
        // afficherBouton();
    }
}



function nombrePlace () {

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
    document.getElementById("place").style.display="none";
}


*/
