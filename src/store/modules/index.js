var state= {
  weather:'store天气',
}
var mutations= {
  getWeather(state,payload){
    alert(payload.val)
    if(payload.val==undefined){
      state.weather='晴转多云'
    }else {
      state.weather=payload.val
    }
  }
}

var actions = {
  getWeather({commit,state}){
    commit({
      type:'getWeather',
      val: '请求天气测试'
    })
  }
}

export default {
  state,
  mutations,
  actions
}
