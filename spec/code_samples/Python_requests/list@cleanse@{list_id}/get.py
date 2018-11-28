import requests

url = "https://cleanse.studio/api/v1/list/cleanse/%7Blist_id%7D"

querystring = {"username":"SOME_STRING_VALUE"}

headers = {'content-type': 'application/json'}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)