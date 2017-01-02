# react-webpack-walle
###首先的首先就是要克隆本项目到你的项目文件夹中

##构建 react+webpack 的前端技术栈
*1.首先进入到该项目目录下，安装命令环境
	npm install webpack -g  验证 ok?  webpack --version  
*2.创建package.json 工程文件（通常用的方法	npm init -y;） 就是本项目中的文件，记得点赞哈，整理出这么个东西，真是太不容易啦  
*3.如果已有本项目的package.json文件    

	npm install  

*4.检查是否有babel的预设文件，webpack的设置文件  

	npm run build 先生产编译一次  

	npm run dev	  打开编译开发环境		  

*5.打开浏览器就http://localhost:8080/public/view/home.html就能看到效果啦  


##如果要增加页面
	记得在entry（入口文件处，添加相应的js文件）
	还有就是使用new HtmlWebpackPlugin，渲染出相应的页面
	
##此处一个小小的问题，npm install结束之后可以先删除掉public文件夹，再执行编译命令
