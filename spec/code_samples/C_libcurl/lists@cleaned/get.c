CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
curl_easy_setopt(hnd, CURLOPT_URL, "http://example.com/api/v1/lists/cleaned?username=SOME_STRING_VALUE");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "authorization: Bearer REPLACE_BEARER_TOKEN");
headers = curl_slist_append(headers, "content-type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

CURLcode ret = curl_easy_perform(hnd);