import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <p className='font'>{this.props.name}</p>
        <p className='font'>{this.props.type}</p>
        <p className='font'>Average Weight: {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}</p>
        <img src={this.props.image} alt=''></img>
      </div>
    )
  }
}

export default Pokemon;
