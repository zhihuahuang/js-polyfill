# js-polyfill

A lightweight js polyfill library.

## Install

```
npm install js-polyfill --save
```

## Usage

```javascript
require('Array.prototype.forEach');

[1, 2, 3].forEach(function (value) {
    // do something
});
```

## Array

- Array.from
- Array.isArray
- Array.of
- Array.prototype.copyWithin
- Array.prototype.every
- Array.prototype.fill
- Array.prototype.filter
- Array.prototype.find
- Array.prototype.forEach
- Array.prototype.includes
- Array.prototype.lastIndexOf
- Array.prototype.map
- Array.prototype.reduce
- Array.prototype.reduceRight
- Array.prototype.some

## Number

- Number.isFinite
- Number.isInteger
- Number.isNaN
- Number.isSafeInteger
- Number.MAX_SAFE_INTEGER
- Number.parseFloat
- Number.parseInt

## Object

- Object.assign
- Object.create
- Object.entries
- Object.is
- Object.keys
- Object.values

## String

- String.prototype.trim
- String.prototype.trimEnd
- String.prototype.trimStart