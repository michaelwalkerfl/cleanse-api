import requests

url = "http://example.com/api/v1/auth"

payload = "{\"email\":\"<ADD STRING VALUE>\",\"password\":\"<ADD STRING VALUE>\"}"
headers = {
    'content-type': "application/json",
    'authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)