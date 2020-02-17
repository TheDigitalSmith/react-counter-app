import React, { Component } from 'react'; //shortcut key for import React and Component = imrc
import Counter from './counter';

class Counters extends Component {  //Shorcut key for creating class component = cc
    
    render() { 
        console.log(this.props)
        return (
            <div>
                <button onClick ={this.props.onReset} className="btn btn-primary btn-sm m-2">RESET</button>
                {this.props.counters.map(c => <Counter 
                key= { c.id} 
                counter = {c}
                onDelete ={this.props.onDelete}
                onIncrement = {this.props.onIncrement}
                />)}
                {/* the value is passed down into the child component as a prop */}
            </div>
        );
    }
}
 
export default Counters;