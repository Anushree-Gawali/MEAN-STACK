let abc = async () => {
    console.log("hello world");
  
    return "HELLO WORLD!!!!";
  };
  
  
  let mpromise = abc();
  
  mpromise.then((data) => {
    console.log(data);
  });
  
  mpromise.catch((err) => {
    console.log(err);
  });