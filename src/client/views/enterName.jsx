import React from 'react';
import styles from '../scss/enterName.scss';
import {Logo} from '../components/logo.jsx';
import {ThemeButton} from '../components/themeButton.jsx';
import {CustomInput} from '../components/customInput.jsx';

export class EnterName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="enterName">
		    <div className="logo"><Logo /></div>
        <div className="customInput"><CustomInput /></div>
        <div className="themeButton"><ThemeButton stuffing="Go!"/></div>
      </div>
    );
  }
}