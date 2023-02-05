import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        ids:[]
    },
    reducers: {
        todoAdded(state, action) {
            state.ids.push(action.payload.id);
        },
        todoRemoved(state, action) {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

export const todoAdded = todoSlice.actions.todoAdded;
export const todoRemoved = todoSlice.actions.todoRemoved;

export default todoSlice.reducer;

