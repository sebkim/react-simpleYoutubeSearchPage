import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div className = "search-bar">
        <input  onChange = {event => {
            // this.setState({term: event.target.value});
            // this.onSearchTermChange(event.target.value);
            // console.log(this.onSearchTermChange);
            this.onInputChange(event.target.value);
          }
        } />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    // console.log(this.props.onSearchTermChange);
  }

}

export default SearchBar;
