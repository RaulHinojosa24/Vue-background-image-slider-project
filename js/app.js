const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

Vue.createApp({
  data() {
    return {
      image: "contBcg-0",
      index: 0
    }
  },
  methods: {
    moveSlider(value) {
      this.index += value;
      if (this.index < 0) {
        this.index = pictures.length - 1;
      } else if (this.index >= pictures.length) {
        this.index = 0;
      }

      this.image = pictures[this.index];
    }
  }
}).mount("#app");