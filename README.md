# Scheduly

Это платформа для бизнеса и клиентов, позволяющая контролировать и вести график записи для любого типа бизнеса.

### Стек технологий

В проекте используется следующий стек технологий:

- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/) (фреймворк)
- [React Router v.7](https://reactrouter.com/) (маршрутизация)
- [Vite](https://vite.dev/guide/) (сборщик проекта)
- [StyledComponents](https://styled-components.com/docs) (стилизация)
- [Axios](https://axios-http.com/docs/intro) + [TanStack](https://tanstack.com/query/latest/docs/framework/react/overview) (взаимодействие с бэком)
- [Ant Design](https://ant.design/) (ui-kit)
- [React Hook Form](https://www.react-hook-form.com/) + [Yup](https://www.npmjs.com/package/yup/v/1.0.0-alpha.3) (работа с формами и валидация)
- [date-fns](https://date-fns.org/docs/Getting-Started) (работа с датами)

#### Установка OpenSSL на Windows

1. Перейдите на [https://slproweb.com/products/Win32OpenSSL.html](https://slproweb.com/products/Win32OpenSSL.html)
2. Скачайте и установите **Win64 OpenSSL v3.x Light**
3. Во время установки выберите:
   - "Copy OpenSSL DLLs to the OpenSSL binaries directory"
   - Путь установки: `C:\OpenSSL-Win64`
4. Добавьте в переменную среды `Path`: C:\OpenSSL-Win64\bin
5. Перезапустите терминал и проверьте:

```bash
openssl version
```

#### Генерация сертификатов для локальной разработки

1. mkdir certs
2. cd certs
3. openssl genrsa -out localhost-key.pem 2048
4. openssl req -new -x509 -key localhost-key.pem -out localhost.pem -days 36500 -subj "/C=US/ST=State/L=City/O=LocalDev/OU=Dev/CN=localhost"

### Установка зависимостей

```bash
npm i
```

### Скрипты

`dev` - запуск проекта в режиме разработки
`build` - запуск сборки проекта, итоговая сборка будет размещена в каталоге `dist`
`lint` - проверка кода с помощью ESLint
`lint:fix` - автоматическое исправление ESLint ошибок
`format` - форматирование кода с помощью Prettier
`format:check` - проверка соответствия форматированию Prettier (без изменения файлов)
`preview` - превью проекта, позволяет протестировать сборку в том виде, в котором она будет работать на продакшене. Использует файлы из папки `dist`.

### Архитектура проекта

В проекте предполагается использование модульной структуры. Разделение на модули можно выполнять основываясь на доменах (`Domain Driven Design`) и принципе единственной ответственности (`Single-responsibility Principle`).

В директории `common` должен находиться код, не зависимый от какого-либо домена и который используется во всем приложении.

В директории `shared` должен находится код, не зависимый от какого-либо домена и который можно использовать повторно.

В директории `modules` должны находиться модули.

Ниже приведен пример структуры проекта и модулей:

```
└───src
    ├───common
    │   ├───containers
    │   ├───data-access
    │   ├───ui-kit
    │   └───index.ts
    ├───modules
    │   │
    │   └───main
    │       ├───api
    │       ├───components
    │       ├───constants
    │       ├───containers
    │       ├───helpers
    │       ├───hooks
    │       ├───utils
    │       ├───types
    │       └───index.ts
    └───shared
         ├───assets
         ├───components
         ├───constants
         ├───containers
         ├───helpers
         ├───hooks
         ├───utils
         ├───types
         ├───theme
         └───index.ts
```

Для экспорта компонентов из модулей необходимо использовать `public API`. Т.е. в корне модуля должен быть размещен файл index.ts, содержащий экспорты всего того, что можно использовать из этого модуля.

#### Ключевой функционал (MVP)

- <strong>Регистрация / авторизация</strong> - Клиенты и владельцы бизнесов создают аккаунты
- <strong>Создание бизнеса / услуг</strong> - Бизнесы добавляют список услуг, продолжительность, цену
- <strong>Календарь и слоты</strong> - Настройка доступного времени и расписания
- <strong>Бронирование клиентом</strong> - Клиент выбирает услугу, дату и время
- <strong>Админ панель для владельца</strong> - Email уведомления о записи
- <strong>Уведомления</strong> - Просмотр записей, управление услугами, аналитика
- <strong>? Оплата</strong> - Приём онлайн платежей (Stripe, PayPal и т.п.)
- <strong>? Виджет для сайта / соцсетей</strong> - Встроить календарь на сайт бизнеса

### Добавление нового модуля:

1. Создать директорию нового модуля.
2. Добавить путь в `paths` к новому модулю в `tsconfig.app.json`:

```json
"compilerOptions": {
    "paths": {
        ...
        "@newModule": ["newModule"],
    }
}
```

3. Добавить новый модуль в линтер, файл `eslint.config.js`:

```js
settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ...
          ['@newModule', './src/modules/newModule'],
        ],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
  },
```

4. Настроить изоляцию модулей в файле `eslint.config.js`:

```js
rules: {
    'import-plugin/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: ['./src/modules/module1'],
            from: ['./src/modules/module2'],
            message: 'Импорт из модуля module1 в module2 запрещен',
          },
        ],
      },
    ],
}
```

### Работа с запросами

Для создания запроса в БД необходимо использовать httpClient из `src/common/data-access/httpClient.ts`. В данном клиенте настроен axiosInstance.

### apiClient

`apiClient` - набор методов для выполнения HTTP-запросов. Определяется для каждого модуля отдельно в файле `src/modules/your-module/api/apiClient.ts`. У `apiClient` должен быть определен интерфейс, позволяющий в дальнейшем использовать другие реализации методов.

Пример:

```ts
import { httpClient } from '@common/data-access';

import { AuthRequestType, AuthApiClientType } from '../types';

const getAuth = async (request: AuthRequestType) => {
  const { data } = await httpClient.request<AuthRequestType>({
    url: `site/login`,
    method: 'POST',
    data: request,
  });

  return data;
};

export const apiClient: AuthApiClientType = { getAuth };
```

### Ролевая модель

В проекте используется ролевая модель `RBAC`.
Все роли, права доступа, а так же информация по авторизированному пользователю хранятся в `AuthProvider`.
Для работы с данными пользователя используется хук `useUser`.
Для работы с правами доступа используется хук `useRoles`:

##### Доступ к страницам

Доступ к страницам осуществляется в компоненте `PrivateRoute`.
Для добавления новой страницы, необходимо добавить url страницы согласно роли или правам доступа пользователя в объект `pages`, расположенный по пути `src\shared\constants\constants.tsx`

##### Доступ к Секциям, фильтрация списков и табов

Для проверки доступа к секции используется компонент `HiddenBlock`.
Для фильтрации списка по правам доступа используется метод `canAccessSection` из `useRoles`.
Контроль доступа к секциям осуществляется через объект `sections`, расположенный по пути `src\common\auth\constants\sections.ts`

##### Хуки useRoles и useUser

`useUser`:

- Данные авторизованного пользователя

`useRoles`:

- `role` - роль авторизованного пользователя
- `permissions` - набор ролей и прав доступа авторизованного пользователя
- `canAccessSection` - метод для проверки доступа к секции

##### Type Guards

Все type guards расположены по пути `src\common\auth\helpers\helpers.ts`. Они предназначены для проверки типов.

### Фич-лист

1. Регистрация (бизнес или клиент)
2. Авторизация JWT
3. Услуги бизнеса (CRUD операции)
4. Календарь и слоты
5. Бронирование слота
6. Админ панель для бизнеса
