dragElement(document.getElementById(("m1")));
dragElement(document.getElementById(("m2")));
dragElement(document.getElementById(("m3")));
dragElement(document.getElementById(("m4")));
dragElement(document.getElementById(("m5")));


var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
var win1=0, win2=0, win3=0, win4=0;
var wrong = 0;
// const mas = [
//     ["wall", 0, 0],
//     ["roof", 0, 0],
//     ["door", 0, 0],
//     ["window", 0, 0]
// ];
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
const arr = [0,0,0,0,0,0,0,0,0,0];
var modal = document.getElementById("myModal");
modal.style.hidden = true;
modal.style.display = "none";
var modal2 = document.getElementById("myModal2");
modal2.style.hidden = true;
modal2.style.display = "none";
var modal3 = document.getElementById("myModal3");
modal3.style.hidden = true;
modal3.style.display = "none";
var modal4 = document.getElementById("myModal4");
modal4.style.hidden = true;
modal4.style.display = "none";
var modal5 = document.getElementById("myModal5");
modal5.style.hidden = true;
modal5.style.display = "none";
// let a11 = document.getElementById('a');
// a11.style.hidden = true;
// let a21 = document.getElementById('b');
// a21.style.hidden = true;

//wall-door-roof-window
let reload = () => {
    // let container = document.getElementById(`area`);
    // var position = 0;
    // // for(let i=0; i<=container.children.length; i++){
    // for(const obj of container.children){
    //     var top = Math.floor(Math.random() * 300);
    //     obj.style.top = `${top}px`;
    //     var left = Math.floor(Math.random() * 1000);
    //     obj.style.left = `${left}px`;
    //     pos1 =  obj.style.top;
    //     pos2 =  obj.style.left;
    //     arr[position] = top;
    //     position++;
    //     arr[position] = left;
    //     position++;
    //     console.log(position);

    for(i=0; i<=9; i++){
      arr[i]=Math.floor(Math.random() * 300);
      i++;
      arr[i]=Math.floor(Math.random() * 1000);
    }
   console.log(arr)
   var m1 = document.getElementById("m1");
   m1.style.top = arr[0] + "px";
   m1.style.left = arr[1] + "px";
   var m2 = document.getElementById("m2");
   m2.style.top = arr[2] + "px";
   m2.style.left = arr[3] + "px";
   var m3 = document.getElementById("m3");
   m3.style.top = arr[4] + "px";
   m3.style.left = arr[5] + "px";
   var m4 = document.getElementById("m4");
   m4.style.top = arr[6] + "px";
   m4.style.left = arr[7] + "px";
   var m1 = document.getElementById("m5");
   m5.style.top = arr[8] + "px";
   m5.style.left = arr[9] + "px";

    // for (key in result) {
    //     result[key] = false
    // }
}

function dragElement(elmnt) {
  
  
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    

    
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;

    if(elmnt.id=="m1"){
        arr[0]=elmnt.offsetTop - pos2;
        arr[1]=elmnt.offsetLeft - pos1;
    }else if(elmnt.id=="m2"){
        arr[2]=elmnt.offsetTop - pos2;
        arr[3]=elmnt.offsetLeft - pos1;
    }else if(elmnt.id=="m3"){
        arr[4]=elmnt.offsetTop - pos2;
        arr[5]=elmnt.offsetLeft - pos1;
    }
    else if(elmnt.id=="m4"){
        arr[6]=elmnt.offsetTop - pos2;
        arr[7]=elmnt.offsetLeft - pos1;
    }else if(elmnt.id=="m5"){
        arr[8]=elmnt.offsetTop - pos2;
        arr[9]=elmnt.offsetLeft - pos1;
    }
    console.log(arr)

    if(win1==0){
      if(
        arr[3]<=arr[1] &&
        arr[1]<=arr[3]+22 &&
        arr[2]<=arr[0] &&
        arr[0]<=arr[2]+32 
        // arr[3]<=arr[1]<=arr[3]+22 && arr[2]<=arr[0]<=arr[2]+32
        && elmnt.id=="m1"){
          win1=1;
          elmnt.hidden = true;
          // points=points+correct;
          // console.log(points);
          // console.log(win1);
          console.log("POPAL");
      }else if(elmnt.id=="m1"&&
      (arr[5]<=arr[1] &&
      arr[1]<=arr[5]+37 &&
      arr[4]<=arr[0] &&
      arr[0]<=arr[4]+57) ||
      (arr[7]<=arr[1] &&
      arr[1]<=arr[7]+52 &&
      arr[6]<=arr[0] &&
      arr[0]<=arr[6]+82) ||
      (arr[9]<=arr[1] &&
      arr[1]<=arr[9]+67 &&
      arr[8]<=arr[0] &&
      arr[0]<=arr[8]+107)


      // (arr[5]<=arr[1]<=arr[5]+37 && arr[4]<=arr[0]<=arr[4]+57 ||
      // arr[7]<=arr[1]<=arr[7]+52 && arr[6]<=arr[0]<=arr[6]+82 ||
      // arr[9]<=arr[1]<=arr[9]+67 && arr[8]<=arr[0]<=arr[8]+107)
      ){
        // points=points+incorrect;
        // console.log(points);
        // console.log(win1);
        console.log("ne tuda");
        wrong++;

        myFunction();
      }
    }
    if(win1==1 && win2==0){
      if(
        arr[5]<=arr[3] &&
        arr[3]<=arr[5]+15 &&
        arr[4]<=arr[2] &&
        arr[2]<=arr[4]+25 
        // arr[3]<=arr[1]<=arr[3]+22 && arr[2]<=arr[0]<=arr[2]+32
        && elmnt.id=="m2"){
          win2=1;
          elmnt.hidden = true;
          // points=points+correct;
          // console.log(points);
          console.log("win1 " +win1);
          console.log("win2 " +win2);
          console.log("win3 " +win3);
          console.log("win4 " +win4);
          console.log("POPAL2");
      }
      else if(elmnt.id=="m2"&&
      (arr[7]<=arr[3] &&
      arr[3]<=arr[7]+30 &&
      arr[6]<=arr[4] &&
      arr[4]<=arr[6]+50) ||
      (arr[9]<=arr[3] &&
      arr[3]<=arr[9]+45 &&
      arr[8]<=arr[2] &&
      arr[2]<=arr[8]+75)){
        // points=points+incorrect;
        // console.log(points);
        // console.log(win1);
        wrong++;
        console.log("ne tuda2");
        myFunction();
    }
  }
  
    if(win1==1 && win2==1 && win3==0){
      if(
        arr[7]<=arr[5] &&
        arr[5]<=arr[7]+15 &&
        arr[6]<=arr[4] &&
        arr[4]<=arr[6]+25 
        && elmnt.id=="m3"){
          win3=1;
          elmnt.hidden = true;
          // points=points+correct;
          // console.log(points);
          console.log("win3 " +win3);
          console.log("POPAL3");
      }
      else if(elmnt.id=="m3"&&
      (arr[9]<=arr[5] &&
      arr[5]<=arr[9]+30 &&
      arr[8]<=arr[6] &&
      arr[6]<=arr[8]+50)){
        // points=points+incorrect;
        // console.log(points);
        // console.log(win1);
        wrong++;
        console.log("ne tuda2");
        myFunction();
    }
    }
    if(win1==1 && win2==1 && win3==1 && win4==0){
      
      console.log("win1 " +win1);
      console.log("win2 " +win2);
      console.log("win3 " +win3);
      console.log("win4 " +win4);

      if(
        arr[9]<=arr[7] &&
        arr[7]<=arr[9]+15 &&
        arr[8]<=arr[6] &&
        arr[6]<=arr[8]+25 
        && elmnt.id=="m4"){
          
          elmnt.hidden = true;
          setTimeout(3000);
          win4=1;
          // points=points+correct;
          // console.log(points);
          console.log("win4 " +win4);
          console.log("POPAL3");
      }

    }
    
    //   else if(elmnt.id=="m3"&&
    //   (arr[9]<=arr[5] &&
    //   arr[5]<=arr[9]+30 &&
    //   arr[8]<=arr[4] &&
    //   arr[4]<=arr[8]+50)){
    //     // points=points+incorrect;
    //     // console.log(points);
    //     console.log(win1);
    //     wrong++;
    //     console.log("ne tuda3");
    //     myFunction();
    // }
    
    else{
        // points = points+incorrect;
        console.log("вышел");
        // console.log(win1);
    }
    // console.log("win1"+win1);
    console.log("wrong "+wrong)
  
    fin();
    
  
  // console.log(points);
  // console.log(win1);

   
  }
  function fin() {
    if(win1==1 && win2==1 && win3==1 && win4==1){
      setTimeout(6000);  
      let final =0;
      
      if (wrong ==0){
        final = 100;
        let a = document.getElementById('myModal');
        a.style.hidden = false;
        a.style.display = "block";
      }else if(wrong>=1 && wrong<=3){
        final = 75;
        let a2 = document.getElementById('myModal2');
        a2.style.hidden = false;
        a2.style.display = "block";
      }else if(wrong>=4 && wrong<=7){
        final = 50;
        let a3 = document.getElementById('myModal3');
        a3.style.hidden = false;
        a3.style.display = "block";

      }else if(wrong>=8 && wrong<=10){
        final = 25;
        let a4 = document.getElementById('myModal4');
        a4.style.hidden = false;
        a4.style.display = "block";
      }else{
        final = 0;
        let a5 = document.getElementById('myModal5');
        a5.style.hidden = false;
        a5.style.display = "block";
      }
      // let again =confirm(`МОЛОДЕЦ! Игра окончена, вы заработали ${final} очков `)
      //   if(again==true){
      //       location.reload();
      
      //     }else if(again==false){
      
      //         window.location.href = '../index.html'
      
      //     }
      

    }
  } 
  
  
  
}