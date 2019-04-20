/*  eslint-disable react/jsx-no-bind */
import React, { Fragment, Component } from 'react';
import {
  Menu,
  MenuItem,
} from '@reach/menu-button';
import PropTypes from 'prop-types';

import '@reach/menu-button/styles.css';
import IconDown from './IconDown';
import IconUp from './IconUp';
import {
  MenuButtonStyled,
  PrefixWrapper,
  PrefixCode,
  PrefixTitle,
  IconSpan,
  List,
  MenuItemContent,
  ContentLeft,
  ContentLeftText,
  BlockFooter,
} from './styles';

import esIcon from './flags/ES';
import clIcon from './flags/CL';
import mxIcon from './flags/MX';
import coIcon from './flags/CO';
import peIcon from './flags/PE';

function getFlagIcon(countryCode) {
  switch (countryCode) {
    case 'ES':
      return esIcon;
    case 'CL':
      return clIcon;
    case 'MX':
      return mxIcon;
    case 'CO':
      return coIcon;
    case 'PE':
      return peIcon;
    default:
      return null;
  }
}

class CodesDropdown extends Component {
  constructor(props) {
    super(props);
    const items = [
      { name: 'Spain', code: '34', countryCode: 'ES' },
      { name: 'Chile', code: '56', countryCode: 'CL' },
      { name: 'Mexico', code: '521', countryCode: 'MX' },
      { name: 'Colombia', code: '57', countryCode: 'CO' },
      { name: 'Peru', code: '11', countryCode: 'PE' },
    ];
    this.state = {
      items,
      prefix: items[0].code,
    };
  }

  selectItemHandler = (item) => {
    this.setState(state => {
      const { items } = state;
      const newState = items.reduce((collection, value) => {
        if (value.code !== item.code) {
          return [...collection, value];
        }
        return collection;
      }, [item]);

      return {
        items: newState,
        prefix: item.code
      };
    }, () => {
      this.props.onSelect(this.state.prefix);
    });
  }

  render() {
    const { items, prefix } = this.state;
    return (
      <Menu>
        {({ isOpen }) => (
          <Fragment>
            <MenuButtonStyled withborder={isOpen ? '' : '1'}>
              <PrefixWrapper>
                <PrefixTitle>Prefix</PrefixTitle>
                <PrefixCode>
                  +
                  {prefix}
                </PrefixCode>
              </PrefixWrapper>
              <IconSpan aria-hidden>
                {isOpen ? <IconUp /> : <IconDown />}
              </IconSpan>
            </MenuButtonStyled>
            <List>
              {items.map((item, index) => {
                const FlagIcon = getFlagIcon(item.countryCode);
                return (
                  <MenuItem
                    key={index}
                    onSelect={this.selectItemHandler.bind(this, item)}
                  >
                    <MenuItemContent>
                      <ContentLeft>
                        <FlagIcon />
                        <ContentLeftText>{item.name}</ContentLeftText>
                      </ContentLeft>
                      <span>+{item.code}</span>
                    </MenuItemContent>
                  </MenuItem>
                )
              }
              )}
            </List>
          </Fragment>
        )}
      </Menu>
    );
  }
}

CodesDropdown.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default CodesDropdown;
