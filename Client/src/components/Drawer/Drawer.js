import React from 'react';
import PropTypes from 'prop-types';

import {
  transforms,
  placements,
  DrawerWrapper,
  DrawerOverlay,
  DrawerContent,
} from './Style';

export default class Drawer extends React.Component {

  render() {

    const { open, size, position, onDismiss, backgroundColor } = this.props;

    return (
      <DrawerWrapper open={open} size={size} position={position}>
        <DrawerOverlay open={open} onClick={onDismiss} />
        <DrawerContent open={open} size={size} position={position} backgroundColor={backgroundColor}>
          {this.props.children}
        </DrawerContent>
      </DrawerWrapper>
    );
  }
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf(['top','bottom','left','right']),
  onDismiss: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
}

Drawer.defaultProps = {
  size: '300px',
  position: 'left',
  backgroundColor: '#fff',
}
