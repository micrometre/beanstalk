const alprdData = []



var bs = require('nodestalker'),
    client = bs.Client('127.0.0.1:11300'),
    tube = 'alprd';

client.watch(tube).onSuccess(function (data) {
    function resJob() {
        client.reserve().onSuccess(function (job) {
            let data = job
            alprdData.push(data)
            // console.log('alpr', job);

            console.log(job
                );
            resJob();

        });
    }

    resJob();
});