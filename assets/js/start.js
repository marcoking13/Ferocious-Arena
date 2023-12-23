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

    <p class="title_select white font-30 text-center special-elite ">Select Your Character</p>

    <div class="row">

    <div class="col-6 padding-5 border-white-right ">

        <p class="selected_character_p player_color">???</p>

        <img class="selected_character_img"  src = "./assets/imgs/question.png"= accesskey=""/>

        <div class="row width-100 margin-top-15">
            <div class="col-12">
              <p class="stat_p light-orange">Health</p>
              <div class="stat_bar_ light-orange-background"></div>
              <span class="stat_num light-orange float-right">??</p>
            </div>

            <div class="col-12">
              <p class="stat_p red">Attack</p>
              <div class="stat_bar_ red-background"></div>
              <span class="stat_num red float-right">??</p>
            </div>

            <div class="col-12">
              <p class="stat_p light-green">Defense</p>
              <div class="stat_bar_ light-green-background"></div>
              <span class="stat_num light-green float-right">??</p>
            </div>

            <div class="col-12">
              <p class="stat_p light-blue">Speed</p>
              <div class="stat_bar_ light-blue-background"></div>
              <span class="stat_num light-blue float-right">??</p>
            </div>

        </div>

    </div>

    <div class="col-6 padding-5">

        <p class="selected_character_p enemy_color">???</p>

        <img class="selected_character_img"  src = "./assets/imgs/question.png"= accesskey=""/>

        <div class="row width-100 margin-top-15 ">
            <div class="col-12">
              <p class="stat_p light-orange">Health</p>
              <div class="stat_bar_ light-orange-background"></div>
              <span class="stat_num light-orange float-right">??</p>
            </div>

            <div class="col-12">
              <p class="stat_p red">Attack</p>
              <div class="stat_bar_ red-background"></div>
              <span class="stat_num red float-right">??</p>
            </div>

            <div class="col-12">
              <p class="stat_p light-green">Defense</p>
              <div class="stat_bar_ light-green-background"></div>
              <span class="stat_num light-green float-right">??</p>
            </div>

            <div class="col-12">
              <p class="stat_p light-blue">Speed</p>
              <div class="stat_bar_ light-blue-background"></div>
              <span class="stat_num light-blue float-right">??</p>
            </div>

        </div>

    </div>

  </div>

</div>`

var index_container = document.querySelector(".index_container");
var character_selection_container = document.querySelector(".character_selection");
var characters_available = return_available_characters(6,6);

index_container.innerHTML = title_container_html;

var start_button = document.querySelector(".start_name");
var selected_character = document.querySelector(".selected_character");

character_selection_container.innerHTML = renderAllBubbles();
