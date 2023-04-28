<template>
  <div class="board-task">
    <input type="text" v-model="task.name" class="task-name col-5" />

    {{ task.priority }}

    <div class="tag-component mx-3" :data-color="getTaskStatuses(task.status).color">
      {{ getTaskStatuses(task.status).name }}
    </div>

    {{ task.status }}

    {{ task.timeTracking }}

    {{ task.assignedTo }}
  </div>
</template>

<script>
import { useBoardsStore } from '../../stores/boards';

export default {
  setup() {
    const boardsStore = useBoardsStore();

    return { boardsStore };
  },
  props: {
    taskId: {
      validator(value) {
        if (!Number.isInteger(value)) return false;

        return true;
      },
      default() {
        return undefined;
      },
    },
  },
  computed: {
    task() {
      return this.boardsStore.getTask(this.taskId);
    },
  },
  methods: {
    getTaskStatuses(statusId) {
      return this.boardsStore.getTaskStatuses(statusId);
    },
  },
};
</script>

<style lang="scss">
.board-task {
  display: flex;
  align-items: center;

  .task-name {
    border: 2px solid transparent;
    padding: 5px;

    &:hover,
    &:focus {
      border: 2px dashed #ddd;
      outline: none;
    }
  }

  .tag-component {
    &[data-color='silver'] {
      background-color: silver;
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
  }
}
</style>
