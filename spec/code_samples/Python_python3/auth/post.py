import http.client

conn = http.client.HTTPSConnection("cleanse.studio")

payload = "{\"email\":\"<ADD STRING VALUE>\",\"password\":\"<ADD STRING VALUE>\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/api/v1/auth", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))