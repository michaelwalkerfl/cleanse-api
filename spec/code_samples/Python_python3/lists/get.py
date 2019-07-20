import http.client

conn = http.client.HTTPSConnection("analyzemail.com")

headers = { 'content-type': "application/json" }

conn.request("GET", "/api/v1/lists?username=SOME_STRING_VALUE", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))