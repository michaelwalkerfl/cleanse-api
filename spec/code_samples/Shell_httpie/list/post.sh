echo '{"filename":"<ADD STRING VALUE>","emails":["<ADD STRING VALUE>"]}' |  \
  http POST 'http://example.com/api/v1/list?username=SOME_STRING_VALUE' \
  authorization:'Bearer REPLACE_BEARER_TOKEN' \
  content-type:application/json