echo '{"email":"<ADD STRING VALUE>","password":"<ADD STRING VALUE>"}' |  \
  http POST http://example.com/api/v1/auth \
  authorization:'Bearer REPLACE_BEARER_TOKEN' \
  content-type:application/json