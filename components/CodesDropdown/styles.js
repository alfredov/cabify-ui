import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  MenuButton,
  MenuList,
} from '@reach/menu-button';
import {
  colorPositiveLighter,
  colorWhite,
  colorFocus,
} from '../utils/vars';

function getBorderBottom({ withborder }) {
  const withBorder = Boolean(withborder);
  if (withBorder) {
    return css`border-bottom: solid 1px ${colorPositiveLighter};`;
  }
  return css`border-bottom: solid 1px transparent;`;
}

export const MenuButtonStyled = styled(MenuButton)`
  display: flex;
  justify-content: space-between;
  background-color: ${colorWhite};
  width: 100%;
  height: 40px;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    box-shadow: none;
    outline: none;
    border-bottom: solid 1px ${colorFocus};
  }
  ${getBorderBottom}
`;

export const List = styled(MenuList)`
  width: 240px;
  height: 192px;
  display: block;
  background: #FFFFFF;
  padding: 0;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 0 2px 0 rgba(0,0,0,0.16);
  border: none;
  border-radius: 4px;
  white-space: nowrap;
  outline: none;
  
  font-size: 85%;
  overflow: scroll;

  > [data-reach-menu-item] {
    margin: 8px;
    padding: 8px 16px;
    color: #000;
  }
  > [data-reach-menu-item][data-selected] {
    background: #F8FAFB;
    border-radius: 4px;
    cursor: pointer;
  }
`;

function getTopForBlurBottomBar({ buttonRect: { top, height } }) {
  const heightMenuList = 192;
  const extraPixelBorder = 1;
  const heightBlurBottomBar = 24;
  return ((top + height + heightMenuList + extraPixelBorder) - heightBlurBottomBar);
}

export const BlurBottomBar = styled.div`
  position: fixed;
  width: 240px;
  top: ${getTopForBlurBottomBar}px;
  border-radius: 4px;
  height: 24px;
  background-image: linear-gradient(180deg, rgba(255,255,255,0.00) 3%, #FFFFFF 89%);
`;
