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

import { CATEGORIES, CURRENCY } from '../../../model/mocks';
import { createServiceSchema } from './schemas/createServiceSchema';

import styled from 'styled-components';

import type { CreateServiceType } from '../../../model/types';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};

  height: 100%;
`;

export const ServiceCreateForm = () => {
  const { translate } = useTranslate();

  const resolver = useMemo(
    () => yupResolver(createServiceSchema(translate)),
    [translate],
  );

  const categoryOptions = CATEGORIES.map(({ id, value, color }) => ({
    label: value,
    value: id,
    color,
  }));

  const currencyOptions = CURRENCY.map((code) => ({
    label: code,
    value: code,
  }));

  const methods = useForm<CreateServiceType>({
    resolver: resolver,
    defaultValues: {
      price: {
        currency: currencyOptions[0]?.value,
      },
    },
  });

  const { handleSubmit } = methods;

  const handleCreateService = (service: CreateServiceType) => {
    console.log('new service', service);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(handleCreateService)}>
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
            options={categoryOptions}
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
              options: currencyOptions,
              defaultActiveFirstOption: true,
            }}
          />
        </Flex>

        <Flex gap={spaces.m} align="center" justify="space-between">
          <Button htmlType="submit" block type="primary">
            {translate('button.label.create')}
          </Button>
          <Button block>{translate('button.label.cancel')}</Button>
        </Flex>
      </StyledForm>
    </FormProvider>
  );
};
