function validName(str) {
  if (!(str.length > 2 && typeof str === "string")) return true;
}
function validDesc(str) {
  if (!(str.length > 8 && typeof str === "string")) return true;
}
function validRel(str) {
  if (!str.length) return true;
}
function validRat(num) {
  if (!(num > 0 && num <= 5)) return true;
}
function validGenre(arr) {
  if (!(arr.length > 0)) return true;
}
function validPlatfor(arr) {
  if (!(arr.length > 0)) return true;
}

module.exports = {
  ab: function (a, b) {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    else return 0;
  },
  ba: function (a, b) {
    if (a.name < b.name) return 1;
    else if (a.name > b.name) return -1;
    else return 0;
  },
  nab: function (a, b) {
    if (a.rating === b.rating) {
      return 0;
    }
    if (a.rating < b.rating) {
      return -1;
    }
    return 1;
  }, 
  nba: function (a, b) {
    if(a.rating === b.rating) {
      return 0; 
    }
    if(a.rating > b.rating) {
      return -1;
    }
    return 1;
  }, 
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
    if (validName(data.name)) errMsgs.name = "Must be more than 3 characters long";
    if (validDesc(data.description))
      errMsgs.description = "Must be more than 9 characters long";
    if (validRel(data.released))
      errMsgs.released = "You must select a release date";
    if (validRat(Number(data.rating)))
      errMsgs.rating = "You must enter a value between 1 and 5";
    if (validGenre(data.genres))
      errMsgs.genres = "You must select at least 1 genre";
    if (validPlatfor(data.platforms))
      errMsgs.platforms = "You must select at least 1 platform";
      
    return errMsgs;
  },
  validator: function (data) {
    let v = false;
    if (!typeof data === "object") return false;
    if (data.name && typeof data.name === "string") v = true;
    else return false;
    if (data.description && typeof data.description === "string") v = true;
    else return false;
    if (data.platforms.length > 0) v = true;
    else return false;
    if (data.genres.length > 0) v = true;
    else return false;
    console.log(v)
    return v;
  },
};