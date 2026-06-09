const mockColors = {
  cyan: 'rgb(40, 100, 140)',
  red: 'rgb(140, 38, 38)',
  green: 'rgb(38, 140, 74)',
  violet: 'rgb(92, 38, 140)',
};
// TODO удалить после настройки АПИ
export const mockCategories = [
  {
    id: '1',
    name: 'Стрижка',
    color: mockColors.cyan,
    description: 'Все виды стрижек для мужчин, женщин и детей',
    totalServices: 4,
  },
  {
    id: '2',
    name: 'Окрашивание',
    color: mockColors.red,
    description: 'Окрашивание волос в различные техники',
    totalServices: 2,
  },
  {
    id: '3',
    name: 'Укладка',
    color: mockColors.green,
    description: 'Укладки и прически на любой случай',
    totalServices: 7,
  },
  {
    id: '4',
    name: 'Ногти',
    color: mockColors.violet,
    totalServices: 1,
  },
];
