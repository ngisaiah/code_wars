// Desc: In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

// name: user argument or 'Hero', positionL '00', health: 100, damage: 5, experience: 0

// Solution:

class Hero {
  // add default values here
  // Param ='Hero' makes default value Hero
    constructor(name='Hero', position, health, damage, experience) {
      this.name = name
      this.position = '00'
      this.health = 100
      this.damage = 5
      this.experience = 0
      
    }
}

let  myHero = new Hero('Hero', '00', 100, 5, 0)
