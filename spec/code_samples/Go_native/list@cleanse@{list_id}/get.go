package main

import (
	"fmt"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://analyzemail.com/api/v1/list/cleanse/%7Blist_id%7D?username=SOME_STRING_VALUE"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("content-type", "application/json")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}