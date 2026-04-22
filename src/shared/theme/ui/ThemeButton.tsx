import { useContext } from 'react';

import { Button, Dropdown } from '@common/ui-kit';

import { ThemeIcon } from '../../assets';
import { useTranslateOptions } from '../../lib';
import { THEME_OPTIONS } from '../config/options';
import { isSupportedTheme } from '../model/guards';
import { ThemeContext } from '../model/ThemeContext';

import type { MenuInfo } from '@common/ui-kit/types';

export const ThemeButton = () => {
  const { currentTheme, onChangeTheme } = useContext(ThemeContext);

  const options = useTranslateOptions(THEME_OPTIONS);

  const handleClick = ({ key }: MenuInfo) => {
    if (isSupportedTheme(key)) onChangeTheme(key);
  };

  return (
    <Dropdown
      menu={{
        items: options,
        selectedKeys: [currentTheme],
        onClick: handleClick,
      }}
      trigger={['click']}
    >
      <Button type="text" icon={<ThemeIcon />} />
    </Dropdown>
  );
};
