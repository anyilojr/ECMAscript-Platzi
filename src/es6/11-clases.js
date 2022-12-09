//declarando 
class User{};
// instancia de una clase
// const newUser = new User();

class user {
    //declarar metodos
    greetins(){
        return 'Hello';
    }
};

const anyilo = new user();
console.log(anyilo.greetins());
const bebeloper = new user();
console.log(bebeloper.greetins());
//2 hellos de 2 instancias distintas de una misma clase.
//constructor iniciar los elementos de esta clase

class user{
    //constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greetins(){
        return 'Hello';
    }
}
const david = new user();

//this hace referencia al elemento padre que lo contiene

class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greetins(){
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user('Ana');
console.log(ana.greetins());

//setters getters

class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //meths
    speak(){
        return "Hello";
    }
    greetins(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);