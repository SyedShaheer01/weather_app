const search=document.getElementById("find")
const btn=document.getElementById("btn");
let getWeather = (search) => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=133929882321faee452074ec3ea97855&units=metric`)
    
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        let temp=document.getElementById("temp").innerHTML=Math.round(res.main.temp)+"°C";
            let humidity=document.querySelector(".humidity").innerHTML=res.main.humidity+"%";
            let wind=document.querySelector(".wind").innerHTML=res.wind.speed +"km/h";
            let city=document.querySelector(".city").innerHTML=res.name;
            let img=document.getElementById("img")
            // let show=document.querySelector(".weather").style.display="block"
            
            
            
            
            
            
            if(res.weather[0].main =="Clouds"){
                img.src= "./clouds.png"
                
    
            }
            else if(res.weather[0].main =="Rain"){
                img.src="./rain.png"
    
            }
            else if(res.weather[0].main =="Drizzle"){
                img.src="./drizzle.png"
    
            }
            else if(res.weather[0].main =="mist"){
                img.src="./mist.png"
    
            }
            else if(res.weather[0].main =="Clear"){
                img.src="./clear.png"
    
            }
            else if(res.weather[0].main =="Snow"){
                img.src="./snow.png"
    
            
            }
        
            
        })
        
        .catch(err=>{
            console.log(err)
            
            
            
        })
    
        
    }
    
    btn.addEventListener("click", ()=>{
        
        getWeather(search.value)
        // console.log(search)
    })
    
    getWeather()
    
    