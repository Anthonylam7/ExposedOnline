import React from 'react';
import {ThemeButton} from '../components/themeButton.jsx';
import styles from '../scss/menu.scss';

export class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
  	return (
  		<div className="menu">
  			<div className="h1"><h1>Welcome, {this.props.name}!</h1></div>
    		<div className="box a"><ThemeButton stuffing="Host a Room"/></div>
	    	<div className="box b"><ThemeButton stuffing="Find a Room"/></div>
	    	<div className="box c"><ThemeButton stuffing="How to Play"/></div>
	    	<div className="box d"><ThemeButton stuffing="Settings"/></div>
	    </div>
    );
  }
}
