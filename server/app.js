var url = require('url');
var fs = require('fs');


function renderHTML(path, response){
    fs.readFile(path,null,function(error , data){
        if (error) {
            response.writeHead(404);
            response.write('file not find');
        }else{
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
    handleRequest: function(request,response) {
        response.writeHead(200,{'Contant-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch(path){
            case '/':
                renderHTML('../client/index.html',response);
                break;
            case '/vr':
                renderHTML('../client/vr.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('route not defined');
                response.end();
                
        }
    }
};