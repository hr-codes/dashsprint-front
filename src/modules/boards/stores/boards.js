import { defineStore } from 'pinia';

export const useBoardsStore = defineStore('boards', {
  state: () => ({
    groups: [],
    tasks: [],
    taskStatuses: [],
  }),
  getters: {
    getGroups: (state) => state.groups,
    getGroup: (state) => (groupId) => state.groups.find((group) => group.id === groupId),
    getTasks: (state) => (groupId) => state.tasks.filter((task) => task.groupTaskId === groupId),
    getTask: (state) => (taskId) => state.tasks.find((task) => task.id === taskId),
    getTaskStatuses: (state) => (statusId) =>
      state.taskStatuses.find((status) => status.id === statusId),
  },
  actions: {
    setGroups(payload) {
      this.groups = payload;
    },
    setTasks(payload) {
      console.log('test4', payload);

      payload.forEach((data) => {
        const exists = this.tasks.find((task) => task.id === data.id);

        if (exists) return;

        this.tasks.push(...payload);
      });
    },
    setTaskStatuses(payload) {
      this.taskStatuses = payload;
    },
  },
});
