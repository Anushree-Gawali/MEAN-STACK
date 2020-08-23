let callAjaxUsingJquery = () => {
    let cityName = "pune";
  
    let url =
      "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
      cityName;
  
    $.ajax(url).done((data1) => {
      myDOMOperationHere(data1);
    });
  };
  
  let myDOMOperationHere = (data1) => {
    const parent = document.querySelector("#parent");
  
    const newElement = parent.children[0];
    newElement.innerHTML = data1.name + " " + data1.main.temp_max;
    $(newElement).css("visibility","visible");
    parent.insertBefore(newElement, parent.firstChild);
  };