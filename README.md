# File Exists Sync

Check if a file exists in Node.js.

Why a new file-exists check?

- uses a non-deprecated version of `fs`
- no need for promises
- ES6 default import

## Setup

`> npm install node-file-exists`

```js
import exists from 'node-file-exists';

exists('/path/to/file.js');
// true or false
```

##### Silent

Pass in false as a second parameter to produce errors on failure.

```js
import exists from 'node-file-exists';

exists('/path/to/file.js', false);
// true or Error
```
