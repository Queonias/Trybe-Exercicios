// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().

// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!

// 4 - Garanta acesso ao objeto this na função que você declarou.

import React, { Component } from "react";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this); // deixando o 'this' visível para essa função usando o bind
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clickBtnOne: 0,
      clickBtnTwo: 0,
      clickBtnTree: 0,
    }
  }

  handleClick() {
    console.log("Clicou no botão 1", this);
    // this.setState({clickBtnOne: 1}); // qual a diferença desse? 
    this.setState((state) => ({clickBtnOne: state.clickBtnOne + 1})); // para esse?
    console.log(`Botão 1 ${this.getButtonColor(this.state.clickBtnOne)}`)
  }
  handleClick2() {
    console.log("Clicou no botão 2", this);
    // this.setState({clickBtnTwo: 1})
    this.setState((state) => ({clickBtnTwo: state.clickBtnTwo + 1}))
    console.log(`Botão 2 ${this.getButtonColor(this.state.clickBtnTwo)}`)
  }
  handleClick3() {
    console.log("Clicou no botão 3", this);
    // this.setState({clickBtnTree: this.state.clickBtnTree + 1}) exemplo do porque esse é mais ineficiente
    this.setState((state) => ({clickBtnTree: state.clickBtnTree + 1}))
    // this.setState( (e) => ({clickBtnTree: e.clickBtnTree + 1}))

    console.log(`Botão 3 ${this.getButtonColor(this.state.clickBtnTree)}`)
  }

  // criando uma nova função com a lógica da cor do button
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickBtnOne, clickBtnTwo, clickBtnTree} = this.state;
    return (
      <div className="App">

        <button 
          // className="button" 
          style={{ backgroundColor: this.getButtonColor(clickBtnOne)}} 
          onClick={this.handleClick}>Botão 1 | {this.state.clickBtnOne}
        </button>

        <button 
          // className="button"
          style={{ backgroundColor: this.getButtonColor(clickBtnTwo)}} 
          onClick={this.handleClick2}>Botão 2 | {this.state.clickBtnTwo}
        </button>

        <button
          // className="button" 
          style={{backgroundColor: this.getButtonColor(clickBtnTree)}} // Porque é nessesário colocar entre duas chaves???
          onClick={this.handleClick3}>Botão 3 | {this.state.clickBtnTree}
        </button>
      </div>
    );
  }
}

export default App;
