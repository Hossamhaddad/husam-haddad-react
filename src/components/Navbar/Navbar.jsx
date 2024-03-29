import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  HeaderImage,
  MainContainer,
  StyledContainer,
  RightContainer,
  Add,
  EnButton,
  Links,
  BurgerButton,
  MobileLogo,
  MobileNav,
  MobileRight,
  HeadIcon,
  HiddenSidebar,
  LeftContainerList,
} from 'components/Navbar/nav-bar.styles';
import logo from 'assets/image1.svg';
import BurgerList from 'components/UI/BurgerList/BurgerList';

/**
 * Render Navbar element.
 *
 * @return {JSX.element}
 */
function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  /**
   * Handle Click event.
   */
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <MainContainer>
      <StyledContainer>
        <HeaderImage >
          <img src={logo} alt="" />
        </HeaderImage>
        <LeftContainerList>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </LeftContainerList>
      </StyledContainer>
      <RightContainer>
        <Add />
        <EnButton>EN</EnButton>
        <Links>Login</Links>
        <Links>Join TMDB</Links>
        <Links>
          <FaSearch size={20} color="#00B4E4" />
        </Links>
      </RightContainer>
      <MobileNav>
        <BurgerButton onClick={clickHandler} />
        <MobileLogo />
        <MobileRight>
          <HeadIcon />
          <FaSearch size={20} color="#00B4E4" />
        </MobileRight>
        <HiddenSidebar isClicked={isClicked}>
          <BurgerList />
        </HiddenSidebar>
      </MobileNav>
    </MainContainer>
  );
}

export default Navbar;
