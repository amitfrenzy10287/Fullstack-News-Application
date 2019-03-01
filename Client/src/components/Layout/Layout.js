import React, { Component } from 'react'
import { Link,NavLink } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';
import Logo from '../../assets/images/nyt_logo_round.png';
import DrawerIcon from '../../assets/images/drawerx32.png';
import { connect } from 'react-redux';

import {
  GlobalStyle,
  Wrapper,
  MenuBar,
  Title,
  ELegantShadow,
  NytLogo,
  MenuWrapper,
  MenuLink,
  DrawerContaner,
  ContentDrawerItem,
  Button,
  DrawButtonWrap,
  StyledNavLink,
} from './style';



class Layout extends Component {
  state={
    open: false,
  }
  
  handleToggleOpen=()=> {
    this.setState({open:!this.state.open})
  };

  render () {
    const { isAuthenticated } = this.props;
    let MenuItems = (
        <span>
          <StyledNavLink exact activeClassName='active' to='/'>
            Home
          </StyledNavLink>
          <StyledNavLink activeClassName='active' to='/login'>
            Login
          </StyledNavLink>
        </span>
    );
    if( isAuthenticated ){
        MenuItems = (
          <span>
            <StyledNavLink exact activeClassName='active' to='/'>
              Home
            </StyledNavLink>
            <StyledNavLink activeClassName='active' to='/news'>
              News
            </StyledNavLink>
            <StyledNavLink activeClassName='active' to='/logout'>
              Logout
            </StyledNavLink>
          </span>
        );
    }
    
    return (
      <Wrapper>
        <GlobalStyle />
        <header>
          <MenuBar>
            <NytLogo>
              <img src={Logo}
               width='60px' height='60px'
              />
            </NytLogo>
            <ELegantShadow>News</ELegantShadow>
            <DrawButtonWrap><Button onClick={()=>this.handleToggleOpen()}>
              <img src={DrawerIcon} /></Button>
            </DrawButtonWrap>
            <MenuWrapper>
              {MenuItems}
            </MenuWrapper>
            <DrawerContaner>
              <Drawer open={this.state.open} position='left' onDismiss={() => this.handleToggleOpen()} backgroundColor='#fff' size='250px'>
                <ContentDrawerItem>
                  <Link to='/'>Home</Link>
                </ContentDrawerItem>
                <ContentDrawerItem>
                  <Link to='/news'>News</Link>
                </ContentDrawerItem>
                <ContentDrawerItem>
                  <Link to='/logout'>Login</Link>
                </ContentDrawerItem>
                <ContentDrawerItem>
                  <Link to='/login'>Logout</Link>
                </ContentDrawerItem>
              </Drawer>
            </DrawerContaner>
          </MenuBar>
        </header>
        { this.props.children }
      </Wrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token!==null
  };
};
export default connect(mapStateToProps,null)(Layout);