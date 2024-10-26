# Welcome to my Project Two Blackjack Game

##Blackjack

My project for the course is a blackjack game which uses HTML, CSS and JavaScript, I wanted to make a simple game which could show the potential of on online game used by professionals. Whilst the blackjack game itself is not named, I have named the *'hub'* that the game sits in as GameScript, the user should see a little about the site on the index/home page and there is the beginnings of a site which could host a number of other games with the identity of being a pure script only game.

GameScript would aim to be a free platform for games *however* users would be able to login to their account and make premium purchases (although this is not yet implemented due to being a short project focusing only on the blackjack game).

Just a few announcements before you continue;

The rules of blackjack vary, I am using the rules I know going to the casinos in my local areas, including London, so think of it as a European styled blackjack game.

I have added images of the site, however I can only display in black/white. If you want to see the color of the site, look at it using the website link.

The main focus of the site is the blackjack game, the other pages are a simple design and there is not much else to discuss.

If you want to see the code, look at it in the script or blackjack in js.

If you want to see my commit history for how development took place, just bear in mind that I use fork so I have subjects aswell as descriptions. I also a full-time as a business consultant working on a *supposed* part-time course so commits may be varied in regularity as expected.

##GameScript Homepage

![Homepage.](assets/images/homepage.pdf)

This is the homepage of the hub that the game sits in, as the focus was on the game, this was just to show how the blackjack game would be accessed and give the user an idea of the practical element of the game, as part of a wider online community of games, whether linked to gambling or for more casual players.

##Features

###NavBar

![NavBar](assets/images/navbarhtml.pdf)

This is the NavBar, whilst there is not alot of content on it, the user can see where the potential for growth is, the nav bar also contains a *Mega-Menu* which is a dropdown section allowing the user to however over *games* in the list and this will drop down a further menu based on the potential games. This was made by using all the tools at my disposal and I took the idea from W3schools and tweaked it to match my needs. Url is https://www.w3schools.com/howto/howto_css_mega_menu.asp

###Blackjack

This is the Blackjack game, the style is simple yet the user gets a feeling they are at a table, the green background with the red felt and the chips in various appropriate colors.

The first thing a player needs to do is decide to bet, to bet, they need to click the chip(s) they want to use to bet, the player starts at 1000 indicated by the score, however in future this will reflect the *balance* in a players account if they want to actually gamble. To simply play the game without a bet, just click the button *drawcards* without clicking any chips. As in real-life casino, all bets are final and the player cannot retract a bet. Maybe in the future depending on user experience this can change but I wanted the game to feel as if you were at a table.

If a bet is made the pot appears with the amount bet by the player.

![Blackjack](assets/images/blackjackpage.pdf)

###Dealing Cards

When the game starts, two cards are dealt to the player and two to the dealer, I used an array in JS to create objects for each card and the computer will randomly select a card to deal, this will also prevent the card from being *redrawn* so there are no duplicates and the cards are no longer in the deck until they are shuffled back in when a newgame is started. The player can only see one of the dealers cards and there are trackers for the scores to help the user see the dealers score (only the known cards are calculated) and their own score.

I have also allowed the four controls a player can take during a blackjack game, such as *hit*, *stand*, *double* and *split*. Each working as the player would expect and the buttons only appear when they are available to do so, the player cannot bet more than they have, so they cannot double if they don't have the funds (refresh the page to reset the score, this will be inplace until options to play for actual money would be setup but for now, no such immediate plans).

The cards are also slightly interactive, the player can hover over them and feel as though they are *picking* up the card. This uses basic css styling to make it appear bigger from the other cards.

![Player Controls](assets/images/allgames.pdf)

###Playing the Dealers turn

The dealer makes moves based on the players score and whether or not the dealer has the same score, better or worse. Once the dealer has *finished* their turn, the game checks to see who won and an alert is displayed, the user can click anywhere to remove the alert.

The score is updated and if the player wins, the pot is added to the score alongside the original bet. The player can then choose to play again and see if they fare better (or *worse!*).

