// import react pull of component property.
import React, { Component } from 'react';

/* functional component
const SearchBar = () => {
    return <input />; // turn it to React.CreateElement 
};
*/

// class based component
class SearchBar extends Component {


    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render() {
        // Calling the event handler
        //return <input onChange={this.onInputChange} />; // JSX 
        return (
            <div className="search-bar">
            <input 
            value = {this.state.term}
            onChange = {
                event =>  this.onInputChange(event.target.value)}
         />
            </div>
        ); 
    }

    onInputChange(term) { // Event handler, when input changes , run the code inside 
        //event object describe context, event that occured.
        //console.log(event.target.value);
        this.setState({term});
        this.props.onSearchTermChange(term); // callback to index.js
    }
}

export default SearchBar;