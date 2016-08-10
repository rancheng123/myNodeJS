
var fileContentReplacer = require('./fileContentReplacer.js');

fileContentReplacer({
    src: '../html/faqi.html',
    dist: '../html/faqi-new.html',
    replaceRule: function(srcData){
        return srcData.replace(/class\s*=/g,'className=')
    }
});

