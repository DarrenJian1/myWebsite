var content = require('./content');

function showPage(response, pathName){
    if(content.contentMap[pathName]){
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(content.contentMap[pathName]);
        response.end();
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/html'})
        response.write('<h1>404 Page Not Found</h1>');
        response.end();
    }
}

exports.showPage = showPage;