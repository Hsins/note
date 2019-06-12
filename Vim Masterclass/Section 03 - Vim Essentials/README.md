# Section 03 - Vim Essentials

## Table of Contents

- [Section 03 - Vim Essentials](#section-03---vim-essentials)
  - [Table of Contents](#table-of-contents)
  - [[Note] Essential Navigation Commands](#note-essential-navigation-commands)
  - [[Lecture] Deleting Text and "Thinking in Vim"](#lecture-deleting-text-and-%22thinking-in-vim%22)

## [Note] Essential Navigation Commands

- <kbd>h</kbd>：←
- <kbd>j</kbd>：↓
- <kbd>k</kbd>：↑
- <kbd>l</kbd>：→

- <kbd>Ctrl + F</kbd>：Page down
- <kbd>Ctrl + B</kbd>：Page up

- <kbd>w</kbd>：Move foward by word
- <kbd>W</kbd>：Move foward by word using white space as word boundaries
- <kbd>b</kbd>：Move backward by word
- <kbd>B</kbd>：Move backward by word using white space as word boundaries

- <kbd>0</kbd>：Move to the beginning of a line
- <kbd>^</kbd>：Move to the beginning of file
- <kbd>$</kbd>：Move to the end of file

- <kbd>[num]gg</kbd> or <kbd>[num]G</kbd>：Move to line [num]
- <kbd>gg</kbd>：Move to the beginning of file
- <kbd>G</kbd>：Move to the beginning of file

- <kbd>Ctrl + G</kbd>：Display the file name, file status and line
- <kbd>g</kbd> then <kbd>Ctrl + G</kbd>：Display more information

`:[num]`
`:$`

`:set ruler`
`:set noruler`
`:set ruler!`

## [Lecture] Deleting Text and "Thinking in Vim"

