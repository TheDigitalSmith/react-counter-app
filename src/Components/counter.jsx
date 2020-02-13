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

    //Use arrow functions don't rebind this keyword, it inherits it
    handleIncrement = ()=> {
        console.log('increment clicked', this);
    }
    render() {

        return (
            <>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick ={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                
                {/* conditonal rendering */}
                {/* {this.state.tags.length === 0 && 'Please create a list'}
                {this.renderTags()} */}
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;