import React from 'react';
import PropTypes from 'prop-types';
import style from '../scss/logo.scss';


export class Logo extends React.Component {
  constructor(props){
    super(props);
  }

	render(){
		this.text="Exposed Online";
		if(this.props.text){
			this.text=this.props.text;
		}
		return (
			<h1 class="logo">{this.text}</h1>
		);
	}
}

Logo.propTypes = {
  text: PropTypes.string
};