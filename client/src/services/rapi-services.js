export default class RapiService{
    _apiURL = "http://192.168.0.187:8080/api";

    getResource = async(url)=> {
        const res = await fetch(`${this._apiURL}/${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
              `, received ${res.status}`)
          }
        return await res.json();
    }
    getAllRestaurants=async()=>{
        const res = await this.getResource('restaurants').then();
        
        return res.map(this._transformRestaurant).slice(0,26)
    }
    getRestourant= async(id)=>{
        const res = await this.getResource(`restaurants/${id}/`);
        return this._transformRestaurant(res);
    }
    _transformKitchen = (kitchens)=>{
     const newKitchens =  kitchens.map(kit => {
          return kit['title']
       });
    return newKitchens;
    }
    _transformReviews = (reviews)=>{
       const newReviews = reviews.map(rev => {
            return{
                name: rev['name'],
                date: rev['date'],
                rating: rev['rating'],
                comments:rev['comments']
            }
        });
        return newReviews;
    }
    _transformRestaurant = (restaurant)=>{
        return{
            id: restaurant.id,
            name: restaurant.name,
            photograph: restaurant.photograph,
            price:restaurant.price,
            genre:restaurant.genre,
            address: restaurant.address,
            kitchen:this._transformKitchen(restaurant.kitchen),
            latlng: {
              latitude: parseFloat(restaurant.latitude),
              longitude: parseFloat(restaurant.longitude),
            },
            reviews: this._transformReviews(restaurant.reviews)
        }
    }
}