//=============================================================================
// ICF-Soft Plugins - Enemies Core
// ICFSoft_EnemiesCore.js
//=============================================================================

var Imported = Imported || {};
Imported.ICFSoft_EnemiesCore = true;

var ICF = ICF || {};
ICF.EnemiesCore = ICF.EnemiesCore || {};
ICF.NotetagsProcessor = ICF.NotetagsProcessor || {};

ICF.EnemiesCore.Version = 102; // 1.02

//=============================================================================
 /*:
 * @plugindesc v1.02d This plugin adds new features to enemies like classes,
 * variations, actions and drop items for them.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @help
 * ============================================================================
 * Introduction
 * 
 * With this plugin you can add different variations to enemies that can
 * affect traits, hue, image, exp, gold, name, etc.
 * You can also add classes for them with traits.
 * 
 * Plus you can give more conditions to enemy actions and add actions to
 * classes and variations for them.
 * 
 * ============================================================================
 * How to use
 * ============================================================================
 * 
 * Like other plugins it works with notetags.
 * There are current enemy notetags:
 * 
 * <ENEMY CLASSES: x x x x>
 * <ENEMY CLASSES: x to y>
 * 
 *  - Add random classes. Enemy will get one of these classes.
 *    You can add 0 for a chance of no class.
 * 
 * <ENEMY ACTION skillId rating>
 * <ENEMY ACTION skillId rating condition>
 * 
 *  - Add an action to an enemy. You can give special conditions:
 *    Turn n x
 *    HP min max (there are rates)
 *    MP min max (there are rates)
 *    State x
 *    Partylevel level
 *    Switch x
 *    [BATTLE|ENEMY|ENEMYSELF|TROOP|PARTY|PARTYBATTLE]Switch x
 *    Var [equal|dif|high|min|less|max] x
 *    [BATTLE|ENEMY|ENEMYSELF|TROOP|PARTY|PARTYBATTLE]Var x
 *    [TROOP|PARTY|PARTYBATTLE]Var[MIN|MAX|AVG] x
 *    Js javascript-code
 * 
 *    You can use battleswitchs, enemybattleswitchs, etc.
 *    You can use battlesvariables, enemybattlevariables, etc.
 *    Troop, party and partybattlebattle variables can check sum, min,
 *    max or average.
 *    Every variable type allow to check for equal, different, higher,
 *    minimum, lower or maximun to a value.
 * 
 * <DROPITEM itemId ammount>
 * <DROPITEM itemId ammount rate>
 * <DROPITEM itemId ammount js javascript-code>
 * 
 *  - Add an extra drop item for enemy:
 *    Rate is a number between 0 and 1 with decimals.
 *    You can use a formula to give a rate with javascript.
 * 
 * You can add weapons and armor with dropweapon and droparmor insead 
 * of dropitem.
 * 
 * To add enemy variations you can use these notetags:
 * 
 * <ENEMY VARIATION>
 * </ENEMY VARIATION>
 * 
 * You can use these commands between tags:
 * 
 * classes x x x
 * 
 *  - Variation will use one of these classes avoiding default.
 * 
 * prefix word
 * 
 *  - Add a prefix to name.
 * 
 * sufix word
 * 
 *  - Add a sufix to name.
 * 
 * chance number
 * 
 *  - Add chance of being this variation. Minimun 1.
 * 
 * action skillId rating
 * action skillId rating condition
 * 
 *  - Add actions for this variation. Will be combined with default list.
 *    Same special conditions as usual.
 * 
 * dropitem itemId ammount
 * dropitem itemId ammount rate
 * dropitem itemId ammount js javascript-code
 * 
 *  - Add extra drop item for this variation. All drops are additive.
 *    You can add weapons and armor with dropweapon and droparmor insead 
 *    of dropitem.
 * 
 * exp number
 * gold number
 * battlerhue number
 * battlername filename
 * 
 *  - Changes default values.
 * 
 * traits x x x x
 * 
 *  - Add a subtrait sets taken from main utility notation. You can add
 *    multiple sets. Refer to main utility readme file. Example:
 *    <SUBTRAITS MASTER> -Fire
 *    elem_rate 1 1.5
 *    11 2 0.5
 *    31 2 0 -Fire attack element
 *    <SUBTRAITS MASTER> -Cold
 *    elem_rate 1 1.5
 *    11 2 2.1
 *    31 3 0 -Cold attack element
 *    </SUBTRAITS MASTER>
 * 
 * tags tag1 tag2 tag3
 * 
 *  - Add all tags you'll need in a single line for this variation.
 * 
 * Enemy variations example:
 * 
 * <ENEMY VARIATION>
 * classes 2 3 5
 * exp 500
 * battlerhue 100
 * traits 0
 * prefix Fire
 * action 5 3 battleswitch iscold
 * <ENEMY VARIATION>
 * traits 1
 * prefix Cold
 * action 7 3
 * </ENEMY VARIATION>
 * 
 * 
 * To add enemy class variations you can use these notetags:
 * 
 * <CLASS VARIATION classId>
 * </CLASS VARIATION>
 * 
 * You can use these commands between tags:
 * 
 * action skillId rating
 * action skillId rating condition
 * 
 *  - Add actions for this class variation. Will be combined with default list.
 *    Same special conditions as usual.
 * 
 * dropitem itemId ammount
 * dropitem itemId ammount rate
 * dropitem itemId ammount js javascript-code
 * 
 *  - Add extra drop item for this class variation. All drops are additive.
 *    You can add weapons and armor with dropweapon and droparmor insead 
 *    of dropitem.
 * 
 * traits x x x x
 * 
 *  - Add a subtrait sets taken from main utility notation. You can add
 *    multiple sets. Refer to main utility readme file.
 *
 * tags tag1 tag2 tag3
 * 
 *  - Add all tags you'll need in a single line.
 * 
 * 
 * Class variations example:
 * 
 * <CLASS VARIATION 2>
 * action 1 3
 * action 2 4 hp 0.1 0.5
 * <CLASS VARIATION 3>
 * action 10 5 mp 0.9 1
 * </CLASS VARIATION>
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
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - Improved traits.
 * - Allow tags system.
 *
 * Version 1.01:
 * - Improved enemy action contitions.
 * - Added extra enemy drops for default, variations and classes.
 * - Added enemy variation chances.
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
 * @plugindesc v1.02d Este complemento añade nuevas características a los
 * enemigos tales como clases, variaciones, acciones y objetos extra.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @help
 * ============================================================================
 * Introducción
 * ============================================================================
 * 
 * Con este complemento puedes añadir variaciones diferente a los enemigos
 * afectando los rasgos, experiencia, oro, nombre, etc.
 * Añade incluso clases con sus rasgos.
 * 
 * Además puedes darles más condiciones a las acciones de los enemigos y
 * acciones para variaciones y clases específicas.
 * 
 * ============================================================================
 * Uso
 * ============================================================================
 * 
 * Igual que otros complementos funciona con etiquetas en las notas.
 * Las hay para enemigos:
 * 
 * <ENEMY CLASSES: x x x x>
 * <ENEMY CLASSES: x hasta y>
 * 
 *  - Añade una lista de clases. El enemigo será de una de ellas.
 *    Puedes usar el 0 para que puede no tener ninguna.
 * 
 * <ENEMY ACTION skillId rating>
 * <ENEMY ACTION skillId rating condition>
 * 
 *  - Añade una acción. Puedes usar condiciones especiales:
 *    Turn n x
 *    HP min max (valores entre 0 y 1)
 *    MP min max (valores entre 0 y 1)
 *    State x
 *    Partylevel nivel
 *    Switch x
 *    [BATTLE|ENEMY|ENEMYSELF|TROOP|PARTY|PARTYBATTLE]Switch x
 *    Var [equal|dif|high|min|less|max] x
 *    [BATTLE|ENEMY|ENEMYSELF|TROOP|PARTY|PARTYBATTLE]Var x
 *    [TROOP|PARTY|PARTYBATTLE]Var[MIN|MAX|AVG] x
 *    Js javascript-code
 * 
 *    Puedes usar interruptores de batalla, de enemigos, etc.
 *    Puedes usar variables de batalla, de enemigos, etc.
 *    Para las variables de grupos puedes comprobar la suma, el
 *    mínimo, máximo o la media.
 *    Todos los tipos de variable admiten las comprobaciones de
 *    igual a, distinto a, mayor que, valor mínimo, menor que,
 *    o valor máximo.
 * 
 * <DROPITEM itemId ammount>
 * <DROPITEM itemId ammount rate>
 * <DROPITEM itemId ammount js javascript-code>
 * 
 *  - Añade objetos extra al enemigo:
 *    Rate es un número entre 0 y 1 con decimales.
 *    Puedes usar una fórmula para definir la probabilidad.
 * 
 * Puedes añadir armas y armaduras usando dropweapon y droparmor
 * respectivamente en lugar de dropitem.
 * 
 * Para añadir variaciones se usan las siguientes etiquetas:
 * 
 * <ENEMY VARIATION>
 * </ENEMY VARIATION>
 * 
 * Y usar los siguientes comandos:
 * 
 * classes x x x
 * 
 *  - Se escogerá una de esas clases en lugar de las habituales.
 * 
 * prefix word
 * 
 *  - Añade un prefijo al nombre.
 * 
 * sufix word
 * 
 *  - Añade un sufijo al nombre.
 * 
 * chance number
 * 
 *  - Añade la probabilidad de que salga esta variación. Mínimo 1.
 * 
 * action skillId rating
 * action skillId rating condition
 * 
 *  - Añade acciones para esa variación. Se combina con las normales.
 *    Se usa el mismo tipo de condición que en las normales.
 * 
 * dropitem itemId ammount
 * dropitem itemId ammount rate
 * dropitem itemId ammount js javascript-code
 * 
 *  - Añade objetos extra esta variación. Todos son aditivos.
 *    Puedes añadir armas y armaduras usando dropweapon y droparmor
 *    respectivamente en lugar de dropitem.
 * 
 * exp número
 * gold número
 * battlerhue número
 * battlername archivo
 * 
 *  - Cambia los valores.
 * 
 * traits x
 * 
 *  - Añade conjuntos de subrasgos de los que se crean con el main utility.
 *    Puedes añadir todos los necesarios en una linea.
 *    Puedes revisar el archivo léeme del main utility. Ejemplo:
 *    <SUBTRAITS MASTER> -Fuego
 *    elem_rate 1 1.5
 *    11 2 0.5
 *    31 2 0 -Ataque de fuego
 *    <SUBTRAITS MASTER> -Frío
 *    elem_rate 1 1.5
 *    11 2 2.1
 *    31 3 0 -Ataque de hielo
 *    </SUBTRAITS MASTER>
 * 
 * tags tag1 tag2 tag3
 * 
 *  - Añade todas las etiquetas en una sola linea.
 * 
 * Ejemplo de variaciones:
 * 
 * <ENEMY VARIATION>
 * classes 2 3 5
 * exp 500
 * battlerhue 100
 * traits 0
 * prefix Fire
 * action 5 3 battleswitch hace-frio
 * <ENEMY VARIATION>
 * traits 1
 * prefix Cold
 * action 7 3
 * </ENEMY VARIATION>
 * 
 * 
 * Para añadir variaciones en función de la clase usar las etiquetas:
 * 
 * <CLASS VARIATION classId>
 * </CLASS VARIATION>
 * 
 * Existen los siguientes comandos actualmente:
 * 
 * action skillId rating
 * action skillId rating condition
 * 
 *  - Añade acciones para esa clase. Se combina con el resto.
 *    Se usa el mismo tipo de condición que en las normales.
 * 
 * dropitem itemId ammount
 * dropitem itemId ammount rate
 * dropitem itemId ammount js javascript-code
 * 
 *  - Añade objetos extra esta clase. Todos son aditivos.
 *    Puedes añadir armas y armaduras usando dropweapon y droparmor
 *    respectivamente en lugar de dropitem.
 * 
 * traits x x x x
 * 
 *  - Añade conjuntos de subrasgos de los que se crean con el main utility.
 *    Puedes añadir todos los necesarios en una linea.
 *    Puedes revisar el archivo léeme del main utility.
 *
 * tags tag1 tag2 tag3
 * 
 *  - Añade todas las etiquetas en una sola linea.
 * 
 * 
 * Ejemplo de variantes de clases:
 * 
 * <CLASS VARIATION 2>
 * action 1 3
 * action 2 4 hp 0.1 0.5
 * <CLASS VARIATION 3>
 * action 10 5 mp 0.9 1
 * </CLASS VARIATION>
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
 * Historial de versiones
 * ============================================================================
 *
 * Versión 1.02:
 * - Se han extendido los rasgos.
 * - Se ha añadido el sistema de etiquetas.
 *
 * Versión 1.01:
 * - Se han mejorado las condiciones para las acciones.
 * - Se ha añadido objetos extra a los enemigos, variaciones y clases.
 * - Se han añadido probabilidades a las variaciones.
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

ICF.Parameters = PluginManager.parameters('ICFSoft_EnemiesCore');
ICF.Param = ICF.Param || {};

if (!Imported.ICFSoft_MainUtility) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.03 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}
if (ICF.MainUtility.Version < 103) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.03 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}

//=============================================================================
// DataManager
//=============================================================================

ICF.EnemiesCore.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!ICF.EnemiesCore.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!ICF.EnemiesCore.Procesed) {
	ICF.NotetagsProcessor.enemiesCore($dataEnemies);
	ICF.EnemiesCore.Procesed = true;
    }
    return true;
};

ICF.NotetagsProcessor.enemiesCore = function(group) {
  var note1 = /<(?:ENEMY VARIATION)>/i;
  var note1b = /<\/(?:ENEMY VARIATION)>/i;
  var note2 = /<(?:CLASS VARIATION )(\d+)>/i;
  var note2b = /<\/(?:CLASS VARIATION)>/i;
  var note3 = /<(?:ENEMY CLASSES):[ ]*(\w+(?:\s+\w+)*)[ ]*>/i;
  var note4 = /<(?:ENEMY ACTION )(\d+) (\d+)(?: ((?:BATTLE)|(?:ENEMY)|(?:ENEMYSELF)|(?:TROOP)|(?:PARTY)|(?:PARTYBATTLE))?((?:TURN)|(?:HP)|(?:MP)|(?:STATE)|(?:PARTYLEVEL)|(?:SWITCH)|(?:VAR))((?:MIN)|(?:MAX)|(?:AVG))? (\w+(?:.\d+)?(?:\s+\w+(?:.\d+)?)*)(?:\s*))?>/i;
  var note4b = /<(?:ENEMY ACTION )(\d+) (\d+) (?:JS) (.*)\s*>/i;
  var note4c = /((?:BATTLE)|(?:ENEMY)|(?:ENEMYSELF)|(?:TROOP)|(?:PARTY)|(?:PARTYBATTLE))?((?:TURN)|(?:HP)|(?:MP)|(?:STATE)|(?:PARTYLEVEL)|(?:SWITCH)|(?:VAR))((?:MIN)|(?:MAX)|(?:AVG))?/i;
  var note5 = /<(?:DROP)\s?((?:ITEM)|(?:WEAPON)|(?:ARMOR)) (\d+) (\d+)\s*(\d+(?:\.\d+)?)?>/i;
  var note5b = /<(?:DROP)\s?((?:ITEM)|(?:WEAPON)|(?:ARMOR)) (\d+) (\d+) (?:JS) (.*)\s*>/i;

  for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.enemyVariations = [];
	obj.enemyClasses = [];
	obj.enemyClassVariations = {};

	obj.extraDrops = [];

	var ecFlag = false;
	var ecFlag2 = false;

	var varIndex = -1;
	var clsIndex = -1;

	  for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			ecFlag = true;
			varIndex++;
			obj.enemyVariations[varIndex] = {};
			obj.enemyVariations[varIndex].actions = [];
			obj.enemyVariations[varIndex].extraDrops = [];
			obj.enemyVariations[varIndex].tags = [];
			obj.enemyVariations[varIndex].traits = [];
		} else if (line.match(note1b)) {
			ecFlag = false;
		} else if (line.match(note2)) {
			ecFlag2 = true;
			clsIndex = RegExp.$1;
			obj.enemyClassVariations[clsIndex] = {};
			obj.enemyClassVariations[clsIndex].actions = [];
			obj.enemyClassVariations[clsIndex].extraDrops = [];
			obj.enemyClassVariations[clsIndex].tags = [];
			obj.enemyClassVariations[clsIndex].traits = [];
		} else if (line.match(note2b)) {
			ecFlag2 = false;
		} else if (line.match(note3)) {
			obj.enemyClasses = obj.enemyClasses.concat(RegExp.$1.trim().split(/\s+/).extend().leaveNumbers());
		} else if (line.match(note4)) {
			var action = {skillId:Number(RegExp.$1), rating:Number(RegExp.$2)};
			var condition = ["turn","hp","mp","state","partylevel","switch","var"].indexOf(RegExp.$4.toLowerCase()) + 1;
			var conditionpf = ["battle","enemy","enemyself","troop","party","partybattle"].indexOf(RegExp.$3.toLowerCase()) + 1;
			var conditionsf = ["min","max","avg"].indexOf(RegExp.$5.toLowerCase());
			var array = RegExp.$6.split(' ');
			if (condition > 0 && condition < 6) {
				action.conditionType = condition;
				action.conditionParam1 = Number(array[0]);
				action.conditionParam2 = Number(array[1]);
			} else if (condition == 6) {
				action.conditionType = 6;
				action.conditionParam1 = array[0];
				action.conditionParam2 = conditionpf;
			} else if (condition == 7) {
				action.conditionType = 7;
				action.conditionParam1 = array[0];
				action.conditionParam2 = (conditionpf < 4)? conditionpf : (conditionpf - 4) * 4 + 5 + conditionsf;
				action.conditionParam3 = (array.length == 2)? 3 : (!isNaN(Number(array[1])))? Number(array[1]) : ["equal","dif","high","min","less","max"].indexOf(array[1]);
				action.conditionParam4 = (array.length == 2)? array[1] : array[2];
			}
			obj.actions.push(action);
		} else if (line.match(note4b)) {
			var action = {skillId:Number(RegExp.$1), rating:Number(RegExp.$2), conditionType:8, conditionParam1:RegExp.$3.trim()};
			obj.actions.push(action);
		} else if (line.match(note5)) {
			var drop = [];
			drop[0] = ["item","weapon","armor"].indexOf(RegExp.$1) + 1;
			drop[1] = Number(RegExp.$2);
			drop[2] = Number(RegExp.$3);
			drop[3] = Number(RegExp.$4);
			obj.extraDrops.push(drop);
		} else if (line.match(note5b)) {
			var drop = [];
			drop[0] = ["item","weapon","armor"].indexOf(RegExp.$1) + 1;
			drop[1] = Number(RegExp.$2);
			drop[2] = Number(RegExp.$3);
			drop[3] = Number("js");
			drop[4] = RegExp.$4;
			obj.extraDrops.push(drop);
		} else if (ecFlag) {
			line = line.trim().split(/\s+/);
			if (line.length > 0) {
				var command = line.shift().toLowerCase();
				if (command == "classes") {
					obj.enemyVariations[varIndex].classes = line.extend().leaveNumbers();
				} else if (command == "tag" || command == "tags") {
					obj.enemyVariations[varIndex].tags = obj.enemyVariations[varIndex].tags.concat(line);
				} else if (command == "prefix") {
					obj.enemyVariations[varIndex].prefix = line.join(' ') + ' ';
				} else if (command == "sufix") {
					obj.enemyVariations[varIndex].sufix = ' ' + line.join(' ');
				} else if (command == "dropitem") {
					var drop = [1,Number(line[0]),Number(line[1])];
					if(!isNaN(Number(line[2]))) { drop[3] = Number(line[2]); }
					else if (Number(line[2]).toLowerCase() == "js") {
						drop[3] = "js";
						line.splice(0,3);
						drop[4] = line.join(" ");
					}
					obj.enemyVariations[varIndex].extraDrops.push(drop);
				} else if (command == "dropweapon") {
					var drop = [2,Number(line[0]),Number(line[1])];
					if(!isNaN(Number(line[2]))) { drop[3] = Number(line[2]); }
					else if (Number(line[2]).toLowerCase() == "js") {
						drop[3] = "js";
						line.splice(0,3);
						drop[4] = line.join(" ");
					}
					obj.enemyVariations[varIndex].extraDrops.push(drop);
				} else if (command == "droparmor") {
					var drop = [3,Number(line[0]),Number(line[1])];
					if(!isNaN(Number(line[2]))) { drop[3] = Number(line[2]); }
					else if (Number(line[2]).toLowerCase() == "js") {
						drop[3] = "js";
						line.splice(0,3);
						drop[4] = line.join(" ");
					}
					obj.enemyVariations[varIndex].extraDrops.push(drop);
				} else if (command == "action" && line.length > 1) {
					var action = {skillId:Number(line[0]), rating:Number(line[1])};
					if (line[2] && line[2].match(note4c)) {
						var condition = ["turn","hp","mp","state","partylevel","switch","var"].indexOf(RegExp.$2.toLowerCase()) + 1;
						var conditionpf = ["battle","enemy","enemyself","troop","party","partybattle"].indexOf(RegExp.$1.toLowerCase()) + 1;
						var conditionsf = ["min","max","avg"].indexOf(RegExp.$3.toLowerCase());
						if (condition > 0 && condition < 6) {
							action.conditionType = condition;
							action.conditionParam1 = Number(line[3]);
							action.conditionParam2 = Number(line[4]);
						} else if (condition == 6) {
							action.conditionType = 6;
							action.conditionParam1 = Number(line[3]);
							action.conditionParam2 = conditionpf;
						} else if (condition == 7) {
							action.conditionType = 7;
							action.conditionParam1 = Number(line[3]);
							action.conditionParam2 = (conditionpf < 4)? conditionpf : (conditionpf - 4) * 4 + 5 + conditionsf;
							action.conditionParam3 = (line.length == 5)? 3 : (!isNaN(Number(line[4])))? Number(line[4]) : ["equal","dif","high","min","less","max"].indexOf(line[4]);
							action.conditionParam4 = (line.length == 5)? line[4] : line[5];
						}
					} else if (line[2] && line[2].toLowerCase() == "js") {
						action.conditionType = 8;
						line.splice(0,3);
						action.conditionParam1 = line.join(" ");
					}
					obj.enemyVariations[varIndex].actions.push(action);
				} else if (command == "traits") {
					for (var j = 0; j < line.length; j++) {
						obj.enemyVariations[varIndex].traits = obj.enemyVariations[varIndex].traits.concat(obj.subtraits[line[j]].traits);
					}
				} else if (line.length > 1) {
					obj.enemyVariations[varIndex][command] = line;
				} else if (line.length == 1) {
					obj.enemyVariations[varIndex][command] = line[0];
				} else if (["exp","gold","battlername","battlerhue"].indexOf(command) < 0) {
					obj.enemyVariations[varIndex][command] = true;
				}
			}
		} else if (ecFlag2) {
			line = line.trim().split(/\s+/);
			if (line.length > 0) {
				var command = line.shift().toLowerCase();
				if (command == "tag" || command == "tags") {
					obj.enemyClassVariations[clsIndex].tags = obj.enemyClassVariations[clsIndex].tags.concat(line);
				} else if (command == "action" && line.length > 1) {
					var action = {skillId:Number(line[0]), rating:Number(line[1])};
					if (line[2] && line[2].match(note4c)) {
						var condition = ["turn","hp","mp","state","partylevel","switch","var"].indexOf(RegExp.$2.toLowerCase()) + 1;
						var conditionpf = ["battle","enemy","enemyself","troop","party","partybattle"].indexOf(RegExp.$1.toLowerCase()) + 1;
						var conditionsf = ["min","max","avg"].indexOf(RegExp.$3.toLowerCase());
						if (condition > 0 && condition < 6) {
							action.conditionType = condition;
							action.conditionParam1 = Number(line[3]);
							action.conditionParam2 = Number(line[4]);
						} else if (condition == 6) {
							action.conditionType = 6;
							action.conditionParam1 = Number(line[3]);
							action.conditionParam2 = conditionpf;
						} else if (condition == 7) {
							action.conditionType = 7;
							action.conditionParam1 = Number(line[3]);
							action.conditionParam2 = (conditionpf < 4)? conditionpf : (conditionpf - 4) * 4 + 5 + conditionsf;
							action.conditionParam3 = (line.length == 5)? 3 : (!isNaN(Number(line[4])))? Number(line[4]) : ["equal","dif","high","min","less","max"].indexOf(line[4]);
							action.conditionParam4 = (line.length == 5)? line[4] : line[5];
						}
					} else if (line[2] && line[2].toLowerCase() == "js") {
						action.conditionType = 8;
						line.splice(0,3);
						action.conditionParam1 = line.join(" ");
					}
					obj.enemyClassVariations[clsIndex].actions.push(action);
				} else if (command == "dropitem") {
					var drop = [1,Number(line[0]),Number(line[1])];
					if(!isNaN(Number(line[2]))) { drop[3] = Number(line[2]); }
					else if (Number(line[2]).toLowerCase() == "js") {
						drop[3] = "js";
						line.splice(0,3);
						drop[4] = line.join(" ");
					}
					obj.enemyClassVariations[clsIndex].extraDrops.push(drop);
				} else if (command == "dropweapon") {
					var drop = [2,Number(line[0]),Number(line[1])];
					if(!isNaN(Number(line[2]))) { drop[3] = Number(line[2]); }
					else if (Number(line[2]).toLowerCase() == "js") {
						drop[3] = "js";
						line.splice(0,3);
						drop[4] = line.join(" ");
					}
					obj.enemyClassVariations[clsIndex].extraDrops.push(drop);
				} else if (command == "droparmor") {
					var drop = [3,Number(line[0]),Number(line[1])];
					if(!isNaN(Number(line[2]))) { drop[3] = Number(line[2]); }
					else if (Number(line[2]).toLowerCase() == "js") {
						drop[3] = "js";
						line.splice(0,3);
						drop[4] = line.join(" ");
					}
					obj.enemyClassVariations[clsIndex].extraDrops.push(drop);
				} else if (command == "traits") {
					for (var j = 0; j < line.length; j++) {
						obj.enemyClassVariations[clsIndex].traits = obj.enemyClassVariations[clsIndex].traits.concat(obj.subtraits[line[j]].traits);
					}
				} else if (line.length > 1) {
					obj.enemyClassVariations[clsIndex][command] = line;
				} else if (line.length == 1) {
					obj.enemyClassVariations[clsIndex][command] = line[0];
				} else {
					obj.enemyClassVariations[clsIndex][command] = true;
				}
			}
		}

	  }
  }
};

//=============================================================================
// Game_Enemy
//=============================================================================

ICF.EnemiesCore.initEnemy = Game_Enemy.prototype.initMembers;
Game_Enemy.prototype.initMembers = function() {
    ICF.EnemiesCore.initEnemy.call(this);
    this._classId = 0;
    this._variation = {};
    this._variation.traits = [];
};

ICF.EnemiesCore.setupEnemy = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
    var variations = $dataEnemies[enemyId].enemyVariations;
    if (variations.length > 1) {
	var allweight = 0;
	var selected = 0;
	for (var i = 0; i < variations.length; i++) {
		allweight += variations[i].chance || 1;
	}
	allweight = Math.random() * allweight;
	for (var i = 0; i < variations.length; i++) {
		allweight -= variations[i].chance || 1;
		if (allweight <= 0) {
			selected = i;
			break;
		}
	}
	this._variation = variations[selected];
    } else if (variations.length == 1) {
	this._variation = variations[0];
    }
    var classes = this._variation.classes || $dataEnemies[enemyId].enemyClasses;
    if (classes.length > 0) this._classId = classes[Math.floor(Math.random() * classes.length)];
    ICF.EnemiesCore.setupEnemy.call(this, enemyId, x, y);
};

ICF.EnemiesCore.makeDropItems = Game_Enemy.prototype.makeDropItems;
Game_Enemy.prototype.makeDropItems = function() {
    var drops = ICF.EnemiesCore.makeDropItems.call(this);
    var array = $dataEnemies[this._enemyId].extraDrops;
    if (this._variation.extraDrops) array = array.concat(this._variation.extraDrops);
    if (this._classId > 0 && this.classVariation()) array = array.concat(this.classVariation().extraDrops);
    for (var i = 0; i < array.length; i++) {
	if (array[i][3] == undefined) {
		for (var j = 0; j < array[i][2]; j++) {
			drops.concat(this.itemObject(array[i][0], array[i][1]));
		}
	} else if (array[i][3] == "js") {
		if (Math.random() < (eval(array[i][4]) * this.dropItemRate())) for (var j = 0; j < array[i][2]; j++) {
			drops.concat(this.itemObject(array[i][0], array[i][1]));
		}
	} else if (Math.random() < (array[i][3] * this.dropItemRate())) {
		for (var j = 0; j < array[i][2]; j++) {
			drops.concat(this.itemObject(array[i][0], array[i][1]));
		}
	}

    }
    return drops;
};

Game_Enemy.prototype.currentClass = function() {
    return $dataClasses[this._classId];
};

Game_Enemy.prototype.variation = function() {
    return this._variation;
};

Game_Enemy.prototype.classVariation = function() {
    return $dataEnemies[this._enemyId].enemyClassVariations[this._classId];
};

ICF.EnemiesCore.enemyTraits = Game_Enemy.prototype.traitObjects;
Game_Enemy.prototype.traitObjects = function() {
    return ICF.EnemiesCore.enemyTraits.call(this).concat(this._variation).concat((this._classId > 0)? $dataClasses[this._classId] : []).concat((this.classVariation())? this.classVariation() : []);
};

Game_Enemy.prototype.baseTags = function() {
    var tags = Game_BattlerBase.prototype.baseTags.call(this);
    if (this._variation.tags) tags = tags.concat(this._variation.tags);
    if (this.classVariation()) tags = tags.concat(this.classVariation().tags);
    if (this._classId > 0) tags = tags.concat(this.currentClass().tags);
    return tags;
};

Game_Enemy.prototype.allTags = function() {
    var tags = Game_BattlerBase.prototype.allTags.call(this);
    if (this._variation.tags) tags = tags.concat(this._variation.tags);
    if (this.classVariation()) tags = tags.concat(this.classVariation().tags);
    if (this._classId > 0) tags = tags.concat(this.currentClass().tags);
    return tags;
};

Game_Enemy.prototype.jsevalObjects = function() {
    var objects = [this.enemy()];
    if (this._classId > 0) objects.push($dataClasses[this._classId]);
    objects = objects.concat(Game_Battler.prototype.jsevalObjects.call(this));
    return objects.filter(function(obj) {
        return Object.keys(obj.jsreactions).length > 0;
    });
};
Game_Enemy.prototype.exp = function() {
    return this._variation.exp || this.enemy().exp;
};

Game_Enemy.prototype.gold = function() {
    return this._variation.gold || this.enemy().gold;
};

Game_Enemy.prototype.battlerName = function() {
    return this._variation.battlername || this.enemy().battlerName;
};

Game_Enemy.prototype.battlerHue = function() {
    return this._variation.battlerhue || this.enemy().battlerHue;
};

Game_Enemy.prototype.originalName = function() {
    return (this._variation.prefix ? this._variation.prefix : '') + this.enemy().name + (this._variation.sufix ? this._variation.sufix : '');
};

Game_Enemy.prototype.name = function() {
    return this.originalName() + (this._plural ? ' ' + this._letter : '');
};

Game_Enemy.prototype.meetsCondition = function(action) {
    if (!action) return false;
    var param1 = action.conditionParam1;
    var param2 = action.conditionParam2;
    var param3 = action.conditionParam3;
    var param4 = action.conditionParam4;
    switch (action.conditionType) {
    case 1:
        return this.meetsTurnCondition(param1, param2);
    case 2:
        return this.meetsHpCondition(param1, param2);
    case 3:
        return this.meetsMpCondition(param1, param2);
    case 4:
        return this.meetsStateCondition(param1);
    case 5:
        return this.meetsPartyLevelCondition(param1);
    case 6:
        return this.meetsSwitchCondition(param1, param2);
    case 7:
        return this.meetsVariableCondition(param1, param2, param3, param4);
    case 8:
        return !!eval(param1);
    default:
        return true;
    }
};

Game_Enemy.prototype.meetsSwitchCondition = function(param1, param2) {
    switch (param2) {
    case 1:
        return $gameBattleSwitches.value([0, 0, param1]);
    case 2:
        return this.battleswitch(param1);
    case 3:
        return this.selfswitch(param1);
    case 4:
        return $gameTroop.battleswitch(param1);
    case 5:
        return $gameParty.selfswitch(param1);
    case 6:
        return $gameParty.battleswitch(param1);
    default:
        return $gameSwitches.value(param1);
    }
};

Game_Enemy.prototype.meetsVariableCondition = function(param1, param2, param3, param4) {
    switch (param2) {
    case 1:
        return ICF.MainUtility.CheckVar(param3, $gameBattleVariables.strictValue([0, 0, param1]), param4);
    case 2:
        return ICF.MainUtility.CheckVar(param3, this.strictbattlevariable(param1), param4);
    case 3:
        return ICF.MainUtility.CheckVar(param3, this.strictselfvariable(param1), param4);
    case 4:
        return ICF.MainUtility.CheckVar(param3, $gameTroop.battlevariable(param1), param4);
    case 5:
        return ICF.MainUtility.CheckVar(param3, $gameTroop.minbattlevariable(param1), param4);
    case 6:
        return ICF.MainUtility.CheckVar(param3, $gameTroop.maxbattlevariable(param1), param4);
    case 7:
        return ICF.MainUtility.CheckVar(param3, $gameTroop.avgbattlevariable(param1), param4);
    case 8:
        return ICF.MainUtility.CheckVar(param3, $gameParty.selfvariable(param1), param4);
    case 9:
        return ICF.MainUtility.CheckVar(param3, $gameParty.minselfvariable(param1), param4);
    case 10:
        return ICF.MainUtility.CheckVar(param3, $gameParty.maxselfvariable(param1), param4);
    case 11:
        return ICF.MainUtility.CheckVar(param3, $gameParty.avgselfvariable(param1), param4);
    case 12:
        return ICF.MainUtility.CheckVar(param3, $gameParty.battlevariable(param1), param4);
    case 13:
        return ICF.MainUtility.CheckVar(param3, $gameParty.minbattlevariable(param1), param4);
    case 14:
        return ICF.MainUtility.CheckVar(param3, $gameParty.maxbattlevariable(param1), param4);
    case 15:
        return ICF.MainUtility.CheckVar(param3, $gameParty.avgbattlevariable(param1), param4);
    default:
        return ICF.MainUtility.CheckVar(param3, $gameVariables.value(param1), param4);
    }
};

Game_Enemy.prototype.actionList = function() {
	//?? there might no variation defined
	return this.enemy().actions.concat(this._variation.actions ? this._variation.actions:[]).
		concat((this.classVariation())? this.classVariation().actions : []);
};

Game_Enemy.prototype.makeActions = function() {
    Game_Battler.prototype.makeActions.call(this);
    if (this.numActions() > 0) {
        var actionList = this.actionList().filter(function(a) {
            return this.isActionValid(a);
        }, this);
        if (actionList.length > 0) {
            this.selectAllActions(actionList);
        }
    }
    this.setActionState('waiting');
};

//=============================================================================
// Enemies Utilities
//=============================================================================

ICF.EnemiesCore.CheckVar = function(code, value1, value2) {
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
// End of File
//=============================================================================
