<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append('{"email":"<ADD STRING VALUE>","password":"<ADD STRING VALUE>"}');

$request->setRequestUrl('https://analyzemail.com/api/v1/auth');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders(array(
  'content-type' => 'application/json'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();