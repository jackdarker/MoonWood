//=============================================================================
// ICF-Soft Plugins - Formula Shortcut
// ICFSoft_FormulaShortcut.js
//=============================================================================

var Imported = Imported || {};
Imported.ICFSoft_FormulaShortcut = true;

var ICF = ICF || {};
ICF.FormulaShortcut = ICF.FormulaShortcut || {};

ICF.FormulaShortcut.Version = 104; // 1.04

//=============================================================================
 /*:
 * @plugindesc v1.04 This plugin adds a lot of usefull shortcuts to use in
 * formulas.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * In skills and items there are fields to place a formula to determine damage
 * and heal.
 * Also is known that some plugins enables more places to put formulas like in
 * notes, comments, plugin params, etc...
 * Sometimes there isn't enough space or formulas become too complicated.
 * 
 * With this plugin you can use some shortcuts and simplify formulas to make
 * the effect you want.
 * 
 * ============================================================================
 * How to use
 * ============================================================================
 * 
 * You can use shortcuts same way as other params inside formulas:
 * 
 * highparam() lowparam()
 * 
 *  - To check best or worst param.
 * 
 * hprate() hppercent()
 * 
 *  - You can check how much is hp filled in rate (0-1) or percent (0-100).
 *    Same is aplicable for mp and tp.
 * 
 * wound() mpl() etp()
 * 
 *  - You can also check how much hp/mp are losed or tp empty.
 *    Can also check rate or percent.
 * 
 * [cparam]percent() [cparam]removed() [cparam]removedrate() [cparam]removedpercent()
 * 
 *  - You can also check how much of cparam values are losed/spent.
 *    Substitute [cparam] with the name of param counter.
 * 
 * teamhp() teamwound() allteamwound()
 * 
 *  - You can check entire team hp remain, hp loss (alive members) and all hp
 *    loss (alive and defeated ones). Also for mp and tp.
 * 
 * team[cparam]value() team[cparam]removed() allteam[cparam]removed()
 * 
 *  - You can check entire team cparam remain, loss (alive members) and all
 *    loss (alive and defeated ones).
 *    Substitute [cparam] with the name of param counter.
 * 
 * teamatk() avgatk() entireatk()
 * 
 *  - You can use the attack of the entire alive team, the average attack and
 *    the attack of the entire team (alive and defeated ones).
 *    Aplicable for def, mat, mdf, agi, luk, params created from ICFSoft
 *    Params Core and x/sparams.
 *    For cparams must be used the basic name.
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
 * Version 1.04:
 * - Complete support for all nparams, pparams and cparams.
 *
 * Version 1.03:
 * - Added support for 30 nparams and 30 pparams.
 * - 1.03b support for all nparams and pparams propertly.
 *
 * Version 1.02:
 * - Added support for overriden basic params from ICFSoft Params Core.
 *
 * Version 1.01:
 * - Added use of ICFSoft Params Core nparams and pparams.
 * - Added team sparams and xparams.
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
 * @plugindesc v1.04 Este complemento añade atajos útiles para simplificar las
 * fórmulas.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @help
 * ============================================================================
 * Introducción
 * ============================================================================
 * 
 * En las habilidades y objetos hay campos en donde poner una fórmula para
 * calcular el daño y la curación.
 * Además se sabe que hay plugins que permiten poner fórmulas en las notas,
 * comentarios, parámetros en el plugin, etc...
 * Varias veces no hay espacio suficiente o las fórmulas se complican.
 * 
 * Con este plugin puedes usar atajos y simplificar fórmulas consiguiendo el
 * efecto deseado.
 * 
 * ============================================================================
 * Uso
 * ============================================================================
 * 
 * Puedes usar los atajos del mismo modo que otros parámetros en las fórmulas:
 * 
 * highparam() lowparam()
 * 
 *  - Para usar el mejor o el peor parámetro.
 * 
 * hprate() hppercent()
 * 
 *  - Comprobar cuanta vida queda en proporción (0-1) o porcentaje (0-100).
 *    También se aplica a mp y tp.
 * 
 * wound() mpl() etp()
 * 
 *  - Además puedes comprobar cuanto hp/mp se ha perdido o tp vacío.
 *    Incluso en proporción o porcentaje.
 * 
 * [cparam]percent() [cparam]removed() [cparam]removedrate() [cparam]removedpercent()
 * 
 *  - Para comprobar cuanto cparam ha sido gastado/perdido.
 *    Sustituye [cparam] por el nombre del contador.
 * 
 * teamhp() teamwound() allteamwound()
 * 
 *  - Para comprobar cuanta hp queda a todo el equipo, el hp perdido de los que
 *    siguen en pie o el hp perdido de todos (en pie y caidos).
 *    También para mp y tp.
 * 
 * team[cparam]value() team[cparam]removed() allteam[cparam]removed()
 * 
 *  - Para comprobar cuanta cparam queda a todo el equipo, el perdido de los que
 *    siguen en pie o el perdido de todos (en pie y caidos).
 *    Sustituye [cparam] por el nombre del contador.
 * 
 * teamatk() avgatk() entireatk()
 * 
 *  - Puedes usar el ataque de todo el equipo en pie, ya media de sus ataques
 *    y el ataque de todos (en pie y caidos).
 *    También para def, mat, mdf, agi, luk, los parámetros creados con el
 *    complemento ICFSoft Params Core y los x/sparams.
 *    Para los cparams se debe usar el nombre básico.
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
 * Versión 1.04:
 * - Soporte completo para los parámetros de cada tipo que ya utiliza
 *   el ICFSoft Params Core incluidos los cparam.
 *
 * Versión 1.03:
 * - Se ha añadido soporte para los 30 parámetros de cada tipo que ya utiliza
 *   el ICFSoft Params Core.
 * - 1.03b Mejorado el soporte para todos los parámetros de cada tipo que pueden
 *   crearse actualmente.
 *
 * Versión 1.02:
 * - Se ha añadido soporte para los parámetros sobreescritos en ICFSoft Params Core.
 *
 * Versión 1.01:
 * - Se ha añadido el uso de los nparams y pparams del ICFSoft Params Core.
 * - Se ha añadido el uso de sparams y xparams.
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
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.highparam = function() {
    return Math.max(this.param(2),this.param(3),this.param(4),this.param(5),this.param(6),this.param(7));
};

Game_BattlerBase.prototype.lowparam = function() {
    return Math.min(this.param(2),this.param(3),this.param(4),this.param(5),this.param(6),this.param(7));
};

Game_BattlerBase.prototype.hprate = function() {
    return this.hp / this.mhp;
};

Game_BattlerBase.prototype.hppercent = function() {
    return Math.floor(100 * this.hp / this.mhp);
};

Game_BattlerBase.prototype.wound = function() {
    return this.mhp - this.hp;
};

Game_BattlerBase.prototype.woundrate = function() {
    return 1 - (this.hp / this.mhp);
};

Game_BattlerBase.prototype.woundpercent = function() {
    return 100 - Math.floor(100 * this.hp / this.mhp);
};

Game_BattlerBase.prototype.mprate = function() {
    return this.mp / this.mmp;
};

Game_BattlerBase.prototype.mppercent = function() {
    return Math.floor(100 * this.mp / this.mmp);
};

Game_BattlerBase.prototype.mpl = function() {
    return this.mmp - this.mp;
};

Game_BattlerBase.prototype.mplrate = function() {
    return 1 - (this.mp / this.mmp);
};

Game_BattlerBase.prototype.mplpercent = function() {
    return 100 - Math.floor(100 * this.mp / this.mmp);
};

Game_BattlerBase.prototype.tprate = function() {
    return this.tp / this.maxTp();
};

Game_BattlerBase.prototype.tppercent = function() {
    return Math.floor(100 * this.tp / this.maxTp());
};

Game_BattlerBase.prototype.etp = function() {
    return this.maxTp() - this.tp;
};

Game_BattlerBase.prototype.etprate = function() {
    return 1 - (this.tp / this.maxTp());
};

Game_BattlerBase.prototype.etppercent = function() {
    return 100 - Math.floor(100 * this.tp / this.maxTp());
};

Game_BattlerBase.prototype.teamparam = function(paramid) {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.param(paramid);
    }, 0);
};

Game_BattlerBase.prototype.avgparam = function(paramid) {
    var ary = this.friendsUnit().aliveMembers();
    return ary.reduce(function(r, battler) {
		return r + battler.param(paramid);
    }, 0) / ary.length;
};

Game_BattlerBase.prototype.entireparam = function(paramid) {
    return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.param(paramid);
    }, 0);
};

Game_BattlerBase.prototype.teamhp = function() {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.hp;
    }, 0);
};

Game_BattlerBase.prototype.teamwound = function() {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.mhp - battler.hp;
    }, 0);
};

Game_BattlerBase.prototype.allteamwound = function() {
    return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.mhp - battler.hp;
    }, 0);
};

Game_BattlerBase.prototype.teammp = function() {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.mp;
    }, 0);
};

Game_BattlerBase.prototype.teammpl = function() {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.mmp - battler.mp;
    }, 0);
};

Game_BattlerBase.prototype.allteammpl = function() {
    return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.mmp - battler.mp;
    }, 0);
};

Game_BattlerBase.prototype.teamtp = function() {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.tp;
    }, 0);
};

Game_BattlerBase.prototype.teametp = function() {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.maxTp() - battler.tp;
    }, 0);
};

Game_BattlerBase.prototype.allteametp = function() {
    return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.maxTp() - battler.tp;
    }, 0);
};

Game_BattlerBase.prototype.teammhp = function() {
    return this.teamparam(0);
};

Game_BattlerBase.prototype.teammmp = function() {
    return this.teamparam(1);
};
Game_BattlerBase.prototype.teamatk = function() {
    return this.teamparam(2);
};

Game_BattlerBase.prototype.teamdef = function() {
    return this.teamparam(3);
};

Game_BattlerBase.prototype.teammat = function() {
    return this.teamparam(4);
};

Game_BattlerBase.prototype.teammdf = function() {
    return this.teamparam(5);
};

Game_BattlerBase.prototype.teamagi = function() {
    return this.teamparam(6);
};

Game_BattlerBase.prototype.teamluk = function() {
    return this.teamparam(7);
};

Game_BattlerBase.prototype.avgmhp = function() {
    return this.avgparam(0);
};

Game_BattlerBase.prototype.avgmmp = function() {
    return this.avgparam(1);
};

Game_BattlerBase.prototype.avgatk = function() {
    return this.avgparam(2);
};

Game_BattlerBase.prototype.avgdef = function() {
    return this.avgparam(3);
};

Game_BattlerBase.prototype.avgmat = function() {
    return this.avgparam(4);
};

Game_BattlerBase.prototype.avgmdf = function() {
    return this.avgparam(5);
};

Game_BattlerBase.prototype.avgagi = function() {
    return this.avgparam(6);
};

Game_BattlerBase.prototype.avgluk = function() {
    return this.avgparam(7);
};

Game_BattlerBase.prototype.entiremhp = function() {
    return this.entireparam(0);
};

Game_BattlerBase.prototype.entiremmp = function() {
    return this.entireparam(1);
};

Game_BattlerBase.prototype.entireatk = function() {
    return this.entireparam(2);
};

Game_BattlerBase.prototype.entiredef = function() {
    return this.entireparam(3);
};

Game_BattlerBase.prototype.entiremat = function() {
    return this.entireparam(4);
};

Game_BattlerBase.prototype.entiremdf = function() {
    return this.entireparam(5);
};

Game_BattlerBase.prototype.entireagi = function() {
    return this.entireparam(6);
};

Game_BattlerBase.prototype.entireluk = function() {
    return this.entireparam(7);
};

Game_BattlerBase.prototype.teamxparam = function(paramid) {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.xparam(paramid);
    }, 0);
};

Game_BattlerBase.prototype.avgxparam = function(paramid) {
    var ary = this.friendsUnit().aliveMembers();
    return ary.reduce(function(r, battler) {
		return r + battler.xparam(paramid);
    }, 0) / ary.length;
};

Game_BattlerBase.prototype.entirexparam = function(paramid) {
    return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.xparam(paramid);
    }, 0);
};

Game_BattlerBase.prototype.teamhit = function() {
    return this.teamxparam(0);
};

Game_BattlerBase.prototype.teameva = function() {
    return this.teamxparam(1);
};

Game_BattlerBase.prototype.teamcri = function() {
    return this.teamxparam(2);
};

Game_BattlerBase.prototype.teamcev = function() {
    return this.teamxparam(3);
};

Game_BattlerBase.prototype.teammev = function() {
    return this.teamxparam(4);
};

Game_BattlerBase.prototype.teammrf = function() {
    return this.teamxparam(5);
};

Game_BattlerBase.prototype.teamcnt = function() {
    return this.teamxparam(6);
};

Game_BattlerBase.prototype.teamhrg = function() {
    return this.teamxparam(7);
};

Game_BattlerBase.prototype.teammrg = function() {
    return this.teamxparam(8);
};

Game_BattlerBase.prototype.teamtrg = function() {
    return this.teamxparam(9);
};

Game_BattlerBase.prototype.avghit = function() {
    return this.avgxparam(0);
};

Game_BattlerBase.prototype.avgeva = function() {
    return this.avgxparam(1);
};

Game_BattlerBase.prototype.avgcri = function() {
    return this.avgxparam(2);
};

Game_BattlerBase.prototype.avgcev = function() {
    return this.avgxparam(3);
};

Game_BattlerBase.prototype.avgmev = function() {
    return this.avgxparam(4);
};

Game_BattlerBase.prototype.avgmrf = function() {
    return this.avgxparam(5);
};

Game_BattlerBase.prototype.avgcnt = function() {
    return this.avgxparam(6);
};

Game_BattlerBase.prototype.avghrg = function() {
    return this.avgxparam(7);
};

Game_BattlerBase.prototype.avgmrg = function() {
    return this.avgxparam(8);
};

Game_BattlerBase.prototype.avgtrg = function() {
    return this.avgxparam(9);
};

Game_BattlerBase.prototype.entirehit = function() {
    return this.entirexparam(0);
};

Game_BattlerBase.prototype.entireeva = function() {
    return this.entirexparam(1);
};

Game_BattlerBase.prototype.entirecri = function() {
    return this.entirexparam(2);
};

Game_BattlerBase.prototype.entirecev = function() {
    return this.entirexparam(3);
};

Game_BattlerBase.prototype.entiremev = function() {
    return this.entirexparam(4);
};

Game_BattlerBase.prototype.entiremrf = function() {
    return this.entirexparam(5);
};

Game_BattlerBase.prototype.entirecnt = function() {
    return this.entirexparam(6);
};

Game_BattlerBase.prototype.entirehrg = function() {
    return this.entirexparam(7);
};

Game_BattlerBase.prototype.entiremrg = function() {
    return this.entirexparam(8);
};

Game_BattlerBase.prototype.entiretrg = function() {
    return this.entirexparam(9);
};

Game_BattlerBase.prototype.teamsparam = function(paramid) {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.sparam(paramid) - 1;
    }, 1);
};

Game_BattlerBase.prototype.avgsparam = function(paramid) {
    return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r * battler.sparam(paramid);
    }, 1);
};

Game_BattlerBase.prototype.entiresparam = function(paramid) {
    return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.sparam(paramid) - 1;
    }, 1);
};

Game_BattlerBase.prototype.teamtgr = function() {
    return this.teamsparam(0);
};

Game_BattlerBase.prototype.teamgrd = function() {
    return this.teamsparam(1);
};

Game_BattlerBase.prototype.teamrec = function() {
    return this.teamsparam(2);
};

Game_BattlerBase.prototype.teampha = function() {
    return this.teamsparam(3);
};

Game_BattlerBase.prototype.teammcr = function() {
    return this.teamsparam(4);
};

Game_BattlerBase.prototype.teamtcr = function() {
    return this.teamsparam(5);
};

Game_BattlerBase.prototype.teampdr = function() {
    return this.teamsparam(6);
};

Game_BattlerBase.prototype.teammdr = function() {
    return this.teamsparam(7);
};

Game_BattlerBase.prototype.teamfdr = function() {
    return this.teamsparam(8);
};

Game_BattlerBase.prototype.teamexr = function() {
    return this.teamsparam(9);
};

Game_BattlerBase.prototype.avgtgr = function() {
    return this.avgsparam(0);
};

Game_BattlerBase.prototype.avggrd = function() {
    return this.avgsparam(1);
};

Game_BattlerBase.prototype.avgrec = function() {
    return this.avgsparam(2);
};

Game_BattlerBase.prototype.avgpha = function() {
    return this.avgsparam(3);
};

Game_BattlerBase.prototype.avgmcr = function() {
    return this.avgsparam(4);
};

Game_BattlerBase.prototype.avgtcr = function() {
    return this.avgsparam(5);
};

Game_BattlerBase.prototype.avgpdr = function() {
    return this.avgsparam(6);
};

Game_BattlerBase.prototype.avgmdr = function() {
    return this.avgsparam(7);
};

Game_BattlerBase.prototype.avgfdr = function() {
    return this.avgsparam(8);
};

Game_BattlerBase.prototype.avgexr = function() {
    return this.avgsparam(9);
};

Game_BattlerBase.prototype.entiretgr = function() {
    return this.entiresparam(0);
};

Game_BattlerBase.prototype.entiregrd = function() {
    return this.entiresparam(1);
};

Game_BattlerBase.prototype.entirerec = function() {
    return this.entiresparam(2);
};

Game_BattlerBase.prototype.entirepha = function() {
    return this.entiresparam(3);
};

Game_BattlerBase.prototype.entiremcr = function() {
    return this.entiresparam(4);
};

Game_BattlerBase.prototype.entiretcr = function() {
    return this.entiresparam(5);
};

Game_BattlerBase.prototype.entirepdr = function() {
    return this.entiresparam(6);
};

Game_BattlerBase.prototype.entiremdr = function() {
    return this.entiresparam(7);
};

Game_BattlerBase.prototype.entirefdr = function() {
    return this.entiresparam(8);
};

Game_BattlerBase.prototype.entireexr = function() {
    return this.entiresparam(9);
};

if (Imported.ICFSoft_ParamCore) {

    Game_BattlerBase.prototype.teamnparam = function(paramid) {
	return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.NParam(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.avgnparam = function(paramid) {
	var ary = this.friendsUnit().aliveMembers();
	return ary.reduce(function(r, battler) {
		return r + battler.NParam(paramid);
	}, 0) / ary.length;
    };

    Game_BattlerBase.prototype.entirenparam = function(paramid) {
	return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.NParam(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.teampparam = function(paramid) {
	return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.PParam(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.avgpparam = function(paramid) {
	var ary = this.friendsUnit().aliveMembers();
	return ary.reduce(function(r, battler) {
		return r + battler.PParam(paramid);
	}, 0) / ary.length;
    };

    Game_BattlerBase.prototype.entirepparam = function(paramid) {
	return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.PParam(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.cparampercent = function(paramid) {
	return Math.floor(100 * this.CParamValue(paramid) / this.CParam(paramid));
    };

    Game_BattlerBase.prototype.cparamremoved = function(paramid) {
	return this.CParam(paramid) - this.CParamValue(paramid);
    };

    Game_BattlerBase.prototype.cparamremovedrate = function(paramid) {
	return 1 - (this.CParamValue(paramid) / this.CParam(paramid));
    };

    Game_BattlerBase.prototype.cparamremovedpercent = function(paramid) {
	return 100 - Math.floor(100 * this.CParamValue(paramid) / this.CParam(paramid));
    };

    Game_BattlerBase.prototype.teamcparamvalue = function(paramid) {
	return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.CParamValue(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.teamcparamremoved = function(paramid) {
	return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.CParam(paramid) - battler.CParamValue(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.allteamcparamremoved = function(paramid) {
	return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.CParam(paramid) - battler.CParamValue(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.teamcparam = function(paramid) {
	return this.friendsUnit().aliveMembers().reduce(function(r, battler) {
		return r + battler.CParam(paramid);
	}, 0);
    };

    Game_BattlerBase.prototype.avgcparam = function(paramid) {
	var ary = this.friendsUnit().aliveMembers();
	return ary.reduce(function(r, battler) {
		return r + battler.CParam(paramid);
	}, 0) / ary.length;
    };

    Game_BattlerBase.prototype.entirecparam = function(paramid) {
	return this.friendsUnit().members().reduce(function(r, battler) {
		return r + battler.CParam(paramid);
	}, 0);
    };

    for (var i = 0; i < ICF.Param.NParams.length; i++) {
	if (ICF.Param.NParams[i].length > 0) {
		eval("Game_BattlerBase.prototype.team" + ICF.Param.NParams[i] + " = function() { return this.teamnparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.avg" + ICF.Param.NParams[i] + " = function() { return this.avgnparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.entire" + ICF.Param.NParams[i] + " = function() { return this.entirenparam(" + i + ");};");
	}
    }

    for (var i = 0; i < ICF.Param.PParams.length; i++) {
	if (ICF.Param.PParams[i].length > 0) {
		eval("Game_BattlerBase.prototype.team" + ICF.Param.PParams[i] + " = function() { return this.teampparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.avg" + ICF.Param.PParams[i] + " = function() { return this.avgpparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.entire" + ICF.Param.PParams[i] + " = function() { return this.entirepparam(" + i + ");};");
	}
    }

    for (var i = 0; i < ICF.Param.CParams.length; i++) {
	if (ICF.Param.CParams[i].length > 0) {
		eval("Game_BattlerBase.prototype." + ICF.Param.CParams[i] + "percent = function() { return this.cparampercent(" + i + ");};");
		eval("Game_BattlerBase.prototype." + ICF.Param.CParams[i] + "removed = function() { return this.cparamremoved(" + i + ");};");
		eval("Game_BattlerBase.prototype." + ICF.Param.CParams[i] + "removedrate = function() { return this.cparamremovedrate(" + i + ");};");
		eval("Game_BattlerBase.prototype." + ICF.Param.CParams[i] + "removedpercent = function() { return this.cparamremovedpercent(" + i + ");};");
		eval("Game_BattlerBase.prototype.team" + ICF.Param.CParams[i] + "value = function() { return this.teamcparamvalue(" + i + ");};");
		eval("Game_BattlerBase.prototype.team" + ICF.Param.CParams[i] + "removed = function() { return this.teamcparamremoved(" + i + ");};");
		eval("Game_BattlerBase.prototype.allteam" + ICF.Param.CParams[i] + "removed = function() { return this.allteamcparamremoved(" + i + ");};");
	}
    }

    for (var i = 0; i < ICF.Param.CParamsMax.length; i++) {
	if (ICF.Param.CParamsMax[i].length > 0) {
		eval("Game_BattlerBase.prototype.team" + ICF.Param.CParamsMax[i] + " = function() { return this.teamcparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.avg" + ICF.Param.CParamsMax[i] + " = function() { return this.avgcparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.entire" + ICF.Param.CParamsMax[i] + " = function() { return this.entirecparam(" + i + ");};");
	}
    }

    for (var i = 0; i < 8; i++) {
	if (ICF.Param.BParams[i].length > 0) {
		eval("Game_BattlerBase.prototype.team" + ICF.Param.BParams[i] + " = function() { return this.teamparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.avg" + ICF.Param.BParams[i] + " = function() { return this.avgparam(" + i + ");};");
		eval("Game_BattlerBase.prototype.entire" + ICF.Param.BParams[i] + " = function() { return this.entireparam(" + i + ");};");
	}
    }
}

//=============================================================================
// End of File
//=============================================================================
