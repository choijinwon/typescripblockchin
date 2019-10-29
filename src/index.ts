  class Human {
   public name:string;
   public age:number;
   public gender:string;
   constructor(name:string, age:number, gender:string){
      this.name = name;
      this.age = age;
      this.gender = gender;
   }
}

//인터페이스들은 컴파일 되지 않는다.
const lynn  = new Human("lynn",37,"female");


const sayHi = (person):string => {
   return `Hello ${person.name}, you are ${person.age}, ${person.gender}`
};

console.log(sayHi(lynn));

export{};
