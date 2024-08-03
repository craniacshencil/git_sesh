export const gitInit: string = `
  git init
`;

export const gitAddFile: string = `
  git add index.html  
`;

export const gitAddDir: string = `
  git add styles/ 
`;

export const gitAddAll: string = `
  git add . 
`;

export const gitStatus: string = `
  git status 
`;

export const gitRestore: string = `
  git restore my_crippling_insecurities.txt 
`;

export const commit: string = `
  git commit 
`;

export const commitWithMessage: string = `
  git commit -m "Add index.html"
`;

export const commitWithDescription: string = `
  git commit -m "Add index.html" -m "
  - Create the hero section containing branding
  - Add footer displaying all links 
  - Add client success stories and ratings
  " 
`;

export const log: string = `
  git log 
`;

export const onelineLog: string = `
  git log --oneline
`;
