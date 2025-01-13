<template>
  <div>
    <h1>Good Detail</h1>
    <div v-if="good">
      <p>Name: {{ good.name }}</p>
      <p>Price: {{ good.price }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      good: null
    };
  },
  mounted() {
    this.fetchGood();
  },
  methods: {
    async fetchGood() {
      try {
        const response = await this.$axios.get(`/getGoods/${this.$route.params.id}`);
        this.good = response.data;
      } catch (error) {
        console.error('Error fetching good:', error);
      }
    }
  }
};
</script>
