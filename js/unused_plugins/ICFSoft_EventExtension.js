//=============================================================================
// ICF-Soft Plugins - Event Extension
// ICFSoft_EventExtension.js
//=============================================================================

var Imported = Imported || {};
Imported.ICFSoft_Events = true;

var ICF = ICF || {};
ICF.Events = ICF.Events || {};

ICF.Events.Version = 106; // 1.06

//=============================================================================
 /*:
 * @plugindesc v1.06a This plugin allows more conditions to events and to call
 * remote events.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @param Developer HaltJS
 * @desc When true it throws an error if an custom event condition
 * javascript doesn't work.   NO - false     YES - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * 
 * Pageevents have a limited set of conditions, there are usefull but sometimes
 * aren't enough.
 * Variables by default aren't versatile enough because they have "greater or
 * equal" only option.
 * 
 * With this plugin you can add extra conditions like more switches, unlimited
 * selfswitches, unlimited mapswitches and versatile variables.
 * 
 * Mapswitches are special switches that aplies to all events in a map.
 * 
 * Partyswitches aren't special switches themselves. If at least one member of
 * the party has this switch returns true.
 * 
 * Variables can now be "greater or equal", "greater than", "lower than",
 * "lower or equal", "equal to" or "different than" a value.
 * 
 * Self and map variables don't need an explanation on how these work.
 * Partyvariables are actor variables combinations (sum, min, max and average).
 * 
 * Now you can assign names to pages to allow calling by name and/or make it
 * dummy to disallow be using inside map.
 * Plus a way to group events for use in common events without needing of id.
 * 
 * ============================================================================
 * Parameters
 * ============================================================================
 * 
 * Developer HaltJS: This is a development variable usefull to check if there is
 * a wrong javascript event condition.
 * When true will throw an error when it found a wrong javascript in lunatic
 * mode.
 * When false it will be ignored and game continues.
 * 
 * ============================================================================
 * How to use
 * ============================================================================
 * 
 * To add an extra condition to a page just add a comment or note, same
 * format as plugin commands:
 * 
 * switch x x x x x x
 * selfswitch x x x x x
 * mapswitch x x
 * partyswitch x x x
 * 
 *  - Add specified game, self, map or party switch to conditions.
 *    You can place all same-type switchs you need in same line.
 * 
 * [prefix]variable x value
 * [prefix]variablehigh x value
 * [prefix]variableless x value
 * [prefix]variablemax x value
 * [prefix]variableequal x value
 * [prefix]variabledif x value
 * 
 *  - Add a variable condition. There are six types: min value, higher than,
 *    lower than, max value, equal and not equal.
 *    Optionaly you can add a prefix to use self, map and party variables
 *    this way:
 * 
 * selfvariable x value
 * mapvariable x value
 * partyvariable x value [min/max/avg]
 * 
 *  - Partyvariables can have an extra parameter. If omited it will check
 *    sum of party members specified variables.
 *    -min: check minimun of party members specified variables.
 *    -max: check maximun of party members specified variables.
 *    -avg: check average value of party members specified variables.
 *
 * You can also give a name to a page and/or make it dummy with these:
 *
 * pagename name
 *
 *  - Give a name to a page.
 * 
 * dummypage [name]
 *
 *  - Disallow a page to be trigered by page conditions.
 *    You can optionally give it a name.
 * 
 * You can group events with this note:
 *
 * groupevent [name]
 *
 *  - Add event to a group array.
 *    You can optionally asign it to a name.
 * 
 * ============================================================================
 * Lunatic Mode
 * ============================================================================
 * 
 * You can use special conditions to a page by using javascript.
 * There are inside a comment or note like others conditions and if you use more
 * than one all will be merged.
 * 
 * customreq: code
 * 
 *  result - this is where result is stored. By default is false.
 * 
 * ============================================================================
 * Plugin commands
 * ============================================================================
 * 
 * CallPage x
 * 
 *   - Call page by it's name or page number.
 * 
 * CallEventPage 1 2 3
 * 
 *   - You can call a page from other event by it's name or page number.
 *     Works different depending on how many arguments have been added.
 *     1: Calls first page from event.
 *     2: Second parameter is the page name or number.
 *     3: Third is the eventid that can be affected by self switchs/vars
 *        or commands. You can use "this" as a param.
 * 
 * CallRemoteEvent map event [page]
 * 
 *   - You can call a page from other event from aother map by it's name
 *     or page number.
 *     If page is omitted first page will be called.
 * 
 * 
 * These other plugin commands are actually included in ICF-Soft Main Utility.
 * Reffer to Main Utility readme for full list.
 * 
 * selfswitch x true/false
 * mapswitch x true/false
 * 
 *  - Turns on/off specified selfswitch or mapswitch.
 * 
 * remoteswitch mapid eventid x true/false
 * 
 *  - Turns on/off specified selfswitch or mapswitch remotely.
 *    Use eventid 0 for a mapswitch.
 * 
 * ============================================================================
 * Scripting functions
 * ============================================================================
 * 
 * event.callPage(name);
 * 
 *  - Call an event page by it's name.
 *
 * $gameMap.groupEvents();
 * 
 *  - Return an array with all grouped events.
 *
 * $gameMap.groupEvents(name);
 * 
 *  - Return an array with all events inside specified group.
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
 * Plugins that allow to have more than 999 maps without increasing map ids
 * can cause glitches between maps that shares special switches and variables.
 * 
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.06:
 * - Allow to call events from other maps.
 * - Allow to reffer events by it's name.
 * - Prepared for a better use of ICF-Soft Map Extension.
 *
 * Version 1.05:
 * - Allow to group events in an array to use without eventId.
 *
 * Version 1.04:
 * - Added pagenames and dummypages.
 *
 * Version 1.03:
 * - Use of ICF-Soft Main Utility.
 * - Added partyswitchs.
 * - Added self, map and party variables.
 *
 * Version 1.02:
 * - Fixed and improved lunatic mode.
 * - More versatile variables.
 * - Added remote switchs.
 *
 * Version 1.01:
 * - Added lunatic mode.
 *
 * Version 1.00:
 * - Finished plugin!
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
 * @plugindesc v1.06a Este complemento permite más condiciones en los
 * eventos y llamar eventos de otros mapas.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
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
 * Las páginas de los eventos tienen un número limitado de condiciones, son
 * útiles pero a veces no son suficientes.
 * Las variables por defecto no son muy versátiles pues sólo tienen la opción
 * de "igual o mayor".
 * 
 * Con este complemento puedes añadir condiciones extra tales como más
 * interruptores, autointerruptores ilimitados, interruptores de mapa ilimitados
 * y variables más versátiles.
 * 
 * Los nuevos interruptores de mapa son unos interruptores especiales similares
 * a los automáticos, que afectan a todos los eventos del mapa.
 * 
 * Los partyswitches no son interruptores en sí mismos. Indican si algún
 * personaje del grupo tiene el interruptor activado.
 * 
 * Las variables ahora permiten las opciones "igual o mayor", "mayor que",
 * "menor que", "menor o igual", "igual que" o "distinto a".
 * 
 * Las variables de evento y mapa no requieren explicar cómo funcionan.
 * Las partyvariables funcionan como combinación de las variables de los
 * personajes que se encuentran en el grupo (suma, min, máx y media).
 * 
 * Ahora puedes asignar nombres a las páginas para poder llamarlas y/o hacerlas
 * que no se activen en el mapa.
 * Además de un modo de agrupar los eventos para poder llamarlos sin necesidad
 * de usar la id.
 * 
 * ============================================================================
 * Parámetros
 * ============================================================================
 * 
 * Developer HaltJS: Esta es una variable de uso durante el desarrollo del juego
 * útil cuando quieres comprobar si hay alguna función personalizada incorrecta.
 * Cuando está activado al encontrar un error el juego se para.
 * Cuando está desactivado ignora el error y el juego continúa.
 * 
 * ============================================================================
 * Uso
 * ============================================================================
 * 
 * Para añadir una condición extra en una página simplemente añadir una nota
 * en el mismo formato que un comando de complemento:
 * 
 * switch x x x x x
 * selfswitch x x x
 * mapswitch x
 * partyswitch x x x
 * 
 *  - Para añadir interruptor, autointerruptor, interruptor de mapa o
 *    interruptor del grupo.
 *    Puedes usar todos los que necesites del mismo tipo en una misma linea.
 * 
 * [prefijo]variable x value
 * [prefijo]variablehigh x value
 * [prefijo]variableless x value
 * [prefijo]variablemax x value
 * [prefijo]variableequal x value
 * [prefijo]variabledif x value
 * 
 *  - Para añadir condición de variable. Tipos: mínimo, mayor, menos,
 *    máximo, igual y distinto respectivamente.
 *    Opcionalmente puedes utilizar un prefijo para usar autovariables,
 *    de mapa o del grupo.
 *    Quedaría así:
 * 
 * selfvariable x value
 * mapvariable x value
 * partyvariable x value [min/max/avg]
 * 
 *  - Partyvariables pueden usar un parámetro extra. Si se omite se usará
 *    la suma de la variable de cada personaje del grupo.
 *    -min: para comprobar el mínimo entre la variable de cada personaje
 *          del grupo.
 *    -max: para comprobar el máximo entre la variable de cada personaje
 *          del grupo.
 *    -avg: para comprobar la media de la variable de cada personaje
 *          del grupo.
 *
 * Puedes poner un nombre a una página y/o deshabilitarla en mapa con las
 * siguientes notas:
 *
 * pagename name
 *
 *  - Nombrar una página.
 * 
 * dummypage [name]
 *
 *  - Impide que la página pueda ser activada del modo usual.
 *    Opcionalmente puedes ponerle un nombre para que solo se pueda llamar
 *    por el.
 * 
 * Para agrupar eventos puedes utilizar la siguiente nota:
 *
 * groupevent [name]
 *
 *  - Añade el evento al grupo principal.
 *    Optionalmente puedes añadirlo a un subgrupo específico.
 * 
 * ============================================================================
 * Lunatic Mode
 * ============================================================================
 * 
 * Puedes usar condiciones especiales en una página mediante javascript.
 * Se pone el código en una nota del mismo modo que las demás condiciones.
 * Si usas más de una se juntarán todas.
 * 
 * customreq: código
 * 
 *  result - aquí se almacena el resultado. Por defecto está desactivado.
 * 
 * ============================================================================
 * Comandos de complemento
 * ============================================================================
 * 
 * CallPage x
 * 
 *   - Llama a una página del evento por su nombre o número.
 * 
 * CallEventPage 1 2 3
 * 
 *   - Llama a una página de otro evento por su nombre o número.
 *     Funciona diferente según el número de argumentos que le pongas.
 *     1: Llama la primera página del evento.
 *     2: El segundo es nombre de página o número.
 *     3: El tercero es la id del evento que puede ser afectado por las
 *        variables/interruptores locales o comandos como borrar evento.
 *        Puedes usar "this" para que afecte al evento desde donde se llama.
 * 
 * 
 * CallRemoteEvent map event [page]
 * 
 *   - Permite llamar una página de un evento de otro mapa por su nombre
 *     o número de página.
 *     Si se omite la página se llamará la primera.
 * 
 * 
 * El resto de comandos de complemento están actualmente incluidos
 * en ICF-Soft Main Utility.
 * Para ver la lista completa es mejor referirse al archivo leeme
 * del Main Utility.
 * 
 * selfswitch x true/false
 * mapswitch x true/false
 * 
 *  - Activa o desactiva el autointerruptor o interruptor de mapa.
 * 
 * remoteswitch mapid eventid x true/false
 * 
 *  - Activa o desactiva el autointerruptor o interruptor de mapa específico
 *    de forma remota. Usar eventid 0 para interruptor de mapa.
 * 
 * ============================================================================
 * Funciones de script
 * ============================================================================
 * 
 * event.callPage(name);
 * 
 *  - Llama a una página del evento por su nombre.
 * 
 * $gameMap.groupEvents();
 * 
 *  - Devuelve un array con los eventos agrupados.
 *
 * $gameMap.groupEvents(name);
 * 
 *  - Devuelve un array con los eventos de un subgrupo.
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
 * El uso de complementos que permiten usar más de 999 mapas que no incrementan
 * las id's puede ocasionar bugs entre mapas que compartan interruptores
 * y variables especiales.
 * 
 * ============================================================================
 * Historial de versiones
 * ============================================================================
 *
 * Versión 1.06:
 * - Permite llamar eventos de otros mapas.
 * - Permite referirse a los eventos por su nombre.
 * - Preparado para funcionar con ICF-Soft Map Extension.
 *
 * Versión 1.05:
 * - Posibilidad de agrupar eventos en array para usarlos sin su id.
 *
 * Versión 1.04:
 * - Se han añadido nombres para páginas y deshabilitación de páginas.
 *
 * Versión 1.03:
 * - Se empieza a utilizar el ICF-Soft Main Utility.
 * - Se han añadido los interruptores de grupo.
 * - Se han añadido las variables de evento, mapa y de grupo.
 *
 * Versión 1.02:
 * - Modo lunático arreglado y mejorado.
 * - Variables más versátiles.
 * - Se han añadido interruptores remotos.
 *
 * Versión 1.01:
 * - Se ha añadido el modo lunático.
 *
 * Versión 1.00:
 * - Complemento terminado.
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

ICF.Parameters = PluginManager.parameters('ICFSoft_EventExtension');
ICF.Param = ICF.Param || {};

ICF.Param.EventExHalt = ICF.Parameters['Developer HaltJS'].toLowerCase() === "true";

if (!Imported.ICFSoft_MainUtility) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.02 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}
if (ICF.MainUtility.Version < 102) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.02 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}

//=============================================================================
// Event Utilities
//=============================================================================

ICF.Events.Checking = false;

ICF.Events.CustomSwitch = function(mapid, evid, switchname, value) {
	var _key = [mapid, evid, switchname];
	var _value = (value.toLowerCase() === "true");
	$gameSelfSwitches.setValue(_key, _value);
}

ICF.Events.ProcessEvent = function(event, pages) {
	event.pagenames = {};
	for (i = 0; i < pages.length; i += 1) {
		var page = pages[i];
		page._switchs = [];
		page._selfswitchs = [];
		page._mapswitchs = [];
		page._partyswitchs = [];
		page._vars = [];
		page._selfvars = [];
		page._mapvars = [];
		page._partyvars = [];
		page._customreq = "";
		for (j = 0; j < page.list.length; j += 1) {
			var command = page.list[j];
			if (command.code === 108) {
				ICF.Events.Checking = false;
				ICF.Events.ProcessComment(page, event, command.parameters[0]);
			} else if (command.code === 408) {
				ICF.Events.ProcessComment(page, event, command.parameters[0]);
			}
		}
	}
}

ICF.Events.ProcessComment = function(page, obj, content) {
	var args = content.split(" ");
	if (ICF.Events.Checking) {
		page._customreq = page._customreq + content + '\n';
	} else if (args[0] !== null && args[1] !== null) {
		if (args[0].toLowerCase() == "groupevent") {
			obj._isGrouped = true;
			if (args[1] !== null) {obj._groupName = args[1].toLowerCase();};
		} else if (args[0].toLowerCase() == "dummypage") {
			page._isDummy = true;
			if (args[1] !== null) {obj.pagenames[args[1]] = page;};
		} else if ((args[0].toLowerCase() == "pagename") && (args[1] !== null)) {
			obj.pagenames[args[1]] = page;
		} else if (args[0].toLowerCase() == "switch") {
			args.splice(0, 1);
			page._switchs = page._switchs.concat(args);
		} else if (args[0].toLowerCase() == "selfswitch") {
			args.splice(0, 1);
			page._selfswitchs = page._selfswitchs.concat(args);
		} else if (args[0].toLowerCase() == "mapswitch") {
			args.splice(0, 1);
			page._mapswitchs = page._mapswitchs.concat(args);
		} else if (args[0].toLowerCase() == "partyswitch") {
			args.splice(0, 1);
			page._mapswitchs = page._partyswitchs.concat(args);
		} else if (args[0].toLowerCase().match(/((?:self)|(?:map)|(?:party))?(variable)((?:high)|(?:less)|(?:min)|(?:max)|(?:equal)|(?:dif))?/i)&&(RegExp.$1.length + RegExp.$2.length + RegExp.$3.length == args[0].length)) {
			var code = (RegExp.$3 == "high")? 2 : (RegExp.$3 == "less")? 4 : (RegExp.$3 == "max")? 5 : (RegExp.$3 == "equal")? 0 : (RegExp.$3 == "dif")? 1 : 3;
			if (RegExp.$1 == "self") page._selfvars.push([code, args[1], args[2]]);
			else if (RegExp.$1 == "map") page._mapvars.push([code, args[1], args[2]]);
			else if (RegExp.$1 == "party") page._partyvars.push([code, args[1], args[2], args[3]]);
			else page._vars.push([code, args[1], args[2]]);
		} else if (args[0].toLowerCase() == "customreq:") {
			page._customreq = page._customreq + content.substring(10) + '\n';
			ICF.Events.Checking = true;
		}
	}
}

ICF.Events.CheckVar = function(code, value1, value2) {
	switch (code) {
		case 0:
			return (value1 == value2); break;
		case 1:
			return (value1 !== value2); break;
		case 2:
			return (value1 > value2); break;
		case 3:
			return (value1 >= value2); break;
		case 4:
			return (value1 < value2); break;
		case 5:
			return (value1 <= value2); break;
		default:
			return false;
	}
}

//=============================================================================
// Game_Event
//=============================================================================

Game_Event.prototype.event = function() {
    if (Imported.ICFSoft_MapExtension && $dataPreloadedMaps && $dataPreloadedMaps[this._mapId]) return $dataPreloadedMaps[this._mapId].events[this._eventId];
    return $dataMap.events[this._eventId];
};

ICF.Events.init = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function(mapId, eventId) {
	ICF.Events.init.call(this, mapId, eventId);
	if (Imported.ICFSoft_MapExtension && $dataPreloadedMaps && $dataPreloadedMaps[this._mapId]) return;
	ICF.Events.ProcessEvent(this.event(), this.event().pages);
	this.refresh();
};

ICF.Events.meetsConditions = Game_Event.prototype.meetsConditions;
Game_Event.prototype.meetsConditions = function(page) {
	if (page._isDummy) {return false;}
	if (!ICF.Events.meetsConditions.call(this, page)) {return false;}
	if (page._switchs == null) {return true;}
	for (i = 0; i < page._switchs.length; i += 1) {
		if (!$gameSwitches.value(page._switchs[i])) {
			return false;
		}
	}
	for (i = 0; i < page._selfswitchs.length; i += 1) {
		var key = [this._mapId, this._eventId, page._selfswitchs[i]];
		if ($gameSelfSwitches.value(key) !== true) {
			return false;
		}
	}
	for (i = 0; i < page._mapswitchs.length; i += 1) {
		var key = [this._mapId, 0, page._mapswitchs[i]];
		if ($gameSelfSwitches.value(key) !== true) {
			return false;
		}
	}
	for (i = 0; i < page._partyswitchs.length; i += 1) {
		if ($gameParty.selfswitch(page._partyswitchs[i]) !== true) {
			return false;
		}
	}
	for (i = 0; i < page._vars.length; i += 1) {
		if (!ICF.MainUtility.CheckVar(page._vars[i][0], $gameVariables.value(page._vars[i][1]), page._vars[i][2])) {
			return false;
		}
	}
	for (i = 0; i < page._selfvars.length; i += 1) {
		var key = [this._mapId, this._eventId, page._selfvars[i][1]];
		if (!ICF.MainUtility.CheckVar(page._selfvars[i][0], $gameSelfVariables.value(key), page._selfvars[i][2])) {
			return false;
		}
	}
	for (i = 0; i < page._mapvars.length; i += 1) {
		var key = [this._mapId, 0, page._mapvars[i][1]];
		if (!ICF.MainUtility.CheckVar(page._mapvars[i][0], $gameSelfVariables.value(key), page._mapvars[i][2])) {
			return false;
		}
	}
	for (i = 0; i < page._partyvars.length; i += 1) {
		var code = -1;
		if (!!page._partyvars[i][3]) {code = ["min", "max", "avg"].indexOf(page._partyvars[i][3].toLowerCase());}
		if (code == 0) {if (!ICF.MainUtility.CheckVar(page._partyvars[i][0], $gameParty.minselfvariable(page._partyvars[i][1]), page._partyvars[i][2])) {
			return false;}
		} else if (code == 1) {if (!ICF.MainUtility.CheckVar(page._partyvars[i][0], $gameParty.maxselfvariable(page._partyvars[i][1]), page._partyvars[i][2])) {
			return false;}
		} else if (code == 2) {if (!ICF.MainUtility.CheckVar(page._partyvars[i][0], $gameParty.avgselfvariable(page._partyvars[i][1]), page._partyvars[i][2])) {
			return false;}
		} else {if (!ICF.MainUtility.CheckVar(page._partyvars[i][0], $gameParty.selfvariable(page._partyvars[i][1]), page._partyvars[i][2])) {
			return false;}
		}
	}

	if (page._customreq.length != "") {
		var result = false;
		try {eval(page._customreq);}
		catch (e) {if(ICF.Param.EventExHalt){throw new Error('Error in custom page condition for event');}}
		return result;
	}

	return true;
};

Game_Event.prototype.callPage = function(pagename) {
	var list = null;
	if (isNaN(Number(pagename)) || pagename > 20) {
		list = this.event().pagenames[pagename];
	} else {
		list = this.event().pages[page - 1];
	}
	if (!list) return;
	$gameMap.interpreter.setupChild(list, this._eventId);
};

Game_Event.prototype.callPageGlobally = function(pagename) {
	var list = null;
	if (isNaN(Number(pagename)) || pagename > 20) {
		list = this.event().pagenames[pagename];
	} else {
		list = this.event().pages[page - 1];
	}
	if (!list) return;
	$gameMap.interpreter.setupChild(list, 0);
};

//=============================================================================
// Game_Map
//=============================================================================

Game_Map.prototype.interpreter = function() {
	return this._interpreter;
};

ICF.Events.mapsetup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	ICF.Events.mapsetup.call(this, mapId);
	this._groupEvents = [];
	this._groupEventNames = {};
	for (var i = 0; i < this.events().length; i++) {
		if (this.events()[i]._isGrouped) {
			this._groupEvents.push(this.events()[i]);
			if (!!this._events[i]._groupName) {
				this._groupEventNames[this.events()[i]._groupName] = this._groupEventNames[this.events()[i]._groupName] || [];
				this._groupEventNames[this.events()[i]._groupName].push(this.events()[i]);
			}
		}
	}
};

Game_Map.prototype.groupEvents = function(group) {
	if (group == undefined) return this._groupEvents;
	if (!this._groupEventNames[group]) return [];
	return this._groupEventNames[group];
};

//=============================================================================
// Game_Interpreter
//=============================================================================

ICF.Events.pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	ICF.Events.pluginCommand.call(this, command, args);
	if (command.toLowerCase() == 'callpage') {
		this.callEventPage(this._mapId, this.eventId(), args[0], this.eventId());
	} else if (command.toLowerCase() == 'calleventpage') {
		if (args.lenght < 1) return;
		else if (args.lenght == 1) this.callEventPage(this._mapId, args[0], 1, args[0]);
		else if (args.lenght == 2) this.callEventPage(this._mapId, args[0], args[1], args[0]);
		else if (args.lenght == 3 && args[2].toLowerCase() == 'this') this.callEventPage(this._mapId, args[0], args[1], this.eventId());
		else if (args.lenght == 3) this.callEventPage(this._mapId, args[0], args[1], args[2]);
	} else if (command.toLowerCase() == 'callremoteevent') {
		if (args.lenght < 2) return;
		else if (args.lenght == 2) this.callEventPage(args[0], args[1], 1, this.eventId());
		else this.callEventPage(args[0], args[1], args[2], this.eventId());
	}
};

Game_Interpreter.prototype.callEventPage = function(mapId, eventId, page, source) {
	var map = (this._mapId == mapId)? $gameMap : ($dataPreloadedMaps)? $dataPreloadedMaps[mapId] : null;
	if (!map) return;
	var event = null;
	if (isNaN(Number(eventId))) {
		for (var i = 1; i < map.events.length; i++) {
			if (eventId == map.events[i].name) {
				event = map.events[i];
				break;
			}
		}
	} else {
		event = map.events[eventId];
	}
	if (!event) return;
	var list = null;
	if (isNaN(Number(page)) || page > 20) {
		list = event.pagenames[page];
	} else {
		list = event.pages[page - 1];
	}
	if (!list) return;
	if (isNaN(Number(source))) source = 0;
	this.setupChild(list, source);
};

//=============================================================================
// Scene_Map
//=============================================================================

Scene_Map.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this._transfer = $gamePlayer.isTransferring();
    var mapId = this._transfer ? $gamePlayer.newMapId() : $gameMap.mapId();
    if (this._transfer) DataManager.loadMapData(mapId);
};

//=============================================================================
// End of File
//=============================================================================
