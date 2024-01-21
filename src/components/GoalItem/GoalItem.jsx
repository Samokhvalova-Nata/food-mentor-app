import { useEffect, useState } from "react";
import { Input, Text } from "./GoalItem.styled";


const GoalItem = ({ text, src, handleChecked }) => {
    const [goal, setGoal] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const goalFromLS = JSON.parse(localStorage.getItem("goal"));
        if(goalFromLS) {
            setGoal(goalFromLS)
        }
    },[setGoal]);

    useEffect(() => {
        if(text === goal) {
            setIsChecked(true);
            handleChecked(true);
        }
    },[setIsChecked, handleChecked, text, goal]);

    const handleInputChange = e => {
        const { value } = e.target;
        localStorage.setItem("goal", JSON.stringify(value));
        setGoal(value);
    };

    return (
        <>
            <label>
                <Input type="radio" name="goal" value={text} src={src} 
                onChange={handleInputChange} checked={isChecked}/>
                    <div>
                        <Text>{text}</Text>
                    </div>
            </label>
        </>
    );
};

export default GoalItem;
