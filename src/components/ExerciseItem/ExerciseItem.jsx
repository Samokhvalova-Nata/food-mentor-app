import { useEffect, useState } from "react";
import { Input, Text } from "./ExerciseItem.styled";

const ExerciseItem = ({ text }) => {
    const [exercise, setExercise] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const exerciseFromLS = JSON.parse(localStorage.getItem("exercise"));
        if(exerciseFromLS) {
            setExercise(exerciseFromLS)
        }
        if(text === exercise) {
            setIsChecked(true)
        }
    },[setExercise, setIsChecked, text, exercise ])

    const handleInputChange = e => {
        const { value } = e.target;
        localStorage.setItem("exercise", JSON.stringify(value));
        setExercise(value);
    };

    return (
        <>
            <label>
                <Input type="radio" name="exercise" value={text}
                onChange={handleInputChange} checked={isChecked}/>
                    <div>
                        <Text>{text}</Text>
                    </div>
            </label>
        </>
    );
};

export default ExerciseItem;