<script>
    export default{
        props: ['id'],
        data() {
            return {
                jobs: [
                    {title: 'Ninja ux designer', id: 1, details: 'lorem'},  
                    {title: 'Ninja web developer', id: 2, details: 'lorem'},
                    {title: 'Ninja vue developer', id: 3, details: 'lorem'},
                ],
            }
        },
        mounted() {
            fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message))
        },
    }

</script>

<template>
    <div class="container">
        <h2>jobs</h2>
        <div v-for="job in jobs" :key="job">
            <router-link :to="{name: 'JobDetails', params: {id: job.id}}">

                <h3>{{ job.title }}</h3>
            </router-link>
            
        </div>
    </div>
</template>