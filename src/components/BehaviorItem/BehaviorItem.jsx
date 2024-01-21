import { useEffect, useState } from "react";
import { Input, Text } from "./BehaviorItem.styled";

const BehaviorItem = ({ text, src, onHandleBehavior, behaviorList }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (behaviorList.includes(text)) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    },[behaviorList, text]);

    const handleInputChange = e => {
        const { value } = e.target;
        onHandleBehavior(value);
    };

    return (
        <>
            <label>
                <Input type="checkbox" name="behavior" value={text} src={src} 
                onChange={handleInputChange} 
                checked={isChecked} 
                />
                    <div>
                        <img src={src} alt={text} width="30px" height="30px"/>
                        <Text>{text}</Text>
                    </div>
            </label>
        </>
    );
};

export default BehaviorItem;