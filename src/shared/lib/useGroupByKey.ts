export const useGroupByKey = <T, K extends keyof T>(data: T[], key: K) => {
  const map = new Map<T[K], T[]>();

  for (const item of data) {
    const groupKey = item[key];

    const group = map.get(groupKey);

    if (group) {
      group.push(item);
    } else {
      map.set(groupKey, [item]);
    }
  }

  return Array.from(map, ([group, items]) => ({
    group,
    items,
  }));
};
