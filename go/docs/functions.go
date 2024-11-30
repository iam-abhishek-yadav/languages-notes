package main

import "fmt"

func functions() {
	fmt.Println("Hello World 1!")
	hello()

	func () {
		fmt.Println("Hello World 3!")
	}() // Immediately invoked function

	result := adder(3, 5)

	fmt.Println(result) // 8

	fmt.Println(proAdder(3, 5, 6, 7, 8)) // 29
}

func adder(x int, y int) int {
	return x + y
} // Normal function

func proAdder(values ...int) int {
	total := 0
	for _, value := range values {
		total += value
	}
	return total
} // Variadic function with ...

func hello() {
	fmt.Println("Hello World 2!") // Hello World 2
}