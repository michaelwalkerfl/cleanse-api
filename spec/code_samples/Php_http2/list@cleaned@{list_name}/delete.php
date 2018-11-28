<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://cleanse.studio/api/v1/list/cleaned/%7Blist_name%7D');
$request->setRequestMethod('DELETE');
$request->setQuery(new http\QueryString(array(
  'username' => 'SOME_STRING_VALUE'
)));

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();