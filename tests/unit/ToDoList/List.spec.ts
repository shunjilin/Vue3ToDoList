import { shallowMount } from '@vue/test-utils';
import List from '@/components/ToDoList/List.vue';
import { ToDoListKey } from '@/components/ToDoList/store';

describe('List', () => {
  it('renders with todo items', () => {
    const wrapper = shallowMount(List, {
      global: {
        provide: {
          [ToDoListKey as any]: {
            list: [
              {
                title: 'item 1',
                completed: false,
                created: new Date('2020-09-20'),
              },
              {
                title: 'item 2',
                completed: true,
                created: new Date('2020-09-20'),
              },
            ],
          },
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('calls removeToDo function with correct index on clicking ×', () => {
    const removeToDo = jest.fn();
    const wrapper = shallowMount(List, {
      global: {
        provide: {
          [ToDoListKey as any]: {
            list: [
              {
                title: 'item 1',
                completed: false,
                created: new Date('2020-09-20'),
              },
              {
                title: 'item 2',
                completed: true,
                created: new Date('2020-09-20'),
              },
            ],
            removeToDo,
          },
        },
      },
    });
    wrapper.findAll('span.close')[1].trigger('click');
    expect(removeToDo).toHaveBeenCalledWith(1);
  });
});
