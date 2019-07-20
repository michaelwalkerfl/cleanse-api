wget --quiet \
  --method GET \
  --header 'content-type: application/json' \
  --output-document \
  - 'https://analyzemail.com/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE'