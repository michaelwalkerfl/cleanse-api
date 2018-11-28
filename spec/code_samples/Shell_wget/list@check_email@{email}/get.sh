wget --quiet \
  --method GET \
  --header 'content-type: application/json' \
  --output-document \
  - 'https://cleanse.studio/api/v1/list/check_email/%7Bemail%7D?username=SOME_STRING_VALUE'