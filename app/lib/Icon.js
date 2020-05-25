//
// Icon Component
//

import React, {Component} from 'react';
import {default as VectorIcon} from 'react-native-vector-icons/MaterialIcons';
import {PropTypes} from 'prop-types';

import {getColor} from './helpers';

// example ->
// <Icon name="google" size={24} color={COLOR[`${primary}500`].color} />

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.style,
    size: PropTypes.number,
    color: PropTypes.string,
    allowFontScaling: PropTypes.bool,
  };

  static defaultProps = {
    size: 30,
    color: '#757575',
    allowFontScaling: true,
  };

  render() {
    const {name, style, size, color, allowFontScaling} = this.props;

    return (
      <VectorIcon
        name={name}
        size={size}
        color={getColor(color)}
        style={style}
        allowFontScaling={allowFontScaling}
      />
    );
  }
}
