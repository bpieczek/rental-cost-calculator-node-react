const Renting = require("../../database/models/renting");

class RentingController {
  async rentCar(req, res) {
    const whichCar = req.body.whichCar;
    const from = new Date(req.body.from);
    const to = new Date(req.body.to);
    const whosRenting = req.body.whosRenting;

    let renting;
    let doc;
    try {
      doc = await Renting.find({});
      doc.forEach((renting) => {
        if (
          renting.whichCar === whichCar &&
          ((renting.from.getTime() <= from.getTime() &&
            renting.to.getTime() >= from.getTime()) ||
            (renting.from.getTime() <= to.getTime() &&
              renting.to.getTime() >= to.getTime()))
        ) {
          return res.status(422).json({ message: "" });
        }
      });
      renting = new Renting({ whichCar, from, to, whosRenting });
      await renting.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(renting);
  }
}

module.exports = new RentingController();
