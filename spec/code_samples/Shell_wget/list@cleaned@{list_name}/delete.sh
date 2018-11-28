wget --quiet \
  --method DELETE \
  --header 'content-type: application/json' \
  --output-document \
  - 'https://cleanse.studio/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE'