class Person 
{
    constructor()
    {
        console.log('I am a Constructor!!!');
    }

    getPersonAddress()
    {
        return "MUMBAI";
    }

    getPersonDetail()
    {
        const Address = this.getPersonAddress();
        const name = this.getPersonName ();

        return name + " " + Address;
    }
    
    getPersonName()
    {
        return "I_AM_A_STUDENT";
    
    }
    static main()
    {
        let p = new Person();
        const detail = p.getPersonDetail();
        console.log(detail);
    }
}

Person.main();