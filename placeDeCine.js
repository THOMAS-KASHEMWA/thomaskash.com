"use strict"

function projet () {

    /**  
 * ESSAI 1
 * 
 * code pour créer les places
let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let salle1 = ""
for (let i = 0; i <= 20; i++) {
    salle1 = salle1 + "['A" + tab[i] + "'], "
}


for (let i = 0; i < salle1.length; i++) {
    salle1[i][0] = "libre"
}





//ESSAI 2

let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let salle1 = []
for (let i = 0; i <= 20; i++) {
    salle1.push( 'A' + tab[i])
}

for (let i = 0; i < salle1.length; i++) {
    salle1[i] = ["libre"]
}

/** 
 * ESSAI 3
let tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let salle1 = ""
for (let i = 0; i <= 20; i++) {
    if (i != 20) {
        salle1 = salle1 + "['A" + tab[i] + "'], "
    }
    else {
        salle1 = salle1 + "['A" + tab[i] + "']"
    }
}

**/

    
    
    //variable nbre de place par salle
    let place1 = ["libre"];
    let place2 = ["occupée"];
    let place3 = ["occupée"];
    let place4 = ["libre"];
//variable salle
    let salle1 = [place1, place2, place3, place4];
    let salle2 = [];


//variable nbre de place du client
    let nbrPlace = +prompt("combien de place désirez-vous?")
}


