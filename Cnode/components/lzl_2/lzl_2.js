Vue.component('ping',{
    props:['count'],
    template:
        `
        <div v-if="count.data">
            <div v-for="item of count.data.replies">
                <img class="p-img" :src="item.author.avatar_url" alt="" >
                <span class="p-sp" v-html="item.author.loginname"></span>
                <div class="p_div" v-html="item.content"></div>
            </div>
        </div>          
`
})