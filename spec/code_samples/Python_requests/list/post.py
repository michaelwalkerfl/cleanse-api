import requests

url = "https://analyzemail.com/api/v1/list"

querystring = {"username":"SOME_STRING_VALUE"}

payload = "{\"filename\":\"<ADD STRING VALUE>\",\"emails\":[\"<ADD STRING VALUE>\"]}"
headers = {'content-type': 'application/json'}

response = requests.request("POST", url, data=payload, headers=headers, params=querystring)

print(response.text)