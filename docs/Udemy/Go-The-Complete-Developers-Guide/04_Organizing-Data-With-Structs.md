# Organizing Data With Structs

## [Lecture] Structs in Go

### Define and Declare Structs

```go
type person struct {
	firstName string
	lastName  string
}

func main() {
	// alex := person{"Alex", "Anderson"}
	// alex := person{firstName: "Alex", lastName: "Anderson"}
	var alex person
	alex.firstName = "Alex"
	alex.lastName = "Anderson"
	fmt.Println(alex)
	fmt.Printf("%+v", alex) // %+v well print out all different field names
}
```

### Zero Values

|   Type   | Zero Values |
| :------: | :---------: |
| `string` |    `""`     |
|  `int`   |     `0`     |
| `float`  |     `0`     |
|  `bool`  |   `false`   |

## [Lecture] Updating Struct Values

## [Lecture] Embedding Structs

```go
type contactinfo struct {
	email   string
	zipCode int
}

type person struct {
	firstName string
	lastName  string
	contact   contactinfo
}

func main() {
	jim := person{
		firstName: "Jim",
		lastName:  "Party",
		contact: contactinfo{
			email:   "jim@gmail.com",
			zipCode: 94000,
		},
	}

	fmt.Printf("%+v", jim)
}
```

## [Lecture] Structs with Receiver Functions

## [Lecture] Pass By Value

## [Lecture] Structs with Pointers

## [Lecture] Pointer Operations

- `&variable` give the memory address of the value this variable is pointing at
- `*point` give the value this memory address is pointing at

## [Lecture] Pointer Shortcut

## [Lecture] Gotchas With Pointers

## [Lecture] Reference vs Value Types
