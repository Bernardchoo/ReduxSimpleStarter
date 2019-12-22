// import react pull of component property.
import React, { Component } from 'react';

/* functional component
const SearchBar = () => {
    return <input />; // turn it to React.CreateElement 
};
*/

// class based component
class SearchBar extends Component {
    render() {
        // Calling the event handler
        //return <input onChange={this.onInputChange} />; // JSX 
        return <input onChange = {event =>  console.log(event.target.value) } />;
    
    }

    onInputChange(event) { // Event handler, when input changes , run the code inside 
        //event object describe context, event that occured.
        console.log(event.target.value);
    }
}

export default SearchBar;