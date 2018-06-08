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
      <div class="enterName">
		    <div class="logo"><Logo /></div>
        <div class="customInput"><CustomInput /></div>
        <div class="themeButton"><ThemeButton stuffing="Go!"/></div>
      </div>
    );
  }
}