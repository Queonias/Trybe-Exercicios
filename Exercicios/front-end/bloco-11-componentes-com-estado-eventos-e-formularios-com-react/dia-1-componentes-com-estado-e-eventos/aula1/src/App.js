import './App.css';
import React, { Component } from 'react';

// function handleClick() {
//   console.log('Clicou no botão!')
// }
// function handleClick2() {
//   console.log('Clicou no botão 2!')
// }
// function handleClick3() {
//   console.log('Clicou no botão 3!')
// }
// class App extends Component {
//   render() {
//     return (
//       <>
//       <button onClick={handleClick}>Meu botão</button>
//       <button onClick={handleClick2}>Meu botão 2</button>
//       <button onClick={handleClick3}>Meu botão 3</button>
//       </>
//       );
//   }
// }

// export default App;

class App extends Component {
  // constructor() {
  //   super()
  //   // A função abaixo vincula "manualmente" o 'this' á nossa função
  //   this.handleClick = this.handleClick.bind(this);// com essa implementação o javascript vai enchergar o this
  // }

  // handleClick() {
  //   console.log(this); 
  //   console.log('Clicou no botão!')
  // }

  handleClick = () => {
    console.log(this); // essa é uma outra forma de se declarar um método sem usar o constructor 
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>Meu botão</button>
    );
  }
}

export default App;


