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
  },
};
