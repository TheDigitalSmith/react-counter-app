import React, { Component } from 'react'; //shortcut key for import React and Component = imrc
import Counter from './counter';

class Counters extends Component {  //Shorcut key for creating class component = cc
    
    render() { 
        console.log(this.props)
        const {onReset, onIncrement, onDelete, counters} = this.props
        return (
            <div>
                <button onClick ={onReset} className="btn btn-primary btn-sm m-2">RESET</button>
                {counters.map(c => <Counter 
                key= { c.id} 
                counter = {c}
                onDelete ={onDelete}
                onIncrement = {onIncrement}
                />)}
                {/* the value is passed down into the child component as a prop */}
            </div>
        );
    }
}
 
export default Counters;