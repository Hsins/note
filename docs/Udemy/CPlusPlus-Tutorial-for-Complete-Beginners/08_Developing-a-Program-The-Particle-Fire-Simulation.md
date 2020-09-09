# Developing a Program: The Particle Fire Simulation

## [Lecture] Particle Fire Explosion



## [Lecture] Using C++ Libraries

如果要將撰寫好的代碼在不同的專案中使用，可以將其打包成 **函數庫（Library）**。在一個 C++ 專案透過編譯器進行編譯時，會經過以下的步驟：

1. **預處理器（Pre-Processor）**：透過預處理器引入其他標頭檔
2. **彙編（Compilation）**：在這一階段會產生許多以 `*.o` 作為副檔名的物件檔案
3. **連接（Link）**：最後將這些物件檔案連接產生可執行檔案，在 Windows 作業系統下通常副檔名為 `*.exe`，而在 Unix 作業系統下則可能不含副檔名

值得一提的是在編譯的過程中，還可以連接靜態函數庫或動態函數庫：

- **靜態函數庫（Static Library）** 會把整個函數庫包進執行檔中，藉此可以確保在不同機器環境下執行，也不會因為少了這個函式庫導致無法執行檔案，但其缺點是檔案會比較大。靜態函數庫在 Windows 作業系統下名稱通常如 `XYZ.lib`，而在 Unix 作業系統下則如 `libXYZ.a`。
- **動態函式庫（Dynamic Library）** 的好處則是可以讓多個執行檔案，同時連結使用來減少佔據的空間，但可能因為函數庫版本不同而導致連接執行錯誤。動態函數庫在 Windows 作業系統下名稱通常如 `XYZ.dll`，而在 Unix 作業系統下則如 `libXYZ.so`。

## [Lecture] Aquiring Simple Direct Media Layer

在這個專案中我們必須使用到 [SDL](https://www.libsdl.org/) 這套開放式原始碼的跨平台多媒體開發函式庫。關於不同平台的安裝方式詳見：

- Windows 可以參考：
  - [YouTube | How To Set Up SDL2 on Windows 10 with CLion, MinGW (for Game Programming in C++)](https://www.youtube.com/watch?v=7sIBklOTImI)
  - [YouTube | SDL 2 Tutorial 1b [SETUP] Windows and Visual Studio Setup](https://www.youtube.com/watch?v=Sfn7yOiwJLw)
- MacOS 可以參考 [Medium | Set up SDL2 on your Mac without Xcode](https://medium.com/@edkins.sarah/set-up-sdl2-on-your-mac-without-xcode-6b0c33b723f7)

## [Lecture] A Basic SDL Program

## [Lecture] Creating an SDL Window

## [Lecture] Textures, Renderers and Buffers

## [Lecture] Setting Pixel Colors

## [Lecture] Creating the Screen Class

## [Lecture] Bit Shifting and Colors

## [Lecture] Adding a Set Pixel Method

## [Lecture] Animating Colors

## [Lecture] Creating Particles

## [Lecture] Animating Particles

## [Lecture] Creating an Explosion

## [Lecture] Ensuring Constant Speed

## [Lecture] Bitwise "And"

## [Lecture] Implementing Box Blur

## [Lecture] Tweaking Particle Motion
