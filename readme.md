# gatsby-plugin-rename-routes

A [Gatsby](https://www.gatsbyjs.org) plugin for renaming path names. Gatsby's `pages` directory translates directly into routes, and when working on non-English sites it's un-elegant having a code base in different languages. This plugin allows you to create a translation mapping for your page paths.

## Install

`yarn add @bakkenbaeck/gatsby-plugin-rename-routes`

or with npm

`npm install @bakkenbaeck/gatsby-plugin-rename-routes`

## How to use

In your `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: "@bakkenbaeck/gatsby-plugin-rename-routes",
      options: {
        rename: {
          "/contact/": "/kontakt/",
          "/about/": "/om/",
        },
      },
    },
  ],
};
```

It's important that the key in the `rename` object is an **exact match** to the page path you want to rename. You can see all your pages and their page path with [this graphql query](http://localhost:8000/__graphql?query=query%20%7B%0A%20%20allSitePage%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20path%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A):

```graphql
query {
  allSitePage {
    edges {
      node {
        path
      }
    }
  }
}
```

### Options

#### rename

Type: `object`<br>
Required: `true`

An object with key/value pairs, where the key is the current path and value the translated version.

##### "Hidden" feature

The value can also be an object, where a path is required, and an optional client render boolean.

```javascript
...
{
  rename: {
    "/contact/": "/kontakt/",
    "/about/": "/om/",
    "/app/": {
      path: "/applikasjon/",
      clientRender: true,
    }
  }
}
...
```

Setting `clientRender` to `true` will allow pages to render client-side only, [more about client-only rendered pages](https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/) in Gatsby.
