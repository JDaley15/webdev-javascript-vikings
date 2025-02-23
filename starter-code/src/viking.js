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
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        randomSaxon.receiveDamage(randomViking.strength);
        if (randomSaxon.health <= 0) this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
        if (randomSaxon.health > 0) { return `A Saxon has received ${randomViking.strength} points of damage`; }
        else if (randomSaxon.health <= 0) { return `A Saxon has died in combat`; }

    }
    saxonAttack() {
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        randomViking.receiveDamage(randomSaxon.strength);
        if (randomViking.health <= 0) this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
        if (randomViking.health > 0) { return `${randomViking.name} has received ${randomSaxon.strength} points of damage`; }
        else if (randomViking.health <= 0) { return `${randomViking.name} has died in act of combat`; }
    }

    showStatus() {
        if (this.saxonArmy.length === 0){ return "Vikings have won the war of the century!";
        }
        if (this.vikingArmy.length === 0){ return "Saxons have fought for their lives and survive another day...";
        }
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){ return "Vikings and Saxons are still in the thick of battle."
}
    }
}
