# Git Archaeologist

Git Archaeologist is an interactive Git learning project that turns version control concepts into a visual investigation. Instead of memorizing commands in isolation, users can explore a story-driven commit history, trace branch movement, and recover from common mistakes.

## Why this project

Git is essential for modern software engineering, but many beginners learn commands without understanding what they are doing. This project helps learners see how Git works in practice.

## Features

- Visual commit timeline
- Branch and merge history explorer
- Simulated recovery scenarios
- Common mistake explanations
- Easy-to-read learning cards for students and beginners
- Browser-only demonstration, no backend required

## The core idea

Users act like detectives investigating a repo:
- where did this commit come from?
- why is this branch ahead?
- what happened during this merge?
- how do we restore the previous state safely?

## Run locally

Open `index.html` directly in a browser, or run a simple static server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## GitHub Pages

After enabling GitHub Pages for the repository, the site will be available at:

```text
https://naimul404-lab.github.io/git-archaeologist/
```

## Possible future enhancements

- Animated branch graph
- Interactive “recover the repo” challenges
- Mini quiz mode
- Commit diff explorer
- Learn-by-doing Git workflow simulation
