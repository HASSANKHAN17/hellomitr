import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import json from './successfuljson.json'

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        src={json}
        style={{ height: '50vh'}}
      ></Player>
    );
  }
}

export default Loading;