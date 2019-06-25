import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        count: 0,
        backgroundColor: '',
        name:'',


    };


    render() {
        console.log(this.state.backgroundColor)
        return (
            <div className="App">
                <h1 style={{backgroundColor:this.state.backgroundColor}}>Counter</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>

                <p>{this.state.name}</p>
            </div>
        );
    }
    incrementCounter =()=>{
        console.log('incrementing')
        this.setState({
            count:this.state.count + 1,
            backgroundColor:'green',
            name:'obadullah'

        })
    };

    decrementCounter =()=>{
        console.log('decrementing')
        this.setState({
            count:this.state.count -1,
            backgroundColor:'red',
            name:'dzengiz'

        })

    }
}

export default App;
