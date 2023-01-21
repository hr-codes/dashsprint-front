<template>
  <div>Dash</div>
</template>

<script>
export default {
  inject: ['$ws'],
  methods: {
    getAllGroupTasks() {
      this.$ws.emit('group_tasks.getAll');

      this.$ws.on('group_tasks.getAll', (res) => {
        const groups = res.data;

        if (groups.length) {
          groups.forEach((group) => this.getTasksPerGroup(group.id));
        }
      });
    },
    getTasksPerGroup(group_id) {
      this.$ws.emit('tasks.getPerGroup', group_id);

      this.$ws.on('tasks.getPerGroup', (res) => console.log(res));
    },
  },
  created() {
    this.getAllGroupTasks();
  },
};
</script>
