<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <!-- <table>
      <th>
      </th>
      <tr v-for="weight in weight" :key="weight">
        <td v-for="rm in rms" :key="rm.rm">
          {{ rm }}
        </td>
      </tr>
    </table>-->
    <p style="text-align: left; padding-left: 40vw;">{{ p | calc }}円</p>
    <pre style="text-align: left;">{{$data}}</pre>
  </div>
</template>

<script>
import { setInterval } from "timers";
// import { setTimeout } from 'timers';
// import axios from 'axios'

export default {
  name: "SalaryPerSecond",
  data() {
    return {
      msg: "*",
      // rms: [],
      // weight: [],
      reps: 50,
      depth: 5,
      p: 0,
      second: 60 * 60 * 24 * 365 * 10,
      money: 8000000,
      secondPerMoney: 0,
      interval: null
    };
  },
  created() {
    this.secondPerMoney = this.money / this.second;
    this.interval = setInterval(() => {
      this.p = this.p + this.secondPerMoney;
    }, 100);
  },
  filters: {
    calc: function(v) {
      return Math.round(v * 10000) / 10000;
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
</style>
