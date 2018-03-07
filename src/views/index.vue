<template>
  <div>
    <h1>欢迎来到你的vue项目</h1>
    <Weather></Weather>

  </div>
</template>

<script>
import Weather from '../components/Weather'
    export default {
       components:{Weather},
       name: 'index',
        data() {
            return {}
        }
    }
</script>

<style></style>
