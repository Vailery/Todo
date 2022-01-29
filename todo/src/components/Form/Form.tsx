import { ChangeEvent } from "react";
import { setTextRange } from "typescript"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"

interface IProps {
    text: string;
    setText: (value: string) => void;
    addNewTodo: ()=>void;
}



export const Form = ({text, setText, addNewTodo}: IProps) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setText(event.target.value);
    }

    return (
        <div>
            <Input value={text} onChange={onChange}/>
            <Button text="Добавить" onClick={addNewTodo}/>
        </div>  
    )
   
}
