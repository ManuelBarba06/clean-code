(() => {
    
    // No aplicado el principio de responsabilidad unica
    
    type Gender = 'M'|'F'
    
    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }
    
    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;
        
        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate
        }
    }
    
    interface UserProps extends PersonProps{
        email: string;
        role: string;
        
    }
    
    class User extends Person {
        
        public email: string;
        public role: string;
        public lastAccess: Date;
        
        constructor({email, role, name, gender, birthdate}: UserProps){
            super({name,gender,birthdate})
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }
        
        checkCrendential() {
            return true;
        }
    }
    
    interface UserSettingsProps extends UserProps{
        workingDirectory: string;
        lastOpenFolder: string;
    }
    
    class UserSettings extends User {
        
        public workingDirectory: string;
        public lastOpenFolder: string;
        
        constructor({workingDirectory, lastOpenFolder, email, role, name, gender, birthdate}:UserSettingsProps){
            super({email,role,name,gender,birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    
    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'manuelabg_0610@gmail.com',
        role: 'Admin',
        name: 'Manuel',
        gender: 'M',
        birthdate: new Date('1998/10/06')
    });
    
    console.log({userSettings})
})()