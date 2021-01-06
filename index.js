class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
    showStats(){
        console.log(`Name: ${this.name}\nCost: ${this.cost}\nPower: ${this.power}\nRes: ${this.res}`)
    }
}
class Effect extends Card {
    constructor(name,cost,stat,mag){
        super(name,cost);
        this.stat = stat;
        this.mag = mag;
    }
    play(target){
        if (target instanceof Unit){
            if (this.stat == 'power'){
                target.power += this.mag;
            }
            if (this.stat == 'res'){
                target.res += this.mag;
            }
        }
        else {
            throw new Error('Target must be a Unit!');
        }
    }
    showStats(){
        console.log(`Name: ${this.name}\nCost: ${this.cost}\nStat: ${this.power}\nMag: ${this.res}`)
    }
}
const redninja = new Unit('Red Ninja',3,3,4);
const blackninja = new Unit('Black Ninja',4,5,4);
const hardalgor = new Effect('Hard Algorithm',2,'res',3);
const unprorej = new Effect('Unhandled Promise Rejection',1,'res',-2);
const pairprog = new Effect('Pair Programming',3,'power',2);
redninja.showStats();
blackninja.showStats();
hardalgor.play(redninja);
redninja.showStats();
blackninja.showStats();
unprorej.play(redninja);
redninja.showStats();
blackninja.showStats();
pairprog.play(redninja);
redninja.showStats();
blackninja.showStats();
redninja.attack(blackninja);
redninja.showStats();
blackninja.showStats();