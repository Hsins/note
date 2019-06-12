# Section 02 - Creating a Local Linux Shell Scripting Environment

## Table of Contents

- [Section 01 - Welcome & What is this Course About?](#section-01---welcome--what-is-this-course-about)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Welcome to Night Photography](#lecture-welcome-to-night-photography)
  - [[Lecture] Our 10 Night Photography Commandments](#lecture-our-10-night-photography-commandments)
  - [[Lecture] Equipment for Night Photography](#lecture-equipment-for-night-photography)
  - [[Lecture] DOWNLOAD: "Don't Forget Me" Night Photography Checklist](#lecture-download-%22dont-forget-me%22-night-photography-checklist)
  - [[Lecture] OPTIONAL Refresher: Setting Refresher](#lecture-optional-refresher-setting-refresher)
  - [[Lecture] DOWNLOAD: Beginner's Guide to Photography](#lecture-download-beginners-guide-to-photography)
  - [[Lecture] Get More Photography Resources & Tips](#lecture-get-more-photography-resources--tips)

## [Lecture] Creating a Local Lab Environment Using Vagrant and VirtualBox - Background

透過 VirtualBox 和 Vagrant 的虛擬化技術可以在不同作業系統上輕量化地安裝其他的 Linux 發行版，在 Vagrant 中將作業系統映像檔視為一個個的盒子（box）概念，透過以下命令來安裝一個虛擬化環境：

```bash
$ vagrant box add USER/BOX
```

每一個 Vagrant 專案中帶有一個 Vagrantfile 設定檔，常見的 Vagrant 相關命令：

```bash
# Initiate a vagrant project
$ vagrant init [USER/BOX]

# Import the box into Virtual box and start it
$ vagrant up [VM_NAME]

# Connect the vagrant environment by ssh
$ vagrant ssh [VM_NAME]

# Stop the VM
$ vagrant halt [VM_NAME]

# Suspend the VM
$ vagrant suspend [VM_NAME]

# Resume the VM
$ vagrant resume [VM_NAME]

# Remove the VM
$ vagrant destroy [VM_NAME]
```

## [Lecture] Exercise 1 Instructions - Creating a Local Linux Shell Scripting Lab Environment

略，詳見 [Exercise 01 - Creating a Local Lab Environment.pdf]() 說明。

## [Lecture] Walkthrough – Part I – Windows Users Only

略。

## [Lecture] Walkthrough – Part I – Mac Users Only

略。

## [Lecture] Walkthrough – Part I – Linux (CentOS/RHEL) Users Only

略。

## [Lecture] Walkthrough – Part II – All Users

略。

## [Lecture] Vagrant and VirtualBox Troubleshooting Tips