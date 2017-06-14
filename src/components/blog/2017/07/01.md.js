export default {
  id: 2,
  title: 'Notepad++? Sublime? Atom? Not when I have Vim.',
  post: `
### Notepad++? Sublime? Atom? Not when I have Vim.

According to the [internet](https://insights.stackoverflow.com/survey/2015#tech-editor) vim is still one of the more popular text editing programs around but in my professional life I still get a lot of raised eyebrows and sideways glances when I tell people I do nearly all my development work in vim.
When I show them just what I can do in vim those reactions tend to change from skepticism to surprised curiosity.
I've even had a few folks ask where to get started to use vim as I do, although I'm not sure if I've inspired any lasting 'converts.
I do think there are a lot of people who don't realize just how powerful a tool vim can be.

Rather than list all the things vim can do I'll start with the few main things I don't use vim for and then cover my basic setup.
Note I didn't say, what vim can't do.
As with most modern editors vim has a plug-in system and even a few different plug-in managers.
Combine that with vim's prevalence and maturity and you can imagine the breadth and depth of available plug-ins.

The first thing I don't use vim for is debugging.
This is mostly a personal preference.
I find myself more comfortable grabbing an IDE or standalone debugger when I need it.
There are several plug-ins available from integrations with [eclipse](http://eclim.org/) to [multi-language debuggers](https://github.com/idanarye/vim-vebugger) as examples, but I've never spent the time to try them out.
Also I try to keep my vim setup simple, quick, and easy to setup.
I don't want to depend on a large number of plug-ins or excessive configuration.
I've been working as a contractor for several years now and I find it very useful to be able to have my editor setup and configured in about five minutes so I can start exploring code.

The other two things I don't use vim for are somewhat related.
I don't use it to navigate to a methods source, at least not in the same way you would in many IDE's by a control+click (or other shortcut) to be taken directly to a methods implementation.
I also don't use it for language and source aware auto-completion.
Vim can certainly handle that functionality, there are a number of plug-ins that offer some flavor of those features.
I tend to find that getting them installed and setup properly takes up more time and effort than I would like.
I also don't miss it as much as you might think.

My vim setup is extremely simple and powerful because I shamelessly ride off the work of others.
I use the 'awesome' script from Amir Salihefendic found [here](https://github.com/amix/vimrc) so that my vim setup just becomes:
\`\`\`bash
git clone git://github.com/amix/vimrc.git ~/.vim_runtime
sh ~/.vim_runtime/install_awesome_vimrc.sh
\`\`\`

With just those two commands my development almost ready environment is ready.
I need to create a file called \`my_configs.vim\` and add a few lines, which I keep in [gist](gist.github.com).
Now all I need to do is open a terminal in my project directory and type \`vi\`.
Staying up to date is as simple as \`git pull\`.
Adding new plug-ins is as simple as dropping them into the sources_non_forked directory.
Part of my setup used to include a \`git clone\` of the [abolish](https://github.com/tpope/tpope-vim-abolish) plug-in, however that was recently added to the vimrc script saving me an additional step.

I'm going to leave it here for this post.
If you want more information on Amir's vimrc script the readme file on that project has a lot of good info.
I'll be following this post up with deeper dives on specific functionality available with this setup.
There is a sizable learning curve here, but I don't think that is really any different than the learning curve needed to use any development tool to it's potential.
Give it a real try and you might just be pleasantly surprised.
`};
