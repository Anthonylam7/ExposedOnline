import React from 'react';
import PropTypes from 'prop-types';
import style from '../scss/customInput.scss';


export class CustomInput extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: ''};
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName.target.value
    });
  }

	render(){
		if(this.props.text){
			this.state.name=this.props.text;
		}
		if(this.props.isDisabled){
			this.isDisabled = true;
		}else{
			this.isDisabled = false;
		}
		return (
			<input type="text" onChange={this.changeName} value={this.state.name} disabled={this.isDisabled}/>
		);
	}
}

CustomInput.propTypes = {
  text: PropTypes.string,
  onClickFunc: PropTypes.func,
  isDisabled: PropTypes.bool
};