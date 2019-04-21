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

class CodesDropdown extends Component {
  constructor(props) {
    super(props);
    const items = [
      { name: 'Spain', code: '34', countryCode: 'es' },
      { name: 'Chile', code: '56', countryCode: 'cl' },
      { name: 'Mexico', code: '521', countryCode: 'mx' },
      { name: 'Colombia', code: '57', countryCode: 'co' },
      { name: 'Peru', code: '11', countryCode: 'pe' },
      { name: 'Argentina', code: '00', countryCode: 'ar' },
      { name: 'Bolivia', code: '00', countryCode: 'bo' },
    ];
    this.state = {
      items,
      prefix: items[0].code,
    };
  }

  selectItemHandler = (item) => {
    this.setState((state) => {
      const { items } = state;
      const newState = items.reduce((collection, value) => {
        if (value.code !== item.code) {
          return [...collection, value];
        }
        return collection;
      }, [item]);

      return {
        items: newState,
        prefix: item.code,
      };
    }, () => {
      this.props.onSelect(this.state.prefix);
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
                    key={item.code}
                  >
                    <MenuItemContent
                      title={item.name}
                      codeNumber={item.code}
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

CodesDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CodesDropdown;
