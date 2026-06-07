import * as yup from 'yup';

import type { ServiceStatusType } from '../../../../types';
import type { ServiceValueType } from '../model/types';
import type { CurrencyCodeType } from '@shared';
import type { ObjectSchema } from 'yup';

export const CURRENCIES = [
  'USD',
  'EUR',
  'RUB',
] as const satisfies readonly CurrencyCodeType[];

export const STATUS = [
  'active',
  'inactive',
  'archive',
] as const satisfies readonly ServiceStatusType[];

export const serviceSchema = (translate: (id: string) => string) => {
  return yup.object({
    name: yup
      .string()
      .required(translate('business.service.error.name.required')),
    categories: yup
      .array()
      .of(
        yup
          .string()
          .required(translate('business.service.error.categories.required')),
      )
      .min(1, translate('business.service.error.categories.min'))
      .required(translate('business.service.error.categories.required')),
    duration: yup
      .number()
      .typeError(translate('validation.type.error'))
      .required(translate('business.service.error.duration.required')),
    price: yup.object({
      amount: yup
        .number()
        .typeError(translate('validation.type.error'))
        .required(translate('validation.price.error')),

      currency: yup
        .mixed<CurrencyCodeType>()
        .oneOf(CURRENCIES)
        .required(translate('validation.currency.error')),
    }),
    status: yup
      .mixed<ServiceStatusType>()
      .oneOf(STATUS)
      .required(translate('validation.currency.error')),
  }) satisfies ObjectSchema<ServiceValueType>;
};
