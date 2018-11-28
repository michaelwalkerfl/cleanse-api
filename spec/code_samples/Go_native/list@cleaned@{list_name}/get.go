package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://cleanse.studio/api/v1/list/cleaned/%7Blist_name%7D?username=SOME_STRING_VALUE"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("content-type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}