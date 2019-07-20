<?php

$request = new HttpRequest();
$request->setUrl('https://analyzemail.com/api/v1/auth');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$request->setBody('{"email":"<ADD STRING VALUE>","password":"<ADD STRING VALUE>"}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}