<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('http://example.com/api/v1/list/%7Blist_id%7D');
$request->setRequestMethod('DELETE');
$request->setQuery(new http\QueryString(array(
  'username' => 'SOME_STRING_VALUE'
)));

$request->setHeaders(array(
  'authorization' => 'Bearer REPLACE_BEARER_TOKEN',
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();