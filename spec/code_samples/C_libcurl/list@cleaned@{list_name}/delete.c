CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_easy_setopt(hnd, CURLOPT_URL, "https://analyzemail.com/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE");

struct curl_slist *headers = NULL;
headers = curl_slist_append(headers, "content-type: application/json");
curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);

CURLcode ret = curl_easy_perform(hnd);