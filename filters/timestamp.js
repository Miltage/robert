/*
  A simple ISO timestamp for Nunjucks
*/
module.exports = function (date) {

  function pz(v) {
    if (v < 10)
      return "0" + v;
    else
      return v;
  }

  let timestamp = new Date(date);
  return timestamp.getFullYear() + "-" + pz(timestamp.getMonth() + 1) + "-" + pz(timestamp.getDate())
}
