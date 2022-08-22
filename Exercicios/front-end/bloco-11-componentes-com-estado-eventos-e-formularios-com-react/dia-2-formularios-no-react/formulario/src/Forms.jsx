import React, { Component } from 'react'
import Estadofavorito from './Estadofavorito';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false
    };
  }


  handleChange( {target}) {
    const { name } = target;
    // Validando o checkbox
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    });
  }

  render() {
    // console.log(this.handleChange);
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <Estadofavorito
          onChange={this.handleChange}
          value={this.state.estadoFavorito}
           />
          <input
            type="number"
            name="idade"
            onChange={this.handleChange}
            // value={this.state.idade}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            onChange={this.handleChange}
            // value={this.state.vaicomparecer}
          />
        </form>
      </div>
    );
  }
}

export default Form;