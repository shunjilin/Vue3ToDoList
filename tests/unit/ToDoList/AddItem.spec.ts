import { shallowMount } from '@vue/test-utils';
import AddItem from '@/components/ToDoList/AddItem.vue';
import { ToDoListKey } from '@/components/ToDoList/store';

describe('AddItem', () => {
  it('renders', () => {
    const wrapper = shallowMount(AddItem, {
      global: {
        provide: {
          [ToDoListKey as any]: {},
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('calls addToDo function on clicking add button', () => {
    const addToDo = jest.fn();
    const wrapper = shallowMount(AddItem, {
      global: {
        provide: {
          [ToDoListKey as any]: {
            addToDo,
          },
        },
      },
    });
    wrapper.get('button').trigger('click');
    expect(addToDo).toHaveBeenCalled();
  });

  it('calls addToDo function on enter keydown on input', () => {
    const addToDo = jest.fn();
    const wrapper = shallowMount(AddItem, {
      global: {
        provide: {
          [ToDoListKey as any]: {
            addToDo,
          },
        },
      },
    });
    wrapper.get('input').trigger('keydown.enter');
    expect(addToDo).toHaveBeenCalled();
  });
});
