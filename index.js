
var express = require('express')
var serveStatic = require('sever-static'); //특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 열어줌
var app = express()
app.use(serveStatic(path.join(__dirname, 'public')));
app.listen(3030);
// respond with "hello world" when a GET request is made to the homepage
app.get('', function (req, res) {
res.send('AAAAAAAAAAAAAAAAAAAAA')
});

var appServer = http.createSnerver(app);
appServer.listen(app.get('port'),
    function () {
        console.log('express 웹서버 실행' + app.get('port'));
    }
 
);

