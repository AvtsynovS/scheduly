import { useContext } from 'react';

import { Button, Dropdown } from '@common/ui-kit';

import { LangIcon } from '../../assets';
import { LOCALE_OPTIONS } from '../config/options';
import { isSupportedLocale } from '../helpers/guards';
import { IntlContext } from '../model/IntlContext';

import type { MenuInfo } from '@common/ui-kit/types';

export const LocaleButton = () => {
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
      <Button type="text" icon={<LangIcon />} />
    </Dropdown>
  );
};
