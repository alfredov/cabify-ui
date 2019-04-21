/*  eslint-disable react/jsx-no-bind */
/*  eslint-disable react/destructuring-assignment */
import React, { Fragment, Component } from 'react';
import {
  Menu,
  MenuItem,
} from '@reach/menu-button';
import PropTypes from 'prop-types';
import '@reach/menu-button/styles.css';

import MenuItemContent from './MenuItemContent';
import { List, BlurBottomBar, MenuButtonStyled } from './styles';
import MenuButtonContent from './MenuButtonContent';
import { orderItemsByPrefixSelected } from './utils';
import { countries } from './data';

class CodesDropdown extends Component {
  constructor(props) {
    super(props);
    const { defaultPrefix } = this.props;

    this.state = {
      items: defaultPrefix ? orderItemsByPrefixSelected(countries, defaultPrefix) : countries,
      prefix: defaultPrefix || countries[0].prefix,
    };
  }

  selectItemHandler = (item) => {
    this.setState((state) => {
      const { items } = state;
      const newState = orderItemsByPrefixSelected(items, item.prefix);
      return {
        items: newState,
        prefix: item.prefix,
      };
    }, () => {
      this.props.onSelect(this.state.prefix, this.props.name);
    });
  }

  render() {
    const { items, prefix } = this.state;
    return (
      <Menu>
        {({ isOpen }) => {
          let rect = {};
          if (isOpen) {
            rect = this.menuButton.getBoundingClientRect();
          }
          return (
            <Fragment>
              <MenuButtonStyled
                ref={(node) => { this.menuButton = node; }}
                withborder={isOpen ? '' : '1'}
              >
                <MenuButtonContent
                  isOpen={isOpen}
                  prefix={prefix}
                />
              </MenuButtonStyled>
              <List>
                {items.map(item => (
                  <MenuItem
                    onSelect={this.selectItemHandler.bind(this, item)}
                    key={item.prefix}
                  >
                    <MenuItemContent
                      title={item.name}
                      codeNumber={item.prefix}
                      iconFlag={item.countryCode}
                    />
                  </MenuItem>
                ))}
                <BlurBottomBar buttonRect={rect}>&nbsp;</BlurBottomBar>
              </List>
            </Fragment>
          );
        }}
      </Menu>
    );
  }
}

const prefixes = {
  argentina: '54',
  bolivia: '591',
  brazil: '55',
  chile: '56',
  colombia: '57',
  mexico: '521',
  peru: '51',
  spain: '34',
  uruguay: '598',
};

CodesDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  defaultPrefix: PropTypes.oneOf([
    prefixes.uruguay,
    prefixes.argentina,
    prefixes.bolivia,
    prefixes.brazil,
    prefixes.chile,
    prefixes.colombia,
    prefixes.mexico,
    prefixes.peru,
    prefixes.spain,
  ]),
  name: PropTypes.string,
};

CodesDropdown.defaultProps = {
  defaultPrefix: null,
  name: null,
};

export default CodesDropdown;
