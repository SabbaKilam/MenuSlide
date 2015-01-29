///////////////////////////////////////////////
/**
// Author: Abbas Abdulmalik
// Creation Date:  1-27-2015
// Revised: 1-29-15
// Note: Short app to slide the front page
// to reveal a dashboard or menu. 
*/
///////////////////////////////////////////////
var openSize = "50rem";
var menuOpen = true;
var menu = O("menu");
var contentDiv = O("content");
//========== Event Handlers ==============
window.onload = init;
window.onresize = resize;
menu.onclick = toggleMenu;
//=========== Functions ===============
function init(){
  resize();
  toggleMenu();
}
//-------------------------
function resize(){
    S(document.documentElement).fontSize = innerWidth/100 + "px";
}
//-------------------------
function toggleMenu(){
  if(menuOpen){
    closeMenu();
  }
  else{
    openMenu();
  }
  ///////helper functions//////
  function closeMenu(){
    S("front").width = "100rem";
    menuOpen = false;
  }
  function openMenu(){
    S("front").width = openSize;
    menuOpen = true;
  }
  //////////////////////////////
}
//------------------------------------




