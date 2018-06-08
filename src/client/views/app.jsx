import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';

import styles from '../scss/main.scss';
import {EnterName} from './enterName.jsx';
import {Menu} from './menu.jsx';
import {HostARoom} from './hostARoom.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Anna', roomId: 'K3D2E' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
    console.log(this.state.name);
  }

	render() {
		return (
			<HashRouter>
				<div class="appFrame">
          <Route path="/enterName" render={(props)=> <EnterName onChange={this.changeName} name={this.state.name} />}/>
          <Route path="/menu" render={(props)=> <Menu name={this.state.name} />}/>
          <Route path="/hostARoom" render={(props)=> <HostARoom host={this.state.name} roomId={this.state.roomId}/>}/>
      	</div>
      </HashRouter>
		);
	}
}