import React from 'react';
import { Link } from 'react-router-dom';

import './pokemon.css';

class Pokemon extends React.Component {
  static defaultProps = {
    moreDetails: true
  }

  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    const { moreDetails } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          {moreDetails &&
            <div className="moreDetails">
              <Link to={`pokemon/${id}`}>More Details</Link>
            </div>
          }

        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;