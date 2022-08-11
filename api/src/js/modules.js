module.exports = {
  aB: function (a, b) {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    else if (a.toLowerCase() < b.toLowerCase()) return -1;
    else return 0;
  },
  validator: function (data) {
    let v = false;
    if (!typeof data === "object") return false;
    if (data.name && typeof data.name === "string") v = true;
    else return false;
    if (data.description && typeof data.description === "string") v = true;
    else return false;
    //if (game.platforms.length > 0) v = true; else return false
    if (data.image && typeof data.image === "string") v = true;
    else return false;
    //if (game.genres.length > 0) v = true; else return false
    return v;
  }
  // pagesCol: async function (url, numPages) {
    
    
  //   if (numPages === 0) {

  //       // ESTO VA A SER LA SALIDA DE LA FUNCION

  //       return ("array con lo que necesite")


  //   }


    
    
  //   axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=3`)


  //   return cuentaAtras(numPages + 1);

  // }
};

// function cuentaAtras(numero) => {
//     
//     if (numero === 0) {
//         return;
//     }
//     

//     return cuentaAtras(numero - 1);
// };


// console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1


// function cuentaAtras(numPages) {
//     let pages = 1  

//     if (numero === 0) {
//         return ;
//     }

//     axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${numPages}`)

//     return cuentaAtras(numPages + 1);
// };


// console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1