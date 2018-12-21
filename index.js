var models = require('./models/index.js');

function startApp() {
    console.log('Scanning the quote model:');
    models.quote.findAll().then(function(quote) {
        for( var i = 0; i < quote.length; i++ ) {
            console.log(quote[i].id + " | " + quote[i].quote);
        }
    });
    console.log('Inserting data in user table:');
    
}

// Sync all defined models to the DB
models.sequelize.sync()
.then(function() {
    // startApp();
    return models.User.create({
        email: 'ivanchenoweth@gmail.com', 
        password: '123',
        context: [{
            name: 'contextName',
            task: [{
                name: 'taskName',
                done: true,
                description: 'Description of the task'
            }]
          }]
    });
})
.catch(function (e) {
    throw new Error(e);
});
