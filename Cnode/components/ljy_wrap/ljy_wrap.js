Vue.component('ljy-wrap', {
    props:['contents'],
    //!!!在自定义组件里面=>data 必须是一个函数
    data() {
        return {
            num:''
        }
    },
    template:`<div class="ljy_topics">
                    <div class="ljy_header">
                        <span class="ljy_col_fade">最近创建的话题</span>
                    </div>
                    <div id="wrapper">
                        <div id="wrap_all" v-if="contents.data"  v-for="item of contents.data.recent_topics">
                              <div class="left">
                                 <img :src="item.author.avatar_url">
                                 <span class="count">17   /229</span>
                              </div>
                              <span class="title">{{item.title}}</span>
                              <img id="img"  :src="item.author.avatar_url">
                        </div>
                    </div>
               </div>`,

});