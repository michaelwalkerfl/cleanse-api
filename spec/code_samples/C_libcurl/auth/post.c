CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "POST");
curl_easy_setopt(hnd, CURLOPT_URL, "http://example.com/api/v1/auth");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "authorization: Bearer REPLACE_BEARER_TOKEN");
headers = curl_slist_append(headers, "content-type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

curl_easy_setopt(hnd, CURLOPT_POSTFIELDS, "{\"email\":\"<ADD STRING VALUE>\",\"password\":\"<ADD STRING VALUE>\"}");

CURLcode ret = curl_easy_perform(hnd);