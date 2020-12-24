//=============================================================================
// ICF-Soft Plugins - Skill Core
// ICFSoft_SkillCore.js
//=============================================================================

var Imported = Imported || {};
Imported.ICFSoft_SkillCore = true;

var ICF = ICF || {};
ICF.SkillCore = ICF.SkillCore || {};
ICF.NotetagsProcessor = ICF.NotetagsProcessor || {};

ICF.SkillCore.Version = 100; // 1.00

//=============================================================================
 /*:
 * @plugindesc v1.00 This plugin gives variations and custom costs to skills.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @help
 * ============================================================================
 * Introduction
 * 
 * With this plugin you can give custom costs to skills allowing to use cparams
 * as cost, plus skill use requisites.
 * Also you can give different skill variations for actors and enemies altering
 * it's cost, name, icon, damage formula, elements and effects.
 * 
 * If used with element and/or params cores it must be placed below them.
 * 
 * ============================================================================
 * How to use
 * ============================================================================
 * 
 * It work with notetags. There are the skill notetags:
 * 
 * <hp cost value value%>
 * <mp cost value value%>
 * <tp cost value value%>
 * 
 *  - Add skill costs. You can give a fixed cost, a percentage cost or both.
 * 
 * <cparam cost value value%>
 * 
 *  - Add skill cparam cost. You can use the name of cparam.
 * 
 * <custom conditions>
 * </custom conditions>
 * 
 *  - Add special conditions that must meet in addition to cost to be used.
 * 
 * You can use this commands inside tags.
 * 
 * hp [=|!=|>|>=|<|<=] value [percent]
 * mp [=|!=|>|>=|<|<=] value [percent]
 * tp [=|!=|>|>=|<|<=] value [percent]
 * cparam [=|!=|>|>=|<|<=] value [percent]
 * 
 *  - Add hp, mp, tp and cparam value requisites. It can be equal, not equal
 *    greater than, greater or equal, lower and lower or equal a value.
 *    By placing the word 'percent' or a percent symbol it can be a percentage.
 * 
 * switch n [on|off]
 * 
 *  - Add switch condition to be on or off.
 * 
 * variable n [=|!=|>|>=|<|<=] value
 * 
 *  - Add variable condition that can be equal, not equal greater than,
 *    greater or equal, lower and lower or equal a value.
 * 
 * js code
 * 
 *  - Add a custom javascript condition.
 * 
 * 
 * <skill variation name>
 * </skill variation>
 * 
 *  - Add skill variation with a name. This name is used to determine what
 *    variation is used. You can give same variation names to different
 *    skills.
 * 
 * You can use this commands inside tags.
 * 
 * hp cost x y%
 * mp cost x y%
 * tp cost x y%
 * cparam cost x y%
 * 
 *  - Changes the cost of a skill.
 * 
 * hp [damage|recover|drain]
 * mp [damage|recover|drain]
 * cparam [damage|recover|drain]
 * 
 *  - Changes damage type.
 * 
 * icon x
 * 
 *  - Changes icon.
 * 
 * elements elm elm elm
 * elements override elm elm elm
 * 
 *  - Adds damage elements to skill. By using 'override' the standard damage
 *    elements that a skill has will be overriden.
 * 
 * name
 * 
 *  - Changes skill name.
 * 
 * evalformula
 * 
 *  - Changes eval formula.
 * 
 * effects x x x x
 * 
 *  - Add subeffect sets taken from main utility notation. You can add
 *    multiple sets. Refer to main utility readme file. Example:
 *    <SUBEFFECTS MASTER>
 *    add_state 1 0.9 0
 *    <SUBEFFECTS MASTER>
 *    add_state 0 1 0
 *    remove_buff 0 0 0
 *    add_debuff 1 15 0
 *    </SUBEFFECTS MASTER>
 * 
 * 
 * 
 * There are also notetags for actors, classes and enemies:
 *
 * <skill variation names name name name name>
 * 
 *  - Adds variation names to be used. The order when picking a variation name 
 *    is from left to right, first for actor/enemy, then for it's class.
 *    It can work with plugins that give classes to enemies.
 * 
 * 
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
 * @plugindesc v1.00 Este plugin permite añadir variaciones y costes
 * personalizados a las habilidades.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @help
 * ============================================================================
 * Introducción
 * ============================================================================
 * 
 * Con este plugin puedes utilizar costes personalizados en las habilidades
 * permitiendo así usar cparams como coste, además de requisitos especiales.
 * Puedes también añadir variaciones para personajes y enemigos alterando el
 * coste, nombre, icono, fórmula de daño, elementos y efectos.
 * 
 * Si se utiliza en conjunto con element core y/o params core debe de estar por
 * debajo de ambos.
 * 
 * ============================================================================
 * Uso
 * ============================================================================
 * 
 * Funciona mediante etiquetas en las notas. las siguientes son para las
 * habilidades:
 * 
 * <hp cost value value%>
 * <mp cost value value%>
 * <tp cost value value%>
 * 
 *  - Añade costes. Puedes poner un coste fijo, porcentual o una mezcla de
 *    ambos.
 * 
 * <cparam cost value value%>
 * 
 *  - Añade costes de cparam. Se utiliza el nombre del cparam.
 * 
 * <custom conditions>
 * </custom conditions>
 * 
 *  - Añade condiciones especiales que deben cumplirse además del coste.
 * 
 * Dentro de las etiquetas puedes usar los siguientes comandos.
 * 
 * hp [=|!=|>|>=|<|<=] value [percent]
 * mp [=|!=|>|>=|<|<=] value [percent]
 * tp [=|!=|>|>=|<|<=] value [percent]
 * cparam [=|!=|>|>=|<|<=] value [percent]
 * 
 *  - Añade requisitos de hp, mp, tp y cparam. Puede ser igual, distinto,
 *    mayor, mayor o igual, menor y menor o igual a un valor.
 *    Escribiendo 'percent' o el símbolo de porcentaje se convierte en porcentual.
 * 
 * switch n [on|off]
 * 
 *  - Añade condición de interruptor que puede ser activado o desactivado.
 * 
 * variable n [=|!=|>|>=|<|<=] value
 * 
 *  - Añade una condición de variable.
 * 
 * js code
 * 
 *  - Añade una condición personalizada mediante código javascript.
 * 
 * 
 * <skill variation name>
 * </skill variation>
 * 
 *  - Añade variaciones a la habilidad y le asigna un nombre. Dicho nombre se
 *    utiliza para determinar qué variación se va a usar. Se pueden usar nombres
 *    iguales para diversas habilidades.
 * 
 * Dentro de las etiquetas puedes usar los siguientes comandos.
 * 
 * hp cost x y%
 * mp cost x y%
 * tp cost x y%
 * cparam cost x y%
 * 
 *  - Cambia el coste de la habilidad.
 * 
 * hp [damage|recover|drain]
 * mp [damage|recover|drain]
 * cparam [damage|recover|drain]
 * 
 *  - Cambia el tipo de daño.
 * 
 * icon x
 * 
 *  - Cambia el icono.
 * 
 * elements elm elm elm
 * elements override elm elm elm
 * 
 *  - Añade elementos a la habilidad. Si se utiliza la palabra 'override'
 *    los elementos propios de la habilidad serán reemplazados.
 * 
 * name
 * 
 *  - Cambia el nombre.
 * 
 * evalformula
 * 
 *  - Cambia la fórmula de daño.
 * 
 * effects x x x x
 * 
 *  - Añade conjuntos de sub-efectos de los que se crean con el main utility.
 *    Puedes añadir todos los necesarios en una linea.
 *    Puedes revisar el archivo léeme del main utility. Ejemplo:
 * 
 *    <SUBEFFECTS MASTER>
 *    add_state 1 0.9 0
 *    <SUBEFFECTS MASTER>
 *    add_state 0 1 0
 *    remove_buff 0 0 0
 *    add_debuff 1 15 0
 *    </SUBEFFECTS MASTER>
 * 
 * 
 * 
 * Además existen etiquetas para personajes, clases y enemigos:
 *
 * <skill variation names name name name name>
 * 
 *  - Añade los nombres de las variaciones que va a usar. El orden por el cual
 *    se escoge una variación es de izquierda a derecha, primero los del
 *    personaje/enemigo en cuestión, luego los de su clase. Puede funcionar con
 *    plugins que permiten clases para los enemigos.
 * 
 * 
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

ICF.Parameters = PluginManager.parameters('ICFSoft_SkillCore');
ICF.Param = ICF.Param || {};

if (!Imported.ICFSoft_ParamCore) {
	ICF.Param.NParams = [];
	ICF.Param.PParams = [];
	ICF.Param.CParams = [];
	ICF.Param.CParamsMax = [];
	ICF.Param.BParams = ["mhp", "mmp", "atk", "def", "mat", "mdf", "agi", "luk"];
	ICF.Param.XParams = ["hit", "eva", "cri", "cev", "mev", "mrf", "cnt", "hrg", "mrg", "trg"];
	ICF.Param.SParams = ["tgr", "grd", "rec", "pha", "mcr", "tcr", "pdr", "mdr", "fdr", "exr"];
	ICF.Param.CParamIcon = [];
	ICF.Param.BParamIcon = [];
	ICF.Param.TPIcon = -1;
}

if (!Imported.ICFSoft_MainUtility) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.03 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}
if (ICF.MainUtility.Version < 103) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.03 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}

//=============================================================================
// DataManager
//=============================================================================

ICF.SkillCore.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!ICF.SkillCore.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!ICF.SkillCore.Procesed) {
	ICF.NotetagsProcessor.SkillCore($dataSkills);
	ICF.NotetagsProcessor.SkillCoreB($dataActors);
	ICF.NotetagsProcessor.SkillCoreB($dataClasses);
	ICF.NotetagsProcessor.SkillCoreB($dataEnemies);
	ICF.SkillCore.Procesed = true;
    }
    return true;
};

ICF.NotetagsProcessor.SkillCore = function(group) {
	//?? allow negative cost
    var note1 = /<(?:hp cost)(?:\s+([-+]?\d+))?(?:\s+([-+]?\d+)(?:\%))?>/i;
    var note1b = /<(?:mp cost)(?:\s+([-+]?\d+))?(?:\s+([-+]?\d+)(?:\%))?>/i;
    var note1c = /<(?:tp cost)(?:\s+([-+]?\d+))?(?:\s+([-+]?\d+)(?:\%))?>/i;
    var note1d = /<(\w+) cost(?:\s+([-+]?\d+))?(?:\s+([-+]?\d+)(?:\%))?>/i;
    var note2 = /<custom conditions>/i;
    var note2b = /<\/custom conditions>/i;
    var note3 = /<skill variation[ ]+(\w+)>/i;
    var note3b = /<\/skill variation>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.hpCost = 0;
	obj.hpCostPercent = 0;
	obj.mpCostPercent = 0;
	obj.tpCostPercent = 0;
	obj.cparamCost = [];
	obj.specialConditions = [];
	obj.variations = {};

	flag1 = false;
	flag2 = false;

	vIndex = '';

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			if (!isNaN(Number(RegExp.$1))) obj.hpCost = Number(RegExp.$1);
			if (!isNaN(Number(RegExp.$2))) obj.hpCostPercent = Number(RegExp.$2) / 100;
		} else if (line.match(note1b)) {
			if (!isNaN(Number(RegExp.$1))) obj.mpCost = Number(RegExp.$1);
			if (!isNaN(Number(RegExp.$2))) obj.mpCostPercent = Number(RegExp.$2) / 100;
		} else if (line.match(note1c)) {
			if (!isNaN(Number(RegExp.$1))) obj.tpCost = Number(RegExp.$1);
			if (!isNaN(Number(RegExp.$2))) obj.tpCostPercent = Number(RegExp.$2) / 100;
		} else if (line.match(note1d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			var ary = [indx, Number(RegExp.$2) || 0, (Number(RegExp.$3) || 0) / 100];
			if (indx > -1) obj.cparamCost.push(ary);
		} else if (line.match(note2)) {
			flag1 = true;
		} else if (line.match(note2b)) {
			flag1 = false;
		} else if (line.match(note3)) {
			flag2 = true;
			vIndex = RegExp.$1;
			obj.variations[vIndex] = {};
			obj.variations[vIndex].varName = vIndex;
			obj.variations[vIndex].elements = [];
			obj.variations[vIndex].cparamCost = [];
			obj.variations[vIndex].effects = [];
		} else if (line.match(note3b)) {
			flag2 = false;
		} else if (flag1) {
			var array = line.trim().replace(/(\d+)(?:\%)/, '$1 %').split(/\s+/);
			var command = array.shift().toLowerCase();
			if (['hp','mp','tp'].contains(command)) {
				var ary = [['hp','mp','tp'].indexOf(command)];
				ary[1] = ['percent','%'].contains(array[2].toLowerCase())? 1 : 0;
				ary[2] = ['=','!=','>','>=','<','<='].indexOf(array[0].toLowerCase())? 1 : 0;
				ary[3] = Number(array[1]) / (ary[1] == 1)? 100 : 1;
				obj.specialConditions.push(ary);
			} else if (ICF.Param.CParams.contains(command)) {
				var ary = [3];
				ary[1] = [ICF.Param.CParams.indexOf(command)];
				ary[2] = ['percent','%'].contains(array[2].toLowerCase())? 1 : 0;
				ary[3] = ['=','!=','>','>=','<','<='].indexOf(array[0].toLowerCase())? 1 : 0;
				ary[4] = Number(array[1]) / (ary[2] == 1)? 100 : 1;
				obj.specialConditions.push(ary);
			} else if (command == 'switch') {
				var ary = [6];
				ary[1] = Number(array[1]);
				ary[2] = (array[2] && ['off','false'].contains(array[2].toLowerCase()))? false : true;
				obj.specialConditions.push(ary);
			} else if (command == 'variable') {
				var ary = [7];
				ary[1] = Number(array[1]);
				ary[2] = ['=','!=','>','>=','<','<='].indexOf(array[2].toLowerCase())? 1 : 0;
				ary[3] = Number(array[3]);
				obj.specialConditions.push(ary);
			} else if (command == 'js') {
				obj.specialConditions.push([8, array.join(' ')]);
			}
		} else if (flag2) {
			var array = line.trim().replace(/(\d+)(?:\%)/, '$1 %').split(/\s+/);
			var command = array.shift().toLowerCase();
			if (['hp','mp','tp'].contains(command) && array[0].toLowerCase() == "cost") {
				command = command + 'Cost';
				if (!isNaN(Number(array[1])) && !isNaN(Number(array[2])) && ['percent','%'].contains(array[3])) {
					obj.variations[vIndex][command] = Number(array[1]);
					obj.variations[vIndex][command + 'Percent'] = Number(array[2]) / 100;
				} else if (!isNaN(Number(array[1])) && ['percent','%'].contains(array[2])) {
					obj.variations[vIndex][command + 'Percent'] = Number(array[1]) / 100;
				} else if (!isNaN(Number(array[1]))) {
					obj.variations[vIndex][command] = Number(array[1]);
				}
			} else if (ICF.Param.CParams.contains(command) && array[0].toLowerCase() == "cost") {
				var ary = [ICF.Param.CParams.indexOf(command)];
				if (!isNaN(Number(array[1])) && !isNaN(Number(array[2])) && ['percent','%'].contains(array[3])) {
					ary[1] = Number(array[1]);
					ary[2] = Number(array[2]) / 100;
				} else if (!isNaN(Number(array[1])) && ['percent','%'].contains(array[2])) {
					ary[1] = 0;
					ary[2] = Number(array[1]) / 100;
				} else if (!isNaN(Number(array[1]))) {
					ary[1] = Number(array[1]);
					ary[2] = 0;
				}
				obj.variations[vIndex].cparamCost.push(ary);
			} else if (['hp','mp'].contains(command) && ['damage','recover','drain'].contains(array[0].toLowerCase())) {
				var dt = ['damage','recover','drain'].indexOf(array[0].toLowerCase()) * 2;
				dt += ['hp','mp'].indexOf(command) + 1;
				obj.variations[vIndex].itemDamageType = dt;
			} else if (ICF.Param.CParams.contains(command) && ['damage','recover','drain'].contains(array[0].toLowerCase())) {
				var dt = ['damage','recover','drain'].indexOf(array[0].toLowerCase()) * 2 + 1;
				var indx = ICF.Param.CParams.indexOf(command);
				if (indx > -1) {
					obj.variations[vIndex].itemDamageType = dt;
					obj.variations[vIndex].damageCParam = indx;
				}
			} else if (command == 'icon') {
				obj.variations[vIndex].icon = Number(array[0]);
			} else if (command == 'elements') {
				if (array[0].toLowerCase() == override) {
					array.shift();
					obj.variations[vIndex].overrideElements = true;
				}
				obj.variations[vIndex].elements = obj.variations[vIndex].elements.concat(array.extend().leaveNumbers());
			} else if (command == 'name') {
				obj.variations[vIndex].name = array.join(' ');
			} else if (command == 'evalformula') {
				obj.variations[vIndex].itemDamageFormula = array.join(' ');
			} else if (command == "effects") {
				for (var j = 0; j < line.length; j++) {
					obj.variations[vIndex].effects = obj.variations[vIndex].effects.concat(obj.subeffects[line[j]].effects);
				}
			} else if (line.length > 1) {
				obj.variations[vIndex][command] = line;
			} else if (line.length == 1) {
				obj.variations[vIndex][command] = line[0];
			} else if (["exp","gold","battlername","battlerhue"].indexOf(command) < 0) {
				obj.variations[vIndex][command] = true;
			}
		}
	}
    }
};

ICF.NotetagsProcessor.SkillCoreB = function(group) {
    var note = /<skill variation names[ ]+(\w+(?:\s+\w+)*)\s*>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.baseSkillVariations = [];

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note)) {
			obj.baseSkillVariations = obj.baseSkillVariations.concat(RegExp.$1.trim().split(/\s+/));
		}
	}
    }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.getSkillVariationNames = function() {
    return [];
};

Game_BattlerBase.prototype.getSkillVariation = function(skill) {
    if (!$dataSkills.contains(skill)) return null;
    var varNames = this.getSkillVariationNames();
    var keys = Object.keys(skill.variations);
    for (var i = 0; i < varNames.length; i++) {
	if (keys.contains(varNames[i])) return skill.variations[varNames[i]];
    }
    return null;
};

ICF.SkillCore.battler_meetsSkillConditions = Game_BattlerBase.prototype.meetsSkillConditions;
Game_BattlerBase.prototype.meetsSkillConditions = function(skill) {
    return (this.meetsSpecialSkillConditions(skill) &&
           ICF.SkillCore.battler_meetsSkillConditions.call(this, skill));
};

Game_BattlerBase.prototype.meetsSpecialSkillConditions = function(skill) {
    for (var i = 0; i < skill.specialConditions.length; i++) {
	var cond = skill.specialConditions[i];
	switch (cond[0]) {
	case 0:
	    if (cond[1] == 0 && !ICF.MainUtility.CheckVar(cond[2], this.hp, cond[3])) return false;
	    if (cond[1] == 1 && !ICF.MainUtility.CheckVar(cond[2], this.hpRate(), cond[3])) return false;
	    break;
	case 1:
	    if (cond[1] == 0 && !ICF.MainUtility.CheckVar(cond[2], this.mp, cond[3])) return false;
	    if (cond[1] == 1 && !ICF.MainUtility.CheckVar(cond[2], this.mpRate(), cond[3])) return false;
	    break;
	case 2:
	    if (cond[1] == 0 && !ICF.MainUtility.CheckVar(cond[2], this.tp, cond[3])) return false;
	    if (cond[1] == 1 && !ICF.MainUtility.CheckVar(cond[2], (this.tp / this.maxTp()), cond[3])) return false;
	    break;
	case 3:
	    var value = this.CParamValue(cond[1]) / (cond[2] == 1)? this.CParam(cond[1]) : 1;
	    if (!ICF.MainUtility.CheckVar(cond[3], value, cond[4])) return false;
	    break;
	case 6:
	    if (cond[2] != $gameSwitches.value(cond[1])) return false;
	    break;
	case 7:
	    var value = $gameVariables.value(cond[1]);
	    if (!ICF.MainUtility.CheckVar(cond[2], value, cond[3])) return false;
	    break;
	case 8:
	    if (!eval(cond[1])) return false;
	    break;
	}
    }
    return true;
};

ICF.SkillCore.battler_canPaySkillCost = Game_BattlerBase.prototype.canPaySkillCost;
Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
    return ICF.SkillCore.battler_canPaySkillCost.call(this, skill)
	&& this.canPaySkillHpCost(skill) && this.canPaySkillCParamCost(skill);
};

ICF.SkillCore.battler_paySkillCost = Game_BattlerBase.prototype.paySkillCost;
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    ICF.SkillCore.battler_paySkillCost.call(this, skill);
    this._hp -= this.skillHpCost(skill);
    for (var i = 0; i < skill.cparamCost.length; i++) {
	this._CParamValues[skill.cparamCost[i][0]] -= skill.cparamCost[i][1] + Math.floor(this.CParam(skill.cparamCost[i][0]) * skill.cparamCost[i][2]);
    }
};

Game_BattlerBase.prototype.skillMpCost = function(skill) {
    var variation = this.getSkillVariation(skill);
    var cost = skill.mpCost;
    var costPercent = skill.mpCostPercent;
    if (variation) {
	if (variation.mpCost != undefined) cost = variation.mpCost;
	if (variation.mpCostPercent != undefined) costPercent = variation.mpCostPercent;
    }
    return Math.floor((cost + costPercent * this.mmp) * this.mcr);
};

Game_BattlerBase.prototype.skillTpCost = function(skill) {
    var variation = this.getSkillVariation(skill);
    var cost = skill.tpCost;
    var costPercent = skill.tpCostPercent;
    if (variation) {
	if (variation.tpCost != undefined) cost = variation.tpCost;
	if (variation.tpCostPercent != undefined) costPercent = variation.tpCostPercent;
    }
    return cost + Math.floor(costPercent * this.maxTp());
};

Game_BattlerBase.prototype.skillHpCost = function(skill) {
    var variation = this.getSkillVariation(skill);
    var cost = skill.hpCost;
    var costPercent = skill.hpCostPercent;
    if (variation) {
	if (variation.hpCost != undefined) cost = variation.hpCost;
	if (variation.hpCostPercent != undefined) costPercent = variation.hpCostPercent;
    }
    return cost + Math.floor(costPercent * this.mhp);
};

Game_BattlerBase.prototype.canPaySkillHpCost = function(skill) {
    if (this.skillHpCost(skill) <= 0) return true;
    return this._hp > this.skillHpCost(skill);
};

Game_BattlerBase.prototype.skillCParamCost = function(skill, cparam) {
    var variation = this.getSkillVariation(skill);
    var cparamCosts = skill.cparamCost;
    if (variation) {
	if (variation.cparamCost.length > 0) cparamCosts = variation.cparamCost;
    }
    if (cparamCosts.length < 1) return 0;
    if (cparam === undefined) return cparamCosts;
    for (var i = 0; i < cparamCosts.length; i++) {
	if (cparamCosts[i][0] == cparam) return cparamCosts[i][1];
    }
    return 0;
};

Game_BattlerBase.prototype.canPaySkillCParamCost = function(skill) {
    var variation = this.getSkillVariation(skill);
    var cparamCosts = skill.cparamCost;
    if (variation) {
	if (variation.cparamCost.length > 0) cparamCosts = variation.cparamCost;
    }
    for (var i = 0; i < cparamCosts.length; i++) {
	if ((cparamCosts[i][1] + Math.floor(this.CParam(cparamCosts[i][0]) * cparamCosts[i][2])) > this.CParamValue(cparamCosts[i][0])) return false;
    }
    return true;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.getSkillVariationNames = function() {
    var varNames = $dataActors[this._actorId].baseSkillVariations.concat($dataClasses[this._classId].baseSkillVariations);
    return varNames;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.getSkillVariationNames = function() {
    var varNames = $dataEnemies[this._enemyId].baseSkillVariations;
    if (this.currentClass()) varNames = varNames.concat(this.currentClass().baseSkillVariations);
    return varNames;
};

//=============================================================================
// Game_Action
//=============================================================================

ICF.SkillCore.gameaction_init = Game_Action.prototype.initialize;
Game_Action.prototype.initialize = function(subject, forcing) {
    ICF.SkillCore.gameaction_init.call(this, subject, forcing);
    this.skillVariation = null;
    this.skillVariationName = '';
};

if (Imported.ICFSoft_ElementCore) Game_Action.prototype.getActionElements = function() {
    var elements = this.item().damage.elements;

    if (this.item().damage.elementId < 0) {
	elements = elements.concat(this.subject().attackElements());
    }

    if (this.skillVariation) {
	if (this.skillVariation.overrideElements) {
	    return this.skillVariation.elements;
	} else {
	    elements = elements.concat(this.skillVariation.elements);
	}
    }

    return elements;
};

else Game_Action.prototype.calcElementRate = function(target) {
    if (this.skillVariation) {
	if (this.skillVariation.overrideElements) {
	    return this.elementsMaxRate(target, this.skillVariation.elements);
	} else if (this.item().damage.elementId < 0) {
	    return this.elementsMaxRate(target, this.subject().attackElements().concat(this.skillVariation.elements));
	} else {
	    return this.elementsMaxRate(this.skillVariation.elements.concat([this.item().damage.elementId]));
	}
    } else if (this.item().damage.elementId < 0) {
	return this.elementsMaxRate(target, this.subject().attackElements());
    } else {
	return target.elementRate(this.item().damage.elementId);
    }
};

ICF.SkillCore.gameaction_setSkill = Game_Action.prototype.setSkill;
Game_Action.prototype.setSkill = function(skillId) {
    ICF.SkillCore.gameaction_setSkill.call(this, skillId);
    this.skillVariation = this.subject().getSkillVariation($dataSkills[skillId]);
    if (this.skillVariation) this.skillVariationName = this.skillVariation.varName;
};

ICF.SkillCore.gameaction_setItem = Game_Action.prototype.setItem;
Game_Action.prototype.setItem = function(itemId) {
    ICF.SkillCore.gameaction_setItem.call(this, itemId);
    this.skillVariation = null;
    this.skillVariationName = '';
};

ICF.SkillCore.gameaction_setItemObject = Game_Action.prototype.setItemObject;
Game_Action.prototype.setItemObject = function(object) {
    ICF.SkillCore.gameaction_setItemObject.call(this, object);
    if (this.isSkill()) {
	this.skillVariation = this.subject().getSkillVariation(object);
	if (this.skillVariation) this.skillVariationName = this.skillVariation.varName;
    } else {
	this.skillVariation = null;
	this.skillVariationName = '';
    }
};

Game_Action.prototype.CParamEffect = function() {
    if (this.skillVariation && this.skillVariation.damageCParam != undefined) return this.skillVariation.damageCParam;
    if (this.skillVariation && this.skillVariation.itemDamageType != undefined) return -1;
    return this.item().damage.cparam;
};

Game_Action.prototype.isCParamEffect = function() {
    return this.CParamEffect() > -1;
};

Game_Action.prototype.checkDamageType = function(list) {
    if (this.skillVariation && this.skillVariation.itemDamageType != undefined) return list.contains(this.skillVariation.itemDamageType);
    return list.contains(this.item().damage.type);
};

Game_Action.prototype.hasItemAnyValidEffects = function(target) {
    var itemEffects = this.item().effects;
    if (this.skillVariation) {
	if (this.skillVariation.effects != undefined) itemEffects = itemEffects.concat(this.skillVariation.effects);
    }
    return itemEffects.some(function(effect) {
        return this.testItemEffect(target, effect);
    }, this);
};
//?? conflict with yEP_BattleEngineCore because its Game_Action.apply is overwritten
ICF.temp = function(target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();
    result.used = this.testApply(target);
    result.missed = (result.used && Math.random() >= this.itemHit(target));
    result.evaded = (!result.missed && Math.random() < this.itemEva(target));
    result.physical = this.isPhysical();
    result.drain = this.isDrain();
    if (result.isHit()) {
	var damageType = this.item().damage.type;
	var itemEffects = this.item().effects;
	if (this.skillVariation) {
		if (this.skillVariation.itemDamageType != undefined) damageType = this.skillVariation.itemDamageType;
		if (this.skillVariation.effects != undefined) itemEffects = itemEffects.concat(this.skillVariation.effects);
	}
        if (damageType > 0) {
            result.critical = (Math.random() < this.itemCri(target));
            var value = this.makeDamageValue(target, result.critical);
            this.executeDamage(target, value);
        }
        itemEffects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
};

if (Imported.ICFSoft_ElementCore) ICF.ElementCore.gameaction_apply = ICF.temp;
else Game_Action.prototype.apply = ICF.temp;
ICF.temp = null;

Game_Action.prototype.evalDamageFormula = function(target) {
    try {
	var item = this.item();
	var a = this.subject();
	var b = target;
	var v = $gameVariables._data;
	var damageType = item.damage.type;
	var damageFormula = item.damage.formula;
	if (this.skillVariation) {
		if (this.skillVariation.itemDamageType != undefined) damageType = this.skillVariation.itemDamageType;
		if (this.skillVariation.itemDamageFormula != undefined) damageFormula = this.skillVariation.itemDamageFormula;
	}
	var sign = ([3, 4].contains(damageType) ? -1 : 1);
	var value = sign * eval(damageFormula) ;//Math.max(eval(damageFormula), 0) * sign;	//?? allow negative damage for lustdamage
		if (isNaN(value)) value = 0;
		return value;
    } catch (e) {
	return 0;
    }
};

/*
Game_Action.prototype.setAttack = function() {
    this.setSkill(this.subject().attackSkillId());
};

Game_Action.prototype.setGuard = function() {
    this.setSkill(this.subject().guardSkillId());
};

Game_Action.prototype.isCertainHit = function() {
    return this.item().hitType === Game_Action.HITTYPE_CERTAIN;
};

Game_Action.prototype.isPhysical = function() {
    return this.item().hitType === Game_Action.HITTYPE_PHYSICAL;
};

Game_Action.prototype.isMagical = function() {
    return this.item().hitType === Game_Action.HITTYPE_MAGICAL;
};

Game_Action.prototype.itemCnt = function(target) {
    if (this.isPhysical() && target.canMove()) {
        return target.cnt;
    } else {
        return 0;
    }
};

Game_Action.prototype.itemMrf = function(target) {
    if (this.isMagical()) {
        return target.mrf;
    } else {
        return 0;
    }
};

Game_Action.prototype.itemHit = function(target) {
    if (this.isPhysical()) {
        return this.item().successRate * 0.01 * this.subject().hit;
    } else {
        return this.item().successRate * 0.01;
    }
};

Game_Action.prototype.itemEva = function(target) {
    if (this.isPhysical()) {
        return target.eva;
    } else if (this.isMagical()) {
        return target.mev;
    } else {
        return 0;
    }
};

Game_Action.prototype.itemCri = function(target) {
    return this.item().damage.critical ? this.subject().cri * (1 - target.cev) : 0;
};

*/

//=============================================================================
// Window_SkillList
//=============================================================================

Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillHpCost(skill) > 0) {
	var icon = ICF.Param.BParamIcon[0] || -1;
	if (icon > 0) width -= 32;
	this.drawText(this._actor.skillHpCost(skill), x, y, width, 'right');
	if (icon > 0) this.drawIcon(icon, x + width + 4, y + 2);
    } else if (this._actor.skillCParamCost(skill)) {
	var cparams = skill.cparamCost;
	var variation = this._actor.getSkillVariation(skill);
	if (variation) {
		if (variation.cparamCost.length > 0) cparams = variation.cparamCost;
	}
	var cparam = cparams[0];
	var icon = ICF.Param.CParamIcon[cparam[0]] || -1;
	if (icon > 0) width -= 32;
	this.drawText(this._actor.skillCParamCost(skill, cparam[0]), x, y, width, 'right');
	if (icon > 0) this.drawIcon(icon, x + width + 4, y + 2);
    } else if (this._actor.skillTpCost(skill) > 0) {
	var icon = ICF.Param.TPIcon;
	if (icon > 0) width -= 32;
	this.changeTextColor(this.tpCostColor());
	this.drawText(this._actor.skillTpCost(skill), x, y, width, 'right');
	if (icon > 0) this.drawIcon(icon, x + width + 4, y + 2);
    } else if (this._actor.skillMpCost(skill) > 0) {
	var icon = ICF.Param.BParamIcon[1] || -1;
	if (icon > 0) width -= 32;
	this.changeTextColor(this.mpCostColor());
	this.drawText(this._actor.skillMpCost(skill), x, y, width, 'right');
	if (icon > 0) this.drawIcon(icon, x + width + 4, y + 2);
    }
};

ICF.SkillCore.windowSl_drawItemName = Window_SkillList.prototype.drawItemName;
Window_SkillList.prototype.drawItemName = function(item, x, y, width) {
    var variation = this._actor.getSkillVariation(item);
    var itm = {};
    if (variation) {
	itm.name = variation.name || item.name;
	itm.iconIndex = variation.icon || item.iconIndex;
    } else {
	itm = item;
    }
    ICF.SkillCore.windowSl_drawItemName.call(this, itm, x, y, width);
};

//=============================================================================
// Window_BattleLog
//=============================================================================

ICF.SkillCore.windowBtl_displayAction = Window_BattleLog.prototype.displayAction;
Window_BattleLog.prototype.displayAction = function(subject, item) {
    var variation = subject.getSkillVariation(item);
    var itm = {};
    if (variation) {
	itm.name = variation.name || item.name;
	itm.iconIndex = variation.icon || item.iconIndex;
    } else {
	itm = item;
    }
    ICF.SkillCore.windowBtl_displayAction.call(this, subject, itm);
};

//=============================================================================
// End of File
//=============================================================================
