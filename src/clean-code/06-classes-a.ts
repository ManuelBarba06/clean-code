(() => {
    
    // No aplicado el principio de responsabilidad unica
    
    type Gender = 'M'|'F'
    
    class Person {
        
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) 
        {}
    }
    
    class User extends Person {
        
        public lastAccess: Date;
        
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name,gender,birthdate)
            this.lastAccess = new Date();
        }
        
        checkCrendential() {
            return true;
        }
    }
    
    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFoler: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email,role,name,gender,birthdate)
        }
    }
    
    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'manuelabg_0610@gmail.com',
        'Admin',
        'Manuel',
        'M',
        new Date('1998/10/06')
    );
    
    console.log({userSettings})
})()