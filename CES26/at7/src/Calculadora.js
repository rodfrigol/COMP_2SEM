import { connect } from 'react-redux';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

class Calculadora extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
            <View style={styles.visor}>
                <Text style={styles.visorText}>{this.props.countValue}</Text>
                <View>
                    <Text style={styles.lastVal}>{this.props.lastVal}</Text>
                </View>
            </View>
            <View style={styles.block}>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(1)}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(3)}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.operate("sum")}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.block}>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(4)}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(5)}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(6)}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.operate("subtract")}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.block}>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(7)}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(8)}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(9)}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.operate("multiply")}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.block}>
                <TouchableOpacity style={styles.button} onPress={this.props.clear}>
                    <Text style={styles.buttonText}>CE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.clickValue(0)}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.equalsTo}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>this.props.operate("divide")}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        shadowColor: '#D3D3D3',
        shadowOffset: {width: 5, height: 10}
    },
    visor: {
        textAlign: 'right',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 32,
        paddingRight: 10,
        marginTop: 4,
        marginBottom: 4,
        marginRight: 2,
        marginLeft: 2,
        backgroundColor: 'lightgreen'
    },
    visorText: {
        fontSize: 28
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 32,
        paddingRight: 32,
        textAlign: 'center',
        marginTop: 4,
        marginBottom: 4,
        marginRight: 2,
        marginLeft: 2,
        width: windowWidth/5,
        maxWidth: 100
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff'
    },
    lastVal: {
        fontSize: 9
    },
    block: {
        flexDirection: 'row'
    }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Calculadora);