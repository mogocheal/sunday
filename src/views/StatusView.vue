<template>
    <div class="status has-header">
        <banner></banner>
        <user-bar></user-bar>
        <div class="content-list">
            <card mold='quote' v-for="item in items " :key="item">
                <a class="list-link" href="#">显示更多广播</a>
            </card>
        </div>
    </div>
</template>
<script>
import Banner from '../components/Banner'
import UserBar from '../components/UserBar'
import Card from '../components/Card'
import downloadApp from '../components/DownloadApp'
export default {
  name:'status',
  components:{Banner,UserBar,Card,downloadApp},
  data(){
      return{ items: new Array(10)}
  },
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  line-height: 1.8rem;
  text-align: center;
  color: #42bd56;
}
</style>
