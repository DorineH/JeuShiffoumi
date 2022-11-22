
var player;
var computer;
var random;
var scoreP = 0;
var scoreC = 0;

player = window.prompt("Choisissez : pierre ou feuille ou ciseaux ?");
player = player.toLowerCase();
document.write("Ton choix : " + player);

random = Math.random();

if(random < 1/3){
	computer = 'pierre';
} 
if(random < 2/3){
	computer = 'feuille';
}
else{
	computer = 'ciseaux';
}

document.write("</br>Choix de l'ordinateur : <stong> " + computer + "</strong></p>");

// Vérifiez si il y a une égalité
if (player == computer){
  // affichez l'égalité
  document.write("</br> Vous etes à égalité");
}
else{
    //  ... vérifiez les différents cas possibles avec 
    // un switch sur la variable computer
switch(computer){
        // cas du choix pierre pour l'ordinateur
        case 'pierre': 
            // si le joueur a choisi feuille
          if(player == 'feuille'){
            document.write("</br> Tu a gagné !!");
            scoreP++;
            //document.write("Score du joueur : " + scoreP + "</br>");
          }
           // sinon c'est qu'il a choisi ciseaux
          else{
            document.write("</br> Tu as perdu :(");
            scoreC++;
          }
        break;
        // cas choix feuille
        case 'feuille':
           // si le joueur a choisi pierre
          if(player == 'pierre'){
            document.write("</br> Tu as perdu :(");
            scoreC++;
          }
           // sinon c'est qu'il a choisi ciseaux
          else{
            document.write("</br> Tu a gagné !!");
            scoreP++;
           // document.write("Score du joueur : " + scoreP + "</br>");
          }
        break;
        // cas du choix ciseaux
        case 'ciseaux':
           // si le joueur a choisi pierre
          if(player == 'pierre'){
            document.write("</br> Tu a gagné !!");
            scoreP++;
          }
           // sinon c'est qu'il a choisi feuille
           else{
            document.write("</br> Tu as perdu :(");
            scoreC++;
           }
        break;
}
}
document.write("</br>Score du joueur : " + scoreP + "</br>");
document.write("Score de l'ordinateur : " + scoreC);

document.addEventListener('DOMContentLoaded', function(){
  var button = document.createElement('button');
  button.type='button';
  button.innerHTML = 'Rejouer';
  button.className = 'btn-styled';
  
  button.onclick = function(){
    
  };

  var container = document.getElementById('container');
  container.appendChild(button);

}, false);