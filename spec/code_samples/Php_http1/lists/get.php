<?php

$request = new HttpRequest();
$request->setUrl('https://analyzemail.com/api/v1/lists');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'username' => 'SOME_STRING_VALUE'
));

$request->setHeaders(array(
  'content-type' => 'application/json'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}