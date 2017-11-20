export default {
  id: 6,
  title: 'Go Fish',
  post:`
### Go Fish

I came across a new, at least to me, shell.
[fish](https://fishshell.com/) bills itself as a smart and user-friendly command line.
What first grabbed my attention was fish's auto-suggestion feature.
As you type fish shows previously used commands that match.
You can further navigate your command history using normal keys (such as up and down) and that history will be limited to commands that matched what you were typing.

Fish brings a scripting language more akin to python.
While much of it is very similar to bash scripting, such as pipes and job control, there are significant syntax differences that will make even simple scripts look a bit different.
The first difference I ran into was dealing with command substitution, where bash uses a $() syntax fish uses only ().

Another interesting feature is it's web based configuration, assuming you're running on a graphical system.
Falling back to file based configuration is always an option.
Running the command \`fish_config\` will bring up a web page that allows you to adjust many common settings.
Colors, your prompt, functions, and key bindings are a few of the settings available.

The only real pain point I experienced when switching to fish is the bash scripts I rely on no longer working.
To be clear you can run bash scripts if they have the proper shebang, or by invoking bash directly.
The problem comes in with scripts such as \`nvm\` or \`virtualenv\` that modify the shell environment.
Thankfully that is a problem with a solution in the form of (bass)[https://github.com/edc/bass].
Bass captures modifications made by scripts and replicates the changes into the fish shell.

Overall I found fish to be a very useful tool, and it might just become my default shell across all my computers.
`};
