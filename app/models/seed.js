const mongoose = require('mongoose')
const Cheese = require('./cheese')
const db = require('../../config/db')

const startCheeses = [
    { type: 'Swiss', isStinky: false, isSoft: true, hasHoles: true},
    { type: 'Gorgonzola', isStinky: true, isSoft: true, hasHoles: false},
    { type: 'Parmesan', isStinky: true, isSoft: false, hasHoles: false},
    { type: 'Jarlsberg', isStinky: false, isSoft: true, hasHoles: true},
    { type: 'Muenster', isStinky: false, isSoft: true, hasHoles: false}
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
