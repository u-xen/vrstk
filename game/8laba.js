let area = document.getElementById('area')
// document.body.append(area)



let timer = document.createElement('input') //таймер
timer.className = 'inp'
timer.innerHTML = `<input type="text">`
timer.style.position=`fixed`
timer.style.top='450px'
timer.style.left='0px'
timer.style.color='red'
timer.style.fontSize='32pt'
timer.style.border='none'
document.body.prepend(timer)

let counter = document.createElement('input') //счетчик
counter.className = 'inp'
counter.innerHTML = `<input type="text">`
counter.style.position=`fixed`
counter.style.top='450px'
counter.style.left='100px'
counter.style.color='blue'
counter.style.fontSize='32pt'
counter.style.border='none'
counter.style.zIndex = 0;
document.body.prepend(counter)

let food = document.createElement('img')
food.innerHTML=`<img>`
food.src=`box.png`
food.style.width = '200px'
food.style.position=`absolute`
food.style.zIndex = 1;
document.body.prepend(food)

let cat = document.createElement('img')
cat.innerHTML=`<img>`
cat.src=`koshka.png`
cat.style.width = '100px'
cat.style.position = `absolute`
cat.style.zIndex = 1;





document.body.ondragstart=()=>{false}

document.body.onmousemove=(event)=>{
    food.style.left = `${event.pageX - food.offsetWidth / 2}px`
    food.style.top = `${event.pageY - food.offsetHeight / 2}px`
}



let kot = () => {
    if(a!=0){
        let top = Math.floor(Math.random(10, 450)*75+1)
        let left = Math.floor(Math.random()*75+1)
        
        cat.style.top = `${top}%`
        cat.style.left = `${left}%`
     
        area.prepend(cat)
        setTimeout(kot, 1000)
    }
}
let a=15;
let count=0

let process = () =>{
    
    counter.value=`total ${count}`
    document.body.prepend(counter)
     
    time()
    kot()
}
process()


cat.onmousedown=()=>{
    count++
    console.log(count)
    counter.value=`total ${count}`
    // document.body.prepend(counter)
    // food.style.zIndex = 2;

    }




function time(){
    if(a!=0){
        a--
        console.log(a)
        timer.value=a
        document.body.prepend(timer)
        setTimeout(time, 1000)
    }else{
        let again =confirm(`Игра окончена, вы заработали ${count} очков \n Хотите повторить игру??`)
        if(again==true){
            a=15
            count=0
            process()

        }else if(again==false){
            
            
            document.body.prepend(counter)
            window.location.href = '../index.html'

        }
    }
    
}


