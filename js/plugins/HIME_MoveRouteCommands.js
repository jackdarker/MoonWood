/*:
-------------------------------------------------------------------------
@title Move Route Commands
@author Hime --> HimeWorks (http://himeworks.com)
@version 1.0
@date Jan 2, 2016
@filename HIME_MoveRouteCommands.js
@url http://himeworks.com/2016/01/move-route-commands/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

-------------------------------------------------------------------------------
@plugindesc v1.0 - Allows you to have a character move towards a specific
event
@help 
-------------------------------------------------------------------------------
== Description ==

This plugin provides some extra move route comands that might be useful.
Currently, it supports the following:

* moving towards a specific event
* moving away from a specific event

If there is anything you would like to see, just send me a message and I'll
look into adding it to the library.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Free for use in commercial projects, but it would be nice to let me know
- Please provide credits to HimeWorks

== Change Log ==

1.0 - Jan 2, 2016
 - initial release

== Usage ==

All commands can be used in a move route with the script call command.
Below are all of the script calls that are provided by this plugin.

-- Move Towards Event --

Moves the character towards a specific event

script: this.moveTowardsEvent(ID)
example: this.moveTowardsEvent(23)

-- Move Away From Event --

Moves the characters away from a specified event

script: this.moveAwayFromEvent(ID)
example: this.moveAwayFromEvent(5)

-------------------------------------------------------------------------------
 */ 
var Imported = Imported || {} ;
var TH = TH || {};
Imported.TH_MoveRouteCommands = 1;
TH.MoveRouteCommands = TH.MoveRouteCommands || {};

(function ($) {

  Game_Character.prototype.moveTowardsEvent = function(id) {
    this.moveTowardCharacter($gameMap.event(id));
  };
  
  Game_Character.prototype.moveAwayFromEvent = function(id) {
    this.moveAwayFromCharacter($gameMap.event(id));
  };

})(TH.MoveRouteCommands);