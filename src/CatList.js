import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <ul>
        {this.props.catPics.map(pic => {
            
          return <img src={pic.url}></img>
        })}
      </ul>
    );
  }
};

export default CatList;