<script>

let storeDatas;
// get array data from local storage
storeDatas = JSON.parse(localStorage.getItem("toDoList"));

export default {
  name: "ToDoList",
  data() {
    return {
      task: "",
      tasks: storeDatas ? storeDatas : [],
      editedTask: null,
    };
  },

  methods: {

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

      // save array data in local storage
      localStorage.setItem("toDoList", JSON.stringify(this.tasks));

      // clear input
      this.task = "";
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
    <!-- <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Type</th>
          <th scope="col" class="text-center">Edit</th>
          <th scope="col" class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>{{ task.name }}</td>
          <td>
            {{ task.status }}
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
    </table> -->
  </div>
</template>

<style scoped>
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
