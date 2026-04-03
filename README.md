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
