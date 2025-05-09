# Коммерческое предложение — Интерактивная презентация

Современная интерактивная презентация коммерческого предложения, разработанная с использованием React и TypeScript. Проект представляет собой одностраничное приложение с плавными анимациями, интерактивными элементами и адаптивным дизайном.

## Особенности

- 🎨 Современный дизайн с градиентными анимациями
- ✨ Плавные переходы между экранами
- 🎯 Интерактивные элементы с 3D-эффектами
- 📱 Адаптивная верстка
- 📊 Динамическая аналитика из Google Sheets
- 🧩 Гибкая система управления экранами (ScreenManager)

## Технологии

- React 18
- TypeScript
- Styled Components
- CSS Animations
- React Spring, Framer Motion (для анимаций)
- Google Sheets API (автоматическая загрузка аналитики)
- ts-node (для скриптов)

## Структура проекта

```
commpro/
└── src/
    ├── components/
    │   ├── common/
    │   ├── admin/
    │   ├── screens/
    │   │   ├── TitleScreen.tsx
    │   │   ├── AnalyticsScreen.tsx
    │   │   ├── StatisticsScreen.tsx
    │   │   ├── SituationScreen.tsx
    │   │   ├── PainPointsScreen.tsx
    │   │   ├── ServicesScreen.tsx
    │   │   ├── RoadmapScreen.tsx
    │   │   └── BenefitsScreen.tsx
    │   ├── SidebarNavigation.tsx
    │   └── AnimatedBackground.tsx
    ├── config/
    │   ├── screens.ts
    │   ├── exportConfig.ts
    │   └── production-config.ts
    ├── data/
    │   ├── analytics-tables.ts
    │   └── analytics-sheets-config.ts
    ├── types/
    ├── styles/
    │   └── GlobalStyles.ts
    ├── App.tsx
    ├── App.css
    └── index.tsx
```

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone [url-репозитория]
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки (данные аналитики автоматически обновятся из Google Sheets):
```bash
npm start
```

4. Для ручного обновления аналитики:
```bash
npm run fetch-sheet
```

5. Для сборки проекта:
```bash
npm run build
```

## Описание экранов

### 1. Титульный экран (TitleScreen)
- Главный заголовок с анимированным появлением
- Подзаголовок с описанием
- Анимированный фон с градиентами

### 2. Экран аналитики (AnalyticsScreen)
- Таблица с аналитическими данными, подгружаемыми из Google Sheets
- Секции: общая информация, детальная аналитика, дополнительная информация
- Ссылки кликабельны, поддерживается форматирование текста

### 3. Экран статистики (StatisticsScreen)
- Анимированные числовые показатели
- Интерактивные карточки с эффектом параллакса
- Градиентный фон

### 4. Экран ситуации в сети (SituationScreen)
- Анализ присутствия компании в интернете
- Визуализация данных по площадкам, отзывам, активности

### 5. Экран проблем (PainPointsScreen)
- Интерактивные карточки с описанием проблем
- Анимации при наведении
- Градиентный фон

### 6. Экран услуг (ServicesScreen)
- Сетка интерактивных карточек с услугами
- Анимации при наведении
- Описания услуг с иконками

### 7. Экран дорожной карты (RoadmapScreen)
- Временная шкала с этапами
- Интерактивные карточки с описанием этапов
- Анимации при наведении

### 8. Экран преимуществ (BenefitsScreen)
- Интерактивные карточки с преимуществами
- Анимации при наведении
- Градиентный фон

## Работа с аналитикой

- Данные для экрана аналитики берутся из Google Sheets.
- Конфиг для загрузки: `src/data/analytics-sheets-config.ts`
- Скрипт загрузки: `npm run fetch-sheet` (или автоматически при `npm start`)
- После обновления данных в Google Sheets — перезапустите проект для обновления данных.

## Управление экранами (ScreenManager)

- В режиме разработки доступна панель ScreenManager (⚙️), где можно включать/выключать экраны и менять их порядок.
- Для продакшена используйте экспорт конфигурации через ScreenManager.
- Конфигурация экранов: `src/config/screens.ts` (dev) и `src/config/production-config.ts` (prod)

## Изменение контента

- Для большинства экранов данные хранятся прямо в компонентах (массивы, объекты).
- Для аналитики — данные берутся из Google Sheets, структура описана в `analytics-sheets-config.ts`.
- Для изменения порядка и видимости экранов используйте ScreenManager в dev-режиме.

## Скрипты

- `npm start` — запускает проект и автоматически обновляет данные аналитики
- `npm run fetch-sheet` — вручную обновить данные аналитики из Google Sheets
- `npm run build` — сборка проекта

## Технологии

- React 18, TypeScript, Styled Components, Google Sheets API, ts-node, React Spring, Framer Motion и др.

## Важные замечания

- Панель управления экранами доступна только в режиме разработки
- Конфигурация в продакшене фиксирована и не может быть изменена пользователями
- При добавлении новых экранов убедитесь, что их ID совпадают в конфигурации и компонентах
- Порядок экранов в продакшене определяется полем `order` в конфигурации

---

Если вы вносите изменения в структуру или данные — всегда тестируйте проект локально перед деплоем!

## Лицензия

MIT License

## Управление контентом

### Изменение текстов и контента

#### 1. Титульный экран (TitleScreen)
Файл: `src/components/screens/TitleScreen.tsx`
- Изменение заголовка: найдите компонент `Title` и измените текст внутри
- Изменение подзаголовка: найдите компонент `Subtitle` и измените текст внутри

#### 2. Экран статистики (StatisticsScreen)
Файл: `src/components/screens/StatisticsScreen.tsx`
- Изменение статистики: найдите массив `statistics` и измените значения:
  ```typescript
  const statistics = [
    { value: 100, label: "Клиентов" },
    { value: 50, label: "Проектов" },
    // ...
  ];
  ```

#### 3. Экран проблем (PainPointsScreen)
Файл: `src/components/screens/PainPointsScreen.tsx`
- Изменение проблем: найдите массив `painPoints` и измените содержимое:
  ```typescript
  const painPoints = [
    { title: "Заголовок проблемы", description: "Описание проблемы" },
    // ...
  ];
  ```

#### 4. Экран услуг (ServicesScreen)
Файл: `src/components/screens/ServicesScreen.tsx`
- Изменение услуг: найдите массив `services` и измените содержимое:
  ```typescript
  const services = [
    { title: "Название услуги", description: "Описание услуги" },
    // ...
  ];
  ```

#### 5. Экран преимуществ (BenefitsScreen)
Файл: `src/components/screens/BenefitsScreen.tsx`
- Изменение преимуществ: найдите массив `benefits` и измените содержимое:
  ```typescript
  const benefits = [
    { title: "Заголовок преимущества", description: "Описание преимущества" },
    // ...
  ];
  ```

#### 6. Экран дорожной карты (RoadmapScreen)
Файл: `src/components/screens/RoadmapScreen.tsx`
- Изменение этапов: найдите массив `roadmapSteps` и измените содержимое:
  ```typescript
  const roadmapSteps = [
    { title: "Название этапа", description: "Описание этапа" },
    // ...
  ];
  ```

### Изменение стилей

#### Цветовая схема
Файл: `src/App.css`
- Изменение цветов: найдите секцию `:root` и измените значения переменных:
  ```css
  :root {
    --color-primary: #a4c9fa;
    --color-secondary: #7cb0fa;
    // ...
  }
  ```

#### Шрифты
Файл: `public/index.html`
- Изменение шрифтов: найдите секцию `<head>` и измените ссылки на Google Fonts:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Days+One&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex&display=swap" rel="stylesheet">
  ```

### Изменение анимаций

#### Фоновые анимации
Файл: `src/components/AnimatedBackground.tsx`
- Изменение цветов градиентов: найдите компоненты `GradientBlob` и измените значения `color`
- Изменение скорости анимации: измените значения в свойствах `animation`

#### Анимации элементов
Файл: `src/App.css`
- Изменение keyframes анимаций: найдите соответствующие `@keyframes` и измените значения
- Изменение длительности анимаций: найдите свойства `animation` и измените значения времени

### Рекомендации по изменению контента

1. Всегда делайте резервную копию файла перед внесением изменений
2. Используйте систему контроля версий (git) для отслеживания изменений
3. Проверяйте изменения в режиме разработки перед публикацией
4. Следите за форматированием текста и отступами
5. При изменении длинных текстов проверяйте адаптивность на разных устройствах

## Команды для работы с GitHub

### Первоначальная настройка
```bash
# Инициализация Git репозитория
git init

# Добавление удаленного репозитория
git remote add origin https://github.com/isofuti/commpro.git

# Переименование основной ветки в main
git branch -M main
```

### Основные команды для работы
```bash
# Проверка статуса изменений
git status

# Добавление всех измененных файлов
git add .

# Создание коммита
git commit -m "Описание изменений"

# Отправка изменений на GitHub
git push origin main

# Получение изменений с GitHub
git pull origin main
```

### Работа с ветками
```bash
# Создание новой ветки
git checkout -b имя-ветки

# Переключение на существующую ветку
git checkout имя-ветки

# Слияние ветки с main
git checkout main
git merge имя-ветки
```

### Полезные команды
```bash
# Просмотр истории коммитов
git log

# Отмена последнего коммита
git reset HEAD~1

# Отмена изменений в файле
git checkout -- имя-файла

# Просмотр изменений
git diff
```

## Управление экранами

В режиме разработки доступна панель управления экранами, которая позволяет настраивать порядок и видимость экранов презентации.

#### Как использовать панель управления

1. Запустите проект в режиме разработки:
```bash
npm start
```

2. В правом нижнем углу появится кнопка с иконкой шестеренки (⚙️)
3. Нажмите на кнопку, чтобы открыть панель управления
4. В панели управления вы можете:
   * Включать/выключать отдельные экраны
   * Менять порядок экранов с помощью стрелок вверх/вниз
   * Экспортировать новую конфигурацию

#### Применение новой конфигурации

После настройки экранов в панели управления:

1. Нажмите кнопку "Экспортировать конфигурацию"
2. Скопируйте содержимое экспортированного файла
3. Создайте новый файл `production-config.ts` в папке `src/config/`
4. Вставьте скопированное содержимое

#### Деплой новой конфигурации

Чтобы применить новую конфигурацию на хостинге:

1. **Локальное тестирование:**
```bash
npm run build
```
Это создаст оптимизированную версию сайта в папке `build/`

2. **Деплой на хостинг:**
   * Загрузите новую версию файла `production-config.ts` на хостинг
   * Пересоберите проект на хостинге (если используется автоматический деплой)
   * Или загрузите всю папку `build/` на хостинг

3. **Проверка:**
   * Откройте сайт на хостинге
   * Убедитесь, что экраны отображаются в нужном порядке
   * Проверьте, что все выбранные экраны присутствуют

#### Важные замечания

* Панель управления доступна только в режиме разработки
* Новая конфигурация применяется только после пересборки и деплоя проекта
* На продакшене панель управления недоступна
* Все изменения конфигурации должны быть протестированы локально перед деплоем

## Управление экранами

Проект включает в себя систему управления экранами, которая позволяет настраивать отображение и порядок экранов в продакшен-версии.

### Локальная настройка экранов

1. Запустите проект в режиме разработки:
```bash
npm start
```

2. Откройте панель управления экранами:
   - Нажмите `Ctrl + Shift + A` для открытия панели
   - Панель появится в правом верхнем углу экрана

3. В панели управления вы можете:
   - Включать/выключать экраны с помощью чекбоксов
   - Менять порядок экранов с помощью стрелок ↑ и ↓
   - Экспортировать конфигурацию для продакшена

4. После настройки:
   - Нажмите кнопку "Экспортировать конфигурацию"
   - Скачается файл `production-config.ts`
   - Замените существующий файл `src/config/production-config.ts` на скачанный
   - Задеплойте обновленную версию

### Структура конфигурации

Файл `production-config.ts` содержит минимальную конфигурацию для продакшена:
```typescript
export const productionConfig = {
  screens: [
    { id: 'title', order: 1 },
    { id: 'statistics', order: 2 },
    // ... другие экраны
  ]
};
```

### Добавление новых экранов

1. Создайте новый компонент экрана в `src/components/screens/`
2. Добавьте экран в конфигурацию:
   - В `src/config/screens.ts` добавьте новый экран в `screensConfig`
   - В `src/App.tsx` добавьте компонент в `screenComponents`

Пример добавления нового экрана:
```typescript
// src/config/screens.ts
export const screensConfig = [
  // ... существующие экраны
  {
    id: 'newScreen',
    title: 'Новый экран',
    enabled: true,
    order: 7
  }
];

// src/App.tsx
const screenComponents = {
  // ... существующие компоненты
  newScreen: NewScreen
};
```

### Важные замечания

1. Панель управления доступна только в режиме разработки
2. Конфигурация в продакшене фиксирована и не может быть изменена пользователями
3. При добавлении новых экранов убедитесь, что их ID совпадают в конфигурации и компонентах
4. Порядок экранов в продакшене определяется полем `order` в конфигурации 