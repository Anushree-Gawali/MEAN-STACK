let getWeather = () => {
  
  
    let city = document.querySelector("#textid").value;
  
  
    let url =
      "https://api.openweathermap.org/data/2.5/weather?appid=24290e6dba237c92b947983d9ab82eab&units=metric&q=" +
      city;
  
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
  
    xhr.onload = () => {
      const rjson = JSON.parse(xhr.responseText);
      console.log(rjson);
      printdata(rjson);
    };
  
    xhr.send();
  };
  
  let printdata = (rjson) => {
    console.log(rjson.main);
    const name = rjson.name;
    const maxTemp = rjson.main.temp_max;
  
    const parent = document.querySelector("#parent");
  
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";
    newElement.innerHTML = name + " " + maxTemp;
  
    parent.appendChild(newElement);
  
    document.querySelector("#textid").value = "";
  };