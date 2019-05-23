<template>
  <div>
    <h1>PC端Web应用模板</h1>
    <p v-html="userInfo"></p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      userInfo: ''
    }
  },
  components: {
  },
  created(){
    $.get(window.PATH.getContextUser, (res) => {
      var user = res.d.results[0];
      var _str = '';
      for(var key in user){
        _str += key + ': ' + user[key] + '<br/>';
      }
      this.userInfo = _str;
    })
  }
}
</script>

<style lang="scss" type="text/css" rel="stylesheet/scss">
@import '~assets/scss/main';
</style>
