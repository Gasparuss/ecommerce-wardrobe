import { memo } from 'react';
import { Boots } from '../../types';
import Header from '../header/Header';
import { StyledMainWrapper, StyledMainContent } from './Main.styles';

// type MainProps = {
//   readonly results: Boots[]
// }

export const Main = () => {
  return (
    <StyledMainWrapper>
      <Header />
      <StyledMainContent></StyledMainContent>
    </StyledMainWrapper>
  );
};
