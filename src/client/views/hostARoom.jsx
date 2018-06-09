import React from 'react';
import styles from '../scss/hostARoom.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {CustomInput} from '../components/customInput.jsx';
import {ThemeButton} from '../components/themeButton.jsx';

export class HostARoom extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
  	return (
  		<div className="hostARoom">
  			<div className="a">
          <h1>Share this room ID with your friends</h1>
        </div>

        <div className="b">
          <CustomInput text={this.props.roomId} isDisabled={true}/>
        </div>

        <div className="c">
        <CopyToClipboard text={this.props.roomId}>
          <span><ThemeButton stuffing={<img src="media/copy-content.png" />} /></span>
        </CopyToClipboard>
        </div>

        <div className="d">
          <p>{this.props.host} is hosting!<br />...</p>
        </div>

        <div className="e"><ThemeButton stuffing="Start Game" /></div>
        <div className="f"><ThemeButton stuffing="Cancel Room" /></div>
	    </div>
    );
  }
}