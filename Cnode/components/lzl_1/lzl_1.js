Vue.component('lzl',{
       props:['count'],
    template:`
            <div>
                <div>
                    <span>精华</span>
                    <span>《Node.js：来一打 C++ 扩展》已出版，求支持</span>
                </div>
                <div>发布于 3 个月前  作者 XadillaX  20190 次浏览  来自 分享</div>
                <div v-if="count.data" v-html="count.data.content">
                
           </div>
          </div> 
    `
})