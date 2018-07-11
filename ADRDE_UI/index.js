
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from './Splash';
import Vdetails from './Vdetails';
import Button from './Button';
import Officer from './Officer';
import Routes from './Routes';
import InboxScreen from './Home';
import MessageScreen from './Home';
import VisitorScreen from './Home';
import Login from  './Login';


class Main extends Component<{}>{
	
	constructor(props){
		super(props);
		this.state = { currentScreen: 'Splash'};
		setTimeout(()=>{
					this.setState({currentScreen: 'InboxScreen'});
		}, 2000)
	}
	render(){
		const { currentScreen} = this.state
		let mainScreen = currentScreen === 'Splash' ? <Splash/> :<InboxScreen/>;
		return (mainScreen);
	}
}

AppRegistry.registerComponent('user', () => Main);