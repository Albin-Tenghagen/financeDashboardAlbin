# Finance Dashboard

## Projectbeskrivning

- Detta är en dashboard view som är baserad på newsAPI och FMPs API för att samla in data om apples historiska värde och nuvarande aktievärde. Vi har samlat data och sammanställt i olika komponenter som visar data om apple ifrån upp emot 25 år sedan som visas i olika grafer tillexempel

- Det finns också en sökfunktion för NASDAQ företag som apples klassas som för att få en kortare beskrivning om företaget

- En sektion innehåller också dem senaste nyheterna inom ekonomi från NewsAPI

## Teknikval

Vi använde oss av Vite, React, React-router, redux-toolkit, Tailwind, Rechats.

## Installation

1. Klona detta repot i VsCode
   https://github.com/Samii02/financeDashboard/tree/main

2. Gå in i terminalen och skriv: cd br-v9-v13 så att du sitter i rätt mapp.

3. Sedan skriv (i terminalen) npm install för att få rätt packet och bibliotek för att kunna köra programmet.

4. Skriv npm run dev i terminalen och följ länken för att starta projektet lokalt.

## Individuell del:

### Ny funktionalitet

1. I den förra iterationen så hämtades endast AAPL aktierna på home page när sidan renderades. Nu har det uppdaterats på så viss att:

- AppleStock.jsx har blivit omarbetad till SpecificStock.jsx
- AppleSlice.js har blivit stockSlice.js
- NasdaqStockChange.jsx lades till för att faccilitera en dropdown meny som möjliggör att välja ytterligare aktier att fetcha från samma endpoint

* Vid rendering så hämtas AAPL fortfarande och renderas som SpecificStock

* under den komponententen finns en knapp som kallar på nasdaqDropdown funktionen.
  Som ändrar ett lokalt state som heter showcompanies. När den blir true
  Så renderas ett <li> element för varje företag i filen NasdaqCompanies.jsx(Vilket är en array med object som har keysen name & symbol)

* När man klickar på en av dessa <li> elementen så kallas funktion fetchStock med symbolen som <li> elementet representerar
  som först kollar om arrayen companyCards innehåller den symbolen redan.

1. Om den inte gör det så tillägs symbolen i Companycards, updaterar statet Snackbar(Som är en liten popup med info för användaren som "searching for stock symbol") och sedan kollapsar ner <li> elemntent genom att sätta staten till false.

2. Om symbolen finns i companycards redan så uppdateras snackbar statet med:
   "setSnackBar(`${symbol} stock is already displayed!`)"
   och sedan ändra showCompanies till false igen

- useEffects använding

1. useEffects används först o främst för API anrop så används "companyCards, dispatch, priceChanges" som dependencys. så när något förändras i dessa tre då kollar funktionen vilka symboler priceChanges från slicen innehåller. Och renderar endast dem som inte redan är renderade. Vilket gör att inte alla SpecificStock komponenter renderas om vid varje nytt API anrop.

2. useEffect används också för att animera en liten snackbar vilket informerar användaren om olika händelser. inuti den finns det en timeout funktion vilket gör att snackbaren försvinner efter 2 sek

### Annat som har förändrats

- Jag har med Tailwind implementerat custom färgschema och typografi
- Med tailwind har jag lagt till custom classes som

1. card-hover-effect
2. button-focus-effect
3. link-hover-effect

- lägger till hover och focus styling, till varje interaktiv component i projektet, som navbar och alla knappar.
- Nyhetsartiklar SpecifikStocks CompanyCards har också en hover och focus effect.
