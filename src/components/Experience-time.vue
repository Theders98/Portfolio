<template>
  <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="w-2 bg-gray-800"></div>
    <div class="flex items-center px-2 py-3">
      <div class="mx-3">
        <h2 class="text-xl font-semibold text-gray-800">{{this.timer}}</h2>
      </div>
    </div>
  </div>
</template>

	<script>
import VueTimers from "vue-timers";
import moment from 'moment';
export default {
name: "Experience-timer",
  data: function () {
    return {
    timer: "00:00"
    };
  },
  methods: {
    changeTime(){

	  let days = Math.abs(moment("2020-03-25").diff(moment(), "days"))
	  let years = parseInt(days/365);
	  let months = parseInt(days/30.5) - parseInt(years * 12)
	  let daysoff = (days) -parseInt((months*30.5) - (years*12*30))
	  this.timer = years+" Years  "+ months+" Months  "+ daysoff+ " Days"+Math.abs(moment("2020-03-25").diff(moment(), "seconds"))
      this.$forceUpdate();
   }},
  mounted() {
      setInterval(this.changeTime(),5000);
  },
};
</script>