import { useContext } from 'react';

import { Button, Dropdown } from '@common/ui-kit';

import { IntlContext } from '../../providers/IntlProvider/IntlContext';
import { LOCALE_OPTIONS } from '../constants/options';
import { isSupportedLocale } from '../helpers/guards';
import { LanguagesIcon } from './icons';

import type { MenuInfo } from '@common/ui-kit/types';

export const LocalizationButton = () => {
  const { currentLocale, onChangeLocale } = useContext(IntlContext);

  const handleClick = ({ key }: MenuInfo) => {
    if (isSupportedLocale(key)) onChangeLocale(key);
  };

  return (
    <Dropdown
      menu={{
        items: LOCALE_OPTIONS,
        selectedKeys: [currentLocale],
        onClick: handleClick,
      }}
      trigger={['click']}
    >
      <Button type="text" icon={<LanguagesIcon />} />
    </Dropdown>
  );
};
