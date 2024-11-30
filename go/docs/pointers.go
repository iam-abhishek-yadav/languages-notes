package main

import "fmt"

func pointers(){
	var ptr *int
	fmt.Println(ptr) // <nil>

	myNumber := 23
	var ptrNumber = &myNumber
	fmt.Println(ptrNumber) // memory address
	fmt.Println(*ptrNumber) // 23

	*ptrNumber = *ptrNumber + 2
	fmt.Println(myNumber) // 25
}