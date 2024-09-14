# GitBuddy

*`add`, `commit`, and `push` on your second development machine from your phone, when you forgot to do so at the machine*.

<span style="font-size: 0.667rem;">⚠️ TODO: iOS App Store link, Play Store link, MacOS App Store link, Microsoft Store link</span>

## What GitBuddy Solves

If you develop on two different machines (such as a laptop and desktop), then the following scenario may have happened to you before:

1. You develop on one machine
2. You stop developing and leave that machine
3. You wish to resume development by working on the *other* machine
4. You realize that you forgot to push (or perhaps even commit) your recent changes in Step 1.

## The Solution

GitBuddy consists of two applications:

* a daemon that runs on your development machines (which uses very little RAM)

* a companion mobile app from which you can perform basic git actions on the repositories that you have given GitBuddy access to via the daemon installed on your machines

TLDR it is a git wrapper that allows you to perform basic git actions remotely.

## Features

GitBuddy allows you to perform these actions

* `git add -A`
* `git commit -m <your message>`
* `git push <remote> <branch>`

By only allowing `git add -A` as the only option to stage files, GitBuddy can forego reading filenames and sending them over the internet.

For `git commit`, a message can be entered, or you may choose the default "Committed remotely via GitBuddy." message.

For `git push`, you may configure the `<remote>` and `<branch>` from the daemon, again foregoing the need to send any data to GitBuddy regarding your repos.
