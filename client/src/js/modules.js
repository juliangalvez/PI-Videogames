function validName(str) {
    if (!(str.length > 2 && typeof str === "string")) return true;
}
function validDesc(str) {
    if (!(str.length > 8 && typeof str === "string")) return true;
}
function validRel(str) {
    if (!(str.length)) return true;
}
function validRat(num) {
    if (!((num >= 0 && num <= 5))) return true;
}

module.exports = {
  pf: [
    "Android",
    "iOS",
    "Nintendo Switch",
    "PC",
    "PlayStation",
    "PlayStation 2",
    "PlayStation 3",
    "PlayStation 4",
    "PlayStation 5",
    "SNES",
    "Wii",
    "Wii U",
    "Xbox",
    "Xbox 360",
    "Xbox One",
    "Xbox Series S/X",
  ],
  validate: function validate(data) {
    let errMsgs = {};
    if (validName(data.name)) errMsgs.name = "You must write a name";
    if (validDesc(data.description)) errMsgs.description = "You must write a description"; 
    if (validRel(data.released)) errMsgs.released = "You must select a release date"; 
    if (validRat(data.rating)) errMsgs.rating = "You must enter a value between 1 and 5"; 
    return errMsgs;
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

};

// export function aB(a, b) {
//   if (a.toLowerCase() > b.toLowerCase()) return 1;
//   else if (a.toLowerCase() < b.toLowerCase()) return -1;
//   else return 0;
// }


