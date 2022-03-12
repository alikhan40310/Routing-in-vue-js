<script>
    export default {
        props: ['id'],
        data() {
            return {
                id: this.$route.params.id,
                job: null,
                
            }
        },
        mounted() {
            fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message))
        }
       
    }
</script>

<template>
    <div class="container">
        <h1>{{job.title}}</h1>
        <!-- <p>the job id is {{$route.params.id}}</p> -->
        <p>the job id is {{id}}</p>
        <p>{{job.details}}</p>
    </div>
</template>