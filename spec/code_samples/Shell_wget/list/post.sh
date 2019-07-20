wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{"filename":"<ADD STRING VALUE>","emails":["<ADD STRING VALUE>"]}' \
  --output-document \
  - 'https://analyzemail.com/api/v1/list?username=SOME_STRING_VALUE'