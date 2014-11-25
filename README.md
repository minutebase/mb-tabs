# MB-Tabs

WiP

```handlebars
{{#tabs-pane active=activeTab}}  
  {{#tabs-nav}}
    {{#tabs-nav-item name="foo"}}Foo{{/tabs-nav-item}}
    {{#tabs-nav-item name="bar"}}Bar{{/tabs-nav-item}}
    {{#tabs-nav-item name="baz"}}Baz{{/tabs-nav-item}}
  {{/tabs-nav}}

  {{#tab-panel name="foo"}}
    Content for Foo
  {{/tab-panel}}

  {{#tab-panel name="bar"}}
    Content for Bar
  {{/tab-panel}}

  {{#tab-panel name="baz"}}
    Content for Baz
  {{/tab-panel}}
{{/tabs-pane}}
```

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
