import { useState } from "react"
import { Button } from "../Button/Button"

interface IProps{
    text: string;
    completed: boolean;
    time: string;
    onDelete: () => void;
    onComplete: () => void;
  }

export const TodoItem = ({text, completed, time, onDelete, onComplete}:IProps)=>{
    const [showTime, setShowTime] = useState(false);

    const toggleShowTime =()=>{
        setShowTime(!showTime);
    }

    return <div style={{position:"relative"}}> 
        <div style={{display:"flex"}}>
            <Button text="&#10003;" onClick={onComplete}/>
            <p onClick={toggleShowTime} style={{textDecoration: completed === true ? 'line-through': 'none'}}>{text}</p>
            <Button text="&#10007;" onClick={onDelete}/>
        </div>
        {showTime ? <p>{time}</p>:null} 
    </div>
}
