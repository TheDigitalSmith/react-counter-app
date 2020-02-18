import React, { Component } from 'react'


//Single Source of truths i.e. turning this component into a controlled component **
class Counter extends Component {
    // state = { **
    //     value: this.props.counter.value // the props is received from the parent component
    //     // tags: ['tag1', 'tag2', 'tag3']
    // };
    //To bind eventhandlers
    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    // conditional rendering
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
    }

    //Use arrow functions. Arrow functions don't rebind 'this' keyword, it inherits it
    // handleIncrement = () => { **
    //     console.log('increment clicked');
    //     //updating the state
    //     this.setState({value: this.state.value + 1})
    // }

    // handleDecrement =() =>{ **
    //     console.log('decrement clicked');
    //     this.setState({value:this.state.value - 1})
    // }
    render() {
        console.log('props', this.props)
        console.log('state', this.state)
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm" >+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} 
                    className="btn btn-warning btn-sm m-2" 
                    disabled = {this.props.counter.value === 0 ? "disabled" : ""}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm">x</button>
                    {/* conditonal rendering */}
                    {/* {this.state.tags.length === 0 && 'Please create a list'}
                {this.renderTags()} */}
                </div>
            </div>
        );
    }

    //Rendering Classes Dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    //Displaying count dynamically
    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;