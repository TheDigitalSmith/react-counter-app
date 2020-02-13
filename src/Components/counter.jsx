import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3']
    };

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
    handleIncrement = () => {
        console.log('increment clicked');
        //updating the state
        this.setState({count: this.state.count + 1})
    }

    handleDecrement =() =>{
        console.log('decrement clicked');
        this.setState({count:this.state.count - 1})
    }
    render() {

        return (
            <>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick ={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick = {this.handleDecrement} className= "btn btn-warning btn-sm">Decrement</button>
                {/* conditonal rendering */}
                {/* {this.state.tags.length === 0 && 'Please create a list'}
                {this.renderTags()} */}
            </>
        );
    }

    //Rendering Classes Dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    //Displaying count dynamically
    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;