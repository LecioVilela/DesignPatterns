// Interfaces

interface Car {
    type: string
    getName(): string
}

interface Customer {
    type: string
    getName(): string
}

// Classes concretas

class CompanyCar implements Car {
    type = 'Empresa'

    constructor(private name:string) {
        
    }

    getName() {
        return this.name
    }
}

class PersonCar implements Car {
    type = 'Pessoa'

    constructor(private name:string) {

    }

    getName() {
        return this.name
    }
}

class CompanyCustomer implements Customer {
    type: string = 'Empresa'

    constructor(private name:string) {

    }

    getName(): string {
        return this.name
    }
}

class PersonCustomer implements Customer {
    type: string = 'Pessoa'

    constructor(private name:string) {
        
    }
    getName(): string {
        return this.name
    }
}

// Factories

abstract class EntityFactory {
    abstract createCar(): Car
    abstract createCustomer(): Customer
}

class CompanyFactory extends EntityFactory {
    createCar(): Car {
        return new CompanyCar('Carro de Empresa')
    }
    createCustomer(): Customer {
        return new CompanyCustomer('Funcionário da Empresa')
    }
    
}

class PersonFactory extends EntityFactory {
    createCar(): Car {
        return new PersonCar('Carro de Pessoa')
    }
    createCustomer(): Customer {
        return new PersonCustomer('Pessoa')
    }

}

// Client code

const gerenciaCarrosEClientes = (entityFactory: EntityFactory) => {
    const car = entityFactory.createCar()
    const customer = entityFactory.createCustomer()
    console.log(`Você está se referindo ao ${car.getName()}, do ${customer.getName()}`)
}

const clientCodeAbstract = () => {
    gerenciaCarrosEClientes(new PersonFactory())
}

clientCodeAbstract()