const category = ['category'] as const;

const clientObjectKeys = {
  query: {
    all: [...category] as const,
  },
};

export const categoryQueryKeys = clientObjectKeys.query;
