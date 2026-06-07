import styled, { css } from 'styled-components';

import type { AreaHTMLAttributes } from 'react';

type LabelProps = {
  htmlFor: string;
  required?: boolean;
} & AreaHTMLAttributes<HTMLSpanElement>;

const StyledLabel = styled.label<LabelProps>`
  display: block;

  padding-left: ${({ theme }) => theme.spaces.xxs};

  font-weight: 500;
  line-height: ${({ theme }) => theme.lineHeight.snug};

  ${({ required, theme }) =>
    required &&
    css`
      &::after {
        content: '*';
        color: ${theme.colors.error};
        margin-left: ${({ theme }) => theme.spaces.xxxs};
        vertical-align: text-bottom;
      }
    `}
`;

export const Label = ({ children, ...props }: LabelProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
