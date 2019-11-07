import requestPromise from 'request-promise';

const apiKey = 'FI84U8mYUbYVOv2tdi18pRjcA3AVMJPi';
const geocodeService ={
    async getAddressByLocation({lat, lng}){
        const reqUrl= `http://open.mapquestapi.com/geocoding/v1/reverse?key=${apiKey}&location=${lat},${lng}`;
        const results = await requestPromise(reqUrl);
        const {adminArea1, adminArea5, adminArea6, street} = JSON.parse(results).results[0].locations[0];
        return `${adminArea1}, ${adminArea5}, ${adminArea6}, ${street}`;
        }
}

export default geocodeService;
