const mongoose = require('mongoose')
const Cheese = require('./cheese')
const db = require('../../config/db')

const startCheeses = [
    { type: 'Swiss', age: '3 weeks', isStinky: false, isSoft: true, hasHoles: true},
    { type: 'Gorgonzola', age: '5 days', isStinky: true, isSoft: true, hasHoles: false},
    { type: 'Parmesan', age: '2 years', isStinky: true, isSoft: false, hasHoles: false},
    { type: 'Jarlsberg', age: '1 month', isStinky: false, isSoft: true, hasHoles: true},
    { type: 'Muenster', age: '1 week', isStinky: false, isSoft: true, hasHoles: false}
]

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Cheese.deleteMany()
            .then(deletedCheeses => {
                console.log('the deleted cheeses:', deletedCheeses)
                Cheese.create(startCheeses)
                    .then(newCheeses => {
                        console.log('the new cheeses', newCheeses)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })
