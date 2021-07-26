import React from 'react';

class Terms extends React.Component {
  render() {
    const { value, terms } = this.props;
    
    return (
      <label>
      Aceita os termor ae broder:
      <input type="checkbox" name="terms" value={value} onChange={terms} />
    </label>
    )
  }
}

export default Terms;
