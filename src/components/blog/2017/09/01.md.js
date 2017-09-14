export default {
  id: 4,
  title: 'Fun with Kittens',
  post:`
### Fun with Kittens

As any developer knows you're not constantly typing furiously into a text editor at work.
There's occasional downtime, whether that be form running builds, not wanting to start something new before that meeting in 10 minutes, or just the need to step away from a problem for a moment.
Of course there's no shortage of things to occupy our attention during short breaks, but why not one more.


I came across this fun little resource game [kittens](http://bloodrizer.ru/games/kittens).
It's a game where you get resources, to build things, that get you more resources, so you can build more things, that get you more resources... You know what it's more fun than it sounds.
It's kinda like Civilisation without the land areas, or worries about being attacked, or graphics.
You know what, just go look for yourself.

It actually has really deep science and resource trees and can be fun to play if you're into that sort of thing.
The problem is that to play it normally takes way more direct attention than I can give it during a work day.
I can't be constantly checking to make sure my resources aren't stuck at their limits or worried I'm going to miss some event that I only get a short window to click on.
Rather than give it up so easily I thought: 'This is a browser game, I should be able to automate this.'

Not wanting to reinvent the wheel I fired up [Tampermonkey](http://tampermonkey.net/) and went to see what was out there.
I found a [Kitten Tools](https://greasyfork.org/en/scripts/29244-kittens-tools) script and gave it a try.
The script wasn't bad.
It converted resources as needed when they hit their limits, which was my main concern.
However it bought a lot of buildings I didn't necessary want right at that time, and it converted all my catnip just before winter killing all of my kittens.
So on the whole it maybe could have been a bit better.

The best thing it did was to save me a lot of time figuring out how to interact with the game.
I now had a bunch of example code for processing resources, checking statuses, performing actions, and jumping off point to better explore the API of the game.

So in bits and spurts I'll be building up a script that works better.
As I learn more about the game I'll also be able to give it better decision making and options.
Hopefully by the next blog post I'll have something workable and maybe I'll post a version to [greasyfork](https://greasyfork.org)
`};
