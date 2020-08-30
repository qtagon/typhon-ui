# Typhon UI

Strongly typed Dynamic UI Generator



## Motivation

As a Software Engineer i found myself that frontend development is repetitive , it was the time to change something.

I decided to write a library for dynamic ui generation which includes every basic component and definition for them.



## API

Typhon UI is the definition for ui components it is composed of `Column` → `Rows` → `Container`

Container has the definition for components , see `Usage Example`

The final implementation of rendering and components design is up to you.



## Demo

Comming soon...



## Installation

`npm i @qtagon/typhon-ui` or `yarn add @qtagon/typhon-ui`



## Usage Example

```javascript
  const ui = new Typhon('page').setColumn('menu').setColumn('content');

  const cmenu = dynamic
      .onColumn('cmenu')
      .setClassified('flex-auto') // set class for column
      .setRow('crow')
      .setContainer('cmenu') // add container to row

  dynamic.ixColumn('cmenu').ixRow('crow');

  const menu = cmenu.setMenu();
  menu.setOption().setIcon('home').setWidth(18).setHeight(18);
  menu.setOption().setIcon('calendar').setWidth(18).setHeight(18);
  menu.setOption().setIcon('message').setWidth(18).setHeight(18);
  menu.setOption().setIcon('user').setWidth(18).setHeight(18);
  menu.setOption().setIcon('logout').setWidth(18).setHeight(18);
  
  /**
   * Content
   */

  const content = dynamic
    .onColumn('content')
    .setScroll(true) // set scrollable
    .setStyle('padding: 2.938rem 0.938rem 0 1.938rem;') // set raw style
    .setRow('search')
    .setContainer('search'); // add container to row

  dynamic
    .onColumn('content')
    .setRow('data')
    .setContainer('data')
    .setClassified('display-grid')
    .setStyle(
      `grid-template-columns: repeat(auto-fill, minmax(15.750rem, 1fr)); grid-gap: 1.875rem;`
    );
    
  dynamic.ixColumn('content').ixRow('search').ixRow('data'); // index columns & rows

  content.setSearch('Search movies ...').setEvent('search', { type: 'query' });
  const tabs = content.setTabs('Movies'); // set tabs
  tabs.setOption('Popular').setEvent('search', { type: 'popular' }); // set tabs options & events
  tabs.setOption('Now Playing').setEvent('search', { type: 'now_playing' });
  tabs.setOption('Upcoming').setEvent('search', { type: 'upcoming' });
  tabs.setOption('Top Rated').setEvent('search', { type: 'top_rated' });
  
```


### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use `typhon-ui` under the terms of the GPLv3.



### MIT license

If you are looking for a GPL free license , please contact me.
