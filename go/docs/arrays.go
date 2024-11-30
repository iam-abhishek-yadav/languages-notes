package main

import "fmt"

func arrays(){
	var fruitList [4]string 

	fruitList[0] = "mango"
	fruitList[2] = "apple"
	fruitList[3] = "peach"

	fmt.Println(fruitList) // [mango  apple peach]
	fmt.Println(len(fruitList)) // 4

	var vegList = [3]string{"potato", "beans", "mushroom"}
	fmt.Println(vegList) // [potato beans mushroom]
	fmt.Println(len(vegList)) // 3
}