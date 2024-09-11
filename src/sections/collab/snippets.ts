export const backwardCd: string = `
  cd ..
`;

export const backwardCdOut: string = `
  No output, look at the path though, you shouldn't be in your repo
`;

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

export const cdFriend: string = `
  cd <friend's-repo>
`;

export const cdFriendOut: string = `
  No output, look at the path though, you should be in your friend's repo
`;

export const createStyles: string = `
  touch style.css 
`;

export const createStylesOut: string = `
  No output, just ls to make sure that it has been created
  The name should strictly be "style.css" and not "styles.css"
`;

export const logBeforeFetch: string = `
  git log --oneline
`;

export const logBeforeFetchOut: string = `
  e21cdc0 (HEAD -> main, origin/main) Change last line of README.md 
  f91cak0 Add goofy line to README.md
  645b50d Handle edge case while entering temperature
  645bd99 Update README.md
  d29505b Add fully functioning temperature converter
  d61a3d1 Initial commit
`;

export const fetch: string = `
  git fetch origin main 
`;

export const fetchOut: string = `
  remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (2/2), done.
  remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0 (from 0)
  Unpacking objects: 100% (3/3), 718 bytes | 718.00 KiB/s, done.
  From https://github.com/throwawayRail/ooga
   * branch            main       -> FETCH_HEAD
     e21cdc0..f04eafb  main       -> origin/main
`;

export const logAfterFetch: string = `
  git log --oneline
`;

export const logAfterFetchOut: string = `
  e21cdc0 (HEAD -> main) Change last line of README.md 
  f91cak0 Add goofy line to README.md
  645b50d Handle edge case while entering temperature
  645bd99 Update README.md
  d29505b Add fully functioning temperature converter
  d61a3d1 Initial commit
`;

export const specialLog: string = `
  git log origin/main --oneline
`;

export const specialLogOut: string = `
  f04eafb (origin/main) Add styling to app
  e21cdc0 (HEAD -> main) Change last line of README.md 
  f91cak0 Add goofy line to README.md
  645b50d Handle edge case while entering temperature
  645bd99 Update README.md
  d29505b Add fully functioning temperature converter
  d61a3d1 Initial commit
`;

export const merge: string = `
  git merge origin/main 
`;

export const mergeOut: string = `
  Updating e21cdc0..f04eafb
  Fast-forward
   style.css | 77 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   1 file changed, 77 insertions(+)
   create mode 100644 style.css
`;

export const pull: string = `
  git pull origin main 
`;

export const pullOut: string = `
  remote: Enumerating objects: 4, done.
  remote: Counting objects: 100% (4/4), done.
  remote: Compressing objects: 100% (2/2), done.
  remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0 (from 0)
  Unpacking objects: 100% (3/3), 718 bytes | 718.00 KiB/s, done.
  From https://github.com/throwawayRail/ooga
   * branch            main       -> FETCH_HEAD
     e21cdc0..f04eafb  main       -> origin/main
  Updating e21cdc0..f04eafb
  Fast-forward
   style.css | 77 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   1 file changed, 77 insertions(+)
   create mode 100644 style.css
`;
