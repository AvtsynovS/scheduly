const currency = ['currency'] as const;

const clientObjectKeys = {
  query: {
    all: [...currency] as const,
  },
};

export const currencyQueryKeys = clientObjectKeys.query;
