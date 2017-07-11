git co   init  && git rebase master
git rebase --skip
git co   basic-routing && git rebase init
git rebase --skip
git co   middleware && git rebase basic-routing
git rebase --skip
git co   route-controller && git rebase middleware
git rebase --skip
git co   bodyparser && git rebase route-controller
git rebase --skip
git co  query-params && git rebase bodyparser
git rebase --skip
git co  testing && git rebase query-params
git rebase --skip
git co  mongoose && git rebase testing
git rebase --skip
git co  populate && git rebase mongoose
git rebase --skip
git co embed && git rebase populate
git rebase --skip
git co testing-db && git rebase embed
git rebase --skip
git co passport && git rebase testing-db 
git rebase --skip
git co error-middleware && git rebase passport 
git rebase --skip
git co  jwt && git rebase error-middleware 
git rebase --skip
git co  hash-password && git rebase jwt 
git rebase --skip