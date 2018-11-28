<?php

$request = new HttpRequest();
$request->setUrl('http://example.com/api/v1/auth');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'authorization' => 'Bearer REPLACE_BEARER_TOKEN',
  'content-type' => 'application/json'
));

$request->setBody('{"email":"<ADD STRING VALUE>","password":"<ADD STRING VALUE>"}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}