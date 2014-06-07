Sundial
=======

The easy date and time formatting functions for the Javascript.

### Usage

You can use Sundial to find the difference between a date and the current time in human readable form (eg. **Yesterday at 2:11pm**).

```js
sundial.humanDiff('2014-11-02T20:08:11.551Z ');
// Yesterday at 8:08pm
```

Also, you can format a Javascript `Date` object into a readble date or readable time using the following methods.

```js
sundial.formattedDate(new Date()); // Aug 20
sundial.formattedTime(new Date()); // 2:11pm
```

Or, if you want, you can use the `formattedDateTime` method to get the date and time part combined.

```js
sundial.formattedDateTime(new Date()); // Aug 20 @ 2:11pm
```

***

I had to wrote this code to implement the same in my own projects and thought it would be useful to many others too. I am planning to make it a more robust and feature-rich to work with time and dates (but no promises yet). - [Mohit Mamoria](https://twitter.com/mohitmamoria)