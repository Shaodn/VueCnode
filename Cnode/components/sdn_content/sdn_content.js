Vue.component('a-list', {
    props:['content','left_img','top_2','s_title2','title_index','s_title_c','reply','visit','top_','s_title','right_img','s_wrap','re_wrap'],
    template: `
            <div class="two">
                <div v-for="(item,index) of content.data" :class="{s_wrap:s_wrap}">
                    <img :src="item.author.avatar_url" alt="" :class="{left_img:left_img}">
                    <div :class="{re_wrap:re_wrap}">
                        <span :class="{reply:reply}">{{item.reply_count}}</span><span :class="{visit:visit}">/{{item.visit_count}}</span>
                    </div>
                    <span :class="{top_:top_}" v-if="item.top">置顶</span>
                    <span :class="{top_:top_}" v-if="item.good">精华</span>
                    <span :class="{top_2:top_2}" v-if="!item.top && !item.good && item.tab == 'share'">分享</span>
                    <span :class="{top_2:top_2}" v-if="!item.top && !item.good && item.tab == 'ask'">问答</span>
                    <span :class="{s_title:s_title}" :title="item.title" @click="$emit('title-index-bgc',index)" >{{item.title}}</span>
                    <img :src="item.author.avatar_url" alt="" :class="{right_img:right_img}">
                </div>
            </div>
          `
});
