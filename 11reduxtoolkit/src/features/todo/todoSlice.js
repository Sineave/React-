import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

const addingTodo = ( state , action )=>{
    const newTodo = {
        id : nanoid() , text : action.payload //can also write text:action.payload
    }
    state.todos.push(newTodo)
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers : {
        addTodo : addingTodo,
        removeTodo : ( state , action )=>{
            state.todos = state.todos.filter((todo)=>( todo.id !== action.payload ))
        },
        updateTodo : (state , action) => {
            state.todos = state.todos.map((todo)=>{
                if(todo.id == action.payload){todo.text = action.payload}
            })
        }
    }
})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer