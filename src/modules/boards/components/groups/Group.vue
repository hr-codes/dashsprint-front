<template>
  <div class="board-group" :data-color="board.color">
    <div class="informations bg-light">
      <!-- <button class="btn">Toggle</button> -->

      <h5>{{ board.name }}</h5>
    </div>

    <div class="content">
      <Task v-for="task in tasks" :key="task.id" :taskId="groupId" />
    </div>
  </div>
</template>

<script>
import { useBoardsStore } from '../../stores/boards';
import Task from '../tasks/Task.vue';

export default {
  setup() {
    const boardsStore = useBoardsStore();

    return { boardsStore };
  },
  props: {
    groupId: {
      validator(value) {
        if (!Number.isInteger(value)) return false;

        return true;
      },
      default() {
        return undefined;
      },
    },
  },
  components: {
    Task,
  },
  computed: {
    board() {
      return this.boardsStore.getGroup(this.groupId);
    },
    tasks() {
      return this.boardsStore.getTasks(this.groupId);
    },
  },
};
</script>

<style lang="scss">
.board-group {
  padding-left: 0px;

  .informations {
    padding: 18px;
    display: flex;
    align-items: center;

    h5 {
      margin: 0;
    }
  }

  .content {
    padding: 15px;
  }

  &[data-color='cyan'] {
    border-left: 4px solid cyan;
  }

  &[data-color='orangered'] {
    border-left: 4px solid orangered;
  }
}
</style>
