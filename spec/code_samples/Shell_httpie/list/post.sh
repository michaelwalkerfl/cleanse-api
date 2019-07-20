echo '{"filename":"<ADD STRING VALUE>","emails":["<ADD STRING VALUE>"]}' |  \
  http POST 'https://analyzemail.com/api/v1/list?username=SOME_STRING_VALUE' \
  content-type:application/json