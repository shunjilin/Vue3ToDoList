import { inject, InjectionKey, provide, reactive, toRefs, readonly } from 'vue';

interface ToDoItem {
  completed: boolean;
  title: string;
  created: Date;
}

interface State {
  list: ToDoItem[];
  addToDoInput: string;
}

export function toDoListStore() {
  const state = reactive<State>({
    list: [],
    addToDoInput: '',
  });

  function addToDo() {
    if (state.addToDoInput) {
      state.list = [
        ...state.list,
        {
          title: state.addToDoInput,
          completed: false,
          created: new Date(Date.now()),
        },
      ];
      state.addToDoInput = '';
    }
  }

  function removeToDo(indexToRemove: number) {
    state.list = state.list.filter((todo, index) => index !== indexToRemove);
  }

  return {
    ...toRefs(state),
    addToDo,
    removeToDo,
  };
}

type ToDoListStore = ReturnType<typeof toDoListStore>;

export const ToDoListKey: InjectionKey<ToDoListStore> = Symbol('ToDoListKey');

export function provideToDoListStore(store: ToDoListStore): void {
  provide(ToDoListKey, store);
}

export function useToDoListStore(): ToDoListStore {
  const store = inject(ToDoListKey, toDoListStore());
  return store;
}
