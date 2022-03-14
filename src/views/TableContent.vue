<script>
    export default {
        props: ['id'],
        name: "Table",

        data() {
            return {
                id: this.$route.params.id,
                job: null,
                tasks: [],
                task: "",
                tasks: [],
                editedTask: null,
            }
        },
        mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => this.tasks = data)
        .catch(err => console.log(err.message))
      },
       
    }
</script>
  






<template>
    <div class="container">
        <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">Edit</th>
          <th scope="col" class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.title }}</td>
          <td>
            <input type="checkbox" v-model="task.completed">
          </td>
          <td
            @click="editTask(index)"
            style="text-align: center; cursor: pointer"
          >
            <div>
              <img
                width="20"
                height="20"
                src="../components/pen.png"
                alt="pen"
              />
            </div>
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
                alt="pen"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    <InputValue></InputValue>
</template>