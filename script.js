
function wouldYouRather() {

let fightP = document.getElementById("fightP")
let button = document.getElementById("randomFight")

let smallAnimal = ["cat","dog","mouse","rabbit","guinea pig","hamster","armadillo","piranha","chicken","duck","rat","bee","wasp","scorpion","ant",
                    "tarantula","butterfly","otter","parrot","cobra","turtle","goldfish"]

let smallAnimalPlural = ["cats","dogs","mice","rabbits","guinea pigs","hamsters","armadillos","piranhas","chickens","ducks","rats","bees","wasps","scorpions","ants",
                    "tarantulas","butterflies","otters","parrots","cobras","turtles","goldfish"]                    

let bigAnimal = ["pig","gorilla","zebra","lion","moose","tiger","elephant","kangaroo","cow","swordfish","dolphin","horse","donkey","grizzly bear","bull",
                    "camel","hippo","rhino","giraffe","octopus","ostrich","shark"];

let bigAnimalPlural = ["pigs","gorillas","zebras","lions","moose","tigers","elephants","kangaroos","cows","swordfish","dolphins","horses","donkeys","grizzly bears","bulls",
                    "camels","hippos","rhinos","giraffes","octopuses","ostriches","sharks"];

let bigAnimalNumber = Math.floor(Math.random() * 4) + 2
let smallAnimalNumber = Math.floor(Math.random() * 50) + 21
let randomSmallAnimalNumber = [Math.floor(Math.random() * 22)]
let randomBigAnimalNumber = [Math.floor(Math.random() * 22)]

fightP.innerHTML = "Would you rather fight " + bigAnimalNumber + " " + bigAnimal[randomBigAnimalNumber] + "-sized " + smallAnimalPlural[randomSmallAnimalNumber] + " or " + smallAnimalNumber +
        " " + smallAnimal[randomSmallAnimalNumber] + "-sized " + bigAnimalPlural[randomBigAnimalNumber] + "?"

button.innerHTML = "Go again!"

}