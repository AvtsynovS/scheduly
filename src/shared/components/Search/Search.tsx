import { Input } from '@common/ui-kit';

import styled from 'styled-components';

import type { SearchProps } from '@common/ui-kit/types';

const { Search: SearchKit } = Input;

const StyledSearchField = styled(SearchKit)`
  width: 100%;

  & > button {
    min-height: 37.6px;
  }
`;

export const Search = (props: SearchProps) => {
  return <StyledSearchField {...props} />;
};
