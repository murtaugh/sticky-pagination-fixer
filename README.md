# The Sticky Pagination Fixer Has Been Archived
	
_Why?_

It uses javascript to do a job that can now be handled purely through CSS.

_How?_

Like this:

```
html {
	scroll-padding-top: foo; /* set this to a value that matches the height of your sticky header */
}
```

This is supported by all modern browsers, with the exception of IE11, which (at the time of this writing) is about to hit its end of life,
