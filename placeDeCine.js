// "use strict"

// function projet () {

//     /**  
//  * ESSAI 1
//  * 
//  * code pour créer les places
// let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let salle1 = ""
// for (let i = 0; i <= 20; i++) {
//     salle1 = salle1 + "['A" + tab[i] + "'], "
// }


// for (let i = 0; i < salle1.length; i++) {
//     salle1[i][0] = "libre"
// }





// //ESSAI 2

// let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let salle1 = []
// for (let i = 0; i <= 20; i++) {
//     salle1.push( 'A' + tab[i])
// }

// for (let i = 0; i < salle1.length; i++) {
//     salle1[i] = ["libre"]
// }

// /** 
//  * ESSAI 3
// let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let salle1 = ""
// for (let i = 0; i <= 20; i++) {
//     if (i != 20) {
//         salle1 = salle1 + "['A" + tab[i] + "'], "
//     }
//     else {
//         salle1 = salle1 + "['A" + tab[i] + "']"
//     }
// }

// **/

    
    
//     //variable nbre de place par salle
//     let place1 = ["libre"];
//     let place2 = ["occupée"];
//     let place3 = ["occupée"];
//     let place4 = ["libre"];
// //variable salle
//     let salle1 = [place1, place2, place3, place4];
//     let salle2 = [];


// //variable nbre de place du client
//     let nbrPlace = +prompt("combien de place désirez-vous?")
// }
"use strict"

let salle1 = ["dune"];

function dune(){

    let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    for (let i = 0; i <= 20; i++) {
        salle1.push( "n°" + tab[i]);
    }
    console.log(salle1);
    for (let i = 0; i < salle1.length; i++) {
       if (Math.random() < 0.5){
           salle1[i] = ["libre"];
       }
       else {
           salle1[i] = ["occupée"];
       }

        salle1[i][1]="n°" + i;
    }

}

console.log(salle1);
function projet () {

//variable nbre de place du client et choix du film
    let nbrPlace = +prompt("combien de place désirez-vous?");

//donner les places
    for (let i = 1; i < nbrPlace + 1; i++) {
        if (salle1[i][0] === "libre") {
            console.log("Voici vos numéros de place: " + salle1[i][1]);
            salle1[i][0] = "occupée";
        }
       else if(salle1[i][0] === "occupée"){
            nbrPlace = nbrPlace + 1;
            continue
        }
       else if(salle1[i][0] !== "libre" || salle1[i][0] !== "occupée"){
            alert ("Désolé, il n'y a plus de place!")
        }
    }
    console.log(salle1);
}
