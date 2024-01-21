import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopBar from "components/TopBar/TopBar";
import Banner from "components/Banner/Banner";
import GoalItem from "components/GoalItem/GoalItem";
import Button from "components/Button/Button";
import { GoalContainer, GoalsOption, Text } from "./Goal.styled";
import { loseWeight, gainMuscle, healthyHabits, healthyHabits2 } from  '../../images';


const goalData = [{
        text: 'Lose Weight',
        src: loseWeight,
    }, {
        text: 'Gain Muscle',
        src: gainMuscle,
    }, {
        text: 'Develop healthy habits',
        src: healthyHabits,
    }, {
        text: 'Develop healthy habits2',
        src: healthyHabits2,
    }
];

const Goal = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/measure')
    };

    return (
        <>
            <Helmet>
                <title>Goal</title>
            </Helmet>
            <TopBar address={'home'}/>
            <GoalContainer>
                <Banner title={'The Goal'} 
                    text={'Focus on the health benefits you need. Balanced nutrition will let you achieve them'}/>
                <Text>What are your goals?</Text>
                <GoalsOption>
                    {goalData.map(({ text, src }) => (
                        <GoalItem 
                            key={text} text={text} src={src} handleChecked={setIsChecked}
                        />
                    ))}
                </GoalsOption>
                <Button text={'Continue'} handler={handleContinue} disabled={!isChecked}/>
            </GoalContainer>
        </>
    );
};

export default Goal;
