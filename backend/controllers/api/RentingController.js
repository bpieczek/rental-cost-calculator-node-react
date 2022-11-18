const schedule = require("node-schedule");
const Renting = require("../../database/models/renting");
const Cars = require("../../database/models/car");
const sendEmail = require("../../utils/sendEmail");

class RentingController {
  async rentCar(req, res) {
    const whosRenting = req.body.whosRenting;
    const email = req.body.email;
    const phone = req.body.phone;
    const adress = req.body.adress;
    const zipCode = req.body.zipCode;
    const birthyear = req.body.birthYear;
    const rents = req.body.rents;

    let renting;
    let doc;
    let cars;

    let message = `<p>Email: ${email}</p> 
    <p>Phone: ${phone}</p> 
    <p>Adress: ${adress}</p> 
    <p>Zip Code: ${zipCode}</p>
    <p>Birth year: ${birthyear}</p>
    <br />
    <table style = "width:100%; border-collapse: collapse;">
    <tr>
      <th style="min-width: 150px; border: 1px solid black;">Car:</th>
      <th style="min-width: 150px; border: 1px solid black;">From:</th> 
      <th style="min-width: 150px; border: 1px solid black;">To:</th> 
    </tr>`;
    let subject = `${whosRenting} rent cars`;
    try {
      doc = await Renting.find({});
      cars = await Cars.find({});

      rents.forEach(async (rent) => {
        cars.forEach((car) => {
          if (
            car.howManyCars === 1 &&
            rent.whichCar === `${car.brand} (${car.category})`
          ) {
            doc.forEach((renting) => {
              if (
                renting.whichCar === rent.whichCar &&
                ((renting.from.getTime() <= from.getTime() &&
                  renting.to.getTime() >= from.getTime()) ||
                  (renting.from.getTime() <= to.getTime() &&
                    renting.to.getTime() >= to.getTime()))
              ) {
                throw res.status(422).json({
                  message: `Car ${rent.whichCar} is not available in this period!`,
                });
              }
            });
          }
        });

        let whichCar = rent.whichCar;
        let from = new Date(rent.fromDate);
        let to = new Date(rent.toDate);

        renting = new Renting({
          whichCar,
          from,
          to,
          whosRenting,
        });

        await renting.save();

        message += `<tr style="text-align:center;">
          <td style="border: 1px solid black;">${rent.whichCar}</td>
          <td style="border: 1px solid black;">${rent.fromDate}</td> 
          <td style="border: 1px solid black;">${rent.toDate}</td> 
        </tr>`;

        schedule.scheduleJob(
          new Date(
            from.getTime() +
              (new Date(Date.now()).getTime() - from.getTime()) +
              5000
          ),

          function () {
            cars.forEach((car) => {
              if (rent.whichCar === `${car.brand} (${car.category})`) {
                console.log("DZIAŁA");
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
              if (rent.whichCar === `${car.brand} (${car.category})`) {
                console.log("DZIAŁA");
                car.howManyCars = car.howManyCars + 1;
                car.save();
              }
            });
          }
        );
      });

      setTimeout(async function () {
        await sendEmail(`Cars rented successfully!`, message, email);
      }, 2000);

      await sendEmail(subject, message, process.env.EMAIL_USER);

      return res.status(201).json(renting);
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }
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
