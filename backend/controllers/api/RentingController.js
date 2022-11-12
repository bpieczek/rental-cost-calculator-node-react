const schedule = require("node-schedule");
const Renting = require("../../database/models/renting");
const Cars = require("../../database/models/car");

class RentingController {
  async rentCar(req, res) {
    const whichCar = req.body.whichCar;
    const from = new Date(req.body.from);
    const to = new Date(req.body.to);
    const whosRenting = req.body.whosRenting;

    let renting;
    let doc;
    let cars;
    let isAvaliable = true;

    try {
      doc = await Renting.find({});
      cars = await Cars.find({});

      cars.forEach((car) => {
        if (
          car.howManyCars === 1 &&
          whichCar === `${car.brand} (${car.category})`
        ) {
          doc.forEach((renting) => {
            if (
              renting.whichCar === whichCar &&
              ((renting.from.getTime() <= from.getTime() &&
                renting.to.getTime() >= from.getTime()) ||
                (renting.from.getTime() <= to.getTime() &&
                  renting.to.getTime() >= to.getTime()))
            ) {
              isAvaliable = false;
              return res.status(422).json({
                message: `Car ${whichCar} is not available in this period!`,
              });
            }
          });
        }
      });
      if (isAvaliable) {
        renting = new Renting({ whichCar, from, to, whosRenting });
        await renting.save();
      } else {
        return;
      }
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }
    return res.status(201).json(renting);
  }
}

module.exports = new RentingController();
