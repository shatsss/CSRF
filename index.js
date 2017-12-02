const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, function (err) {
    if (err) {
        throw err
    }

    console.log(`se'rver is listening on ${port}...`)
});
