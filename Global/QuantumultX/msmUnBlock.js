let body = '{"errorCode":0,"result":{"service":{"title":"MapleStory M Global","buildVer":"2","policyApiVer":"2","termsApiVer":"2","useTPA":0,"loginUIType":"1","clientId":"MTY3MDg3NDAy","useMemberships":[101,103,102,9999],"useMembershipsInfo":{"nexonNetSecretKey":"","nexonNetProductId":"","nexonNetRedirectUri":""}},"endBanner":{},"basePlate":[],"country":"HK","termsAgree":[],"isPrivacyConsigned":-1,"useLocalPolicy":["0","0"],"enableLogging":false,"offerwall":{"id":0,"title":""}},"errorText":"1","errorDetail":""}';

let modifiedHeaders = $response.headers;
modifiedHeaders['Access-Control-Allow-Origin'] = '*';
modifiedHeaders['Cache-Control'] = 'private';
modifiedHeaders['Content-Type'] = 'text/html';
modifiedHeaders['charset'] = 'UTF-8';
modifiedHeaders['errorCode'] = '0';

let modifiedStatus = 'HTTP/1.1 200 OK';

$done({status: modifiedStatus, headers : modifiedHeaders, body : body});