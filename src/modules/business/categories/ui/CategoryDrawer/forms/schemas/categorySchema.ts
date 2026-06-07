import * as yup from 'yup';

import type { CategoryValueType } from '../model/types';
import type { ObjectSchema } from 'yup';

export const categorySchema = (translate: (id: string) => string) => {
  return yup.object({
    name: yup
      .string()
      .required(translate('business.category.error.name.required')),
    color: yup
      .string()
      .required(translate('business.category.error.color.required')),
    description: yup.string(),
  }) satisfies ObjectSchema<CategoryValueType>;
};
