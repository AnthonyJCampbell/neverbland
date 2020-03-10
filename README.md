# NeverBland

## HOME
- User should see header with general statement about the site
- User should see a list of the latest ~30 episodes that were added to the database
- A message is visible while the episodes are being fetched / if there's some issue with the request
- User should see an image, the show title, and episode title + number on each individual card.
- User should be able to click the card and get taken to the respective ShowPage (show/:id)
- User should be able to open a dropdown that allows a user to pick the scheduling for a different country
- The default is US

- When clicked on show, take to show/:i

## SHOW/:ID
- User should see a 'back' button, which leads back to Home
- User should see a header with image related to the show, the rating, the title, and the summary (all from the Schedule endpoint)
- User should see a header called 'show info' 
- User should be able to click 'show info', which reveals a list of some of the general info related to the show
- User should see a header called 'Actors'/'Starring'
- User should be able to click 'Actors', which reveals a list of the 4 most prominent actors on the show
- User should be able to see a list of episodes of the latest season of the show.
- User should be presented with a dropdown that allows the user to select different seasons, which updates the data.

- Dropdown with +/- 10 countries. When clicked, rerun the schedule query for all shows with the specified country code
    - US: us
    - GB: gb
    - CANADA: ca
    - NETHERLANDS: nl
    - GERMANY: de
    - SPAIN: es
    - FRANCE: fr


### What Data will we have to request?
- All shows by country-id (US by default).
    - Find a way to introduce pagination / lazy-loading
- Cast of show (based on show_id)
- Episodes of latest season of show (based on show_id)
Make sure you use embedded URLS to reduce the number of required API requests