package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://example.com/api/v1/list/check_email/%7Bemail%7D?username=SOME_STRING_VALUE"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("content-type", "application/json")
	req.Header.Add("authorization", "Bearer REPLACE_BEARER_TOKEN")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}