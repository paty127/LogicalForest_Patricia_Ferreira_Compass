# LogicalForest_Patricia_Ferreira_Compass

<h1 align="center">Desenvolvendo TDD com Mocha & Chai</h1>

<p>O desenvolvimento orientado a testes (TDD) é um processo usado antes ou durante o desenvolvimento de novos softwares. <p>Seu objetivo é realizar um ciclo de repetições, enquanto o desenvolvedor escreve testes automatizados para validar requisitos, implementar novas funcionalidades, entre outros objetivos.</p>

<p>BDD é técnica de desenvolvimento ágil que visa integrar regras de negócios com linguagem de programação, focando o comportamento do software. Além disso, pode-se dizer também, que BDD é a evolução do TDD.</p>

O objetivo do projeto é demosntrar o teste com as funções de uma calculadora utilizando Node.JS, Mocha e Chai.

![1_KdwRxcqlUyYmjkLICmckmQ](https://user-images.githubusercontent.com/65580919/187076167-334a42d6-dd78-4328-bc92-e050a2253ab6.png)

<h2>Mocha</h2>
Mocha é uma estrutura de teste JavaScript rica em recursos executada no Node.js e no navegador. Ele encapsula os testes em suítes de teste (describe-block) e casos de teste (it-block).

Mocha tem muitos recursos interessantes:
<ul>
<li>suporte ao navegador</li>
<li>suporte assíncrono simples, incluindo promessas</li>
<li>relatório de cobertura de teste</li>
<li>suporte a tempo limite de teste assíncrono</li>
<li>before, after, beforeEach, afterEachGanchos, etc.</li>

<h2>Chai</h2>
    
O Chai possui várias interfaces que permitem ao desenvolvedor escolher a mais confortável. Os estilos BDD com capacidade de cadeia fornecem uma linguagem expressiva e um estilo legível, enquanto o estilo assert TDD fornece uma sensação mais clássica.

Chai expõe três interfaces de asserção: expect(), assert() e should(). Qualquer um deles pode ser usado para afirmações.

<h1>Desenvolvimento</h1>
<h2>O projeto foi desenvolvido na IDE <b>Visual Studio Code</b>  utilizando a linguagem JavaScript.</h2>

<ul>
<li> Criei uma pasta vazia e abri com terminal GitBash</li>
<li> No terminal digitei: <b>npm init -y</b>, para iniciar o repositório</li>
<li> Digitei: <b>code .</b>, para iniciar o projeto no <b>Visual Studio Code</b></li>
<li> Na pasta <b>package.json</b>, inseri:  <b>type:"module"</b> abaixo do <b>main</b> para utilizar as estruturas do ECMAScript 6 e insira em <b> "scripts": {
    "test": "mocha}"</b></li>

<li> No terminal do <b>Visual Studio Code</b> digitei: <b>npm i -D mocha chai</b> , para instalar essas bibliotecas como dependência de desenvolvimento após isso apresentara uma nova pasta <b>node_module</b> onde estão insataladas todas as dependências</li> 
<li> Criei uma pasta chamada <b>test</b> , e dentro dessta pasta criei um arquivo chamada <b>calculadora.spec.js</b> e adcionei os seguintes imports: <b>import assert from 'assert'</b> e <b> import chai from 'chai'</b> </li>
<h5>Descrevendo o teste</h5>
<li>Na pasta <b>calculadora.spec.js</b> criei uma constante chamada <b>const expect = chai.expect</b></li>
<h4>Exemplo de da descrição do test soma</h4>
describe('Testes de soma', () => {


    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)

<li>Criei uma pasta chamada <b>src</b> e dentro dela criei a classe <b>Calculadora.js</b> é nela que fiz os métodos com as funções das operações para o teste</li>
<p> Essa classe terá seus elementos exportados por default, desta maneira <b> default class Calculadora{}</b> </p>
<h4> Para o projeto eu utilizei as operações básicas: soma, subtração, multiplicação, divisão e mais raiz quadrada, pontecia, e circunfêrencia</h4>
<h4>Exemplo de metódo soma </h4>
static soma(a, b) {
        return a + b
    }
    <li> Para rodar o teste digitei o comando <b>npm test</b>
    <b>Resultado:</b>
      Testes de soma

    ✔ Deve somar 4 e 5 resultando em 9


  1 passing (16ms)
  
  
 <h2> Links úteis:</h2>

VSCode:  https://code.visualstudio.com/download

NodeJS: https://nodejs.org/en/download/

Mocha: https://mochajs.org/

Chai: https://www.chaijs.com/







