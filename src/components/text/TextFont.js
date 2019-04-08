import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {getStyleFromProps} from '../../utils';

export default class TextFont extends Component {
    render() {
        const style = getStyleFromProps(['fontFamily','fontSize','fontWeight','color','marginTop'], this.props);
        return <Text {...this.props} style={style}>
            {this.props.children}
        </Text>
    }
}

TextFont.defaultProps = {
    fontFamily: 'Raleway',
    fontWeight: '400',
    color: '#ffffff'
}

TextFont.propTypes = {
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    color: PropTypes.string
}

