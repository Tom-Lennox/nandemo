<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <table>
      <th></th>
      <tr v-for="weight in weights">
        <td v-for="rm in rms">
          <div @click="ToggleColor(rm.reps, weight)" :class="cGray">{{ rm.reps }}</div>
        </td>
      </tr>
    </table>
    <!-- <table>
      <th></th>
      <tr v-for="(aaa, key) in aaas" :key="aaas.key">
        <td>
          <div @click="ToggleColor(key)">{{ rm.reps }}</div>
        </td>
      </tr>
    </table>-->
    <pre style="text-align: left;">{{ $data }}</pre>
  </div>
</template>

<script>
import { setInterval } from "timers";
// import { setTimeout } from 'timers';
// import axios from 'axios'

export default {
  name: "RmSheet",
  data() {
    return {
      msg: "rps",
      rms: [],
      weights: [],
      aaas: [],
      reps: 5,
      depth: 10,
      interval: null,
      colors: [{ color: "#000000" }],
      cGray: "gray"
    };
  },
  created() {
    let k = 0;

    for (let i = 1; i <= this.reps; i++) {
      this.rms.push({ reps: i, color: false });
      // for (let j = 1; j <= this.depth; j++) {
      //   k++
      //   this.aaas.push({ key: k, reps: i, weight: j * 2.5 });
      // }
    }
    for (let i = 1; i <= this.depth; i++) {
      this.weights.push(i * 2.5);
    }

    // this.rms.push(1, 2, 3);
    // this.secondPerMoney = this.money / this.second;
    // this.interval = setInterval(() => {
    //   this.p = this.p + this.secondPerMoney;
    // }, 100);
  },
  methods: {
    ToggleColor: function(reps, weight) {
      console.log(reps, weight);
    }
  },
  filters: {
    calc: function(weight, rm) {
      if (weight === 1) return rm;

      let v = weight * 2.5 * (1 + rm / 40);
      if (rm === 1) {
        return weight * 2.5 * rm;
      } else {
        return Math.round(v * 100) / 100;
      }
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
  background-color: #cccccc;
}
</style>
