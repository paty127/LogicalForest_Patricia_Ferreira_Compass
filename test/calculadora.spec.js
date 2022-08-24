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
}) 

describe('Testes de subtração', () =>{
    it('Deve subtrair 4 e 5 resultando em -1', () =>{
        let resultado =Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
       
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

