let registerUser = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
  
    if (username === "") {
      document.querySelector("#username").style.borderColor = "red";
      return;
    }
  
    
  
    let url = `http://localhost:5000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;
  
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      const res = xhr.responseText;
      console.log(res);
  
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#mobile").value = "";
    };
  
    xhr.send();
  };
  
  let registerUserVer1 = async () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
  
    let url = `http://localhost:5000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;
  
    await fetch(url);
  
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
  };
  
  let registerUsingPost = async () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
  
    const input = {
      username,
      password,
      email,
      mobile,
    };
    const url = "http://localhost:5000/adduser";
  
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
  };