const PubSub = require('./helpers/pub_sub.js');

const FormView = function(formElement) {
  this.element = formElement;
};

FormView.prototype.setupEventListeners = function() {
  this.element.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const form = evt.target;
    const newItem = {
      singleTripDistance: form['single-trip-distance'].value,
      commutingDays: form['commuting-days'].value,
      singleTripsPerDay: form['single-trips-per-day'].value,
      carDiesel: form['car-diesel'].value,
      carPetrol: form['car-petrol'].value,
      carHyrid: form['car-hybrid'].value,
      bus: form['bus'].value,
      cycle: form['cycle'].value,
    };
    PubSub.publish('FormView:add-item', newItem);
    console.log('formview new item', newItem);

    form.reset();
  });
};


module.exports = FormView;