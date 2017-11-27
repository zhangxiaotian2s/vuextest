<template>
  <div class="hello">
    <h1 @click="addAction()">{{ msg }}</h1>
    <h2>{{count}}</h2>
   
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
      // return this.$store.getters.count;
    }
  },
  created() {},
  methods: {
    addAction() {
      this.$store.dispatch("addAction", 10);
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
