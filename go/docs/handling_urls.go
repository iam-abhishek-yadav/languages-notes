package main

import (
	"fmt"
	"net/url"
)

const myurl string = "https://example.com:3000/learn?course=reactjs&payment=success"


func handling_urls() {
	fmt.Println(myurl) // https://example.com:3000/learn?course=reactjs&payment=success

	result, _ := url.Parse(myurl)
	fmt.Println(result.Scheme) // https
	fmt.Println(result.Host) // example.com:3000
	fmt.Println(result.Path) // learn
	fmt.Println(result.Port()) // 3000
	fmt.Println(result.RawQuery) // course=reactjs&payment=success

	qparams := result.Query()
	fmt.Printf("%+v\n", qparams) // map[course:[reactjs] payment:[success]]
	fmt.Printf("%T\n", qparams) // url.Values
	fmt.Println(qparams["course"]) // [reactjs]
	fmt.Println(qparams["payment"]) // [success]

	partsOfUrl := &url.URL{
		Scheme: "https",
		Host: "example.com",
		Path: "learn",
		RawQuery: "course=reactjs&payment=success",
	}
	fmt.Println(partsOfUrl) // https://example.com/learn?course=reactjs&payment=success
}