dragElement(document.getElementById(("m1")));
dragElement(document.getElementById(("m2")));
dragElement(document.getElementById(("m3")));
dragElement(document.getElementById(("m4")));
dragElement(document.getElementById(("m5")));

const userResult = JSON.parse(localStorage.getItem(`${localStorage.length}`))


let timer = document.createElement('input') //таймер
timer.className = 'inp'
timer.innerHTML = `<input type="text">`
timer.style.position=`fixed`
timer.style.top='450px'
timer.style.left='0px'
timer.style.color='blue'
timer.style.fontSize='32pt'
timer.style.border='none'
timer.style.width='50px'
timer.style.backgroundColor='rgba(255, 255, 255, 0)';
document.body.prepend(timer)

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

let a=20;
let process = () =>{
    
    
    // document.body.prepend(counter)
     
    time()
    
}
process()

function time(){
    if(a!=0){
        a--
        console.log(a)
        timer.value=a
        document.body.prepend(timer)
        setTimeout(time, 1000)
    }else{
        let final =0;
        if(win1+win2+win3+win4 == 4){
            final=100;
            let a = document.getElementById('myModal');
        a.style.hidden = false;
        a.style.display = "block";
        }else if(win1+win2+win3+win4 == 3){
            final=75;
            let a2 = document.getElementById('myModal2');
        a2.style.hidden = false;
        a2.style.display = "block";
        }else if(win1+win2+win3+win4 == 2){
            final=50;
            let a3 = document.getElementById('myModal3');
        a3.style.hidden = false;
        a3.style.display = "block";
        }else if(win1+win2+win3+win4 == 1){
            final=25;
            let a4 = document.getElementById('myModal4');
        a4.style.hidden = false;
        a4.style.display = "block";
        }else if(win1+win2+win3+win4 == 0){
            final=0;
            let a5 = document.getElementById('myModal5');
        a5.style.hidden = false;
        a5.style.display = "block";
        }
        userResult.level2 = final
        localStorage.setItem(localStorage.length, JSON.stringify(userResult))
        // let again =confirm(`Игра окончена, вы заработали ${final} очков \n Хотите повторить игру??`)
        // if(again==true){
        //     a=20
        //     count=0
        //     process()

        // }else if(again==false){
            
            
        //     // document.body.prepend(counter)
        //     window.location.href = '../index.html'

        // }
    }
    
}

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
var points = 0;
var win1=0, win2=0, win3=0, win4=0;
// const mas = [
//     ["wall", 0, 0],
//     ["roof", 0, 0],
//     ["door", 0, 0],
//     ["window", 0, 0]
// ];

const arr = [0,0,0,0,0,0,0,0,0,0];
let reload = () => {

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
    //1
    if((elmnt.id=="m1" || elmnt.id=="m2")  &&
    arr[3] - 7 < arr[1] &&
    arr[3] + 7 > arr[1] &&
    arr[2]-58 < arr[0]+5 &&
    arr[2]-58 > arr[0]-5 ){
        console.log("cjdgfkj");
        win1=1;
    }else if((elmnt.id=="m1" || elmnt.id=="m2")  &&
    (arr[3] - 7 > arr[1] ||
    arr[3] + 7 < arr[1] ||
    arr[2]-58 > arr[0]+5 ||
    arr[2]-58 < arr[0]-5 )){
        console.log("err");
        win1=0;
    }
    //2
    if((elmnt.id=="m2" || elmnt.id=="m3")  &&
    arr[5] - 7 < arr[3] &&
    arr[5] + 7 > arr[3] &&
    arr[4]-58 < arr[2]+5 &&
    arr[4]-58 > arr[2]-5 ){
        console.log("cjdgfkj2");
        win2=1;
    }else if((elmnt.id=="m2" || elmnt.id=="m3")  &&
    (arr[5] - 7 > arr[3] ||
    arr[5] + 7 < arr[3] ||
    arr[4]-58 > arr[2]+5 ||
    arr[4]-58 < arr[2]-5 )){
        console.log("err");
        win2=0;
    }
    //3
    if((elmnt.id=="m3" || elmnt.id=="m4")  &&
    arr[7] - 7 < arr[5] &&
    arr[7] + 7 > arr[5] &&
    arr[6]-58 < arr[4]+5 &&
    arr[6]-58 > arr[4]-5 ){
        console.log("cjdgfkj3");
        win3=1;
    }else if((elmnt.id=="m3" || elmnt.id=="m4")  &&
    (arr[7] - 7 > arr[5] ||
    arr[7] + 7 < arr[5] ||
    arr[6]-58 > arr[4]+5 ||
    arr[6]-58 < arr[4]-5)){
        console.log("err");
        win3=0;
    }
    //4
    if((elmnt.id=="m4" || elmnt.id=="m5")  &&
    arr[9] - 7 < arr[7] &&
    arr[9] + 7 > arr[7] &&
    arr[8]-58 < arr[6]+5 &&
    arr[8]-58 > arr[6]-5 ){
        console.log("cjdgfkj4");
        win4=1;
    }else if((elmnt.id=="m4" || elmnt.id=="m5")  &&
    (arr[9] - 7 > arr[7] ||
    arr[9] + 7 < arr[7] ||
    arr[8]-58 > arr[6]+5 ||
    arr[8]-58 < arr[6]-5)){
        console.log("err");
        win4=0;
    }
    
    console.log(win1);
    console.log(win2);
    console.log(win3);
    console.log(win4);
    
//     if(win1 == 1 && win2 == 1 && win3 == 1 && win4 ==1){
//         setTimeout(3000);
//         let again =confirm(`Ты собрал матрешку, МОЛОДЕЦ! Хочешь попробовать еще раз?`)
//           if(again==true){
//             location.reload();
      
//           }else if(again==false){
      
//               window.location.href = '../index.html'
      
//           }
//       }
// 

    // if(win1==0){
    //     if(arr[1]<arr[3]<arr[1]+25 && arr[0]<arr[2]<arr[0]+25
    //         && elmnt.id=="m1"){
    //             win1=1;
    //             // elmnt.hidden = true;
    //             points=points+correct;
    //         }else{
    //             points=points+incorrect;
    //         }
    // }else{
    //     points = points+incorrect;
    // }
    
    
  }


   

    

  
  
}


