package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "http://example.com/api/v1/list?username=SOME_STRING_VALUE"

	payload := strings.NewReader("{\"filename\":\"<ADD STRING VALUE>\",\"emails\":[\"<ADD STRING VALUE>\"]}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("content-type", "application/json")
	req.Header.Add("authorization", "Bearer REPLACE_BEARER_TOKEN")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}