package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

const weburl = "https://api.github.com/repos/iam-abhishek-yadav/tasks"

// Define a struct to match the JSON structure
type Repo struct {
	ID            int    `json:"id"`
	Name          string `json:"name"`
	FullName      string `json:"full_name"`
	Owner         struct {
		Login string `json:"login"`
		ID    int    `json:"id"`
	} `json:"owner"`
}

func web_requests() {
	response, err := http.Get(weburl)
	checkNilError(err)
	defer response.Body.Close() // Closing the connection after reading the response

	content, err := io.ReadAll(response.Body)
	checkNilError(err)
	fmt.Println("Content is: ", string(content))

	var repo Repo
	err = json.Unmarshal(content, &repo) // unmarshal or convert JSON to struct
	checkNilError(err)

	fmt.Printf("Repo ID: %d\n", repo.ID)
	fmt.Printf("Repo Name: %s\n", repo.Name)
	fmt.Printf("Repo Full Name: %s\n", repo.FullName)
	fmt.Printf("Repo Owner Login: %s\n", repo.Owner.Login)
	fmt.Printf("Repo Owner ID: %d\n", repo.Owner.ID)
}

func checkNilError(err error) {
	if err != nil {
		panic(err)
	}
}
