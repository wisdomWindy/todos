import { createSlice } from '@reduxjs/toolkit';
const todosSlice = createSlice({
  name: 'todosSlice',
  initialState: {
    todos: [{
      id: '001',
      name: '学习React',
      status: 3
    }, {
      id: '002',
      name: '学习Vue',
      status: 1
    }, {
      id: '003',
      name: '学习Typescript',
      status: 1
    }],
    status: [{
      name: '未开始',
      id: 1
    }, {
      name: '进行中',
      id: 2
    }, {
      name: '已完成',
      id: 3
    }]
  },

  reducers: {
    setCompleted: (state, action) => {
      const isExists = state.completed.some(item => item.id === action.payload.id);
      if (!isExists) {
        state.completed.push(action.payload);
      }
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export const { setCompleted, setTodos } = todosSlice.actions;
export default todosSlice.reducer;