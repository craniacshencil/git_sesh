export const clone: string = `
  git clone <https: link to your friend's repo>
`;

export const cloneOut: string = `
  Cloning into 'temp-converter'...
  remote: Enumerating objects: 13, done.
  remote: Counting objects: 100% (13/13), done.
  remote: Compressing objects: 100% (10/10), done.
  remote: Total 13 (delta 2), reused 8 (delta 2), pack-reused 0 (from 0)
  Receiving objects: 100% (13/13), done.
  Resolving deltas: 100% (2/2), done.
`;

export const cloneCustom: string = `
  git clone <https: link to your friend's repo> my_folder 
`;

export const cloneCustomOut: string = `
  Cloning into 'new_folder'...
  remote: Enumerating objects: 13, done.
  remote: Counting objects: 100% (13/13), done.
  remote: Compressing objects: 100% (10/10), done.
  remote: Total 13 (delta 2), reused 8 (delta 2), pack-reused 0 (from 0)
  Receiving objects: 100% (13/13), done.
  Resolving deltas: 100% (2/2), done.
`;

export const fetch: string = `
  git fetch origin main 
`;

export const merge: string = `
  git merge origin main 
`;

export const pull: string = `
  git pull origin main 
`;

export const createStyles: string = `
  touch styles.css 
`;
