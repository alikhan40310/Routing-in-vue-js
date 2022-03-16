<script>

let storeDatas;
// get array data from local storage
storeDatas = JSON.parse(localStorage.getItem("toDoList"));

export default {
  props: ['id'],
  name: "ToDoList",
  data() {
    return {
      task: "",
      id: this.$route.params.id,

      tasks: storeDatas ? storeDatas : [],
      editedTask: null,
    };
  },
  mounted() {
     fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => this.tasks = data)
    .catch(err => console.log(err.message))
  },

  methods: {
  //  how to get data by params
    


    // submit task
    submitTask() {
      if (this.task.length === 0) {
        return;
      }
      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "to-do",
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      console.log(this.tasks);
      // save array data in local storage
      localStorage.setItem("toDoList", JSON.stringify(this.tasks));

      // clear input
      this.task = "";
      // routes between child components to child components
      // this.$router.push("/table");     
  

    },
    myFunc() {
      // this.$router.push("/table/" + this.id); 
    },

    // delete task
    deleteTask(index) {

        if(confirm('Are you sure?')) {
          this.tasks.splice(index, 1);
          // delete array data from local storage
          localStorage.setItem("toDoList", JSON.stringify(this.tasks));
        }

    },
    // edit task
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>My ToDo App</h2>
    <form @submit.prevent="submitTask">
      <div class="d-flex gap-2">
        <input
          v-model="task"
          type="text"
          placeholder="Enter Value"
          class="form-control"
        />
        <button class="btn btn-warning rounded-1">Submit</button>
      </div>
    </form>
    <!-- using bootstrap table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td><RouterLink @click="myFunc" :to="'/table/' + task.id"> {{task.title}} </RouterLink> </td>
             
          <td>
            <input type="checkbox" v-model="task.completed">
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

<style scoped>
a{
  text-decoration: none;
  color: black;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
h2 {
  margin-top: 6rem;
  margin-bottom: 2rem;
}
.ItemCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.pointer {
  cursor: pointer;

}
</style>
