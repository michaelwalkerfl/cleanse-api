import requests

url = "http://example.com/api/v1/list/cleaned/%7Blist_name%7D"

querystring = {"username":"SOME_STRING_VALUE"}

headers = {
    'content-type': "application/json",
    'authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)