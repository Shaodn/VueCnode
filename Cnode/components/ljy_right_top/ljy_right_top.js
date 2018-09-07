Vue.component('ljy_right_top',{
    props:['contents','zuozhe'],
    data() {
        return {
            num:''
        }
    },
    template:`
            <div class="right_all"  @click="zuozhe">
                     <div class="ljy_right_header">
                        <ul class="ljy_right_breadcrumb">
                            <a href="/">个人信息页</a>
                        </ul>
                    </div>
                    <div class="ljy_right_userinfo">
                        <div class="ljy_right_user_avatar" >
                            <img v-if="contents.data" :src="contents.data.avatar_url" class="user_avatar" title="XadillaX">
                             <a class="ljy_right_dark" v-if="contents.data" v-html="contents.data.githubUsername"></a>
                        </div>
                        <div class="ljy_right_user_profile" v-if="contents.data" v-html="contents.data.score">
                          积分
                        </div>
                    </div>
                   
              </div>
             `
})