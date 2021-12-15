# Typhon UI - Strongly Typed UI Generator

_Complex user interfaces via code 🎨_

Check typedocs [here](https://qtagon.github.io/typhon-ui/index.html), _generated via [typedoc](https://typedoc.org/)_.

## 💥 Motivation

As a developer, have you ever noticed that all projects with user interface elements are repetitive?

Such as user profile, article page, forms, modal, cards, layouts, every damn thing, you name it, it's all repetitive !

All coding become repetitive when you understand you're just writing functions that read, write or display data of some APIs.

## 💡 Purpose

So, what's **Typhon UI** all about ?

Well, **Typhon UI** makes an attempt to ease to workload off your shoulders in defining every user interface.

A good example might be the article page, you've created your shiny new articles pages which displays articles as list of elements, but what would you do if a new requirement comes that articles pages needs to be displayed as a grid of cards with some forms and another layout ?

**Not again !** you have to create a different layout, create forms, create cards, so much things for the same jittery stuff !

But here comes your savior _(maybe)_, **Typhon UI**.

You define your components once, and **Typhon UI** will make sure to display them dynamically.

You have to implement your **JSON** renderer of **Typhon UI**'s response in your _Front-end application_.

## 🗃️ API

**Typhon UI** defines **UI** components, well thank you _Sherlock_ 🧐.

It is composed of `Column` → `Rows` → `Container` → `Component`

**The final implementation of _rendering_ and _components_ design, and i mean (real) design (visually) is up to you.**

_[Core](https://github.com/qtagon/typhon-ui/tree/master/src/core)_ →
_[Column](https://github.com/qtagon/typhon-ui/blob/master/src/core/Column.ts)_ →
_[Row](https://github.com/qtagon/typhon-ui/blob/master/src/core/Row.ts)_ →
_[Container](https://github.com/qtagon/typhon-ui/blob/master/src/core/Container.ts)_ →
_[Components](https://github.com/qtagon/typhon-ui/tree/master/src/core/components)_

---

### 🧱 Installation

`npm i @qtagon/typhon-ui` or `yarn add @qtagon/typhon-ui`

---

### 🔍️ Usage Example

**! Looks scary, at first.** ⚗️

_This example was handwritten in [svelte](https://svelte.dev/)_ check full example [here](https://github.com/qtagon/typhon-ui-svelte)

```javascript
import { Typhon } from '@qtagon/typhon-ui';

/** Declare TyphonUI */
let dynamic = new Typhon('movies-ui')
  .setColumn('content-menu') /** Attach column for menu */
  .setColumn('content'); /** Attach column for page content */

/** Menu */
const cmenu = dynamic
  .onColumn('content-menu')
  .setClassified('flex-auto') /** CSS classes */
  .setRow('content-menu-row') /** Attach row */
  .setContainer('content-menu-container'); /** Attach container to row */

/** Indexing content-menu column and content-menu-row row*/
dynamic.ixColumn('content-menu').ixRow('content-menu-row');

/** Attach menu component to menu contianer */
const menu = cmenu.setMenu();

/** Attach option to menu component, then icon to option, then width and height of icon */
menu.setOption().setIcon('home').setWidth(18).setHeight(18);
menu.setOption().setIcon('calendar').setWidth(18).setHeight(18);
menu.setOption().setIcon('message').setWidth(18).setHeight(18);
menu.setOption().setIcon('user').setWidth(18).setHeight(18);
menu.setOption().setIcon('logout').setWidth(18).setHeight(18);

/** Page Content */
const content = dynamic
  .onColumn('content')
  .setScroll(true) /** Make column scrollable */
  .setStyle('padding: 0.938rem 0.938rem 0.938rem 1.938rem;') /** Raw CSS style */
  .setRow('search') /** Attach row  for search bar */
  .setContainer('search'); /** Attach container to row */

dynamic
  .onColumn('content')
  .setRow('data') /** Attach row for cards */
  .setContainer('data') /** Attach container to row */
  .setClassified('display-grid') /** CSS classes */
  .setStyle(
    `grid-template-columns: repeat(auto-fill, minmax(15.750rem, 1fr)); grid-gap: 1.875rem;`,
  ); /** Raw CSS style */

/** Indexing content column and content-menu-row row*/
dynamic.ixColumn('content').ixRow('search').ixRow('data');

content.setSubject('Search').setClassified('h1'); /** Set container (title) */
content.setSearch('Search movies ...').setEvent('search', {
  type: 'query',
}); /** Attach search component with search event */

/** Attach tabs component with options and events */
const tabs = content.setTabs('Movies');
tabs.setOption('Popular').setEvent('search', { type: 'popular' });
tabs.setOption('Now Playing').setEvent('search', { type: 'now_playing' });
tabs.setOption('Upcoming').setEvent('search', { type: 'upcoming' });
tabs.setOption('Top Rated').setEvent('search', { type: 'top_rated' });

/** Reference to data container which contains cards */
const container_data = dynamic.onContainer('data');

/** Attach cards by external logic , currently fetching movies from themoviedb API */
const setMovieCard = (data, poster = 'https://image.tmdb.org/t/p/w500') => {
  /** Attach card component */
  const card = container_data
    .setCard(data.title, data.overview) /** Set title and description of card */
    .setClassified('background-white round padding-default single-line'); /** CSS classes */

  /** Attach image component to card with title */
  card.setImage(`${poster}${data.poster_path}`).setTitle(`${data.title} Poster`);

  /** Attach button component to card with title, event and icon */
  card
    .setButton('Read More')
    .setEvent('element', data) /** Attach event */
    .setClassified('transparent bordered') /** CSS classes */
    .setIcon('check'); /** Attach icon component */

  dynamic = dynamic; /** Rerender UI, just svelte's way ... */
};
```

---

### 📄 Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use `typhon-ui` under the terms of the GPLv3.

### 👥 Contributing

[Bugs](https://github.com/qtagon/typhon-ui/issues?q=is%3Aopen+is%3Aissue+label%3Abug), [PR](https://github.com/qtagon/typhon-ui-svelte/pulls) are always appreciated.

**Typhon UI** is an GPLv3-licensed open source project with its ongoing development made possible thanks to the support by the community, **_substantial contributors may get a GPLv3 free license_**.

Flow:

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Test your changes to the best of your ability.
4. Update the documentation to reflect your changes if they add or changes current functionality.
5. Commit your changes (`git commit -am 'Added some feature'`).
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

### 📝 MIT license

If you are looking for a GPLv3 free license, contact [me](https://github.com/dorin-musteata).
