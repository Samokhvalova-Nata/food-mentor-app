import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopBar from "components/TopBar/TopBar";
import Banner from "components/Banner/Banner";
import Button from "components/Button/Button";
import BehaviorItem from "components/BehaviorItem/BehaviorItem";
import { BehaviorContainer, BehaviorOption } from "./Behavior.styled";
import { moon, donut, soda, salt, pizza, cross } from  '../../images';


const behaviorData = [{
    text: 'I do not rest enough',
    src: moon,
}, {
    text: 'I have a sweet tooth',
    src: donut,
}, {
    text: 'I have too much soda',
    src: soda,
}, {
    text: 'I eat many salty foods',
    src: salt,
}, {
    text: 'I enjoy midnight snacks',
    src: pizza,
}, {
    text: 'None of the above',
    src: cross,
}
];

const Behavior = () => {
    const [behaviorList, setBehaviorList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const behaviorFromLS = JSON.parse(localStorage.getItem("behavior"));
        if(behaviorFromLS) {
            setBehaviorList(behaviorFromLS)
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("behavior", JSON.stringify(behaviorList));
    },[behaviorList]);

    const handleBehavior = (value) => {
        const newBehavior = !behaviorList.includes(value);
        if(newBehavior) {
            setBehaviorList(prev => [...prev, value]);
        } else {
            setBehaviorList(prev => prev.filter(el => el !== value))
        }
    };

    const handleContinue = () => {
        navigate('/exercise')
    };

    return (
        <>
            <Helmet>
                <title>Behavior</title>
            </Helmet>
            <TopBar address={'measure'}/>
            <BehaviorContainer>
                <Banner title={'Destructive behaviors'} 
                    text={'We all have them! Which are yours?'}/>
                <BehaviorOption>
                    {behaviorData.map(({ text, src }) => (
                        <BehaviorItem 
                            key={text}
                            text={text} src={src}
                            behaviorList={behaviorList}
                            onHandleBehavior={handleBehavior}/>
                    ))}
                </BehaviorOption>
                <Button text={'Continue'} handler={handleContinue} disabled={behaviorList.length === 0}/>
            </BehaviorContainer>
        </>
    );
};

export default Behavior;