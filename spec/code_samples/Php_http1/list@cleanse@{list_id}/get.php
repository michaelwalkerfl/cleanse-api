<?php

$request = new HttpRequest();
$request->setUrl('https://cleanse.studio/api/v1/list/cleanse/%7Blist_id%7D');
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