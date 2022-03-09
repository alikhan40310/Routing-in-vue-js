<script>
 
 
</script>




<template>

    <div class="container">
        <table class="table table-bordered mt-5">
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
    </table>
    </div>
</template>