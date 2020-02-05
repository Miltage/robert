/*
Capitalize each word in a sentence
*/
module.exports = function(line) {
  var words = line.split(" ");
  var result = "";
  for (var i = 0; i < words.length; i++)
  {
    var first = words[i].charAt(0);
    var rest = words[i].substr(1);
    words[i] = first.toUpperCase() + rest;
  }
  return words.join(" ");
}
