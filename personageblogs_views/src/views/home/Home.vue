<template>
<div class="home">
    <h1>首页 {{Letmi }},{{age}}</h1>
    {{this.$route.params.alert}}
</div>
</template>

<script lang="ts">
// // import { Component, Vue } from 'vue-property-decorator';
// // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// // @Component({
// //   components: {
// //     HelloWorld,
// //   },
// // })
// export default class Home extends Vue {}
</script>
<script>
export default {
    data() {
        return {
            age: 13,
            Letmi: this.$route.params.Letmi
        }
    },
    methods: {
        getLetmi() {
            this.$http.post(`/user/find`)
                .then((res) => {
                    console.log(res)
                })
        },
        mounted() {
            // this.Letmis = this.$route.params.Letmi
            this.getLetmi()
        }
    },

}
</script>
