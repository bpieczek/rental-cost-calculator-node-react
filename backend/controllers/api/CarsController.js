const Car = require('../../database/models/car');

class CarsController{
    async getAllCars(req, res){
        let doc;
        try{
            doc = await (await Car.find({}));
        }catch(err){
            return res.status(500).json({ msg: err.msg });
        }

        res.status(200).json(doc);
    }
    async saveCar(req, res) {

        const brand = req.body.brand;
        const category = req.body.category;
        const location = req.body.location;
        const combustion = req.body.combustion;
        const howManyCars = req.body.howManyCars;
        
        let car;

        try{
            car = new Car({brand,category,location,combustion,howManyCars})
            await car.save();
        }catch(err){
            return res.status(422).json({ message: err.message})
        }
        
        res.status(201).json(car);
    }
}

module.exports = new CarsController();