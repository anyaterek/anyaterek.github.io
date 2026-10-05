# Component system: scandinavian technical (v3)

Поведение и характер. Все значения — токены из `design/tokens.css`. Брейкпоинт `48rem`, записан литералом (`var()` не работает в `@media`). Язык интерфейса — английский.

## Модель данных

`src/data/works.ts` — каталог, `src/data/profile.ts` — человек, опыт, образование, контакты.

Work:
- `slug`, `title`, `kinds` (первая — маркер), `visibility`: `public | commercial | art`, `hidden?`
- `desc` — строка 2 карточки: что она делала. Публичный репо — описание с GitHub дословно; коммерческий кейс — сжатые буллеты CV; холст — сюжет и процесс
- `lang`, `stars`, `type`, `stack`, `role`, `period`, `series`, `status`, `metrics` (только у публичных; у коммерческих цифры уже внутри буллетов CV)
- `facts` — у коммерческих кейсов буллеты должности из CV дословно; `how` — шаги потока; `refs`, `media`, `cover`, `video`, `protocol`
- `hidden: true` — запись остаётся в данных, но не попадает в каталог, prev/next и `getStaticPaths`. Единственная точка фильтра — `visibleWorks`

Experience (`profile.ts`): `role`, `company`, `location`, `period`, `bullets` (дословно из CV, все), `stack` (строка Stack дословно, если есть в CV). Education: `title`, `years`.

Пустое поле не выводится.

## Monogram

- inline SVG 32×32, буквы `a` и `t` одним проводом: чаша и ножка `a` → провод по базовой линии → ножка `t` вверх. Перекладина `t` — короткий отвод, который заканчивается терминальным узлом (залитый круг)
- `stroke: currentColor`, толщина 2 в единицах viewBox, скруглённые концы; цвет `ink`, на hover — `accent`
- ссылка на `/`, `aria-label="Anna Terekhova — home"`, сам SVG `aria-hidden`
- тот же рисунок — `public/favicon.svg`, цвет переключается по `prefers-color-scheme` внутри SVG

## Header / Nav

- слева монограмма, справа `works · experience · contact` (mono, small), затем переключатель темы
- якоря `/#works`, `/#experience`, `/#contact`; текущая секция — `aria-current` + линия `accent` 2px снизу
- sticky, фон `--color-scrim`, нижняя линия `rule`
- mobile: монограмма и тема в первой строке, навигация второй строкой

## Theme toggle

- `theme: light / dark`, `aria-pressed` (pressed = dark). По умолчанию светлая
- `localStorage` в try/catch, инлайн-скрипт в `<head>` ставит `data-theme` до отрисовки; `?theme=dark|light` перекрывает

## Hero

- крупного заголовка нет. `<h1 class="visually-hidden">Anna Terekhova</h1>` для доступности и SEO
- арт из символов в `<pre aria-hidden="true">`: 7 строк, 33 колонки. Импульс сигнала входит в чашу `a`, провод идёт по базовой линии к ножке `t`, перекладина заканчивается узлом `●`. Это та же идея, что у монограммы в шапке
- цвет `ink-3`, узел `●` — `accent`. Шрифт `--font-art` (системный моно: в подмножествах Plex Mono нет box-drawing, а смешение шрифтов сбивает колонки), размер `--text-art` (на 390px 33 колонки помещаются в 358px). Без анимации
- терминал: `$ whoami` → **anna terekhova** (жирный, размер терминала) → `tech lead (medtech · biotech) · fullstack · painter`. Алиас wabala не выводится
- эпиграф mono `// Somewhere between the signal and the thing that watches it.`

## Terminal prompts

- `.prompt`: mono, `$ ` цветом `accent`. Ровно четыре: `whoami`, `ls works/`, `git log --oneline`, `cat contacts`

## Section

- линия `rule` сверху, отступ `--space-8` / `--space-9`; заголовок: промпт → h2 (вес 400) → при необходимости одна строка контекста

## Work card (каталог)

- GitHub pinned repo, 3 строки:
  1. маркер + имя + бейдж (`public`, `private · commercial`, `canvas`)
  2. что делала: до 2 строк (`line-clamp: 2`), `ink-2`
  3. мета mono `ink-3`: язык с точкой **или** role · period · 3–5 технологий; у холста type · series
- миниатюра холста справа `--thumb-mini`, `contain`
- контур 1px `rule`, радиус `--radius-card`; hover — подложка `panel`, контур `rule-strong`, имя `accent`
- сетка 1 колонка, 2 от `48rem`, зазор `--space-3`. Над сеткой справа от `$ ls works/` счётчик `16 works`
- вся карточка — ссылка на страницу работы, но суть понятна без клика
- фильтров нет

## Experience (`$ git log --oneline`)

- запись = должность CV: строка `Role · Company · Location · Period` (role — h3, остальное mono `ink-3`), под ней все буллеты дословно, последней строкой `Stack: …` mono
- буллет — короткое тире `rule-strong` слева, без точек списка
- записи разделены линией `rule`, между записями воздух `--space-6`
- Education — отдельный блок после опыта: метка `edu` и годы цветом `--color-edu`, название `ink`
- записей не о работе (публикация репо, фестиваль) нет

## Contacts

- `$ cat contacts`, блок `key: value`, ссылки с подчёркиванием `rule-strong` → `accent` на hover

## Work page (README)

- колонка `--measure`: крошки → маркер + h1 + бейдж → протокол (холст) → desc → `key: value` → how / facts → стадии → prev / next (только видимые работы)
- у коммерческих кейсов `facts` — буллеты CV дословно, `metrics` не выводится

## Media frame

- `<Picture>` webp + jpg-фолбэк, `widths` + `sizes`, размеры из метаданных; подложка `panel`, контур `rule`
- видео: `controls`, `preload="metadata"`, без автозапуска

## Skip link

- `skip to content`, виден только на focus, заливка `accent`, текст `on-accent`
