import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button, Flex } from '@common/ui-kit';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  PriceField,
  SelectField,
  spaces,
  TextField,
  useTranslate,
} from '@shared';

import { serviceSchema } from './schemas/serviceSchema';

import styled from 'styled-components';

import type { DictsType, ServiceValueType } from './model/types';

type ServiceFormProps = {
  dicts: DictsType;
  defaultValues?: ServiceValueType;
  onSubmit: (data: ServiceValueType) => void;
  onClose: () => void;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};

  height: 100%;
`;

export const ServiceForm = ({
  dicts,
  defaultValues,
  onSubmit,
  onClose,
}: ServiceFormProps) => {
  const { translate } = useTranslate();

  const { categories, currency, status } = dicts;

  const resolver = useMemo(
    () => yupResolver(serviceSchema(translate)),
    [translate],
  );

  const methods = useForm<ServiceValueType>({
    resolver: resolver,
    defaultValues: defaultValues ?? {
      price: {
        currency: currency[0]?.code,
      },
      status: status[0]?.value,
    },
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Flex vertical gap={spaces.xl} flex={1}>
          <TextField
            name="name"
            required
            label={translate('business.input.service.name.label')}
            placeholder={translate('business.input.service.name.placeholder')}
          />
          <SelectField
            name="categories"
            required
            label={translate('business.input.service.categories.label')}
            placeholder={translate(
              'business.input.service.categories.placeholder',
            )}
            options={categories}
            maxTagCount="responsive"
            notFoundContent={translate('table.description.empty')}
            mode="multiple"
            showSearch={false}
          />
          <TextField
            name="duration"
            required
            label={translate('business.input.service.duration.label')}
            placeholder={translate(
              'business.input.service.duration.placeholder',
            )}
          />
          <PriceField
            name="price"
            required
            label={translate('business.input.service.price.label')}
            amount={{
              placeholder: translate(
                'business.input.service.price.placeholder',
              ),
            }}
            currency={{
              options: currency,
              defaultActiveFirstOption: true,
            }}
          />
          <SelectField
            name="status"
            required
            label={translate('business.input.service.status.label')}
            placeholder={translate('business.input.service.status.placeholder')}
            options={status}
            notFoundContent={translate('table.description.empty')}
            showSearch={false}
          />
        </Flex>

        <Flex gap={spaces.m} align="center" justify="space-between">
          <Button htmlType="submit" block type="primary">
            {translate('button.label.create')}
          </Button>
          <Button block onClick={onClose}>
            {translate('button.label.cancel')}
          </Button>
        </Flex>
      </StyledForm>
    </FormProvider>
  );
};
