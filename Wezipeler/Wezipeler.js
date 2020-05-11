import React from "react";
import {Button, ButtonGroup} from '@material-ui/core';
import {StylesProvider} from '@material-ui/styles';
import './Wezipeler.css'

export class Wezipeler extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='wezipelerWrapper'>
			<StylesProvider injectFirst>
				<ButtonGroup variant="contained" color="primary">
  					<Button className='activeButton'>Maňa berilen wezipeler</Button>
  					<Button>Meniň wezipelerim</Button>
  				</ButtonGroup>
  			</StylesProvider>
			</div>
		);
	}
};

export default Wezipeler;
