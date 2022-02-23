// Factory Method

interface PaymentMethod {
    tax: number
    createPayment(orderId: string): boolean
    refoundPayment(orderId: string): boolean
}

abstract class PaymentMethodFactory {
    abstract create(): PaymentMethod
}

class PaypalMethod implements PaymentMethod {
    tax: number = 0.05
    createPayment(orderId: string): boolean {
        console.log(`Cria a ordem de pagamento ${orderId} via Paypal com a taxa ${this.tax}`)
        return true
    }
    refoundPayment(orderId: string): boolean {
        console.log(`Reembolsa a ordem de pagamento ${orderId} via Paypal`)
        return true
    }
}

class PaypalMethodFactory extends PaymentMethodFactory {
    create(): PaymentMethod {
        return new PaypalMethod()
    }
}

class PagseguroMethod implements PaymentMethod {
    tax: number = 0.02
    createPayment(orderId: string): boolean {
        console.log(`Cria a ordem de pagamento ${orderId} via Pagseguro com a taxa ${this.tax}`)
        return true
    }
    refoundPayment(orderId: string): boolean {
        console.log(`Reembolsa a ordem de pagamento ${orderId} via Pagseguro`)
        return true
    }
}

class PagseguroMethodFactory extends PaymentMethodFactory {
    create(): PaymentMethod {
        return new PagseguroMethod()
    }
}

// Código do cliente

function clientCode() {
    let paymentMethod: PaymentMethod

    // Entrou via paypal
    const paypalMethodFactory = new PaypalMethodFactory()
    paymentMethod = paypalMethodFactory.create()
    paymentMethod.createPayment('Order 01')

    // Entrou via pagseguro
    const pagseguroMethodFactory = new PagseguroMethodFactory()
    paymentMethod = pagseguroMethodFactory.create()
    paymentMethod.createPayment('Order 02')
    paymentMethod.refoundPayment('Order 02')
}

clientCode()

// Factory Functions

class DatabaseInstance {

}

class EmiteNotaFiscalUseCase {

}

class AddNewOrderUseCase {
    constructor (a:DatabaseInstance, b:EmiteNotaFiscalUseCase) {

    }
}

const makeDatabaseInstance = () => {
    return new DatabaseInstance()
}

const makeEmiteNotaFiscalUseCase = () => {
    return new EmiteNotaFiscalUseCase()
}

const makeAddNewOrderUseCase = () => {
    return new EmiteNotaFiscalUseCase()
}

const usecase = makeAddNewOrderUseCase()