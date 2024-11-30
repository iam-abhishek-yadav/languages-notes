package main

import (
	"fmt"
	"io"
	"os"
)

func files () {
	content := "This content goes to a file"
	fmt.Println(content) // This content goes to a file

	file, err := os.Create("./test.txt")
	checkNilError(err)
	length, err := io.WriteString(file, content)
	checkNilError(err)
	fmt.Println(length) // 27
	defer file.Close()
	readFile("./test.txt")
}

func readFile(filename string) {	
	data, err := os.ReadFile(filename)
	checkNilError(err)
	fmt.Println(string(data)) // This content goes to a file
}

func checkNilError(err error) {
	if err != nil {
		panic(err)
	}
}