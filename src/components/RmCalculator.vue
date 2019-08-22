<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <input v-model.number="weight">
    <input v-model.number="reps">
    {{ max }}
    <pre style="text-align: left;">{{ $data }}</pre>
  </div>
</template>

<script>
import { setInterval } from "timers";
// import { setTimeout } from 'timers';
// import axios from 'axios'

export default {
  name: "RmCalculator",
  data() {
    return {
      weight: 0,
      reps: 0,
      max: 0
    };
  },
  computed: {
    max: function() {
      return this.weight
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

td div {
  height: 20px;
  width: 20px;
  border: 1px solid #000000;
}

.gray {
  background-color: #CCCCCC;
}
</style>
