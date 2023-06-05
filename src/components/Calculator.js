import { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    sum = () => {
        let val1 = parseInt(document.getElementById("n1").value);
        let val2 = parseInt(document.getElementById("n2").value);
        let number = val1 + val2;
        this.setState({ number: number});
    };

    sub = () => {
        let val1 = parseInt(document.getElementById("n1").value);
        let val2 = parseInt(document.getElementById("n2").value);
        let number = val1 - val2;
        this.setState({ number: number});
    };

    mul = () => {
        let val1 = parseInt(document.getElementById("n1").value);
        let val2 = parseInt(document.getElementById("n2").value);
        let number = val1 * val2;
        this.setState({ number: number});
    };

    div = () => {
        let val1 = parseInt(document.getElementById("n1").value);
        let val2 = parseInt(document.getElementById("n2").value);
        let number = val1 / val2;
        this.setState({ number: number});
    };

    render() {
        return(
        <div className="calculator">
            <input type="number" id="n1" />
            <input type="number" id="n2" />
            <h1>Result: {this.state.number}</h1>
            <button onClick={this.sum}>+</button>
            <button onClick={this.sub}>-</button>
            <button onClick={this.mul}>x</button>
            <button onClick={this.div}>/</button>
        </div>
        );
    }
}
export default Calculator;