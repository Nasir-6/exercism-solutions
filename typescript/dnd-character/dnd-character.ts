export class DnDCharacter {
  // Define properties
  hitpoints: number;
  constitution: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;


  // setup constructor - use the generate Ability score to set the abilities
  constructor() {
    
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    // Do fancy stuff for hitpoints
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

  }


  public static generateAbilityScore(): number {
    let scoreArr : number[]
    scoreArr=[];
    // Randomly generate array of 4 numbers using dice (1-6)
    for(let i=0; i<4; i++){
      // Returns a random integer from 1 to 6:
      scoreArr.push(Math.floor(Math.random() * 6) + 1);
    }
    console.log(scoreArr)

    //Discard min value & Sum up to get abilityScore
    scoreArr.splice(scoreArr.indexOf(Math.min(...scoreArr)), 1)

    let abilityScore = 0;
    for(let i=0; i<scoreArr.length; i++){
      abilityScore = abilityScore + scoreArr[i];
    }
    
    return abilityScore;
  }

  public static getModifierFor(abilityValue: number): number {
    // character's constitution modifier by subtracting 10 from your character's constitution, divide by 2 and round down.
    return Math.floor((abilityValue-10)/2)
  }
}
