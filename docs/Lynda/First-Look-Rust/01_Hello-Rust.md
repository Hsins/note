---
pageClass: lynda
---

# Hello, Rust!

## Installation

We'll install Rust using [`rustup`](https://rustup.rs/), a command line tool for managing Rust versions and associated tools.

```bash
# Linux or mac OS
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Arch Linux
$ sudo pacman -S rustup

# Install Rust using rustup
$ rustup install stable
$ rustup install nightly

# Update Rust and associated toolchains using rustup
$ rustup update
```

Next, we are going to install the extensions for Rust in Visual Studio Code:

- [Marketplace | Rust](https://marketplace.visualstudio.com/items?itemName=kalitaalexey.vscode-rust)
- [Marketplace | Rust (rls)](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust)

## Hello, World!

Let's write our first Rust program, a program printing `"Hello World!"` to the screen:

```rust
fn main() {
    println!("Hello World!");
}
```

Note that Rust is an AOT (ahead-of-time) compilation language. We must compile the code first and then generate a binary executable file to be executed:

```bash
$ rustc ./hello_world.rs
```

## Hello, Cargo!

Cargo is the build system and package manager for Rust. Most Rustecians use Cargo to manage their Rust projects. Let's create a new project with Cargo:

```bash
# create Rust project with Cargo
$ cargo new hello_cargo --bin

# compile file inside folder to be execuable file
$ cargo build

# comfile and run file
$ cargo run

$ cargo check
```
