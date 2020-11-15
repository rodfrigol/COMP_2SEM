import React from 'react';

class Calculadora extends React.Component {
  render() {
    return (
      <div className='container'>
        <div id='visor'>
          <span>{this.props.countValue}</span>
          <div className='lastVal'>{this.props.lastVal}</div>
        </div>
        <div>
            <button className='button' onClick={()=>this.props.clickValue(1)}>1</button>
            <button className='button' onClick={()=>this.props.clickValue(2)}>2</button>
            <button className='button' onClick={()=>this.props.clickValue(3)}>3</button>
            <button className='button' onClick={()=>this.props.operate("sum")}>+</button>
        </div>
        <div>
            <button className='button' onClick={()=>this.props.clickValue(4)}>4</button>
            <button className='button' onClick={()=>this.props.clickValue(5)}>5</button>
            <button className='button' onClick={()=>this.props.clickValue(6)}>6</button>
            <button className='button' onClick={()=>this.props.operate("subtract")}>-</button>
        </div>
        <div>
            <button className='button' onClick={()=>this.props.clickValue(7)}>7</button>
            <button className='button' onClick={()=>this.props.clickValue(8)}>8</button>
            <button className='button' onClick={()=>this.props.clickValue(9)}>9</button>
            <button className='button' onClick={()=>this.props.operate("multiply")}>*</button>
        </div>
        <div>
            <button className='button' onClick={this.props.clear}>CE</button>
            <button className='button' onClick={()=>this.props.clickValue(0)}>0</button>
            <button className='button' onClick={this.props.equalsTo}>=</button>
            <button className='button' onClick={()=>this.props.operate("divide")}>/</button>
        </div>
      </div>
    )
  }
}

export default Calculadora;

