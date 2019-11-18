// fonctionnalité 1 - footer
function footer() {
  var footer = document.querySelector("footer");
//  console.log(footer);
  return footer
}

var i = 0; // initialisatin du compteur

footer().addEventListener("click", function(){
  console.log("CLIC !");
  i++;
  console.log("ceci est le n° :" + i);
});


// fonctionnalité 2 - Hamburger menu
function navbarHeader() {
  var navbarHeader = document.getElementById("navbarHeader") ;
  return navbarHeader
}
// console.log(navbarHeader);

function navbarToggler() {
  var navbarToggler = document.getElementsByClassName("navbar-toggler");
  return navbarToggler[0]
}

navbarToggler().addEventListener("click", function(){
  navbarHeader().classList.toggle("collapse");
});


// fonctionnalité 3 - bouton Edit rouge
function firstCard(){
  var firstCard = document.getElementsByClassName("col-md-4");
  return firstCard[0]
}
// console.log(firstCard());

function btnEditFirst() {
  var btnEditFirst = document.getElementsByClassName("btn-outline-secondary");
  return btnEditFirst[0]
}
// console.log(btnEdit());

btnEditFirst().addEventListener("click", function(){
  firstCard().getElementsByClassName("card-text")[0].style.color = "red";
});


// fonctionnalité 4 - bouton Edit vert
function secondCardText(){
  var secondCard = document.getElementsByClassName("col-md-4");
  var secondCardText = secondCard[1].getElementsByClassName("card-text")[0];
  return secondCardText;
}

function btnEditSecond(){
  var btnEditSecond = document.getElementsByClassName("btn-outline-secondary");
  return btnEditSecond[1];
}

btnEditSecond().addEventListener("click", function(){
  if (secondCardText().style.color === "green") {
    secondCardText().style.color = "" ;
  }
  else {
    secondCardText().style.color = "green";
  }
});

// fonctionnalité 5 - disable link
function selLink(){
  var links = document.querySelector("link");
  return links;
}

function selectNavbar(){
  var navbar = document.querySelector("header");
  return navbar;
}

selectNavbar().addEventListener("dblclick", function(){
    if (selLink().disabled == false) {
      selLink().disabled = true ;
    }
    else {
      selLink().disabled = false ;
    }
});

// fonctionnalité 6 - View
function selCard(){
  var allCards = document.getElementsByClassName("card-text");
  return allCards;
};

function btnView() {
  var btnView = document.getElementsByClassName("btn-success");
  return btnView;
};

function imgOne(){
  var imgOne = document.getElementsByClassName("card-img-top");
  return imgOne;
}

for (let i = 0; i < selCard().length; i++ ) {
  btnView()[i].addEventListener("mouseover", function(){

    selCard()[i].classList.toggle("collapse");

    if (imgOne()[i].style.width == "") {
      imgOne()[i].style.width = "20%";
    }
    else {
      imgOne()[i].style.width = "";
    };
   });
 }

 // fonctionnalité 7 - bouton gris
