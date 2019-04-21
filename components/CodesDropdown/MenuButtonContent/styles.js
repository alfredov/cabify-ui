import styled from '@emotion/styled';
import {
  fontSizeXs,
  fontSizeS,
  colorPositiveLight,
  colorMartinique,
} from '../../utils/vars';

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
