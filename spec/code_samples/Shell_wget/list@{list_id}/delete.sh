wget --quiet \
  --method DELETE \
  --header 'content-type: application/json' \
  --header 'authorization: Bearer REPLACE_BEARER_TOKEN' \
  --output-document \
  - 'http://example.com/api/v1/list/%7Blist_id%7D?username=SOME_STRING_VALUE'