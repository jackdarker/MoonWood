//=============================================================================
// ChangeRegionId.js
//=============================================================================

/*:
 * @plugindesc Changes region iDs
 * @author KockaAdmiralac
 *
 * @help
 * Simply changes region iDs.
 * Note that changes made aren't permanent!
 * 
 * Plugin commands for changing regions :
 *   1) ChangeRegionId change <x> <y> <iD>
 *     Changes region iD at position (x, y) to specified iD
 *   2) ChangeRegionId switch <iD1> <iD2>
 *     Switches all region iDs equal to iD1 to iD2
 *   3) ChangeRegionId unswitch <iD1>
 *     undoes region-switch for original id1
 * 
 * Made for this : http://goo.gl/BPzqIv
 */

(function () {



    // Aliases
    var _kocka_random_alias_intialize_l2h9HbeF = Game_Map.prototype.initialize;
    var _kocka_random_alias_plugincommand_4qM7c0M7 = Game_Interpreter.prototype.pluginCommand;



    //-----------------------------------------------------------------------------
    // Game_Interpreter
    //
    // The interpreter for running event commands.

    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _kocka_random_alias_plugincommand_4qM7c0M7.call(this, command, args);
        if (command = "ChangeRegionId") {
            switch (args[0]) {
                case "switch":
                    $gameMap.switchRegionId(Number(args[1]), Number(args[2]));
                    break;
                case "unswitch":
                        $gameMap.unswitchRegionId(Number(args[1]));
                        break;
                case "change":
                    $gameMap.changeRegionId(Number(args[1]), Number(args[2]), Number(args[3]));
                    break;
            }
        }
    }



    //-----------------------------------------------------------------------------
    // Game_Map
     Game_Map.prototype.initialize = function () {
        _kocka_random_alias_intialize_l2h9HbeF.apply(this, arguments);
        this._changedRegions = [];
        this._switchedRegions = [];
    };

    Game_Map.prototype.regionId = function (x, y) { 
        //??console.log(this._switchedRegions[this.tileId(x, y, 5)]); 
        if(!this.isValid(x, y)) return 0;
        var _id = this._switchedRegions[this.tileId(x, y, 5)];
        if( _id != null && _id != undefined  ) {
            return _id;
        } else if(this._changedRegions[x] && this._changedRegions[x][y]) {
            return this._changedRegions[x][y];
        }  else {
            return(this.tileId(x, y, 5));
        }

        //return this.isValid(x, y) ? this._changedRegions[x] ? this._changedRegions[x][y] ? this._changedRegions[x][y] : this._switchedRegions[this.tileId(x, y, 5)] ? this._switchedRegions[this.tileId(x, y, 5)] : this.tileId(x, y, 5) : this._switchedRegions[this.tileId(x, y, 5)] ? this._switchedRegions[this.tileId(x, y, 5)] : this.tileId(x, y, 5) : 0; 
    };

    Game_Map.prototype.changeRegionId = function (x, y, value) {
        if (!this._changedRegions[x]) this._changedRegions[x] = [];
        this._changedRegions[x][y] = value;
    };

    Game_Map.prototype.switchRegionId = function (id1, id2) { 
        this._switchedRegions[id1] = id2; 
    }

    Game_Map.prototype.unswitchRegionId = function (id1) { 
        this._switchedRegions[id1] = null; 
    }


})();