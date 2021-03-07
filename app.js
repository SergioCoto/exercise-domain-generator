let pronoun = ['the', 'our', 'pases'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'bocacom'];
let extension = ['com', 'es', 'net']

let largo1 = pronoun.length;
let largo2 = adj.length;
let largo3 = noun.length;
let largo4 = noun.length;




for (let j = 0; j < largo1; j++) {
    for (let m = 0; m < largo2; m++) {
        for (let k = 0; k < largo3; k++) {
            let nombre = pronoun[j] + adj[m] + noun[k]
            for (let p = 0; p < largo3; p++) {
                //esta parte busca el final del nombre
                let largoext = extension[p].length;
                let res = nombre.substring(nombre.length - largoext, nombre.length);

                               if (res===extension[p]){
                                  nuevores=nombre.substring(0, nombre.length - largoext)+"."+extension[p];
                                    console.log(nuevores)
                                } else {
                                    console.log(nombre+"."+extension[p]);
                                }               
                
                //esta parte hace el replace si viene en cualquier parte del nombre
                if (nombre.includes(extension[p]) === true) {
                    
                    let nuevonombre = nombre.replace(extension[p], "");
                    console.log(nuevonombre+"."+extension[p])
                } else {
                    console.log(nombre+"."+extension[p])
                }
                
            }
        }
    }
}  
