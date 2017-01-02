'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/page/reactDemo.less';
import '../../css/common/base.css';
import CommentBox from './../components/reactDemoList';

var dataJson = [
	{"name":"瓦力","data":"2012.1.2","text":"天气不错哈"},
	{"name":"花","data":"2017.1.3","text":"我在学习前端哈"},
	{"name":"益达","data":"2017.1.1","text":"明年我们会越来越好的！！"}
];

ReactDOM.render(
	<CommentBox url="../../dev/js/page/dataJson.json" data={dataJson}/>,
	document.getElementById('app')
);