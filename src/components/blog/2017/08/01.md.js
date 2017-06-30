export default {
  id: 3,
  title: 'Navigation',
  post:
### Navigation

I'm going to cover most of the navigation options I use on a day to day basis.
This will include navigating both within a file, and across files within a folder structure you would normally expect from a development project.
I'm assuming the [awesome script](https://github.com/amix/vimrc) mentioned in my [last post](https://smbell.github.io/website/blog/2017/07/01) is installed.
I'll do my best to reference which plug-in allows for which features, but I might miss some.

Might as well start at the basics with the \`h\`, \`j\`, \`k\`, and \`l\` keys that move the cursor left, down, up, and right respectively and can have a number prepended to that many times (\`5h\` would move down 5 lines).
\`w\` moves to the next word, \`b\` moves to the previous word, \`^\` moves to the beginning of a line, and \`$\` moves to the end of a line.
\`<Ctrl>-u\` moves half a page up and \`<Ctrl>-d\` moves half a page down.
\`gg\` will take you to the first line of the file, \`G\` will take to the last line of the file, and you can proceed \`G\` with a number to take you to a specific line.
These are the basic movement commands anybody who has used vim before should be familiar with and I use constantly.

There are a few other commands I don't use often, but are worth mentioning as they can be very useful.
\`%\` takes you to the matching bracket, \`( ) { } [ ]\`.
If you are on a closing bracket it will take you to the opening bracket and visa versa.
If you are on on a bracket it will look for the next opening bracket and place the cursor on it's closing bracket.

`};
