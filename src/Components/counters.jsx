import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value: 4},
            {id:2, value: 0}, 
            {id:3, value: 0},
            {id:4, value: 0}
        ]
        
     }
    
     handleIncrement = (counter) => {
         console.log(counter)
         const counters = [...this.state.counters]
         const index = counters.indexOf(counter)
         counters[index] = {...counter}
         counters[index].value++
         this.setState({counters})
     }

     handleDelete = (e) =>{
        console.log('event handler called', e);
        const counters = this.state.counters.filter(c => c.id !== e);
        this.setState({counters});
    }

    handleReset = ()=>{
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters})
    }
    render() { 
        return (
            <div>
                <button onClick ={this.handleReset}className="btn btn-primary btn-sm m-2">RESET</button>
                {this.state.counters.map(c => <Counter 
                key= { c.id} 
                counter = {c}
                onDelete ={this.handleDelete}
                onIncrement = {this.handleIncrement}
                />)}
                {/* the value is passed down into the child component as a prop */}
            </div>
        );
    }
}
 
export default Counters;