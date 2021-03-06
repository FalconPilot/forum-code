/*
**  Intégration de Chatbox
**
**  Par défaut, le code est prévu pour charger des chatbox Forumactif.
**  Cependant, il est possible de charger n'importe quel type de chatbox
**  disposant d'une URL qui lui est propre.
**
**  La classe du cadre est "fp-frm".
*/

document.addEventListener("DOMContentLoaded", function() {

  /*
  **  Paramètres de la chatbox, modifiables
  */

  // URL de la Chatbox - La chatbox doit être activée dans les modules !
  var chatbox_url = "http://url_de_votre_forum.forumactif.fr/chatbox";

  // Hauteur de la chatbox
  var cb_height = "400px";

  // Largeur de la chatbox
  var cb_width = "750px";

  // Marge du bas
  var bottom_offset = "5%";

  // Largeur de la bordure, en px
  var border_width = "0px";

  // Style de la bordure
  var border_style = "solid";

  // Couleur de la bordure
  var border_color = "transparent";

  // URL du bouton de la chatbox
  var btn_url = "url_du_bouton";

  // true = gauche, false = droite
  var cb_left = true;

  // Temps de transition, en secondes
  var slide_time = "0.2s";

  // Index Z, à ne modifier qu'en cas de bug de profondeur !
  var z_index = "10000";

  /*
  **  Reste du code, ne pas toucher ! (À vos risques et périls)
  */

  var css = ".fp-btn-cb:hover { cursor: pointer; } .fp-frm { transition: " + slide_time + "; }";
  var style = document.createElement("style");
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName("head")[0].appendChild(style);

  var elem  = document.createElement("div");
  var box   = document.createElement("iframe");
  var cbtn  = document.createElement("img");

  box.src = chatbox_url;
  box.style.width = cb_width;
  box.style.height = cb_height;
  box.style.border = border_width + " " + border_style + " " + border_color;
  box.style.boxSizing = "border-box";

  cbtn.src = btn_url;
  cbtn.className = "fp-btn-cb";

  elem.className = "fp-frm";
  elem.id = "fp-close";
  if (!cb_left) {
    elem.appendChild(cbtn);
  }
  elem.appendChild(box);
  if (cb_left) {
    elem.appendChild(cbtn)
  }
  elem.style.zIndex = z_index;

  cbtn.addEventListener("click", function() {
    var frm = document.getElementsByClassName("fp-frm")[0];
    if (frm.id == "fp-close") {
      if (cb_left) {
        frm.style.left = "0";
      } else {
        frm.style.right = "0";
      }
      frm.id = "fp-open";
    } else {
      if (cb_left) {
        frm.style.left = "-" + cb_width;
      } else {
        frm.style.right = "-" + cb_width;
      }
      frm.id = "fp-close";
    }
  });

  elem.style.position = "fixed";
  elem.style.bottom = bottom_offset;
  if (cb_left) {
    elem.style.left = "-" + cb_width;
  } else {
    elem.style.right = "-" + cb_width;
  }
  document.getElementsByTagName("body")[0].appendChild(elem);
});

/*
**  Codé par FalconPilot, https://github.com/FalconPilot/forum-code
*/
