<?php

$request = new HttpRequest();
$request->setUrl('http://example.com/api/v1/list/%7Blist_id%7D');
$request->setMethod(HTTP_METH_DELETE);

$request->setQueryData(array(
  'username' => 'SOME_STRING_VALUE'
));

$request->setHeaders(array(
  'authorization' => 'Bearer REPLACE_BEARER_TOKEN',
  'content-type' => 'application/json'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}