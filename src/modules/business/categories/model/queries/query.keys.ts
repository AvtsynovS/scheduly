const category = ['category'] as const;

const clientObjectKeys = {
  query: {
    all: [...category] as const,
    one: (id: string) => [...category, id] as const,
  },

  mutation: {
    create: [...category, 'create'] as const,
    update: [...category, 'update'] as const,
    delete: [...category, 'delete'] as const,
  },
};

export const categoryQueryKeys = clientObjectKeys.query;
export const categoryMutationKeys = clientObjectKeys.mutation;
