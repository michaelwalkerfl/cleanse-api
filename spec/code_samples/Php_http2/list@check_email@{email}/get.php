<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://analyzemail.com/api/v1/list/check_email/%7Bemail%7D');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
  'username' => 'SOME_STRING_VALUE'
)));

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();