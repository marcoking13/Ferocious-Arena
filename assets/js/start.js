//
// const game_container = document.querySelector(".game_container");
// var fireball_counters = 0;
// var y_pos = [-5,15];
//
// const FireballEffect = () => {
//
//   if(fireball_counters < y_pos.length){
//     var element = document.createElement("img");
//     element.setAttribute("src","./assets/imgs/fire_ball_start.gif")
//     element.classList.add("fireball_start");
//
//     element.style.top = y_pos[fireball_counters].toString() + "%";
//     fireball_counters ++;
//
//     var interval;
//     var audio = document.querySelector(".fire_sound");
//     audio.play();
//     document.body.append(element);
//
//   }
//
// }
//
// const GenerateStartScreen = async() =>{
//
//
//     EmptyContainer(game_container);
//
//     var start_game_button = document.createElement("p");
//     const start_game_button_text = document.createTextNode("Start Game");
//
//     const html = `
//
//       <div class='start_screen'>
//           <h1 class="app_title title_1"> Royal <strong class="app_title title_2 title_ani_2 "> Arena </strong></h1>
//           <p class="app_subtitle"> <strong class="purple">Can You Defeat All the Fighters? </p>
//       </div>
//
//     `;
//
//     game_container.innerHTML = html;
//
//     var start_screen = document.querySelector(".start_screen");
//
//     await delay(1000);
//
//     start_game_button.append(start_game_button_text);
//     start_game_button.classList.add("start_game");
//
//     start_game_button.addEventListener("click",(e)=>{
//       window.location.assign("./character_selection.html");
//     })
//
//     start_screen.append(start_game_button);
//
//     var title_1 = document.querySelector(".title_1");
//     var subtitle = document.querySelector(".app_subtitle");
//     var start_text = document.querySelector(".start_game");
//
//     setTimeout(()=>{AddClassToElement(title_1,"title_ani_1")},500);
//     setTimeout(()=>{AddClassToElement(subtitle,"subtitle_ani")},1000);
//     setTimeout(()=>{AddClassToElement(start_text,"start_game_ani")},1000);
//
//
// }
//
// if(window.innerWidth >= 680){
//
//   if(fireball_counters >= y_pos.length){
// //    clearInterval(interval)
//
//   }else{
//   //   interval = setInterval(()=>{FireballEffect()},800);
//   }
//
//   GenerateStartScreen();
//
// }



var title_container_html = `
 <div class="title_container">
      <p class="title_name"> Raging Rumble </p>
      <p class="title_description"> Face the Strongest Foes Today! </p>
      <p class="start_name">
         Start Game
      </p>
      <span class="underline_start"></span>
      </div>
      `;


function RenderBubble(i,index,sprite,name){

  return( `
    <div class="character_bubble character_bubble_${index}" index = ${index}>
    <p class="character_name_bubble" index = ${index}>${name}</p>
    <br />
        <img class="character_bubble_img" index = ${index} src = "./assets/imgs/circle_frame_${index}.png" />
        <img  index = ${index} class="character_icon" src =${sprite} />

    </div>
    `)
  }


function renderAllBubbles(){

  var html = ``;

  for(var i = 0; i < characters_available.length;i++){

      html += RenderBubble(i,i+1,characters_available[i].display_image,characters_available[i].name);

  }

  return html;

}

function AnimateBubbles(){

  var bubbles = document.getElementsByClassName("character_bubble");

  for(var i = 0; i < bubbles.length;i++){
    bubbles[i].classList.add("bubble_ani");
    var index = i+1;

    bubbles[i].classList.remove("character_bubble_"+index);
    bubbles[i].classList.add("character_bubble_"+index+"_ani");

  }

}


var selected_box = `
  <div class='row selected_row'>
    <div class="col-3"></div>
  <div class="col-6">
  <p class="title_select"style="color:white;font-size:30px;text-align:center;font-family:'Special Elite'">Select Your Character</p>

    <div class="row">
    <div class="col-6"style="border-right:1px solid white;padding:5%">
        <p class="selected_character_p player_color">Eban The Monster</p>
        <img class="selected_character_img"  src = "./assets/imgs/mrhands_sprites/icon.png"= accesskey=""/>
        <div class="row"style="width:100%;margin-top:15%;">
            <div class="col-12">
              <p class="stat_p light-orange">Health</p>
              <div class="stat_bar_ light-orange-background"></div>
              <span class="stat_num light-orange float-right">90</p>
            </div>
            <div class="col-12">
              <p class="stat_p red">Attack</p>
              <div class="stat_bar_ red-background"></div>
              <span class="stat_num red float-right">90</p>
            </div>
            <div class="col-12">
              <p class="stat_p light-green">Defense</p>
              <div class="stat_bar_ light-green-background"></div>
              <span class="stat_num light-green float-right">90</p>
            </div>
            <div class="col-12">
              <p class="stat_p light-blue">Speed</p>
              <div class="stat_bar_ light-blue-background"></div>
              <span class="stat_num light-blue float-right">90</p>
            </div>
        </div>

    </div>
    <div class="col-6"style="padding:5%">
        <p class="selected_character_p enemy_color">Eban The Monster</p>
        <img class="selected_character_img"  src = "./assets/imgs/mrhands_sprites/icon.png"= accesskey=""/>
        <div class="row"style="width:100%;margin-top:15%;">
            <div class="col-12">
              <p class="stat_p light-orange">Health</p>
              <div class="stat_bar_ light-orange-background"></div>
              <span class="stat_num light-orange float-right">90</p>
            </div>
            <div class="col-12">
              <p class="stat_p red">Attack</p>
              <div class="stat_bar_ red-background"></div>
              <span class="stat_num red float-right">90</p>
            </div>
            <div class="col-12">
              <p class="stat_p light-green">Defense</p>
              <div class="stat_bar_ light-green-background"></div>
              <span class="stat_num light-green float-right">90</p>
            </div>
            <div class="col-12">
              <p class="stat_p light-blue">Speed</p>
              <div class="stat_bar_ light-blue-background"></div>
              <span class="stat_num light-blue float-right">90</p>
            </div>
        </div>

    </div>
</div></div>`

var index_container = document.querySelector(".index_container");
var character_selection_container = document.querySelector(".character_selection");
var characters_available = return_available_characters(6,6);
index_container.innerHTML = title_container_html;
var start_button = document.querySelector(".start_name");
var selected_character = document.querySelector(".selected_character");

character_selection_container.innerHTML = renderAllBubbles();
