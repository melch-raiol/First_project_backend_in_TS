import { Request, Response } from 'express'
import { knex } from '../databases/connection'
import { Car } from '../types'

export const listCar = async (_: Request, res: Response) => {
    try {
        const cars = await knex<Car>('cars');
        return res.json(cars);
    } catch {
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};

export const detailCar = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const car = await knex<Car>('cars')
            .where({ id: Number(id) })
            .first()

        if (!car) {
            return res.status(404).json({ message: 'Carro não encontrado.' })
        }

        return res.json(car)
    } catch {
        return res.status(500).json({ message: 'Erro interno do servidor.' })
    }
};

export const registerCar = async (req: Request, res: Response) => {
    const { brand, model, year_car, color, value_car } = req.body
    
    try {
        const car = await knex<Omit<Car, 'id'>>('cars').insert({
            brand,
            model,
            year_car,
            color,
            value_car
        }).returning('*')
       
        return res.status(201).json(car[0])
    } catch {
        return res.status(500).json({ mensagem: 'Erro interno do servidor!.' })
    }
};

export const updateCar = async (req: Request, res: Response) => {
    const { id } = req.params
    const { brand, model, year_car, color, value_car } = req.body

    try {
        const carro = await knex<Car>('cars')
            .where({ id: Number(id) })
            .first()

        if (!carro) {
            return res.status(404).json({ mensagem: 'Carro não encontrado.' })
        }

        await knex<Car>('cars')
            .where({ id: Number(id) })
            .update({ brand, model, year_car, color, value_car  })

        return res.status(204).send()
    } catch {
        return res.status(500).json({ message: 'Erro interno do servidor.' })
    }
};

export const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const car = await knex<Car>('cars')
            .where({ id: Number(id) })
            .first()

        if (!car) {
            return res.status(404).json({ message: 'Carro não encontrado.' })
        }

        await knex<Car>('cars')
            .where({ id: Number(id) })
            .del()

        return res.status(204).send()
    } catch {
        return res.status(500).json({ message: 'Erro interno do servidor.' })
    }
};