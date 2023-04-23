const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
var temp = document.getElementById('temp');
var temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getinfo = async(event) =>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText = "Plese write the name before you search";
        datahide.classList.add('data_hide');
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=22703800472ccd61ea897e55c6835b63`
            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}` ;

            temp.innerHTML = arrData[0].main.temp;
            const tempmod = arrData[0].weather[0].main;

            // weather check

            if(tempmod == "Clear"){
                temp_status.innerHTML ="<i class = 'fas fa-sun' style='color : #eccc68;'></i>";
            }
            else if(tempmod == "Clouds"){
                temp_status.innerHTML ="<i class = 'fas fa-cloud' style='color : #f1f2f6;'></i>";
            }
            
            else if(tempmod == "Rain"){
                temp_status.innerHTML ="<i class = 'fas fa-rain' style='color : #a4b0be;'></i>";
            }
            
            else {
                temp_status.innerHTML ="<i class = 'fas fa-cloud' style='color : #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            
        } catch{
            city_name.innerText = "Plz enter the city name properly";
            datahide.classList.add('data_hide');
        }

    }
}

submitbtn.addEventListener('click',getinfo)