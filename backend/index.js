/**
 * Celem jest implementacja mechanizmu dokonywania rezerwacji dostępnych 
 * samochodów przez klienta. Na ten moment nie będziemy implementować płatności, 
 * ale później będą.
 * 
 * Najważniejsze rzeczy które powinny zostać zaimplementowane:
 * 
 * - potwierdzenie na email dla klienta, że rezerwacja została dokonana pomyślnie <
 * - weryfikacja czy w terminie który podał klient jest dostępny dany model samochodu
 * 
 * - podanie odpowiednich danych podczas rezerwacji takich jak: 
 * rok urodzenia, imie, nazwisko, adres, kod pocztowy, email, numer telefonu
 * 
 * - możliwość wypożyczenia kilku samochodów podczas dokonywania jednej rezerwacji <
 * - powiadomienie email dla pracownika Car Rental, że rezerwacja została utworzona. 
 * Email powinien zawierać wszystkie dane na temat rezerwacji <
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require("./config");

const apiRouter = require("./routes/api");

const app = express();

require("./database/connect");

app.use(bodyParser.json());
app.use(cors());
app.use("/api/", apiRouter);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
