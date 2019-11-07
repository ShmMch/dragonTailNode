import models from '../models';
import geocodeService from './geocodeService';

const restaurant = {
    async getAll() {
        return models.Restaurant.findAll();
    },
    async insertMany(restaurants) {
        const updatedRestaurants = await Promise.all(restaurants.map(this.updateRestaurantAddress));
        await models.Restaurant.bulkCreate(updatedRestaurants);
        // refresh socket
        return;
    },

    async delete(id){
        const restaurant= await models.Restaurant.findOne({  where: {  id  }});
        return restaurant.destroy();
    },

    async update(id, params) {
        const restaurant= await models.Restaurant.findOne({  where: {  id  }});
        const updatedRestaurant = await this.updateRestaurantAddress(params);
        // refresh socket
        return restaurant.update(updatedRestaurant);
    },

    async updateRestaurantAddress(restaurant) {
        if (restaurant.location) {
            const [lat, lng] = restaurant.location.split('/');
            const formattedAddress = await geocodeService.getAddressByLocation({ lat, lng });
            restaurant.formattedAddress = formattedAddress;
        }
        return restaurant;
    }
}

export default restaurant;