import requests

url = "https://analyzemail.com/api/v1/list/cleaned/%7Blist_name%7D"

querystring = {"username":"SOME_STRING_VALUE"}

headers = {'content-type': 'application/json'}

response = requests.request("DELETE", url, headers=headers, params=querystring)

print(response.text)