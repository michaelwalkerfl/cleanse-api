import requests

url = "http://example.com/api/v1/list"

querystring = {"username":"SOME_STRING_VALUE"}

payload = "{\"filename\":\"<ADD STRING VALUE>\",\"emails\":[\"<ADD STRING VALUE>\"]}"
headers = {
    'content-type': "application/json",
    'authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

response = requests.request("POST", url, data=payload, headers=headers, params=querystring)

print(response.text)