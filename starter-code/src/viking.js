// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);

    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else if (this.health === 0) {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = []

    addViking(battleAxe) {
        this.vikingArmy.push(battleAxe)
    }
    addSaxon(sword) {
        this.saxonArmy.push(sword)
    }
    vikingAttack() {
        let chosenViking = Math.floor(Math.random() * this.vikingArmy.length);
        let chosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.saxonArmy[chosenSaxon].receiveDamage(this.vikingArmy[chosenViking].strength);
        if (this.saxonArmy[chosenSaxon].health <= 0) {
            this.saxonArmy.splice(chosenSaxon, 1);
        }
        return result;

    }
    saxonAttack() {
        let chosenViking = Math.floor(Math.random() * this.vikingArmy.length);
        let chosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.vikingArmy[chosenViking].receiveDamage(this.saxonArmy[chosenSaxon].strength);
        if (this.vikingArmy[chosenViking].health <= 0) {
            this.vikingArmy.splice(chosenViking, 1);
        }
        return result;
    }
}
