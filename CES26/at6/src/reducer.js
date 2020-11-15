function makeOperation(lastValue, value, operation){
    switch(operation){
        case "sum":
            return lastValue+value;
        case "subtract":
            return lastValue-value;
        case "multiply":
            return lastValue*value;
        case "divide":
            return lastValue/value;
        default:
            return 0;
    }
}

function calculadora(state, action){
    if (state === undefined){
        return { value: 0 , lastValue: null, operation: null, isResult: false};
    }

    var value = state.value;
    var lastValue = state.lastValue;
    var operation = state.operation;
    var isResult = state.isResult;

    switch(action.type){
        case "updateValue":
            return { value: isResult? (action.value):(value*10 + action.value), 
                     lastValue: isResult? null:lastValue, 
                     operation: isResult? null:operation,
                     isResult: false};

        case "clear":
            return { value: 0 , 
                     lastValue: null,
                     operation: null,
                     isResult: false};

        case "operation":
            return { value: 0,
                     lastValue: operation === null? value:makeOperation(lastValue, value, operation),
                     operation: action.operation,
                     isResult: false} 

        case "equalsTo":
            return { value: operation === null?value:makeOperation(lastValue, value, operation),
                     lastValue: operation === null?lastValue:null,
                     operation: operation === null?operation:null,
                     isResult: isResult?true:(operation === null?false:true)}

        default:
            return state;


    }
}

export default calculadora;