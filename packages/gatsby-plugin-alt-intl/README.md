<h1 align="center">
  gatsby-plugin-alt-intl
</h1>

Custom React INTL plugin to Alt.

## Why?

- I want to use my custom types to safely use localized messages **across all apps**

## What does it do?

- Not much... Instead of creating pages for each language, we only **wrap the pages** with `IntlProvider`, using the definitions that come from [alt-zap](https://github.com/alt-zap/alt-zap) project.

## How to develop?

1. Clone it.
2. Do you thing on the `src` folder.
3. Run `yarn develop`.
4. Run `yarn link`.
5. Now, run `yarn link @alt-zap/gatsby-plugin-alt-intl` on your Gatsby project.