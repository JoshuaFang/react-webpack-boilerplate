
module.exports = function(source) {
    this.cacheable && this.cacheable();
    console.log(source);
    var config = (new Function("return " + source))(),
        rootPath = "page/", result = ["[{"];

    function isArray(arr){
        return Object.prototype.toString.apply(arr) == "[object Array]";
    }

    function convert (config) {
        if(isArray(config)){
            config.forEach(function(item){
                result.push("{");
                convert(item);
                result.push("},");
            });
        }else{
            result.push("path:" + config.path + ",");
            result.push("getComponent: " + 
                'function (location, cb) {\
                    require.ensure([], function(require){\
                        cb(null, require("' + rootPath + config.component + '.jsx"))\
                    })\
                },');
            if(config.children){
                result.push("childRoutes: [");
                convert(isArray(config.children) ? config.children : [config.children]);
                result.push("]");
            }
        }
    }

    convert(config);

    result.push("}]");

    return result.join("");
}