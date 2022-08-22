import React, { Component } from 'react';

class Estadofavorito extends Component {
    render() {
        const { onChange, value} = this.props;
        let error = undefined;
        if (value.length >= 120) error = "Texto muito grande"
        return (
            <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            <textarea name="estadoFavorito" value={value} onChange={onChange} />
            {error ? error : ''}
          </label>
        );
    }
}

export default Estadofavorito;
