// dragElement(document.getElementById(("m1")));
// dragElement(document.getElementById(("m2")));
// dragElement(document.getElementById(("m3")));
// dragElement(document.getElementById(("m4")));
// dragElement(document.getElementById(("m5")));


var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

var win1=0, win2=0, win3=0, win4=0;


const arr = [4,2,3,1,6];
const win = [0,0,0,0,0];
let fin=0;

var modal = document.getElementById("myModal");
modal.style.hidden = true;
modal.style.display = "none";

//wall-door-roof-window

// document.getElementById('link').onclick = function() 
//         {
//             document.getElementById('m1').style.backgroundImage = "url('../img/m4.png')";
//             // document.getElementById('///').backgroundAttachment = "fixed";
//             return false;
//         }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

function change(c){
    let r = getRandomInt(1, 7);
    console.log("rand "+r )
    var id;
    switch(c){
        case 0:
            id = 'm1'
            break;
        case 1:
            id = 'm2';
            break;
        case 2:
            id = 'm3';
            break;
        case 3:
            id = 'm4';
            break;
        case 4:
            id = 'm5';
            break;
    }
    let a = document.getElementById(id);
    switch(r){
        case 1:
            a.style.backgroundImage = "url('../img/m1.png')";
            break;
        case 2:
            a.style.backgroundImage = "url('../img/m2.png')";
            break;
        case 3:
            a.style.backgroundImage = "url('../img/m3.png')";
            break;
        case 4:
            a.style.backgroundImage = "url('../img/m4.png')";
            break;
        case 5:
            a.style.backgroundImage = "url('../img/m5.png')";
            break;
        case 6:
            a.style.backgroundImage = "url('../img/m6.png')";
            break;
    }
    
    if(arr[c]==r){
        win[c]=1;
    }else{
        win[c]=0;
    }
    console.log(arr)
    console.log(win)

    if(win[0]==1 && win[1]==1 && win[2]==1 && win[3]==1
        && win[4]==1){
            let a = document.getElementById('myModal');
            a.style.hidden = false;
            a.style.display = "block";
        //     let again =confirm(`Игра окончена, ты лучше всех!!!!`)
        // if(again==true){
        //     // a=20
        //     // count=0
        //     // process()

        // }else if(again==false){
            
        //     // document.body.prepend(counter)
        //     window.location.href = '../index.html'

        // }
            



        }
    
    
}


























// не надо!!!!

// function dragElement(elmnt) {
  
  
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    

    
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;

//     if(elmnt.id=="m1"){
//         arr[0]=elmnt.offsetTop - pos2;
//         arr[1]=elmnt.offsetLeft - pos1;
//     }else if(elmnt.id=="m2"){
//         arr[2]=elmnt.offsetTop - pos2;
//         arr[3]=elmnt.offsetLeft - pos1;
//     }else if(elmnt.id=="m3"){
//         arr[4]=elmnt.offsetTop - pos2;
//         arr[5]=elmnt.offsetLeft - pos1;
//     }
//     else if(elmnt.id=="m4"){
//         arr[6]=elmnt.offsetTop - pos2;
//         arr[7]=elmnt.offsetLeft - pos1;
//     }else if(elmnt.id=="m5"){
//         arr[8]=elmnt.offsetTop - pos2;
//         arr[9]=elmnt.offsetLeft - pos1;
//     }
//     console.log(arr)

//     if(win1==0){
//         if(arr[1]<arr[3]<arr[1]+25 && arr[0]<arr[2]<arr[0]+25
//             && elmnt.id=="m1"){
//                 win1=1;
//                 // elmnt.hidden = true;
//                 points=points+correct;
//             }else{
//                 points=points+incorrect;
//             }
//     }else{
//         points = points+incorrect;
//     }
    
    
//   }
//   console.log(points);
//     console.log(win1);
// }