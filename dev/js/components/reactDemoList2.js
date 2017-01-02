'use strict';
import React from 'react';
class CommentList extends React.Component{
	render(){
		return (
			
			<li>
				<p className="name">{this.props.name}<span className="time"> {this.props.date}</span></p>
				<div className="text">
					{this.props.children}
				</div>
			</li>
		
		);
	}
}
export {CommentList as default}