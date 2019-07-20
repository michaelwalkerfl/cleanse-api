wget --quiet \
  --method GET \
  --header 'content-type: application/json' \
  --output-document \
  - 'https://analyzemail.com/api/v1/list/cleanse/%7Blist_id%7D?username=SOME_STRING_VALUE'