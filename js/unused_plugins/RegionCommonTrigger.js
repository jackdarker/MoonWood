//=============================================================================
// RegionCommonTrigger.js
//=============================================================================

/*:
 * @plugindesc Allows trigger CommonEvent when player enters a region.
 * @author EvilCat
 * @email soevilcat@mail.ru
 * @version 1.1

 * @param Ignore Switch ID
 * @desc This switch will not affect whether a common event is triggered.
 * @default 1
 
 * @help
 * Add <TriggerRegions: 2> to notes of autorun or parallel Common Event
 * to make it start only while player is on the listed regions.
 *
 * RPG Maker forces you to choose a switch for autorun/parallel Common Events...
 * Use "Ignore Switch ID" to ignore one switch and leave only the regional
 * conditions for these events.
 *
 * Creative Commons 4.0 Attribution license
 */

"use strict";

if (!EvilCat) throw new Error('Requires EvilCat Utils plugin!');

(function()
{
	var RegionCommonTrigger = EvilCat.RegionCommonTrigger = function RegionCommonTrigger()
	{
		EvilCat.Plugin.call(this);
	}
	EvilCat.extend(RegionCommonTrigger, EvilCat.Plugin);
	RegionCommonTrigger = EvilCat.RegionCommonTrigger = new RegionCommonTrigger();
	
	var Game_CommonEvent_setupMeta=Game_CommonEvent.prototype.setupMeta;
	Game_CommonEvent.prototype.setupMeta = function()
	{
		this.triggerRegions=this.getMeta('TriggerRegions', 'IntArray', false);
		Game_CommonEvent_setupMeta.call(this);
	}
	
	var Game_CommonEvent_setupEvents=Game_Map.prototype.setupEvents;
	Game_Map.prototype.setupEvents = function()
	{
		Game_CommonEvent_setupEvents.call(this);
		// all triggered events have to be considered, no just parallel ones.
		this._commonEvents = $dataCommonEvents.filter(function(commonEvent)
		{
			return commonEvent && commonEvent.trigger > 0;
		}).map(function(commonEvent)
		{
			return new Game_CommonEvent(commonEvent.id);
		});
	};
	
	Game_CommonEvent.prototype.isActive = function()
	{
		var event = this.event();
		return event.trigger === 2 && this.checkTrigger();
	};
	
	Game_CommonEvent.prototype.checkTrigger=function(onZeroConditons)
	{
		onZeroConditons=EvilCat.toBool(onZeroConditons);
		
		var conditions=0, event=this.event();
		if (!this.triggerRegions || RegionCommonTrigger.paramId('Ignore Switch', 1)!==event.switchId)
		{
			if (!$gameSwitches.value(event.switchId)) return false;
			conditions++;
		}
		if (this.triggerRegions)
		{
			if (this.triggerRegions.indexOf($gamePlayer.regionId())==-1) return false;
			conditions++;
		}
		
		if (conditions>0) return true;
		return onZeroConditons;
	}
	
	Game_Map.prototype.setupAutorunCommonEvent = function()
	{
		for (var i = 0; i < this._commonEvents.length; i++)
		{
			var commonEvent=this._commonEvents[i];
			var event = commonEvent.event();
			if (event.trigger === 1 && commonEvent.checkTrigger())
			{
				this._interpreter.setup(event.list);
				return true;
			}
		}
		return false;
    }
	
	var old_GamePlayer_increaseSteps=Game_Player.prototype.increaseSteps;
	Game_Player.prototype.increaseSteps = function()
	{
		old_GamePlayer_increaseSteps.call(this);
		$gameMap.requestRefresh();
	}
	
	var old_GamePlayer_setPosition=Game_Player.prototype.setPosition;
	Game_Player.prototype.setPosition = function()
	{
		old_GamePlayer_setPosition.apply(this, arguments);
		$gameMap.requestRefresh();
	};
})();