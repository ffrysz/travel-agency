/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  if (filters.duration) {
    output = output.filter(trip => (trip.days <= filters.duration.to) && (trip.days >= filters.duration.from));
  }

  // TODO - filter by tags

  if (filters.tags.length != 0) {
    output = output.filter(trip => filters.tags.every(tag => trip.tags.includes(tag)));
  }

  // TODO - sort by cost descending (most expensive goes first)
  console.log(output);

  // output = output.sort(function (a, b) {
  //   let arg1 = a.cost.substr(1, a.cost.length);
  //   let arg2 = b.cost.substr(1, b.cost.length);
  //   let arg3 = arg1.replace(/,/, '');
  //   let arg4 = arg2.replace(/,/, '');
  //   let arg5 = parseFloat(arg3);
  //   let arg6 = parseFloat(arg4);

  //   if (arg5 > arg6) return -1;
  //   if (arg5 < arg6) return 1;
  //   return 0;
  // });

  output = output.sort(function (a, b) {
    const arg1 = parseFloat(a.cost.substr(1, a.cost.length).replace(/,/, ''));
    const arg2 = parseFloat(b.cost.substr(1, b.cost.length).replace(/,/, ''));

    if (arg1 > arg2) return -1;
    if (arg1 < arg2) return 1;
    return 0;
  });

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter(trip => trip.id === tripId);

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code === countryCode);

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
