import React, { Component } from 'react';

function doFilter(query) {
  return function(user) {
    return query === user.name;
  }
}

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      query: '',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ query: event.target.value });
  }

  render() { 
    const { query } = this.state;

    const users = [
      { name: 'Julia' },
      { name: 'Vasyl' }
    ];

    return ( 
      <div>
        <ul>
          {
            users
              .filter(doFilter(query))
              .map(myUser => <li>{myUser.name}</li>)
          }
        </ul>
        <input
          type="text"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
