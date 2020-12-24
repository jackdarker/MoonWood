//=============================================================================
// ICF-Soft Plugins - Element Core
// ICFSoft_ElementCore.js
//=============================================================================

var Imported = Imported || {};
Imported.ICFSoft_ElementCore = true;

var ICF = ICF || {};
ICF.ElementCore = ICF.ElementCore || {};
ICF.NotetagsProcessor = ICF.NotetagsProcessor || {};

ICF.ElementCore.Version = 105; // 1.05

//=============================================================================
 /*:
 * @plugindesc v1.05 This plugin adds an advanced element system.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @param Elements Blend
 * @desc How to apply when there are more than one element.
 * 0 - Average  1 - Normal  2 - Absorb first  3 - Lowest
 * @default 2
 *
 * @param Absorbtion Mode
 * @desc How to treat element absorbtion.
 * 0 - Absolute  1 - Relative
 * @default 1
 *
 * @param Curse Absorb Mode
 * @desc How to treat element curse for absorbing elements.
 * 0 - Fixed  1 - Additive  2 - Relative
 * @default 2
 *
 * @param Curse Absorb Factor
 * @desc Used factor to treat element curse for absorbing elements.
 * @default -0.1
 *
 * @param Curse Absorb Min
 * @desc Minimun rate.
 * @default 0.1
 *
 * @param Curse Neutral
 * @desc Fixed rate for element curse on neutral elements.
 * Also max rate for absorbtion and nin rate for normal.
 * @default 2
 *
 * @param Curse Normal Mode
 * @desc How to treat element curse for normal elements.
 * 0 - Fixed  1 - Additive  2 - Relative
 * @default 1
 *
 * @param Curse Normal Factor
 * @desc Used factor to treat element curse for normal elements.
 * @default 1
 *
 * @param Element Icons
 * @desc Icons for elements separated by spaces.
 * @default 0 75 64 65 66 67 68 69 70 71 72
 *
 * @param Weapon Type Icons
 * @desc Icons for weapon types separated by spaces.
 * @default 76 96 97 98 99 100 101 102 103 104 105 106 107 108
 *
 * @param Skill Type Icons
 * @desc Icons for skill types separated by spaces.
 * @default 0 78 77
 *
 * @param ItemDamage Type Icons
 * @desc Icons for item types separated by spaces.
 * @default
 *
 * @param Developer HaltJS
 * @desc When true it throws an error if a custom rate javascript
 * formula doesn't work.   NO - false     YES - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * Defalut element system in RPG Maker MV is limited and doesn't allow
 * absorbtion.
 * 
 * With this plugin you can use not only elements but skill, weapon types
 * and item types plus element absorbtion. Also are element/skill/weapon/item
 * enhaces and multiple elements added.
 * 
 * This new formula makes more things important and gives extra depth in
 * tactics.
 * 
 * Now you can make magic resistance, bulletproof and so on.
 * 
 * New element curse feature allows to change element absorbtion into
 * weakness.
 * 
 * You can add types for items like stone, magic stone, grenade, dart and
 * so on with resist and enhace traits.
 * 
 * ============================================================================
 * How to use
 * ============================================================================
 * 
 * It works with notetags. These can be used in actors, classes, enemies,
 * weapons, armors and states.
 * 
 * <ELEMENT ABSORB: x>
 * <ELEMENT ABSORB: x, x>
 * 
 *  - Add all elements that can be absorbed in one line.
 * 
 * <ELEMENT CURSES: x>
 * <ELEMENT CURSES: x, x>
 *  
 *  - Add all element curses in one line.
 * 
 * <WEAPON ELEMENTS: x>
 * <WEAPON ELEMENTS: x, x>
 * 
 *  - Add all weapon elements that are used in one line.
 *    Usefull for enemies and for unarmed actors.
 *    0 is barehands. Used for actors when need a weapontype but hasn't one.
 * 
 * <WEAPON RESISTANCES: x rate>
 * <WEAPON RESISTANCES: x rate, x rate>
 * 
 *  - Add all weapon resistances needed in one line.
 *    rate: can be decimal where 1 is normal, 0.5 is half,
 *          2 is double, etc...
 * 
 * <SKILL RESISTANCES: x rate>
 * <SKILL RESISTANCES: x rate, x rate>
 * 
 *  - Add all skill resistances needed in one line.
 *    rate: can be decimal where 1 is normal, 0.5 is half,
 *          2 is double, etc...
 * 
 * <ITEM DAMAGE RESISTANCES: x rate>
 * <ITEM DAMAGE RESISTANCES: x rate, x rate>
 * 
 *  - Add all item-damage resistances needed in one line.
 *    rate: can be decimal where 1 is normal, 0.5 is half,
 *          2 is double, etc...
 * 
 * Skill resistance triggers on every skill that came with skilltype.
 * 
 * Weapon resistance triggers on physical skills and weapon using skills.
 * 
 * Item resistance triggers on every item that came with item damage type.
 * (See below).
 * 
 * <ELEMENT ENHANCES: x rate>
 * <ELEMENT ENHANCES: x rate, x rate>
 * <SKILL ENHANCES: x rate>
 * <SKILL ENHANCES: x rate, x rate>
 * <WEAPON ENHANCES: x rate>
 * <WEAPON ENHANCES: x rate, x rate>
 * <ITEM DAMAGE ENHANCES: x rate>
 * <ITEM DAMAGE ENHANCES: x rate, x rate>
 * 
 *  - Add all element, skill, weapon and item enhacements needed in one line.
 *    rate: can be decimal where 1 is normal, 0.5 is half,
 *          2 is double, etc...
 * 
 * Therer are new notetags for skills and items:
 * 
 * <ELEMENTS: x>
 * <ELEMENTS: x, x>
 * 
 *  - Add all elements skill/item will use in one line.
 * 
 * And for items only:
 * 
 * <ITEM DAMAGE TYPE: x>
 * 
 *  - Adds an item damage type.
 * 
 * ============================================================================
 * Lunatic Mode
 * ============================================================================
 *
 * You can attach custom reactions to actors, classes, weapons, armors,
 * enemies and states.
 * 
 * <ELEMENT REACT: 2>
 * this.gainMp(20);
 * this.gainTp(15);
 * </ELEMENT REACT>
 * 
 * When an actor/enemy is hit with specified element runs the code of all
 * pieces.
 * 
 * <SKILL REACT: X>
 * <WEAPON REACT: X>
 * <ITEM REACT: X>
 * 
 * When an actor/enemy is the target of specified skill/weapon/item type
 * runs the code of all pieces even if evaded.
 * 
 * Some variables are passed to customize reaction:
 *   - subject: the subject of the action.
 *   - item: the object used in the action. Can be an item or a skill.
 *   - isSkill: check if is an skill.
 * 
 * You can also customize actors and enemies element rates.
 * 
 * <CUSTOM ELEMENT RATE: 2>
 * result = 0;
 * </CUSTOM ELEMENT RATE>
 * 
 * Also for skill types, weapon types and item damage types.
 * 
 * <CUSTOM SKILL RATE: X>
 * <CUSTOM WEAPON RATE: X>
 * <CUSTOM ITEM RATE: X>
 * 
 * ============================================================================
 * Params
 * ============================================================================
 * 
 * Elements Blend:
 * 
 *  Behavior when more than one element are used.
 *
 *  0 - Average:      Calcs entire element average.
 *  1 - Normal:       Strongest element takes priority.
 *  2 - Absorb first: If there is an absorbing element will take priority.
 *  3 - Minimun:      Weakest element takes priority.
 * 
 * Absorbtion Mode:
 * 
 *  How element absorbtion is treated changes the way players must choose
 *  equipment.
 *
 *  0 - Absolute:     Element defense increase absorbtion.
 *  1 - Relative:     Element defense reduces absorbtion same way as damage.
 * 
 * There are some parameters for element curse.
 * 
 * Curse Absorb Mode / Curse Normal Mode:
 *  
 *  When rate is different than cero, either for absorbtion, resistance,
 *  normal or weak, it needs a calculation based on actual rate.
 *  You can use a different mode for negative and positive values.
 * 
 *  0 - Fixed:        Rate will be substituyed with factor.
 *  1 - Additive:     Will increase rate with factor.
 *  2 - Relative:     Will multiply rate with factor.
 * 
 * Curse Absorb Factor / Curse Normal Factor:
 *  
 *  The factor that will be used to calc rate.
 * 
 * Curse Absorb Min:
 * 
 *  A min rate for absorb.
 * 
 * Curse Neutral:
 * 
 *  Neutral is when rate is equal to cero, inmunity.
 *  This is a fixed rate so it needs to change to a another fixed rate.
 *  It's also used as max rate when absorb and min rate for else.
 *
 * Element/WeapType/SkillType/ItemDamType Icons:
 * 
 *  Allow to add icons for elements, weapon types, skill types and item
 *  damage types. Separated by spaces it starts from id 0 and allow to use
 *  ranges if they're consecutives (example 15 to 20).
 *
 * Developer HaltJS: This is a development variable usefull to check if there is
 * a wrong javascript element rate.
 * When true will throw an error when it found a wrong javascript.
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
 * It overrides every other element system that comes after.
 * 
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.05:
 * - Some code improved.
 * - Added get elements framework.
 *
 * Version 1.04:
 * - Added element/skill/weapon/item icons.
 * - Added custom element/skill/weapon/item rates.
 *
 * Version 1.03:
 * - Added element/skill/weapon/item reaction.
 *
 * Version 1.02:
 * - Use of ICF-Soft Main Utility.
 * - Added multiple elements to skill and items.
 * - Added item damage type with resistance and enhace.
 * - Added lowest element rate.
 *
 * Version 1.01:
 * - Improved formula.
 * - Added element curse.
 * - Added element/skill/weapon enhace.
 * - Changed how rates must be used inside notetags.
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
 * @plugindesc v1.05 Este complemento añade un sistema de elementos
 * avanzado.
 * @author ICF-Soft [http://icfsoft.blogspot.com.es/]
 *
 * @param Elements Blend
 * @desc Qué hacer cuando se usa más de un elemento.
 * 0 - Media  1 - Normal  2 - Absorbción primero  3 - Mínimo
 * @default 2
 *
 * @param Absorbtion Mode
 * @desc El modo en el que se absorben los elementos.
 * 0 - Absoluto  1 - Relativo
 * @default 1
 *
 * @param Curse Absorb Mode
 * @desc Como tratar la maldición elemental ante la absorción.
 * 0 - Fijo  1 - Aditivo  2 - Relativo
 * @default 2
 *
 * @param Curse Absorb Factor
 * @desc Factor a usar para calcular el daño.
 * @default -0.1
 *
 * @param Curse Absorb Min
 * @desc Valor mínimo.
 * @default 0.1
 *
 * @param Curse Neutral
 * @desc Valor fijo cuando se es inmune al elemento.
 * Además valor máximo en la absorción y mínimo en el resto.
 * @default 2
 *
 * @param Curse Normal Mode
 * @desc Como tratar la maldición elemental normalmente.
 * 0 - Fijo  1 - Aditivo  2 - Relativo
 * @default 1
 *
 * @param Curse Normal Factor
 * @desc Factor a usar para calcular el daño.
 * @default 1
 *
 * @param Element Icons
 * @desc Iconos para los elementos separados por espacios.
 * @default 0 75 64 65 66 67 68 69 70 71 72
 *
 * @param Weapon Type Icons
 * @desc Iconos para lostipos de arma separados por espacios.
 * @default 76 96 97 98 99 100 101 102 103 104 105 106 107 108
 *
 * @param Skill Type Icons
 * @desc Iconos para los tipos de habilidades separados por espacios.
 * @default 0 78 77
 *
 * @param ItemDamage Type Icons
 * @desc Iconos para los tipos de objetos separados por espacios.
 * Sólo la categoría de daño.
 * @default
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
 * El sistema de elementos que viene predeterminado en RPG Maker MV es limitado
 * y no permite la absorbción.
 * 
 * Con este complemento puedes usar no sólo elementos sino también tipos de
 * habilidades, armas y objetos además de la absorbción de elementos y
 * la bonificación de elementos, habilidades, armas y objetos.
 * Además puedes usar varios elementos en habilidades y objetos.
 * 
 * Esta nueva fórmula da importancia a más opciones y da profundidad extra
 * en las tácticas.
 * 
 * Ahora puedes utilizar resistencia a la magia, antibalas y más cosas similares.
 * 
 * La nueva maldición elemental permite volver debilidad cualquier elemento
 * incluso cuando es absorbido.
 * 
 * Puedes añadir tipos de objetos tales como piedra, piedra mágica, granada,
 * daro y similares con sus características de resistencia y mejora.
 * 
 * ============================================================================
 * Uso
 * ============================================================================
 * 
 * Funciona con etiquetas en las notas. Pueden usarse en actores, clases,
 * enemigos, armas, armaduras y estados alterados.
 * 
 * <ELEMENT ABSORB: x>
 * <ELEMENT ABSORB: x, x>
 * 
 *  - Añade todos los elementos que puede absorber en una linea.
 * 
 * <ELEMENT CURSES: x>
 * <ELEMENT CURSES: x, x>
 *  
 *  - Añade todas las maldiciones elementales en una linea.
 * 
 * <WEAPON ELEMENTS: x>
 * <WEAPON ELEMENTS: x, x>
 * 
 *  - Añade todos los tipos de arma que se utilizan en una linea.
 *    Útil para enemigos y los actores que no lleven armas.
 *    0 son los puños. Se utiliza cuando un actor necesita un tipo de arma
 *    pero no está disponible ninguno.
 * 
 * <WEAPON RESISTANCES: x rate>
 * <WEAPON RESISTANCES: x rate, x rate>
 * 
 *  - Añade todas las resistencias a las armas en una linea.
 *    rate: puede ser decimal, 1 es normal, 0.5 es la mitad,
 *          2 es el doble, etc...
 * 
 * <SKILL RESISTANCES: x rate>
 * <SKILL RESISTANCES: x rate, x rate>
 * 
 *  - Añade todas las resistencias a las habilidades en una linea.
 *    rate: puede ser decimal, 1 es normal, 0.5 es la mitad,
 *          2 es el doble, etc...
 * 
 * <ITEM DAMAGE RESISTANCES: x rate>
 * <ITEM DAMAGE RESISTANCES: x rate, x rate>
 * 
 *  - Añade todas las resistencias a objetos en una linea.
 *    rate: puede ser decimal, 1 es normal, 0.5 es la mitad,
 *          2 es el doble, etc...
 * 
 * La resistencia a las habilidades se activa en las habilidades que incluyan
 * categoría.
 * 
 * La resistencia a las armas se activa en las habilidades físicas y las que
 * utilizan arma.
 * 
 * La resistencia a los objetos se activa en los objetos que incluyan un tipo
 * de daño (ver más abajo).
 * 
 * <ELEMENT ENHANCES: x rate>
 * <ELEMENT ENHANCES: x rate, x rate>
 * <SKILL ENHANCES: x rate>
 * <SKILL ENHANCES: x rate, x rate>
 * <WEAPON ENHANCES: x rate>
 * <WEAPON ENHANCES: x rate, x rate>
 * <ITEM DAMAGE ENHANCES: x rate>
 * <ITEM DAMAGE ENHANCES: x rate, x rate>
 * 
 *  - Añade todas las bonificaciones de elementos, habilidades, armas
 *    y objetos necesarias en una linea.
 *    rate: puede ser decimal, 1 es normal, 0.5 es la mitad,
 *          2 es el doble, etc...
 * 
 * 
 * Nuevas etiquetas para habilidades y objetos:
 * 
 * <ELEMENTS: x>
 * <ELEMENTS: x, x>
 * 
 *  - Añade todos los elementos que la habilidad u objeto va a usar en una sola
 *    linea.
 * 
 * Y para objetos solo:
 * 
 * <ITEM DAMAGE TYPE: x>
 * 
 *  - Añade el tipo de daño específico del objeto.
 * 
 * ============================================================================
 * Modo Lunático
 * ============================================================================
 *
 * Puedes añadir reacciones personalizadas a personajes, clases, armas,
 * armaduras, enemigos y estados alterados.
 * 
 * <ELEMENT REACT: 2>
 * this.gainMp(20);
 * this.gainTp(15);
 * </ELEMENT REACT>
 * 
 * Cuando un personaje o enemigo es afectado por el elemento específico se
 * ejecutará el código de todas las piezas.
 * 
 * <SKILL REACT: X>
 * <WEAPON REACT: X>
 * <ITEM REACT: X>

 * Cuando un personaje o enemigo es afectado por el tipo de habilidad, arma
 * o objeto específico se ejecutará el código de todas las piezas aunque se
 * evada.
 * 
 * Se puede acceder a las siguientes variables en la reacción:
 *   - subject: el sujeto de la acción.
 *   - item: el objeto usado en la acción. Puede ser un objeto o habilidad.
 *   - isSkill: comprueba si se trata de una habilidad.
 * 
 * Además puedes personalizar las resistencias elementales para actores
 * y enemigos.
 * 
 * <CUSTOM ELEMENT RATE: 2>
 * result = 0;
 * </CUSTOM ELEMENT RATE>
 * 
 * Siendo aplicable también para tipos de habilidad, arma y objeto.
 * 
 * <CUSTOM SKILL RATE: X>
 * <CUSTOM WEAPON RATE: X>
 * <CUSTOM ITEM RATE: X>
 * 
 * ============================================================================
 * Parámetros
 * ============================================================================
 * 
 * Elements Blend:
 * 
 *  El comportamiento cuando se usan más de un elemento.
 *
 *  0 - Media:             Calcula la media.
 *  1 - Normal:            El elemento más dañino toma prioridad.
 *  2 - Absorción primero: Si un elemento es absorbible tendrá prioridad.
 *  3 - Mínimo:            El elemento menos dañino toma prioridad.
 * 
 * Absorbtion Mode:
 * 
 *  El modo en el que los elementos son absorbidos cambia el modo en el que
 *  el jugador debe seleccionar el equipamiento.
 *
 *  0 - Absoluto:     La defensa elemental incrementa la absorbción.
 *  1 - Relativo:     La defensa elemental reduce tanto la absorbción
 *                    como el daño.
 * 
 * Para la maldición elemental se usan los siguientes parámetros:
 * 
 * Curse Absorb Mode / Curse Normal Mode:
 *  
 *  Para daño negativo (absorción) y daño positivo (normal, débil o resistente)
 *  se usan calculos distintos basado en el valor actual y un factor.
 * 
 *  0 - Fijo:         El factor será el nuevo valor.
 *  1 - Aditivo:      Al valor se le añade el factor.
 *  2 - Relativo:     El valor se multiplica por el factor.
 * 
 * Curse Absorb Factor / Curse Normal Factor:
 *  
 *  El factor usado para calcular.
 * 
 * Curse Absorb Min:
 * 
 *  El valor mínimo para el elemento absorbido.
 * 
 * Curse Neutral:
 * 
 *  El valor que tomará cuando se es inmune. Al ser fijo se sustituye por
 *  otro valor fijo.
 *  Además se usa como término medio entre absorción y daño.
 *
 * Element/WeapType/SkillType/ItemDamType Icons:
 * 
 *  Permite añadir iconos para las distintas resistencias. Separados por
 *  espacios y permite el uso de rangos si son consecutivos (ejemplo 15 a 20).
 *
 * Developer HaltJS: Esta es una variable de uso durante el desarrollo del juego
 * útil cuando quieres comprobar si hay alguna función personalizada incorrecta.
 * Cuando está activado al encontrar un error el juego se para y muestra
 * el error. Cuando está desactivado ignora el error y el juego continúa.
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
 * Se sobreescribe cualquier sistema de elementos que se haya puesto antes.
 * 
 * ============================================================================
 * Historial de versiones
 * ============================================================================
 *
 * Versión 1.05:
 * - Algunas mejoras en el código.
 * - Se ha añadido un modo de manejar los elementos para otros plugins.
 *
 * Versión 1.04:
 * - Se han añadido iconos para las distintas resistencias.
 * - Se ha añadido resistencias personalizadas.
 *
 * Versión 1.03:
 * - Se ha añadido la reacción a elementos y tipos de armas, habilidades 
 *   y objetos.
 *
 * Versión 1.02:
 * - Se empieza a utilizar el ICF-Soft Main Utility.
 * - Se usan múltiples elementos para habilidades y objetos.
 * - Se ha añadido tipos de daño de objeto con resistencias y bonificación.
 * - Se ha añadido el poder usar el elemento menos dañino.
 *
 * Versión 1.01:
 * - Se ha mejorado la fórmula de cálculo.
 * - Se ha añadido la maldición elemental.
 * - Se ha añadido bonificación de elemento/habilidad/arma.
 * - Se ha cambiado el modo en que se usan las etiquetas de las notas.
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

ICF.Parameters = PluginManager.parameters('ICFSoft_ElementCore');
ICF.Param = ICF.Param || {};

if (!Imported.ICFSoft_MainUtility) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.01 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}
if (ICF.MainUtility.Version < 101) {throw new Error('This plugin requires ICF-Soft Main Utility plugin version 1.01 to work.\nYou can download it at icfsoft.blogspot.com inside plugins section.');}

ICF.Param.ElementBlend = Number(ICF.Parameters['Elements Blend']);
ICF.Param.ElementAbsorbM = Number(ICF.Parameters['Absorbtion Mode']);

ICF.Param.ElementCurseAbsM = Number(ICF.Parameters['Curse Absorb Mode']);
ICF.Param.ElementCurseAbsF = Number(ICF.Parameters['Curse Absorb Factor']);
ICF.Param.ElementCurseAbsMin = Number(ICF.Parameters['Curse Absorb Min']);
ICF.Param.ElementCurseNeutral = Number(ICF.Parameters['Curse Neutral']);
ICF.Param.ElementCurseMode = Number(ICF.Parameters['Curse Normal Mode']);
ICF.Param.ElementCurseFactor = Number(ICF.Parameters['Curse Normal Factor']);

ICF.Param.ElementIcons = ICF.Parameters['Element Icons'].trim().split(/\s+/).extend().leaveNumbers();
ICF.Param.WeaponTypeIcons = ICF.Parameters['Weapon Type Icons'].trim().split(/\s+/).extend().leaveNumbers();
ICF.Param.SkillTypeIcons = ICF.Parameters['Skill Type Icons'].trim().split(/\s+/).extend().leaveNumbers();
ICF.Param.ItemDamageIcons = ICF.Parameters['ItemDamage Type Icons'].trim().split(/\s+/).extend().leaveNumbers();

ICF.Param.ElemCoreHalt = ICF.Parameters['Developer HaltJS'].toLowerCase() === "true";

//=============================================================================
// Constants
//=============================================================================

Game_BattlerBase.TRAIT_SK_ELEMENT_RATE    = 15;
Game_BattlerBase.TRAIT_WP_ELEMENT_RATE    = 16;
Game_BattlerBase.TRAIT_ELEMENT_ABSORB     = 17;
Game_BattlerBase.TRAIT_ELEMENT_CURSE      = 18;
Game_BattlerBase.TRAIT_ATTACK_WP_ELEMENT  = 35;
Game_BattlerBase.TRAIT_ATTACK_EL_ENHACE   = 36;

//=============================================================================
// DataManager
//=============================================================================

ICF.ElementCore.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!ICF.ElementCore.DataManager_isDatabaseLoaded.call(this)) return false;
    if (!ICF.ElementCore.Procesed) {
	ICF.NotetagsProcessor.ElementCoreB($dataActors);
	ICF.NotetagsProcessor.ElementCoreA($dataClasses);
	ICF.NotetagsProcessor.ElementCoreB($dataEnemies);
	ICF.NotetagsProcessor.ElementCoreA($dataWeapons);
	ICF.NotetagsProcessor.ElementCoreA($dataArmors);
	ICF.NotetagsProcessor.ElementCoreA($dataStates);
	ICF.NotetagsProcessor.ElementCoreC($dataSkills);
	ICF.NotetagsProcessor.ElementCoreC($dataItems);
	ICF.ElementCore.Procesed = true;
    }
    return true;
};

ICF.NotetagsProcessor.ElementCoreA = function(group) {
    var note1 = /<(?:ELEMENT ABSORB):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note2 = /<(?:WEAPON ELEMENTS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note3 = /<(?:SKILL RESISTANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note3b = /<(?:WEAPON RESISTANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note3c = /<(?:ITEM DAMAGE RESISTANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note4 = /<(?:ELEMENT CURSES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note5 = /<(?:ELEMENT ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note5b = /<(?:SKILL ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note5c = /<(?:WEAPON ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note5d = /<(?:ITEM DAMAGE ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note6 = /<((?:ELEMENT)|(?:SKILL)|(?:WEAPON)|(?:ITEM)) (?:REACT):[ ]*(\d+)[ ]*>/i;
    var note6b = /<\/((?:ELEMENT)|(?:SKILL)|(?:WEAPON)|(?:ITEM)) (?:REACT)>/i;

    var flag1 = false;
    var key = '';

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			for (var il = 0; il < array.length; il++) {
				obj.traits.push({code:17, dataId:array[il], value:0});
			}
		} else if (line.match(note2)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			for (var il = 0; il < array.length; il++) {
				obj.traits.push({code:35, dataId:array[il], value:0});
			}
		} else if (line.match(note3)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:15, dataId:array[il], value:array[il + 1]});
			}
		} else if (line.match(note3b)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:16, dataId:array[il], value:array[il + 1]});
			}
		} else if (line.match(note3c)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:15, dataId:array[il] + 2000, value:array[il + 1]});
			}
		} else if (line.match(note4)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			for (var il = 0; il < array.length; il++) {
				obj.traits.push({code:18, dataId:array[il], value:0});
			}
		} else if (line.match(note5)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il], value:array[il + 1]});
			}
		} else if (line.match(note5b)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il] + 2000, value:array[il + 1]});
			}
		} else if (line.match(note5c)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il] + 4000, value:array[il + 1]});
			}
		} else if (line.match(note5d)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il] + 6000, value:array[il + 1]});
			}
		} else if (line.match(note6)) {
			flag1 = true;
			key = (RegExp.$1.toLowerCase() == "element")? ["elemreact",RegExp.$2] : (RegExp.$1.toLowerCase() == "skill")? ["skillreact",RegExp.$2] : (RegExp.$1.toLowerCase() == "weapon")? ["weapreact",RegExp.$2] : ["itemdamreact",RegExp.$2];
			obj.jsreactions[key] = obj.jsreactions[key] || '';
		} else if (line.match(note6b)) {
			flag1 = false;
			key = '';
		} else if (flag1) {
			obj.jsreactions[key] = obj.jsreactions[key] + line + '\n';
		}
	}
    }
};

ICF.NotetagsProcessor.ElementCoreB = function(group) {
    var note1 = /<(?:ELEMENT ABSORB):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note2 = /<(?:WEAPON ELEMENTS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note3 = /<(?:SKILL RESISTANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note3b = /<(?:WEAPON RESISTANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note3c = /<(?:ITEM DAMAGE RESISTANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note4 = /<(?:ELEMENT CURSES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note5 = /<(?:ELEMENT ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note5b = /<(?:SKILL ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note5c = /<(?:WEAPON ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note5d = /<(?:ITEM DAMAGE ENHANCES):[ ]*(\d+\s+\d+(?:\.\d+)?(?:\s*,\s*\d+\s+\d+(?:\.\d+)?)*)>/i;
    var note6 = /<((?:ELEMENT)|(?:SKILL)|(?:WEAPON)|(?:ITEM)) (?:REACT):[ ]*(\d+)[ ]*>/i;
    var note6b = /<\/((?:ELEMENT)|(?:SKILL)|(?:WEAPON)|(?:ITEM)) (?:REACT)>/i;
    var note7 = /<(?:CUSTOM )((?:ELEMENT)|(?:SKILL)|(?:WEAPON)|(?:ITEM)) (?:RATE):[ ]*(\d+)[ ]*>/i;
    var note7b = /<\/(?:CUSTOM )((?:ELEMENT)|(?:SKILL)|(?:WEAPON)|(?:ITEM)) (?:RATE)>/i;

    var flag1 = false;
    var key = '';

    var flagC = -1;
    var key2 = 0;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.customElementRates = [{},{},{},{}]; //Element, Weapon, Skill, ItemDamage

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			for (var il = 0; il < array.length; il++) {
				obj.traits.push({code:17, dataId:array[il], value:0});
			}
		} else if (line.match(note2)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			for (var il = 0; il < array.length; il++) {
				obj.traits.push({code:35, dataId:array[il], value:0});
			}
		} else if (line.match(note3)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:15, dataId:array[il], value:array[il + 1]});
			}
		} else if (line.match(note3b)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:16, dataId:array[il], value:array[il + 1]});
			}
		} else if (line.match(note3c)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:15, dataId:array[il] + 2000, value:array[il + 1]});
			}
		} else if (line.match(note4)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			for (var il = 0; il < array.length; il++) {
				obj.traits.push({code:18, dataId:array[il], value:0});
			}
		} else if (line.match(note5)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il], value:array[il + 1]});
			}
		} else if (line.match(note5b)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il] + 2000, value:array[il + 1]});
			}
		} else if (line.match(note5c)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il] + 4000, value:array[il + 1]});
			}
		} else if (line.match(note5d)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+(?:\.\d+)?/g) + ']');
			for (var il = 0; il < (array.length - 1); il += 2) {
				obj.traits.push({code:36, dataId:array[il] + 6000, value:array[il + 1]});
			}
		} else if (line.match(note6)) {
			flag1 = true;
			key = (RegExp.$1.toLowerCase() == "element")? ["elemreact",RegExp.$2] : (RegExp.$1.toLowerCase() == "skill")? ["skillreact",RegExp.$2] : (RegExp.$1.toLowerCase() == "weapon")? ["weapreact",RegExp.$2] : ["itemdamreact",RegExp.$2];
			obj.jsreactions[key] = obj.jsreactions[key] || '';
		} else if (line.match(note6b)) {
			flag1 = false;
			key = '';
		} else if (line.match(note7)) {
			flagC = (RegExp.$1.toLowerCase() == "element")? 0 : (RegExp.$1.toLowerCase() == "skill")? 2 : (RegExp.$1.toLowerCase() == "weapon")? 1 : 3;
			key2 = Number(RegExp.$2);
			obj.customElementRates[flagC][key2] = obj.customElementRates[flagC][key2] || '';
		} else if (line.match(note7b)) {
			flagC = -1;
			key2 = 0;
		} else if (flag1) {
			obj.jsreactions[key] = obj.jsreactions[key] + line + '\n';
		} else if (flagC > -1) {
			obj.customElementRates[flagC][key2] = obj.customElementRates[flagC][key2] + line + '\n';
		}
	}
    }
};

ICF.NotetagsProcessor.ElementCoreC = function(group) {
    var note1 = /<(?:ELEMENTS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note2 = /<(?:ITEM DAMAGE TYPE):[ ]*(\d+)>/i;

    for (var n = 1; n < group.length; n++) {
	var obj = group[n];
	var notedata = obj.note.split(/[\r\n]+/);

	obj.damage.elements = (obj.damage.elementId < 0)? [] : [obj.damage.elementId];
	obj.damage.itype = 0;

	for (var i = 0; i < notedata.length; i++) {
		var line = notedata[i];
		if (line.match(note1)) {
			var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
			obj.damage.elements = obj.damage.elements.concat(array);
		} else if (line.match(note2)) {
			obj.damage.itype = Number(RegExp.$1);
		}
	}
    }
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.elementEnhace = function(elementId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_ATTACK_EL_ENHACE, elementId);
};

Game_BattlerBase.prototype.skillEnhace = function(stypeId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_ATTACK_EL_ENHACE, stypeId + 2000);
};

Game_BattlerBase.prototype.weaponEnhace = function(wtypeId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_ATTACK_EL_ENHACE, wtypeId + 4000);
};

Game_BattlerBase.prototype.atItemEnhace = function(itypeId) {
    return this.traitsPi(Game_BattlerBase.TRAIT_ATTACK_EL_ENHACE, itypeId + 6000);
};

Game_BattlerBase.prototype.elementAbsorb = function(elementId) {
    return (this.traitsWithId(Game_BattlerBase.TRAIT_ELEMENT_ABSORB, elementId).length > 0);
};

Game_BattlerBase.prototype.elementCurse = function(elementId) {
    return (this.traitsWithId(Game_BattlerBase.TRAIT_ELEMENT_CURSE, elementId).length > 0);
};

Game_BattlerBase.prototype.customElementRates = function(data) {
    return {};
};

ICF.ElementCore.Game_BtlrBase_elementRate = Game_BattlerBase.prototype.elementRate;
Game_BattlerBase.prototype.elementRate = function(elementId) {
    var result = ICF.ElementCore.Game_BtlrBase_elementRate.call(this, elementId);
    if (this.elementAbsorb(elementId)) {
	if (ICF.Param.ElementAbsorbM == 0) {result = Math.min(result - 2.0, -0.01);}
	else if (result > 0) {result *= -1}
    }
    var customrates = this.customElementRates(0);
    if ((customrates[elementId]) && (customrates[elementId] != '')) {
	try { 	eval(customrates[elementId]);
	} catch (e) {if(ICF.Param.ElemCoreHalt){throw new Error('Error in custom element rate #' + elementId + ' for battler');}}
    }
    if (this.elementCurse(elementId)) {
	if (result < 0) {
		if (ICF.Param.ElementCurseAbsM == 0) return ICF.Param.ElementCurseAbsF;
		else if (ICF.Param.ElementCurseAbsM == 1) {
			result += ICF.Param.ElementCurseAbsF;
			return result.clamp(ICF.Param.ElementCurseAbsMin, ICF.Param.ElementCurseNeutral);
		} else {
			result *= ICF.Param.ElementCurseAbsF;
			return result.clamp(ICF.Param.ElementCurseAbsMin, ICF.Param.ElementCurseNeutral);
		}
	} else if (result == 0) {
		return ICF.Param.ElementCurseNeutral;
	} else {
		if (ICF.Param.ElementCurseMode == 0) return Math.max(result, ICF.Param.ElementCurseFactor);
		else if (ICF.Param.ElementCurseMode == 1) {
			result += ICF.Param.ElementCurseFactor;
			return Math.max(result, ICF.Param.ElementCurseNeutral);
		} else {
			result *= ICF.Param.ElementCurseFactor;
			return Math.max(result, ICF.Param.ElementCurseNeutral);
		}
	}
    }
    return result;
};

Game_BattlerBase.prototype.elSkillRate = function(stypeId) {
    var customrates = this.customElementRates(2);
    if ((customrates[stypeId]) && (customrates[stypeId] != '')) {
	try { 	var result = this.traitsPi(Game_BattlerBase.TRAIT_SK_ELEMENT_RATE, stypeId);
		eval(customrates[stypeId]);
		return result;
	    }
	catch (e) {if(ICF.Param.ElemCoreHalt){throw new Error('Error in custom skill rate #' + stypeId + ' for battler');}}
    }
    return this.traitsPi(Game_BattlerBase.TRAIT_SK_ELEMENT_RATE, stypeId);
};

Game_BattlerBase.prototype.elItemRate = function(itypeId) {
    var customrates = this.customElementRates(3);
    if ((customrates[itypeId]) && (customrates[itypeId] != '')) {
	try { 	var result = this.traitsPi(Game_BattlerBase.TRAIT_SK_ELEMENT_RATE + 2000, itypeId);
		eval(customrates[itypeId]);
		return result;
	    }
	catch (e) {if(ICF.Param.ElemCoreHalt){throw new Error('Error in custom item damage rate #' + itypeId + ' for battler');}}
    }
    return this.traitsPi(Game_BattlerBase.TRAIT_SK_ELEMENT_RATE + 2000, itypeId);
};

Game_BattlerBase.prototype.elWeaponRate = function(wtypeId) {
    var customrates = this.customElementRates(1);
    if ((customrates[wtypeId]) && (customrates[wtypeId] != '')) {
	try { 	var result = this.traitsPi(Game_BattlerBase.TRAIT_WP_ELEMENT_RATE, wtypeId);
		eval(customrates[wtypeId]);
		return result;
	    }
	catch (e) {if(ICF.Param.ElemCoreHalt){throw new Error('Error in custom weapon rate #' + wtypeId + ' for battler');}}
    }
    return this.traitsPi(Game_BattlerBase.TRAIT_WP_ELEMENT_RATE, wtypeId);
};

Game_BattlerBase.prototype.wpAttackElements = function() {
    var wpns = this.traitsSet(Game_BattlerBase.TRAIT_ATTACK_WP_ELEMENT);
    return wpns;
};

Game_BattlerBase.prototype.ADVelementRate = function(elementId, subject) {
    return this.elementRate(elementId) * (subject == undefined)? 1 : subject.elementEnhace(elementId);
};

Game_BattlerBase.prototype.ADVelSkillRate = function(stypeId, subject) {
    return this.elSkillRate(stypeId) * (subject == undefined)? 1 : subject.skillEnhace(stypeId);
};

Game_BattlerBase.prototype.ADVelItemRate = function(itypeId, subject) {
    return this.elItemRate(itypeId) * (subject == undefined)? 1 : subject.atItemEnhace(itypeId);
};

Game_BattlerBase.prototype.ADVelWeaponRate = function(wtypeId, subject) {
    return this.elWeaponRate(wtypeId) * (subject == undefined)? 1 : subject.weaponEnhace(wtypeId);
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.wpAttackElements = function() {
    var wpns = [];
    if (this.weapons().length > 0) {
	wpns = this.weapons().reduce(function(r, obj) {
		return r.concat([obj.wtypeId]);
	}, []);
	return wpns;
    }

    wpns = Game_BattlerBase.prototype.wpAttackElements.call(this);
    if (wpns.length == 0) wpns[0] = 0;

    return wpns;
};

Game_Actor.prototype.customElementRates = function(data) {
    return $dataActors[this._actorId].customElementRates[data];
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.customElementRates = function(data) {
    return $dataEnemies[this._enemyId].customElementRates[data];
};

//=============================================================================
// Game_Action
//=============================================================================

ICF.ElementCore.gameaction_init = Game_Action.prototype.initialize;
Game_Action.prototype.initialize = function(subject, forcing) {
    ICF.ElementCore.gameaction_init.call(this, subject, forcing);
    this.elementReact = [];
};

Game_Action.prototype.elementsMaxRate = function(target, elements, subject) {
    if (elements.length > 0) {
        return Math.max.apply(null, elements.map(function(elementId) {
            return target.ADVelementRate(elementId, subject);
        }, this));
    } else {
        return 1;
    }
};

Game_Action.prototype.elementsMinRate = function(target, elements, subject) {
    if (elements.length > 0) {
        return Math.min.apply(null, elements.map(function(elementId) {
            return target.ADVelementRate(elementId, subject);
        }, this));
    } else {
        return 1;
    }
};

Game_Action.prototype.elementsAverageRate = function(target, elements, subject) {
    if (elements.length > 0) {
        return elements.reduce(function(r, element) {
	        return r + target.ADVelementRate(element, subject);
	    }, 0) / elements.length;
    } else {
        return 1;
    }
};

Game_Action.prototype.wpElementsMaxRate = function(target, wpelements, subject) {
    if (wpelements.length > 0) {
        return Math.max.apply(null, wpelements.map(function(wpelementId) {
            return target.ADVelWeaponRate(wpelementId, subject);
        }, this));
    } else {
        return 1;
    }
};

Game_Action.prototype.wpElementsMinRate = function(target, wpelements, subject) {
    if (wpelements.length > 0) {
        return Math.min.apply(null, wpelements.map(function(wpelementId) {
            return target.ADVelWeaponRate(wpelementId, subject);
        }, this));
    } else {
        return 1;
    }
};

Game_Action.prototype.wpElementsAverageRate = function(target, wpelements, subject) {
    if (wpelements.length > 0) {
        return wpelements.reduce(function(r, wpelement) {
	        return r + target.ADVelWeaponRate(wpelement, subject);
	    }, 0) / wpelements.length;
    } else {
        return 1;
    }
};

Game_Action.prototype.getWeaponElements = function() {
    return this.subject().wpAttackElements();
};

Game_Action.prototype.calcWeaponElementRate = function(target) {
    var rate = 1;
    var wpns = this.getWeaponElements();
    wpns.removeRepeated();

    if (wpns.length > 0) {
	if (ICF.Param.ElementBlend == 0) {
		rate = this.wpElementsAverageRate(target, wpns, this.subject());
	} else if (ICF.Param.ElementBlend == 3) {
		rate = this.wpElementsMinRate(target, wpns, this.subject());
	} else {
		rate = this.wpElementsMaxRate(target, wpns, this.subject());
	}
    }

    if (wpns.length > 0) this.elementReact.push(["weapreact",wpns]);

    return rate;
};

Game_Action.prototype.getActionElements = function() {
    var elements = this.item().damage.elements;

    if (this.item().damage.elementId < 0) {
	elements = elements.concat(this.subject().attackElements());
    }

    return elements;
};

Game_Action.prototype.calcElementRate = function(target) {
    var rate = 1;
    var rate2 = 0;
    var elements = this.getActionElements();

    elements.removeRepeated();

    if (elements.length > 0) this.elementReact.push(["elemreact",elements]);

    if (ICF.Param.ElementBlend == 0) {
	rate = this.elementsAverageRate(target, elements, this.subject());
    } else if (ICF.Param.ElementBlend == 3) {
	rate = this.elementsMinRate(target, elements, this.subject());
    } else {
	rate = this.elementsMaxRate(target, elements, this.subject());
	rate2 = this.elementsMinRate(target, elements, this.subject());
	if (ICF.Param.ElementBlend == 2 && rate2 < 0) rate = rate2;
    }

    if (this.isSkill()) {
	if (this.item().stypeId > 0) this.elementReact.push(["skillreact",[this.item().stypeId]]);
	if ((this.item().stypeId > 0)&&(this.isMagical())) {
		rate2 = target.ADVelSkillRate(this.item().stypeId, this.subject());
		if ((rate < 0)||(rate2 < 1)) {rate = rate * rate2;}
		else {rate += rate2 - 1;}
	}
	if ((this.isPhysical())||(this.item().damage.elementId < 0)) {
		rate2 = this.calcWeaponElementRate(target) + rate;
		if (rate2 > 2) {rate = rate2 - 1;}
		else {rate = rate2 / 2;}
	}
	if ((this.item().stypeId > 0)&&(!this.isMagical())) {
		rate2 = target.ADVelSkillRate(this.item().stypeId, this.subject());
		if ((rate < 0)||(rate2 < 1)) {rate = rate * rate2;}
		else {rate += rate2 - 1;}
	}
    } else if (this.isItem()) {
	if (this.item().damage.itype > 0) this.elementReact.push(["itemdamreact",[this.item().damage.itype]]);
	if ((this.item().damage.itype > 0)&&(this.isMagical())) {
		rate2 = target.ADVelItemRate(this.item().damage.itype, this.subject());
		if ((rate < 0)||(rate2 < 1)) {rate = rate * rate2;}
		else {rate += rate2 - 1;}
	}
	if ((this.isPhysical())||(this.item().damage.elementId < 0)) {
		rate2 = this.calcWeaponElementRate(target) + rate;
		if (rate2 > 2) {rate = rate2 - 1;}
		else {rate = rate2 / 2;}
	}
	if ((this.item().damage.itype > 0)&&(!this.isMagical())) {
		rate2 = target.ADVelItemRate(this.item().damage.itype, this.subject());
		if ((rate < 0)||(rate2 < 1)) {rate = rate * rate2;}
		else {rate += rate2 - 1;}
	}
    }

    return rate;
};

ICF.ElementCore.gameaction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    ICF.ElementCore.gameaction_apply.call(this, target);
    if ((!target.result().isHit()) && (this.elementReact.length > 0) && (this.elementReact[0][0] == "elemreact")) this.elementReact.splice(0, 1);
    if ((target.hp > 0) && (this.elementReact.length > 0)) target.jsevalBulkReactions(this.subject(), this.item(), this.isSkill(), this.elementReact);
}

/*ICF.ElementCore.BattleManager_invokeNormalAction = BattleManager.invokeNormalAction;
BattleManager.invokeNormalAction = function(subject, target) {
    var realTarget = this.applySubstitute(target);
    this._action.apply(realTarget);
    this._logWindow.displayActionResults(subject, realTarget);
    if ((!realTarget.result().isHit()) && (this._action.elementReact.length > 0) && (this._action.elementReact[0][0] == "elemreact")) this._action.elementReact.splice(0, 1);
    var ary = [this._action.subject(), this._action.item(), this._action.isSkill(), this._action.elementReact];
    realTarget.result().clear(); realTarget.result().used = true; realTarget.result().success = true;
    if ((realTarget.hp > 0) && (ary[3].length > 0)) realTarget.jsevalBulkReactions(ary[0], ary[1], ary[2], ary[3]);
    this._logWindow.displayActionResults(subject, realTarget);
};*/

//=============================================================================
// Game_Item
//=============================================================================

Game_Item.prototype.absorbingElements = function() {
    return this.traitDataTypes(17);
};

Game_Item.prototype.cursingElements = function() {
    return this.traitDataTypes(18);
};

Game_Item.prototype.resistingElements = function() {
    return this.traitDataTypes(11);
};

Game_Item.prototype.resistingSkills = function() {
    return this.traitDataTypesOffset(15, 0, 1999);
};

Game_Item.prototype.resistingWeapons = function() {
    return this.traitDataTypes(16);
};

Game_Item.prototype.resistingItemDamages = function() {
    return this.traitDataTypesOffset(15, 2000, 3999);
};

Game_Item.prototype.attackingElements = function() {
    return this.traitDataTypes(35);
};

Game_Item.prototype.enhaceTypes = function() {
    return this.traitDataTypes(36);
};

Game_Item.prototype.elementEnhaceTypes = function() {
    return this.traitDataTypesOffset(36, 0, 1999);
};

Game_Item.prototype.skillEnhaceTypes = function() {
    return this.traitDataTypesOffset(36, 2000, 3999);
};

Game_Item.prototype.weaponEnhaceTypes = function() {
    return this.traitDataTypesOffset(36, 4000, 5999);
};

Game_Item.prototype.itemDamageEnhaceTypes = function() {
    return this.traitDataTypesOffset(36, 6000, 7999);
};

Game_Item.prototype.elements = function() {
    if (this.isSkill() || this.isItem()) return this.object().damage.elements;
    if (this.isWeapon() || this.isArmor()) return this.attackingElements();
    return [];
};

//=============================================================================
// End of File
//=============================================================================
