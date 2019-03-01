import styled from 'styled-components';

export const transforms = {
  top: 'translateY(-100%)',
  right: 'translateX(100%)',
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)'
}
export const placements = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0
  },
  bottom: {
    right: 0,
    bottom: 0,
    left: 0
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0
  }
}

export const DrawerWrapper = styled.div`
  display: block;
  width: ${props => ((props.position !== 'top' && props.position !== 'bottom') && props.size) ? props.size : '300px'};
  height: ${props => ((props.position === 'top' || props.position === 'bottom') && props.size)? props.size : '100%'};
  transform: ${props => !props.open ? transforms[props.position] : null};
`;

//Covers entire view and is used for dismissal
export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 8;
  display: ${props => props.open ? null : 'none' };
`;

export const DrawerContent = styled.div`
  display: block;
  box-sizing: border-box;
  position: fixed;
  ${props => placements[props.position]}
  z-index: 16;
  width: ${props => ((props.position !== 'top' && props.position !== 'bottom') && props.size) ? props.size : '300px'};
  transform: ${props => !props.open ? transforms[props.position] : null};
  transition: transform 0.2s ease-out;
  overflow-x: hidden;
  overflow-y: scroll;
  color: #fff;
  cursor:pointer;
  background-image: linear-gradient(to right,#ae0000 ,#bcbcbc,white);
  box-shadow: -10px 0px 10px rgba(0,0,0,0.19);
`;