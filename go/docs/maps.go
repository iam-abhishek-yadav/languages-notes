package main

import "fmt"

func maps ()	{
	languages := make(map[string]string)

	languages["JS"] = "Javascript"
	languages["RB"] = "Ruby"
	languages["PY"] = "Python"

	fmt.Println(languages) // map[JS:Javascript PY:Python RB:Ruby]
	fmt.Println(languages["RB"]) // Ruby

	delete(languages, "RB")
	fmt.Println(languages) // map[JS:Javascript PY:Python]

	for key, value := range languages {
		fmt.Printf("For key %v, value is %v\n", key, value)
	} // For key JS, value is Javascript
    // For key PY, value is Python

	fmt.Println(len(languages)) // 2
}