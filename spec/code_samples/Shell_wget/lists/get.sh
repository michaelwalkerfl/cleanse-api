wget --quiet \
  --method GET \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer REPLACE_BEARER_TOKEN' \
  --output-document \
  - 'http://example.com/api/v1/lists?username=SOME_STRING_VALUE'