// let area = document.getElementById('area')
dragElement(document.getElementById(("wall")));
dragElement(document.getElementById(("roof")));
dragElement(document.getElementById(("door")));
dragElement(document.getElementById(("window")));
let win1 = 0, win2=0,win3=0,win4=0;
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
// const mas = [
//     ["wall", 0, 0],
//     ["roof", 0, 0],
//     ["door", 0, 0],
//     ["window", 0, 0]
// ];

const arr = [0,0,0,0,0,0,0,0];
//wall-door-roof-window


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
    if(elmnt.id=="wall"){
        // mas[0]=["wall", pos3, pos4]
        // console.log(mas[0])
        arr[0]=elmnt.offsetTop - pos2;
        arr[1]=elmnt.offsetLeft - pos1;
    }else if(elmnt.id=="door"){
        // mas[2]=["door", pos3, pos4]
        // console.log(mas[0])
        arr[2]=elmnt.offsetTop - pos2;
        arr[3]=elmnt.offsetLeft - pos1;
        console.log(arr)
    }else if(elmnt.id=="roof"){
        // mas[2]=["door", pos3, pos4]
        // console.log(mas[0])
        arr[4]=elmnt.offsetTop - pos2;
        arr[5]=elmnt.offsetLeft - pos1;
        console.log(arr)
    }else if(elmnt.id=="window"){
        // mas[2]=["door", pos3, pos4]
        // console.log(mas[0])
        arr[6]=elmnt.offsetTop - pos2;
        arr[7]=elmnt.offsetLeft - pos1;
        console.log(arr)
    }
    //door
    if(arr[1]<arr[3]<arr[1]+60  &&
        arr[0]<arr[2]<arr[0]+40 &&
        elmnt.id=="door"){
        elmnt.style.backgroundColor = "brown"
        win1=1
    }
    if ((arr[3]<=arr[1] || arr[3] >=arr[1]+61
    || arr[2]<=arr[0] || arr[2] >= arr[0]+41)
    &&  elmnt.id=="door"){
        elmnt.style.backgroundColor = "grey"
        win1=0

    }
    //window
    if(arr[5]+35 < arr[7] && arr[7]< arr[5]+95  &&
        arr[6] < arr[4]+42 && arr[6]> arr[4]+20 &&
        elmnt.id=="window"){
        elmnt.style.backgroundColor = "yellow"
        win2=1
    }
    if ((arr[7]<=arr[5]+35 || arr[7]>=arr[5]+95
    || arr[6]>=arr[4]+42 || arr[6]<=arr[4]+20)
    &&  elmnt.id=="window"){
        elmnt.style.backgroundColor = "white"
        win2=0
    }

    //roof
    if(arr[5]+7<arr[1]&& arr[1]<arr[5]+40 && arr[4]+70<arr[0] && arr[4]+100>arr[0]&&  elmnt.id=="roof"){
        // elmnt.style.backgroundColor = "orange"
        win3=1
    }
    if((arr[5]+7>=arr[1] || arr[1]>=arr[5]+40 || arr[4]+70>=arr[0] || arr[4]+100<=arr[0]) && elmnt.id=="roof"){
        // elmnt.style.backgroundColor = "grey"
        win3=0
    }


   
    console.log(arr)
    console.log("done")
    
    // if(document.getElementById(("window").pos1)>document.getElementById(("roof").pos1)){
    //             fin++
    //             console.log(fin)
    //     }
    //     else{
    //         fin--
    //         console.log(fin)
    //     }
    if(win1 ==1 && win2 == 1 && win3 == 1){
      setTimeout(3000);
      let again =confirm(`Ты построил дом, МОЛОДЕЦ! Хочешь попробовать еще раз?`)
        if(again==true){
          location.reload();
    
        }else if(again==false){
    
            window.location.href = '../index.html'
    
        }
    }
    
  }

  
  
}

// do {
//     if(
//         document.getElementById(("window").pos1)>document.getElementById(("roof").pos1)
//         ){
//         fin++
//         console.log(fin)
//     }
// } while (fin!=5)

