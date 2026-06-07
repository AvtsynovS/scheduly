import { Controller, useFormContext } from 'react-hook-form';

import {
  blue,
  Col,
  ColorPicker,
  Divider,
  Flex,
  green,
  presetPalettes,
  red,
  Row,
  Typography,
} from '@common/ui-kit';

import { spaces } from '../../constants';
import { Error } from './Error';
import { FieldWrapper } from './FieldWrapper';

import styled, { css } from 'styled-components';

import type { ColorPickerProps } from '@common/ui-kit/types';
import type { FieldValues, Path } from 'react-hook-form';

const { Text } = Typography;

type ColorPickerFieldProps<T extends FieldValues> = {
  name: Path<T>;
  text: string;
  required?: boolean;
  label?: string;
} & ColorPickerProps;

type Presets = Required<ColorPickerProps>['presets'][number];

const StyledDivider = styled(Divider)`
  height: auto;
`;

const StyledText = styled(Text)<{ required: boolean }>`
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

const genPresets = (presets = presetPalettes) => {
  return Object.entries(presets).map<Presets>(([label, colors]) => ({
    label,
    colors,
    key: label,
  }));
};

const customPanelRender: ColorPickerProps['panelRender'] = (
  _,
  { components: { Picker, Presets } },
) => (
  <Row justify="space-between" wrap={false}>
    <Col span={12}>
      <Presets />
    </Col>
    <StyledDivider vertical />
    <Col flex="auto">
      <Picker />
    </Col>
  </Row>
);

export const ColorPickerField = <T extends FieldValues>({
  name,
  text,
  required = false,
  className,
  ...props
}: ColorPickerFieldProps<T>) => {
  const { control } = useFormContext();

  const presets = genPresets({
    red,
    green,
    blue,
  });

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FieldWrapper className={className}>
          <Flex gap={spaces.s} align="center">
            <StyledText required={required} strong>
              {text}
            </StyledText>
            <ColorPicker
              {...props}
              {...field}
              value={field.value}
              onChange={(color) => {
                field.onChange(color.toHexString());
              }}
              presets={presets}
              panelRender={customPanelRender}
              getPopupContainer={() => document.body}
            />
          </Flex>
          {error?.message && <Error error={error.message} />}
        </FieldWrapper>
      )}
    />
  );
};
