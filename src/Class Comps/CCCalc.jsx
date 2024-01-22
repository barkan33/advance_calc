import { Component } from "react";

export default class CCalc extends Component {

    constructor(props) {
        super(props)
        this.state = {
            answer: null,
            num1: null,
            num2: null
        }
    }

    SetOperators = (event) => {
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        let op = event.target.value;

        if (num1 == null || num2 == null) {
            return;
        }

        this.setState({ answer: eval(num1 + op + num2) })
    };

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Number 1</span>
                    <input onChange={(event) => { this.setState({ num1: event.target.value }) }} type="number" className="form-control" placeholder="Enter a number" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Number 2</span>
                    <input onChange={(event) => { this.setState({ num2: event.target.value }) }} type="number" className="form-control" placeholder="Enter a number" />
                </div>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" onClick={this.SetOperators} value={'+'} className="btn btn-primary">+</button>
                    <button type="button" onClick={this.SetOperators} value={'-'} className="btn btn-primary">-</button>
                    <button type="button" onClick={this.SetOperators} value={'*'} className="btn btn-primary">*</button>
                    <button type="button" onClick={this.SetOperators} value={'/'} className="btn btn-primary">/</button>
                </div>
                <h1 style={{margin: 10}}>{this.state.answer}</h1>
            </div>

        )
    }
}