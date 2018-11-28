wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{"email":"<ADD STRING VALUE>","password":"<ADD STRING VALUE>"}' \
  --output-document \
  - https://cleanse.studio/api/v1/auth