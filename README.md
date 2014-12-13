# The Sticky Pagination Fixer

##Sticky headers are super annoying for spacebar paginators.
	
_Why?_

Because sticky headers effectively change the height of the viewport <strong>without telling the browser.</strong>

_So?_

Well, browsers use their internal measurement of the viewport's height to determine how tall a "page" is, which it uses to determine how far to scroll when a user hits the <kbd>space</kbd> or <kbd>page down</kbd> keys.

_Again: So?_

Take a look at this, a diagram of a normal pagination event:

![a diagram of a normal pagination event](https://github.com/murtaugh/sticky-pagination-fixer/blob/master/demo-assets/img/figure-1.png?raw=true)

The box is the viewport, and the red line is the last thing a reader sees before triggering a "paginate down" event. The browsers' pagination logic is designed so the red line is also the first thing the reader sees after their eyes scan back up.

Now look what happens when a sticky header enters the picture (heh):

![a diagram of a pagination event with a sticky header](https://github.com/murtaugh/sticky-pagination-fixer/blob/master/demo-assets/img/figure-2.png?raw=true)

Because the effective height of the viewport is being altered by the sticky header, it means not only is our red line totally obscured but so are two other lines we haven't even seen yet. The reader now has to scroll back up to see what they missed (if they even notice). If you can't see how annoying this is you might be a horrible monster.

_Oh. Ok._

The amount of overlap, of course, varies based on the height of the sticky header in question, but the header will never not interfere to some degree.

##Take over that scroll.

Do your readers a favor and install [The Sticky Pagination Fixer](https://github.com/murtaugh/sticky-pagination-fixer). It captures native pagination-related events, recalculates the height of the viewport, and then scrolls the page to the correct point. Here's a demo.

##Some notes.

* Sometimes we use the space bar for other things, like... entering spaces in text fields. The Sticky Pagination Fixer takes that into account.
* Sometimes we also use the space bar for play/pause events in media players. This is quite a bit trickier — we'll need to think about this.
* There are probably some other native behaviors we should be accommodating as well.
* No jQuery required.
* You might be thinking, "Aaagh, JavaScript!" Well, stop. If JS isn't available or this script breaks? _Scrolling will happen as normal._ "Graceful degradation", my friends. (Or "progressive enhancement", if you absolutely must.)

</ul>

##Some credit.

The idea to finally write this script came from the New York Times site, which recently aded a sticky header and thankfully has a similar feature built in. And thanks to <a href="https://twitter.com/tealtan/status/426142449451683840">Allen Tan</a> who pointed me to this <a href="http://codereview.stackexchange.com/questions/13111/smooth-page-scrolling-in-javascript">smooth scrolling script</a> on Stack Exchange.

##Plus: it could use a better name.

Any ideas?
