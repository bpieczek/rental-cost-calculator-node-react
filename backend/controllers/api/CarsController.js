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
}

module.exports = new CarsController();