<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                
            }
        },
       
    }
</script>

<template>
    <div class="container">
        <h1>job details</h1>
        <!-- <p>the job id is {{$route.params.id}}</p> -->
        <p>the job id is {{id}}</p>
    </div>
</template>