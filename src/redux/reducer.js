import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

export const getTodosFromServer = createAsyncThunk('Todos/getTodosFromServer',
(URL)=>{
   return fetch(URL)
   .then(res=>res.json())
   .then(data =>data)
})

const slice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {
    addTodo:(state,action)=>{
        console.log('add',action.payload)
        state.push(action.payload)
        
    },
    removeTodo: (state,action)=>{
        return state.filter(item=> item.id !== action.payload.id)
    },
    toggleTodo: (state,action)=>{
        console.log('state ',current(state))
        let {id }= {...action.payload};
       return state.map(item=>{
            if (item.id === id){
                return {id: item.id, title:item.title, completed: !item.completed};
            }else{
                return item;
            }
        })
  },
},
  extraReducers:(builder)=>{
    builder.addCase(getTodosFromServer.fulfilled,
        (state,action)=>{
            state.push(...action.payload)
        })
  }
});

export default slice.reducer;
export const {addTodo, removeTodo, toggleTodo} = slice.actions 
