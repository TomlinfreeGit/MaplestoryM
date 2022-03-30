let modifiedHeaders = $response.headers;
modifiedHeaders['Access-Control-Allow-Origin'] = '*';
modifiedHeaders['Cache-Control'] = 'private';
modifiedHeaders['Content-Type'] = 'text/html';
modifiedHeaders['charset'] = 'UTF-8';
modifiedHeaders['errorCode'] = '0';

let modifiedStatus = 'HTTP/1.1 200 OK';

$done({status: modifiedStatus, headers : modifiedHeaders});