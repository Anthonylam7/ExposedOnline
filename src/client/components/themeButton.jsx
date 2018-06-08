//this sound only plays onMouseOver if page has been interacted before
//https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
//plays well if developer tools are activate

import React from 'react';
import PropTypes from 'prop-types';
import style from '../scss/themeButton.scss';

export class ThemeButton extends React.Component {
  constructor(props){
    super(props);
    this.playBloop = this.playBloop.bind(this);
    this.playClick = this.playClick.bind(this);
  }

  playBloop(e){
    this.refs.bloop.play();
  }

  playClick(e){
    this.refs.click.play();
  }

	render(){
		return (
			<div>
				<button onMouseOver={this.playBloop} onMouseDown={this.playClick} onClick={this.props.onClickFunc}>{this.props.stuffing}</button>
			  <audio ref="bloop" preLoad>
          <source src="media/BLOOP.mp3" />
        </audio>
        <audio ref="click" preLoad>
          <source src="media/CLICK.mp3" />
        </audio>
      </div>
		);
	}
}

ThemeButton.propTypes = {
  stuffing: PropTypes.any.isRequired,
  onClickFunc: PropTypes.func
};