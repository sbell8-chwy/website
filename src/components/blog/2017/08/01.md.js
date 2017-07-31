import ctrlpImage from './ctrlp.png';

export default {
  id: 3,
  title: 'Navigation',
  post:`
### Navigation

#### Within a File
I'm going to cover most of the navigation options I use on a day to day basis.
This will include navigating both within a file, and across files within a folder structure you would normally expect from a development project.
I'm assuming the [awesome script](https://github.com/amix/vimrc) mentioned in my [last post](https://smbell.github.io/website/blog/2017/07/01) is installed.
I'll do my best to reference which plug-in allows for which features, but I might miss some.

Might as well start at the basics with the \`h\`, \`j\`, \`k\`, and \`l\` keys that move the cursor left, down, up, and right respectively and can have a number prepended to that many times (\`5h\` would move down 5 lines).
\`w\` moves to the next word, \`b\` moves to the previous word, \`^\` moves to the beginning of a line, and \`$\` moves to the end of a line.
\`<Ctrl>-u\` moves half a page up and \`<Ctrl>-d\` moves half a page down.
\`gg\` will take you to the first line of the file, \`G\` will take to the last line of the file, and you can proceed \`G\` with a number to take you to a specific line.

Finally there is the vim find function using the \`/\` command.
With the default setup from the awesome script you have incremental search enabled which provides as you type matching.
You also have smartcase enabled which makes your searched case sensitive if you include upper case characters.
Searches can include regex syntax.
Once you have performed a search all the matches will be highlighted.
\`n\` will move to the next match and \`N\` will move to the previous match.
If you are trying to find other instances of a word your cursor is currently on you can simply press \`*\` to initiate that search.
These are the basic movement commands anybody who has used vim before should be familiar with and I use constantly.

There are a few other commands I don't use often, but are worth mentioning as they can be very useful.
\`%\` takes you to the matching bracket, \`( ) { } [ ]\`.
If you are on a closing bracket it will take you to the opening bracket and vice versa.
If you are on on a bracket it will look for the next opening bracket and place the cursor on it's closing bracket.
\`f\` and \`t\` followed by a character will jump you to the next instance of that character.
The difference between them is that \`f\` will place the cursor *on* the character while \`t\` will place the cursor *before* the character.
That isn't a huge difference when just moving around the file, but it becomes more important when using them for editing.

#### Navigating Files
The first thing to note about navigating across files is that your current directory matters.
vim has the same \`pwd\` as where it was launched and because of that I will often launch vim from the root directory of my code base without supplying a file as an argument.
With that in mind the first tool I use to find files is the [ctrlp](https://github.com/ctrlpvim/ctrlp.vim) plug-in supplied with the awesome script.
The ctrlp plug-in allows you to search for files within your current directory tree and open them.
It has several modes which allow regex searches, file name only searches, full path searches, and the ability to limit searches to buffers, files, and/or MRU files.
That's all very powerful, and can get somewhat complicated, but I find just the basic operation to be what I need nearly all the time.
Just hit \`<Ctrl>-f\` (the awesome script changes the default mapped key) and start typing in the name of the file you're looking for.
You can use the arrow keys to select from the list of matching files and press the enter key to open the selected file in your current buffer.
Additionally \`<Ctrl>-t\` will open in a new tab, \`<Ctrl>-s\` will open in a new horizontal split, and \`<Ctrl>-v\` wil open in a new vertical split.
The ctrlp window will appear along the bottom of the vim window like this:

![alt text](${ctrlpImage} "ctrlp example image")

Next up we have the extremely useful [NERDTree plug-in](https://github.com/scrooloose/nerdtree).
This plug-in gives vim a powerful folder tree view that, among other things, allows you to explore, open, move, copy, create, and delete items in your directory structure.
To toggle the NERDTree panel open and closed use the command \`<leader>nn\` where the leader key is mapped to comma by default.
\`<Enter>\` expands directories, \`x\` collapses directories.
Files can by opened by \`<Enter>\` to open the file in your last buffer, \`s\` to open in a new split, and \`t\` to open in a new tab.
Within the NERDTree window all the normal vim navigation commands work to move around the tree structure.
There are many more available commands that I won't cover here, but I encourage you to read the [documentation](https://github.com/scrooloose/nerdtree/blob/master/doc/NERD_tree.txt) to see all that can be done.

There are a few things I add in my \`my_configs.vim\` file to make NERDTree work better for me.
I'm usually on fairly large monitors and the default size of NERDTree is a bit small for my taste so I add the line \`let g:NERDTreeWinSize = 70\`, where the 70 indicates the width in columns for the NERDTree window.
I usually have a couple of vertical splits open at least.
By default NERDTree will open a file in the buffer you were most recently in.
Because of this I set \`let g:NERDTreeQuitOnOpen = 1\` which makes the NERDTree split hide each time I open a file.
Not only does this keep it out of the way when I'm not using it, but it means I can toggle it on from any buffer and the file I open will open in the buffer I was using.
Also I add \`let g:NERDTreeShowHidden = 1\` so I can see hidden files.

The last navigation tool I'm going to cover is the \`:vimgrep\` command.
vimgrep is just what it sounds like, it performs a grep across the files rooted in your current directory.
The vimgrep command requires a pattern as well as a file list such as \`:vimgrep myPattern *\` or \`:vimgrep myPattern *.js\`.
The file with the first match will be loaded into a new buffer in a new tab and all the matches will be loaded into the quickfix list.
The quickfix list can be opened with the command \`:cw\` where you can view the matches with the full matching line as context and directly open those matches.
Selecting a line in the quickfix list and pressing enter will take you to that line in that file in a new tab.
Again, all the methods for navigating within a file work within the quickfix list.
`};
