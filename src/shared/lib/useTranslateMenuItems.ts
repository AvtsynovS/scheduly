import { useMemo } from 'react';

import { useTranslate } from '../localization';

import type { ItemType } from '@common/ui-kit/types';

export const useTranslateMenuItems = <T extends ItemType>(items?: T[]) => {
  const { translate } = useTranslate();

  return useMemo(() => {
    const mapItems = <U extends ItemType>(list?: U[]): U[] => {
      if (!list) return [];

      return list.map((item) => {
        if (!item) return item;

        const nextItem =
          'label' in item && typeof item.label === 'string'
            ? { ...item, label: translate(item.label) }
            : item;

        if ('children' in nextItem && nextItem.children) {
          return {
            ...nextItem,
            children: mapItems(nextItem.children),
          };
        }

        return nextItem;
      });
    };

    return mapItems(items);
  }, [items, translate]);
};
