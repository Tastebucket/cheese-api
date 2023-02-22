// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const Cheese = require('../models/cheese')


const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')


const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

//////////////
// ROUTES ////
//////////////

// POST

router.post('/molds/:cheeseId', removeBlanks, (req, res, next) => {
    const mold = req.body.mold

    const cheeseId = req.params.cheeseId

    Cheese.findById(cheeseId)
        .then(handle404)
        .then(cheese => {
            console.log('the cheese: ', cheese)
            console.log('the mold: ', mold)
            cheese.mold.push(mold)
            return cheese.save()
        })
        .then(cheese => res.status(201).json({ cheese: cheese }))
        .catch(next)
})

// PATCH -> update a mold
// PATCH /molds/:cheeseId/:moldId
router.patch('/molds/:cheeseId/:moldId', requireToken, removeBlanks, (req, res, next) => {
    const cheeseId = req.params.cheeseId
    const moldId = req.params.moldId

    Cheese.findById(cheeseId)
        .then(handle404)
        .then(cheese => {
            const theMold = cheese.mold.id(moldId)
            requireOwnership(req, cheese)
            theMold.set(req.body.mold)

            return cheese.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE -> destroy a mold
// DELETE /molds/:cheeseId/:moldId
router.delete('/molds/:cheeseId/:moldId', requireToken, (req, res, next) => {
    const cheeseId = req.params.cheeseId
    const moldId = req.params.moldId

    Cheese.findById(cheeseId)
        .then(handle404)
        .then(cheese => {
            const theMold = cheese.mold.id(moldId)
            requireOwnership(req, cheese)
            theMold.remove()
            return cheese.save()
        })

        .then(() => res.sendStatus(204))
        .catch(next)
})

// export router
module.exports = router