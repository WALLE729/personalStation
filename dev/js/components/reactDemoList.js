'use strict';
import React from 'react';
import ReactList2 from './reactDemoList2';
import ReactFrom from './reactDemoFrom';
import $ from 'jquery';
class CommentBox extends React.Component{
	constructor (props){
		super(props);
		this.state = {data:[]};
		this.getComments();
		setInterval(() => this.getComments(),3000);

	}
	getComments() {

		$.ajax({
			url:this.props.url,
			dataType: 'json',
			cache: false,
			success: comments =>{
				this.setState({data:comments});
			},
			error:(xhr,status,error) =>{
				console.log(error);
			}

		});
	}
	render(){
		let comData = this.state.data;
		let listStr = comData.map(comment =>{
			return (
				<ReactList2 name={comment.name} date={comment.data}>
					{comment.text}
				</ReactList2>
			);
		});
		console.log(listStr)
		return (
			<div>
				<div className="title">
					<h1>评论区</h1>
				</div>
				<ul>
					{listStr}
				</ul>
				<ReactFrom />
			</div>
		);
	}
}
export {CommentBox as default}