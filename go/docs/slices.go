package main

import (
	"fmt"
	"sort"
)

func slices(){
	var fruitList = []string{"apple", "tomato", "peach"}
	fmt.Printf("%T\n", fruitList) // []string

	fruitList = append(fruitList, "mango")
	fmt.Println(fruitList) // [apple tomato peach mango]

	fruitList = append(fruitList[1:] )
	fmt.Println(fruitList) // [tomato peach mango]

	fruitList = append(fruitList[:2] )
	fmt.Println(fruitList) // [tomato peach]

	highScore := make([]int, 4)
	highScore[0] = 234
	highScore[1] = 945
	highScore[2] = 465
	highScore[3] = 867
	highScore = append(highScore, 555, 666, 321)

	fmt.Println(highScore) // [234 945 465 867 555 666 321]

	sort.Ints(highScore)
	fmt.Println(highScore) // [234 321 465 555 666 867 945]
	fmt.Println(sort.IntsAreSorted(highScore)) // true


	var course = []string{"react", "python", "ruby", "java", "javascript"}
	fmt.Println(course) // [react python ruby java javascript]
	var index int = 2
	course = append(course[:index], course[index+1:]... )
	fmt.Println(course) // [react python java javascript]
}