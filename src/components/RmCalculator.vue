<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <p>
      <input type="number" v-model.number="weight" />
    </p>
    <p>
      <input type="number" v-model.number="reps" />
    </p>
    <p>{{ max }}</p>
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
      reps: 0
      // max: 0
    };
  },
  computed: {
    max: function() {
      if (this.reps === 0) return 0;
      if (this.reps === 1) return this.weight * this.reps;

      let v = this.weight * (1 + this.reps / 40);
      return Math.round(v * 100) / 100;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  height: 2rem;
  width: 10rem;
  font-size: 1.2rem;
  border: 1px solid #cccccc;
  border-radius: 6px;
}
</style>
