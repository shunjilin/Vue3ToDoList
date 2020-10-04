import { shallowMount } from '@vue/test-utils';
import ToDoList from '@/components/ToDoList/index.vue';

describe('AddItem', () => {
  it('renders', () => {
    const wrapper = shallowMount(ToDoList);
    expect(wrapper.element).toMatchSnapshot();
  });
});
