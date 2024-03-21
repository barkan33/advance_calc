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
                    <button type="button" onClick={this.SetOperators} value={'+'} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg></button>
                    <button type="button" onClick={this.SetOperators} value={'-'} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                    </svg></button>
                    <button type="button" onClick={this.SetOperators} value={'*'} className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg></button>
                    <button type="button" onClick={this.SetOperators} value={'/'} className="btn btn-primary">/</button>
                </div>
                <h1 style={{ margin: 10 }}>{this.state.answer}</h1>
            </div>

        )
    }
}