import requests

url = "https://analyzemail.com/api/v1/list/check_email/%7Bemail%7D"

querystring = {"username":"SOME_STRING_VALUE"}

headers = {'content-type': 'application/json'}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)