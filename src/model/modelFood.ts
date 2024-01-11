import foods from "../database/food.json";
import {writeFileSync} from "node:fs"

interface DataFood {
  name: string;
  ingredients: string[];
  culture: string;
}

interface ItalianFood{
    name: string;
    ingredients: string[];
    culture: string;
    city: string;
}

class Food {
  name: string;
  ingredients: string[];
  culture: string;


  constructor(name: string, ingredients: string[], culture: string) {
    this.name = name;
    this.ingredients = ingredients;
    this.culture = culture;
  }

  static getFoodByCulture(culture:string){
    const foundFood = foods.find((food)=>food.culture === culture);
    if (!foundFood){
        return "La comida no se encontró en el menú."
    }
    return foundFood
  }

static setNewFood(newFood:DataFood|ItalianFood){
    const existingFood = foods.find((food)=>food.name === newFood.name);
    if(existingFood){
        return "La comida ya existe en el menú!"
    }
    foods.push(newFood);
    writeFileSync("./src/database/food.json", JSON.stringify(foods))
    return "Se actualizó el menú exitosamente!"
}
static getFoodByInitialLetter(initialLetter: string){
    const foundFoods = foods.filter((food)=>food.name.toLowerCase().startsWith(initialLetter.toLowerCase()));
    return foundFoods;
}


  showDataFood(){
    return `La comida se llama ${this.name}, sus ingredientes son ${this.ingredients.join(", ")} y es de cultura ${this.culture}.` 
  }
}

class ItalianFood extends Food{
    city: string

    constructor(name: string, ingredients: string[], culture: string, city:string){
        super(name, ingredients, culture);
        this.city = city
    }
}

const hamburguesa = new Food("Hamburguesa",["carne","lechuga","pan","tomate","mayonesa"],"Estadounidense")
const canelones = new ItalianFood("Canelones",["Panqueques","Ricota","Espinaca","Salsa"],"Italiana","Milán")

console.log(hamburguesa);
console.log(canelones);

const pushNewFood1 = Food.setNewFood(hamburguesa)
const pushNewFood2 = Food.setNewFood(canelones)

console.log(pushNewFood1,pushNewFood2);

const foundFoods = Food.getFoodByInitialLetter("H")
console.log(foundFoods);



// const ravioles = new Food("Ravioles",["Harina","Huevos","Espinaca"], "Italiana")
// console.log(ravioles);
// const dataFood = ravioles.showDataFood()
// const showDataFoodFromDb = Food.getFoodByCulture("Italian")
// console.log(dataFood);
// console.log(showDataFoodFromDb);

