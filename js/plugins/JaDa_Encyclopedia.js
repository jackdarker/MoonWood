//=============================================================================
// JaDa Panel for Encyclopedia
//=============================================================================
var Imported = Imported || {};
Imported.JaDaEncyclopedia = true;

var JaDa = JaDa || {};
JaDa.Codex = JaDa.Codex || {};
JaDa.Codex.version = 1.00;

//=============================================================================
/*:
* @plugindesc v1.00 Insert a Encyclopedia/Codex-Panel into your command-menu!
* @author JaDa
* 
* @param ImageDir
* @desc Directory for images relative to img
* @default img/pictures/

* @param Categorys
* @type string[]
* @desc Directory for images relative to img
* @default ["Items","Weapons","Creatures"]

* @param ---Codex Menu---
* @default
*
* @param Codex Category Window
* @parent ---Codex Menu---
* @type struct<CategoryWindow>
* @desc Adjust the properties for the category window here.
* @default {"---Categories---":"","Category Order":"[\"available\",\"completed\",\"failed\",\"all\"]","Available Text":"\\i[192]Available (%1)","Completed Text":"\\i[191]Completed (%1)","Failed Text":"\\i[194]Failed (%1)","All Text":"\\i[189]All Quests (%1)","Cancel Text":"\\i[161]Close","---Window Settings---":"","X":"0","Y":"0","Width":"Graphics.boxWidth / 3","Height":"this.fittingHeight(this.numVisibleRows())","Rows":"4","Columns":"1","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"left","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
*
* @param Codex Data Window
* @parent ---Codex Menu---
* @type struct<CategoryWindow>
* @desc Adjust the properties for the data window here.
* @default {"---Categories---":"","Category Order":"[\"available\",\"completed\",\"failed\",\"all\"]","Available Text":"\\i[192]Available (%1)","Completed Text":"\\i[191]Completed (%1)","Failed Text":"\\i[194]Failed (%1)","All Text":"\\i[189]All Quests (%1)","Cancel Text":"\\i[161]Close","---Window Settings---":"","X":"0","Y":"0","Width":"Graphics.boxWidth / 3","Height":"this.fittingHeight(this.numVisibleRows())","Rows":"4","Columns":"1","Line Height":"36","Font Face":"GameFont","Font Size":"28","Standard Padding":"18","Text Padding":"6","Text Alignment":"left","Standard Opacity":"255","Back Opacity":"192","Window Skin":"Window"}
*
* @param ---Codex List---
* @default
*
* @param Entrys
* @parent ---Codex List---
* @type struct<Entry>[]
* @desc Modify the data used by this  entry.
* Refer to Help for more information about each setting.
* @default
*
*/
/* ----------------------------------------------------------------------------
 * Codex Parameter Structure
 * ---------------------------------------------------------------------------
 */
/*~struct~Entry:
 *
 * @param EntryId
 * @desc Unique Id of the entry.
 * 
 * @param Title
 * @desc Title of the quest.
 * Text codes allowed.
 * @default \i[87]Untitled Quest
 *
 * @param Type
 * @type combo
 * @option Main Quests
 * @option Side Quests
 * @option Character Quests
 * @option Tutorial Quests
 * @desc What type of quest is this?
 * @default Main Quests
 * 
 * @param Pages
 * @type struct<Page>[]
 */ 
 /*~struct~Page:
 *
 * @param PageName
 * @desc Name of page; leave empty for just numbering from 1..
 * @default 
 * 
 * @param Description
 * @desc Text below Picture
 * Text codes allowed.
 * @default \i[87]Untitled Quest
 *
 * @param Image
 * @desc Image name (without .png) relative to Image-Dir, empty for none
 * @default 
*/
/* ----------------------------------------------------------------------------
* CategoryWindow Parameter Structure
* ---------------------------------------------------------------------------
*/
/*~struct~CategoryWindow:
* @param ---Categories---
* @default
*
* @param Category Order
* @parent ---Categories---
* @type string[]
* @desc Order list for the quest type categories.
* Options: available, completed, failed, all, cancel
* @default ["available","completed","failed","all"]
*
* @param Available Text
* @parent ---Categories---
* @desc The text used for available quests.
* Text codes allowed. %1 - Quest Number
* @default \i[192]Available (%1)
*
* @param Completed Text
* @parent ---Categories---
* @desc The text used for completed quests.
* Text codes allowed. %1 - Quest Number
* @default \i[191]Completed (%1)
*
* @param Failed Text
* @parent ---Categories---
* @desc The text used for failed quests.
* Text codes allowed. %1 - Quest Number
* @default \i[194]Failed (%1)
*
* @param All Text
* @parent ---Categories---
* @desc The text used for all quests.
* Text codes allowed. %1 - Quest Number
* @default \i[189]All Quests (%1)
*
* @param Cancel Text
* @parent ---Categories---
* @desc The text used for the Close option.
* Text codes allowed.
* @default \i[161]Close
* 
* @param ---Window Settings---
* @default
*
* @param X
* @parent ---Window Settings---
* @type combo
* @option 0
* @option Graphics.boxWidth - width
* @desc Formula for the window's X position.
* @default 0
*
* @param Y
* @parent ---Window Settings---
* @type combo
* @option 0
* @option Graphics.boxHeight - height
* @desc Formula for the window's Y position.
* @default 0
*
* @param Width
* @parent ---Window Settings---
* @type combo
* @option Graphics.boxWidth
* @option Graphics.boxWidth / 2
* @option Graphics.boxWidth / 3
* @option Graphics.boxWidth * 2 / 3
* @option Graphics.boxWidth / 4
* @option Graphics.boxWidth * 3 / 4
* @option Graphics.boxWidth / 5
* @option Graphics.boxWidth * 4 / 5
* @desc Formula for the window width.
* @default Graphics.boxWidth / 3
*
* @param Height
* @parent ---Window Settings---
* @type combo
* @option this.fittingHeight(1)
* @option this.fittingHeight(2)
* @option this.fittingHeight(3)
* @option this.fittingHeight(4)
* @option this.fittingHeight(5)
* @option this.fittingHeight(this.numVisibleRows())
* @desc Formula for the window height.
* @default this.fittingHeight(this.numVisibleRows())
*
* @param Rows
* @parent ---Window Settings---
* @type combo
* @option 1
* @option 2
* @option 3
* @option 4
* @desc Formula for the number of window rows.
* @default 4
*
* @param Columns
* @parent ---Window Settings---
* @type combo
* @option 1
* @option 2
* @option 3
* @option 4
* @desc Formula for the number of window columns.
* @default 1
*
* @param Line Height
* @parent ---Window Settings---
* @type number
* @min 1
* @desc The height used for each line entry.
* @default 36
*
* @param Font Face
* @parent ---Window Settings---
* @type combo
* @option GameFont
* @option Arial
* @option Courier New
* @option SimHei
* @option Heiti TC
* @option Dotum
* @option AppleGothic
* @desc The font face used for your game.
* @default GameFont
*
* @param Font Size
* @parent ---Window Settings---
* @type combo
* @option 20
* @option 28
* @option Window_Base.prototype.standardFontSize.call(this);
* @desc Formula for the standard font size.
* @default 28
*
* @param Standard Padding
* @parent ---Window Settings---
* @type combo
* @option 0
* @option 10
* @option 18
* @option 24
* @desc Formula for the window's padding.
* @default 18
*
* @param Text Padding
* @parent ---Window Settings---
* @type combo
* @option 0
* @option 6
* @option 12
* @desc Formula for the padding used before displaying text.
* @default 6
*
* @param Text Alignment
* @parent ---Window Settings---
* @type combo
* @option left
* @option center
* @option right
* @desc Choose what type of alignment to use for the window's text.
* left     center     right
* @default left
*
* @param Standard Opacity
* @parent ---Window Settings---
* @type combo
* @option 0
* @option 128
* @option 192
* @option 255
* @desc Formula for the standard opacity used by the window.
* @default 255
*
* @param Back Opacity
* @parent ---Window Settings---
* @type combo
* @option 0
* @option 128
* @option 192
* @option 255
* @desc Formula for the opacity used by the window.
* @default 192
*
* @param Window Skin
* @parent ---Window Settings---
* @type file
* @dir img/system/
* @desc Window skin used.
* @default Window
* 
*
/* @help
* ============================================================================
* Introduction
* ============================================================================
* WARNING: This plugin is to be used with RPG Maker MV 1.5.0 or above! This is
* because the MV 1.5.0 editor allows for this plugin to be made in an orderly
* and efficient manner. Please make sure your RPG Maker MV software is up to
* date before using this plugin.
* 
* You can setup different categories, f.e. Items,Weapons,Creatures,...
* In each category you can add several entrys f.e Weapon->Bow
* Ich entry can have multiple pages with text and image.
* 
* Adding or Unlocking codex-entry (and pages) has to be done by Plugin-calls.  
* Automatic Unlock f.e. when picking up an item, is not implemented.
* 
* The data for the entrys have to be edited in the plugin-parameters.
* 
* If using Yanfl Main Menu Manager, you have to configure the menu appropiatly 
* or the panel will not show up:
*
*       Name: "Codex"
*     Symbol: codex
*       Show: true
*    Enabled: true
*        Ext: 
*  Main Bind: this.commandCodex.bind(this)
* Actor Bind: 
* 
* ============================================================================
* Plugin-Cmds
* ============================================================================
* Use the following plugin-commands: 
* Please note: all IDs start from 1; 0 is invalid
* 
*   jadaCodex Add EntryId PageId
* 
* This will unlock the Entry and a single page
* 
*   jadaCodex Add EntryId
* 
* This will unlock the entry and all its pages
* 
* ============================================================================
* Changelog
* ============================================================================
*
* Version 1.00:
* - 
*
* ============================================================================
* End of Help
* ============================================================================
*/


JaDa.Parameters = PluginManager.parameters('JaDa_Encyclopedia');
JaDa.Param = JaDa.Param || {};

JaDa.Param.ImageDir = String(JaDa.Parameters['ImageDir']);
JaDa.Param.Categorys = JSON.parse(JaDa.Parameters['Categorys']);
JaDa.Param.CodexCategoryWindow = JSON.parse(JaDa.Parameters['Codex Category Window']);
JaDa.Param.CodexDataWindow = JSON.parse(JaDa.Parameters['Codex Data Window']);
//=============================================================================
// DataManager
//=============================================================================
var $dataCodex = {};
JaDa.Codex.totalCount = 0;

DataManager.codexDatabaseAdd = function( data) {
    if (!data) return
    data = this.codexDataFailsafe( data);
    var type = data['Type'];
    var pages = JSON.parse(data['Pages']);
    var entry = {
      name: data['Title'],
      id: String(data['EntryId']),
      type: type,
      pages: []
    };
    for(var i=0;i<pages.length;i++) {
        entry.pages.push(JSON.parse(pages[i]));
    }
    $dataCodex.catList[entry.type].push(entry.id);
    if(Object.keys($dataCodex.entryList).indexOf(entry.id)>=0) alert(("EntryId not unique: ").concat(entry.id));
    $dataCodex.entryList[entry.id] = entry;
    JaDa.Codex.totalCount += 1;
  };

DataManager.codexDataFailsafe = function( data) {
    if (data['EntryId']==null || data['EntryId']==undefined || data['EntryId']=='') 
        alert(("EntryId not properly set: ").concat(data['Title']));
    if (!data['Title']) data['Title'] = "????";
    //if (!data['Type']) data['Type'] = "Lore"; 
    if (data['Pages'] === '[]') data['Pages'] = "[\"\\\"\\\"\"]";
    return data;
};
DataManager.codexDatabaseCreate = function() {
    //$dataCodex = [null];
    $dataCodex.catList = new Object();      //catList is a collection of category-objects that have each a list of assigned entrysIds
    $dataCodex.entryList = new Object();    //entryList is a collection of entry-objects, their key is the entryId
    for(var i=0; i<JaDa.Param.Categorys.length;i++) {
        $dataCodex.catList[JaDa.Param.Categorys[i]] = [];
    }
    var entrys = JSON.parse(JaDa.Parameters['Entrys']);
    for (var i = 0; i < entrys.length; ++i) {
        this.codexDatabaseAdd(JSON.parse(entrys[i]));
    }
    //console.log($dataCodex);
  };

ImageManager.picturegallery = function(filename) {
    return this.loadBitmap(JaDa.Param.ImageDir, filename, 0, true);
}; 
//load data 
DataManager.codexDatabaseCreate();

//=============================================================================
// Game_System
//=============================================================================

JaDa.Codex.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    JaDa.Codex.Game_System_initialize.call(this);
    this.initCodexSettings();
};

Game_System.prototype.initCodexSettings = function() {
    this._codexKnown = this._codexKnown || {};  //collection of objects where key is entryId and the data is a list of pageId
};

Game_System.prototype.getKnownCodexEntrys = function() {
    this.initCodexSettings();
    return this._codexKnown;
/*     var result = [];
    var length = this._codexKnown.length;
    for (var i = 0; i < length; ++i) {
      var Id = this._codexKnown[i];
      //if (this._questsCompleted.contains(Id)) continue;
      result.push(Id);
    }
    return result; */
  };

/* Game_System.prototype.getAllCodexEntrys = function() {
    this.initQuestSettings();
    return this._codexKnown;
  }; */

  Game_System.prototype.getEntrysForType = function(category, type) {
    this.initQuestSettings();
    category = category || 'all';
    type = type || '';
    var result = [];
    //#todo
    //if (category === 'available') {
    //  var quests = this.getQuestsAvailable();
    //} else {}
      var quests = this.getAllEntrys();
    //}
    var length = quests.length;
    for (var i = 0; i < length; ++i) {
      var entryId = quests[i];
      var questData = $dataCodex[entryId];
      if (!questData) continue;
      if (questData.type === type) result.push(entryId);
    }
    return result;
  };

  Game_System.prototype.codexEntryAdd = function(entryId,pageId) {
    this.initQuestSettings();
    if (this._codexKnown.hasOwnProperty(entryId)) {
      var _entrys = this._codexKnown[entryId];
      if(_entrys.contains(pageId)) return;    
    } else {
      this._codexKnown[entryId] = [];
    }
    this._codexKnown[entryId].push(pageId);
     
    //#todo this.questAddCustomEval(entryId);
  };
  
  //Yanfly.Quest.questAdd = 
  //  JSON.parse(Yanfly.Quest.LunaticMode['Quest Add']);
  //Game_System.prototype.questAddCustomEval = function(questId) {
  //  eval(Yanfly.Quest.questAdd);
  //};

//=============================================================================
// Window_MenuCommand
//=============================================================================

JaDa.Codex.Window_MenuCommand_addOriginalCommands =
Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
    JaDa.Codex.Window_MenuCommand_addOriginalCommands.call(this);
    this.addCodexCommand();
};

Window_MenuCommand.prototype.addCodexCommand = function() {
//if (!Yanfly.Param.QuestCmdPlace) return;
//if (!$gameSystem.isShowQuest()) return;
if (this.findSymbol('codex') > -1) return;
var text = "Codex"; //#todo Yanfly.Param.QuestCmdName;
var enabled = true; //$gameSystem.isEnableQuest();
this.addCommand(text, 'codex', enabled);
};
//=============================================================================
// Window_CodexCategories
//=============================================================================

function Window_CodexCategories() {
    this.initialize.apply(this, arguments);
  };
  
  Window_CodexCategories.prototype = Object.create(Window_Command.prototype);
  Window_CodexCategories.prototype.constructor = Window_CodexCategories;
  
  Window_CodexCategories.prototype.initialize = function() {
    this._CatMode =0; 
    this._currCategory = '';
    this._currEntry = '';
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = Math.round(eval(this.settings('X')));
    var y = Math.round(eval(this.settings('Y')));
    Window_Command.prototype.initialize.call(this, x, y);
    this.maxCols();
    this.opacity = Math.round(eval(this.settings('Standard Opacity')));
  };
  
  Window_CodexCategories.prototype.settings = function(key) {
    return JaDa.Param.CodexCategoryWindow[key];
  };
  
  Window_CodexCategories.prototype.windowWidth = function() {
    if (this._windowWidth === undefined) {
      this._windowWidth = Math.round(eval(this.settings('Width')));
    }
    return this._windowWidth;
  };
  
  Window_CodexCategories.prototype.windowHeight = function() {
    if (this._windowHeight === undefined) {
      this._windowHeight = Math.round(eval(this.settings('Height')));
    }
    return this._windowHeight;
  };
  
  Window_CodexCategories.prototype.numVisibleRows = function() {
    if (this._windowRows === undefined) {
      this._windowRows = Math.round(eval(this.settings('Rows')));
    }
    return this._windowRows;
  };
  
  Window_CodexCategories.prototype.maxCols = function() {
    if (this._windowColumns === undefined) {
      this._windowColumns = Math.round(eval(this.settings('Columns')));
    }
    return this._windowColumns;
  };
  
  Window_CodexCategories.prototype.lineHeight = function() {
    if (this._windowLineHeight === undefined) {
      this._windowLineHeight = parseInt(this.settings('Line Height'));
    }
    return this._windowLineHeight;
  };
  
  Window_CodexCategories.prototype.standardFontFace = function() {
    if (this._windowFontFace === undefined) {
      this._windowFontFace = this.settings('Font Face');
    }
    return this._windowFontFace;
  };
  
  Window_CodexCategories.prototype.standardFontSize = function() {
    if (this._windowFontSize === undefined) {
      this._windowFontSize = Math.round(eval(this.settings('Font Size')));
    }
    return this._windowFontSize;
  };
  
  Window_CodexCategories.prototype.standardPadding = function() {
    if (this._windowStandardPadding === undefined) {
      this._windowStandardPadding = 
        Math.round(eval(this.settings('Standard Padding')));
    }
    return this._windowStandardPadding;
  };
  
  Window_CodexCategories.prototype.textPadding = function() {
    if (this._windowTextPadding === undefined) {
      this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
    }
    return this._windowTextPadding;
  };
  
  Window_CodexCategories.prototype.itemTextAlign = function() {
      return this.settings('Text Alignment')
  };
  
  Window_CodexCategories.prototype.standardBackOpacity = function() {
    if (this._windowBackOpacity === undefined) {
      this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
    }
    return this._windowBackOpacity;
  };
  
  Window_CodexCategories.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
  };
  //this creates the selection menu
  Window_CodexCategories.prototype.makeCommandList = function() {
    if(this._CatMode ==2) { // show page for _currEntry
        var _entry = $dataCodex.entryList[this._currEntry];
        var list = []    
        for (var i=0; i< _entry.pages.length; i++) {
          _page = _entry.pages[i];
          if($gameSystem.getKnownCodexEntrys()[_entry.id].contains(i)) {
            list.push({ 'id':i, enab:true,'text':_page.PageName===''? String(i+1) :_page.PageName });     
          } else {
            list.push({ 'id':i,enab:false,'text':'???'}); 
          }
        }
    } else if(this._CatMode ==1) {  //show entry for _currCategory 
        var listIds = $dataCodex.catList[this._currCategory];
        var list = []
        for (var i=0; i< listIds.length; i++) {
            _entry = $dataCodex.entryList[listIds[i]];
            if($gameSystem.getKnownCodexEntrys().hasOwnProperty(_entry.id)) {
              list.push({ 'id':_entry.id,enab:true,'text':_entry.name });    
            } else {
              list.push({ 'id':_entry.id,enab:false,'text':'???' });  
            }
        }

    } else {    //show categorys
        var list =  JaDa.Param.Categorys;
    }
    
    var length = list.length;
    for (var i = 0; i < length; ++i) {
      var listItem = list[i];
      var _text = listItem;
      var _ext = _text;
      var _enab = true;
      //either the list is a simple string[] or list of object with those propertys
      if(listItem.hasOwnProperty('text')) {
        _text = listItem['text'];
        _ext = listItem['id'];
        _enab = listItem['enab'];
      }
      this.addCommand(_text, 'category', _enab, _ext);
    }
  };
  Window_CodexCategories.prototype.showPages = function(entry) {
    this._currEntry = entry;
    this._CatMode =2;
    this.refresh(false);
    this.activate();
  }
  Window_CodexCategories.prototype.showEntries = function(category) {
    this._currCategory = category ;
    this._CatMode =1;
    this.refresh(false);
    this.activate();
  }
  Window_CodexCategories.prototype.showCategories = function() {
    this._CatMode =0;
    this.refresh(false);
    this.activate();
  }

  Window_CodexCategories.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var text = this.commandName(index);
    var align = this.settings('Text Alignment');
    var wx = 0;
    var ww = rect.width;
    if (align === 'left') {
      wx = rect.x;
    } else if (align === 'center') {
      wx += (ww - this.textWidthEx(text)) / 2;
    } else {
      wx += ww - this.textWidthEx(text) - this.textPadding();
    }
    this.drawTextEx(text, wx, rect.y);
  };
  
  Window_CodexCategories.prototype.textWidthEx = function(text) {
    return this.drawTextEx(text, 0, this.contents.height);
  };
  
  Window_CodexCategories.prototype.setListWindow = function(win) {
    this._listWindow = win;
  };
    
  Window_CodexCategories.prototype.isInsideFrame = function() {
    var x = this.canvasToLocalX(TouchInput._mouseOverX);
    var y = this.canvasToLocalY(TouchInput._mouseOverY);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  };
  
  Window_CodexCategories.prototype.processWheel = function() {
    if (!this.isInsideFrame()) return;
    var threshold = 20;
    if (TouchInput.wheelY >= threshold) this.scrollDown();
    if (TouchInput.wheelY <= -threshold) this.scrollUp();
  };
  //=============================================================================
// Window_PageData
//=============================================================================
function Window_PageData() {
    this.initialize.apply(this, arguments);
  };
  
  Window_PageData.prototype = Object.create(Window_Base.prototype);
  Window_PageData.prototype.constructor = Window_PageData;
  
  Window_PageData.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = Math.round(eval(this.settings('X')));
    var y = Math.round(eval(this.settings('Y')));
    this._allTextHeight = 0;
    this._countdown = 0;
    this._arrowBlinkTimer = 0;
    
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._info = new Sprite( new Bitmap(32,32));
    this._info.visible = false;
    this._info._duration = 0;
    this._info._phase = [0,-1,0];
    this._info._index = 0;
    //image anchored to lower border
    this._info.anchor.x = 0.5;
    this._info.anchor.y = 1;
    this._info.x = width / 2 ;
    this._info.y = height - this.standardPadding() ;
    this.addChildToBack(this._info);
    this.setEntryId('','');
    this.opacity = Math.round(eval(this.settings('Standard Opacity')));
  };
  
  Window_PageData.prototype.settings = function(key) {
    return JaDa.Param.CodexDataWindow[key];
  };
  
  Window_PageData.prototype.windowWidth = function() {
    if (this._windowWidth === undefined) {
        //fill out room next to category
      this._windowWidth = Math.round(Graphics.boxWidth-eval(JaDa.Param.CodexCategoryWindow['Width']));
    }
    return this._windowWidth;
  };
  
  Window_PageData.prototype.windowHeight = function() {
    if (this._windowHeight === undefined) {
      this._windowHeight = Graphics.boxHeight;//Math.round(eval(this.settings('Height')));
    }
    return this._windowHeight;
  };
  
  Window_PageData.prototype.lineHeight = function() {
    if (this._windowLineHeight === undefined) {
      this._windowLineHeight = parseInt(this.settings('Line Height'));
    }
    return this._windowLineHeight;
  };
  
  Window_PageData.prototype.standardFontFace = function() {
    if (this._windowFontFace === undefined) {
      this._windowFontFace = this.settings('Font Face');
    }
    return this._windowFontFace;
  };
  
  Window_PageData.prototype.standardFontSize = function() {
    if (this._windowFontSize === undefined) {
      this._windowFontSize = Math.round(eval(this.settings('Font Size')));
    }
    return this._windowFontSize;
  };
  
  Window_PageData.prototype.standardPadding = function() {
    if (this._windowStandardPadding === undefined) {
      this._windowStandardPadding = 
        Math.round(eval(this.settings('Standard Padding')));
    }
    return this._windowStandardPadding;
  };
  
  Window_PageData.prototype.textPadding = function() {
    if (this._windowTextPadding === undefined) {
      this._windowTextPadding = Math.round(eval(this.settings('Text Padding')));
    }
    return this._windowTextPadding;
  };
  
  Window_PageData.prototype.standardBackOpacity = function() {
    if (this._windowBackOpacity === undefined) {
      this._windowBackOpacity = Math.round(eval(this.settings('Back Opacity')));
    }
    return this._windowBackOpacity;
  };
  
  Window_PageData.prototype.loadWindowskin = function() {
    this.windowskin = ImageManager.loadSystem(this.settings('Window Skin'));
  };
  
  Window_PageData.prototype.delayLoadFrames = function() {
    if (this._delayLoad === undefined) {
      this._delayLoad = 30;//Math.round(eval(this.settings('Load Delay')));
    }
    return this._delayLoad;
  };
  
  Window_PageData.prototype.setEntryId = function(entryId,pageId='1') {
    if (this._entryId !== entryId || this._pageId!==pageId) {
        this._entryId = entryId ;
        this._pageId =pageId;
      this._countdown = 30;
      this.refresh();
      //this.activate();  this panel has no input-controls, so dont activate
    }
  };

  Window_PageData.prototype.refresh = function() {
    if (this._countdown > 0) return;
    this.contents.clear();
    this._lastOriginY = -200;
    this.origin.y = 0;
    this._allTextHeight = 0;
    if (this._entryId !== '' && this._pageId !== '') {
      this.drawPageData();
    } else {
      this.drawEmpty();
    }
  };
  Window_PageData.prototype.update = function() {
    //Window_Selectable.prototype.update.call(this);
    this.updateCountdown();
    //if (this.isOpenAndActive()) this.updateKeyScrolling();
  };
  Window_PageData.prototype.updateCountdown = function() {
    if (this._countdown > 0) {
      this._countdown -= 1;
      if (this._countdown <= 0) this.refresh();
    }
  };
  Window_PageData._questNoDataFmt = 'No Data';

  Window_PageData.prototype.drawEmpty = function() {
    var fmt = Window_PageData._questNoDataFmt;
    var wordwrap = fmt.match(/<(?:WordWrap)>/i);
    var text = fmt.format();
    var textState = { index: 0 };
    textState.originalText = text;
    textState.text = this.convertEscapeCharacters(text);
    this.resetFontSettings();
    this._allTextHeight = this.calcTextHeight(textState, true);
    this._allTextHeight *= (wordwrap) ? 10 : 1;
    this.createContents();
    this.showNoImage();
    this.drawPageTextEx(text, 0, 0);
  };

  Window_PageData.prototype.drawPageData = function() {
    /*Window_QuestData._questDataFmt = 
      JSON.parse(Yanfly.Param.QuestDataWindow['Quest Data Format'] || "");
    var questData = $dataQuests[this._questId];
    if (!questData) return;
    var fmt = Window_QuestData._questDataFmt;
    */
   var _entry = $dataCodex.entryList[this._entryId]; 
   var _page = _entry.pages[this._pageId];
   var fmt = Window_PageData._questNoDataFmt;
    var wordwrap = true; //fmt.match(/<(?:WordWrap)>/i); //??
    var text = ("<WordWrap>").concat(_entry.name,' - ', _page.PageName, '<br>').concat(_page.Description);
    var textState = { index: 0 };
    textState.originalText = text;
    textState.text = this.convertEscapeCharacters(text);
    this.resetFontSettings();
    this._allTextHeight = this.calcTextHeight(textState, true);
    this._allTextHeight *= (wordwrap) ? 10 : 1;
    this.createContents();
    this.showImage();
    this.drawPageTextEx(text, 0, 0);
  };
  Window_PageData.prototype.drawPageTextEx = function(text, x, y) {
    if (text) {
      var textState = { index: 0, x: x, y: y, left: x };
      textState.text = this.convertEscapeCharacters(text);
      textState.height = this.calcTextHeight(textState, false);
      
      this.resetFontSettings();
      while (textState.index < textState.text.length) {
        this.processCharacter(textState);
      }
      this._allTextHeight = textState.y - y + this.lineHeight();
      return textState.x - x;
    } else {
      return 0;
    }
  };
  Window_PageData.prototype.showNoImage = function() {
    this._info.visible = false;
 };
  Window_PageData.prototype.showImage = function() {
    var _imageName = $dataCodex.entryList[this._entryId].pages[this._pageId].Image
    if(_imageName==='') {
        this.showNoImage();
        return;
    }
    this._info.bitmap = ImageManager.picturegallery(_imageName);
	this._info.visible = true;
	this._info._duration = 0;
	this._info._phase = [0,-1,0];
	this._info._index = 0;
};
//=============================================================================
// Scene_Menu
//=============================================================================

JaDa.Codex.Scene_Menu_createCommandWindow =
  Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
    JaDa.Codex.Scene_Menu_createCommandWindow.call(this);
  this._commandWindow.setHandler('codex', this.commandCodex.bind(this));
};

Scene_Menu.prototype.commandCodex = function() {
  SceneManager.push(Scene_Codex);
};
//=============================================================================
// Scene_Quest
//=============================================================================

function Scene_Codex() {
    this.initialize.apply(this, arguments);
  };
  
  Scene_Codex.prototype = Object.create(Scene_MenuBase.prototype);
  Scene_Codex.prototype.constructor = Scene_Codex;
  
  Scene_Codex.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._currCategory = '';
    this._currEntry = '';
    this._currPage = '';
  };
  
  Scene_Codex.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    //this.runCustomCode(Yanfly.Quest.createBefore);
    this.createDataWindow();
    //this.createTitleWindow();
    this.createCategoryWindow();
    //this.createListWindow();
    //this.processQuestOpen();
    //this.runCustomCode(Yanfly.Quest.createAfter);
  };
  Scene_Codex.prototype.createDataWindow = function() {
    this._dataWindow = new Window_PageData();
    //this._dataWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
    this.addWindow(this._dataWindow);
  };
  
 /*  Scene_Codex.prototype.createTitleWindow = function() {
    this._titleWindow = new Window_EntryTitle();
    this.addWindow(this._titleWindow);
  }; */
  Scene_Codex.prototype.createCategoryWindow = function() {
    this._categoryWindow = new Window_CodexCategories();
    this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
    this._categoryWindow.setHandler('category', this.onCategoryOk.bind(this));
    this.addWindow(this._categoryWindow);
  };
  
/*   Scene_Codex.prototype.createListWindow = function() {
    this._listWindow = new Window_EntryList(this._categoryWindow, 
      this._dataWindow, this._titleWindow);
    this._listWindow.setHandler('cancel', this.onListCancel.bind(this));
    this._listWindow.setHandler('type', this.onListTypeToggle.bind(this));
    this._listWindow.setHandler('quest', this.onListQuest.bind(this));
    this._listWindow.setHandler('readQuest', this.dataWindowActivate.bind(this));
    this.addWindow(this._listWindow);
  }; */

  Scene_Codex.prototype.onCategoryCancel = function() {
      if(this._categoryWindow._CatMode>=1) { //0 = show category, 1 = show Entrys
        this._categoryWindow.showCategories();
      } else {
        //this.runCustomCode(Yanfly.Quest.terminateMenu);
        this.popScene();
      }
  };
  
  Scene_Codex.prototype.onCategoryOk = function() {
    if(this._categoryWindow._CatMode==2) { //0 = show category, 1 = show Entrys, 2 = Pages
        this._currPage = this._categoryWindow.currentExt();
        this._dataWindow.setEntryId(this._currEntry,this._currPage);
        this._categoryWindow.activate();
    } else if(this._categoryWindow._CatMode==1) { 
        this._currEntry = this._categoryWindow.currentExt();
        this._dataWindow.setEntryId(this._currEntry,'');
        this._categoryWindow.showPages(this._currEntry);
    } else {
        this._currCategory = this._categoryWindow.currentExt(); 
        this._categoryWindow.showEntries(this._currCategory);
    }
    //this._listWindow.activate();
    //if (this._listWindow.index() < 0) this._listWindow.select(0);
  };