<?php

$request = new HttpRequest();
$request->setUrl('https://cleanse.studio/api/v1/list');
$request->setMethod(HTTP_METH_POST);

$request->setQueryData(array(
  'username' => 'SOME_STRING_VALUE'
));

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$request->setBody('{"filename":"<ADD STRING VALUE>","emails":["<ADD STRING VALUE>"]}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}