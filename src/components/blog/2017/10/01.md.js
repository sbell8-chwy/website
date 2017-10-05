export default {
  id: 5,
  title: 'Conditional Vim Settings',
  post:`
### Conditional Vim Settings

I work on a few different projects and this led me to a minor annoyance that I couldn't continue to live with.
The [syntastic](https://github.com/vim-syntastic/syntastic) plugin comes with the [awesome script](https://github.com/amix/vimrc) I use to setup vim.
This plug-in lets vim show you the compile and style errors/warnings generated when you save a file.
It delegates to various language specific tools to get the details and display these errors both in the file and listed in a pick list at the bottom.

My specific problem centered around JavaScript with some projects using jslint and others eslint.
My default syntastic setup used jslint by default for JavaScript files and I needed a way to change that only for specific projects.
Off to Google I go!

The first solution I found, one that I was already aware of, is a built in part of vim.
Vim has a setting called \`exrc\`.
Setting \`exrc\` to true tells vim to look for and read from a file named \`.exrc\` on startup.
The problem is that it opens up the possibility to accidentally run untrusted code.
You have to always be watchful for any \`.exrc\` file to that might find it's way onto your machine.
This setting is generally considered insecure and recommended to be left disabled.

Following that I found a promising plug-in called [local_vimrc](https://github.com/LucHermitte/local_vimrc).
This plug-in looks for a \`_vimrc_local.vim\` file on startup and sources that.
While this is admittedly similar to the exrc solution it's more configurable and can be setup in a way that is more secure.
Still, it seemed a bit overkill for what I want.

What I eventually settled on was a small if statement using one of vim's built in functions, [filereadable](http://vimdoc.sourceforge.net/htmldoc/eval.html#filereadable%28%29).
\`\`\`
if filereadable('.eslintrc.json')
  let g:syntastic_javascript_checkers = ['eslint']
endif
\`\`\`
Just check to see if the eslint file exists, and if so set eslint as the checker.
Admittedly this solution is not the most robust, and there are other options for configuring eslint that this would need to be modified to work with, but it solves my problem with minimum risk and minimum overhead.

With that annoyance solved I can get back to work.
`};
