export const gitInit: string = `
  git init
`;

export const gitInitOut: string = `
  Initialized empty Git repository in /home/raj/presentations/git_github_1/temp_converter/.git/
`;

export const gitAddFile: string = `
  git add index.html  
`;

export const gitAddFileOut: string = `
  No output will be shown.
  Run "git status"
  index.html should be a part of "Changes to be committed"
`;

export const gitAddDir: string = `
  git add styles/ 
`;

export const gitAddDirOut: string = `
  No output will be shown.
  Run "git status"
  all files in "styles/" should be a part of "Changes to be committed"
`;

export const gitAddAll: string = `
  git add . 
`;

export const gitAddAllOut: string = `
  No output will be shown.
  Run "git status"
  all files that are modified should be green instead of red 
`;

export const gitStatus: string = `
  git status 
`;

export const gitStatusOut: string = `
  On branch main
  No commits yet

  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          README.md
          index.html
          script.js

  nothing added to commit but untracked files present (use "git add" to track)
`;

export const commitWithMessage: string = `
  git commit -m "Add index.html"
`;

export const commitWithMessageOut: string = `
  [main (root-commit) 5b5eaf9] Add index.html
    1 file changed, 34 insertions(+)
    create mode 100644 index.html
`;

export const commitWithDescription: string = `
  git commit -m "Add functionality to temp_converter" -m "
  - Create a README.md for repository
  - Add script.js to handle temperature conversions"
`;

export const commitWithDescriptionOut: string = `
  [main 5bd8b99] Add functionality to temp_converter
    2 files changed, 52 insertions(+)
    create mode 100644 README.md
    create mode 100644 script.js
`;

export const log: string = `
  git log 
`;

export const logOut: string = `
  commit 5bd8b995df97cd6b8d390a1847299c09a2b2d2c2 (HEAD -> main)
  Author: craniacshencil <rajnikamrajnikam@gmail.com>
  Date:   Tue Sep 10 16:01:26 2024 +0530

      Add functionality to temp_converter

      - Create a README.md for repository
      - Add script.js to handle temperature conversions

  commit 5b5eaf96d3288229a5d4e6d104f06fcbaf461153
  Author: craniacshencil <rajnikamrajnikam@gmail.com>
  Date:   Tue Sep 10 15:52:19 2024 +0530

      Add index.html
`;

export const onelineLog: string = `
  git log --oneline
`;

export const onelineLogOut: string = `
  5bd8b99 (HEAD -> main) Add functionality to temp_converter
  5b5eaf9 Add index.html
`;

export const diff: string = `
  git diff 
`;

export const diffOut: string = `
  No output, when you run it for the first time
`;
