
var GitWatcher = require('git-repo-watch').GitWatcher;
var RepoResult = require('git-repo-watch').RepoResult;


var gw = new GitWatcher();

gw.watch({
    path: __dirname,
    remote: 'origin',
    branch: 'master',
    poll: 2
});

gw.check$.subscribe(info => {
    console.log("checking repo");
    // will fire every check.
});

gw.result$.subscribe((result) => {
    // will fire once a check is finished.
    // When using Sync Fork the origin is now updated (and local ofcourse)

    if (result.error) {
        gw.unwatch(result.config);
    } else {
        if (result.checked === true) {
            console.log("new version availabel");
        }
    }
});