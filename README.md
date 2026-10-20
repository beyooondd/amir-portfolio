# Amir Rzaev — Portfolio

## КАК ЗАПУСТИТЬ (шаг за шагом)

### Шаг 1 — Установи зависимости
Открой папку проекта в VS Code.
Открой терминал (Terminal → New Terminal) и выполни:

```
npm install
```

Подожди пока установится (1-2 минуты).

### Шаг 2 — Добавь фото
Положи своё фото (переименуй в `photo.jpg`) в папку `/public`

### Шаг 3 — Запусти локально
```
npm run dev
```

Открой браузер: http://localhost:3000
Сайт работает! Любые изменения в коде — страница обновляется автоматически.

---

## КАК ЗАЛИТЬ НА VERCEL (бесплатный хостинг)

### Что такое Vercel?
Vercel — бесплатный хостинг специально для Next.js.
Ты получаешь ссылку типа `amir-portfolio.vercel.app` которую можно кидать клиентам.
Каждый раз когда ты обновляешь код — сайт обновляется автоматически.

### Шаг 1 — Создай аккаунт на GitHub
Зайди на github.com → Sign up (бесплатно)

### Шаг 2 — Создай репозиторий
- Нажми "New repository"
- Название: `amir-portfolio`
- Public
- Create repository

### Шаг 3 — Залей код на GitHub
В терминале VS Code (в папке проекта):

```
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin https://github.com/ТВОЙ_НИКНЕЙМ/amir-portfolio.git
git push -u origin main
```

(замени ТВОЙ_НИКНЕЙМ на свой GitHub никнейм)

### Шаг 4 — Подключи Vercel
1. Зайди на vercel.com
2. Sign up через GitHub
3. "Add New Project"
4. Выбери репозиторий `amir-portfolio`
5. Нажми Deploy

Готово! Через минуту получишь рабочую ссылку.

---

## КАК ОБНОВЛЯТЬ САЙТ

Когда хочешь что-то изменить:
1. Напиши мне в Claude что нужно изменить
2. Я дам тебе новый код
3. Вставь его в нужный файл в VS Code
4. В терминале:
```
git add .
git commit -m "update"
git push
```
5. Vercel сам обновит сайт за 30 секунд

---

## СТРУКТУРА ФАЙЛОВ

```
amir-portfolio/
├── app/
│   ├── page.jsx          ← весь сайт (React компонент)
│   ├── globals.css       ← все стили
│   ├── layout.jsx        ← основной layout
│   └── translations.js   ← тексты EN/RU
├── public/
│   └── photo.jpg         ← СЮДА положи своё фото
├── package.json
└── next.config.js
```

Файл для правок контента: `app/translations.js`
Файл для правок стилей: `app/globals.css`
Файл для правок структуры: `app/page.jsx`
