## vue-vsc
A vue.js project tool that customizes the project template
一个自定义了项目模板的vue.js项目工具
##### 项目采用的vue,vue-router,axios版本
```markdown
"axios": "^0.18.0",
"vue": "^2.5.2",
"vue-router": "^3.0.1"
```
> 本工具只是用来构建一套自己常用的vue项目的模板，并无其他功能，所以，进行以下几步操作后，和vue-cli的用法就完全一致了：
```markdown
npm install -g vue-vsc
$ vsc <project-name>
$ cd <project-name>
$ npm install
```

#### Project structure(项目结构)
```markdown
---my-project
   --build
     --build.js
     --check-versions.js
     --utils.js
     --vue-loader.conf.js
     --webpack.base.conf.js
     --webpack.dev.conf.js
     --webpack.prod.conf.js
   --config
     --dev.env.js  // 开发环境变量
     --index.js  
     --prod.env.js  // 生产环境变量
     --test.env.js  // 测试环境变量
   --src
     --api // api请求文件夹
       --axios.js 
     --common //放一些公共的css、js、图片文件等
       --css
       --image
       --js
     --components //组件
     --router //路由
       --index.js
     --utils // 公共工具方法
       --utils.js
     --App.vue
     --main.js
   --static
     --.gitkeep
   --.babelrc
   --.babelrc
   --.editorconfig
   --.gitignore
   --.postcssrc.js
   --index.html // 本文件中添加了针对移动端js+rem布局的代码，用不到可自行删除
   --package.json
   --package-lock.json
   --README.md
```
### Installation（安装）
```
 npm install -g vue-vsc
```

### Usage（用法）
```
 $ vsc <project-name>
 $ cd <project-name>
 $ npm install
```
Example(例子):
```
$ vsc my-project
$ cd my-project
$ npm install
```

### Others（其他说明）
``` 
Other usage is the same as vue-cli usage when you install this project
项目install下来后，其他用法和vue-cli的用法一样
特别说明：
在项目中运行如下命令
 npm run  dev // 开发环境
 npm run  test // 测试环境打包
 npm run  build //生产环境打包
```