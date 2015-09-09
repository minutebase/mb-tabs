# MB-Tabs

```handlebars
{{#tabbed-content active=active on-change="changeTab" as |manager|}}
  <div class="tabs__nav">
    {{#tab-button manager=manager name="one"}}One{{/tab-button}}
    {{#tab-button manager=manager name="two"}}Two{{/tab-button}}
    {{#tab-button manager=manager name="three"}}Three{{/tab-button}}
  </div>

  {{#tab-panel manager=manager name="one"}}
    Tab One
  {{/tab-panel}}

  {{#tab-panel manager=manager name="two"}}
    Tab Two
  {{/tab-panel}}

  {{#tab-panel manager=manager name="three"}}
    Tab Three
  {{/tab-panel}}
{{/tabbed-content}}
```

## Override Active class

The tab button gets a class (default `active`) when active.
To change this class, either set `active-class` on the content or button:

```handlebars
  {{#tabbed-content active-class="active-button"}}
```

```handlebars
  {{#tab-button active-class="active-button"}}
```

## Actions

The `tabbed-content` component sends `on-change` when a button is clicked.

Respond to this and update `active` for the tab to change

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
