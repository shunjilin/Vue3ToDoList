<template>
  <div>
    <h1>ToDo List</h1>
    <AddItem />
    <List />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { provideToDoListStore, useToDoListStore } from './store';
import List from './List.vue';
import AddItem from './AddItem.vue';

export default defineComponent({
  components: {
    List,
    AddItem,
  },
  setup() {
    const store = useToDoListStore();
    provideToDoListStore(store);
  },
});
</script>

<style scoped>
div {
  text-align: center;
  margin: 0 auto;
  max-width: 300px;
}
</style>
