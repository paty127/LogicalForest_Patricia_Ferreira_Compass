import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect
describe('Testes de soma', () =>{

    
it('Deve somar 4 e 5 resultando em 9', () =>{
    let resultado =Calculadora.soma(4, 5)
    expect(resultado).to.be.eq(9)
   
})
it('Deve somar -4 e 5 resultando em 1', () =>{
    let resultado =Calculadora.soma(-4, 5)
    expect(resultado).to.be.eq(1)

    }) 

    it('Deve somar -4 e -5 resultando em -9', () =>{
        let resultado =Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
    
        }) 

        it('Deve somar -4 e 0.5 resultando em 1', () =>{
            let resultado =Calculadora.soma(4, 0.5)
            expect(resultado).to.be.eq(4.5)
        
            }) 
}) 

describe('Testes de subtração', () =>{
    it('Deve subtrair 4 e 5 resultando em -1', () =>{
        let resultado =Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
       
    })
    it('Deve subtrair -10 e -5 resultando em -5', () =>{
        let resultado =Calculadora.sub(-10, -5)
        expect(resultado).to.be.eq(-5)
})

it('Deve subtrair -10 e -5 resultando em -15', () =>{
    let resultado =Calculadora.sub(-10, -5)
    expect(resultado).to.be.eq(-5)

})
it('Deve subtrair -5 e 1555 resultando em -1550', () =>{
    let resultado =Calculadora.sub(-5, 1555)
    expect(resultado).to.be.eq(-1560)
})
})

    describe('Testes de multiplicação', () =>{
        it('Deve multiplicar 4 e 5 resultando em 20', () =>{
            let resultado =Calculadora.multiplica(4, 5)
            expect(resultado).to.be.eq(20)
    })
})

describe('Testes de divisão', () =>{
    it('Deve dividir 4 e 5 resultando em 0.8', () =>{
        let resultado =Calculadora.divide(4, 5)
        expect(resultado).to.be.eq(0.8)
    })
})
  
describe('Testes de raiz quadrada', () =>{
    it('Deve verificar se a raiz quadrada de 9 é um quadrado perfeito', () =>{
        let resultado =Calculadora.raizQuadrada(9)
        expect(resultado).to.be.eq(true)
    })
})

describe('Testes raio', () =>{
    it('Deve verificar o raio de 10 resultando em 62.83185307179586', () =>{
        let resultado =Calculadora.Circunferencia(10)
        expect(resultado).to.be.eq(62.83185307179586)
    })
})

describe('Testes potencia  ', () =>{
    it('Deve verificar se a potencia quadrada de 2 é 4', () =>{
        let resultado =Calculadora.potencia(2,2)
        expect(resultado).to.be.eq(4)
    })

    it('Deve verificar se a potencia cubica  de 4 é 64', () =>{
        let resultado =Calculadora.potencia(4,3)
        expect(resultado).to.be.eq(64)
})

it('Deve verificar se 5^5  de 5 é 3125', () =>{
    let resultado =Calculadora.potencia(5,5)
    expect(resultado).to.be.eq(3125)

})

it('Deve verificar se 5^-4  de 5 é 3125', () =>{
    let resultado =Calculadora.potencia(5,-4)
    expect(resultado).to.be.eq(0.0015999999999999999)

})
})


