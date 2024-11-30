package main

import "fmt"
func structs	() {
	abhishek := User{
		Name: "Abhishek",
		Email: "abhishek@go.dev",
		Status: true,
		Age: 22,
	}

	fmt.Println(abhishek) // {Abhishek abhishek@go.dev true 22}
	fmt.Printf("%T\n", abhishek) // main.User
	fmt.Printf("abhishek details are: %+v\n", abhishek) // abhishek details are: {Name:Abhishek Email:abhishek@go.dev Status:true Age:22}
	fmt.Println(abhishek.Name) // Abhishek
}

type User struct{
	Name string
	Email string
	Status bool
	Age	int
}