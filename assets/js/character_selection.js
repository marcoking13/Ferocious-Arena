
const RenderCharacterSelect = (index,character,isPlayer) => {

  var classy = isPlayer ? "player_select" : "enemy_select";
  var st = "col-6  divider-right "+classy+" character_index";
  var standard = 300;
  var health_bar_width = Math.floor(character.stats.health.stat / standard * 50);
  var attack_bar_width = Math.floor(character.stats.attack.stat / standard * 50);
  var defense_bar_width = Math.floor(character.stats.defense.stat / standard * 50);
  var speed_bar_width = Math.floor(character.stats.speed.stat / standard * 50);



  return(

      `
       <div class="${st}" index = ${index}>
        <img class="selected_character_img"  src = ${character.display_image}  accesskey=""/>

              <p class="selected_character_p player_color">${character.name}</p>
              <div class="row margin-top-15 width-100">
                  <div class="col-12">
                    <p class="stat_p light-orange">Health</p>
                    <div class="stat_bar_ light-orange-background"style = "width:${health_bar_width}%"></div>
                    <span class="stat_num light-orange float-right">${character.stats.health.stat}</p>
                  </div>
                  <div class="col-12">
                    <p class="stat_p red">Attack</p>
                    <div class="stat_bar_ red-background"style = "width:${attack_bar_width}%"></div>
                    <span class="stat_num red float-right">${character.stats.attack.stat}</p>
                  </div>
                  <div class="col-12">
                    <p class="stat_p light-green">Defense</p>
                    <div class="stat_bar_ light-green-background"style = "width:${defense_bar_width}%"></div>
                    <span class="stat_num light-green float-right">${character.stats.defense.stat}</p>
                  </div>
                  <div class="col-12">
                    <p class="stat_p light-blue">Speed</p>
                    <div class="stat_bar_ light-blue-background"style = "width:${speed_bar_width}%"></div>
                    <span class="stat_num light-blue float-right">${character.stats.speed.stat}</p>
                  </div>
              </div>

          </div>
          `
  );
}

var character_bubbles = document.getElementsByClassName("character_bubble");
var start_button_container =  document.querySelector(".start_button_container");
var selected_character_container = document.querySelector(".selected_character");
var isOn = false;

var RenderStartButton = () => {
  if(isOn){

    start_button_container.innerHTML =  `<button class="btn start_fight_button">Start Game</button>`
    var start_fight = document.querySelector(".start_fight_button");
    SaveCharacters(character_selected,random_opponent);
    console.log(character_selected,random_opponent);
    start_fight.addEventListener("click",()=>{window.location.assign("/fight")});
  }
}

const RenderSelectBox = (chosen_index,chosen_character,random_index,random_opponent) =>{



    var selected_box =
    `
    <div class='row selected_row'>
      <div class="col-3"></div>
    <div class="col-6">
    <p class="title_select">Select Your Character</p>

      <div class="row">
      ${RenderCharacterSelect(chosen_index,chosen_character,true)}
      ${RenderCharacterSelect(random_index,random_opponent,false)}
  </div>
  </div>`

  selected_character.innerHTML = selected_box;


}
var character_selected;
var random_opponent;

function AddEventToBubble(){

  for(var i =0; i <character_bubbles.length;i++){

    character_bubbles[i].addEventListener("click",(e)=>{

      var target = e.target;

      var index = e.target.getAttribute("index");
      character_selected = characters_available[index - 1];

      var random_index = Math.floor(Math.random() * characters_available.length);
      random_opponent = characters_available[random_index];

      for(var i =0; i <character_bubbles.length;i++){
        character_bubbles[i].classList.remove("active_bubble");
        character_bubbles[i].classList.remove("active_bubble_player");

      }

      RenderSelectBox(index,character_selected,random_index,random_opponent);

      character_bubbles[index - 1].classList.add("active_bubble_player");
      character_bubbles[random_index].classList.add("active_bubble");

      var selected_player = document.querySelector(".player_select");
      var selected_enemy = document.querySelector(".enemy_select");

      var character_image = selected_player.firstChild.nextSibling;
      var enemy_image = selected_enemy.firstChild.nextSibling;

      AnimateCharacter(character_image,false,character_selected.animation_sheet.idle,300);
      AnimateCharacter(enemy_image,true,random_opponent.animation_sheet.idle,300);

      isOn = true;

      RenderStartButton();

    });

  }

}


start_button.addEventListener("click",()=>{

  index_container.innerHTML = "";
  AnimateBubbles();
  selected_character.innerHTML = selected_box;
  AddEventToBubble();

});
