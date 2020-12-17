/*:
//==============================================================================
// ■ Nio Kasgami MV Engine - "ExSprite"
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  @plugindesc Utility Plugin who extend the Current sprite classes for being 
  more "Ace-like" with in same time conserve all the the MV option.
  @author Nio Kasgami.
  @Data : 2015/11/03 
  @Version : 1.0.0 
  @Require : NA
//==============================================================================

//==============================================================================
// History
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// 2015/11/03 - Begin and finish the plugin.
//==============================================================================

//==============================================================================
// Introduction
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Are you sometime disapointed some cool Ace feature disapeared in MV?
// this plugin have for meaning to extend the defaults classes.
//==============================================================================


//==============================================================================
// Plugin Parameter
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// this section handle the plugin parameter. Please do not edit unless you 
// want to add extra plugin command.
//------------------------------------------------------------------------------
   * it's a base so this not handle any param commands
//==============================================================================

//==============================================================================
// Help File
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// This section serve for input the help file in the engine don't touch this
// unless you want to input more information
//------------------------------------------------------------------------------
   * @help
   * This Sprite classes extend the current one sprite  classes.
   * For use it, just call this.sprite = new Exprite(); when you initialize a
   * sprite.
   *
   * the new methods
   *  - this.sprite.mirror(hori,verti);
   *  will flip the picture just use true or false for flip picture
   *
   *  - this.sprite.set_origin(x,y);
   *  will set the anchor to the said point. don't forget it's a number of
   *  0 to 1. 
*/

(function() {
	var parameter =  PluginManager.parameters('ExtendedSprite');
})();

//==============================================================================
// ■ ExSprite
//------------------------------------------------------------------------------
// Extended version of Sprite for add more "Ace-like" options. 
// Call it by using this.varname = new ExSprite();
//==============================================================================

function ExSprite() {this.initialize.apply(this,arguments);}
 ExSprite.prototype.constructor = ExSprite;

//----------------------------------------------------------------------------
// ◎ new inheritance : Sprite
//----------------------------------------------------------------------------
 ExSprite.prototype = Object.create(Sprite.prototype);

//----------------------------------------------------------------------------
// ○ new function: initialize
//----------------------------------------------------------------------------
 ExSprite.prototype.initialize = function(bitmap) {
 	Sprite.prototype.initialize.call(this);
 };

//----------------------------------------------------------------------------
// ○ new function: mirror
//----------------------------------------------------------------------------
// * This function serve for flip the picture from horizontal and vertical.
// * Just use sprite.mirror(true or false,true or false); and it's will flip
// * the picture. Though be sure to fix the anchor if it's really needed.
//
 ExSprite.prototype.mirror = function(hori,verti) {
 	if(hori) {
 		this.scale.x = -1;
 	}else{
 		this.scale.x = 1;
 	}
 	if(verti){
 		this.scale.y = -1;
 	}else{
 		this.scale.y = 1;
 	}
 };

//----------------------------------------------------------------------------
// ○ new function: mirror
//----------------------------------------------------------------------------
// * This function serve for set anchor in a more lazy ways or Ace way.
// * Totally just a extra code for convenience.
// * call it like this sprite.set_origin(x,y);
//
 ExSprite.prototype.set_origin = function(x,y) {
 	this.anchor.x = x;
 	this.anchor.y = y;
 };
//===============================================================================
// => END : ExSprite
//===============================================================================