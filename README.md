jQuery Time Entry that works fine with Webpack/Rollup
=================

This plugin sets an input field up to accept a time value using a spinner or the keyboard.

* Set time format, including seconds and/or 24 hour time.
* Integrates with mousewheel plugin.
* Expandable spinner for easier use.
* Over 20 localisations.

Have a look at the plugin Web site, http://keith-wood.name/timeEntry.html, for demonstrations of its abilities.

For documentation on the functionality see http://keith-wood.name/timeEntryRef.html.


# strrife

Suppose you want you use this with modern tech. OK. You don't want to say why? Fine.

![I wanted it too](https://c.tenor.com/yqJt4RkqaxAAAAAC/keep-your-secrets-frodo.gif)

```
import $ from 'jquery';
import initTimeEntryHelpers from 'timeentry/jquery.plugin';
import initTimeEntryPlugin from 'timeentry/jquery.timeentry';
initTimeEntryHelpers($);
initTimeEntryPlugin($);
```
