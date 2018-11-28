wget --quiet \
  --method GET \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer REPLACE_BEARER_TOKEN' \
  --output-document \
  - 'http://example.com/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE'