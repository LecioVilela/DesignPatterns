export class DataBaseSingleton {
    private static instance?: DataBaseSingleton
    instanceName: number

    private constructor() {
        this.instanceName = Math.random();
    }

    public static getInstance() : DataBaseSingleton {
        if(!DataBaseSingleton.instance) {
            DataBaseSingleton.instance = new DataBaseSingleton()
        }
        return DataBaseSingleton.instance
    }
}
// Chamando o DataBaseSingleton
const dbInstance = DataBaseSingleton.getInstance()
const dbInstance2 = DataBaseSingleton.getInstance()

console.log("dbInstance", dbInstance, dbInstance2)
