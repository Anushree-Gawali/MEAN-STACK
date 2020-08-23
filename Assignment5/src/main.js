let persons = require('./persons');
let employee = require('./employee');

class main
{
    static main()
    {
       
        console.log("This is an execution");
        let p = new persons();
        let output = p.getName();

        let e = new employee();
        let hello = e.hello();
        
        console.log(output);
        console.log(hello);
    }
}

main.main();