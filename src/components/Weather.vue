<template>
  <div><span class="weather">天气：{{weather}}   </span>
    <span @click="freshWeather">最新天气</span>
    <p>321312</p>
    <p>{{zxc}}</p>
  </div>
  

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Weather',
    props: {
      weather: {
        type: String,
        required: false,
        default: '默认天气'
      }
    },
    data() {
      return {}
    },
    methods: {
      freshWeather: function () {
        this.$store.commit({
          type: 'getWeather',
          val: '修改后的天气'
        })
      }
    },
    computed: {
      // Map store/user state
      ...mapState({
        zxc: state => {
          console.log(state);
         return state.index.weather
        },

      })
    },
//    created() {
//      this.freshWeather()
//    },

  }


</script>

<style scoped>
  .weather {
    color: red;
    margin-right: 50px;
  }
</style>
