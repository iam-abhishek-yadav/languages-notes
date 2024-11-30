package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	PerformGetRequest()
}

func PerformGetRequest() {
	const myurl = "https://jsonplaceholder.typicode.com/posts"
	// Perform GET request
	response, err := http.Get(myurl)
	if err != nil {
		panic(err)
	}
	defer response.Body.Close()

	// Read and print the response body
	body, err := io.ReadAll(response.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println("Response Status:", response.Status)
	fmt.Println("Response Body:", string(body))
}
