//=================================
// Draconis_InventoryLimitations.js
//=================================

var Imported = Imported || {};
Imported.Draconis_InventoryLimitations = true;

var Draconis = Draconis || {};
Draconis.InventoryLimitations = Draconis.InventoryLimitations || {};
Draconis.InventoryLimitations.version = 1.1;

//=================================
/*:
 *@plugindesc v1.2 Adds a limit to the party's item pack/bag.
  *@author: DraconisKnight
 
 @param ===Items===
 * @desc
 *
 
 * @param Inventory Max
 * @parent ===Items===
 * @type variable
 * @desc This is the maximum number of items a player can hold.
 * Default: $gameVariables.value(1)
 * @default $gameVariables.value(1)
 
 * @param Exempt Items
 * @parent ===Items===
 * @type text
 * @desc Leave this parameter blank.  
 * @default 
 
 * @param Include Gold
 * @parent ===Items===
 * @desc Include gold in the item limit. Leave blank if gold 
 * is not inculded. Default: $gameSwitches.value(1)
 * @default $gameSwitches.value(1)


 * @param Item Limit Window
 * @parent ===Items===
 * @type text
 * @desc Would you like to have the window to be visible?
 * @default true
 
 * @param Item Limit Window- X Position
 * @parent ===Items===
 * @type number
 * @desc Where would you like the Item Limit Window?
 * @default 0
 
 * @param Item Limit Window- Y Position
 * @parent ===Items===
 * @type number
 * @desc Where would you like the Item Limit Window?
 * @default 552
 
 * @param Item Limit Window- Width
 * @parent ===Items===
 * @type number
 * @desc How long do you want the Item Limit Window?
 * @default 300
 
 * @param Item Limit Window Text
 * @parent ===Items===
 * @type text
 * @desc The text in the window.
 * @default Limit:

 * @param Item Limit Window Opacity
 * @parent ===Items===
 * @type text
 * @desc Controls how transparent the Item Limit
 * Window is.
 * @default 255
 
  * @param ===Action Window===
 * @desc
 
 * @param Action Window X-Axis
 * @parent ===Action Window===
 * @type number
 * @desc Enter the coordinates for the x-axis for command box
 * to pop up.
 * @default 280
 
 * @param Action Window Y-Axis
 * @parent ===Action Window===
 * @type number
 * @desc Enter the coordinates for the y-axis for command box
 * to pop up.
 * @default 250
 
 * @param Use Item Command
 * @parent ===Action Window===
 * @type text
 * @desc Enter the command for 'Use Item'.
 * @default Use
 
 * @param Discard Item Command
 * @parent ===Action Window===
 * @type text
 * @desc Enter the command for 'Discard Item'
 * @default Throw Away
 
 * @param Cancel Command
 * @parent ===Action Window===
 * @type text
 * @desc Enter the command for 'Cancel'
 * @default Cancel

 * @param Action Window Opacity
 * @parent ===Action Window===
 * @type text
 * @desc Controls how transparent the Item Action
 * Window is.
 * @default 255

 * @param ===Discard Confirm Window===
 * @desc

 * @param Discard Confirm Y Position
 * @parent ===Discard Confirm Window===
 * @type number
 * @desc Y-axis position of the discard confirmation window.
 * @default 270

 * @param Discard Confirm- Yes
 * @parent ===Discard Confirm Window===
 * @type text
 * @desc Enter the postive confirm to discard items.
 * @default Remove items.

 * @param Discard Confirm- No
 * @parent ===Discard Confirm Window===
 * @type text
 * @desc Enter the option for the player to keep items.
 * @default Keep items.

 * @param Discard Confirm- Horizontal Commands
 * @parent ===Discard Confirm Window===
 * @type text
 * @desc Do you want to use horizontal commands?
 * true = horizontal        false = vertical
 * @default true

 * @param Discard Confirm- Message Line 1
 * @parent ===Discard Confirm Window===
 * @type text
 * @desc Enter a heads up for the player.
 * @default Discarding this stack permamently removes it.

 * @param Discard Confirm- Message Line 2
 * @parent ===Discard Confirm Window===
 * @type text
 * @desc Enter a heads up for the player.
 * @default Do you wish to continue?
 
 * @param Discard Conirm Opacity
 * @parent ===Discard Confirm Window===
 * @type text
 * @desc Controls how transparent the Discard Confirm
 * Window is.
 * @default 255

 * @param Available Bag Space Display
 * @parent ===Scene Shop Customization===
 * @type text
 * @desc Enter mode of how available space is to be shown.
 *  Used - used/total   Emtpy - Show only remaining slots
 * @default Used
 
 * @param Empty Display Options
 * @parent ===Scene Shop Customization===
 * @type text
 * @desc If 'Empty', how should it be shown?
 * alone - # of Empty slots  over - Empty slots/total slots
 * @default alone
 
 * @param Avail Bag Space Y-Axis
 * @parent ===Scene Shop Customization===
 * @type number
 * @desc Enter the coordinates for the y-axis for Available
 * Bag Space to appear in Shop Status.
 * @default 30
 
 * @param Available Bag Space
 * @parent ===Scene Shop Customization===
 * @type text
 * @desc Enter the term(s) that show the player how much
 * room is left in their inventory.
 * @default Bag:
  
  @help
  
*=====Introduction=============================================
 This plugin manipulates your party's inventory through the use
 of variables.
 
*==============================================================
 
*=====About this plugin:=======================================

I found the plugin, MrTS_LimitedInventory by Mr. Trivel.  While 
it achieved what I was after, it wasn't meeting how I wanted to 
program my project.  Not exactly.  So I opted toprogram my own, 
making use of MV 1.5+ Plugin Manager. (In addition to that it 
seems LimitedInventory isn't going to getting an update.)
	
This plugin applies a limit to a party's item inventory with the
use of game variables.  To use with other item plugins, like Yanfly's
Item Core, place this plugin under those plugins.
	
*==============================================================
 
*=====Instructions- Parameters=================================

Part A: The Items Class Parameters
		
To decide on how the inventory is limited, you follow the 
parameters on the left.  The parameters are a simple plug and 
play.

I. Inventory Max 

This is programmed to have the data entered in as either a 
$gameVariable or a value.  The plugin will process either one if 
the developer wishes to have a static limit on the inventory cap.
Just note, that with the static, there isn't a way to increase it.
With the variables and a little eventing, you can use an item/key 
item to influence the inventory cap.

II.  Exempt Items

This parameter doesn't require any input.  It is there for future
reference in the code to match up the exempt note tag.
	
III. Item Limit Window and Item Limit Window Text

Both of this parameters are if you want the window shown and 
what it will say.

III. Items, Weapons, and Armor

For the plugin to recongize a space is used, you MUST include the
Exempt note tag below. This note tag tells the plugin to not count 
the item(s) towards the count.  Mainly used on Key Items, in which 
a number can be used.  You can also do a little bit of math with the 
note tag if you are wanting a stack to be one "item slot".

IV. Limit Gold
You can also include gold in your inventory limit. Just make sure the 
Parameter "Include Gold" is yes and thus on. Gold is counted as
a single item, so you can stack as much gold as you want.

If you want the limit gold to be variable, in the paramter, select text
and use the code $gameSwitches.value(x), where x is the switch value.
And thus as long as switch x is on, the gold is included in the inventory
limit. You can also use other pieces of js, to run as checks for wheter or not
gold is included. Leave the parameter blank if you don't wan to include 
gold in the inventory.


-----------------NOTE TAG - Exempt:--------------------------------

Three Different Modes:
1. <Exempt: [Amount]> = Enter the number.

This method is good for key items or items that the party can only
carry one off.

<Exempt: 0> = The item/whole stack will count towards the inventory
cap.

<Exempt: 1> = Exempts one item in the stack.  Use on items that 
you don't want to count against the inventory cap, such as Key Items. 

2. <Exempt: $gameVariables.value(i) - 1> 

Enter assigned variable that is tied to your game data for the item 
in question.  The variable you use should be set up to be the number
of that item the party has. The minus 1 tells the plugin to only count 
1, not the rest.

**Note if you try using numbers above 1: This will result in the plugin
returning a negative.  To avoid this, use the second mode above on items, 
weapons, or armor that you are allowing more than two to be carried.  I've
including instructions below on how to set up the variable in the event
page.**

Using either mode of the note tag can influence armor and weapons.
(Set up is the same with items.)

3. $dataXXX note tags

Items:
<Exempt: ($gameParty.numItems($dataItems[x]) - 1)>

Weapons
<Exempt: ($gameParty.numItems($dataWeapons[x]) - 1)>

Armors:
<Exempt: ($gameParty.numItems($dataArmors[x]) - 1)>

Replace X with the id of the item, weapon or armor

**Note: Added by Zarsla.  After testing this method, it is the easiest
one for stacking inventory as in it cuts down just how many variables 
you will need set in the initialization.

V. Opacity
Alters the opacity of the Item Limit Window.  This is for those that 
are using backgrounds in their menus.  The option exists for all categories
with the exemption of the Shop Menu.

Part B: The Action Window Class Parameters
			
I. Action Window X-Axis & Action Window Y-Axis
The command window can be moved anywhere on the screen.  This is done
in case the developer rearranges the Item Menu via a different plugin.
		
II. The Commands
The commands are easily changed in the parameters.  This includes the use, 
discard, and the cancel.  The new Equip command can be changed in the 
database's terms tab.

Part C: The Discard Confirmation Window
This window is programmed to pop up after the player clicks on the discard.
The commands are above the customizable message.

I. Discard Confirm- Y Position
This alters where the window will appear along screen.  If you are using a
plugin that allows you to alter the size of the game screen (such as Yanfly's 
Core Engine), this value will need to be adjusted to fit your game.

II. Discard Confirm- Yes and No Parameters
Easily change the yes and no commands to perform the item discard.

III. Discard Confirm - Show horizontal commands
This parameter edits a couple of functions.  If true, the commands take one row 
of text. Which makes the visible row count 3.  If false, the commands each have 
their own row.  As such, it bumps the total of visible rows to 4 to allow access
to both message lines.

IV. Discard Confirm- Message Lines 1 & 2
Up to two lines for a message for the player if the dev wishes.  If one line
is needed, leave the second option blank.  (You can also edit line 678 if you wish.)

Part D: Scene Shop Customization
			
In this category, you can change the term used for how much room is 
available in their bag in Scene Shop's Window_ShopStatus window.

I. Inventory Modes

How the inventory count is displayed in the ShopStatus window. One 
mode is titled 'Used', which generates the same format as seen in 
Scene Item.  The second is 'Empty', which has two modes unto itself.

The first empty mode is called 'alone', which will only display 
$gameParty.getInventEmptySpace.  The second is called 'over', which
returns $gameParty.getInventEmptySpace / $gameParty.getInventTotalSpace.

As a note, be mindful with which mode you choose.  "Available Bag Space"
holds your terminology for both modes for this scene.

-----------------------Script Calls---------------------------------
$gameParty.getInventEmptySpace(); -> Returns space remaining

$gameParty.getInventUsedSpace(); -> Returns the space used

$gameParty.getInventTotalSpace(); -> Returns inventory max


For the tip below, you will want to assign a game variable to the
$gameParty.getInventUsedSpace(); call.

**Tip for setting up chests and shops:
Start the event with a conditional branch and click 'Create Else
Statement'.  In the 'if', make the condition check the used space
against the max.  (Either the variable you are using for the limit or 
a constantthat is your inventory max.)  If the variable is greater than or 
equal to, use a'Show Text' to tell the player their bag is full.  If it is 
less than, then process event. (aka reward item if chest or open shop
processing)**

*======Using $gameVariables=================================
For those wishing to use variables to control everything, it
requires a little bit of set up.

On your first map, set up a parallel event without a picture.
In this event, you will be assigning variables for your 
inventory cap (if you are using a variable for this) and another 
variable for the possession count for the items available in 
your game.

In your database (and using the second note tag), replace (i)
with the variable index corresponding to that item.

Example:
Event Page
Control Variables: #001 Potions Exempt = The number of Potions

Database > Items Tab > Potion
<Exempt: $gameVariables.value(1)-1>

=======If using YEP_ItemCore's Independent=============
Keep independent items off.  I haven't figured out how to 
to work in independents, and quite frankly is currently a
little more than I can chew at the moment.  Other than that,
this plugin doesn't cause with any conflicts with Item Core
v1.28.
============================================================

=======================Notes================================
1. Prices in your shops.
Due to the fix provided by Zarsla in gaining items, any excess
plus the stack is automatically discarded if it exceeds the item
limit (and if that item's exempt tag is set to 0).

============Terms and Conditions============================
Free to use in non-commerical and commerical with credit.
Credit as DraconisKnight.

Also credit Zarsla as they fixed my gain item bug by making
a new function.

============================================================

===========Thanks goes to:==================================
-Mr. Trivel => Author of MrT_LimitedInventory as it started my
coding journey.

-Yanfly => Whose plugins I picked apart and reverse engineered
while also reading the core files.

-TheoAllen => Author of a weight based inventory that was also 
studied for version 1.1.

===========Version Log======================================
Version 1.3 - [Started 22 Jan 2020 - ]
-

Version 1.2 - [Started 2 July 2019 - 21 Jan 2020]
-Added an 'Equip' command that can by changed using the database.
-Added a discard confirmation window along with options to have either
vertical or horizontal commands.
-Added opacity options for a little more appearance customization.

Version 1.1a -7 March 2019.
-Fixed bug with the overwrite for the isEnabled function for
Window_ShopBuy.
-Added two new parameters to change MV's default drawPossession
term and include how much room is in their inventory.
	-Inventory can be drawn in two modes: Used and Empty. Empty
	has its own modes for how the developer would like to display.
	-CORRECTION: Took the Possession Parameter out. Silly me didn't
	(aka forgot) that you can change that in the database.

Version 1.1 - April 2018(Started). January 2019(Finished).
Big update including:
- Added an action window with three commands: use, throw away, 
 and cancel.  Discard works with items only. [Completed April
 2018]
 	-Fixed bug in the use command.  Before it was enabled on
	all or disabled.  [Completed January 2019.]
	-Made it were discard is disabled for all items that register
	as a 'Key Item'.
- Overwrote the original Window_ShopBuy.prototype.isEnabled to
 update with inventory. [Completed April 2018]
 	-Meaning if the bag is full and the party doesn't have one
	of the items the vendor is selling, that item cannot be 
	bought unless room is made.

Version 1.0d - 23 November 2018. 
Zarsla Fixes:
-Fix the bug with gain items, not being taken in account when being limited.
-Added paramter to include gold, in the inventory limit.
-Add some extra notetag guidelines addressed gaining new item stacks over
the limit by adding a script call and instructions for 
inventory checks.

Version 1.0c - 27 March 2018. Addressed gaining new item stacks over
the limit by adding a script call and instructions for 
inventory checks.

Version 1.0b- 3 March 2018.  Figured out the small bug to get
the plugin to read the start of a new stack with the variable
method.  Editted instructions to reflect this.

Version 1.0a- 1 March 2018.  Built on instructions for release. 

Version 1.0- Finished on 10 Nov 2017.

*/
	

(function(){

	var Draconis_Parameters = PluginManager.parameters('Draconis_InventoryLimitations');
	Draconis.Param = Draconis.Param || {};

//==========Plugin Manager Parameters===========================
	Draconis.Param.InventoryMax = String(Draconis_Parameters['Inventory Max']);
	Draconis.Param.ExemptItems = String(Draconis_Parameters['Exempt Items']);
	Draconis.Param.ItemLimitWin = (Draconis_Parameters['Item Limit Window']|| "true").toLowerCase() === "true";
	Draconis.Param.ItemLimitWinX = Number(Draconis_Parameters['Item Limit Window- X Position']);
	Draconis.Param.ItemLimitWinY = Number(Draconis_Parameters['Item Limit Window- Y Position']);
	Draconis.Param.ItemLimitWinWidth = Number(Draconis_Parameters['Item Limit Window- Width']);
	Draconis.Param.ItemLimitWinText = String(Draconis_Parameters['Item Limit Window Text']);
    Draconis.Param.ILWOpacity = Number(Draconis_Parameters['Item Limit Window Opacity']);
    Draconis.Param.IncludeGold = String(Draconis_Parameters['Include Gold']);	
    if(Draconis.Param.IncludeGold === ""){
    	Draconis.Param.IncludeGold = "false";
    }
	//==========Action Window Parameters=======================
	Draconis.Param.ActionX = Number(Draconis_Parameters['Action Window X-Axis']);
	Draconis.Param.ActionY = Number(Draconis_Parameters['Action Window Y-Axis']);
	Draconis.Param.UseItemCommand = String(Draconis_Parameters['Use Item Command']);
	Draconis.Param.DiscardItemCommand = String(Draconis_Parameters['Discard Item Command']);
	Draconis.Param.CancelCommand = String(Draconis_Parameters['Cancel Command']);
	Draconis.Param.ActionWindowOpacity = Number(Draconis_Parameters['Action Window Opacity'])
	
	//==========Discard Confirm Window Parameters==============
	Draconis.Param.DCY = Number(Draconis_Parameters['Discard Confirm Y Position']);
	Draconis.Param.DCWinYes = String(Draconis_Parameters['Discard Confirm- Yes']);
	Draconis.Param.DCWinNo = String(Draconis_Parameters['Discard Confirm- No']);
	Draconis.Param.DCHorizCom = (Draconis_Parameters['Discard Confirm- Horizontal Commands']|| "true").toLowerCase() === "true";
	Draconis.Param.DCMessageLine1 = String(Draconis_Parameters['Discard Confirm- Message Line 1']);
	Draconis.Param.DCMessageLine2 = String(Draconis_Parameters['Discard Confirm- Message Line 2']);
	Draconis.Param.DCWindowOpacity = Number(Draconis_Parameters['Discard Conirm Opacity']);

	//==========Scene Shop Customization=======================
	Draconis.Param.AvailableDisplayMode = String(Draconis_Parameters['Available Bag Space Display']);
	Draconis.Param.DisplayEmptyMode = String(Draconis_Parameters['Empty Display Options']);
	Draconis.Param.BagRoomYPosition = Number(Draconis_Parameters['Avail Bag Space Y-Axis']);
	Draconis.Param.BagRoom = String(Draconis_Parameters['Available Bag Space']);


//==========Data Manager=========================================
var DracDatabase_isLoaded = DataManager.isDatabaseLoaded;

DataManager.isDatabaseLoaded = function (){
	if (DracDatabase_isLoaded.call(this) === false){
		return false;
	}
	if (Draconis._loaded_Draconis_InventoryLimitations === false){
		Draconis._loaded_Draconis_InventoryLimitations = true;
	}
	return true;
};

//==========Game Party: Inventory Limit==========================

	var DracInventLimit_GParty = Game_Party.prototype.initialize;

	Game_Party.prototype.initialize = function (){
		DracInventLimit_GParty.call(this);
	};
	
	Game_Party.prototype.getInventTotalSpace = function (){
		return eval(Draconis.Param.InventoryMax);
	};

	Game_Party.prototype.getInventUsedSpace = function() {
		var occupiedSpace = 0;
			for (var i = 0; i < this.allItems().length; i++) {
				var exempt = eval (this.allItems()[i].meta.Exempt ? String(this.allItems()[i].meta.Exempt) : Draconis.Param.ExemptItems);
				occupiedSpace += this.numItems(this.allItems()[i]) - exempt;
			}

		if(this.gold() > 0 && eval(Draconis.Param.IncludeGold)){
			occupiedSpace += 1;
		}
		return occupiedSpace;
	};
		
	Game_Party.prototype.getInventEmptySpace = function() {
		return this.getInventTotalSpace() - this.getInventUsedSpace();
	};
	
	//==========Add Gain/Lose Item=====================================

Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    var container = this.itemContainer(item);
    if (container) {
        var lastNumber = this.numItems(item);
        var newNumber = lastNumber + amount;
        container[item.id] = newNumber.clamp(0, this.maxItems(item));
        if ((container[item.id] === 0)) {
            delete container[item.id];
        }
        if (includeEquip && newNumber < 0) {
            this.discardMembersEquip(item, -newNumber);
        }
        if(this.getInventTotalSpace() < this.getInventUsedSpace()){
        	delete container[item.id];
        }
        $gameMap.requestRefresh();
    }
};

	var _Alias_gg = Game_Party.prototype.gainGold;
	Game_Party.prototype.gainGold = function(amount) {
		_Alias_gg.call(this, amount);
		if((this.getInventTotalSpace() < this.getInventUsedSpace()) && eval(Draconis.Param.IncludeGold)){
			this._gold = 0;
		} 
	}
	
	//===========Item List=============================
	//Overwriting Original function so the Action Window can
	//appear when player selects a weapon or armor.
		
	Window_ItemList.prototype.isEnabled = function(item) {
	  if (item){return true}else{return false};
	};
	


//===========Action Window=========================
// Action window has the commands of use, discard, and cancel.
	
	function Window_itemActionWindow(){
		this.initialize.apply(this, arguments);
	};
	
	Window_itemActionWindow.prototype = Object.create(Window_Command.prototype);
	Window_itemActionWindow.prototype.constructor = Window_itemActionWindow;
	
	Window_itemActionWindow.prototype.initialize = function(x, y, w, h) {
		Window_Command.prototype.initialize.call(this, x, y, this.windowWidth(), this.windowHeight());
		this._item = null;
		this.hide();
		this.deactivate();
	};
	
	Window_itemActionWindow.prototype.windowWidth = function () {
		return 250;
	};
	
	Window_itemActionWindow.prototype.windowHeight = function (){
		return this.fittingHeight(4);
	};
	
	Window_itemActionWindow.prototype.setItem = function(item) {
		this._item = item;
		this.refresh();
		this.show();
		this.activate();
		this.select(0);
	};
	
	Window_itemActionWindow.prototype.makeCommandList = function(item) {
		var UseEnabled = this.isUseEnabled(this._item);
		var EquipEnabled = this.isEquipEnabled(this._item);
		var DiscardEnabled = this.isDiscardEnabled(this._item);
		this.addCommand(Draconis.Param.UseItemCommand, 'use', UseEnabled);
		this.addCommand(TextManager.equip, 'equip', EquipEnabled);
		this.addCommand(Draconis.Param.DiscardItemCommand, 'throw away', DiscardEnabled);
		this.addCommand(Draconis.Param.CancelCommand, 'cancel');
	};
	
	Window_itemActionWindow.prototype.isUseEnabled = function(item) {
		if (!item) return false;
		return $gameParty.canUse(item);
		
	};
	
	Window_itemActionWindow.prototype.isEquipEnabled = function(item) {
		if (!item) return false;
		if(DataManager.isWeapon(item) || DataManager.isArmor(item)){
			return true;
		} else {
			return false;
		}
	};
	
	//Disables the ability to discard for Key Items
	Window_itemActionWindow.prototype.isDiscardEnabled = function (item) {
		if (!item) return false;
		//Checks the item id (either item or key item).
		if (DataManager.isItem(item) && item.itypeId === 2) {
			return false;
		} else {
			return true;
		}
	};

	Window_itemActionWindow.prototype.itemTextAlign = function() {
    	return 'center';
	};

//==========Window: Discard Confirm===============================-
	function Window_DiscardConfirm() {
		this.initialize.apply(this, arguments);
	};

	Window_DiscardConfirm.prototype = Object.create(Window_Command.prototype);
	Window_DiscardConfirm.prototype.constructor = Window_DiscardConfirm;

	Window_DiscardConfirm.prototype.initialize = function(){
		Window_Command.prototype.initialize.call(this, 0, Draconis.Param.DCY);
		this.openness = 0;
		this.refresh();
	};

	Window_DiscardConfirm.prototype.makeCommandList = function() {
		this.addCommand(Draconis.Param.DCWinYes, 'yes');
		this.addCommand(Draconis.Param.DCWinNo, 'no');
	};

	Window_DiscardConfirm.prototype.itemTextAlign = function() {
    	return 'center';
	};

	Window_DiscardConfirm.prototype.windowHeight = function (){
		return this.fittingHeight(this.numVisibleRows());
	};

	Window_DiscardConfirm.prototype.windowWidth = function() {
		return Graphics.boxWidth;
	};

	Window_DiscardConfirm.prototype.numVisibleRows = function() {
   		 if (!Draconis.Param.DCHorizCom){
   		 	return 4;
   		 } return 3;
	};

	Window_DiscardConfirm.prototype.maxCols = function() {
    	if (!Draconis.Param.DCHorizCom){
    		return 1;
    	} return 2;
	};

	DK_ILDiscardConfirm_refresh = Window_Command.prototype.refresh;

	Window_DiscardConfirm.prototype.refresh = function() {
		DK_ILDiscardConfirm_refresh.call(this);
		if (!Draconis.Param.DCHorizCom){
			this.drawTextEx(Draconis.Param.DCMessageLine1, this.textPadding(), 70);
			this.drawTextEx(Draconis.Param.DCMessageLine2, this.textPadding(), 100);
		} else {
			this.drawTextEx(Draconis.Param.DCMessageLine1, this.textPadding(), 40);
			this.drawTextEx(Draconis.Param.DCMessageLine2, this.textPadding(), 70);
		}
	};	

//==========Window: Item Limit=====================================

	function Window_ItemLimit() {
		this.initialize.apply(this, arguments);	
	};
	
	Window_ItemLimit.prototype = Object.create(Window_Base.prototype);
	Window_ItemLimit.prototype.constructor = Window_ItemLimit;
	
	Window_ItemLimit.prototype.initialize = function(x, y, w, h) {
		Window_Base.prototype.initialize.call(this, this.windowX(), this.windowY(), this.windowWidth(), h);
		this.refresh();
	};
	
	Window_ItemLimit.prototype.windowX = function() {
		return Draconis.Param.ItemLimitWinX;
	};
	
	Window_ItemLimit.prototype.windowY = function(){
		return Draconis.Param.ItemLimitWinY;
	};
	
	Window_ItemLimit.prototype.windowWidth = function (){
		return Draconis.Param.ItemLimitWinWidth;
	};
	
	Window_ItemLimit.prototype.refresh = function() {
		this.contents.clear();
		var u = $gameParty.getInventUsedSpace();
		var t = $gameParty.getInventTotalSpace();
		this.drawText(Draconis.Param.ItemLimitWinText + " " + u + "/" + t, 0, 0);
	};

	
//==========Scene Item=====================================

	var DraconisInventLimit_ItemMenu = Scene_Item.prototype.create;
	var DraconisInventLimit_ItemUsage = Scene_Item.prototype.useItem;

	if (Imported.IntegratedEquipMenu) {
		var Draconis_IL_IEM_ComEquipWindow = Scene_Item.prototype.createEquipWindow;
	}

	Scene_Item.prototype.create = function() {
		DraconisInventLimit_ItemMenu.call(this);
			if (Draconis.Param.ItemLimitWin) {
				this.createLimitWindow();
			}
		this.createitemActionWindow();
	};

	Scene_Item.prototype.createLimitWindow = function() {
		var wx = this._itemWindow.x;
		var ww = this._itemWindow.width;
		var wh = this._itemWindow.fittingHeight(1);
		this._itemWindow.height = this._itemWindow.height - wh;
		this._itemWindow.refresh();
		var wy = this._itemWindow.y + this._itemWindow.height;
		this._itemLimitWindow = new Window_ItemLimit(wx, wy, ww, wh);
		this.addWindow(this._itemLimitWindow);
		this._itemLimitWindow.opacity = Draconis.Param.ILWOpacity;
	};

	//NOTE TO SELF: Do NOT call a command window to pop up on anything like onItemOK
	//Otherwise, the Use command will either be enabled for items, weapons, and armor
	//or disabled for the same three categories.
	Scene_Item.prototype.createitemActionWindow = function() {
		this._itemActionWindow = new Window_itemActionWindow(Draconis.Param.ActionX, Draconis.Param.ActionY);
		this._itemActionWindow.setHandler('use', this.onActionUse.bind(this));
		this._itemActionWindow.setHandler('equip', this.onActionEquip.bind(this));
		this._itemActionWindow.setHandler('throw away', this.onActionThrowAway.bind(this));
		this._itemActionWindow.setHandler('cancel', this.onActionCancel.bind(this));
		this.addWindow(this._itemActionWindow);
		this._itemActionWindow.opacity = Draconis.Param.ActionWindowOpacity;
	};

	Scene_Item.prototype.createDiscardConfirmWindow = function(){
		this._DiscardConfirmWindow = new Window_DiscardConfirm(Draconis.Param.ActionX, Draconis.Param.ActionY);
		this._DiscardConfirmWindow.setHandler('yes', this.onDiscardConfirmYes.bind(this));
		this._DiscardConfirmWindow.setHandler('no', this.onDiscardConfirmNo.bind(this));
		this.addWindow(this._DiscardConfirmWindow);
		this._DiscardConfirmWindow.opacity = Draconis.Param.DCWindowOpacity;
	};
	
	Scene_Item.prototype.onItemOk = function() {
	  var item = this.item();
	  this._itemActionWindow.setItem(item);
	  this._itemActionWindow.open();
	  this._itemActionWindow.activate();
	};
	
	Scene_Item.prototype.onActionUse = function(){
		this._itemActionWindow.hide();
		this._itemActionWindow.activate();
		$gameParty.setLastItem(this.item());
		this.determineItem();
	};
	
	Scene_Item.prototype.onActionEquip = function() {
		if (Imported.IntegratedEquipMenu) {
			
			Draconis_IL_IEM_ComEquipWindow.call(this);
		}
		SceneManager.push (Scene_Equip);
	};
	
	Scene_Item.prototype.onActionThrowAway = function(){
		this.createDiscardConfirmWindow();
		this._DiscardConfirmWindow.open();
		this._DiscardConfirmWindow.activate();
		this._itemActionWindow.hide();
	};
	
	Scene_Item.prototype.onDiscardConfirmYes = function(){
		var item = this._itemWindow.item();
		var discardAmount = $gameParty.numItems(item);
		this.throwAwayItem(item, discardAmount);
	};

	Scene_Item.prototype.throwAwayItem = function(item, discardAmount){
			$gameParty.loseItem(item, discardAmount);
			this._DiscardConfirmWindow.deactivate();
			this._DiscardConfirmWindow.deselect();
			this._DiscardConfirmWindow.hide();
			this._itemWindow.activate();
			this._itemWindow.refresh();
			this._itemLimitWindow.refresh();
		};
	
	Scene_Item.prototype.onDiscardConfirmNo = function() {
		this._DiscardConfirmWindow.deactivate();
		this._DiscardConfirmWindow.hide();
		this._itemWindow.activate();
		this._itemWindow.refresh();
	};

	Scene_Item.prototype.onActionCancel = function(){
		this._itemActionWindow.deactivate();
		this._itemActionWindow.deselect();
		this._itemActionWindow.hide();
		this._itemWindow.activate();
	};
	
	Scene_Item.prototype.useItem = function() {
		DraconisInventLimit_ItemUsage.call(this);
		if (this._itemLimitWindow) this._itemLimitWindow.refresh();
	};

 //====Shops==============================================
  
  //Overwrites the original isEnabled function in rpg_windows.js
  //Runs check if there is room in the party's bag for a new item.
  //If not, they can only purchase items they already carry.
  Window_ShopBuy.prototype.isEnabled = function(item) {
	  if ($gameParty.getInventUsedSpace() != $gameParty.getInventTotalSpace()){
		return (item && this.price(item) <= this._money && !$gameParty.hasMaxItems(item));
	  } else if ($gameParty.hasItem(item)) {
	  	if ($gameParty.getInventUsedSpace() == $gameParty.getInventTotalSpace()){
			if (this.price(item) <= this._money && !$gameParty.hasMaxItems(item)) {
				return true;
			} else if (this.price(item) <= this._money && $gameParty.hasMaxItems(item)){
				return false;
			} else if (this.price(item)>= this._money && !$gameParty.hasMaxItems(item)){
				return false;
			}
		}
	  } else if (!$gameParty.hasItem(item)) {
		  if ($gameParty.getInventUsedSpace() == $gameParty.getInventTotalSpace()) {
			return false;
		  }
	  }

  };

  Window_ShopStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._item) {
        var x = this.textPadding();
        this.drawPossession(x, 0);
		this.drawNumberSlots(x, Draconis.Param.BagRoomYPosition);
        if (this.isEquipItem()) {
            this.drawEquipInfo(x, this.lineHeight() * 2);
        }
    }
	};
	
	Window_ShopStatus.prototype.drawPossession = function(x, y) {
		var width = this.contents.width - this.textPadding() - x;
		var possessionWidth = this.textWidth('0000');
		this.changeTextColor(this.systemColor());
		this.drawText(TextManager.possession, x, y, width - possessionWidth);
		this.resetTextColor();
		this.drawText($gameParty.numItems(this._item), x, y, width, 'right');
	};
	
	Window_ShopStatus.prototype.drawNumberSlots = function(x, y) {
		var width = this.contents.width - this.textPadding() - x;
		var numberslotsWidth = this.textWidth('0000');
		var u = $gameParty.getInventUsedSpace();
		var t = $gameParty.getInventTotalSpace();
		var s = $gameParty.getInventEmptySpace();
		this.changeTextColor(this.systemColor());
		this.drawText(Draconis.Param.BagRoom, x, y, width - numberslotsWidth);
		this.resetTextColor();
		switch (Draconis.Param.AvailableDisplayMode){
			case 'Used': {
				this.drawText( u + "/" + t, x, y, width, 'right');
			} break;
			case 'Empty': {
				switch (Draconis.Param.DisplayEmptyMode) {
					case 'alone': {
						this.drawText(s, x, y, width, 'right');
					} break;
					case 'over': {
						this.drawText( s + "/" + t, x, y, width, 'right');
					} break;
				}
			} break;
		}
	};

})();