import http.client

conn = http.client.HTTPSConnection("analyzemail.com")

payload = "{\"filename\":\"<ADD STRING VALUE>\",\"emails\":[\"<ADD STRING VALUE>\"]}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/api/v1/list?username=SOME_STRING_VALUE", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))