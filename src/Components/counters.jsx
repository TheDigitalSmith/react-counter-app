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
    
     handleDelete = (e) =>{
        console.log('event handler called', e)
        const counters = this.state.counters.filter(c => c.id !== e)
        this.setState({counters})
    }
    render() { 
        return (
            <div>
                {this.state.counters.map(c => <Counter 
                key= { c.id} 
                counter = {c}
                onDelete ={this.handleDelete} 
                />)}
                {/* the value is passed down into the child component as a prop */}
            </div>
        );
    }
}
 
export default Counters;