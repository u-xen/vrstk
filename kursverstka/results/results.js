let result = []
for(let i = localStorage.length-1; i>=0; i--){
    result.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}

let results = () => {    
    let table = document.getElementById(`results`)    
    
    let arr=result
    
    for(let i = 0; i<arr.length; i++){
        let tr = document.createElement(`tr`)                  
        
        let username = tr.appendChild(document.createElement(`td`))
        username.innerHTML=arr[i].username

        let exp = tr.appendChild(document.createElement(`td`))
        exp.innerHTML=arr[i].exp

        let level_1_score = tr.appendChild(document.createElement(`td`))
        level_1_score.innerHTML=`${arr[i].level1}`

        let level_2_score = tr.appendChild(document.createElement(`td`))
        level_2_score.innerHTML=`${arr[i].level1}`

        let level_3_score = tr.appendChild(document.createElement(`td`))
        level_3_score.innerHTML=`${arr[i].level1}`

        table.appendChild(tr)
    }
}

results()
