<template>
  <div class="Categorylist">
    <ul id="example-1">   
  <li v-for="(item,index) in info"  v-bind:key="item">
    <span style="display:none">{{index=index+1}}</span>
   <router-link :to="'/categories/'+ index">Go to {{ item }}</router-link> 
  </li>
</ul>
  </div>
</template>

<script>
import axios from 'axios';
import APIURL from './constants.js'

export default {
  name: 'Categorylist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: [],
      apiurl: APIURL['APIURL']
    }
    },
  mounted () {
    axios
      .get(this.apiurl+"categories")
      .then(response => (response['data']['categories'].forEach(element => {
        this.info.push(element[0])
      })))
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: circle;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
