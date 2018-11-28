import http.client

conn = http.client.HTTPConnection("example.com")

payload = "{\"filename\":\"<ADD STRING VALUE>\",\"emails\":[\"<ADD STRING VALUE>\"]}"

headers = {
    'content-type': "application/json",
    'authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("POST", "/api/v1/list?username=SOME_STRING_VALUE", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))