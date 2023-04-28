<template>
  <div class="board-group-container">
    <Group
      v-for="group in boardsStore.getGroups"
      :key="group.id"
      :groupId="group.id"
      class="mb-4"
    />
  </div>
</template>

<script>
import { useBoardsStore } from '../stores/boards';
import Group from '../components/groups/Group.vue';

export default {
  inject: ['$ws', '$axios'],
  setup() {
    const boardsStore = useBoardsStore();

    return { boardsStore };
  },
  components: {
    Group,
  },
  methods: {
    async getTaskStatuses() {
      await this.$axios.get('task_statuses/').then((res) => {
        this.boardsStore.setTaskStatuses(res.data);
      });
    },

    async getAllGroupTasks() {
      this.$ws.emit('boards/group_tasks/', {
        method: 'GET',
      });

      await this.$ws.on('boards/group_tasks/', (res) => {
        this.boardsStore.setGroups(res);

        const groups = res;

        if (groups.length) {
          groups.forEach((group) => this.getTasksPerGroup(group.id));
        }
      });
    },
    getTasksPerGroup(group_id) {
      this.$ws.emit('boards/group_tasks/tasks/', {
        method: 'GET',
        group_id: group_id,
      });

      this.$ws.on(`boards/group_tasks/tasks/${group_id}`, (res) => {
        this.boardsStore.setTasks(res);
      });
    },
  },
  async created() {
    await this.getTaskStatuses();

    this.getAllGroupTasks();
  },
};
</script>
