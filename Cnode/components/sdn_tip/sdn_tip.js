Vue.component('sdn-tip', {
    props:['tip','tip_wrap','tip_','tip_2','tip_index'],
    template: `
            <div :class="{tip_wrap:tip_wrap}">
                <span v-for="(item,index) of tip">
                    <span @click="$emit('tip-index-bgc',index)"  :class="tip_index == index ? {tip_2:tip_2}: {tip_:tip_}">{{item}}</span>
                </span>
            </div>
          `
});