class Animal{
    constructor(name,color,breed,speak){
        this.name=name,
        this.color=color,
        this.breed=breed,
        this.speak=speak
    }

    speaking(){
        console.log(this.name +"speaks"+this.speak);
    }
}

let dog=new Animal("puppy","white","shipard","bow bow");

console.log(dog);