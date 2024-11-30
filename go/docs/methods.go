package main

import "fmt"

type User struct{
	Name string
	Email string
	Status bool
	Age	int
}

func (u User) GetStatus() {	
	fmt.Println("Is user active?", u.Status)
}

func (u User) NewMail() {
	u.Email = "test@go.dev"
	fmt.Println("Email of this user is", u.Email)
}

func methods () {
	abhishek := User {
		Name: "Abhishek",
		Email: "abhishek@go.dev",
		Status: true,
		Age: 22,
	}

	abhishek.GetStatus() // Is user active? true
	abhishek.NewMail() // Email of this user is test@go.dev

	fmt.Println(abhishek) // {Abhishek abhishek@go.dev true 22}
}