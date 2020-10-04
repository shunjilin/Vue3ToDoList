<template>
  <ul>
    <li v-for="(item, index) in list" :key="item.created">
      <input type="checkbox" v-model="item.completed" />
      <span :class="item.completed && 'completed'">{{ item.title }}</span>
      <span class="close" @click="removeToDo(index)">×</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToDoListStore } from './store';
export default defineComponent({
  setup() {
    const { list, removeToDo } = useToDoListStore();

    return {
      list,
      removeToDo,
    };
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 25px auto;
  text-align: left;
  vertical-align: middle;
}
li {
  border: 1px solid#525858;
  padding: 0.2rem 0.5rem;
  border-top: none;
  display: flex;
}
li:first-child {
  border-top: 1px solid #525858;
}
li > * + * {
  margin-left: 0.4rem;
}
.close {
  cursor: pointer;
  color: red;
  margin-left: auto;
}
.completed {
  text-decoration: line-through;
}
</style>
