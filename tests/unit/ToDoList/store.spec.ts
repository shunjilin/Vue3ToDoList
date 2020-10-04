import { toDoListStore } from '@/components/ToDoList/store';

const DateStub = new Date('2020-09-20T00:00:00Z');
const RealDate = Date.now;

describe('store.ts', () => {
  beforeAll(() => {
    Date.now = jest.fn(() => DateStub.getTime());
  });

  afterAll(() => {
    Date.now = RealDate;
  });

  it('adds todo list item', () => {
    const { addToDo, list, addToDoInput } = toDoListStore();
    list.value = [
      {
        title: 'existing item',
        completed: true,
        created: new Date(Date.now()),
      },
    ];
    addToDoInput.value = 'new item';
    addToDo();
    expect(addToDoInput.value).toBe('');
    expect(list.value).toEqual([
      {
        title: 'existing item',
        completed: true,
        created: DateStub,
      },
      {
        title: 'new item',
        completed: false,
        created: DateStub,
      },
    ]);
  });

  it('removes todo list item', () => {
    const { removeToDo, list } = toDoListStore();
    list.value = [
      {
        title: 'item 1',
        completed: true,
        created: DateStub,
      },
      {
        title: 'item 2',
        completed: false,
        created: DateStub,
      },
    ];

    removeToDo(0);
    expect(list.value).toEqual([
      {
        title: 'item 2',
        completed: false,
        created: DateStub,
      },
    ]);
  });
});
