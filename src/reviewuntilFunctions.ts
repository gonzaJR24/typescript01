// let prueba:string="nombre";
// let edad:number|"diez"=10;

// const acciones:string[]=["correr", "patear", "gritar"];

// interface persona{
//  name:string,
//  surname:string,
//  id:number,
//  languages:string[]
// }

// const persona:persona={
//   name:"Junior",
//   surname:"Gonzalez",
//   id:1,
//   languages:["spanish", "english"]
// }

// console.log(persona);

// function add(a:number, b:number):number{
//   return a+b;
// }

// const add=(a:number, b:number)=>console.log(`${a+b}`);


// add(2,3)

// interface Character{
//   name:string,
//   hp:number,
//   showHp:()=>void;
// }

// function healCharacter(character: Character, amount:number){
//   character.hp+=amount;
// }

// const wizard={
//   name:"Gorgon",
//   hp:30,
//   showHp(){
//     console.log(this.hp);
//   }
// }

// wizard.showHp();
// healCharacter(wizard, 90);
// wizard.showHp();

interface SuperHero{
  name:string,
  age:number,
  address:{
    calle:string,
    pais:string,
    ciudad:string
  }
  showAddress: ()=>string
}

const superHeroe: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
      calle: 'Main St',
      pais: 'USA',
      ciudad: 'NY'
  },
  showAddress() {
      return this.address.calle + ', ' + this.address.ciudad + ', ' + this.address.pais;
  }
}


const address = superHeroe.showAddress();
console.log( address );