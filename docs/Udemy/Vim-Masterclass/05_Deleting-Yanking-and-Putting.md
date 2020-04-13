---
pageClass: udemy
---

# Deleting, Yanking, and Putting

## Cut, Copy and Paste

- <kbd>d</kbd> and <kbd>c</kbd> cut text, not just delete
- cut = delete and save into a register
- Register is a clipboard-like storage location

If we cut the line with <kbd>dd</kbd> command. This place has the cut text into what vim calls the unnamed register: default register.

unname register == default register

Use <kbd>p</kbd> `put` command to place that text one the line below where the cursor is.

<kbd>ddp</kbd> to swap the line
<kbd>xp</kbd> to swap the character


<kbd>p</kbd> puts the text after your cursor
<kbd>P</kbd> puts the text before your cursor

If you just want to copy text and not cut it, use the <kbd>y</kbd> `yank`. You can think yank as copy more accurately text is being yanked into a register

cut = deletel
copy = yank
paste = put

<kbd>yw</kbd> puts the text after your cursor
<kbd>y$</kbd> puts the text after your cursor
<kbd>yy</kbd> copy entire line

<kbd>u</kbd> undo
<kbd>r</kbd> redo

## Registers

### Types

- Unnamed Registers
- Numbered Registers
- Named Registers

### Registers

Registers are preceded with a double quite.

- Unnamed registers: `""`
- Numbered registers: `"0"`, `"1"`, ... `"9"`

Note that:

- `""` holds text from d, c, s, x and y operations
- `"0"` holds last text yanked (y)
- `"1"` holds last text deleted (d) or changed (c)
- Numbered regisiters shift with each d or c

Use `:ref` to see show registers

### Repeating with Registers

[count][register]operator
[register][count]operator