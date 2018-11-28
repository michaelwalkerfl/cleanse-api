wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer REPLACE_BEARER_TOKEN' \
  --body-data '{"filename":"<ADD STRING VALUE>","emails":["<ADD STRING VALUE>"]}' \
  --output-document \
  - 'http://example.com/api/v1/list?username=SOME_STRING_VALUE'