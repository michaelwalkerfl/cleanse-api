wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{"email":"<ADD STRING VALUE>","password":"<ADD STRING VALUE>"}' \
  --output-document \
  - https://analyzemail.com/api/v1/auth