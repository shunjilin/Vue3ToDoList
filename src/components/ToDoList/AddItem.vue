<template>
  <input @keydown.enter="addToDo" type="text" v-model="addToDoInput" />
  <button @click="addToDo">Add</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToDoListStore } from './store';
export default defineComponent({
  setup() {
    const { addToDo, addToDoInput } = useToDoListStore();

    return {
      addToDo,
      addToDoInput,
    };
  },
});
</script>

<style scoped>
button {
  background-color: #009688;
  color: white;
  margin: 0 0.4rem;
  padding: 0.4rem 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
}
input {
  border: 1px solid #525858;
  padding: 0.2rem 0.4rem;
}
</style>
