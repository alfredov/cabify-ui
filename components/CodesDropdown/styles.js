import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  MenuButton,
  MenuList,
} from '@reach/menu-button';
import {
  colorPositiveLighter,
  colorWhite,
  fontSizeXs,
  fontSizeS,
  colorPositiveLight,
  colorMartinique,
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
  width: 100px;
  height: 40px;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    box-shadow: none;
    outline: none;
  }
  ${getBorderBottom}
`;

export const PrefixWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const PrefixTitle = styled.span`
  font-family: 'AvenirNext-Regular';
  font-size: ${fontSizeXs};
  color: ${colorPositiveLight};
  text-align: left;
  line-height: 16px;
`;

export const PrefixCode = styled.span`
  font-family: 'AvenirNext-Regular';
  font-size: ${fontSizeS};
  color: ${colorMartinique};
  text-align: left;
  line-height: 16px;
  margin-bottom: 5px;
`;

export const IconSpan = styled.span`
  align-self: center;
`;


export const List = styled(MenuList)`
  width: 240px;
  height: 192px;
  display: block;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16), 0 0 2px 0 rgba(0,0,0,0.16);
  border-radius: 4px;
  white-space: nowrap;
  outline: none;
  padding: 0;
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

export const MenuItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: AvenirNext-Regular;
  font-size: 14px;
  color: #717285;
  line-height: 16px;
`;

export const ContentLeft = styled.div``;

export const ContentLeftText = styled.span`
  margin-left: 16px;
`;
