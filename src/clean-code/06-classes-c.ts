(() => {
    
    // Aplicando el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia
    
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
    
    interface UserProps{
        email: string;
        role: string;
        
    }
    
    class User {
        
        public email: string;
        public role: string;
        public lastAccess: Date;
        
        constructor({email, role}: UserProps){
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }
        
        checkCrendential() {
            return true;
        }
    }
    
    interface SettingsProps{
        workingDirectory: string;
        lastOpenFolder: string;
    }
    
    class Settings{
        
        public workingDirectory: string;
        public lastOpenFolder: string;
        
        constructor({workingDirectory, lastOpenFolder}:SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    
    interface UserSettingsProps {
        name: string;
        gender: Gender;
        birthdate: Date;
        email: string;
        role: string;
        workingDirectory: string;
        lastOpenFolder: string;
    }
    
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        
        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }:UserSettingsProps){
            this.person = new Person({name,gender,birthdate})
            this.user = new User({email, role})
            this.settings = new Settings({lastOpenFolder, workingDirectory})
            
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