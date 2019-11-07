import { restaurant } from '../services';
const csv = require('csvtojson')

export default {
    getAll: async (req, res) => {
        try {
            const restaurants = await restaurant.getAll();
            return res.json(restaurants).status(200);
        }
        catch (err) {
            res.status(err.status || 500);
            return res.json({
                message: err.message,
                error: err
            });
        }
    },

    insertMany: async (req, res) => {
        try {
            const csvStinrg = req.file.buffer.toString();
            const json = await csv({
                headers: ['name', 'type', 'phone', 'location'],
                output: "json"
            })
                .fromString(csvStinrg);
            await restaurant.insertMany(json);
            return res.json('inserted').status(200);
        }
        catch (err) {
            res.status(err.status || 500);
            return res.json({
                message: err.message,
                error: err
            });
        }
    },

    deleteRestaurant: async(req, res)=>{
        try {
            await restaurant.delete(req.params.id);
            return res.send('success').status(200);
        }
        catch (err) {
            res.status(err.status || 500);
            return res.json({
                message: err.message,
                error: err
            });
        }
    }
}