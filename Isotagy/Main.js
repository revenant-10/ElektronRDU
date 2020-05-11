import React from "react";
import IshOtag from "./IshOtag";
import Lastdocs from "./Lastdocs";

export class Main extends React.Component{
	render(){
		return(
			<div className="App">
		    	<IshOtag/>
    			<Lastdocs />
    		</div>

		);
	}
}

export default Main;
