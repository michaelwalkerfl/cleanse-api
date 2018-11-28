<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{"filename":"<ADD STRING VALUE>","emails":["<ADD STRING VALUE>"]}');

$request->setRequestUrl('http://example.com/api/v1/list');
$request->setRequestMethod('POST');
$request->setBody($body);

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