import http.client

conn = http.client.HTTPConnection("example.com")

headers = {
    'content-type': "application/json",
    'authorization': "Bearer REPLACE_BEARER_TOKEN"
    }

conn.request("GET", "/api/v1/list/cleanse/%7Blist_id%7D?username=SOME_STRING_VALUE", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))