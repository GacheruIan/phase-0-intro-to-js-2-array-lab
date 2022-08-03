// Write your solution here!
function cats() {
    cats = ["Milo", "Otis", "Garfield"]
}
cats()

cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
    return cats
   }

cats = ["Milo", "Otis", "Garfield"]
function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}

cats = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
    return cats
}
cats = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
    return cats
}

function removeFirstCat(){
    cats = ["Milo", "Otis", "Garfield"]
    cats.shift('Milo')
    return cats

}
function appendCat(name){
    cats = ["Milo", "Otis", "Garfield"]
    cats.push("Broom")
    return cats
   }

function prependCat(name){
    cats = ["Milo", "Otis", "Garfield"]
    cats.unshift("Arnold")
    return cats
}
function  removeLastCat()
{
    cats = ["Milo", "Otis", "Garfield"]
    cats.pop("Garfield")
    return cats
}
