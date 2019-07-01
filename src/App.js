import React, {Component} from 'react';
import './App.css';
class App extends Component {
    state = {
        count: 0,
        backgroundColor: '',
        name:'',
        width:'',
        toggle:false,
        buttonText:' naar links',
         counterText: 'counterMidden',
        clicked : false,
        fontWeight:'normal'
    };

    render() {

          const name = 'john'
         const loading = true;
        // if(loading){
        //     return <h1>loading ....</h1>
        // }

        console.log(this.state.backgroundColor)
        return (


            <div className="App">
                {loading ? <h1>loading ....</h1> : <h3>Hello {name}</h3>}
                <h3 style={{width:this.state.width}}> Hello van react</h3>
                {/*<h3>Hello {name}</h3>*/}
                <h1 style={{backgroundColor:this.state.backgroundColor}}>{this.state.counterText}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCounter}>+</button>
                <button onClick={this.decrementCounter}>-</button>
                <button onClick={this.size}>{this.state.buttonText}</button>
                <button onClick={this.colorvr}> veranderd van de kleur</button>
                <p style={{fontWeight:this.state.fontWeight}}>Hello David</p>

                <p>{this.state.name}</p>
            </div>

        );

    }
    incrementCounter =()=>{
        console.log('incrementing')
        this.setState({
            count:this.state.count + 1,
            backgroundColor:'green',
            name:'obadullah',
            counterText:'counterLinks'

        })
    };

    decrementCounter =()=>{
        console.log('decrementing')
        this.setState({
            count:this.state.count -1,
            backgroundColor:'red',
            name:'dzengiz',
            counterText:'countermidden'

        })

    }
    size =()=>{

        // If toggled "on" (true)
        if (this.state.toggle === false ){
            this.setState({
                width: 50,
                toggle:true,
                buttonText:'naar rechts'

            })
        } else {
            this.setState({
                width: '',
                toggle:false,
                buttonText:'links'

            })
        }
    }
    colorvr = ()=>{
        console.log('click detected')
        if(!this.state.clicked) {

            this.setState({
                fontWeight:'bold',
                clicked: true
            })
        }
    }
}

export default App;
