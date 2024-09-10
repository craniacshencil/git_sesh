export const addRemote: string = `
  git remote add origin <https:link of your repo> 
`;

export const addRemoteOut: string = `
  No output, we will verify using next command 
`;

export const verifyRemote: string = `
  git remote -v 
`;

export const verifyRemoteOut: string = `
  origin  git@github.com:craniacshencil/temp-converter.git (fetch)
  origin  git@github.com:craniacshencil/temp-converter.git (push)
`;

export const modifyMain: string = `
  git branch -M main 
`;

export const modifyMainOut: string = `
 No output, we will verify using next command 
`;

export const branchName: string = `
  git branch 
`;

export const branchNameOut: string = `
  * main
`;

export const push: string = `
  git push 
`;

export const pushOut: string = `
  Enumerating objects: 5, done.
  Counting objects: 100% (5/5), done.
  Delta compression using up to 16 threads
  Compressing objects: 100% (3/3), done.
  Writing objects: 100% (3/3), 425 bytes | 425.00 KiB/s, done.
  Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (1/1), completed with 1 local object.
  To github.com:craniacshencil/temp-converter
     645b50d..e21cdc0  main -> main
`;

export const pushUpstream: string = `
  git push -u origin main 
`;

export const pushUpstreamOut: string = `
  Enumerating objects: 13, done.
  Counting objects: 100% (13/13), done.
  Delta compression using up to 16 threads
  Compressing objects: 100% (12/12), done.
  Writing objects: 100% (13/13), 2.41 KiB | 2.41 MiB/s, done.
  Total 13 (delta 2), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (2/2), done.
  To github.com:craniacshencil/simple-temp-converter.git
   * [new branch]      main -> main
  branch 'main' set up to track 'origin/main'.
`;
