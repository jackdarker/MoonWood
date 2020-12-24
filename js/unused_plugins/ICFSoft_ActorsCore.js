//=============================================================================
// ICF-Soft Plugins - Actors Core
// ICFSoft_ActorsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.ICFSoft_ActorsCore = true;

var ICF = ICF || {};
ICF.ActorsCore = ICF.ActorsCore || {};

ICF.ActorsCore.Version = 100; // 1.00

//=============================================================================
 /*:
 * @plugindesc v1.00 This plugin gives level up actions and subtraits
 * to actors.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @param Javascript on level down
 * @desc Javascript code will run also when an actor level down.
 * NO - false     YES - true
 * @default false
 *
 * @param Developer HaltJS
 * @desc When true it throws an error if an custom enemy selection
 * javascript doesn't work.   NO - false     YES - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * 
 * This is a plugin designed to have all actor related funtions.
 * 
 * Actually you can give special subtraits based on level or
 * custom javascript conditions. And use level up common events and
 * javascript code.
 * 
 * ============================================================================
 * How to use
 * ============================================================================
 * 
 * It works with notetags, these can be applied to actors or classes:
 * 
 * <LEVEL SUBTRAITS: lv n>
 * <LEVEL SUBTRAITS: lv n, lv n, lv n>
 * 
 *  - Allow to use a subtrait setup from main utility plugin when an
 *    actor has reached specified level. Only highest level is applied.
 *    You can use all you will need in a line, must be in ascending order.
 * 
 * <CONDITIONAL SUBTRAIT: n javascript>
 * 
 *  - Allow to use a subtrait setup for an actor if a condition is
 *    met. More than one setup can be applied.
 * 
 * <LEVEL UP EVENT: x>
 * 
 *  - Allow to call a common event when an actor level up.
 * 
 * To make subtrait setups you use main utility plugin notation.
 * (See main utility plugin readme file).
 * 
 * Example:
 * 
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.95
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.92
 * xparamplus 0 0.1
 * </SUBTRAITS MASTER>
 * 
 * 
 * Here's an example of an actor setup:
 * 
 * <LEVEL SUBTRAITS: 5 0, 10 1, 15 2>
 * <CONDITIONAL SUBTRAIT: 3 $gameSwitches.value(20)>
 * <CONDITIONAL SUBTRAIT: 4 this.hp / this.mhp < 0.3)>
 * <LEVEL UP EVENT: 1>
 * 
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.95
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.92
 * xparamplus 0 0.1
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.90
 * xparamplus 0 0.15
 * <SUBTRAITS MASTER>
 * paramxflat 1 200
 * <SUBTRAITS MASTER>
 * attack_state 2 1
 * </SUBTRAITS MASTER>
 * 
 * ============================================================================
 * Lunatic Mode
 * ============================================================================
 *
 * If you want to use special javascript code when an actor level up you can
 * use this notetag.
 * 
 * <CUSTOM LEVEL UP>
 * lastLevel
 * level
 * levels
 * </CUSTOM LEVEL UP>
 * 
 *  - You can use lastlevel, level and levels variables. They're
 *    selfexplanatory
 * 
 * ============================================================================
 * Parameters
 * ============================================================================
 * 
 * Javascript on level down: By default, javascript code only runs when level
 * up. If enabled javascript code will be runned either on level up or level
 * down.
 * 
 * Developer HaltJS: This is a development variable usefull to check if there
 * is a wrong javascript code.
 * When true will throw an error when it found a wrong javascript in lunatic
 * mode and tell specified actor or class id.
 * When false it will be ignored and game continues.
 * 
 * ============================================================================
 * Incompatibilities
 * ============================================================================
 * 
 * There's no known incompatible plugins yet.
 * 
 * ============================================================================
 * Known isues
 * ============================================================================
 * 
 * Not yet.
 * 
 * ============================================================================
 * 
 * For commercial and non-commercial games.
 * Credit to ICF-Soft.
 * This entire header must be included with plugin.
 * 
 * ============================================================================
*/
//=============================================================================
 /*:es
 * @plugindesc v1.00 Este complemento añade acciones al subir de nivel
 * y subrasgos a los personajes.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @param Javascript on level down
 * @desc El código javascript se ejecutará también cuando el personaje
 * baje de nivel.   No - false   Si - true
 * @default false
 *
 * @param Developer HaltJS
 * @desc Si está activado salta cuando una función personalizada
 * da error.   No - false   Si - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introducción
 * ============================================================================
 * 
 * Este plugin está hecho para englobar todas las funciones relativas a
 * los personajes.
 * 
 * Actualmente puedes añadir conjuntos de subrasgos en función del nivel
 * o condiciones javascript personalizadas. Además puedes hacer que se
 * ejecuten eventos comunes y/o código javascript al subir de nivel.
 * 
 * ============================================================================
 * Uso
 * ============================================================================
 * 
 * Funciona mediante etiquetas en las notas, pueden usarse tanto en
 * actores como en clases:
 * 
 * <LEVEL SUBTRAITS: lv n>
 * <LEVEL SUBTRAITS: lv n, lv n, lv n>
 * 
 *  - Permite usar subrasgos creados mediante el main utility en función
 *    del nivel del personaje. Solo se aplica el nivel más alto.
 *    Puedes usar todos los que necesites en la misma lines, tienen que
 *    estar en orden ascendente.
 * 
 * <CONDITIONAL SUBTRAIT: n javascript>
 * 
 *  - Permite usar subrasgos si se cumple una condición en javascript.
 *    Pueden aplicarse más de una.
 * 
 * <LEVEL UP EVENT: x>
 * 
 *  - Permite llamar un evento común al subir de nivel.
 * 
 * Para crear un conjunto de subrasgos se utiliza la notación del
 * plugin main utility (Ver archivo léeme del main utility).
 * 
 * Ejemplo:
 * 
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.95
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.92
 * xparamplus 0 0.1
 * </SUBTRAITS MASTER>
 * 
 * 
 * Aquí tienes un ejemplo de configuración de personaje:
 * 
 * <LEVEL SUBTRAITS: 5 0, 10 1, 15 2>
 * <CONDITIONAL SUBTRAIT: 3 $gameSwitches.value(20)>
 * <CONDITIONAL SUBTRAIT: 4 this.hp / this.mhp < 0.3)>
 * <LEVEL UP EVENT: 1>
 * 
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.95
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.92
 * xparamplus 0 0.1
 * <SUBTRAITS MASTER>
 * debuffrate 3 0.90
 * xparamplus 0 0.15
 * <SUBTRAITS MASTER>
 * paramxflat 1 200
 * <SUBTRAITS MASTER>
 * attack_state 2 1
 * </SUBTRAITS MASTER>
 * 
 * ============================================================================
 * Modo Lunático
 * ============================================================================
 *
 * Si quieres usar código javascript cuando el personaje suba de nivel
 * utiliza las siguientes etiquetas.
 * 
 * <CUSTOM LEVEL UP>
 * lastLevel
 * level
 * levels
 * </CUSTOM LEVEL UP>
 * 
 *  - Puedes usar las variables lastlevel para el nivel que tenía antes,
 *    level para el nivel actual y levels para cuantos niveles ha subido.
 * 
 * ============================================================================
 * Parámetros
 * ============================================================================
 * 
 * Javascript on level down: De modo predeterminado, las funciones en
 * javascript sólo se ejecutan al subir de nivel. Si lo activas, el código
 * También se ejecutará al bajar de nivel.
 * 
 * Developer HaltJS: Esta es una variable de uso durante el desarrollo del juego
 * útil cuando quieres comprobar si hay alguna función personalizada incorrecta.
 * Cuando está activado al encontrar un error el juego se para y muestra
 * en qué personaje o clase se encuentra el error.
 * Cuando está desactivado ignora el error y el juego continúa.
 * 
 * ============================================================================
 * Incompatibilidades
 * ============================================================================
 * 
 * No se conocen complementos que sean incompatibles hasta la fecha.
 * 
 * ============================================================================
 * Problemas conocidos
 * ============================================================================
 * 
 * Por el momento ninguno.
 * 
 * ============================================================================
 * 
 * Para juegos comerciales y no comerciales.
 * Se debe incluir a ICF-Soft en los créditos.
 * Esta cabecera debe incluirse íntegramente con el plugin.
 * 
 * ============================================================================
*/
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

ICF.Parameters = PluginManager.parameters('ICFSoft_ActorsCore');
ICF.Param = ICF.Param || {};

ICF.Param.IncludeLevelDown = ICF.Parameters['Javascript on level down'].toLowerCase() === "true";
ICF.Param.ActorCoreHalt = ICF.Parameters['Developer HaltJS'].toLowerCase() === "true";

if (!Imported.ICFSoft_MainUtility) {throw new Error('This plugin requires ICF-Soft Main Utility plugin to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}

//=============================================================================
// DataManager
//=============================================================================

ICF.ActorsCore.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!ICF.ActorsCore.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!ICF.ActorsCore.Procesed) {
	DataManager.processActorsCoreNotetags($dataActors);
	DataManager.processActorsCoreNotetags($dataClasses);
	ICF.ActorsCore.Procesed = true;
    }
    return true;
};

DataManager.processActorsCoreNotetags = function(group) {
    var note1 = /<(?:LEVEL SUBTRAITS):[ ]*(\d+\s+\d+(?:\s*,\s*\d+\s+\d+)*\s*)>/i;
    var note2 = /<(?:CONDITIONAL SUBTRAIT):[ ]*(\d+) (.*)\s*>/i;
    var note3 = /<(?:LEVEL[-_ ]UP[-_ ]EVENT):[ ]*(\d+)>/i;
    var note4a = /<(?:CUSTOM LEVEL UP)>/i;
    var note4b = /<\/(?:CUSTOM LEVEL UP)>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.levelSubtraits = [];
	obj.condSubtraits = [];

	obj.levelUpEvent = 0;
	obj.customLevelUp = '';

	var flag = false;

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			for (var il = 0; il < array.length; il += 2) {
				obj.levelSubtraits.push([array[il], array[il + 1]]);
			}
		} else if (line.match(note2)) {
			obj.condSubtraits.push([RegExp.$2, RegExp.$1]);
		} else if (line.match(note3)) {
			obj.levelUpEvent = RegExp.$1;
		} else if (line.match(note4a)) {
			flag = true;
		} else if (line.match(note4b)) {
			flag = false;
		} else if (flag) {
			obj.customLevelUp = obj.customLevelUp + line + '\n';
		}
	}
    }
};

//=============================================================================
// Game_Actor
//=============================================================================

ICF.ActorsCore.traitObjects = Game_Actor.prototype.traitObjects;
Game_Actor.prototype.traitObjects = function() {
    var objects = ICF.ActorsCore.traitObjects.call(this);
    if (!this._lvTrait) this.getLevelTrait();
    if (!this._lvCTrait) this.getLevelCTrait();

    if (this._lvTrait > -1) objects.push(this.actor().subtraits[this._lvTrait]);
    if (this._lvCTrait > -1) objects.push(this.currentClass().subtraits[this._lvCTrait]);

    var array = this.actor().condSubtraits;
    for (var i = 0; i < array.length; i++) {
	if (eval(array[i][0])) {
		objects.push(this.actor().subtraits[array[i][1]]);
	}
    }
    array = this.currentClass().condSubtraits;
    for (var i = 0; i < array.length; i++) {
	if (eval(array[i][0])) {
		objects.push(this.currentClass().subtraits[array[i][1]]);
	}
    }
    return objects;
};

Game_Actor.prototype.getLevelTrait = function() {
    this._lvTrait = -1;
    var array = this.actor().levelSubtraits;
    for (var i = 0; i < array.length; i++) {
	if (this._level >= array[i][0]) {
		this._lvTrait = array[i][1];
	}
    }
};

Game_Actor.prototype.getLevelCTrait = function() {
    this._lvCTrait = -1;
    var array = this.currentClass().levelSubtraits;
    for (var i = 0; i < array.length; i++) {
	if (this._level >= array[i][0]) {
		this._lvCTrait = array[i][1];
	}
    }
};

ICF.ActorsCore.changeExp = Game_Actor.prototype.changeExp;
Game_Actor.prototype.changeExp = function(exp, show) {
    var lastLevel = this._level;
    ICF.ActorsCore.changeExp.call(this, exp, show);
    var level = this._level;
    var levels = level - lastLevel;
    if (levels != 0) {
	this.getLevelTrait();
	this.getLevelCTrait();
    }
    if (levels < 0 && ICF.Param.IncludeLevelDown) {
	if (this.actor().customLevelUp != '') {
		try {eval(this.actor().customLevelUp);}
		catch (e) {if(ICF.Param.ActorCoreHalt){throw new Error('Error in custom level up for actor #' + this._actorId);}}
	}
	if (this.currentClass().customLevelUp != '') {
		try {eval(this.currentClass().customLevelUp);}
		catch (e) {if(ICF.Param.ActorCoreHalt){throw new Error('Error in custom level up for class #' + this._classId);}}
	}
    }
    if (levels > 0) {
	if (this.actor().customLevelUp != '') {
		try {eval(this.actor().customLevelUp);}
		catch (e) {if(ICF.Param.ActorCoreHalt){throw new Error('Error in custom level up for actor #' + this._actorId);}}
	}
	if (this.currentClass().customLevelUp != '') {
		try {eval(this.currentClass().customLevelUp);}
		catch (e) {if(ICF.Param.ActorCoreHalt){throw new Error('Error in custom level up for class #' + this._classId);}}
	}
	if (!DataManager.isBattleTest()) {
		if (this.actor().levelUpEvent > 0) {
			for (var i = 0; i < levels; i++) {$gameTemp.reserveCommonEvent(this.actor().levelUpEvent);}
		}
		if (this.currentClass().levelUpEvent > 0) {
			for (var i = 0; i < levels; i++) {$gameTemp.reserveCommonEvent(this.currentClass().levelUpEvent);}
		}
	}
    }
    this.refresh();
};

//=============================================================================
// Game_Temp
//=============================================================================

if (!Imported.ICFSoft_MainCore) {
    Game_Temp.prototype.reserveCommonEvent = function(commonEventId) {
	if (!this._commontEventArray) this._commontEventArray = [];
	this._commontEventArray.push(commonEventId);
    };

    Game_Temp.prototype.clearCommonEvent = function() {
	if (!this._commontEventArray) this._commontEventArray = [];
	this._commontEventArray.splice(0, 1);
    };

    Game_Temp.prototype.isCommonEventReserved = function() {
	if (!this._commontEventArray) this._commontEventArray = [];
	return this._commontEventArray.length > 0;
    };

    Game_Temp.prototype.reservedCommonEvent = function() {
	if (!this._commontEventArray) this._commontEventArray = [];
	return $dataCommonEvents[this._commontEventArray[0]];
    };
}

//=============================================================================
// End of File
//=============================================================================
