package main

import "fmt"

func ifElse()	{
	loginCount := 23
	var result string
	if loginCount < 10 {
		result = "Regular user"
	} else if loginCount == 10 {
		result = "Warning user"
	} else {
		result = "Watch out"
	}
	fmt.Println(result) // Regular user

	if 9%2 == 0 {
		fmt.Println("Number is even")
	} else {
		fmt.Println("Number is odd") // Number is odd
	}

	if num := 3; num < 10 {
		fmt.Println("Num is less than 10") // Num is less than 10
	} else {
		fmt.Println("Num is greater than 10")
	}
	
}