'use strict';
import React from 'react';
class ReactFrom extends React.Component{
	render(){
		return (
			
				<form className="formBox">
					<textarea className="texts"></textarea>
					<input type="button" className="btn" value="提交" name="" />
				</form>
			
		);
	}
}
export {ReactFrom as default}