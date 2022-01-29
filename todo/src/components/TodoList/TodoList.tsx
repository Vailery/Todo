import { useState } from "react";
import { isTemplateExpression } from "typescript";
import { Form } from "../Form/Form"
import {TodoItem} from "../TodoItem/TodoItem";

const defaultTodos = [
  {id:'000', text:'First todo', completed: false, time:'28/02/2022 20:35'},
  {id:'001', text:'Second todo', completed: false, time:'28/02/2022 21:35'}
]

interface ITodoItem{
    id: string;
    text: string;
    completed: boolean;
    time: string;
}

export const TodoList = () => {
    const [text, setText] = useState<string>('');
    const [todos, setTodos]=useState<ITodoItem[]>([]);

    const onClickDelete=(id:string)=>{
        const newTodos = todos.filter(item=> item.id !== id);

        setTodos(newTodos);
    }

    const onClickComplete=(id:string)=>{
        const newTodos = todos.map(item=>{
        if(item.id === id){
            // item.completed = !item.completed;
            return {...item, completed: !item.completed,}
        }
        return item
        })

        setTodos(newTodos);
    }

    const addNewTodo=()=>{
        const date = new Date();
        if(text !== ''){
        const newTodo = {
            id:"id" + Math.random().toString(16).slice(2),
            text: text,
            completed: false,
            time: date.toLocaleString(),
        }
    
        const newTodos =[...todos, newTodo];
        setTodos(newTodos);
        setText('');
    }else{
            alert('Введи todo');
        }
    }

    const completedCount = todos.reduce((prev, curr)=>{
        if(curr.completed){
            return prev + 1;
        }
        return prev;
    }, 0)

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            {todos.length === 0 ? <p>Начни уже делать что-нибудь</p>: null}
            <Form addNewTodo={addNewTodo} text={text} setText={setText}/>
            {todos.map((item)=>{
                return <TodoItem 
                key={item.id} 
                text={item.text} 
                onComplete={() => onClickComplete(item.id)} 
                onDelete={() => onClickDelete(item.id)}
                completed={item.completed}
                time={item.time}
                />
            })}
            <p>Всего дел: {todos.length}</p>
            <p>Выполненные: {completedCount}</p>
        </div>  
    )
   
}
