import React from 'react';

export default class HTMLDisplay extends React.Component {
  static displayName = 'HTMLDisplay'

  static propTypes = {
    data: React.PropTypes.string,
  }

  render() {
    return (
      <div
        ref={(d) => {
          if(document.createRange) {
            const range = document.createRange();
            d.replaceChild(range.createContextualFragment(this.props.data));
          }
          else {
            d.innerHTML = this.props.data;
          }
        }}
      />
    );
  }
}
