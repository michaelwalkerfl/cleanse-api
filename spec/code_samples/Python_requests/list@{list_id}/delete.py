import requests

url = "https://analyzemail.com/api/v1/list/%7Blist_id%7D"

querystring = {"username":"SOME_STRING_VALUE"}

headers = {'content-type': 'application/json'}

response = requests.request("DELETE", url, headers=headers, params=querystring)

print(response.text)