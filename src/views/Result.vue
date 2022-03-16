
<script>
    export default {
        props: ['id'],
        data() {
            return {
                id: this.$route.params.id,
                task: "",
                tasks: [],
                editedTask: null,
            }
        },
        mounted() {
             fetch('https://jsonplaceholder.typicode.com/todos/' + this.id)
            .then(res => res.json())
            .then(data => this.tasks = data)
            .catch(err => console.log(err.message))
            
        },
        methods: {
          BackFunc(){
             this.$router.push("/input"); 
          },
        }
    }
</script>


<template>
    <div class="container">
      
      <button class="btn btn-primary mt-3" @click="BackFunc">Back</button>

        <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ tasks.title }}</td>
          <td>
            <input type="checkbox" v-model="tasks.completed">
          </td>
          <td
            style="text-align: center; cursor: pointer"
             @click="deleteTask(index)" 
          >
            <div>
              <img
                width="20"
                height="20"
                src="../components/recycle.png"
                alt="delete"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>