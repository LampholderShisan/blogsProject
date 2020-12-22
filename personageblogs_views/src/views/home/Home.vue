<template>
  <div class="home">
    <h1>首页 {{ Letmi }},{{ age }}</h1>
    {{ this.$route.params.alert }}
    <h2 @click="click()">发送qingiqu</h2>
  </div>
</template>
 <script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Component({
//   components: {
//     HelloWorld,
//   },
// })
export default class Home extends Vue {}
</script>
<script>
export default {
  data() {
    return {
      age: 13,
      Letmi: this.$route.params.Letmi,
    };
  },
  methods: {
    getisLogin() {
      // let token = localStorage.getItem("token");
      this.$http
        .post("/", {
          params: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.err < -900 && res.data.msg == "token失效") {
            localStorage.removeItem("token")
            alert("请重新登录");
            this.$router.push({
              path: "/login",
              name: "login",
            });
          }
        });
    },
    click() {
      this.$http
        .post("/images", {
          params: {
            img: "http://",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    console.log(this.$route.params)
    // this.Letmis = this.$route.params.Letmi
    this.getisLogin();
    console.log("首页了");
  },
};
</script>

 
 