import styled,{ createGlobalStyle } from 'styled-components';
import {NavLink} from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    padding:0;
    margin:0;
  }
`;

export const Wrapper =  styled.div`
  position:relative;
  width:100%;
  min-height:800px;
  padding:0;
  margin:0;
  background-color: #f4f4f4;
`;

export const MenuBar = styled.div`
  position: static;
  color: #fff;
  background-color: #000;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`;

export const Title = styled.div`
  position:absolute;
  top: 14px;
  left: 80px;
  color:#fff;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  `;

  export const ELegantShadow = styled.div`
    position:absolute;
    top: 10px;
    left: 60px;
    text-align:left;
    font-family: 'EB Garamond', serif;
    font-size: 28px;
    letter-spacing: 0.1em;
    display: inline-block;
    font-style:normal;
    padding-top: 0.1em;
    text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
    @media(max-width:999px){
      top: 17px;
      font-size: 19px;
    }
    &::before, &::after {
      content: "§";
      display: inline-block;
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
      opacity: 0.2;
      margin: 0 0.6em; 
    }  
`;

export const NytLogo = styled.div`
  display: inline-block;
  background-repeat: no-repeat;
  width: 60px;
  height:60px;
  cursor:pointer;
`;
export const MenuWrapper = styled.a`
  position:absolute;
  height:60px;
  top: 0;
  right: 50px;
  color:#fff;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  @media (max-width: 999px) {
    display: none;
  }  
`;

export const MenuLink = styled.a`
    cursor: pointer;
    text-decoration:none;
    color:#fff;
    display:inline-block;
    padding:13px;
    border-bottom:${(props)=>props.active ? 'solid 2px #f00' : ''};
    background-color:${(props)=>props.active ? '#980000' : ''}; 
    &:hover{
      background-color:#980000;
    }
`;

export const DrawerContaner = styled.div`
  @media (max-width: 999px) {
    display: block;
  }
`;

export const ContentDrawerItem = styled.div`
  cursor: pointer;
  text-decoration:none;
  color:#fff;
  font-side: 16px;
  display:block;
  padding:13px;
  background-color: #850000;
  & a {
    text-decoration:none;
    color:#fff;
    cursor:pointer;
  }
  &:hover {
    outline:0;
  }
  &:focus{
    outline:0;
  }
`;

export const Button = styled.button`
  cursor:pointer;
  background: #fff;
  font-size: 1em;
  border: 0;
  border-radius: 11%;
  padding: 9px;
  &:hover {
  ${Button} > {
    background-color: green;
  }
  &:focus{
    outline:0;
  }
}
`;

export const DrawButtonWrap = styled.div`
  position:absolute;
  cirsor:pointer;
  display: none;
  right:3%;
  width:60px;
  top:3px;
  @media (max-width: 999px) {
   display: block;
  }
`;

const activeClassName =(props)=> props.activeClassName;
export const StyledNavLink = styled(NavLink).attrs({activeClassName})`
    cursor: pointer;
    text-decoration:none;
    color:#fff;
    display:inline-block;
    padding:13px;
  &.${activeClassName} {
    border-bottom: solid 2px #f00;
    background-color: #980000; 
    &:hover{
      background-color:#980000;
    }
  }
`;