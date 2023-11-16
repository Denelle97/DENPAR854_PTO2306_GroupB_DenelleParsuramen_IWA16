// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    // Destructure data object into usable variables
  const { id, firstName, surname, races } = athlete;
  
    // Extract latest race
  const latestRace = races[races.length - 1];
  
    // Created a DocumentFragment
  const fragment = document.createDocumentFragment();
  
    // Creating the <h2> element. 
  const title = document.createElement("h2");

  // Set the <h2> to the ID of the athlete
  title.textContent = `${id}`;

  // Append the h2 title to the created DocumentFragment
  fragment.appendChild(title);

  // Creating <dl>
  const list = document.createElement("dl");

  // Extracts a usable date from the latest race's date.
  const date = new Date(latestRace.date);

  // Extracts day, month, and year!
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  // Calculates total race time
  const totalRaceTime = latestRace.time.reduce((total, lapTime) => total + lapTime, 0);

  // Convert totalRaceTime to hours and minutes
  const hours = Math.floor(totalRaceTime / 60);
  const minutes = totalRaceTime % 60;

  
  // Pass the following into the created description list
  list.innerHTML = `
    <dt>Athlete:</dt> 
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races:</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest):</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest):</dt>
    <dd>${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}</dd>
  `;
  
  // Append the list to the DocumentFragment
  fragment.appendChild(list);

  // Return the fragment
  return fragment;
};

// Access the athlete objects and create variables
const NM372 = data.response.data.NM372;
const SV782 = data.response.data.SV782;

// Fixed the querySelector parameters
document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));