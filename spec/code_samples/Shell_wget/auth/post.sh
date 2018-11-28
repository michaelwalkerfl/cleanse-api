wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer REPLACE_BEARER_TOKEN' \
  --body-data '{"email":"<ADD STRING VALUE>","password":"<ADD STRING VALUE>"}' \
  --output-document \
  - http://example.com/api/v1/auth