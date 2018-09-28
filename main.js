var code1 = `/*122321423432rfdsvsdfv*/
*{
    transition: all 0.3s;
    margin: 0;
    padding: 0;
}

body{
    background-color: #666;
    font-size: 16px;
    padding: 16px;
}

#codeWrapper{
    width: 100%;
    background-color: #ccc;
}

/*paper*/

#codeWrapper{
    width: 32%;
}

#markDownWrapper{
    width: 68%;
    margin-left: 16px;
    background-color: white;
}

#markDown{
    white-space: pre-wrap;
}
`;

var code2 = `
h2{
    margin-top: 30px;
    font-size: 16px;
    padding-bottom: 8px;
}

ul{
    margin: 5px 0;
}

li{
    margin-left: 10px;
    padding-top: 3px;
}
`;

var markdown = `## 个人信息
****
- 刘无为 | 1997-10 | 男
- 应届生 | 前端开发工程师
- 手机 181-0657-1786 | 邮箱: 398906857@qq.com 
- github: https://github.com/Hypnosss 
- 博客：https://blog.csdn.net/qq_37298706

## 专业技能
****
- HTML/CSS/JavaScript
    - 能够使用**原生 JavaScript** 独立制作精美网页
    - 掌握 HTML5 如 canvas 、 nav 等**语义化标签**及 **WebStorage API** 等
    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术
- 移动端开发
    - 会使用 **REM** 、 **vw / vh** 、 媒体查询等技术制作适配手机设备的页面
- jQuery
    - 熟悉 **jQuery** 常用 API ，如 DOM 操作、特效、事件等。
- Webpack
    - 有使用 Webpack 打包项目的经验
- Vue
    - 有Vue开发经历，了解Vue常用功能，如组件，**Vue-Router**、**Vuex**、**生命周期**、**双向绑定**等

## 项目展示
****
- 我的画板
    - 源码链接：https://github.com/Hypnosss/drawing-board
    - 预览链接：https://hypnosss.github.io/drawing-board/index.html
    - 关键词：Canvas、原生JS、响应式
    - 描述：该项目使用原生JS实现，主要调用了Canvas API，实现了画线、调色、橡皮擦、保存至本地等功能，支持移动端。 
- 键盘导航
    - 源码链接：https://github.com/Hypnosss/nav-website
    - 预览链接：https://hypnosss.github.io/nav-website/index.html
    - 关键词：原生JS
    - 描述：该项目使用原生JS实现，可以给26键设置网址，快速转到
- 基于Vue的仿CNode社区
    - 源码链接：https://github.com/Hypnosss/testcnode
    - 预览链接：https://hypnosss.github.io/testcnode/cnode/dist/index.html#/
    - 关键词：Vue、Vue-Router
    - 描述：该项目使用Vue实现，基于CNode社区提供的API，实现了主题首页的查看、用户详情查看的基本功能
-
## 教育经历
****
- 杭州电子科技大学 卓越学院 计算机科学与技术专业
- 2015.9 - 至今
- 相关课程：数据结构、数据库系统原理、计算机网络等
`

function writeCode(what,fn){
    var n = 0;
    var timer = setInterval(function(){
        code.innerHTML += what[n];
        styleTags.innerHTML += what[n];
        n++;
        code.scrollTop = code.scrollHeight;
        if(n === what.length){
            clearInterval(timer);
            fn.call();
        }
    },0);   
}

function writeMarkDown(fn){
    let n = 0;
    var timer = setInterval(function(){
        markDown.innerHTML += markdown[n];
        n++;
        markdown.scrollTop = markdown.scrollHeight;
        if(n === markdown.length){
            markDown.innerHTML = marked(markdown);
            clearInterval(timer);
            markDown.style.whiteSpace="unset";
            fn.call();
        }
    },0);   
}

writeCode(code1,()=>{
    writeMarkDown(()=>{
        writeCode(code2,()=>{});
        
    })
});
