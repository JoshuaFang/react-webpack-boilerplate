
var config = require("../config/router.js");
var gulp = require("gulp");
var fs = require("fs");
var path = require("path");

var indent = "  ", contents = [];

function printInfo(config){
    indent = "  "; contents = [];
    contents = ["/* Don't modify! Created by router-converter. */\n\n"];
    contents.push("export default {\n");
    convert(config);
    contents.push("}");
    return contents.join("");
}

function convert(obj){
    if(isArray(obj)){
        contents.push(indent + "childRoutes: [\n");
        var currentIndent = indent; 
        indent = indent + "    ";
        obj.forEach(function(item){
            contents.push(currentIndent + "  {\n");
            convert(item);
            contents.push(currentIndent + "  },\n");
        });
        contents.push(currentIndent + "]\n");
    }else{
        contents.push(indent + 'path: "' + obj.path + '", \n');
        if(obj.staticComponent){
            contents.push(indent + 'component: require("' + obj.staticComponent + '").default,\n');
        }else if(obj.component){
            contents.push(indent + 'getComponent(location, cb) {\n');
            contents.push(indent + '  require.ensure([], (require) => {\n');
            contents.push(indent + '    cb(null, require("'+ obj.component +'").default)\n');
            contents.push(indent + '  });\n');
            contents.push(indent + '},\n');
        }
        if(obj.children){
            convert(obj.children);
        }
    }
}

function isArray(arr){ 
    return  Object.prototype.toString.call(arr) == "[object Array]";
}

gulp.task("convert-router", function(callback){
    var filename = path.join(__dirname, "../config/router.converted.js");
    var filecontent = printInfo(config);
    fs.writeFile(filename, filecontent, function(err){
        if(err) throw err;
        callback();
    });

});

