import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import TopBar from "components/TopBar/TopBar";
import Banner from "components/Banner/Banner";
import MeasureSwitcher from "components/MeasureSwitcher/MeasureSwitcher";
import Button from "components/Button/Button";
import { InputMeasure, InputMeasureText, InputMeasureWrap,  MeasureContainer } from "./Measure.styled";


const Measure = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [unit, setUnit] = useState('imperial');
    const [heightUnit, setHeightUnit] = useState('ft');
    const [weightUnit, setWeightUnit] = useState('pd');
    const navigate = useNavigate();

    useEffect(() => {
        const heightFromLS = JSON.parse(localStorage.getItem("height"));
        if(heightFromLS) {
            setHeight(Number.parseInt(heightFromLS))
        }

        const weightFromLS = JSON.parse(localStorage.getItem("weight"));
        if(weightFromLS) {
            setWeight(Number.parseInt(weightFromLS))
        }
        height && weight ? setIsDisabled(false) : setIsDisabled(true);
    }, [height, weight, setIsDisabled]);

    useEffect(() => {
        const unitFromLS = JSON.parse(localStorage.getItem("unit"));
        if(unitFromLS) {
            setUnit(unitFromLS)
        }
        if (unit === 'imperial') {
            setHeightUnit("ft");
            setWeightUnit("pd");
        } else {
            setHeightUnit("cm");
            setWeightUnit("kg");
        }
    },[unit]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        if (name === "height") {
            setHeight(value);
            localStorage.setItem("height", JSON.stringify(value));
        } else {
            setWeight(value);
            localStorage.setItem("weight", JSON.stringify(value));
        }
    };

    const handleContinue = () => {
        navigate('/behavior')
    };

    return (
        <>
            <Helmet>
                <title>Measure</title>
            </Helmet>
            <TopBar address={'goal'}/>
            <MeasureContainer>
                <Banner title={'Measure Yourself'} 
                    text={'What are your height and body weight?'}/>
                <MeasureSwitcher handleUnit={setUnit} unit={unit}/>
                <InputMeasureWrap>
                    <InputMeasureText>{`Height(${heightUnit})`}</InputMeasureText>
                    <InputMeasure type="number" name="height" min="1" max="300" onChange={handleInputChange} value={height}/>
                </InputMeasureWrap>
                <InputMeasureWrap>
                    <InputMeasureText>{`Current Weight(${weightUnit})`}</InputMeasureText>
                    <InputMeasure type="number" name="weight" min="1" max="300" onChange={handleInputChange} value={weight}/>
                </InputMeasureWrap>
                <Button type={"submit"} text={'Continue'} handler={handleContinue} 
                    disabled={isDisabled}/>
            </MeasureContainer>
        </>
    );
};

export default Measure;