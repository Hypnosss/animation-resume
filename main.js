var code1 = `/*122321423432rfdsvsdfv*/
*{
    transition: all 0.3s
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
    width:68%;
    margin-left: 16px;
    background-color: white;
}
`;

var code2 = `
123454
`;

var markdown = `
## 刘无为
手机 181-0657-1786 | 邮箱 398906857@qq.com | github https://github.com/Hypnosss 
## 专业技能
****
- HTML/CSS/JavaScript
    - 能够使用原生 JavaScript 独立制作精美网页
    - 掌握 HTML5 如 canvas 、 nav 等语义化标签及 WebStorage API 等
    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术

- 移动端开发
`

function writeCode(what,fn){
    var n = 0;
    var timer = setInterval(function(){
        code.innerHTML += what[n];
        styleTags.innerHTML += what[n];
        n++;
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
        if(n === markdown.length){
            console.log(markDown);
            markDown.innerHTML = marked(markdown);
            clearInterval(timer);
            fn.call();
        }
    },10);   
}

writeCode(code1,()=>{
    writeMarkDown(()=>{
        writeCode(code2,()=>{});
    })
});
