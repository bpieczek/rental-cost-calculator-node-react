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
              throw res.status(422).json({
                message: `Car ${whichCar} is not available in this period!`,
              });
            }
          });
        }
      });

      renting = new Renting({ whichCar, from, to, whosRenting });
      await renting.save();
      schedule.scheduleJob(
        new Date(
          from.getTime() +
            (new Date(Date.now()).getTime() - from.getTime()) +
            5000
        ),

        function () {
          cars.forEach((car) => {
            if (whichCar === `${car.brand} (${car.category})`) {
              car.howManyCars = car.howManyCars - 1;
              car.save();
            }
          });
        }
      );

      schedule.scheduleJob(
        new Date(
          to.getTime() +
            (new Date(Date.now()).getTime() - from.getTime()) +
            5000
        ),
        function () {
          cars.forEach((car) => {
            if (whichCar === `${car.brand} (${car.category})`) {
              car.howManyCars = car.howManyCars + 1;
              car.save();
            }
          });
        }
      );
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }
    return res.status(201).json(renting);
  }

  async databaseClearing(req, res) {
    let doc = await Renting.find({});
    doc.forEach((renting) => {
      renting.deleteOne();
    });
    res.sendStatus(204);
  }
}

module.exports = new RentingController();
