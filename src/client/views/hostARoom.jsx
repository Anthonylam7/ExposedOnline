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
  		<div class="hostARoom">
  			<div class="a">
          <h1>Share this room ID with your friends</h1>
        </div>

        <div class="b">
          <CustomInput text={this.props.roomId} isDisabled={true}/>
        </div>

        <div class="c">
        <CopyToClipboard text={this.props.roomId}>
          <ThemeButton class="copyText" stuffing={<img src="media/copy-content.png" />} />
        </CopyToClipboard>
        </div>

        <div class="d">
          <p>{this.props.host} is hosting!<br />...</p>
        </div>

        <div class="e"><ThemeButton stuffing="Start Game" /></div>
        <div class="f"><ThemeButton stuffing="Cancel Room" /></div>
	    </div>
    );
  }
}