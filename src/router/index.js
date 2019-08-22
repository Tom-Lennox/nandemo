import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import SalaryPerSecond from '@/components/SalaryPerSecond';
// import RmSheet from '@/components/RmSheet';
import RmCalculator from '@/components/RmCalculator';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld,
      // name: 'SalaryPerSecond',
      // component: SalaryPerSecond,
      // name: 'RmSheet',
      // component: RmSheet,
      name: 'RmCalculator',
      component: RmCalculator,
    },
  ],
});
