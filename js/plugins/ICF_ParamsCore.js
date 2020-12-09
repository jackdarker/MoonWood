//=============================================================================
// ICF-Soft Plugins - Params Core
// ICFSoft_ParamsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.ICFSoft_ParamCore = true;

var ICF = ICF || {};
ICF.ParamCore = ICF.ParamCore || {};
ICF.NotetagsProcessor = ICF.NotetagsProcessor || {};

ICF.ParamCore.Version = 109; // 1.09

//=============================================================================
 /*:
 * @plugindesc v1.09c This plugin allow to add new full custom params and 
 * more basic and x/sparam control.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @param NParams
 * @desc Create NParams here.
 * @type struct<NormalParams>[]
 * @default ["{\"Name\":\"\",\"Full Name\":\"\",\"Icon\":\"0\",\"Base\":\"30 15\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Color\":\"\",\"Limits\":\"(this.isActor())? [0, 999, 1200] : [0, 999, 1200]\",\"Buff Icons\":\"\",\"Debuff Icons\":\"\"}"]
 *
 * @param PParams
 * @desc Create PParams here.
 * @type struct<PlainParams>[]
 * @default ["{\"Name\":\"\",\"Full Name\":\"\",\"Base\":\"0\",\"Limits\":\"(this.isActor())? [0, 999] : [0, 999]\"}"]
 *
 * @param CParams
 * @desc Create CParams here.
 * @type struct<CountingParams>[]
 * @default ["{\"Name Basic\":\"\",\"Full Name Basic\":\"\",\"Name Counter\":\"\",\"Full Name Counter\":\"\",\"Abreviation\":\"\",\"Icon\":\"0\",\"Damage Icon\":\"0\",\"Restore Icon\":\"0\",\"Base\":\"30 15\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Reset Type\":\"1\",\"Reset Value\":\"1\",\"Color1\":\"\",\"Color2\":\"\",\"Limits\":\"(this.isActor())? [0, 999, 1200] : [0, 999, 1200]\",\"Buff Icons\":\"\",\"Debuff Icons\":\"\"}"]
 *
 * @param BParams
 * @desc Edit BParams here. Don't add or delete BParams.
 * @type struct<BaseParams>[]
 * @default ["{\"Name\":\"mhp\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 9999, 12000] : [1, 999999, 1200000]\",\"Buff Icons\":\"32 40\",\"Debuff Icons\":\"48 56\"}","{\"Name\":\"mmp\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"33 41\",\"Debuff Icons\":\"49 57\"}","{\"Name\":\"atk\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"34 42\",\"Debuff Icons\":\"50 58\"}","{\"Name\":\"def\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"35 43\",\"Debuff Icons\":\"51 59\"}","{\"Name\":\"mat\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"36 44\",\"Debuff Icons\":\"52 60\"}","{\"Name\":\"mdf\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"37 45\",\"Debuff Icons\":\"53 61\"}","{\"Name\":\"agi\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"38 46\",\"Debuff Icons\":\"54 62\"}","{\"Name\":\"luk\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"39 47\",\"Debuff Icons\":\"55 63\"}"]
 *
 * @param XParams
 * @desc Edit XParams here. Don't add or delete XParams.
 * @type struct<ExtraParams>[]
 * @default ["{\"Full Name\":\"Hit rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Evasion rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Critical rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Critical evasion rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Magic evasion rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Magic reflection rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Counter-attack rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Hp-regen rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Mp-regen rate\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Tp-regen rate\",\"Icon\":\"0\",\"Base\":\"0\"}"]
 *
 * @param SParams
 * @desc Edit SParams here. Don't add or delete SParams.
 * @type struct<SpecialParams>[]
 * @default ["{\"Full Name\":\"Targeted rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Guard rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Recovery rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Pharmacology\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Mp cost rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Tp cost rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Phisical damage rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Magical damage rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Floor damage rate\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Experience rate\",\"Icon\":\"0\",\"Base\":\"1\"}"]
 *
 * @param Default Valid CParams
 * @desc Determine what cparam results can be visible in battle by default separated by spaces. See help.
 * @default none
 *
 * @param Default Main CParams
 * @desc Determine what cparam results are important in battle by default separated by spaces. See help.
 * @default none
 *
 * @param Max Buff
 * @desc How many buffs can be stacked for every param.
 * @default 2
 *
 * @param Max Debuff
 * @desc How many debuffs can be stacked for every param.
 * @default 2
 *
 * @param Buff Strength
 * @desc How many percentage is added to param for every buff stacked.
 * @default 0.25
 *
 * @param Debuff Strength
 * @desc How many percentage is removed to param for every buff stacked.
 * @default 0.25
 *
 * @param Use Damage Icons
 * @desc Use icons in damage popups for hp, mp and tp. Icons for cparams are used anyway.
 * @default true
 *
 * @param HP Damage Icon
 * @desc Icon used for hp damage popups.
 * @default 0
 *
 * @param HP Recover Icon
 * @desc Icon used for hp recover popups.
 * @default 0
 *
 * @param MP Damage Icon
 * @desc Icon used for mp damage popups.
 * @default 0
 *
 * @param MP Recover Icon
 * @desc Icon used for mp recover popups.
 * @default 0
 *
 * @param TP Damage Icon
 * @desc Icon used for tp damage popups.
 * @default 0
 *
 * @param TP Recover Icon
 * @desc Icon used for tp recover popups.
 * @default 0
 *
 * @param BParam0 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default mhp
 *
 * @param BParam0 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam0 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam0 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam0 Limits
 * @desc Formula for min and max value for this param. See help.
 * Hit points
 * @default (this.isActor())? [1, 9999, 12000] : [1, 999999, 1200000]
 *
 * @param BParam0 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 32 40
 *
 * @param BParam0 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 48 56
 *
 * @param BParam1 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default mmp
 *
 * @param BParam1 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam1 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam1 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam1 Limits
 * @desc Formula for min and max value for this param. See help.
 * Magic points
 * @default (this.isActor())? [0, 9999, 12000] : [0, 9999, 12000]
 *
 * @param BParam1 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 33 41
 *
 * @param BParam1 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 49 57
 *
 * @param BParam2 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default atk
 *
 * @param BParam2 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam2 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam2 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam2 Limits
 * @desc Formula for min and max value for this param. See help.
 * Attack
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam2 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 34 42
 *
 * @param BParam2 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 50 58
 *
 * @param BParam3 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default def
 *
 * @param BParam3 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam3 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam3 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam3 Limits
 * @desc Formula for min and max value for this param. See help.
 * Defense
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam3 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 35 43
 *
 * @param BParam3 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 51 59
 *
 * @param BParam4 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default mat
 *
 * @param BParam4 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam4 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam4 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam4 Limits
 * @desc Formula for min and max value for this param. See help.
 * Magic attack
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam4 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 36 44
 *
 * @param BParam4 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 52 60
 *
 * @param BParam5 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default mdf
 *
 * @param BParam5 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam5 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam5 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam5 Limits
 * @desc Formula for min and max value for this param. See help.
 * Magic defense
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam5 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 37 45
 *
 * @param BParam5 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 53 61
 *
 * @param BParam6 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default agi
 *
 * @param BParam6 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam6 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam6 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam6 Limits
 * @desc Formula for min and max value for this param. See help.
 * Agility
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam6 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 38 46
 *
 * @param BParam6 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 54 62
 *
 * @param BParam7 Name
 * @desc Alias for this basic param. You can redefine it.
 * @default luk
 *
 * @param BParam7 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param BParam7 Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param BParam7 Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param BParam7 Limits
 * @desc Formula for min and max value for this param. See help.
 * Luck
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam7 Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 39 47
 *
 * @param BParam7 Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 55 63
 *
 * @param TP Base
 * @desc Formula for tp base value.
 * @default 100
 *
 * @param TP Limits
 * @desc Formula for min and max tp values. See help.
 * @default (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * @param TP Icon
 * @desc An icon for TP.
 * @default 0
 *
 * @param XParam0 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Hit rate
 *
 * @param XParam0 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam0 Base
 * @desc Formula for base value for x param hit (HIT rate).
 * @default 0
 *
 * @param XParam1 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Evasion rate
 *
 * @param XParam1 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam1 Base
 * @desc Formula for base value for x param eva (EVAsion rate).
 * @default 0
 *
 * @param XParam2 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Critical rate
 *
 * @param XParam2 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam2 Base
 * @desc Formula for base value for x param cri (CRItical rate).
 * @default 0
 *
 * @param XParam3 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Critical evasion rate
 *
 * @param XParam3 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam3 Base
 * @desc Formula for base value for x param cev (Critical Evasion Rate).
 * @default 0
 *
 * @param XParam4 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Magic evasion rate
 *
 * @param XParam4 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam4 Base
 * @desc Formula for base value for x param mev (Magic EVasion rate).
 * @default 0
 *
 * @param XParam5 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Magic reflection rate
 *
 * @param XParam5 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam5 Base
 * @desc Formula for base value for x param mrf (Magic ReFlection rate).
 * @default 0
 *
 * @param XParam6 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Counter-attack rate
 *
 * @param XParam6 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam6 Base
 * @desc Formula for base value for x param cnt (CouNTer attack rate).
 * @default 0
 *
 * @param XParam7 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Hp-regen rate
 *
 * @param XParam7 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam7 Base
 * @desc Formula for base value for x param hrg (Hp ReGeneration rate).
 * @default 0
 *
 * @param XParam8 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Mp-regen rate
 *
 * @param XParam8 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam8 Base
 * @desc Formula for base value for x param mrg (Mp ReGeneration rate).
 * @default 0
 *
 * @param XParam9 Full Name
 * @desc Name that will be shown for this extra param.
 * @default Tp-regen rate
 *
 * @param XParam9 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param XParam9 Base
 * @desc Formula for base value for x param trg (Tp ReGeneration rate).
 * @default 0
 *
 * @param SParam0 Full Name
 * @desc Name that will be shown for this special param.
 * @default Targeted rate
 *
 * @param SParam0 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam0 Base
 * @desc Formula for base value for x param tgr (TarGet Rate).
 * @default 1
 *
 * @param SParam1 Full Name
 * @desc Name that will be shown for this special param.
 * @default Guard rate
 *
 * @param SParam1 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam1 Base
 * @desc Formula for base value for s param grd (GuaRD effect rate).
 * @default 1
 *
 * @param SParam2 Full Name
 * @desc Name that will be shown for this special param.
 * @default Recovery rate
 *
 * @param SParam2 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam2 Base
 * @desc Formula for base value for s param rec (RECovery effect rate).
 * @default 1
 *
 * @param SParam3 Full Name
 * @desc Name that will be shown for this special param.
 * @default Pharmacology
 *
 * @param SParam3 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam3 Base
 * @desc Formula for base value for s param pha (PHArmacology).
 * @default 1
 *
 * @param SParam4 Full Name
 * @desc Name that will be shown for this special param.
 * @default Mp cost rate
 *
 * @param SParam4 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam4 Base
 * @desc Formula for base value for s param mcr (Mp Cost Rate).
 * @default 1
 *
 * @param SParam5 Full Name
 * @desc Name that will be shown for this special param.
 * @default Tp cost rate
 *
 * @param SParam5 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam5 Base
 * @desc Formula for base value for s param tcr (Tp Cost Rate).
 * @default 1
 *
 * @param SParam6 Full Name
 * @desc Name that will be shown for this special param.
 * @default Phisical damage rate
 *
 * @param SParam6 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam6 Base
 * @desc Formula for base value for s param pdr (Physical Damage Rate).
 * @default 1
 *
 * @param SParam7 Full Name
 * @desc Name that will be shown for this special param.
 * @default Magical damage rate
 *
 * @param SParam7 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam7 Base
 * @desc Formula for base value for s param mdr (Magical Damage Rate).
 * @default 1
 *
 * @param SParam8 Full Name
 * @desc Name that will be shown for this special param.
 * @default Floor damage rate
 *
 * @param SParam8 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam8 Base
 * @desc Formula for base value for s param fdr (Floor Damage Rate).
 * @default 1
 *
 * @param SParam9 Full Name
 * @desc Name that will be shown for this special param.
 * @default Experience rate
 *
 * @param SParam9 Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param SParam9 Base
 * @desc Formula for base value for s param exr (EXperience Rate).
 * @default 1
 *
 * @param Developer HaltJS
 * @desc When true it throws an error if a custom class param/nparam
 * javascript doesn't work.   NO - false     YES - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * 
 * By default there are some fixed types of params, there are usefull but
 * have specified purposes and limits the way you can use them.
 * 
 * [Note regarding BParams, XParams and SParams]
 * In next version these params will be managed like the other param types to
 * make them more easily to manage features. Old system will be removed.
 * If you didn't edited these params you can skip this note.
 * 
 * If you edited these params you can save them to the new system. Just open
 * developer console, copy the text below each type and paste as text to
 * specified plugin parameters.
 * [End of note]
 * 
 * With this plugin you can add new params that can be used in your formulas
 * and every use you can imagine.
 * 
 * There are 3 new param types:
 *  -New/Normal Params: Level based params like the default ones,
 *   with buff/debuff effects and trait modifiers.
 *   Plus an option that can be used in some enemy levels plugins.
 * 
 *  -Plain Params: Non level based params, these work as x/sparams
 *   with trait modifiers.
 * 
 *  -Counting Params: similar to nparams, these work as counters like hp, mp
 *   and tp. There are a name for current value and a name for max value.
 * 
 * Now there are more customization and control for basic, tp, x and s params.
 * And a new double cap feature.
 * 
 * ============================================================================
 * How to use
 * ============================================================================
 * 
 * NParams, CParams and PParams are calculated with their respective formulas:
 * 
 * NParam = (Base + Plus) * Rate * XRate * Buff + Flat + XFlat
 * CParam = (Base + Plus) * Rate * XRate * Buff + Flat + XFlat
 * PParam = (Base + Plus) * Rate + Flat
 * 
 *   -Base is different for n and pparams. For NParams is a level based value.
 *    For PParam is a fixed value used to emulate x/sparams (0 and 1).
 *   -Plus is the sum of all plus traits attached to a battler. In case of
 *    NParam there is an extra added by script calls and item effects.
 *   -Rate is the product of all trait multipliers attached to a battler.
 *   -XRate is the product of all trait x-multipliers attached to a battler.
 *   -Buff is de effect of buff/debuff.
 *   -Flat is the sum of all flat trais attached to a battler. It isn't affected
 *    by any rate.
 *   -XFlat is the sum of all x-flat trais attached to a battler. It isn't affected
 *    by any rate.
 * 
 * XRate, XFlat and Buff can make param to pass througth first max cap.
 * 
 * To make default params more customizable I've changed a little
 * their formulas:
 * 
 * Param  = (Base + Plus) * Rate * XRate * Buff + Flat + XFlat
 * TP     = (Base + Plus) * Rate * XRate + Flat + XFlat
 * XParam = (Base + Plus) * Rate + Flat
 * SParam = (Base + Plus) * Rate + Flat
 * 
 * They still work as usual but now you can add traits to have more control.
 * 
 * To add traits you can use notetags inside data.
 * 
 * Actors, classes and enemies only:
 * 
 * <NPARAM: NParam Base Grow HGrow Cap>
 * <CPARAM: CParam Base Grow HGrow Cap>
 *    -Overrides default NParam/CParam for specified actor/class/enemy.
 *     NParam can be referenced by it's name or index.
 *     Base is the initial value in level 1.
 *     Grow is how much is increased per level. If empty it will be fixed.
 *     HGrow is similar to Grow but in an exponential way.
 *     Cap is the level at wich NParam stops growing.
 *     You can use decimal numbers.
 *     
 * <VALID CPARAMS: cparam cparam cparam>
 * <MAIN CPARAMS: cparam cparam cparam>
 *    -Overrides default valid/main CParams for specified actor/class/enemy.
 *     You can place all you'll need in a single line.
 * 
 * Weapons, armors and states only:
 * 
 * <NPARAM: NParam Value>
 * <CPARAM: CParam Value>
 * <PPARAM: PParam Value>
 *    -Set default N/C/PParam given for specified weapon/armor.
 *     NParam can be referenced by it's name or index.
 *     
 * 
 * Actors, classes, enemies, weapons, armors and states:
 * 
 * <NDEBUFFRATE: NParam Rate>
 * <CDEBUFFRATE: CParam Rate>
 *    -This is used for nparam/cparam debuff resistance, it's the chance of
 *     succes debuff.
 *     0.5 means 50% debuff succes, 0.2 is 20% and so on.
 * 
 * 
 * <NPARAMPLUS: NParam Plus>
 * <NPARAMRATE: NParam Rate>
 * <NPARAMXRATE: NParam XRate>
 * <NPARAMFLAT: NParam Flat>
 * <NPARAMXFLAT: NParam Flat>
 *    -There are plus, rate, xrate, flat and xflat modifiers for nparam.
 * 
 * <CPARAMPLUS: CParam Plus>
 * <CPARAMRATE: CParam Rate>
 * <CPARAMXRATE: CParam XRate>
 * <CPARAMFLAT: CParam Flat>
 * <CPARAMXFLAT: CParam Flat>
 *    -There are plus, rate, xrate, flat and xflat modifiers for cparam.
 * 
 * <PPARAMPLUS: PParam Plus>
 * <PPARAMRATE: PParam Rate>
 * <PPARAMFLAT: PParam Flat>
 *    -There are plus, rate and flat modifiers for pparam.
 * 
 * <PARAMPLUS: Param Plus>
 * <PARAMRATE: Param Rate>
 * <PARAMXRATE: Param XRate>
 * <PARAMFLAT: Param Flat>
 * <PARAMXFLAT: Param XFlat>
 * <xPARAMPLUS: XParam Plus>
 * <XPARAMRATE: XParam Rate>
 * <XPARAMFLAT: XParam Flat>
 * <SPARAMPLUS: SParam Plus>
 * <SPARAMRATE: SParam Rate>
 * <SPARAMFLAT: SParam Flat>
 * <TP PLUS: Plus>
 * <TP RATE: Rate>
 * <TP FLAT: Flat>
 * <TP XRATE: XRate>
 * <TP XFLAT: XFlat>
 *    -There are all modifiers for base, tp, x and sparam.
 *     I have included these to give more control.
 * 
 * 
 * Skills and items only:
 * 
 * <NBUFF: NParam turns>
 * <NDEBUFF: NParam turns>
 * <REMOVE NBUFF: NParam>
 * <REMOVE NDEBUFF: NParam>
 * <CBUFF: CParam turns>
 * <CDEBUFF: CParam turns>
 * <REMOVE CBUFF: CParam>
 * <REMOVE CDEBUFF: CParam>
 *    -There are buff/debuff effects to attach to skills and items.
 * 
 * <NPARAM GROW: NParam amount>
 *    -Allow to increase/decrease nparam by a specified amount.
 * 
 * <PPARAM GROW: PParam amount>
 *    -Allow to increase/decrease pparam by a specified amount.
 * 
 * <CPARAM GROW: CParam amount>
 *    -Allow to increase/decrease cparam by a specified amount.
 * 
 * <XPARAM GROW: XParam amount>
 *    -Allow to increase/decrease xparam by a specified amount.
 * 
 * <SPARAM GROW: SParam amount>
 *    -Allow to increase/decrease sparam by a specified amount.
 * 
 * <DAMAGE TYPE: CParam>
 *    -Changes damage type to affect specified cparam instead of hp or mp.
 *     hp/mp damage becomes cparam damage.
 *     hp/mp recover becomes cparam recover.
 *     hp/mp drain becomes cparam drain.
 * 
 * <RECOVER CPARAM: CParam amount>
 * <RECOVER CPARAM: CParam RATE amount>
 * <RECOVER CPARAM: CParam amount RATE amount>
 *    -Allow to recover cparam by a specified amount, a specified percent from
 *     max value or both like hp/mp.
 * 
 * ============================================================================
 * CParam Commands
 * ============================================================================
 *
 * Some commands have been added to control gain/spend/lose quantities of
 * specified cparams. There are javascript functions similar to hp, mp and tp.
 * 
 * gain[cparam](amount)
 *    -Gain (or negative to lose) a specified amount of cparam.
 *     The amount will be used for damage popups.
 *     Substitute [cparam] with name of counter param with first letter in
 *     uppercase.
 *
 * gainSilent[cparam](amount)
 *    -Gain (or negative to lose) a specified amount of cparam without being
 *     noticed in a damage popup.
 *     Substitute [cparam] with name of counter param with first letter in
 *     uppercase.
 *
 * set[cparam](amount)
 *    -Set specified cparam amount to a value.
 *     Substitute [cparam] with name of counter param with first letter in
 *     uppercase.
 *
 * [cparam]Rate()
 *    -Get rate of specified cparam.
 *     Substitute [cparam] with name of counter param in lowercase.
 * 
 * ============================================================================
 * More Param Script Commands
 * ============================================================================
 *
 * Some commands have been added to edit values of parameters.
 * Values are divided between base and plus. Base value is the complete value
 * while plus is an additive value.
 * Change base value if you want to change it drastically or plus value if you
 * want to edit the value that is added to the level based one.
 * 
 * set[param]Base(amount)
 * set[param]Plus(amount)
 *    -Set the base or plus value of a parameter.
 *     Substitute [param] with name of param with first letter in uppercase.
 *     When editing cparam use the max param name instead of counter.
 *
 * 
 * ============================================================================
 * Lunatic Mode
 * ============================================================================
 *
 * Knowing javascript you can redefine specific base value for params, nparams
 * and cparams for actors, classes and enemies through lunatic mode.
 * 
 * It also work in notetags:
 *
 * <CUSTOM NPARAM BASE NPARAM>
 * value = 2;
 * value += 25;
 * </CUSTOM NPARAM BASE>
 * 
 * <CUSTOM CPARAM BASE CPARAM>
 * value = 2;
 * value += 25;
 * </CUSTOM CPARAM BASE>
 * 
 * <CUSTOM PARAM BASE PARAM>
 * value = base;
 * value += 25;
 * </CUSTOM PARAM BASE>
 * 
 * <CUSTOM TP BASE>
 * value = 100;
 * value += 25;
 * </CUSTOM TP BASE>
 * 
 * Those params defined will use their formula instead of normal base
 * value calculation. You can use javascript between these tags to alter
 * the final result.
 * Base params also allow to use word 'base' inside formula. It takes the
 * value it could have at level 1.
 * 
 * value - This is the value you want to alter with your own formula.
 *         It starts at 0.
 * 
 * Equipment and states notetags:
 * 
 * <CUSTOM NPARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * int = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM NPARAMS>
 * 
 * <CUSTOM PPARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * int = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM PPARAMS>
 * 
 * <CUSTOM CPARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * mbul = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM CPARAMS>
 * 
 * <CUSTOM PARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * mhp = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM PARAMS>
 * 
 * Add evaluate values for nparams, pparams, cparams and basic params to weapons
 * and armors.
 * First you use the javascript code that can affect all params. Then you
 * Use an identifier that can be a number or param name, an equal and the
 * formula that should be evaluated for this equipment piece.
 * 
 * Example:
 * <CUSTOM PARAMS>
 * var bonus = this.level;
 * var restrict = 5;
 * mhp = $gameVariables.value(35) + bonus * 5 - restrict
 * mmp = ($gameSwitches.value(12)? 50 : 1) + bonus / restrict
 * </CUSTOM PARAMS>
 * 
 * ============================================================================
 * Parameters
 * ============================================================================
 * 
 * You can create up to 100 of each type with indexes from 0 to 99.
 * 
 * NParam/PParam/Bparam Name: internal name you give to specified nparam,
 * pparam and basic param. It will be used in formulas and can be used to
 * reference a notetag. Leave empty to skip.
 * 
 * - Note: Bparams already exist and this param allow to alias or redefine them.
 * 
 * NParam/PParam/XParam/SParam Full Name: the name you give to specified nparam.
 * There are not used here but are usefull for plugins that need this.
 * 
 * CParam Name / Full Name Basic: name and full name for the parameter that
 * represents max value. There are not used here but are usefull for plugins
 * that need this.
 * 
 * CParam Name / Full Name Counter: name and full name for the parameter that
 * represents current value. There are not used here but are usefull for plugins
 * that need this.
 * 
 * CParam Abreviation: a short name for the parameter that represents current
 * value if needed. Left blank to use the counter name. There are not used here
 * but are usefull for plugins that need this.
 * 
 * NParam/PParam/CParam/Bparam/XParam/SParam/TP Icon: allows to give icons to
 * params. There are not used here but are usefull for plugins that need this.
 * 
 * NParam/PParam Color: a color to represent nparam and pparam for plugins that,
 * need it. It can be a number or a html color.
 * 
 * CParam ColorX: colors for cparam gauge. It can be a number or a html color.
 * 
 * NParam/CParam Base: the default formula for classes/enemies if they haven't.
 * First number is the value at level 1. Second is the amount gained
 * each level. Third is a level exponential grow and fourth is the level at
 * wich will stop growing.
 *
 * PParam/XParam/SParam/TP Base: is a base value that allow pparams to emulate
 * x/sparams, and give more control for x/sparams. 0 is used for a xparam and 1
 * for a sparam. It works as a formula so you can do it param based.
 * 
 * NParam/CParam/BParam Base Eval: allow to use nparams and bparams as formulas
 * like p/x/sparams. If defined this formula will be used instead of default
 * mode given in MV for BParams and the default traditional mode for NParams I
 * made. It works as a formula so you can do it param based.
 * Base params also allow to use word 'base' inside formula. It takes the
 * value it could have at level 1.
 * 
 * NParam/CParam/BParam Plus Eval: similar to Base Eval, there are used as
 * formulas but it sums to the value without override base formula.
 * Usefull when you want to give a bonus based on another parameters and such.
 * 
 * NParam/CParam/BParam/TP Limits: the min and max value a param can be. It's
 * used now as a formula and needs 3 values.
 * First is min, second is normal max and third is X-max.
 * By default (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * PParam Limits: same as previous but only uses 2 values (min and max).
 * By default (this.isActor())? [0, 999] : [0, 999]
 *
 * NParam/CParam/BParam Buff Icons:
 * This is an array of icons separated by spaces. When specified param is
 * affected by a positive buff will be shown. Is starts with first and
 * use next for each buff stack. If you don't want to use it leave Empty.
 *
 * NParam/CParam/BParam Debuff Icons:
 * Same as previous but with debuff stack. Empty to don't use.
 *
 * CParam Reset Type:
 * Determines when the count value is reseted.
 *     0 - no reset  - count value will never be reseted after initialize.
 *     1 - on inn    - reseted when using the heal all/ rest comand.
 *     2 - on ko     - reseted when a battler is defeated.
 *     3 - on battle - reseted at start and end of a battle.
 * 
 * CParam Reset Value:
 * Determines the count value that a cparam will have when initialized/reseted.
 * It's a rate so you can use 0 to empy, 1 to fill, 0.5 to set halve, etc.
 * 
 * Default Valid CParams:
 * Determine what cparam results can be visible in battle by default separated
 * by spaces. Valid cparams are those that are visible througth damage popups.
 * To make all valid by default you can empty it and to make all invalid by
 * default you can place an invalid name.
 *
 * Default Main CParams:
 * Determine what cparam results are important in battle by default separated
 * by spaces. Main cparams damage popups are displayed before hp damage popups
 * while non-main are latest displayed. To make all main by default you can
 * empty it and to make all non-main by default you can place an invalid name.
 * Anyway when an action affect a valid cparam direcly it will be treaten as
 * a main one.
 *
 * To check what valid/main arrays a battler uses it will check if have one for
 * actor/enemy, if not will check in it's class, if none found will use default.
 * 
 * Max Buff/Debuff:
 * How many buffs and debuffs can be stacked for every param.
 *
 * Buff/Debuff Strength
 * How many percentage is added or removed to param for every buff or debuff
 * stacked.
 *
 * Use Damage Icons:
 * This option allows tu use icons inside damage popups for hp, mp and tp to
 * make them more understandable.
 * CParam damage popups will use icons anyway to avoid the needing of a lot of
 * system damage graphics.
 *
 * HP/MP/TP Damage/Recover Icons:
 * If previous option is enabled there are the icons to be used.
 *
 * CParam Damage/Recover Icons:
 * Icons to be used.
 *
 * Developer HaltJS: This is a development variable usefull to check if there
 * is a wrong javascript nparam or basic param.
 * When true will throw an error when it found a wrong javascript in lunatic
 * mode and tell specified param.
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
 * Changelog
 * ============================================================================
 *
 * Version 1.09:
 * - Changed icons for hp/mp/tp/cp damage and recover.
 * - Added b/n/cparam plus value eval formulas.
 * - Added basic Buff and debuff control.
 * 
 * Version 1.08:
 * - Allow tp.
 * - More CParam controls.
 * - Added CParam damage popups.
 * 
 * Version 1.07:
 * - Allow items and skills to alter CParams.
 * - Allow to grow x/sparams.
 * - Allow to set param values.
 * - Evaluable params for states.
 * 
 * Version 1.06:
 * - Added new CParams.
 * - Removed obsolete plugin parameters and functions.
 * - Minor extra improvements.
 * 
 * Version 1.05:
 * - Evaluable params for equipment.
 * - Set n/pparams for equipment.
 * - Expanded lunatic mode to include enemy classes and actors.
 * - Allow to grow pparams.
 * - Allow default formulas for base params and nparams.
 * - Use of 1.5.0 new plugin parameters.
 * 
 * Version 1.04:
 * - Allow ICF-Soft Main Core.
 * - Expanded lunatic mode to include enemies.
 * - More nparam control.
 * 
 * Version 1.03:
 * - Added XFlat for the double cap.
 * - Increased n/pparams to 30.
 * - Allow names for x/sparams.
 * 
 * Version 1.02:
 * - Allow to aliasing or redefining MV basic params.
 * 
 * Version 1.01:
 * - Use of ICF-Soft Main Utility.
 * - Added lunatic mode for custom params and nparams.
 * - Changed how min and max limits work.
 * - Added double cap.
 * - Added more traits.
 * - Use of base params.
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
 * @plugindesc v1.09c Este complemento permite añadir nuevos parámetros
 * personalizables y mayor control sobre los parámetros del MV.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @param NParams
 * @desc Modo de edición de NParams.
 * @type struct<NormalParams>[]
 * @default ["{\"Name\":\"\",\"Full Name\":\"\",\"Icon\":\"0\",\"Base\":\"30 15\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Color\":\"\",\"Limits\":\"(this.isActor())? [0, 999, 1200] : [0, 999, 1200]\",\"Buff Icons\":\"\",\"Debuff Icons\":\"\"}"]
 *
 * @param PParams
 * @desc Modo de edición de PParams.
 * @type struct<PlainParams>[]
 * @default ["{\"Name\":\"\",\"Full Name\":\"\",\"Base\":\"0\",\"Limits\":\"(this.isActor())? [0, 999] : [0, 999]\"}"]
 *
 * @param CParams
 * @desc Modo de edición de CParams.
 * @type struct<CountingParams>[]
 * @default ["{\"Name Basic\":\"\",\"Full Name Basic\":\"\",\"Name Counter\":\"\",\"Full Name Counter\":\"\",\"Abreviation\":\"\",\"Icon\":\"0\",\"Damage Icon\":\"0\",\"Restore Icon\":\"0\",\"Base\":\"30 15\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Reset Type\":\"1\",\"Reset Value\":\"1\",\"Color1\":\"\",\"Color2\":\"\",\"Limits\":\"(this.isActor())? [0, 999, 1200] : [0, 999, 1200]\",\"Buff Icons\":\"\",\"Debuff Icons\":\"\"}"]
 *
 * @param BParams
 * @desc Modo de edición de BParams. No eliminar BParams ni añadir nuevos.
 * @type struct<BaseParams>[]
 * @default ["{\"Name\":\"mhp\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 9999, 12000] : [1, 999999, 1200000]\",\"Buff Icons\":\"32 40\",\"Debuff Icons\":\"48 56\"}","{\"Name\":\"mmp\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"33 41\",\"Debuff Icons\":\"49 57\"}","{\"Name\":\"atk\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"34 42\",\"Debuff Icons\":\"50 58\"}","{\"Name\":\"def\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"35 43\",\"Debuff Icons\":\"51 59\"}","{\"Name\":\"mat\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"36 44\",\"Debuff Icons\":\"52 60\"}","{\"Name\":\"mdf\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"37 45\",\"Debuff Icons\":\"53 61\"}","{\"Name\":\"agi\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"38 46\",\"Debuff Icons\":\"54 62\"}","{\"Name\":\"luk\",\"Icon\":\"0\",\"Base Eval\":\"\",\"Plus Eval\":\"0\",\"Limits\":\"(this.isActor())? [1, 999, 1200]   : [1, 999, 1200]\",\"Buff Icons\":\"39 47\",\"Debuff Icons\":\"55 63\"}"]
 *
 * @param XParams
 * @desc Modo de edición de XParams. No eliminar XParams ni añadir nuevos.
 * @type struct<ExtraParams>[]
 * @default ["{\"Full Name\":\"Puntería\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Evasión\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Probabilidad de crítico\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Evitar crítico\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Evasión mágica\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Reflejo mágico\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Contraataque\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Regenerar vida\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Regenerar magia\",\"Icon\":\"0\",\"Base\":\"0\"}","{\"Full Name\":\"Regenerar turbo\",\"Icon\":\"0\",\"Base\":\"0\"}"]
 *
 * @param SParams
 * @desc Modo de edición de SParams. No eliminar SParams ni añadir nuevos.
 * @type struct<SpecialParams>[]
 * @default ["{\"Full Name\":\"Ser el objetivo\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Efecto de guardia\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Efecto de recuperación\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Farmacología\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Coste de mp\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Coste de tp\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Daño físico recibido\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Daño mágico recibido\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Daño por el terreno\",\"Icon\":\"0\",\"Base\":\"1\"}","{\"Full Name\":\"Experiencia obtenible\",\"Icon\":\"0\",\"Base\":\"1\"}"]
 *
 * @param Default Valid CParams
 * @desc Determina qué cparams van a ser visibles durante el combate separados por espacios. Ver ayuda.
 * @default none
 *
 * @param Default Main CParams
 * @desc Determina qué cparams son importantes durante el combate separados por espacios. Ver ayuda.
 * @default none
 *
 * @param Max Buff
 * @desc Cuantas veces se puede fortalecer un parámetro.
 * @default 2
 *
 * @param Max Debuff
 * @desc Cuantas veces se puede debilitar un parámetro.
 * @default 2
 *
 * @param Buff Strength
 * @desc Cuanto porcentaje aumenta el parámetro por cada fortalecimiento acumulado.
 * @default 0.25
 *
 * @param Debuff Strength
 * @desc Cuanto porcentaje disminuye el parámetro por cada debilitamiento acumulado.
 * @default 0.25
 *
 * @param Use Damage Icons
 * @desc Usa iconos en los gráficos de daño para hp, mp y tp. En el caso de los cparams los iconos se usan igualmente.
 * @default true
 *
 * @param HP Damage Icon
 * @desc Icono a usar para el daño de hp.
 * @default 0
 *
 * @param HP Recover Icon
 * @desc Icono a usar para la recuperación de hp.
 * @default 0
 *
 * @param MP Damage Icon
 * @desc Icono a usar para el daño de mp.
 * @default 0
 *
 * @param MP Recover Icon
 * @desc Icono a usar para la recuperación de mp.
 * @default 0
 *
 * @param TP Damage Icon
 * @desc Icono a usar para el daño de hp.
 * @default 0
 *
 * @param TP Recover Icon
 * @desc Icono a usar para la recuperación de tp.
 * @default 0
 *
 * @param BParam0 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default mhp
 *
 * @param BParam0 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam0 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam0 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam0 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Vida
 * @default (this.isActor())? [1, 9999, 12000] : [1, 999999, 1200000]
 *
 * @param BParam0 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 32 40
 *
 * @param BParam0 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 48 56
 *
 * @param BParam1 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default mmp
 *
 * @param BParam1 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam1 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam1 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam1 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Magia
 * @default (this.isActor())? [0, 9999, 12000] : [0, 9999, 12000]
 *
 * @param BParam1 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 33 41
 *
 * @param BParam1 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 49 57
 *
 * @param BParam2 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default atk
 *
 * @param BParam2 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam2 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam2 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam2 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Ataque
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam2 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 34 42
 *
 * @param BParam2 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 50 58
 *
 * @param BParam3 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default def
 *
 * @param BParam3 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam3 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam3 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam3 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Defensa
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam3 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 35 43
 *
 * @param BParam3 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 51 59
 *
 * @param BParam4 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default mat
 *
 * @param BParam4 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam4 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam4 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam4 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Ataque mágico
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam4 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 36 44
 *
 * @param BParam4 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 52 60
 *
 * @param BParam5 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default mdf
 *
 * @param BParam5 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam5 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam5 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam5 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Defensa mágica
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam5 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 37 45
 *
 * @param BParam5 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 53 61
 *
 * @param BParam6 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default agi
 *
 * @param BParam6 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam6 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam6 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam6 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Agilidad
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam6 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 38 46
 *
 * @param BParam6 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 54 62
 *
 * @param BParam7 Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default luk
 *
 * @param BParam7 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param BParam7 Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param BParam7 Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param BParam7 Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Suerte
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param BParam7 Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 39 47
 *
 * @param BParam7 Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 55 63
 *
 * @param TP Base
 * @desc Fórmula para el valor básico del tp.
 * @default 100
 *
 * @param TP Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * @default (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * @param TP Icon
 * @desc Un icono para TP.
 * @default 0
 *
 * @param XParam0 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Puntería
 *
 * @param XParam0 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam0 Base
 * @desc Fórmula para el parámetro-x hit (Puntería).
 * @default 0
 *
 * @param XParam1 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Evasión
 *
 * @param XParam1 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam1 Base
 * @desc Fórmula para el parámetro-x eva (EVAsión).
 * @default 0
 *
 * @param XParam2 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Probabilidad de crítico
 *
 * @param XParam2 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam2 Base
 * @desc Fórmula para el parámetro-x cri (probabilidad de CRÍtico).
 * @default 0
 *
 * @param XParam3 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Evadir crítico
 *
 * @param XParam3 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam3 Base
 * @desc Fórmula para el parámetro-x cev (evadir Crítico).
 * @default 0
 *
 * @param XParam4 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Evasión mágica
 *
 * @param XParam4 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam4 Base
 * @desc Fórmula para el parámetro-x param mev (evasión Mágica).
 * @default 0
 *
 * @param XParam5 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Reflejo mágico
 *
 * @param XParam5 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam5 Base
 * @desc Fórmula para el parámetro-x mrf (reflejar Magia).
 * @default 0
 *
 * @param XParam6 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Contraataque
 *
 * @param XParam6 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam6 Base
 * @desc Fórmula para el parámetro-x cnt (CoNTraataque).
 * @default 0
 *
 * @param XParam7 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Regenerar vida
 *
 * @param XParam7 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam7 Base
 * @desc Fórmula para el parámetro-x hrg (regeneración de vida).
 * @default 0
 *
 * @param XParam8 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Regenerar magia
 *
 * @param XParam8 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam8 Base
 * @desc Fórmula para el parámetro-x mrg (regeneración de magia).
 * @default 0
 *
 * @param XParam9 Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Regenerar turbo
 *
 * @param XParam9 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param XParam9 Base
 * @desc Fórmula para el parámetro-x trg (regeneración de tp).
 * @default 0
 *
 * @param SParam0 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Ser el objetivo
 *
 * @param SParam0 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam0 Base
 * @desc Fórmula para el parámetro-s tgr (ser el objetivo).
 * @default 1
 *
 * @param SParam1 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Efecto defensivo
 *
 * @param SParam1 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam1 Base
 * @desc Fórmula para el parámetro-s grd (efecto de defensa).
 * @default 1
 *
 * @param SParam2 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Efecto de recuperación
 *
 * @param SParam2 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam2 Base
 * @desc Fórmula para el parámetro-s rec (efecto de RECuperación).
 * @default 1
 *
 * @param SParam3 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Farmacología
 *
 * @param SParam3 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam3 Base
 * @desc Fórmula para el parámetro-s pha (PHArmacología).
 * @default 1
 *
 * @param SParam4 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Coste de mp
 *
 * @param SParam4 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam4 Base
 * @desc Fórmula para el parámetro-s mcr (coste de Mp).
 * @default 1
 *
 * @param SParam5 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Coste de tp
 *
 * @param SParam5 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam5 Base
 * @desc Fórmula para el parámetro-s tcr (coste de Tp).
 * @default 1
 *
 * @param SParam6 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Daño físico recibido
 *
 * @param SParam6 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam6 Base
 * @desc Fórmula para el parámetro-s pdr (daño físico recibido).
 * @default 1
 *
 * @param SParam7 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Daño mágico recibido
 *
 * @param SParam7 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam7 Base
 * @desc Fórmula para el parámetro-s mdr (daño Mágico recibido).
 * @default 1
 *
 * @param SParam8 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Daño por el terreno
 *
 * @param SParam8 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam8 Base
 * @desc Fórmula para el parámetro-s fdr (daño por el suelo).
 * @default 1
 *
 * @param SParam9 Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Experiencia obtenible
 *
 * @param SParam9 Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param SParam9 Base
 * @desc Fórmula para el parámetro-s exr (EXperiencia obtenida).
 * @default 1
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
 * El RPG Maker MV viene con unos tipos fijos de parámetros, son útiles pero
 * tienen sus propósitos específicos y limita el modo en que los puedes usar.
 * 
 * [Nota respecto los BParams, XParams y SParams]
 * En la próxima versión estos parámetros se van a manejar del mismo modo que
 * el resto para así poder editar mejor las características. El sistema antiguo
 * se va a eliminar.
 * Si no has editado estos parámetros puedes ignorar esta nota.
 * 
 * Si los has editado puedes ponerlos en el sistema nuevo. Abre la consola de
 * desarrollador, copia el texto de debajo de cada tipo de parámetro y pégalo
 * como texto en los parámetros del plugin específicos.
 * [Fin de la nota]
 * 
 * Con este complemento puedes añadir nuevos para usarlos en tus fórmulas
 * y cualquier uso que puedas imaginar.
 * 
 * Existen 3 nuevos tipos de parámetros:
 *  -Nuevo/Normal Params: Basados en el nivel igual que los que vienen por
 *   defecto, con los efectos de fortalecer/debilitar y modificadores.
 *   Además de una opción que puede servir en distintos complementos
 *   de niveles de enemigos.
 * 
 *  -Planos Params: No basados en nivel, funcionan como los x/sparams
 *   con modificadores.
 * 
 *  -Contador Params: similares a los nparams, funcionan como contadores como
 *   son hp, mp y tp. Usan nombre para valor actual y valor máximo.
 *
 * Además se ha añadido personalización para los x/sparams que permite mayor
 * control.
 * Y una nueva característica que permite 2 topes para los params y nparams.
 * 
 * ============================================================================
 * Uso
 * ============================================================================
 * 
 * Los NParams, CParams y PParams son calculados mediante sus respectivas
 * fórmulas:
 * 
 * NParam = (Base + Plus) * Rate * XRate * Buff + Flat + XFlat
 * CParam = (Base + Plus) * Rate * XRate * Buff + Flat + XFlat
 * PParam = (Base + Plus) * Rate + Flat
 * 
 *   -Base es distinto entre ambas. Para los NParams está basado en el nivel.
 *    Para los PParam el valor es fijo emulando los x/sparams (0 y 1).
 *   -Plus es la suma de todas las características plus que atañen al personaje.
 *    En el caso de NParam existe un extra añadido mediante llamadas a script
 *    y efectos de los objetos.
 *   -Rate es el producto de todos los multiplicadores que atañen al personaje.
 *   -XRate es el producto de todos los multiplicadores especiales que atañen
 *    al personaje.
 *   -Buff es el efecto de fortalecer/debilitar.
 *   -Flat es la suma de todas las características flat que atañen al personaje.
 *    No se ve afectado por los multiplicadores.
 *   -XFlat es la suma de todas las características flat especiales que atañen
 *    al personaje. No se ve afectado por los multiplicadores.
 * 
 * 
 * XRate, XFlat y Buff permiten ir más allá del primer límite.
 * 
 * Para hacer los parámetros predeterminados del MV más personalizables he
 * cambiado un poco sus fórmulas:
 * 
 * Param  = (Base + Plus) * Rate * XRate * Buff + Flat + XFlat
 * TP     = (Base + Plus) * Rate * XRate + Flat + XFlat
 * XParam = (Base + Plus) * Rate + Flat
 * SParam = (Base + Plus) * Rate + Flat
 * 
 * Siguen funcionando como de costumbre pero ahora puedes añadir más
 * características para tener un mayor control.
 * 
 * Para añadir características basta con añadir etiquetas en los cuadros de notas
 * respectivos.
 * 
 * Héroes, clases y enemigos solo:
 * 
 * <NPARAM: NParam Base Grow HGrow Cap>
 * <CPARAM: CParam Base Grow HGrow Cap>
 *    -Cambia la base predeterminada del NParam por una específica.
 *     NParam se puede referenciar por su nombre o índice.
 *     Base es el valor inicial en el nivel 1.
 *     Grow es cuanto se incrementa por nivel. Si está vacío cuenta como 0.
 *     HGrow es similar a Grow pero de crecimiento exponencial.
 *     Cap es el nivel en el cual el NParam deja de subir.
 *     Puedes usar números decimales.
 *     
 * <VALID CPARAMS: cparam cparam cparam>
 * <MAIN CPARAMS: cparam cparam cparam>
 *    -Cambia los CParams válidos/principales para el héroe/enemigo/clase
 *     específicos. Puedes poner todos los que hagan falta en una línea.
 * 
 * 
 * Armas, armaduras y estados alterados solo:
 * 
 * <NPARAM: NParam Value>
 * <CPARAM: CParam Value>
 * <PPARAM: PParam Value>
 *    -Fija un valor determinado de N/P/CParam para el arma o armadura.
 *     Se puede hacer referncia por el nombre o índice.
 *     
 * 
 * Héroes, clases, enemigos, armas, armaduras y estados alterados:
 * 
 * <NDEBUFFRATE: NParam Rate>
 * <CDEBUFFRATE: CParam Rate>
 *    -Se usa para la resistencia al debilitamiento en dicho nparam
 *     o cparam, básicamente es la probabilidad de acierto.
 *     0.5 significa 50% acierto, 0.2 es 20%, etc.
 * 
 * 
 * <NPARAMPLUS: NParam Plus>
 * <NPARAMRATE: NParam Rate>
 * <NPARAMXRATE: NParam XRate>
 * <NPARAMFLAT: NParam Flat>
 * <NPARAMXFLAT: NParam XFlat>
 *    -Modificadores para el nparam.
 * 
 * <PPARAMPLUS: PParam Plus>
 * <PPARAMRATE: PParam Rate>
 * <PPARAMFLAT: PParam Flat>
 *    -Modificadores para el pparam.
 * 
 * <CPARAMPLUS: CParam Plus>
 * <CPARAMRATE: CParam Rate>
 * <CPARAMXRATE: CParam XRate>
 * <CPARAMFLAT: CParam Flat>
 * <CPARAMXFLAT: CParam Flat>
 *    -Modificadores para el cparam.
 * 
 * <PARAMPLUS: Param Plus>
 * <PARAMRATE: Param Rate>
 * <PARAMXRATE: Param XRate>
 * <PARAMFLAT: Param Flat>
 * <PARAMXFLAT: Param XFlat>
 * <xPARAMPLUS: XParam Plus>
 * <XPARAMRATE: XParam Rate>
 * <XPARAMFLAT: XParam Flat>
 * <SPARAMPLUS: SParam Plus>
 * <SPARAMRATE: SParam Rate>
 * <SPARAMFLAT: SParam Flat>
 * <TP PLUS: Plus>
 * <TP RATE: Rate>
 * <TP FLAT: Flat>
 * <TP XRATE: XRate>
 * <TP XFLAT: XFlat>
 *    -Modificadores para los parámetros básicos, x, y y tp.
 *     Los he incluido para dar más control.
 * 
 * 
 * Habilidades y objetos solo:
 * 
 * <NBUFF: NParam turnos>
 * <NDEBUFF: NParam turnos>
 * <REMOVE NBUFF: NParam>
 * <REMOVE NDEBUFF: NParam>
 * <CBUFF: CParam turnos>
 * <CDEBUFF: CParam turnos>
 * <REMOVE CBUFF: CParam>
 * <REMOVE CDEBUFF: CParam>
 *    -Efectos de añadir y quitar fortalecimiento/debilitamiento.
 * 
 * <NPARAM GROW: NParam amount>
 *    -Permite incrementar/decrementar el nparam una cantidad específica.
 * 
 * <PPARAM GROW: PParam amount>
 *    -Permite incrementar/decrementar el pparam una cantidad específica.
 * 
 * <CPARAM GROW: CParam amount>
 *    -Permite incrementar/decrementar el cparam una cantidad específica.
 * 
 * <XPARAM GROW: XParam amount>
 *    -Permite incrementar/decrementar el xparam una cantidad específica.
 * 
 * <SPARAM GROW: SParam amount>
 *    -Permite incrementar/decrementar el sparam una cantidad específica.
 * 
 * <DAMAGE TYPE: CParam>
 *    -Cambia el tipo de daño de hp o mp para afectar un cparam en su lugar.
 *     Daño de hp/mp pasa a ser daño de cparam.
 *     Recuperación de hp/mp pasa a ser recuperación de cparam.
 *     Drenaje de hp/mp pasa a ser drenaje de cparam.
 * 
 * <RECOVER CPARAM: CParam amount>
 * <RECOVER CPARAM: CParam RATE amount>
 * <RECOVER CPARAM: CParam amount RATE amount>
 *    -Permite recuperar cparam una cantidad específica, un porcentaje
 *     específico o ambas.
 * 
 * ============================================================================
 * Comandos de CParam
 * ============================================================================
 *
 * Se han añadido controles para el uso/gasto/pérdida de cantidades de un
 * cparam específico. Se trata de funciones en javascript similares a las de
 * hp, mp y tp.
 * 
 * gain[cparam](amount)
 *    -Incrementar (o gastar si es negativo) una cantidad específica del cparam.
 *     Sustituir [cparam] con el nombre del contador con la primera letra en
 *     Sustituir [cparam] con el nombre del contador con la primera letra en
 *     mayúsculas.
 *
 * gainSilent[cparam](amount)
 *    -Incrementar (o gastar si es negativo) una cantidad específica del cparam
 *     sin que sea visible en batalla.
 *     Sustituir [cparam] con el nombre del contador con la primera letra en
 *     mayúsculas.
 *
 * set[cparam](amount)
 *    -Fija el valor de un cparam.
 *     Sustituir [cparam] con el nombre del contador con la primera letra en
 *     mayúsculas.
 *
 * [cparam]Rate()
 *    -Obtener el ratio (desde 0 para 0% hasta 1 para 100%) del cparam.
 *     Sustituir [cparam] con el nombre del contador en minúsculas.
 * 
 * ============================================================================
 * Comandos de parámetros
 * ============================================================================
 *
 * Se han añadido también comandos javascript para editar los parámetros de un
 * modo directo. Se divide entre básico y plus. El valor básico es el que el
 * personaje tiene actualmente mientras que el plus es un valor añadido.
 * Cambiando el valor básico el resultado será drástico mientras que cambiando
 * el plus cambias el añadido sin afectar al que viene dado por el nivel.
 * 
 * set[param]Base(amount)
 * set[param]Plus(amount)
 *    -Fija el valor básico o plus de un parámetro.
 *     Sustituir [param] con el nombre del parámetro con la primera letra en
 *     mayúsculas.
 *     Para editar cparam utiliza el nombre del valor máximo en lugar del
 *     contador.
 *
 * 
 * ============================================================================
 * Lunatic Mode
 * ============================================================================
 *
 * Para aquellos que quieren utilizar un modo personalizado para calcular
 * los parámetros he añadido el modo lunático.
 * El modo lunático permite utilizar código javascript diréctamente.
 * 
 * Usa las siguientes etiquetas en las clases y enemigos:
 *
 * <CUSTOM NPARAM BASE NPARAM>
 * value = 2;
 * value += 25;
 * </CUSTOM NPARAM BASE>
 * 
 * <CUSTOM CPARAM BASE CPARAM>
 * value = 2;
 * value += 25;
 * </CUSTOM CPARAM BASE>
 * 
 * <CUSTOM PARAM BASE PARAM>
 * value = base;
 * value += 25;
 * </CUSTOM PARAM BASE>
 * 
 * <CUSTOM TP BASE>
 * value = 100;
 * value += 25;
 * </CUSTOM TP BASE>
 * 
 * Dicho código se ejecutará en lugar de la fórmula predeterminada.
 * Los parámetros básicos además permiten usar la variable 'base' dentro de su
 * fórmula. Equivale al valor que tendría en el nivel 1.
 * 
 * value - Esta es la variable donde se almacena el resultado.
 *         Si no se especifica será 0.
 * 
 * Etiquetas para equipamiento y estados alterados:
 * 
 * <CUSTOM NPARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * int = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM NPARAMS>
 * 
 * <CUSTOM PPARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * int = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM PPARAMS>
 * 
 * <CUSTOM CPARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * mbul = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM CPARAMS>
 * 
 * <CUSTOM PARAMS>
 * javascript
 * javascript
 * 0 = $gameVariables.value(35)
 * mhp = $gameSwitches.value(12)? 50 : 1
 * </CUSTOM PARAMS>
 * 
 * Añade valores evaluables para nparams, pparams, cparams y params básicos
 * a armas, armaduras y estados.
 * Primero se añade código javascript que afecta todos los parámetros de su
 * tipo. Después se utiliza un identificador que puede ser un número o el
 * nombre del parámetro, un igual y la fórmula que se va a evaluar.
 * 
 * Ejemplo:
 * <CUSTOM PARAMS>
 * var bonus = this.level;
 * var restrict = 5;
 * mhp = $gameVariables.value(35) + bonus * 5 - restrict
 * mmp = ($gameSwitches.value(12)? 50 : 1) + bonus / restrict
 * </CUSTOM PARAMS>
 * 
 * ============================================================================
 * Parámetros
 * ============================================================================
 * 
 * Puedes crear hasta 100 parámetros de cada tipo con índices del 0 al 99.
 * 
 * NParam/PParam/Bparam Name: el nombre interno que le vas a dar al parámetro.
 * Se utilizará en fórmulas y se puede usar como referencia en las etiquetas en
 * las notas. Dejar vacío si no se quiere usar.
 * 
 * - Nota: Los bparams existen de por sí pero se pueden redefinir.
 * 
 * NParam/PParam/XParam/SParam Full Name: el nombre que quieres dar al nparam.
 * Por el momento no se usa aquí pero sirve para los plugins que usen este.
 * 
 * CParam Name / Full Name Basic: nombre y nombre a mostrar para el parámetro
 * que representa el valor máximo. Por el momento no se usa aquí pero sirve para
 * los plugins que usen este.
 * 
 * CParam Name / Full Name Counter: nombre y nombre a mostrar para el parámetro
 * que representa el valor actual. Por el momento no se usa aquí pero sirve para
 * los plugins que usen este.
 * 
 * CParam Abreviation: abreviatura a mostrar para el parámetro que representa el
 * valor actual. Si se deja en blanco se usará el del contador. Por el momento no
 * se usa aquí pero sirve para los plugins que usen este.
 * 
 * NParam/PParam/CParam/Bparam/XParam/SParam/TP Icon: permite añadir iconos a
 * los parámetros. Por el momento no se usa aquí pero sirve para los plugins que
 * lo necesiten.
 * 
 * NParam/PParam Color: un color para representar nparam y pparam para plugins
 * que lo necesiten. Puede ser un número o un color html.
 * 
 * CParam ColorX: colores para la barra de medición del cparam. Puede ser un
 * número o un color html.
 * 
 * NParam/CParam Base: la fórmula predeterminada para clases y enemigos que no
 * tengan. El primer númber es el valor en el nivel 1. El segundo es cuanto sube
 * cada nivel. El tercero es de crecimiento exponencial y el cuarto es el nivel
 * en el cual va a dejar de subir.
 *
 * PParam/XParam/SParam/TP Base: es un valor básico con el que los pparam pueden
 * emular los x/sparams, y dar más control a los x/sparams mediante fórmulas.
 * 0 suele ser el valor de un xparam y 1 el de un sparam.
 * 
 * NParam/CParam/BParam Base Eval: permite el uso de formulas para los nparams y
 * bparams, al igual que los p/x/sparams. Si se define una fórmula se utilizará
 * en lugar del modo predeterminado del MV para los BParams o del modo
 * tradicional de los NParams.
 * Los parámetros básicos además permiten usar la variable 'base' dentro de su
 * fórmula. Equivale al valor que tendría en el nivel 1.
 * 
 * NParam/CParam/BParam Plus Eval: similar al anterior, permite el uso de formulas
 * para los nparams y bparams, al igual que los p/x/sparams, pero sin sustituir
 * la fórmula predeterminada. De este modo se pueden añadir bonificaciones
 * basadas en otros parámetros y similares.
 * 
 * NParam/CParam/BParam/TP Limits: los valores mínimo y máximo que puede tener
 * el nparam, cparam, param o tp. Ahora se utiliza como fórmula que da 3 valores.
 * El primero es el mínimo, el segundo es máximo normal y el tercero es
 * el extra máximo.
 * (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * PParam Limits: igual que el anterior pero solo usa 2 valores (mínimo y máximo).
 * (this.isActor())? [0, 999] : [0, 999]
 *
 * NParam/CParam/BParam Buff Icons: conjunto de iconos separados por espacios.
 * Cuando dicho parámetro se vea afectado por un fortalecimiento se mostrará
 * el icono correspondiente al fortalecimiento acumulado.
 * Si se deja en blanco no se usará.
 *
 * NParam/CParam/BParam Debuff Icons: igual que el anterior pero para los
 * debilitamientos del parámetro.
 * 
 * CParam Reset Type:
 * Determina cuando se reinicia al valor básico.
 *     0 - el valor no se reinicia.
 *     1 - se reinicia con el comando de curar a todos.
 *     2 - se reinicia al ser derrotado.
 *     3 - se reinicia al principio y final de batalla.
 * 
 * CParam Reset Value:
 * Valor básico del contador cuando se reinicia. Puedes usar 0 para vaciar,
 * 1 para llenar el contador, 0.5 para dejarlo por la mitad, etc.
 * 
 * Default Valid CParams:
 * Determina qué cparams van a ser visibles durante el combate separados por
 * espacios. Los parámetros válidos son aquellos que se verán cuando un
 * personaje recibe daño o recupera una cantidad. Para que todos sean válidos
 * por defecto puedes dejarlo vacío y para que todos sean inválidos puedes poner
 * un nombre que no sea válido.
 *
 * Default Main CParams:
 * Determina qué cparams son importantes durante el combate separados por
 * espacios. Los parámetros importantes son aquellos que se muesta su efecto
 * antes que el de hp mientras que los no principales son los últimos en ser
 * mostrados. Para que todos sean válidos por defecto puedes dejarlo vacío y
 * para que todos sean inválidos puedes poner un nombre que no sea válido.
 * De todos modos cuando una acción afecta a un cparam válido directamente éste
 * será tratado como principal.
 *
 * El modo de comprobación de cparams válid/principales de un personaje o enemigo
 * es primero el de héroe/enemigo en cuestión, si no la clase y si tampoco hay
 * se tendrá en cuenta el predeterminado.
 * 
 * Max Buff/Debuff:
 * Establece el límite de fortalecimientos y debilitamientos que se pueden aplicar.
 *
 * Buff/Debuff Strength
 * Establece qué porcentaje se añade o resta por cada fortalecimiento o
 * debilitamiento aplicado.
 *
 * Use Damage Icons:
 * Usa iconos en los gráficos de daño para hp, mp y tp para hacerlos más fáciles.
 * de entender.
 * En el caso de los cparams los iconos se usan igualmente para evitar la
 * necesidad de muchos gráficos de daño de sistema.
 * 
 * HP/MP/TP Damage/Recover Icons:
 * Los iconos a usar cuando la anterior está activada.
 *
 * CParam Damage/Recover Icons:
 * Los iconos a usar para los distintos cparams.
 *
 * Developer HaltJS: Esta es una variable de uso durante el desarrollo del juego
 * útil cuando quieres comprobar si hay alguna función personalizada incorrecta.
 * Cuando está activado al encontrar un error el juego se para y muestra
 * en qué parámetro se encuentra el error.
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
 * Historial de versiones
 * ============================================================================
 * 
 * Versión 1.09:
 * - Se han cambiado los iconos para daño y recuperación de hp/mp/tp/cparam.
 * - Se han añadido fórmulas que no sobreescriben los valores básicos de los
 *   bparam/nparam/cparam.
 * - Se han añadido controles básicos para el fortalecimiento y debilitamiento
 *   de parámetros.
 * 
 * Versión 1.08:
 * - Se han añadido modificadores para el tp.
 * - Se han añadido más controles para los CParam.
 * - Se han añadido controles para mostrar el daño y recuperación de CParams.
 * 
 * Versión 1.07:
 * - Permite que los objetos y habilidades alteren los CParams.
 * - Permite el crecimiento de los x/sparams.
 * - Permite fijar el valor de los parámetros.
 * - Se han añadido parámetros evaluables para los estados alterados.
 * 
 * Versión 1.06:
 * - Se han añadido los CParams.
 * - Se han eliminado funciones y parámetros obsoletos.
 * - Pequeñas mejoras.
 * 
 * Versión 1.05:
 * - Se han añadido parámetros evaluables para el equipamiento.
 * - Se ha añadido el uso de nparams en el equipamiento.
 * - Se ha expandido el modo lunático para incluir a los personajes y classes
 *   para enemigos.
 * - Permite el crecimiento de los pparams.
 * - Permite fórmulas personalizadas para los parámetros básicos y los nparams.
 * - Uso del sistema de parámetros del 1.5.0.
 * 
 * Versión 1.04:
 * - Permite el ICF-Soft Main Core.
 * - Se ha expandido el modo lunático para afectar enemigos.
 * - Mayor control para los nparams.
 * 
 * Versión 1.03:
 * - Se ha añadido el modificador XFlat para el doble máximo.
 * - Se ha subido la cantidad de n/pparams a 30.
 * - Permite nombrar los parámetros especiales y extra.
 * 
 * Versión 1.02:
 * - Permite añadir alias o redefinir los parámetros básicos.
 * 
 * Versión 1.01:
 * - Se empieza a utilizar el ICF-Soft Main Utility.
 * - Se ha añadido el modo lunático para params y nparams.
 * - Se ha cambiado el cómo funcionan los límites mínimo y máximo.
 * - Se ha añadido el doble máximo.
 * - Se han añadido más características.
 * - Se pueden usar los base params.
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
/*~struct~NormalParams:
 * @param Name
 * @desc Name for this new param in lowercase without spaces. Empty to skip.
 * @default
 *
 * @param Full Name
 * @desc Name that will be shown for this new param.
 * @default
 *
 * @param Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param Base
 * @desc How this new param is configured by default. See help.
 * @default 30 15
 *
 * @param Base Eval
 * @desc A formula to use instead of base.
 * @default
 *
 * @param Plus Eval
 * @desc A formula to add a bonus without overriding default.
 * @default 0
 *
 * @param Color
 * @desc A color for param. Can be a html code or a number.
 * @default
 *
 * @param Limits
 * @desc Formula for min and max value for this new param. See help.
 * @default (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * @param Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default
 *
 * @param Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default
 *
 */
/*~struct~PlainParams:
 * @param Name
 * @desc Name for this plain param in lowercase without spaces. Empty to skip.
 * @default
 *
 * @param Full Name
 * @desc Name that will be shown for this plain param.
 * @default
 *
 * @param Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param Base
 * @desc How this plain param is configured by default. See help.
 * @default 0
 *
 * @param Is Percentage
 * @desc Tell if this plain param is a percentage.
 * @default false
 *
 * @param Color
 * @desc A color for param. Can be a html code or a number.
 * @default
 *
 * @param Limits
 * @desc Formula for min and max value for this plain param. See help.
 * @default (this.isActor())? [0, 999] : [0, 999]
 *
 */
/*~struct~CountingParams:
 * @param Name Basic
 * @desc Name for this count param in lowercase without spaces. Empty to skip.
 * @default
 *
 * @param Full Name Basic
 * @desc Name that will be shown for this count param.
 * @default
 *
 * @param Name Counter
 * @desc Name for current value param in lowercase without spaces. Empty to skip.
 * @default
 *
 * @param Full Name Counter
 * @desc Name that will be shown for current value param.
 * @default
 *
 * @param Abreviation
 * @desc Short name that will be shown for current value param.
 * @default
 *
 * @param Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param Damage Icon
 * @desc An icon to be shown when taken damage for this cparam.
 * @default 0
 *
 * @param Restore Icon
 * @desc An icon to be shown when recovery for this cparam.
 * @default 0
 *
 * @param Base
 * @desc How this count param max value is configured by default. See help.
 * @default 30 15
 *
 * @param Base Eval
 * @desc A formula to use instead of base.
 * @default
 *
 * @param Plus Eval
 * @desc A formula to add a bonus without overriding default.
 * @default 0
 *
 * @param Reset Type
 * @desc Determines when the count value is reseted.
 * 0 - no reset  1 - on inn  2 - on ko  3 - on battle
 * @default 1
 * 
 * @param Reset Value
 * @desc Default value when a cparam is reseted.
 * 0 - empty  1 - full
 * @default 1
 * 
 * @param Color1
 * @desc First color for gauge. Can be a html code or a number.
 * @default
 *
 * @param Color2
 * @desc Second color for gauge. Can be a html code or a number.
 * @default
 *
 * @param Limits
 * @desc Formula for min and max value for this count param. See help.
 * @default (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * @param Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default
 *
 * @param Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default
 *
 */
/*~struct~BaseParams:
 * @param Name
 * @desc Alias for this basic param. You can redefine it.
 * @default luk
 *
 * @param Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param Base Eval
 * @desc A formula to use instead of default base given in MV.
 * Empty to use default.
 * @default
 *
 * @param Plus Eval
 * @desc A formula to add without overriding default base given in MV.
 * @default 0
 *
 * @param Limits
 * @desc Formula for min and max value for this param. See help.
 * Luck
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param Buff Icons
 * @desc Icons for each buff stack. Empty to don't use. See help.
 * @default 39 47
 *
 * @param Debuff Icons
 * @desc Icons for each debuff stack. Empty to don't use. See help.
 * @default 55 63
 *
 */
/*~struct~ExtraParams:
 * @param Full Name
 * @desc Name that will be shown for this extra param.
 * @default Hit rate
 *
 * @param Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param Base
 * @desc Formula for base value for this extra param.
 * @default 0
 *
 */
/*~struct~SpecialParams:
 * @param Full Name
 * @desc Name that will be shown for this special param.
 * @default Hit rate
 *
 * @param Icon
 * @desc An icon for this parameter.
 * @default 0
 *
 * @param Base
 * @desc Formula for base value for this special param.
 * @default 1
 *
 */
/*~struct~NormalParams:es
 * @param Name
 * @desc Nombre para este nuevo parámetro en minúsculas. Vacío para saltar.
 * @default
 *
 * @param Full Name
 * @desc Nombre mostrado para este nuevo parámetro.
 * @default
 *
 * @param Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param Base
 * @desc Modo predeterminado de configuración. Ver ayuda.
 * @default 30 15
 *
 * @param Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado.
 * @default
 *
 * @param Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * base.
 * @default 0
 *
 * @param Color
 * @desc Un color para representar el parámetro. Se puede usar un color html o un número.
 * @default
 *
 * @param Limits
 * @desc Una fórmula para los valores mínimo y máximos para este
 * nuevo parámetro. Ver ayuda.
 * @default (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * @param Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default
 *
 * @param Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default
 *
 */
/*~struct~PlainParams:es
 * @param Name
 * @desc Nombre para este parámetro plano en minúsculas. Vacío para saltar.
 * @default
 *
 * @param Full Name
 * @desc Nombre para mostrar para este parámetro plano.
 * @default
 *
 * @param Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param Base
 * @desc Fórmula para calcular el Valor básico de este parámetro plano.
 * @default 0
 *
 * @param Is Percentage
 * @desc Indica si este parámetro plano es un porcentage.
 * @default false
 *
 * @param Color
 * @desc Un color para representar el parámetro. Se puede usar un color html o un número.
 * @default
 *
 * @param Limits
 * @desc Una fórmula para los valores mínimo y máximos para este
 * parámetro plano. Ver ayuda.
 * @default (this.isActor())? [0, 999] : [0, 999]
 *
 */
/*~struct~CountingParams:es
 * @param Name Basic
 * @desc Nombre para este parámetro máximo en minúsculas. Vacío para saltar.
 * @default
 *
 * @param Full Name Basic
 * @desc Nombre para mostrar para este parámetro máximo.
 * @default
 *
 * @param Name Counter
 * @desc Nombre para este parámetro contador en minúsculas. Vacío para saltar.
 * @default
 *
 * @param Full Name Counter
 * @desc Nombre para mostrar para este parámetro contador.
 * @default
 *
 * @param Abreviation
 * @desc Nombre abreviado para mostrar para este parámetro contador.
 * @default
 *
 * @param Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param Damage Icon
 * @desc Icono a mostrar al ser dañado en este parámetro.
 * @default 0
 *
 * @param Restore Icon
 * @desc Icono a mostrar cuando se recupera en este parámetro.
 * @default 0
 *
 * @param Base
 * @desc Modo predeterminado de configuración. Ver ayuda.
 * @default 30 15
 *
 * @param Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado.
 * @default
 *
 * @param Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * base.
 * @default 0
 *
 * @param Reset Type
 * @desc Determina cuando se reinicia al valor básico.
 * 0 - nunca  1 - al descansar  2 - al quedar ko  3 - en combate
 * @default 1
 * 
 * @param Reset Value
 * @desc Valor básico del contador cuando se reinicia.
 * 0 - vacío  1 - lleno
 * @default 1
 * 
 * @param Color1
 * @desc Primer color de la barra. Se puede usar un color html o un número.
 * @default
 *
 * @param Color2
 * @desc Segundo color de la barra. Se puede usar un color html o un número.
 * @default
 *
 * @param Limits
 * @desc Una fórmula para los valores mínimo y máximos para este
 * nuevo parámetro. Ver ayuda.
 * @default (this.isActor())? [0, 999, 1200] : [0, 999, 1200]
 *
 * @param Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default
 *
 * @param Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default
 *
 */
/*~struct~BaseParams:es
 * @param Name
 * @desc Alias para este parámetro. Puedes redefirlo.
 * @default luk
 *
 * @param Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param Base Eval
 * @desc Una fórmula para usar en lugar del modo predeterminado del MV.
 * En blanco para usar el modo predeterminado.
 * @default
 *
 * @param Plus Eval
 * @desc Una fórmula para modificar el valor sin sobreescribir el modo
 * predeterminado del MV.
 * @default 0
 *
 * @param Limits
 * @desc Una fórmula para los valores mínimo y máximos. Ver ayuda.
 * Suerte
 * @default (this.isActor())? [1, 999, 1200]   : [1, 999, 1200]
 *
 * @param Buff Icons
 * @desc Iconos a mostrar para cada valor de fortalecimiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 39 47
 *
 * @param Debuff Icons
 * @desc Iconos a mostrar para cada valor de debilitamiento.
 * Vacío no usar ninguno. Ver ayuda.
 * @default 55 63
 *
 */
/*~struct~ExtraParams:es
 * @param Full Name
 * @desc Nombre mostrado para este parámetro extra.
 * @default Puntería
 *
 * @param Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param Base
 * @desc Fórmula para este parámetro extra.
 * @default 0
 *
 */
/*~struct~SpecialParams:es
 * @param Full Name
 * @desc Nombre mostrado para este parámetro especial.
 * @default Puntería
 *
 * @param Icon
 * @desc Un icono para este parámetro.
 * @default 0
 *
 * @param Base
 * @desc Fórmula para este parámetro especial.
 * @default 1
 *
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

ICF.Parameters = PluginManager.parameters('ICF_ParamsCore');    //?? was ICFSoft_ParamsCore and therefore wrong
ICF.Param = ICF.Param || {};

if (!Imported.ICFSoft_MainUtility) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.05 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}
if (ICF.MainUtility.Version < 105) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.05 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}

ICF.Param.NParams = [];
ICF.Param.NParamsFullName = [];
ICF.Param.NParamIcon = [];
ICF.Param.NParamBase = [];
ICF.Param.NParamPlus = [];
ICF.Param.NParamLimit = [];
ICF.Param.NParamBuffIcons = [];
ICF.Param.NParamDebuffIcons = [];
ICF.Param.NParamColor1 = [];
ICF.Param.PParams = [];
ICF.Param.PParamsFullName = [];
ICF.Param.PParamIcon = [];
ICF.Param.PParamBase = [];
ICF.Param.PParamLimit = [];
ICF.Param.PParamColor1 = [];
ICF.Param.PParamIsPercent = [];
ICF.Param.CParams = [];
ICF.Param.CParamsFullName = [];
ICF.Param.CParamsMax = [];
ICF.Param.CParamsMaxFullName = [];
ICF.Param.CParamsAbreviation = [];
ICF.Param.CParamIcon = [];
ICF.Param.CParamDamageIcons = [];
ICF.Param.CParamBase = [];
ICF.Param.CParamPlus = [];
ICF.Param.CParamLimit = [];
ICF.Param.CParamBuffIcons = [];
ICF.Param.CParamDebuffIcons = [];
ICF.Param.CParamColor1 = [];
ICF.Param.CParamColor2 = [];
ICF.Param.CParamResetValue = [];
ICF.Param.CParamResetType = [];
ICF.Param.BParamIcon = [];
ICF.Param.BParamLimit = [];
ICF.Param.BParamBase = [];
ICF.Param.BParamPlus = [];
ICF.Param.BParamBuffIcons = [];
ICF.Param.BParamDebuffIcons = [];
ICF.Param.XParamsFullName = [];
ICF.Param.XParamIcon = [];
ICF.Param.XParamBase = [];
ICF.Param.SParamsFullName = [];
ICF.Param.SParamIcon = [];
ICF.Param.SParamBase = [];

ICF.Param.BaseDamageIcons = [];
ICF.Param.BaseDamageIcons[0] = Number(ICF.Parameters['HP Damage Icon']) || -1;
ICF.Param.BaseDamageIcons[1] = Number(ICF.Parameters['HP Recover Icon']) || -1;
ICF.Param.BaseDamageIcons[2] = Number(ICF.Parameters['MP Damage Icon']) || -1;
ICF.Param.BaseDamageIcons[3] = Number(ICF.Parameters['MP Recover Icon']) || -1;
ICF.Param.BaseDamageIcons[4] = Number(ICF.Parameters['TP Damage Icon']) || -1;
ICF.Param.BaseDamageIcons[5] = Number(ICF.Parameters['TP Recover Icon']) || -1;

ICF.Param.MaxBuff = Number(ICF.Parameters['Max Buff']) || 2;
ICF.Param.MaxDebuff = -(Number(ICF.Parameters['Max Debuff']) || 2);
ICF.Param.BuffStrength = Number(ICF.Parameters['Buff Strength']) || 0.25;
ICF.Param.DebuffStrength = Number(ICF.Parameters['Debuff Strength']) || 0.25;

ICF.Param.TPParamEval = ICF.Parameters['TP Base'] || 100;
ICF.Param.TPParamLimit = ICF.Parameters['TP Limits'] || "(this.isActor())? [0, 999, 1200] : [0, 999, 1200]";
ICF.Param.TPIcon = Number(ICF.Parameters['TP Icon']) || -1;

ICF.Param.useDamageIcons = ICF.Parameters['Use Damage Icons'].toLowerCase() === "true";

ICF.Param.BParams = ["mhp", "mmp", "atk", "def", "mat", "mdf", "agi", "luk"];
ICF.Param.XParams = ["hit", "eva", "cri", "cev", "mev", "mrf", "cnt", "hrg", "mrg", "trg"];
ICF.Param.SParams = ["tgr", "grd", "rec", "pha", "mcr", "tcr", "pdr", "mdr", "fdr", "exr"];

ICF.temp = JSON.parse(ICF.Parameters['NParams']);
for (var i = 0; i < ICF.temp.length; i++) {
	ICF.temp[i] = JSON.parse(ICF.temp[i]);
	ICF.Param.NParams[i] = ICF.temp[i]['Name'];
	ICF.Param.NParamsFullName[i] = ICF.temp[i]['Full Name'];
	ICF.Param.NParamIcon[i] = Number(ICF.temp[i]['Icon']) || -1;
	ICF.Param.NParamBase[i] = ICF.temp[i]['Base'].split(/\s+/).leaveNumbers();
	if (ICF.temp[i]['Base Eval'].trim().length > 0) ICF.Param.NParamBase[i] = ICF.temp[i]['Base Eval'];
	ICF.Param.NParamPlus[i] = ICF.temp[i]['Plus Eval'];
	ICF.Param.NParamLimit[i] = ICF.temp[i]['Limits'];
	ICF.Param.NParamBuffIcons[i] = ICF.temp[i]['Buff Icons'].split(/\s+/).leaveNumbers();
	ICF.Param.NParamDebuffIcons[i] = ICF.temp[i]['Debuff Icons'].split(/\s+/).leaveNumbers();
	ICF.Param.NParamColor1[i] = ICF.MainUtility.validateColor(ICF.temp[i]['Color']);
}
ICF.temp = JSON.parse(ICF.Parameters['PParams']);
for (var i = 0; i < ICF.temp.length; i++) {
	ICF.temp[i] = JSON.parse(ICF.temp[i]);
	ICF.Param.PParams[i] = ICF.temp[i]['Name'];
	ICF.Param.PParamsFullName[i] = ICF.temp[i]['Full Name'];
	ICF.Param.PParamIcon[i] = Number(ICF.temp[i]['Icon']) || -1;
	ICF.Param.PParamIsPercent[i] = ICF.temp[i]['Is Percentage'] && ICF.temp[i]['Is Percentage'].toLowerCase() == "true";
	ICF.Param.PParamBase[i] = ICF.temp[i]['Base'];
	ICF.Param.PParamLimit[i] = ICF.temp[i]['Limits'];
	ICF.Param.PParamColor1[i] = ICF.MainUtility.validateColor(ICF.temp[i]['Color']);
}

ICF.temp = JSON.parse(ICF.Parameters['CParams']);
for (var i = 0; i < ICF.temp.length; i++) {
	ICF.temp[i] = JSON.parse(ICF.temp[i]);
	ICF.Param.CParamsMax[i] = ICF.temp[i]['Name Basic'];
	ICF.Param.CParamsMaxFullName[i] = ICF.temp[i]['Full Name Basic'];
	ICF.Param.CParams[i] = ICF.temp[i]['Name Counter'];
	ICF.Param.CParamsFullName[i] = ICF.temp[i]['Full Name Counter'];
	ICF.Param.CParamsAbreviation[i] = ICF.temp[i]['Abreviation']? ICF.temp[i]['Abreviation'] : ICF.Param.CParamsFullName[i];
	ICF.Param.CParamIcon[i] = Number(ICF.temp[i]['Icon']) || -1;
	ICF.Param.CParamBase[i] = ICF.temp[i]['Base'].split(/\s+/).leaveNumbers();
	if (ICF.temp[i]['Base Eval'].trim().length > 0) ICF.Param.CParamBase[i] = ICF.temp[i]['Base Eval'];
	ICF.Param.CParamPlus[i] = ICF.temp[i]['Plus Eval'];
	ICF.Param.CParamLimit[i] = ICF.temp[i]['Limits'];
	ICF.Param.CParamBuffIcons[i] = ICF.temp[i]['Buff Icons'].split(/\s+/).leaveNumbers();
	ICF.Param.CParamDebuffIcons[i] = ICF.temp[i]['Debuff Icons'].split(/\s+/).leaveNumbers();
	ICF.Param.CParamColor1[i] = ICF.MainUtility.validateColor(ICF.temp[i]['Color1']);
	ICF.Param.CParamColor2[i] = ICF.MainUtility.validateColor(ICF.temp[i]['Color2']);
	ICF.Param.CParamResetType[i] = isNaN(Number(ICF.temp[i]['Reset Type']))? 1 : Number(ICF.temp[i]['Reset Type']);
	ICF.Param.CParamResetValue[i] = isNaN(Number(ICF.temp[i]['Reset Value']))? 1 : Number(ICF.temp[i]['Reset Value']);
	ICF.Param.CParamDamageIcons[i] = [];
	ICF.Param.CParamDamageIcons[i][0] = Number(ICF.temp[i]['Damage Icon']) || -1;
	ICF.Param.CParamDamageIcons[i][1] = Number(ICF.temp[i]['Restore Icon']) || -1;
}

ICF.Param.defaultValidCParams = ICF.Parameters['Default Valid CParams'].trim().split(/\s+/);
if (ICF.Param.defaultValidCParams[0] != '') {
	for (var i = 0; i < ICF.Param.defaultValidCParams.length; i++) {
		if (ICF.Param.CParams.contains(ICF.Param.defaultValidCParams[i])) ICF.Param.defaultValidCParams[i] = ICF.Param.CParams.indexOf(ICF.Param.defaultValidCParams[i]);
		else ICF.Param.defaultValidCParams[i] = ICF.Param.CParamsMax.indexOf(ICF.Param.defaultValidCParams[i]);
	}
} else {
	ICF.Param.defaultValidCParams = [];
}
ICF.Param.defaultMainCParams = ICF.Parameters['Default Main CParams'].trim().split(/\s+/);
if (ICF.Param.defaultMainCParams[0] != '') {
	for (var i = 0; i < ICF.Param.defaultMainCParams.length; i++) {
		if (ICF.Param.CParams.contains(ICF.Param.defaultMainCParams[i])) ICF.Param.defaultMainCParams[i] = ICF.Param.CParams.indexOf(ICF.Param.defaultMainCParams[i]);
		else ICF.Param.defaultMainCParams[i] = ICF.Param.CParamsMax.indexOf(ICF.Param.defaultMainCParams[i]);
	}
} else {
	ICF.Param.defaultMainCParams = [];
}

ICF.temp = [[],[],[]];

for (var i = 0; i < 10; i++) {
	ICF.Param.XParamsFullName[i] = String(ICF.Parameters['XParam' + i + ' Full Name']);
	ICF.Param.XParamIcon[i] = Number(ICF.Parameters['XParam' + i + ' Icon']) || -1;
	ICF.Param.XParamBase[i] = String(ICF.Parameters['XParam' + i + ' Base']);
	ICF.Param.SParamsFullName[i] = String(ICF.Parameters['SParam' + i + ' Full Name']);
	ICF.Param.SParamIcon[i] = Number(ICF.Parameters['SParam' + i + ' Icon']) || -1;
	ICF.Param.SParamBase[i] = String(ICF.Parameters['SParam' + i + ' Base']);
	ICF.temp[1][i] = {};
	ICF.temp[1][i]['Full Name'] = ICF.Param.XParamsFullName[i];
	ICF.temp[1][i]['Icon'] = String(ICF.Param.XParamIcon[i]);
	ICF.temp[1][i]['Base'] = ICF.Param.XParamBase[i];
	ICF.temp[1][i] = JSON.stringify(ICF.temp[1][i]);
	ICF.temp[2][i] = {};
	ICF.temp[2][i]['Full Name'] = ICF.Param.SParamsFullName[i];
	ICF.temp[2][i]['Icon'] = String(ICF.Param.SParamIcon[i]);
	ICF.temp[2][i]['Base'] = ICF.Param.SParamBase[i];
	ICF.temp[2][i] = JSON.stringify(ICF.temp[2][i]);
}
ICF.temp[1] = JSON.stringify(ICF.temp[1]);
ICF.temp[2] = JSON.stringify(ICF.temp[2]);

for (var i = 0; i < 8; i++) {
	ICF.Param.BParams[i] = String(ICF.Parameters['BParam' + i + ' Name']);
	ICF.Param.BParamIcon[i] = Number(ICF.Parameters['BParam' + i + ' Icon']) || -1;
	ICF.Param.BParamBase[i] = String(ICF.Parameters['BParam' + i + ' Base Eval']).trim();
	ICF.Param.BParamPlus[i] = String(ICF.Parameters['BParam' + i + ' Plus Eval']).trim();
	ICF.Param.BParamLimit[i] = String(ICF.Parameters['BParam' + i + ' Limits']);
	ICF.Param.BParamBuffIcons[i] = String(ICF.Parameters['BParam' + i + ' Buff Icons']).split(/\s+/).leaveNumbers();
	ICF.Param.BParamDebuffIcons[i] = String(ICF.Parameters['BParam' + i + ' Debuff Icons']).split(/\s+/).leaveNumbers();
	ICF.temp[0][i] = {};
	ICF.temp[0][i]['Name'] = ICF.Param.BParams[i];
	ICF.temp[0][i]['Icon'] = String(ICF.Param.BParamIcon[i]);
	ICF.temp[0][i]['Base Eval'] = ICF.Param.BParamBase[i];
	ICF.temp[0][i]['Plus Eval'] = ICF.Param.BParamPlus[i];
	ICF.temp[0][i]['Limits'] = ICF.Param.BParamLimit[i];
	ICF.temp[0][i]['Buff Icons'] = ICF.Param.BParamBuffIcons[i].join(' ');
	ICF.temp[0][i]['Debuff Icons'] = ICF.Param.BParamDebuffIcons[i].join(' ');
	ICF.temp[0][i] = JSON.stringify(ICF.temp[0][i]);
}
ICF.temp[0] = JSON.stringify(ICF.temp[0]);

console.log('BParams');
console.log(ICF.temp[0]);
console.log('XParams');
console.log(ICF.temp[1]);
console.log('SParams');
console.log(ICF.temp[2]);

ICF.Param.ParamCoreHalt = ICF.Parameters['Developer HaltJS'].toLowerCase() === "true";

//=============================================================================
// Constants
//=============================================================================

Game_BattlerBase.TRAIT_NPARAM          = 24;
Game_BattlerBase.TRAIT_PPARAM          = 25;
Game_BattlerBase.TRAIT_CPARAM          = 26;
Game_BattlerBase.TRAIT_TPPARAM         = 27;
Game_Action.EFFECT_RECOVER_CPARAM      = 14;
Game_Action.EFFECT_ADD_NBUFF           = 35;
Game_Action.EFFECT_ADD_NDEBUFF         = 36;
Game_Action.EFFECT_REMOVE_NBUFF        = 37;
Game_Action.EFFECT_REMOVE_NDEBUFF      = 38;
Game_Action.EFFECT_NGROW               = 45;
Game_Action.EFFECT_PGROW               = 46;
Game_Action.EFFECT_CGROW               = 47;

//=============================================================================
// TextManager
//=============================================================================

ICF.ParamCore.TextManager_param = TextManager.param;
TextManager.param = function (paramId) {
    if (ICF.Param.NParams.indexOf(paramId) > -1) {
	var parId = ICF.Param.NParams.indexOf(paramId);
	return ICF.Param.NParamsFullName[parId];
    } else if (ICF.Param.PParams.indexOf(paramId) > -1) {
	var parId = ICF.Param.PParams.indexOf(paramId);
	return ICF.Param.PParamsFullName[parId];
    } else if (ICF.Param.CParams.indexOf(paramId) > -1) {
	var parId = ICF.Param.CParams.indexOf(paramId);
	return ICF.Param.CParamsFullName[parId];
    } else if (ICF.Param.CParamsMax.indexOf(paramId) > -1) {
	var parId = ICF.Param.CParamsMax.indexOf(paramId);
	return ICF.Param.CParamsMaxFullName[parId];
    } else if (ICF.Param.BParams.indexOf(paramId) > -1) {
	var parId = ICF.Param.BParams.indexOf(paramId);
	return ICF.ParamCore.TextManager_param.call(this, parId);
    } else if (ICF.Param.XParams.indexOf(paramId) > -1) {
	var parId = ICF.Param.XParams.indexOf(paramId);
	return ICF.Param.XParamsFullName[parId];
    } else if (ICF.Param.SParams.indexOf(paramId) > -1) {
	var parId = ICF.Param.SParams.indexOf(paramId);
	return ICF.Param.SParamsFullName[parId];
    } else {
	return ICF.ParamCore.TextManager_param.call(this, paramId);
    }
};

//=============================================================================
// DataManager
//=============================================================================

ICF.ParamCore.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!ICF.ParamCore.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!ICF.ParamCore.Procesed) {
	ICF.NotetagsProcessor.ParamCoreA($dataActors);
	ICF.NotetagsProcessor.ParamCoreA($dataClasses);
	ICF.NotetagsProcessor.ParamCoreA($dataEnemies);
	ICF.NotetagsProcessor.ParamCoreB($dataWeapons);
	ICF.NotetagsProcessor.ParamCoreB($dataArmors);
	ICF.NotetagsProcessor.ParamCoreB($dataStates);
	ICF.NotetagsProcessor.ParamCoreC($dataSkills);
	ICF.NotetagsProcessor.ParamCoreC($dataItems);
	ICF.ParamCore.Procesed = true;
    }
    return true;
};

ICF.NotetagsProcessor.ParamCore = function(group) {
    var note1 = /<(?:NPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1b = /<(?:NPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note1c = /<(?:NPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1d = /<(?:NPARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note1e = /<(?:NPARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note2 = /<(?:PPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note2b = /<(?:PPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note2c = /<(?:PPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3 = /<(?:xPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3b = /<(?:XPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note3c = /<(?:XPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note4 = /<(?:SPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note4b = /<(?:SPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note4c = /<(?:SPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5 = /<(?:PARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5b = /<(?:PARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note5c = /<(?:PARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5d = /<(?:PARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note5e = /<(?:PARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6 = /<(?:CPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6b = /<(?:CPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note6c = /<(?:CPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6d = /<(?:CPARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note6e = /<(?:CPARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7 = /<(?:TP PLUS):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7b = /<(?:TP RATE):[ ]*(\d+(?:\.\d+)?)>/i;
    var note7c = /<(?:TP FLAT):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7d = /<(?:TP XRATE):[ ]*(\d+(?:\.\d+)?)>/i;
    var note7e = /<(?:TP XFLAT):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note8 = /<(?:NDEBUFFRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note8b = /<(?:CDEBUFFRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx, value:Number(RegExp.$2)});
		} else if (line.match(note1b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 100, value:Number(RegExp.$2)});
		} else if (line.match(note1c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 200, value:Number(RegExp.$2)});
		} else if (line.match(note1d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 300, value:Number(RegExp.$2)});
		} else if (line.match(note1e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 400, value:Number(RegExp.$2)});
		} else if (line.match(note2)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx, value:Number(RegExp.$2)});
		} else if (line.match(note2b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx + 100, value:Number(RegExp.$2)});
		} else if (line.match(note2c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx + 200, value:Number(RegExp.$2)});
		} else if (line.match(note3)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx, value:Number(RegExp.$2)});
		} else if (line.match(note3b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx + 10, value:Number(RegExp.$2)});
		} else if (line.match(note3c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx + 20, value:Number(RegExp.$2)});
		} else if (line.match(note4)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx + 10, value:Number(RegExp.$2)});
		} else if (line.match(note4b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx, value:Number(RegExp.$2)});
		} else if (line.match(note4c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx + 20, value:Number(RegExp.$2)});
		} else if (line.match(note5)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 10, value:Number(RegExp.$2)});
		} else if (line.match(note5b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx, value:Number(RegExp.$2)});
		} else if (line.match(note5c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 20, value:Number(RegExp.$2)});
		} else if (line.match(note5d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 30, value:Number(RegExp.$2)});
		} else if (line.match(note5e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 40, value:Number(RegExp.$2)});
		} else if (line.match(note6)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx, value:Number(RegExp.$2)});
		} else if (line.match(note6b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 100, value:Number(RegExp.$2)});
		} else if (line.match(note6c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 200, value:Number(RegExp.$2)});
		} else if (line.match(note6d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 300, value:Number(RegExp.$2)});
		} else if (line.match(note6e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 400, value:Number(RegExp.$2)});
		} else if (line.match(note7)) {
			obj.traits.push({code:27, dataId:0, value:Number(RegExp.$1)});
		} else if (line.match(note7b)) {
			obj.traits.push({code:27, dataId:1, value:Number(RegExp.$1)});
		} else if (line.match(note7c)) {
			obj.traits.push({code:27, dataId:2, value:Number(RegExp.$1)});
		} else if (line.match(note7d)) {
			obj.traits.push({code:27, dataId:3, value:Number(RegExp.$1)});
		} else if (line.match(note7e)) {
			obj.traits.push({code:27, dataId:4, value:Number(RegExp.$1)});
		} else if (line.match(note8)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_DEBUFF_RATE, dataId:indx + 10, value:Number(RegExp.$2)});
		} else if (line.match(note8b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_DEBUFF_RATE, dataId:indx + 200, value:Number(RegExp.$2)});
		}
	}
    }
};

ICF.NotetagsProcessor.ParamCoreA = function(group) {
    var grouparray = [];
    var note1 = /<(?:NPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1b = /<(?:NPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note1c = /<(?:NPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1d = /<(?:NPARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note1e = /<(?:NPARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1x = /<(?:NPARAM):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)(?:[ ]+(\d+(?:\.\d+)?))?(?:[ ]+(\d+(?:\.\d+)?))?(?:[ ]+(\d+(?:\.\d+)?))?>/i;
    var note1y = /<(?:CUSTOM NPARAM BASE)[ ]+(\w+)>/i;
    var note1z = /<\/(?:CUSTOM NPARAM BASE)>/i;
    var note2 = /<(?:PPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note2b = /<(?:PPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note2c = /<(?:PPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3 = /<(?:xPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3b = /<(?:XPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note3c = /<(?:XPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note4 = /<(?:SPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note4b = /<(?:SPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note4c = /<(?:SPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5 = /<(?:PARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5b = /<(?:PARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note5c = /<(?:PARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5d = /<(?:PARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note5e = /<(?:PARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5y = /<(?:CUSTOM PARAM BASE)[ ]+(\w+)>/i;
    var note5z = /<\/(?:CUSTOM PARAM BASE)>/i;
    var note6 = /<(?:CPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6b = /<(?:CPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note6c = /<(?:CPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6d = /<(?:CPARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note6e = /<(?:CPARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6m = /<(?:VALID CPARAMS):[ ]*(\w+(?:\s+\w+)*)[ ]*>/i;
    var note6n = /<(?:MAIN CPARAMS):[ ]*(\w+(?:\s+\w+)*)[ ]*>/i;
    var note6x = /<(?:CPARAM):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)(?:[ ]+(\d+(?:\.\d+)?))?(?:[ ]+(\d+(?:\.\d+)?))?(?:[ ]+(\d+(?:\.\d+)?))?>/i;
    var note6y = /<(?:CUSTOM CPARAM BASE)[ ]+(\w+)>/i;
    var note6z = /<\/(?:CUSTOM CPARAM BASE)>/i;
    var note7 = /<(?:TP PLUS):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7b = /<(?:TP RATE):[ ]*(\d+(?:\.\d+)?)>/i;
    var note7c = /<(?:TP FLAT):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7d = /<(?:TP XRATE):[ ]*(\d+(?:\.\d+)?)>/i;
    var note7e = /<(?:TP XFLAT):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7y = /<(?:CUSTOM TP BASE)>/i;
    var note7z = /<\/(?:CUSTOM TP BASE)>/i;
    var note8 = /<(?:NDEBUFFRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note8b = /<(?:CDEBUFFRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.basicNParam = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	obj.basicCParam = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	obj.customNParam = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
	obj.customCParam = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
	obj.customBParam = ['','','','','','','','','',''];
	obj.customTp = '';
	obj.validCParams = [];
	obj.mainCParams = [];

	var nFlag = false;
	var bFlag = false;
	var cFlag = false;
	var tpFlag = false;
	var nIndex = -1;
	var bIndex = -1;
	var cIndex = -1;

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note1b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 100, value:Number(RegExp.$2)});
			}
		else if (line.match(note1c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (line.match(note1d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 300, value:Number(RegExp.$2)});
			}
		else if (line.match(note1e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 400, value:Number(RegExp.$2)});
			}
		else if (line.match(note1x)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			obj.basicNParam[indx] = [Number(RegExp.$2)];
			if (!isNaN(Number(RegExp.$3))) obj.basicNParam[indx] = obj.basicNParam[indx].concat([Number(RegExp.$3)]);
			if (!isNaN(Number(RegExp.$4))) obj.basicNParam[indx] = obj.basicNParam[indx].concat([Number(RegExp.$4)]);
			if (!isNaN(Number(RegExp.$5))) obj.basicNParam[indx] = obj.basicNParam[indx].concat([Number(RegExp.$5)]);
			}
		else if (line.match(note1y)) {
			nFlag = true;
			nIndex = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			obj.customNParam[nIndex] = '';
			}
		else if (line.match(note1z)) {
			nFlag = false;
			}
		else if (line.match(note2)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note2b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx + 100, value:Number(RegExp.$2)});
			}
		else if (line.match(note2c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (line.match(note3)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note3b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note3c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx + 20, value:Number(RegExp.$2)});
			}
		else if (line.match(note4)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note4b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note4c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx + 20, value:Number(RegExp.$2)});
			}
		else if (line.match(note5)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note5b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note5c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 20, value:Number(RegExp.$2)});
			}
		else if (line.match(note5d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 30, value:Number(RegExp.$2)});
			}
		else if (line.match(note5e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 40, value:Number(RegExp.$2)});
			}
		else if (line.match(note5y)) {
			bFlag = true;
			bIndex = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			}
		else if (line.match(note5z)) {
			bFlag = false;
			}
		else if (line.match(note6)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note6b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 100, value:Number(RegExp.$2)});
			}
		else if (line.match(note6c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (line.match(note6d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 300, value:Number(RegExp.$2)});
			}
		else if (line.match(note6e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 400, value:Number(RegExp.$2)});
			}
		else if (line.match(note6m)) {
			obj.validCParams = obj.validCParams.concat(RegExp.$1.trim().split(/\s+/));
			}
		else if (line.match(note6n)) {
			obj.mainCParams = obj.mainCParams.concat(RegExp.$1.trim().split(/\s+/));
			}
		else if (line.match(note6x)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			obj.basicCParam[indx] = [Number(RegExp.$2)];
			if (!isNaN(Number(RegExp.$3))) obj.basicCParam[indx] = obj.basicCParam[indx].concat([Number(RegExp.$3)]);
			if (!isNaN(Number(RegExp.$4))) obj.basicCParam[indx] = obj.basicCParam[indx].concat([Number(RegExp.$4)]);
			if (!isNaN(Number(RegExp.$5))) obj.basicCParam[indx] = obj.basicCParam[indx].concat([Number(RegExp.$5)]);
			}
		else if (line.match(note6y)) {
			cFlag = true;
			cIndex = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			obj.customCParam[cIndex] = '';
			}
		else if (line.match(note6z)) {
			cFlag = false;
			}
		else if (line.match(note7)) {
			obj.traits.push({code:27, dataId:0, value:Number(RegExp.$1)});
			}
		else if (line.match(note7b)) {
			obj.traits.push({code:27, dataId:1, value:Number(RegExp.$1)});
			}
		else if (line.match(note7c)) {
			obj.traits.push({code:27, dataId:2, value:Number(RegExp.$1)});
			}
		else if (line.match(note7d)) {
			obj.traits.push({code:27, dataId:3, value:Number(RegExp.$1)});
			}
		else if (line.match(note7e)) {
			obj.traits.push({code:27, dataId:4, value:Number(RegExp.$1)});
			}
		else if (line.match(note7y)) {
			tpFlag = true;
			}
		else if (line.match(note7z)) {
			tpFlag = false;
			}
		else if (line.match(note8)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_DEBUFF_RATE, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note8b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_DEBUFF_RATE, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (nFlag && nIndex > -1) {
			obj.customNParam[nIndex] = obj.customNParam[nIndex] + line + '\n';
			}
		else if (bFlag && bIndex > -1) {
			obj.customBParam[bIndex] = obj.customBParam[bIndex] + line + '\n';
			}
		else if (cFlag && cIndex > -1) {
			obj.customCParam[cIndex] = obj.customCParam[cIndex] + line + '\n';
			}
		else if (tpFlag) {
			obj.customTp = obj.customTp + line + '\n';
			}
	}
    }
};

ICF.NotetagsProcessor.ParamCoreB = function(group) {
    var grouparray = [];
    var note1 = /<(?:NPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1b = /<(?:NPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note1c = /<(?:NPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1d = /<(?:NPARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note1e = /<(?:NPARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note1x = /<(?:NPARAM):[ ]*(\w+)[ ]+(\d+)>/i;
    var note1y = /<(?:CUSTOM NPARAMS)>/i;
    var note1z = /<\/(?:CUSTOM NPARAMS)>/i;
    var note2 = /<(?:PPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note2b = /<(?:PPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note2c = /<(?:PPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note2x = /<(?:PPARAM):[ ]*(\w+)[ ]+(\d+)>/i;
    var note2y = /<(?:CUSTOM PPARAMS)>/i;
    var note2z = /<\/(?:CUSTOM PPARAMS)>/i;
    var note3 = /<(?:xPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3b = /<(?:XPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note3c = /<(?:XPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note4 = /<(?:SPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note4b = /<(?:SPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note4c = /<(?:SPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5 = /<(?:PARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5b = /<(?:PARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note5c = /<(?:PARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5d = /<(?:PARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note5e = /<(?:PARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note5y = /<(?:CUSTOM PARAMS)>/i;
    var note5z = /<\/(?:CUSTOM PARAMS)>/i;
    var note6 = /<(?:CPARAMPLUS):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6b = /<(?:CPARAMRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note6c = /<(?:CPARAMFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6d = /<(?:CPARAMXRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note6e = /<(?:CPARAMXFLAT):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note6x = /<(?:CPARAM):[ ]*(\w+)[ ]+(\d+)>/i;
    var note6y = /<(?:CUSTOM CPARAMS)>/i;
    var note6z = /<\/(?:CUSTOM CPARAMS)>/i;
    var note7 = /<(?:TP PLUS):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7b = /<(?:TP RATE):[ ]*(\d+(?:\.\d+)?)>/i;
    var note7c = /<(?:TP FLAT):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note7d = /<(?:TP XRATE):[ ]*(\d+(?:\.\d+)?)>/i;
    var note7e = /<(?:TP XFLAT):[ ]*((?:\-)?\d+(?:\.\d+)?)>/i;
    var note8 = /<(?:NDEBUFFRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;
    var note8b = /<(?:CDEBUFFRATE):[ ]*(\w+)[ ]+(\d+(?:\.\d+)?)>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.NParams = [];
	obj.PParams = [];
	obj.CParams = [];

	obj.NParamEval = [];
	obj.PParamEval = [];
	obj.CParamEval = [];
	obj.BParamEval = [];

	obj.NParamEvalAll = '';
	obj.PParamEvalAll = '';
	obj.CParamEvalAll = '';
	obj.BParamEvalAll = '';

	var nFlag = false;
	var pFlag = false;
	var cFlag = false;
	var bFlag = false;

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note1b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 100, value:Number(RegExp.$2)});
			}
		else if (line.match(note1c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (line.match(note1d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 300, value:Number(RegExp.$2)});
			}
		else if (line.match(note1e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:24, dataId:indx + 400, value:Number(RegExp.$2)});
			}
		else if (line.match(note1x)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.NParams[indx] = Number(RegExp.$2);
			}
		else if (line.match(note1y)) {
			nFlag = true;
			}
		else if (line.match(note1z)) {
			nFlag = false;
			}
		else if (line.match(note2)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note2b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx + 100, value:Number(RegExp.$2)});
			}
		else if (line.match(note2c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:25, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (line.match(note2x)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.PParams[indx] = Number(RegExp.$2);
			}
		else if (line.match(note2y)) {
			pFlag = true;
			}
		else if (line.match(note2z)) {
			pFlag = false;
			}
		else if (line.match(note3)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note3b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note3c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_XPARAM, dataId:indx + 20, value:Number(RegExp.$2)});
			}
		else if (line.match(note4)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note4b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note4c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_SPARAM, dataId:indx + 20, value:Number(RegExp.$2)});
			}
		else if (line.match(note5)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note5b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note5c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 20, value:Number(RegExp.$2)});
			}
		else if (line.match(note5d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 30, value:Number(RegExp.$2)});
			}
		else if (line.match(note5e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.BParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:21, dataId:indx + 40, value:Number(RegExp.$2)});
			}
		else if (line.match(note5y)) {
			bFlag = true;
			}
		else if (line.match(note5z)) {
			bFlag = false;
			}
		else if (line.match(note6)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx, value:Number(RegExp.$2)});
			}
		else if (line.match(note6b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 100, value:Number(RegExp.$2)});
			}
		else if (line.match(note6c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (line.match(note6d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 300, value:Number(RegExp.$2)});
			}
		else if (line.match(note6e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:26, dataId:indx + 400, value:Number(RegExp.$2)});
			}
		else if (line.match(note6x)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.CParams[indx] = Number(RegExp.$2);
			}
		else if (line.match(note6y)) {
			cFlag = true;
			}
		else if (line.match(note6z)) {
			cFlag = false;
			}
		else if (line.match(note7)) {
			obj.traits.push({code:27, dataId:0, value:Number(RegExp.$1)});
			}
		else if (line.match(note7b)) {
			obj.traits.push({code:27, dataId:1, value:Number(RegExp.$1)});
			}
		else if (line.match(note7c)) {
			obj.traits.push({code:27, dataId:2, value:Number(RegExp.$1)});
			}
		else if (line.match(note7d)) {
			obj.traits.push({code:27, dataId:3, value:Number(RegExp.$1)});
			}
		else if (line.match(note7e)) {
			obj.traits.push({code:27, dataId:4, value:Number(RegExp.$1)});
			}
		else if (line.match(note8)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_DEBUFF_RATE, dataId:indx + 10, value:Number(RegExp.$2)});
			}
		else if (line.match(note8b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.traits.push({code:Game_BattlerBase.TRAIT_DEBUFF_RATE, dataId:indx + 200, value:Number(RegExp.$2)});
			}
		else if (nFlag) {
			if (line.match(/(\w+) = (.*)/i)) {
			    var indx = RegExp.$1;
			    if (isNaN(Number(indx))) indx = ICF.Param.NParams.indexOf(indx.toLowerCase());
			    indx = (Number(indx));
			    if (Number(indx) > -1) obj.NParamEval[indx] = RegExp.$2;
			    else obj.NParamEvalAll = obj.NParamEvalAll + line + '\n';
			} else obj.NParamEvalAll = obj.NParamEvalAll + line + '\n';
			}
		else if (pFlag) {
			if (line.match(/(\w+) = (.*)/i)) {
			    var indx = RegExp.$1;
			    if (isNaN(Number(indx))) indx = ICF.Param.PParams.indexOf(indx.toLowerCase());
			    indx = (Number(indx));
			    if (Number(indx) > -1) obj.PParamEval[indx] = RegExp.$2;
			    else obj.PParamEvalAll = obj.PParamEvalAll + line + '\n';
			} else obj.PParamEvalAll = obj.PParamEvalAll + line + '\n';
			}
		else if (cFlag) {
			if (line.match(/(\w+) = (.*)/i)) {
			    var indx = RegExp.$1;
			    if (isNaN(Number(indx))) indx = ICF.Param.CParamsMax.indexOf(indx.toLowerCase());
			    indx = (Number(indx));
			    if (Number(indx) > -1) obj.CParamEval[indx] = RegExp.$2;
			    else obj.CParamEvalAll = obj.CParamEvalAll + line + '\n';
			} else obj.CParamEvalAll = obj.CParamEvalAll + line + '\n';
			}
		else if (bFlag) {
			if (line.match(/(\w+) = (.*)/i)) {
			    var indx = RegExp.$1;
			    if (isNaN(Number(indx))) indx = ICF.Param.BParams.indexOf(indx.toLowerCase());
			    indx = (Number(indx));
			    if (Number(indx) > -1) obj.BParamEval[indx] = RegExp.$2;
			    else obj.NParamEvalAll = obj.BParamEvalAll + line + '\n';
			} else obj.NParamEvalAll = obj.BParamEvalAll + line + '\n';
			}
	}
    }
};

ICF.NotetagsProcessor.ParamCoreC = function(group) {
    var note1 = /<(?:NBUFF):[ ]*(\w+)[ ]+(\d+)>/i;
    var note1b = /<(?:NDEBUFF):[ ]*(\w+)[ ]+(\d+)>/i;
    var note1c = /<(?:REMOVE NBUFF):[ ]*(\w+)[ ]+>/i;
    var note1d = /<(?:REMOVE NDEBUFF):[ ]*(\w+)[ ]+>/i;
    var note2 = /<(?:CBUFF):[ ]*(\w+)[ ]+(\d+)>/i;
    var note2b = /<(?:CDEBUFF):[ ]*(\w+)[ ]+(\d+)>/i;
    var note2c = /<(?:REMOVE CBUFF):[ ]*(\w+)[ ]+>/i;
    var note2d = /<(?:REMOVE CDEBUFF):[ ]*(\w+)[ ]+>/i;
    var note3 = /<(?:NPARAM GROW):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3b = /<(?:PPARAM GROW):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3c = /<(?:CPARAM GROW):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3d = /<(?:XPARAM GROW):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note3e = /<(?:SPARAM GROW):[ ]*(\w+)[ ]+((?:\-)?\d+(?:\.\d+)?)>/i;
    var note4 = /<(?:DAMAGE TYPE):[ ]+(\w+)>/i;
    var note4b = /<(?:RECOVER CPARAM):[ ]+(\w+)(?:\s+((?:\-)?\d+))?(?:\s+rate\s+((?:\-)?\d+(?:\.\d+)?))?>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.damage.cparam = -1;

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:35, dataId:indx, value1:Number(RegExp.$2)});
			}
		else if (line.match(note1b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:36, dataId:indx, value1:Number(RegExp.$2)});
			}
		else if (line.match(note1c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:37, dataId:indx, value1:0});
			}
		else if (line.match(note1d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:38, dataId:indx, value1:0});
			}
		else if (line.match(note2)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:35, dataId:indx + 100, value1:Number(RegExp.$2)});
			}
		else if (line.match(note2b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:36, dataId:indx + 100, value1:Number(RegExp.$2)});
			}
		else if (line.match(note2c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:37, dataId:indx + 100, value1:0});
			}
		else if (line.match(note2d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:38, dataId:indx + 100, value1:0});
			}
		else if (line.match(note3)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.NParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:45, dataId:indx, value1:Number(RegExp.$2)});
			}
		else if (line.match(note3b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.PParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:46, dataId:indx, value1:Number(RegExp.$2)});
			}
		else if (line.match(note3c)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:47, dataId:indx, value1:Number(RegExp.$2)});
			}
		else if (line.match(note3d)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.XParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:42, dataId:indx + 10, value1:Number(RegExp.$2)});
			}
		else if (line.match(note3e)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.SParams.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx > -1) obj.effects.push({code:42, dataId:indx + 20, value1:Number(RegExp.$2)});
			}
		else if (line.match(note4)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx < 0) indx = ICF.Param.CParams.indexOf(RegExp.$1.toLowerCase());
			if (indx > -1) obj.damage.cparam = indx;
			}
		else if (line.match(note4b)) {
			var indx = (isNaN(Number(RegExp.$1)))? ICF.Param.CParamsMax.indexOf(RegExp.$1.toLowerCase()) : Number(RegExp.$1);
			if (indx < 0) indx = ICF.Param.CParams.indexOf(RegExp.$1.toLowerCase());
			if (indx > -1) {
				var v1 = (isNaN(Number(RegExp.$2)))? 0 : Number(RegExp.$2);
				var v2 = (isNaN(Number(RegExp.$3)))? 0 : Number(RegExp.$3);
				if (v1 != 0 || v2 != 0) obj.effects.push({code:14, dataId:indx, value1:v1, value2:v2});
			}
		}
	}
    }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

if (ICF.Param.BParams[0].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[0], { get: function() { return this.param(0); }, configurable: true });
if (ICF.Param.BParams[1].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[1], { get: function() { return this.param(1); }, configurable: true });
if (ICF.Param.BParams[2].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[2], { get: function() { return this.param(2); }, configurable: true });
if (ICF.Param.BParams[3].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[3], { get: function() { return this.param(3); }, configurable: true });
if (ICF.Param.BParams[4].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[4], { get: function() { return this.param(4); }, configurable: true });
if (ICF.Param.BParams[5].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[5], { get: function() { return this.param(5); }, configurable: true });
if (ICF.Param.BParams[6].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[6], { get: function() { return this.param(6); }, configurable: true });
if (ICF.Param.BParams[7].length > 0) Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.BParams[7], { get: function() { return this.param(7); }, configurable: true });

Object.defineProperty(Game_BattlerBase.prototype, 'mtp', { get: function() { return this.maxTp(); }, configurable: true });


for (var i = 0; i < ICF.Param.NParams.length; i++) {
	if (ICF.Param.NParams[i].length > 0) {
		eval("Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.NParams[" + i + "], { get: function() { return this.NParam(" + i + "); }, configurable: true });");
	}
}
for (var i = 0; i < ICF.Param.PParams.length; i++) {
	if (ICF.Param.PParams[i].length > 0) {
		eval("Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.PParams[" + i + "], { get: function() { return this.PParam(" + i + "); }, configurable: true });");
	}
}
for (var i = 0; i < ICF.Param.CParamsMax.length; i++) {
	if (ICF.Param.CParamsMax[i].length > 0) {
		eval("Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.CParamsMax[" + i + "], { get: function() { return this.CParam(" + i + "); }, configurable: true });");
	}
	if (ICF.Param.CParams[i].length > 0) {
		eval("Object.defineProperty(Game_BattlerBase.prototype, ICF.Param.CParams[" + i + "], { get: function() { return this.CParamValue(" + i + "); }, configurable: true });");
	}
}

Object.defineProperty(Game_BattlerBase.prototype, 'level', { value: 1, configurable: true});

if (!Game_BattlerBase.prototype.equips) Game_BattlerBase.prototype.equips = function() { return []; };
if (!Game_BattlerBase.prototype.currentClass) Game_BattlerBase.prototype.currentClass = function() { return null; };

ICF.ParamCore.clearParamPlus = Game_BattlerBase.prototype.clearParamPlus;
Game_BattlerBase.prototype.clearParamPlus = function() {
	ICF.ParamCore.clearParamPlus.call(this);
	this._NParamPlus = [];
	this._PParamPlus = [];
	this._CParamPlus = [];
};

ICF.ParamCore.clearBuffs = Game_BattlerBase.prototype.clearBuffs;
Game_BattlerBase.prototype.clearBuffs = function() {
	ICF.ParamCore.clearBuffs.call(this);
	this._NBuffs = [];
	this._NBuffTurns = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	this._CBuffs = [];
	this._CBuffTurns = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
};

ICF.ParamCore.battlerRefresh = Game_BattlerBase.prototype.refresh;
Game_BattlerBase.prototype.refresh = function() {
	ICF.ParamCore.battlerRefresh.call(this);
	if (!this._CParamValues) this._CParamValues = [];
	for (var i = 0; i < ICF.Param.CParamsMax.length; i++) {
		if (this._CParamValues[i] === undefined) this._CParamValues[i] = this.CParam(i);
		this._CParamValues[i] = this._CParamValues[i].clamp(0, this.CParam(i));
	}
};

ICF.ParamCore.battlerRecoverAll = Game_BattlerBase.prototype.recoverAll;
Game_BattlerBase.prototype.recoverAll = function() {
	ICF.ParamCore.battlerRecoverAll.call(this);
	this.resetCParams(1);
};

ICF.ParamCore.battlerDie = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function() {
    ICF.ParamCore.battlerDie.call(this);
    this.resetCParams(2);
};

Game_BattlerBase.prototype.eraseNBuff = function(paramId) {
    this._NBuffs[paramId] = 0;
    this._NBuffTurns[paramId] = 0;
};

Game_BattlerBase.prototype.NBuffLength = function() {
    return this._NBuffs.length;
};

Game_BattlerBase.prototype.NBuff = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    return this._NBuffs[paramId];
};

Game_BattlerBase.prototype.isNBuffAffected = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    return this._NBuffs[paramId] > 0;
};

Game_BattlerBase.prototype.isNDebuffAffected = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    return this._NBuffs[paramId] < 0;
};

Game_BattlerBase.prototype.isNBuffOrDebuffAffected = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    return this._NBuffs[paramId] !== 0;
};

Game_BattlerBase.prototype.isMaxNBuffAffected = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    return this._NBuffs[paramId] >= ICF.Param.MaxBuff;
};

Game_BattlerBase.prototype.isMaxNDebuffAffected = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    return this._NBuffs[paramId] <= ICF.Param.MaxDebuff;
};

Game_BattlerBase.prototype.increaseNBuff = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    if (!this.isMaxNBuffAffected(paramId)) {
        this._NBuffs[paramId]++;
    }
};

Game_BattlerBase.prototype.decreaseNBuff = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    if (!this.isMaxNDebuffAffected(paramId)) {
        this._NBuffs[paramId]--;
    }
};

Game_BattlerBase.prototype.overwriteNBuffTurns = function(paramId, turns) {
    if (!this._NBuffTurns[paramId]) this._NBuffTurns[paramId] = 0;
    if (this._NBuffTurns[paramId] < turns) {
        this._NBuffTurns[paramId] = turns;
    }
};

Game_BattlerBase.prototype.isNBuffExpired = function(paramId) {
    if (!this._NBuffTurns[paramId]) this._NBuffTurns[paramId] = 0;
    return this._NBuffTurns[paramId] === 0;
};

Game_BattlerBase.prototype.eraseCBuff = function(paramId) {
    this._CBuffs[paramId] = 0;
    this._CBuffTurns[paramId] = 0;
};

Game_BattlerBase.prototype.CBuffLength = function() {
    return this._CBuffs.length;
};

Game_BattlerBase.prototype.CBuff = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    return this._CBuffs[paramId];
};

Game_BattlerBase.prototype.isCBuffAffected = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    return this._CBuffs[paramId] > 0;
};

Game_BattlerBase.prototype.isCDebuffAffected = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    return this._CBuffs[paramId] < 0;
};

Game_BattlerBase.prototype.isCBuffOrDebuffAffected = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    return this._CBuffs[paramId] !== 0;
};

Game_BattlerBase.prototype.isMaxCBuffAffected = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    return this._CBuffs[paramId] >= ICF.Param.MaxBuff;
};

Game_BattlerBase.prototype.isMaxCDebuffAffected = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    return this._CBuffs[paramId] <= ICF.Param.MaxDebuff;
};

Game_BattlerBase.prototype.increaseCBuff = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    if (!this.isMaxCBuffAffected(paramId)) {
        this._CBuffs[paramId]++;
    }
};

Game_BattlerBase.prototype.decreaseCBuff = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    if (!this.isMaxCDebuffAffected(paramId)) {
        this._CBuffs[paramId]--;
    }
};

Game_BattlerBase.prototype.overwriteCBuffTurns = function(paramId, turns) {
    if (!this._CBuffTurns[paramId]) this._CBuffTurns[paramId] = 0;
    if (this._CBuffTurns[paramId] < turns) {
        this._CBuffTurns[paramId] = turns;
    }
};

Game_BattlerBase.prototype.isCBuffExpired = function(paramId) {
    if (!this._CBuffTurns[paramId]) this._CBuffTurns[paramId] = 0;
    return this._CBuffTurns[paramId] === 0;
};

Game_BattlerBase.prototype.isMaxBuffAffected = function(paramId) {
    return this._buffs[paramId] >= ICF.Param.MaxBuff;
};

Game_BattlerBase.prototype.isMaxDebuffAffected = function(paramId) {
    return this._buffs[paramId] <= ICF.Param.MaxDebuff;
};

ICF.ParamCore.updateBuffTurns = Game_BattlerBase.prototype.updateBuffTurns;
Game_BattlerBase.prototype.updateBuffTurns = function() {
    ICF.ParamCore.updateBuffTurns.call(this);
    for (var i = 0; i < this._NBuffTurns.length; i++) {
        if (this._NBuffTurns[i] > 0) {
            this._NBuffTurns[i]--;
        }
    }
    for (var i = 0; i < this._CBuffTurns.length; i++) {
        if (this._CBuffTurns[i] > 0) {
            this._CBuffTurns[i]--;
        }
    }
};

ICF.ParamCore.buffIcons = Game_BattlerBase.prototype.buffIcons;
Game_BattlerBase.prototype.buffIcons = function() {
    var icons = ICF.ParamCore.buffIcons.call(this);
    for (var i = 0; i < this._NBuffs.length; i++) {
        if ((this._NBuffs[i] > 0)&&(ICF.Param.NParamBuffIcons[i].length > 0)) {
            icons.push(ICF.Param.NParamBuffIcons[i][Math.min(ICF.Param.NParamBuffIcons[i].length, this._NBuffs[i]) - 1]);
        } else if ((this._NBuffs[i] < 0)&&(ICF.Param.NParamDebuffIcons[i].length > 0)) {
            icons.push(ICF.Param.NParamDebuffIcons[i][Math.min(ICF.Param.NParamDebuffIcons[i].length, Math.abs(this._NBuffs[i])) - 1]);
        }
    }
    for (var i = 0; i < this._CBuffs.length; i++) {
        if ((this._CBuffs[i] > 0)&&(ICF.Param.CParamBuffIcons[i].length > 0)) {
            icons.push(ICF.Param.CParamBuffIcons[i][Math.min(ICF.Param.CParamBuffIcons[i].length, this._CBuffs[i]) - 1]);
        } else if ((this._CBuffs[i] < 0)&&(ICF.Param.CParamDebuffIcons[i].length > 0)) {
            icons.push(ICF.Param.CParamDebuffIcons[i][Math.min(ICF.Param.CParamDebuffIcons[i].length, Math.abs(this._CBuffs[i])) - 1]);
        }
    }
    return icons;
};

Game_BattlerBase.prototype.buffIconIndex = function(buffLevel, paramId) {
    if ((buffLevel > 0)&&(ICF.Param.BParamBuffIcons[paramId].length > 0)) {
	return ICF.Param.BParamBuffIcons[paramId][Math.min(ICF.Param.BParamBuffIcons[paramId].length, buffLevel) - 1];
    } else if ((buffLevel < 0)&&(ICF.Param.BParamDebuffIcons[paramId].length > 0)) {
        return ICF.Param.BParamDebuffIcons[paramId][Math.min(ICF.Param.BParamDebuffIcons[paramId].length, Math.abs(buffLevel)) - 1];
    } else {
        return 0;
    }
};

Game_BattlerBase.prototype.NParamBasic = function(array, level) {
    if (array.length == 1) {
        return Number(array[0]);
    } else if (array.length == 2) {
        return Number(array[0]) + Number(array[1] * (level - 1));
    } else if (array.length == 3 || array[3] > level) {
        return Number(array[0]) + Number(array[1] * (level - 1)) + Number(array[2] * Math.pow(level - 1, 1.2));
    } else if (array.length > 3) {
        return Number(array[0]) + Number(array[1] * (array[3] - 1)) + Number(array[2] * Math.pow(array[3] - 1, 1.2));
    } else {
        return 0;
    }
};

Game_BattlerBase.prototype.NParamBase = function(paramId) {
    var array = ICF.Param.NParamBase[paramId];
    if (!Array.isArray(array)) return (array != '')? eval(array) : 0;
    if (array.length < 1) {
        return 0;
    } else {
        return this.NParamBasic(array, this.level);
    }
};

Game_BattlerBase.prototype.NParamPlus = function(paramId) {
    if (!this._NParamPlus[paramId]) this._NParamPlus[paramId] = 0;
    return this._NParamPlus[paramId] + this.traitsSum(Game_BattlerBase.TRAIT_NPARAM, paramId) + this.NParamEquips(paramId) + this.NParamStates(paramId);
};

Game_BattlerBase.prototype.NParamEquips = function(paramId) {
    var value = 0;
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item && item.NParams[paramId]) value += item.NParams[paramId];
        if (item && item.NParamEval[paramId]) {
	    try {
		value += eval(item.NParamEvalAll + ';' + item.NParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom NParam Base #' + paramId + ($dataWeapons[item.id] == item?' in weapon #':' in equip #') + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.NParamStates = function(paramId) {
    var value = 0;
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var item = states[i];
        if (item && item.NParams[paramId]) value += item.NParams[paramId];
        if (item && item.NParamEval[paramId]) {
	    try {
		value += eval(item.NParamEvalAll + ';' + item.NParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom NParam Base #' + paramId + ' in state #' + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.NParamEval = function(paramId) {
    try {
	return Number(eval(ICF.Param.NParamPlus[paramId])) || 0;
    }
    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom NParam Plus #' + paramId);}}
    return 0;
};

Game_BattlerBase.prototype.NParamLimits = function(paramId) {
    var array = eval(ICF.Param.NParamLimit[paramId]);
    if (!Array.isArray(array)) return (!isNaN(Number(array)))? [array] : [];
    return array;
};

Game_BattlerBase.prototype.NParamRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_NPARAM, paramId + 100);
};

Game_BattlerBase.prototype.NParamXRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_NPARAM, paramId + 300);
};

Game_BattlerBase.prototype.NParamBuffRate = function(paramId) {
    if (!this._NBuffs[paramId]) this._NBuffs[paramId] = 0;
    if (this._NBuffs[paramId] < 0) return this._NBuffs[paramId] * ICF.Param.DebuffStrength + 1.0;
    return this._NBuffs[paramId] * ICF.Param.BuffStrength + 1.0;
};

Game_BattlerBase.prototype.NParamFlat = function(paramId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_NPARAM, paramId + 200);
};

Game_BattlerBase.prototype.NParamXFlat = function(paramId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_NPARAM, paramId + 400);
};

Game_BattlerBase.prototype.NParam = function(paramId) {
    var value = this.NParamBase(paramId) + this.NParamEval(paramId) + this.NParamPlus(paramId);
    value *= this.NParamRate(paramId);
    var limits = this.NParamLimits(paramId);
    var buff = this.NParamXRate(paramId) * this.NParamBuffRate(paramId);
    if (limits.length > 1) value = Math.min(value, limits[1]);
    var flat = 0;
    if (limits.length > 1) flat = (buff > 1)? Math.min(this.NParamFlat(paramId), limits[1] - value) : Math.min(this.NParamFlat(paramId), limits[1] - value * buff);
    else flat = this.NParamFlat(paramId);
    value *= buff;
    value += flat + this.NParamXFlat(paramId);
    if (limits.length < 1) return Math.round(value);
    if (limits.length < 3) return Math.round(Math.max(value,limits[0]));
    return Math.round(value.clamp(limits[0], limits[2]));
};

Game_BattlerBase.prototype.setNParamBase = function(paramId, amount) {
    this._NParamPlus[paramId] = amount - this.NParamBase(paramId);
};

Game_BattlerBase.prototype.setNParamPlus = function(paramId, amount) {
    this._NParamPlus[paramId] = amount;
};

for (var i = 0; i < ICF.Param.NParams.length; i++) {
	if (ICF.Param.NParams[i].length > 0) {
	    param = "set" + ICF.Param.NParams[i].substr(0,1).toUpperCase() + (ICF.Param.NParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + 'Base = function(amount) { this.setNParamBase(' + i + ', amount); };');
	    eval('Game_BattlerBase.prototype.' + param + 'Plus = function(amount) { this.setNParamPlus(' + i + ', amount); };');
	}
}

Game_BattlerBase.prototype.CParamBase = function(paramId) {
    var array = ICF.Param.CParamBase[paramId];
    if (!Array.isArray(array)) return (array != '')? eval(array) : 0;
    if (array.length < 1) {
        return 0;
    } else {
        return this.NParamBasic(array, this.level);
    }
};

Game_BattlerBase.prototype.CParamPlus = function(paramId) {
    if (!this._CParamPlus[paramId]) this._CParamPlus[paramId] = 0;
    return this._CParamPlus[paramId] + this.traitsSum(Game_BattlerBase.TRAIT_CPARAM, paramId) + this.CParamEquips(paramId) + this.CParamStates(paramId);
};

Game_BattlerBase.prototype.CParamEquips = function(paramId) {
    var value = 0;
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item && item.CParams[paramId]) value += item.CParams[paramId];
        if (item && item.CParamEval[paramId]) {
	    try {
		value += eval(item.CParamEvalAll + ';' + item.CParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom CParam Base #' + paramId + ($dataWeapons[item.id] == item?' in weapon #':' in equip #') + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.CParamStates = function(paramId) {
    var value = 0;
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var item = states[i];
        if (item && item.CParams[paramId]) value += item.CParams[paramId];
        if (item && item.CParamEval[paramId]) {
	    try {
		value += eval(item.CParamEvalAll + ';' + item.CParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom CParam Base #' + paramId + ' in state #' + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.CParamEval = function(paramId) {
    try {
	return Number(eval(ICF.Param.CParamPlus[paramId])) || 0;
    }
    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom CParam Plus #' + paramId);}}
    return 0;
};

Game_BattlerBase.prototype.CParamLimits = function(paramId) {
    var array = eval(ICF.Param.CParamLimit[paramId]);
    if (!Array.isArray(array)) return (!isNaN(Number(array)))? [array] : [];
    return array;
};

Game_BattlerBase.prototype.CParamRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_CPARAM, paramId + 100);
};

Game_BattlerBase.prototype.CParamXRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_CPARAM, paramId + 300);
};

Game_BattlerBase.prototype.CParamBuffRate = function(paramId) {
    if (!this._CBuffs[paramId]) this._CBuffs[paramId] = 0;
    if (this._CBuffs[paramId] < 0) return this._CBuffs[paramId] * ICF.Param.DebuffStrength + 1.0;
    return this._CBuffs[paramId] * ICF.Param.BuffStrength + 1.0;
};

Game_BattlerBase.prototype.CParamFlat = function(paramId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_CPARAM, paramId + 200);
};

Game_BattlerBase.prototype.CParamXFlat = function(paramId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_CPARAM, paramId + 400);
};

Game_BattlerBase.prototype.CParam = function(paramId) {
    var value = this.CParamBase(paramId) + this.CParamEval(paramId) + this.CParamPlus(paramId);
    value *= this.CParamRate(paramId);
    var limits = this.CParamLimits(paramId);
    var buff = this.CParamXRate(paramId) * this.CParamBuffRate(paramId);
    if (limits.length > 1) value = Math.min(value, limits[1]);
    var flat = 0;
    if (limits.length > 1) flat = (buff > 1)? Math.min(this.CParamFlat(paramId), limits[1] - value) : Math.min(this.CParamFlat(paramId), limits[1] - value * buff);
    else flat = this.CParamFlat(paramId);
    value *= buff;
    value += flat + this.CParamXFlat(paramId);
    if (limits.length < 1) return Math.round(value);
    if (limits.length < 3) return Math.round(Math.max(value,limits[0]));
    return Math.round(value.clamp(limits[0], limits[2]));
};

Game_BattlerBase.prototype.resetCParamValue = function(paramId) {
    if (!this._CParamValues) this._CParamValues = [];
    this._CParamValues[paramId] = this.CParam(paramId) * ICF.Param.CParamResetValue[paramId];
    this._CParamValues[paramId] = this._CParamValues[paramId].clamp(0, this.CParam(paramId));
};

Game_BattlerBase.prototype.resetCParams = function(ctype) {
    for (var i = 0; i < ICF.Param.CParams.length; i++) {
	if (ICF.Param.CParamResetType[i] == ctype) this.resetCParamValue(i);
    }
};

Game_BattlerBase.prototype.CParamValue = function(paramId) {
    if (!this._CParamValues) this._CParamValues = [];
    if (this._CParamValues[paramId] === undefined) this.resetCParamValue(paramId);
    return this._CParamValues[paramId];
};

Game_BattlerBase.prototype.setCParamValue = function(paramId, amount) {
    if (!this._CParamValues) this._CParamValues = [];
    this._CParamValues[paramId] = amount;
    this._CParamValues[paramId] = this._CParamValues[paramId].clamp(0, this.CParam(paramId));
};

Game_BattlerBase.prototype.isCParamValid = function(paramId) {
    if (ICF.Param.defaultValidCParams.length == 0) return true;
    return ICF.Param.defaultValidCParams.contains(paramId);
};

Game_BattlerBase.prototype.isCParamMain = function(paramId) {
    if (ICF.Param.defaultMainCParams.length == 0) return true;
    return ICF.Param.defaultMainCParams.contains(paramId);
};

Game_BattlerBase.prototype.gainCParamValue = function(paramId, amount) {
    if (this.isCParamValid(paramId)) {
	this._result.cparamDamages.push([paramId, -amount]);
	if (this._result.cparamDamage[paramId] === undefined) this._result.cparamDamage[paramId] = 0;
	this._result.cparamDamage[paramId] -= amount;
	if (this.isCParamMain(paramId) && !this._result.cparams.contains(paramId)) this._result.cparams.push(paramId);
    }
    if (!this._CParamValues) this._CParamValues = [];
    if (this._CParamValues[paramId] === undefined) this.resetCParamValue(paramId);
    this._CParamValues[paramId] += amount;
    this._CParamValues[paramId] = this._CParamValues[paramId].clamp(0, this.CParam(paramId));
};

Game_BattlerBase.prototype.gainSilentCParamValue = function(paramId, amount) {
    if (!this._CParamValues) this._CParamValues = [];
    if (this._CParamValues[paramId] === undefined) this.resetCParamValue(paramId);
    this._CParamValues[paramId] += amount;
    this._CParamValues[paramId] = this._CParamValues[paramId].clamp(0, this.CParam(paramId));
};

Game_BattlerBase.prototype.setCParamBase = function(paramId, amount) {
    this._CParamPlus[paramId] = amount - this.CParamBase(paramId);
};

Game_BattlerBase.prototype.setCParamPlus = function(paramId, amount) {
    this._CParamPlus[paramId] = amount;
};

for (var i = 0; i < ICF.Param.CParams.length; i++) {
	if (ICF.Param.CParams[i].length > 0) {
	    var param = "gain" + ICF.Param.CParams[i].substr(0,1).toUpperCase() + (ICF.Param.CParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + ' = function(amount) { this.gainCParamValue(' + i + ', amount); };');
	    param = "gainSilent" + ICF.Param.CParams[i].substr(0,1).toUpperCase() + (ICF.Param.CParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + ' = function(amount) { this.gainSilentCParamValue(' + i + ', amount); };');
	    param = "set" + ICF.Param.CParams[i].substr(0,1).toUpperCase() + (ICF.Param.CParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + ' = function(amount) { this.setCParamValue(' + i + ', amount); };');
	    eval('Game_BattlerBase.prototype.' + ICF.Param.CParams[i] + 'Rate = function(amount) { return (this.CParamValue(' + i + ') / this.CParam(' + i + ')).clamp(0, 1); };');
	    param = "set" + ICF.Param.CParamsMax[i].substr(0,1).toUpperCase() + (ICF.Param.CParamsMax[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + 'Base = function(amount) { this.setCParamBase(' + i + ', amount); };');
	    eval('Game_BattlerBase.prototype.' + param + 'Plus = function(amount) { this.setCParamPlus(' + i + ', amount); };');
	}
}

Game_BattlerBase.prototype.PParamBase = function(pparamId) {
    return eval(ICF.Param.PParamBase[pparamId]) || 0;
}

Game_BattlerBase.prototype.PParamEquips = function(paramId) {
    var value = 0;
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item && item.PParams[paramId]) value += item.PParams[paramId];
        if (item && item.PParamEval[paramId]) {
	    try {
		value += eval(item.PParamEvalAll + ';' + item.PParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom PParam Base #' + paramId + ($dataWeapons[item.id] == item?' in weapon #':' in equip #') + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.PParamStates = function(paramId) {
    var value = 0;
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var item = states[i];
        if (item && item.PParams[paramId]) value += item.PParams[paramId];
        if (item && item.PParamEval[paramId]) {
	    try {
		value += eval(item.PParamEvalAll + ';' + item.PParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom PParam Base #' + paramId + ' in state #' + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.PParamLimits = function(paramId) {
    var array = eval(ICF.Param.PParamLimit[paramId]);
    if (!Array.isArray(array)) return (!isNaN(Number(array)))? [array] : [];
    return array;
};

Game_BattlerBase.prototype.PParamPlus = function(pparamId) {
    if (!this._PParamPlus) this._PParamPlus = [];
    if (isNaN(this._PParamPlus[pparamId])) this._PParamPlus[pparamId] = 0;
    return this._PParamPlus[pparamId];
};

Game_BattlerBase.prototype.PParam = function(pparamId) {
    var value = this.PParamBase(pparamId) + this.traitsSum(Game_BattlerBase.TRAIT_PPARAM, pparamId);
    var limits = this.PParamLimits(pparamId);
    value += this.PParamEquips(pparamId) + this.PParamPlus(pparamId) + this.PParamStates(pparamId);
    value *= this.traitsPi(Game_BattlerBase.TRAIT_PPARAM, pparamId + 100);
    value += this.traitsSum(Game_BattlerBase.TRAIT_PPARAM, pparamId + 200);
    if (limits.length > 1) return value.clamp(limits[0], limits[1]);
    if (limits.length > 0) return Math.max(value, limits[0]);
    return value;
};

Game_BattlerBase.prototype.setPParamBase = function(paramId, amount) {
    if (!this._PParamPlus) this._PParamPlus = [];
    this._PParamPlus[paramId] = amount - this.PParamBase(paramId);
};

Game_BattlerBase.prototype.setPParamPlus = function(paramId, amount) {
    if (!this._PParamPlus) this._PParamPlus = [];
    this._PParamPlus[paramId] = amount;
};

for (var i = 0; i < ICF.Param.PParams.length; i++) {
	if (ICF.Param.PParams[i].length > 0) {
	    param = "set" + ICF.Param.PParams[i].substr(0,1).toUpperCase() + (ICF.Param.PParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + 'Base = function(amount) { this.setPParamBase(' + i + ', amount); };');
	    eval('Game_BattlerBase.prototype.' + param + 'Plus = function(amount) { this.setPParamPlus(' + i + ', amount); };');
	}
}

ICF.ParamCore.paramplus = Game_BattlerBase.prototype.paramPlus;
Game_BattlerBase.prototype.paramPlus = function(paramId) {
    return ICF.ParamCore.paramplus.call(this, paramId) + this.traitsSum(Game_BattlerBase.TRAIT_PARAM, paramId + 10);
};

Game_BattlerBase.prototype.paramFlat = function(paramId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_PARAM, paramId + 20);
};

Game_BattlerBase.prototype.paramXFlat = function(paramId) {
    return this.traitsSum(Game_BattlerBase.TRAIT_PARAM, paramId + 40);
};

Game_BattlerBase.prototype.paramXRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_PARAM, paramId + 30);
};

Game_BattlerBase.prototype.paramLimits = function(paramId) {
    var array = eval(ICF.Param.BParamLimit[paramId]);
    if (!Array.isArray(array)) return (!isNaN(Number(array)))? [array] : [];
    return array;
};

Game_BattlerBase.prototype.paramEquips = function(paramId) {
    var value = 0;
    var equips = this.equips();
    for (var i = 0; i < equips.length; i++) {
        var item = equips[i];
        if (item && item.BParamEval[paramId]) {
	    try {
		value += eval(item.BParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom param Base #' + paramId + ($dataWeapons[item.id] == item?' in weapon #':' in equip #') + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.paramStates = function(paramId) {
    var value = 0;
    var states = this.states();
    for (var i = 0; i < states.length; i++) {
        var item = states[i];
        if (item && item.BParamEval[paramId]) {
	    try {
		value += eval(item.BParamEvalAll + ';' + item.BParamEval[paramId]);
	        }
	    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom BParam Base #' + paramId + ' in state #' + item.id);}}
        }
    }
    return value;
};

Game_BattlerBase.prototype.paramEval = function(paramId) {
    try {
	return Number(eval(ICF.Param.BParamPlus[paramId])) || 0;
    }
    catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom BParam' + paramId + ' Plus Eval');}}
    return 0;
};

Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
    if (this._buffs[paramId] < 0) return this._buffs[paramId] * ICF.Param.DebuffStrength + 1.0;
    return this._buffs[paramId] * ICF.Param.BuffStrength + 1.0;
};

Game_BattlerBase.prototype.param = function(paramId) {
    var value = this.paramBase(paramId) + this.paramPlus(paramId) + this.paramEquips(paramId) + this.paramStates(paramId) + this.paramEval(paramId);
    value *= this.paramRate(paramId);
    var limits = this.paramLimits(paramId);
    var buff = this.paramXRate(paramId) * this.paramBuffRate(paramId);
    if (limits.length > 1) value = Math.min(value, limits[1]);
    var flat = 0;
    if (limits.length > 1) flat = (buff > 1)? Math.min(this.paramFlat(paramId), limits[1] - value) : Math.min(this.paramFlat(paramId), limits[1] - value * buff);
    else flat = this.paramFlat(paramId);
    value *= buff;
    value += flat + this.paramXFlat(paramId);
    if (limits.length < 1) return Math.round(value);
    if (limits.length < 3) return Math.round(Math.max(value,limits[0]));
    return Math.round(value.clamp(limits[0], limits[2]));
};

Game_BattlerBase.prototype.setBParamBase = function(paramId, amount) {
    this._paramPlus[paramId] = amount - this.paramBase(paramId);
};

Game_BattlerBase.prototype.setBParamPlus = function(paramId, amount) {
    this._paramPlus[paramId] = amount;
};

for (var i = 0; i < ICF.Param.BParams.length; i++) {
	if (ICF.Param.BParams[i].length > 0) {
	    param = "set" + ICF.Param.BParams[i].substr(0,1).toUpperCase() + (ICF.Param.BParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + 'Base = function(amount) { this.setBParamBase(' + i + ', amount); };');
	    eval('Game_BattlerBase.prototype.' + param + 'Plus = function(amount) { this.setBParamPlus(' + i + ', amount); };');
	}
}

Game_BattlerBase.prototype.maxTpBase = function() {
    return eval(ICF.Param.TPParamEval);
};

Game_BattlerBase.prototype.maxTpPlus = function() {
    return this.traitsSum(Game_BattlerBase.TRAIT_TPPARAM, 0);
};

Game_BattlerBase.prototype.maxTpRate = function() {
    return this.traitsPi(Game_BattlerBase.TRAIT_TPPARAM, 1);
};

Game_BattlerBase.prototype.maxTpFlat = function() {
    return this.traitsSum(Game_BattlerBase.TRAIT_TPPARAM, 2);
};

Game_BattlerBase.prototype.maxTpXRate = function() {
    return this.traitsPi(Game_BattlerBase.TRAIT_TPPARAM, 3);
};

Game_BattlerBase.prototype.maxTpXFlat = function() {
    return this.traitsSum(Game_BattlerBase.TRAIT_TPPARAM, 4);
};

Game_BattlerBase.prototype.maxTpLimits = function() { return [];
    var array = eval(ICF.Param.TPParamLimit);
    if (!Array.isArray(array)) return (!isNaN(Number(array)))? [array] : [];
    return array;
};

Game_BattlerBase.prototype.maxTp = function() {
    var value = this.maxTpBase() + this.maxTpPlus();
    value *= this.maxTpRate();
    var limits = this.maxTpLimits();
    var buff = this.maxTpXRate();
    if (limits.length > 1) value = Math.min(value, limits[1]);
    var flat = 0;
    if (limits.length > 1) flat = (buff > 1)? Math.min(this.maxTpFlat(), limits[1] - value) : Math.min(this.maxTpFlat(), limits[1] - value * buff);
    else flat = this.maxTpFlat();
    value *= buff;
    value += flat + this.maxTpXFlat();
    if (limits.length < 1) return Math.round(value);
    if (limits.length < 3) return Math.round(Math.max(value,limits[0]));
    return Math.round(value.clamp(limits[0], limits[2]));
};

Game_BattlerBase.prototype.setMaxTpBase = function(paramId, amount) {
    this._paramPlus[paramId] = amount - this.paramBase(paramId);
};

Game_BattlerBase.prototype.setMaxTpPlus = function(paramId, amount) {
    this._paramPlus[paramId] = amount;
};

Game_BattlerBase.prototype.xparamBase = function(xparamId) {
    return eval(ICF.Param.XParamBase[xparamId]) || 0;
}

Game_BattlerBase.prototype.xparamPlus = function(xparamId) {
    if (!this._XParamPlus) this._XParamPlus = [];
    return (this._XParamPlus[xparamId] || 0) + this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);
}

Game_BattlerBase.prototype.xparam = function(xparamId) {
    return (this.xparamBase(xparamId) + this.xparamPlus(xparamId)) * this.traitsPi(Game_BattlerBase.TRAIT_XPARAM, xparamId + 10) + this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId + 20);
};

Game_BattlerBase.prototype.setXParamBase = function(paramId, amount) {
    if (!this._XParamPlus) this._XParamPlus = [];
    this._XParamPlus[paramId] = amount - this.xparamBase(paramId);
};

Game_BattlerBase.prototype.setXParamPlus = function(paramId, amount) {
    if (!this._XParamPlus) this._XParamPlus = [];
    this._XParamPlus[paramId] = amount;
};

for (var i = 0; i < ICF.Param.XParams.length; i++) {
	if (ICF.Param.XParams[i].length > 0) {
	    param = "set" + ICF.Param.XParams[i].substr(0,1).toUpperCase() + (ICF.Param.XParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + 'Base = function(amount) { this.setXParamBase(' + i + ', amount); };');
	    eval('Game_BattlerBase.prototype.' + param + 'Plus = function(amount) { this.setXParamPlus(' + i + ', amount); };');
	}
}

Game_BattlerBase.prototype.sparamBase = function(sparamId) {
    return eval(ICF.Param.SParamBase[sparamId]) || 1;
}

Game_BattlerBase.prototype.sparamPlus = function(sparamId) {
    if (!this._SParamPlus) this._SParamPlus = [];
    return (this._SParamPlus[sparamId] || 0) + this.traitsSum(Game_BattlerBase.TRAIT_SPARAM, sparamId + 10);
}

Game_BattlerBase.prototype.sparam = function(sparamId) {
    return (this.sparamBase(sparamId) + this.sparamPlus(sparamId)) * this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId) + this.traitsSum(Game_BattlerBase.TRAIT_SPARAM, sparamId + 20);
};

Game_BattlerBase.prototype.setSParamBase = function(paramId, amount) {
    if (!this._SParamPlus) this._SParamPlus = [];
    this._SParamPlus[paramId] = amount - this.sparamBase(paramId);
};

Game_BattlerBase.prototype.setSParamPlus = function(paramId, amount) {
    if (!this._SParamPlus) this._SParamPlus = [];
    this._SParamPlus[paramId] = amount;
};

for (var i = 0; i < ICF.Param.SParams.length; i++) {
	if (ICF.Param.SParams[i].length > 0) {
	    param = "set" + ICF.Param.SParams[i].substr(0,1).toUpperCase() + (ICF.Param.SParams[i].substr(1).toLowerCase());
	    eval('Game_BattlerBase.prototype.' + param + 'Base = function(amount) { this.setSParamBase(' + i + ', amount); };');
	    eval('Game_BattlerBase.prototype.' + param + 'Plus = function(amount) { this.setSParamPlus(' + i + ', amount); };');
	}
}

Game_BattlerBase.prototype.NDebuffRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_DEBUFF_RATE, paramId + 10);
};

Game_BattlerBase.prototype.CDebuffRate = function(paramId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_DEBUFF_RATE, paramId + 200);
};

Game_BattlerBase.prototype.addNParam = function(paramId, value) {
    if (!this._NParamPlus) this._NParamPlus = [];
    if (!this._NParamPlus[paramId]) this._NParamPlus[paramId] = 0;
    this._NParamPlus[paramId] += value;
    this.refresh();
};

Game_BattlerBase.prototype.addPParam = function(paramId, value) {
    if (!this._PParamPlus) this._PParamPlus = [];
    if (!this._PParamPlus[paramId]) this._PParamPlus[paramId] = 0;
    this._PParamPlus[paramId] += value;
    this.refresh();
};

Game_BattlerBase.prototype.addCParam = function(paramId, value) {
    if (!this._CParamPlus) this._CParamPlus = [];
    if (!this._CParamPlus[paramId]) this._CParamPlus[paramId] = 0;
    this._CParamPlus[paramId] += value;
    this.refresh();
};

Game_BattlerBase.prototype.addXParam = function(paramId, value) {
    if (!this._XParamPlus) this._XParamPlus = [];
    if (!this._XParamPlus[paramId]) this._XParamPlus[paramId] = 0;
    this._XParamPlus[paramId] += value;
    this.refresh();
};

Game_BattlerBase.prototype.addSParam = function(paramId, value) {
    if (!this._SParamPlus) this._SParamPlus = [];
    if (!this._SParamPlus[paramId]) this._SParamPlus[paramId] = 0;
    this._SParamPlus[paramId] += value;
    this.refresh();
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.addNBuff = function(paramId, turns) {
    if (this.isAlive()) {
        this.increaseNBuff(paramId);
        if (this.isNBuffAffected(paramId)) {
            this.overwriteNBuffTurns(paramId, turns);
        }
        this._result.pushAddedNBuff(paramId);
        this.refresh();
    }
};

Game_Battler.prototype.addNDebuff = function(paramId, turns) {
    if (this.isAlive()) {
        this.decreaseNBuff(paramId);
        if (this.isNDebuffAffected(paramId)) {
            this.overwriteNBuffTurns(paramId, turns);
        }
        this._result.pushAddedNDebuff(paramId);
        this.refresh();
    }
};

Game_Battler.prototype.removeNBuff = function(paramId) {
    if (this.isAlive() && this.isNBuffOrDebuffAffected(paramId)) {
        this.eraseNBuff(paramId);
        this._result.pushRemovedNBuff(paramId);
        this.refresh();
    }
};

Game_Battler.prototype.addCBuff = function(paramId, turns) {
    if (this.isAlive()) {
        this.increaseCBuff(paramId);
        if (this.isCBuffAffected(paramId)) {
            this.overwriteCBuffTurns(paramId, turns);
        }
        this._result.pushAddedCBuff(paramId);
        this.refresh();
    }
};

Game_Battler.prototype.addCDebuff = function(paramId, turns) {
    if (this.isAlive()) {
        this.decreaseCBuff(paramId);
        if (this.isCDebuffAffected(paramId)) {
            this.overwriteCBuffTurns(paramId, turns);
        }
        this._result.pushAddedCDebuff(paramId);
        this.refresh();
    }
};

Game_Battler.prototype.removeCBuff = function(paramId) {
    if (this.isAlive() && this.isCBuffOrDebuffAffected(paramId)) {
        this.eraseCBuff(paramId);
        this._result.pushRemovedCBuff(paramId);
        this.refresh();
    }
};

ICF.ParamCore.removeAllBuffs = Game_Battler.prototype.removeAllBuffs;
Game_Battler.prototype.removeAllBuffs = function() {
    ICF.ParamCore.removeAllBuffs.call(this);
    for (var i = 0; i < this.NBuffLength(); i++) {
        this.removeNBuff(i);
    }
    for (var i = 0; i < this.CBuffLength(); i++) {
        this.removeCBuff(i);
    }
};

ICF.ParamCore.removeBuffsAuto = Game_Battler.prototype.removeBuffsAuto;
Game_Battler.prototype.removeBuffsAuto = function() {
    ICF.ParamCore.removeBuffsAuto.call(this);
    for (var i = 0; i < this.NBuffLength(); i++) {
        if (this.isNBuffExpired(i)) {
            this.removeNBuff(i);
        }
    }
    for (var i = 0; i < this.CBuffLength(); i++) {
        if (this.isCBuffExpired(i)) {
            this.removeCBuff(i);
        }
    }
};

ICF.ParamCore.onBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function() {
    ICF.ParamCore.onBattleStart.call(this);
    this.resetCParams(3);
};

ICF.ParamCore.onBattleEnd = Game_Battler.prototype.onBattleEnd;
Game_Battler.prototype.onBattleEnd = function() {
    ICF.ParamCore.onBattleEnd.call(this);
    this.resetCParams(3);
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.NParamBase = function(paramId) {
    if ($dataActors[this._actorId].customNParam[paramId] != '') {
	try { 	var value = 0;
		eval($dataActors[this._actorId].customNParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom NParam Base #' + paramId + ' in actor #' + this._actorId);}}
    }
    if ($dataClasses[this._classId].customNParam[paramId] != '') {
	try { 	var value = 0;
		eval($dataClasses[this._classId].customNParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom NParam Base #' + paramId + ' in actor class #' + this._classId);}}
    }

    var array = $dataActors[this._actorId].basicNParam[paramId];
    if (!array || array.length < 1) array = $dataClasses[this._classId].basicNParam[paramId];

    if (!array || array.length < 1) return Game_BattlerBase.prototype.NParamBase.call(this, paramId);
    return this.NParamBasic(array, this.level);
};

Game_Actor.prototype.CParamBase = function(paramId) {
    if ($dataActors[this._actorId].customCParam[paramId] != '') {
	try { 	var value = 0;
		eval($dataActors[this._actorId].customCParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom CParam Base #' + paramId + ' in actor #' + this._actorId);}}
    }
    if ($dataClasses[this._classId].customCParam[paramId] != '') {
	try { 	var value = 0;
		eval($dataClasses[this._classId].customCParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom CParam Base #' + paramId + ' in actor class #' + this._classId);}}
    }

    var array = $dataActors[this._actorId].basicCParam[paramId];
    if (!array || array.length < 1) array = $dataClasses[this._classId].basicCParam[paramId];

    if (!array || array.length < 1) return Game_BattlerBase.prototype.CParamBase.call(this, paramId);
    return this.NParamBasic(array, this.level);
};

ICF.ParamCore.actorparambase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
    if ($dataActors[this._actorId].customBParam[paramId] != '') {
	try { 	var value = 0;
		var base = this.currentClass().params[paramId][1];
		eval($dataActors[this._actorId].customBParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Param Base #' + paramId + ' in actor #' + this._actorId);}}
    }
    if ($dataClasses[this._classId].customBParam[paramId] != '') {
	try { 	var value = 0;
		var base = this.currentClass().params[paramId][1];
		eval($dataClasses[this._classId].customBParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Param Base #' + paramId + ' in actor class #' + this._classId);}}
    }

    if (ICF.Param.BParamBase[paramId].length > 0) {
	try { 	var base = this.currentClass().params[paramId][1];
		return eval(ICF.Param.BParamBase[paramId]);
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in default Param Base #' + paramId);}}
    }
    return ICF.ParamCore.actorparambase.call(this, paramId);
};

Game_Actor.prototype.maxTpBase = function() {
    if ($dataActors[this._actorId].customTp != '') {
	try { 	var value = 0;
		eval($dataActors[this._actorId].customTp);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Tp Base in actor #' + this._actorId);}}
    }
    if ($dataClasses[this._classId].customTp != '') {
	try { 	var value = 0;
		eval($dataClasses[this._classId].customTp);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Tp Base in actor class #' + this._classId);}}
    }

    return Game_BattlerBase.prototype.maxTpBase.call(this);
};

Game_Actor.prototype.isCParamValid = function(paramId) {
    var ary = $dataActors[this._actorId].validCParams;
    if (ary.length == 0) ary = $dataClasses[this._classId].validCParams;
    if (ary.length > 0) return ary.contains(paramId);
    return Game_BattlerBase.prototype.isCParamValid.call(this, paramId);
};

Game_Actor.prototype.isCParamMain = function(paramId) {
    var ary = $dataActors[this._actorId].mainCParams;
    if (ary.length == 0) ary = $dataClasses[this._classId].mainCParams;
    if (ary.length > 0) return ary.contains(paramId);
    return Game_BattlerBase.prototype.isCParamMain.call(this, paramId);
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.NParamBase = function(paramId) {
    if ($dataEnemies[this._enemyId].customNParam[paramId] != '') {
	try { 	var value = 0;
		eval($dataEnemies[this._enemyId].customNParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom NParam Base #' + paramId + ' in enemy #' + this._enemyId);}}
    }
    var currentClass = this.currentClass();
    if (currentClass && currentClass.customNParam[paramId] != '') {
	try { 	var value = 0;
		eval(currentClass.customNParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom NParam Base #' + paramId + ' in enemy class #' + this._classId);}}
    }


    var array = $dataEnemies[this._enemyId].basicNParam[paramId];
    if ((!array || array.length < 1) && currentClass) array = currentClass.basicNParam[paramId];

    if (!array || array.length < 1) return Game_BattlerBase.prototype.NParamBase.call(this, paramId);
    return this.NParamBasic(array, this.level);
};

Game_Enemy.prototype.CParamBase = function(paramId) {
    if ($dataEnemies[this._enemyId].customCParam[paramId] != '') {
	try { 	var value = 0;
		eval($dataEnemies[this._enemyId].customCParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom CParam Base #' + paramId + ' in enemy #' + this._enemyId);}}
    }
    var currentClass = this.currentClass();
    if (currentClass && currentClass.customCParam[paramId] != '') {
	try { 	var value = 0;
		eval(currentClass.customCParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom CParam Base #' + paramId + ' in enemy class #' + this._classId);}}
    }


    var array = $dataEnemies[this._enemyId].basicCParam[paramId];
    if ((!array || array.length < 1) && currentClass) array = currentClass.basicCParam[paramId];

    if (!array || array.length < 1) return Game_BattlerBase.prototype.CParamBase.call(this, paramId);
    return this.NParamBasic(array, this.level);
};

ICF.ParamCore.enemyparambase = Game_Enemy.prototype.paramBase;
Game_Enemy.prototype.paramBase = function(paramId) {
    if ($dataEnemies[this._enemyId].customBParam[paramId] != '') {
	try { 	var value = 0;
		var base = (this.currentClass())? this.currentClass().params[paramId][1] : this.enemy().params[paramId];
		eval($dataEnemies[this._enemyId].customBParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Param Base #' + paramId + ' in enemy #' + this._enemyId);}}
    }
    var currentClass = this.currentClass();
    if (currentClass && currentClass.customBParam[paramId] != '') {
	try { 	var value = 0;
		var base = (this.currentClass())? this.currentClass().params[paramId][1] : this.enemy().params[paramId];
		eval(currentClass.customBParam[paramId]);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Param Base #' + paramId + ' in enemy class #' + this._classId);}}
    }

    if (ICF.Param.BParamBase[paramId].length > 0) {
	try { 	var base = (this.currentClass())? this.currentClass().params[paramId][1] : this.enemy().params[paramId];
		return eval(ICF.Param.BParamBase[paramId]);
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in default Param Base #' + paramId);}}
    }
    return ICF.ParamCore.enemyparambase.call(this, paramId);
};

Game_Enemy.prototype.maxTpBase = function() {
    if ($dataEnemies[this._enemyId].customTp != '') {
	try { 	var value = 0;
		eval($dataEnemies[this._enemyId].customTp);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Tp in enemy #' + this._enemyId);}}
    }
    var currentClass = this.currentClass();
    if (currentClass && currentClass.customTp != '') {
	try { 	var value = 0;
		eval(currentClass.customTp);
		return value;
	    }
	catch (e) {if(ICF.Param.ParamCoreHalt){throw new Error('Error in custom Tp in enemy class #' + this._classId);}}
    }

    return Game_BattlerBase.prototype.maxTpBase.call(this);
};

Game_Enemy.prototype.isCParamValid = function(paramId) {
    var ary = $dataEnemies[this._enemyId].validCParams;
    var currentClass = this.currentClass();
    if ((ary.length == 0) && currentClass) ary = currentClass.validCParams;
    if (ary.length > 0) return ary.contains(paramId);
    return Game_BattlerBase.prototype.isCParamValid.call(this, paramId);
};

Game_Enemy.prototype.isCParamMain = function(paramId) {
    var ary = $dataEnemies[this._enemyId].mainCParams;
    var currentClass = this.currentClass();
    if ((ary.length == 0) && currentClass) ary = currentClass.mainCParams;
    if (ary.length > 0) return ary.contains(paramId);
    return Game_BattlerBase.prototype.isCParamMain.call(this, paramId);
};

//=============================================================================
// Game_Action
//=============================================================================

Game_Action.prototype.CParamEffect = function() {
    return this.item().damage.cparam;
};

Game_Action.prototype.isCParamEffect = function() {
    return this.item().damage.cparam > -1;
};

ICF.ParamCore.isHpEffect = Game_Action.prototype.isHpEffect;
Game_Action.prototype.isHpEffect = function() {
    if (this.isCParamEffect()) return false;
    return ICF.ParamCore.isHpEffect.call(this);
};

ICF.ParamCore.isMpEffect = Game_Action.prototype.isMpEffect;
Game_Action.prototype.isMpEffect = function() {
    if (this.isCParamEffect()) return false;
    return ICF.ParamCore.isMpEffect.call(this);
};

ICF.ParamCore.isHpRecover = Game_Action.prototype.isHpRecover;
Game_Action.prototype.isHpRecover = function() {
    if (this.isCParamEffect()) return false;
    return ICF.ParamCore.isHpRecover.call(this);
};

ICF.ParamCore.isMpRecover = Game_Action.prototype.isMpRecover;
Game_Action.prototype.isMpRecover = function() {
    if (this.isCParamEffect()) return false;
    return ICF.ParamCore.isMpRecover.call(this);
};

Game_Action.prototype.isCParamRecover = function() {
    if (!this.isCParamEffect()) return false;
    return this.checkDamageType([3, 4]);
};

ICF.ParamCore.testItemEffect = Game_Action.prototype.testItemEffect;
Game_Action.prototype.testItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_RECOVER_CPARAM :
        return target.CParamValue(effect.dataId) < target.CParam(effect.dataId) || effect.value1 < 0 || effect.value2 < 0;
    case Game_Action.EFFECT_ADD_NBUFF :
	if (effect.dataId >= 100) return !target.isMaxCBuffAffected(effect.dataId - 100);
        return !target.isMaxNBuffAffected(effect.dataId);
    case Game_Action.EFFECT_ADD_NDEBUFF :
	if (effect.dataId >= 100) return !target.isMaxCDebuffAffected(effect.dataId - 100);
        return !target.isMaxNDebuffAffected(effect.dataId);
    case Game_Action.REMOVE_NBUFF:
	if (effect.dataId >= 100) return !target.isCBuffAffected(effect.dataId - 100);
        return target.isNBuffAffected(effect.dataId);
    case Game_Action.REMOVE_NDEBUFF:
	if (effect.dataId >= 100) return !target.isCDebuffAffected(effect.dataId - 100);
        return target.isNDebuffAffected(effect.dataId);
    default:
        return ICF.ParamCore.testItemEffect.call(this, target, effect);
    }
};

ICF.ParamCore.executeDamage = Game_Action.prototype.executeDamage;
Game_Action.prototype.executeDamage = function(target, value) {
    var result = target.result();
    if (value === 0) {
        result.critical = false;
    }
    if (this.isCParamEffect()) {
        this.executeCParamDamage(target, this.CParamEffect(), value);
    }
    else {
        ICF.ParamCore.executeDamage.call(this, target, value);
    }
};

Game_Action.prototype.executeCParamDamage = function(target, cparamId, value) {
    if (this.isDrain()) {
        value = Math.min(target.CParamValue(cparamId), value);
    }
    this.makeSuccess(target);
    if (target.isCParamValid(cparamId)) target.result().cparams.push(cparamId);
    target.gainCParamValue(cparamId, -value);
    if (value > 0) {
        target.onDamage(value);
    }
    this.gainDrainedCParam(cparamId, value);
};

Game_Action.prototype.gainDrainedCParam = function(cparamId, value) {
    if (this.isDrain()) {
	var gainTarget = this.subject();
	if (this._reflectionTarget !== undefined) {
	    gainTarget = this._reflectionTarget;
	}
	gainTarget.gainCParamValue(cparamId, value);
    }
};

ICF.ParamCore.applyItemEffect = Game_Action.prototype.applyItemEffect;
Game_Action.prototype.applyItemEffect = function(target, effect) {
    switch (effect.code) {
    case Game_Action.EFFECT_RECOVER_CPARAM:
        this.itemEffectRecoverCParam(target, effect);
        break;
    case Game_Action.EFFECT_ADD_NBUFF:
	if (effect.dataId >= 100) {
		effect.dataId -= 100;
		this.itemEffectAddCBuff(target, effect);
		effect.dataId += 100;
        } else this.itemEffectAddNBuff(target, effect);
        break;
    case Game_Action.EFFECT_ADD_NDEBUFF:
        if (effect.dataId >= 100) {
		effect.dataId -= 100;
		this.itemEffectAddCDebuff(target, effect);
		effect.dataId += 100;
        } else this.itemEffectAddNDebuff(target, effect);
        break;
    case Game_Action.EFFECT_REMOVE_NBUFF:
        if (effect.dataId >= 100) {
		effect.dataId -= 100;
		this.itemEffectRemoveCBuff(target, effect);
		effect.dataId += 100;
        } else this.itemEffectRemoveNBuff(target, effect);
        break;
    case Game_Action.EFFECT_REMOVE_NDEBUFF:
        if (effect.dataId >= 100) {
		effect.dataId -= 100;
		this.itemEffectRemoveCDebuff(target, effect);
		effect.dataId += 100;
        } else this.itemEffectRemoveNDebuff(target, effect);
        break;
    case Game_Action.EFFECT_NGROW:
        this.itemEffectGrowNParam(target, effect);
        break;
    case Game_Action.EFFECT_PGROW:
        this.itemEffectGrowPParam(target, effect);
        break;
    case Game_Action.EFFECT_CGROW:
        this.itemEffectGrowCParam(target, effect);
        break;
    default:
        ICF.ParamCore.applyItemEffect.call(this, target, effect);
    }
};

Game_Action.prototype.itemEffectRecoverCParam = function(target, effect) {
    var value = (target.CParam(effect.dataId) * effect.value2 + effect.value1) * target.rec;
    if (this.isItem()) {
        value *= this.subject().pha;
    }
    value = Math.floor(value);
    if (value !== 0) {
        target.gainCParamValue(effect.dataId, value);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectAddNBuff = function(target, effect) {
    target.addNBuff(effect.dataId, effect.value1);
    this.makeSuccess(target);
};

Game_Action.prototype.itemEffectAddNDebuff = function(target, effect) {
    var chance = target.NDebuffRate(effect.dataId) * this.lukEffectRate(target);
    if (Math.random() < chance) {
        target.addNDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectRemoveNBuff = function(target, effect) {
    if (target.isNBuffAffected(effect.dataId)) {
        target.removeNBuff(effect.dataId);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectRemoveNDebuff = function(target, effect) {
    if (target.isNDebuffAffected(effect.dataId)) {
        target.removeNBuff(effect.dataId);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectAddCBuff = function(target, effect) {
    target.addCBuff(effect.dataId, effect.value1);
    this.makeSuccess(target);
};

Game_Action.prototype.itemEffectAddCDebuff = function(target, effect) {
    var chance = target.CDebuffRate(effect.dataId) * this.lukEffectRate(target);
    if (Math.random() < chance) {
        target.addCDebuff(effect.dataId, effect.value1);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectRemoveCBuff = function(target, effect) {
    if (target.isCBuffAffected(effect.dataId)) {
        target.removeCBuff(effect.dataId);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectRemoveCDebuff = function(target, effect) {
    if (target.isCDebuffAffected(effect.dataId)) {
        target.removeCBuff(effect.dataId);
        this.makeSuccess(target);
    }
};

Game_Action.prototype.itemEffectGrow = function(target, effect) {
    if (effect.dataId >= 20) target.addSParam(effect.dataId - 20, Math.floor(effect.value1));
    else if (effect.dataId >= 10) target.addXParam(effect.dataId - 10, Math.floor(effect.value1));
    else target.addParam(effect.dataId, Math.floor(effect.value1));
    this.makeSuccess(target);
};

Game_Action.prototype.itemEffectGrowNParam = function(target, effect) {
    target.addNParam(effect.dataId, Math.floor(effect.value1));
    this.makeSuccess(target);
};

Game_Action.prototype.itemEffectGrowPParam = function(target, effect) {
    target.addPParam(effect.dataId, Math.floor(effect.value1));
    this.makeSuccess(target);
};

Game_Action.prototype.itemEffectGrowCParam = function(target, effect) {
    target.addCParam(effect.dataId, Math.floor(effect.value1));
    this.makeSuccess(target);
};

//=============================================================================
// Game_ActionResult
//=============================================================================

ICF.ParamCore.GARClear = Game_ActionResult.prototype.clear;
Game_ActionResult.prototype.clear = function() {
    ICF.ParamCore.GARClear.call(this);
    this.addedNBuffs = [];
    this.addedNDebuffs = [];
    this.removedNBuffs = [];
    this.cparamDamages = [];
    this.cparamDamage = {};
    this.cparams = [];
};

Game_ActionResult.prototype.isNBuffAdded = function(paramId) {
    return this.addedNBuffs.contains(paramId);
};

Game_ActionResult.prototype.pushAddedNBuff = function(paramId) {
    if (!this.isNBuffAdded(paramId)) {
        this.addedNBuffs.push(paramId);
    }
};

Game_ActionResult.prototype.isNDebuffAdded = function(paramId) {
    return this.addedNDebuffs.contains(paramId);
};

Game_ActionResult.prototype.pushAddedNDebuff = function(paramId) {
    if (!this.isNDebuffAdded(paramId)) {
        this.addedNDebuffs.push(paramId);
    }
};

Game_ActionResult.prototype.isNBuffRemoved = function(paramId) {
    return this.removedNBuffs.contains(paramId);
};

Game_ActionResult.prototype.pushnRemovedBuff = function(paramId) {
    if (!this.isNBuffRemoved(paramId)) {
        this.removedNBuffs.push(paramId);
    }
};

//=============================================================================
// Game_Item
//=============================================================================

Game_Item.prototype.nparamTypes = function() {
    return this.traitDataTypesMod(24, 100);
};

Game_Item.prototype.pparamTypes = function() {
    return this.traitDataTypesMod(25, 100);
};

Game_Item.prototype.cparamTypes = function() {
    return this.traitDataTypesMod(26, 100);
};

Game_Item.prototype.paramTypes = function() {
    return this.traitDataTypesMod(21, 10);
};

Game_Item.prototype.xparamTypes = function() {
    return this.traitDataTypesMod(22, 10);
};

Game_Item.prototype.sparamTypes = function() {
    return this.traitDataTypesMod(23, 10);
};

//=============================================================================
// Sprite_Damage
//=============================================================================

if (Imported.ICFSoft_MainCore) Sprite_Damage.prototype.setup = function(target) {
    var result = target.result();
    if (result.missed || result.evaded) {
        this.createMiss();
	result.missed = false;
	result.evaded = false;
    } else if (target.isAlive() && result.cparamDamages.length > 0 && result.cparams.contains(result.cparamDamages[0][0])) {
        this.createCParamDigits(result.cparamDamages[0]);
        result.cparamDamages.splice(0,1);
    } else if (result.damages[0].length > 0) {
        this.createDigits(0, -result.damages[0][0]);
        result.damages[0].splice(0,1);
    } else if (target.isAlive() && result.damages[1].length > 0) {
        this.createDigits(2, -result.damages[1][0]);
        result.damages[1].splice(0,1);
    } else if (target.isAlive() && result.damages[2].length > 0) {
        this.createTpDigits(-result.damages[2][0]);
        result.damages[2].splice(0,1);
    } else if (target.isAlive() && result.cparamDamages.length > 0) {
        this.createCParamDigits(result.cparamDamages[0]);
        result.cparamDamages.splice(0,1);
    } else {
        result.damages[1] = [];
        result.damages[2] = [];
	result.cparamDamages = [];
    }
    if (!result.missed && !result.evaded && result.critical) {
        this.setupCriticalEffect();
	result.critical = false;
    }
    if (result.delay > 0) {
	this.opacity = 0;
    }
    this._delay = result.delay;
    result.delay += 35;
};

else Sprite_Damage.prototype.setup = function(target) {
    var result = target.result();
    if (result.missed || result.evaded) {
        this.createMiss();
    } else if (target.isAlive() && result.cparamDamages.length > 0 && result.cparams.contains(result.cparamDamages[0][0])) {
        this.createCParamDigits(result.cparamDamages[0]);
        result.cparamDamages.splice(0,1);
    } else if (result.hpAffected) {
        this.createDigits(0, result.hpDamage);
    } else if (target.isAlive() && result.mpDamage !== 0) {
        this.createDigits(2, result.mpDamage);
    } else if (target.isAlive() && result.cparamDamages.length > 0) {
        this.createCParamDigits(result.cparamDamages[0]);
        result.cparamDamages.splice(0,1);
    } else {
	result.cparamDamages = [];
    }
    if (result.critical) {
        this.setupCriticalEffect();
    }
};

Sprite_Damage.prototype.createCParamDigits = function(ary) {
    var string = Math.abs(ary[1]).toString();
    var row = (ary[1] < 0 ? 1 : 0);
    var w = this.digitWidth();
    var h = this.digitHeight();
    for (var i = 0; i < string.length; i++) {
        var sprite = this.createChildSprite();
        var n = Number(string[i]);
        sprite.setFrame(n * w, row * h, w, h);
        sprite.x = (i - (string.length - 1) / 2) * w;
        sprite.dy = -i;
    }
    var iconId = ICF.Param.CParamDamageIcons[ary[0]][row];
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = sx = iconId % 16 * pw;
    var sy = Math.floor(iconId / 16) * ph;
    var sprite = this.createChildSprite();
    sprite.bitmap = ImageManager.loadSystem('IconSet');
    sprite.setFrame(sx, sy, pw, ph);
    sprite.x = (string.length - (string.length - 1) / 2) * w + 8;
    sprite.dy = -string.length;
};

ICF.ParamCore.Sprite_Damage_createDigits = Sprite_Damage.prototype.createDigits;
if (ICF.Param.useDamageIcons) Sprite_Damage.prototype.createDigits = function(baseRow, value) {
    ICF.ParamCore.Sprite_Damage_createDigits.call(this, baseRow, value);
    var string = Math.abs(value).toString();
    var row = (value < 0 ? 1 : 0);
    var iconId = ICF.Param.BaseDamageIcons[baseRow + row];
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconId % 16 * pw;
    var sy = Math.floor(iconId / 16) * ph;
    var sprite = this.createChildSprite();
    sprite.bitmap = ImageManager.loadSystem('IconSet');
    sprite.setFrame(sx, sy, pw, ph);
    sprite.x = (string.length - (string.length - 1) / 2) * this.digitWidth() + 8;
    sprite.dy = -string.length;
};

Sprite_Damage.prototype.createTpDigits = function(value) {
    var string = Math.abs(value).toString();
    var row = (value < 0 ? 1 : 0);
    var w = this.digitWidth();
    var h = this.digitHeight();
    for (var i = 0; i < string.length; i++) {
        var sprite = this.createChildSprite();
        var n = Number(string[i]);
        sprite.bitmap = this._dtpDamageBitmap;
        sprite.setFrame(n * w, row * h, w, h);
        sprite.x = (i - (string.length - 1) / 2) * w;
        sprite.dy = -i;
    }
};

ICF.ParamCore.Sprite_Damage_createTpDigits = Sprite_Damage.prototype.createTpDigits;
if (ICF.Param.useDamageIcons) Sprite_Damage.prototype.createTpDigits = function(value) {
    ICF.ParamCore.Sprite_Damage_createTpDigits.call(this, value);
    var string = Math.abs(value).toString();
    var row = (value < 0 ? 1 : 0);
    var iconId = ICF.Param.BaseDamageIcons[row + 4];
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconId % 16 * pw;
    var sy = Math.floor(iconId / 16) * ph;
    var sprite = this.createChildSprite();
    sprite.bitmap = ImageManager.loadSystem('IconSet');
    sprite.setFrame(sx, sy, pw, ph);
    sprite.x = (string.length - (string.length - 1) / 2) * this.digitWidth() + 8;
    sprite.dy = -string.length;
};

//=============================================================================
// Window_BattleLog
//=============================================================================

Window_BattleLog.prototype.displayDamage = function(target) {
    if (target.result().missed) {
        this.displayMiss(target);
    } else if (target.result().evaded) {
        this.displayEvasion(target);
    } else {
        this.displayCParamDamage(target, true);
        this.displayHpDamage(target);
        this.displayMpDamage(target);
        this.displayTpDamage(target);
        this.displayCParamDamage(target, false);
    }
};

Window_BattleLog.prototype.displayCParamDamage = function(target, main) {
    var result = target.result();
    var keys = Object.keys(result.cparamDamage);
    if (main) { for (var i = 0; i < keys.length; i++) {
	if (result.cparams.contains(Number(keys[i]))) {
	    if (result.cparamDamage[keys[i]] > 0 && !result.drain) {
		this.push('performDamage', target);
	    }
	    if (result.cparamDamage[keys[i]] < 0) {
		this.push('performRecovery', target);
	    }
	    this.push('addText', this.makeCParamDamageText(target, keys[i], result.cparamDamage[keys[i]]));
	}
    } } else { for (var i = 0; i < keys.length; i++) {
	if (!result.cparams.contains(Number(keys[i]))) {
	    if (result.cparamDamage[keys[i]] < 0) {
		this.push('performRecovery', target);
	    }
	    this.push('addText', this.makeCParamDamageText(target, keys[i], result.cparamDamage[keys[i]]));
	}
    } }
};

Window_BattleLog.prototype.makeCParamDamageText = function(target, key, damage) {
    var result = target.result();
    var label = ICF.Param.CParamsFullName[key];
    var isActor = target.isActor();
    var fmt;
    if (damage > 0 && result.drain) {
        fmt = isActor ? TextManager.actorDrain : TextManager.enemyDrain;
        return fmt.format(target.name(), label, damage);
    } else if (damage > 0) {
        fmt = isActor ? TextManager.actorLoss : TextManager.enemyLoss;
        return fmt.format(target.name(), label, damage);
    } else if (damage < 0) {
        fmt = isActor ? TextManager.actorRecovery : TextManager.enemyRecovery;
        return fmt.format(target.name(), label, -damage);
    } else {
        fmt = isActor ? TextManager.actorNoDamage : TextManager.enemyNoDamage;
        return fmt.format(target.name());
    }
};

//=============================================================================
// End of File
//=============================================================================
