import http.client

conn = http.client.HTTPSConnection("cleanse.studio")

headers = { 'content-type': "application/json" }

conn.request("DELETE", "/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))