# Click Counter Task

# HOW TO SET UP & START

1. Open git bash

2. Navigate to the project folder (e.g cd downloads/) & if needed more times then cd .. cd ..

3. Install yarn (if needed)
>  yarn install

4. Navigate to > frontend in bash
>  use /cd  >>> /test-task/frontend

4. Start server
>  yarn dev

5. Open server 
>  CTRL + CLICK (URL) 
or
http://localhost:5173


This repository contains tests for a small front-end application. However, there is no
application code that implements requirements laid out in those tests.

Your task is to:

1. Write a small front-end application, which follows the test spect laid out in tests
of this repository.

2. Amend the tests (and application code) in a way that every rerun of the tests
will reproduce same results without restarting the application.

3. If you add any other functionality that is not included in the current tests, add tests
for that functionality as well.

## Tests setup

1. Install latest Node (at least Node v16)

2. Install packages with `yarn install`

## Running tests

On Linux

`PAGE_URL="YOUR_APPLICATION_URL_GOES_HERE" yarn test`

On Windows cmd (Command Prompt)

```cmd
setx PAGE_URL "YOUR_APPLICATION_URL_GOES_HERE"
yarn test
```

## Submission

1. Clone this repository

2. Solve task laid out by the tests. Commit and zip the task files.

3. Submit your task according to the instructions sent to you via e-mail.

## Evaluation

Your submission will be evaluated in the following categories:

- Adherence to the specs laid out in tests

- Quality of the code: [Clean code rules](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29)

- Git practices and commit message quality: [How to write a good commit message](https://www.gitkraken.com/learn/git/best-practices/git-commit-message)

## Other notes

You are free to use whatever language/framework/technologies you want.

Along with code submit instructions how to start the application.

No backend is necessary, it is fine to hold the count as long as the application is
running.

