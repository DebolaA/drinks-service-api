import express from 'express'
import * as coffeeController from '../controllers/coffee_controller'

export const router = express.Router()

router.get('/coffee', coffeeController.getCoffee)
router.get('/coffeelover', coffeeController.getCoffeeLoverMssg)
router.get('/coffeeMessage/:coffeeName', coffeeController.getCoffeeMessage)
