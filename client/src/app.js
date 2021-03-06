const Calculator = require('./models/calculator.js');
// const PubSub = require('./helpers/pub_sub.js');
const ChartBuilder = require('./models/chart_builder.js');
const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const MapView = require('./views/map_view.js');
const AutocompleteDirectionsHandler = require('./views/gmap.js');
const JustEatString = require('./views/just_eat_string.js');


const CycleStations = require('./models/cycle_stations.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');
  const calc = new Calculator();
  calc.bindEvents();
  // });

  const onInitComplete = () => {
    new AutocompleteDirectionsHandler(mapView.googleMap);
    const bikemap = document.querySelector('#bikeMap');
    const bikeMapView = new MapView(bikemap);
    bikeMapView.bindEvents();
    // bindEvents JustEatCycles
    const cycleStations = new CycleStations();
    cycleStations.getData(bikeMapView);
    // bikeMapView.populateBikeStations(); // confirm timing of this???
  };
  
  const map = document.querySelector('#googleMap');
  const mapView = new MapView(map, onInitComplete);
  mapView.bindEvents();
  // mapView.populateBikeStations();

  // bindEvents form_view
  const inputTravel = document.querySelector('form#input-travel');
  // console.log('input travel from app', inputTravel);
  const formView = new FormView(inputTravel);
  formView.bindEvents();
  formView.catchMapData();

  // bindEvents ChartBuilder
  const chartBuilder = new ChartBuilder();
  chartBuilder.bindEvents();

  // bindEvents ResultView
  const resultContainer = document.querySelector('section#result-view');
  const resultView = new ResultView(resultContainer);
  resultView.bindEvents();

  // JustEatString bindEvents
  const justEatContainer = document.querySelector('div#bike-help');
  const justEatString = new JustEatString(justEatContainer)
justEatString.bindEvents();

});
