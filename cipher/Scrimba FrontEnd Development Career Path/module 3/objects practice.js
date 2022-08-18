var Elvira = {
  name: "Elvira",
  age: 17,
  favFoods: ["shrimp", "peaches", "fish skin", "watermelon", "squash seeds"],
  isPretty: true,
  greeting: "Pretty Princess Piggy!",
  sayGreeting: function () {
    console.log(this.greeting);
  }
}

//Elvira.greeting()
//console.log(Elvira.name)
//console.log(Elvira["favFoods"])
Elvira.sayGreeting();