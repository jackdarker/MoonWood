/*
 * Custom Macro for OpenOffice4
 * converts a table into Json compatible with YEP_QuestJournal
 * see example document for table layout
 * 
 * - copy unzipped ExportTools directory into 
 * C:\Program Files (x86)\OpenOffice 4\share\Scripts\javascript or where scripts have to be placed
 * - Run OpenOffice Calc and open the Sample.ods at Page Quest
 * - To run the makro Extras-> Execute Macro; in Macro-Selector browse to OpenOfficeMacros->ExportTools and select the script in the right pane
 * after 
 * - a pane should open with the json that you have to copy manually at the correct plugin.js location
*/
importClass(Packages.com.sun.star.uno.UnoRuntime);
importClass(Packages.com.sun.star.frame.XModel);
importClass(Packages.com.sun.star.frame.XComponentLoader);
importClass(Packages.com.sun.star.sheet.XSpreadsheetDocument);
importClass(Packages.com.sun.star.text.XTextDocument);
importClass(Packages.com.sun.star.sheet.XSpreadsheetView);
importClass(Packages.com.sun.star.container.XNamed);
importClass(Packages.com.sun.star.container.XIndexAccess);
importClass(Packages.com.sun.star.beans.XPropertySet);
importClass(Packages.com.sun.star.beans.PropertyValue);
importClass(Packages.com.sun.star.util.XModifiable);
importClass(Packages.com.sun.star.frame.XStorable);
importClass(Packages.com.sun.star.uno.AnyConverter);
importClass(Packages.com.sun.star.uno.Type);

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function toArray(sheet) {
    var master = [];

    var rows = 0;
    var columns = 0;
    var object = sheet.getObject();

    while (true) {
        var cell = object.getCellByPosition(0, rows);
        var content = cell.getFormula();
        if (content == "") break;
        rows++;
    }

    while (true) {
        var cell = object.getCellByPosition(columns, 0);
        var content = cell.getFormula();
        if (content == "") break;
        columns++;
    }

    for (var j = 0; j < rows; j++) {
        var arr = [];
        for (var i = 0; i < columns; i++) {
            var cell = object.getCellByPosition(i, j);
            var content = cell.getFormula();
            var text = content + "";
            var value = cell.getValue();
            if (isNumber(text)) {
                arr.push(value);
                continue;
            }
            if (content.indexOf(",") != -1) {
                arr.push("\"" + text + "\"");
            } else {
                arr.push(text);
            }
        }
        master.push(arr);
    }

    return master;

}
/*
function toObjectOfObject(sheet) {

    var master = {};
    var array = toArray(sheet);
    var keys = [];

    for (var i in array) {
        var row = array[i];
        if (i == 0) {
            keys = row;
            // make all keys lowercase and no spaces
            for (var j in keys) {
                var origin = keys[j];
                var dest = origin.toString().replace(/ /g, "_");
                dest = dest.toLowerCase();
                keys[j] = dest;
            }
            continue;
        }
        var obj = {};
        if (keys.length > 2) {
            for (var j in keys) {
                if (j == 0) continue;
                obj[keys[j]] = row[j];
            }
        } else {
            obj = row[1];
        }
        master[row[0]] = obj;
    }

    return master;

}
function toArrayOfObject(sheet) {

    var master = [];
    var array = toArray(sheet);
    var keys = [];

    for (var i in array) {
        var row = array[i];
        if (i == 0) {
            keys = row;
            // make all keys lowercase and no spaces
            for (var j in keys) {
                var origin = keys[j];
                var dest = origin.toString().replace(/ /g, "_");
                dest = dest.toLowerCase();
                keys[j] = dest;
            }
            continue;
        }
        var obj = {};
        for (var j in keys) {
            obj[keys[j]] = row[j];
        }
        master.push(obj);
    }

    return master;

}
*/

// a Swing UI for displaying the data
function EditorPane() {

    Swing = Packages.javax.swing;
    this.pane = new Swing.JEditorPane("text/html", "");
    this.jframe = new Swing.JFrame();
    this.jframe.setBounds(100, 100, 500, 400);
    var editorScrollPane = new Swing.JScrollPane(this.pane);
    editorScrollPane.setVerticalScrollBarPolicy(
        Swing.JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);
    editorScrollPane.setPreferredSize(new java.awt.Dimension(150, 150));
    editorScrollPane.setMinimumSize(new java.awt.Dimension(10, 10));
    this.jframe.setVisible(true);
    this.jframe.getContentPane().add(editorScrollPane);

    // public methods
    this.getPane = function () { return this.pane; }
    this.getJFrame = function () { return this.jframe; }

}
var Headers;    //columname to colIdx mapping
function CollectRows(array, index, colIdx) {
    //special handling if col with multi-entries:
    //walk through col until no more
    var rowIdx = index - 1;
    var list = new Array();
    while (true) {  //there should be an empty row between quest or this will not work !
        rowIdx += 1;
        if (array[rowIdx][colIdx] != "") {
            list.push(JSON.stringify(array[rowIdx][colIdx]));
        } else {
            break;
        }
    }
    return (list)
}

function NextQuest(sheet) {
    var index = 0
    var array = toArray(sheet);
    var maxIndex = array.length - 1;
    var allQuest = {}
    var aQuest
    var questId
    //if index ==0 expecting column headers
    var row = array[index];
    var maxCol = row.length - 1;
    // make all keys lowercase and no spaces
    Headers = new Array()
    for (var j in row) {
        Headers[row[j]] = j;
    };
    while (index < maxIndex) {
        //search in col ID for next non-empty 
        while (index <= maxIndex) {
            index += 1;
            if (index > maxIndex) {
                break;
            }
            if (array[index][Headers["ID"]] != "") {
                questId = "Quest " + array[index][Headers["ID"]];
                break;
            }
        }
        //finish if no more questid found
        if (index > maxIndex) {
            break;
        }
        //create container for descr,subtext,rewards,...
        aQuest = {}
        //add text to container
        aQuest["Title"] = array[index][Headers["Title"]];
        aQuest["Type"] = array[index][Headers["Type"]];
        aQuest["Difficulty"] = array[index][Headers["Difficulty"]];
        aQuest["From"] = array[index][Headers["From"]];
        aQuest["Location"] = array[index][Headers["Location"]];
        //why does everything needs to be stringified extra ?
        aQuest["Description"] = JSON.stringify(CollectRows(array, index, Headers["Description"]));
        aQuest["Objectives List"] = JSON.stringify(CollectRows(array, index, Headers["Objectives List"]));
        aQuest["Visible Objectives"] = JSON.stringify(CollectRows(array, index, Headers["Visible Objectives"]));
        aQuest["Rewards List"] = JSON.stringify(CollectRows(array, index, Headers["Rewards List"]));
        aQuest["Visible Rewards"] = JSON.stringify(CollectRows(array, index, Headers["Visible Rewards"]));
        aQuest["Subtext"] = JSON.stringify(CollectRows(array, index, Headers["Subtext"]));
        allQuest[questId] = JSON.stringify(aQuest); 
    }
    return (allQuest);
}

(function main() {

    //get the document object from the scripting context
    oDoc = XSCRIPTCONTEXT.getDocument();

    //get the XSpreadsheetDocument interface from the document
    xSpreadsheetDocument = UnoRuntime.queryInterface(XSpreadsheetDocument, oDoc);

    // get a reference to the sheets for this doc
    var xDocModel = UnoRuntime.queryInterface(XModel, xSpreadsheetDocument);
    var xSpreadsheetModel = UnoRuntime.queryInterface(XModel, xDocModel);
    var xSpreadsheetController = xSpreadsheetModel.getCurrentController();
    var xSpreadsheetView = UnoRuntime.queryInterface(XSpreadsheetView, xSpreadsheetController);
    var activeSheet = xSpreadsheetView.getActiveSheet();
    var xSheet = UnoRuntime.queryInterface(XNamed, activeSheet);

    var sheets = xSpreadsheetDocument.getSheets();
    var sheet = sheets.getByName(xSheet.getName());

    // construct a new EditorPane
    var editor = new EditorPane();
    var pane = editor.getPane();
    // compose
    var data = NextQuest(sheet);	//toObjectOfObject(sheet);//toArrayOfObject(sheet);//
    var text = JSON.stringify(data);
    pane.setText(text);
    if (false) {

        var ctx = XSCRIPTCONTEXT.getComponentContext();
        var smgr = ctx.getServiceManager();
        storeProps = new Array;//PropertyValue[1];
        //storeProps[0] = new PropertyValue();
        //storeProps[0].Name = "FilterName";
        //dont set filter or will cause problem on Load !
        //storeProps[0].Value = "Text";// "Text - txt - csv (StarCalc)" // "HTML (StarCalc)";		
        storeUrl = xDocModel.getURL();
        storeUrl = storeUrl.substring(0, storeUrl.lastIndexOf('.'));

        var desktop = smgr.createInstanceWithContext("com.sun.star.frame.Desktop", ctx);
        // query the XComponentLoader interface from the Desktop service
        var xComponentLoader = UnoRuntime.queryInterface(XComponentLoader, desktop);
        // open a writer document
        var loadURL = "private:factory/swriter";		//"file:///d:/temp/test.json";
        var oDoc2 = xComponentLoader.loadComponentFromURL(loadURL, "_blank", 0, storeProps);
        var xStorable = UnoRuntime.queryInterface(XStorable, oDoc2);
        var oTextdoc = UnoRuntime.queryInterface(XTextDocument, oDoc2);
        var oText = oTextdoc.getText();
        var oCursor = oText.createTextCursor();

        oText.insertString(oCursor, text, false);
        //save file    
        //xStorable.storeToURL(storeUrl+".json", storeProps);
    }

})();