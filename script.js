let button = document.getElementById("btn");
let result = document.getElementById("result")

button.addEventListener("click", async ()=>{
    let data = await fetch("https://poetrydb.org/title/Ozymandias/lines.json");
    let data1 = await data.json();
    console.log(data1)
    data1.forEach(element => {
        result.innerHTML =
     
        `
        <div class="container">
       
        LINE1 : ${element.lines[0]}<br>
        LINE2 : ${element.lines[1]}<br>
        LINE3 : ${element.lines[2]}<br>
        LINE4 : ${element.lines[3]}<br>
        LINE5 : ${element.lines[4]}<br>
        LINE6 : ${element.lines[5]}<br>
        LINE7 : ${element.lines[6]}<br>
        LINE8 : ${element.lines[7]}<br>
        LINE9 : ${element.lines[8]}<br>
        LINE10 : ${element.lines[9]}<br>
        LINE11 : ${element.lines[10]}<br>
        LINE12 : ${element.lines[11]}<br>
        LINE13 : ${element.lines[12]}<br>
           </div>
         
        `

    
    });
   

    
})

