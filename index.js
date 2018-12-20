var models = require('./models/index.js');

function startApp() {
    console.log('Scanning the quote model:');
    models.quote.findAll().then(function(quote) {
        for( var i = 0; i < quote.length; i++ ) {
            console.log(quote[i].id + " | " + quote[i].quote);
        }
    });
}

// Sync all defined models to the DB
models.sequelize.sync()
.then(function() {
    startApp();
})
.catch(function (e) {
    throw new Error(e);
});
