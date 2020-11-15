import { connect } from 'react-redux';
import Calculadora from './Calculadora';

function mapStateToProps(state){
  return {
    countValue: state.value,
    lastVal: state.lastValue === null ? 'None' : state.lastValue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickValue: function(value){
      return dispatch({ type:"updateValue", value:value })
    },
    clear: function(){
      return dispatch({ type:"clear" })
    },
    operate: function(operation){
      return dispatch({ type: "operation", operation: operation })
    },
    equalsTo: function(){
      return dispatch({ type: "equalsTo" })
    }
  }
}

var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Calculadora);

export default connectedComponent;
