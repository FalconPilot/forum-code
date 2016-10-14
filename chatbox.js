/*
** Intégration de Chatbox
*/

document.addEventListener("DOMContentLoaded", function() {
  // Paramètres ici

  // URL de la Chatbox - La chatbox doit être activée dans les modules !
  var chatbox_url = "http://url_de_votre_forum.forumactif.fr/chatbox";

  // Hauteur de la chatbox
  var cb_height = "400px";

  // Largeur de la chatbox
  var cb_width = "750px";

  // Marge du bas
  var bottom_offset = "5%";

  // URL du bouton de la chatbox
  var btn_url = "url_du_bouton";

  // true = gauche, false = droite
  var cb_left = true;

  // Index Z, à ne modifier qu'en cas de bug de profondeur !
  var z_index = "10000";

  // Code, ne pas toucher !
  var css = ".fp-btn-cb:hover { cursor: pointer; } .fp-frm { transition: 0.2s; }";
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
  box.style.border = "none";

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
        frm.style.left = "-" + cb_width;;
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
