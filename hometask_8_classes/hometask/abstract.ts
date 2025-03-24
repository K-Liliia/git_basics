abstract class Plant {
    private name: string;
    private color: string;
    private location: string;
    private bloomPeriod: string;

    public constructor(name: string, color: string, location: string, bloomPeriod: string) {
        this.name = name;
        this.color = color;
        this.location = location;
        this.bloomPeriod = bloomPeriod;
    }

    public getName(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }

    public getLocation(): string {
        return this.location;
    }

    public getBloomPeriod(): string {
        return this.bloomPeriod;
    }

    public getPlantDetails(): void {
        console.log(`${this.name} locates in ${this.location}`);
    }

    protected abstract bloom(): void;

}

class Tree extends Plant {
    private height: string;
    private fruitTree: boolean;

    public constructor(name: string, color: string, location: string, bloomPeriod: string, height: string, fruitTree: boolean) {
        super(name, color, location, bloomPeriod);
        this.height = height;
        this.fruitTree = fruitTree;
    }

    public getHeight(): string {
        return this.height;
    }

    public getIsFruitTree(): boolean {
        return this.fruitTree;
    }

    public bloom(): void {
        console.log('This ' + this.getName() + ' bloom from ' + this.getBloomPeriod());
    }
}

class Flower extends Plant {
    private isDeadly: boolean;

    public constructor(name: string, color: string, location: string, bloomPeriod: string, isDeadly: boolean) {
        super(name, color, location, bloomPeriod);
        this.isDeadly = isDeadly;
    }

    public getIsDeadly(): boolean {
        return this.isDeadly;
    }

    public bloom(): void {
        console.log('This flower ' + this.getName() + ' bloom from ' + this.getBloomPeriod());
    }
}

const plumTree = new Tree('Prune plum tree', 'purple', 'Central Europe', 'late February to early April', '7 meters', true);
const lotusFlower = new Flower('Pink Lotus', 'pink', 'Asia and parts of Eastern Europe', 'Summer to Fall', false);

plumTree.getPlantDetails();
plumTree.bloom();

lotusFlower.bloom();
lotusFlower.getIsDeadly();

console.log('Tree height is: ' + plumTree.getHeight());
