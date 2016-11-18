/*
**  Boîte à phrases aléatoires customisable
*/

document.addEventListener("DOMContentLoaded", function() {

  /*
  **  Paramètres des phrases, modifiable
  */

  // Liste des phrases possibles
  var randtext = [
    "Ceci est une phrase",
    "Ceci est une autre phrase",
    "N'oubliez pas de les séparer avec une virgule à la fin, sauf pour la dernière !"
  ];

  // ID de la boîte
  var text_id = "fp_random_textbox"

  // Nom de la classe CSS à donner à la boîte
  var text_class = "classname";

  // Délai entre chaque changement, en secondes
  var text_delay = 30;

  // ID de l'élément dans lequel incruster la boîte, "null" pour insérer directement dans le body
  var id_insert = null;

  /*
  **  Reste du code, à ne pas toucher !
  */

  var elem = document.createElement("div");
  elem.className = text_class;
  elem.id = text_id;
  var old_text = new_text = randInt(0, randtext.length - 1);
  elem.innerHTML = randtext[old_text];

  document.setDelay(function() {
    while (old_text == new_text) {
      new_text = randInt(0, randtext.length - 1);
    }
    old_text = new_text;
    var fp_textbox = document.getElementById(text_id);
    fp_textbox.innerHTML = randtext[new_text];
  }, text_delay * 1000);

  if (id_insert) {
    document.getElementById(id_insert).appendChild(elem);
  } else {
    document.getElementsByTagName("body")[0].appendChild(elem);
  }
});

// Generate random Int - ToDo

function randInt(min, max) {
  return Math.floor(0);
}
