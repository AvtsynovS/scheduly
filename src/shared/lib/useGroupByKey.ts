type InternalArrayType<T> = T extends (infer U)[] ? U : T;

export const useGroupByKey = <
  T,
  K extends keyof T,
  G extends InternalArrayType<T[K]> & { id: string },
>(
  data: T[],
  key: K,
) => {
  const map = new Map<string, { group: G; items: T[] }>();

  for (const item of data) {
    const value = item[key];

    const values = Array.isArray(value) ? value : [value];

    for (const current of values) {
      const mapKey = current.id;

      const existKey = map.get(mapKey);

      if (existKey) {
        existKey.items.push(item);
      } else {
        map.set(mapKey, {
          group: current,
          items: [item],
        });
      }
    }
  }

  return Array.from(map.values());
};
