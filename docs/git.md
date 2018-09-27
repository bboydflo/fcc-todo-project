## Git documentation

Here you can find some documentation about git commands used in this project

### Git commands

> Example
> To see the status of the repository
> ```sh
> $ git status
> ```

### Navigating through git history

In order to see how the project looked like at different points in time one can
use `git checkout` command like this:

```sh
$ git checkout 0c51a7e523275a3bac91fc7c952e1ff1701fc359
```

### Git workflow

#### Git pull request work flow

We are running git commands **always** from the root folder (just inside our project folder, also written as `.`)

Before we will make any changes we want to make sure that we are in sync with the master branch.
Let's see the status of our `local` repo by using this command:

```sh
$ git status
```

We also want to make new changes in a new branch. Let's see how we check our current branches in the local repository. We can see a list of our local branches using the following command:

```sh
$ git branch
```

We are now ready to work. Let's create a new branch

```sh
$ git branch <new-branch-name>
```

> You must replace `<new-branch-name>` with your own name! This branch name should be URL friendly. That means no special characters or spaces are aloud in the branch name. Just keep it simple (KISS)

We can now check that we have created a new branch by listing the current branches like above

```sh
$ git branch
```

We have not switched to the new branch yet, so let's do that!

```sh
$ git checkout <new-branch-name>
```

We are now ready to work in the `<new-branch-name>`

The next step would be to commit the work done in this branch

```sh
$ git status
$ git add .
$ git commit -m "some custom message"
$ git push origin <new-branch-name>
```

The next steps would be to go on github and create a pull request to the upstream repository. Ask the maintainer to accept your work!

If he accepts the changes this branch will be now merged into the upstream branch and everybody should now sync. How do you sync?

First you make sure you are back on the master branch

```sh
$ git checkout master
```

Then you pull the latest changes from the upstream

```sh
$ git pull upstream master
```

Now we are ready to push these changes to our own origins.

```sh
$ git push origin master
```

Now you can get rid of the <new-branch-name> because all the work is now merged inside master branch! Great work!