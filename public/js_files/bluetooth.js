const { createApp } = Vue;

createApp({
  data() {
    return {
      obdSensor: "Searching for Bluetooth Devices...",
    };
  },
}).mount("#app");
