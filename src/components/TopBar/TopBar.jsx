import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrowIcon } from '../../images/icons/arrow-back.svg';
import { TopBarContainer, Text, iconStyles } from './TopBar.styled';
import { logo } from  '../../images';

const TopBar = ({ address }) => {
  const navigate = useNavigate();

  const handleClick = (address) => {
      navigate(`/${address}`)
  };

  return (
      <TopBarContainer>
        <BackArrowIcon width='30' height='30' style={iconStyles} 
          onClick={() => handleClick(address)}/>
        <img src={logo} alt='logo' width='33'/>
        <Text>Food Mentor</Text>
      </TopBarContainer>
  );
};

export default TopBar;