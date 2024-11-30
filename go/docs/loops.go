package main

import "fmt"

func loops() {
	days := []string{"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}

	fmt.Println(days)

	for i := 0; i < len(days); i++ {
		fmt.Println(days[i])
	}

	for i:= range days {	
		fmt.Println(days[i])
	}	

	for index, day := range days {
		fmt.Printf("index is %v and value is %v\n", index, day)
	}

	for _, day := range days {
		fmt.Printf("The value is %v\n", day)
	}

	rogueValue := 1

	for rogueValue < 10 {
		fmt.Println("The value is ", rogueValue)
		rogueValue++
	}

	rogueValue = 1

	for rogueValue < 10 {
		if rogueValue == 2 {
			rogueValue++
			continue
		}
		if rogueValue == 5 {
			break
		}
		fmt.Println("The value is ", rogueValue)
		rogueValue++
	}

	rogueValue = 1

	for rogueValue < 10 {
		if rogueValue == 5 {
			rogueValue++
			goto lco
		}
		fmt.Println("The value is ", rogueValue)
		rogueValue++
	}

lco: 
	fmt.Println("lco")
}	