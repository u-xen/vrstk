let russianVersion = [
    'Привычка - вторая натура',
    'Заметьте хорошо!',
    'Беда не приходит одна',
    'Через тернии к звёздам'
]

let latinVersion = [
    'Consuetudo est altera natura',
    'Nota bene',
    'Nulla calamitas sola',
    'Per aspera ad astra'
]

let counter = 4
let count = 0;


function addRow(){
    if (counter == 0){
        alert('Фразы закончились');
        document.getElementById(`content-button`).hidden = true
    }
    else {
        let list = document.getElementById(`list`)
        let li = document.createElement("li")
        
        
        list.appendChild(li)
        counter--
        li.innerHTML=latinVersion[counter]
        let ul = document.createElement("ul")
        li.appendChild(ul)
        let li2 = document.createElement("li")
        ul.appendChild(li2)
        
        li2.innerHTML=russianVersion[counter]
        
        // list.appendChild(ol)
        
        if(counter%2!=0){
            li.style.backgroundColor = '#FFFACD'
            // li.classList.add("class1");
        }else{
            li.style.backgroundColor = '#DDA0DD'
            // li.classList.add("class2");
        }
    }
  }
  function repaint(){
    // let li = document.getElementsByClassName("class1")
    // li.classList.replace("class1","class3");
    // console.log(li)


    
    let li = document.getElementById(`list`).getElementsByTagName(`li`)
    // for(let i=0; i<li.length; i++){
    //     let li2 = document.getElementsByTagName('li')
    // }
    // let ul = getElementsByTagName(`ul`)
    console.log(li)
    // let li2 = document.getElementById(`ul`).getElementsByTagName(`li`)
    if(count % 2 != 0 ){
        for(let i=0; i<li.length; i=i+2){
            if(i==0 || i==1 || i==4 || i==5){
                li[i].style.backgroundColor = '#FFFACD'
                // ul[i].style.backgroundColor = '#DDA0DD'
            }
            else{
                li[i].style.backgroundColor = '#DDA0DD'
                // li2[i].style.backgroundColor = '#FFFACD'
            }
        }
        count++
    }
    else{
        for(let i=0; i<li.length; i=i+2){
            if(i==0 || i==1 || i==4 || i==5){
                li[i].style.backgroundColor = '#DDA0DD'
            }
            else{
                li[i].style.backgroundColor = '#FFFACD'
            }
        }
        count++
    }
    console.log(count)
    


  }

  function altrows()
  {
      var tableElements = document.getElementsByTagName("table") ;
      for(var j = 0; j < tableElements.length; j++)
      {
          var table = tableElements[j] ;
  
          var rows = table.getElementsByTagName("tr") ;
          for(var i = 0; i <= rows.length; i++)
          {
              if(i%2!=0){
                  rows[i].style.fontWeight = 'bold';
              }
          }
      }
  }