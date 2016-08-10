
var fs = require('fs');

//文件内容替换器（并生成新的文件）
function fileContentReplacer(opts) {

    //源文件
    var src = opts.src;
    //生成文件
    var dist = opts.dist;
    //替换规则
    var replaceRule = opts.replaceRule;

    fs.readFile(src, 'utf-8', function (error, srcData) {
        if (error) {
            console.log('读取文件失败');
            return;
        }
        ;
        //创建文件
        fs.open(dist, 'w', function (error, fd) {
            if (error) {
                console.log('创建文件失败');
                return;
            }
            ;

            //写入文件(异步)
            fs.writeFile(dist, replaceRule(srcData), 'utf-8', function (error) {
                if (error) {
                    console.log('写入文件失败');
                } else {
                    console.log('文件内容替换成功');
                }
            });

        })

    });
}

module.exports=fileContentReplacer;