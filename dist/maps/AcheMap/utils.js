'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePercentiles = updatePercentiles;
exports.getSchoolContribution = getSchoolContribution;

var _d3Array = require('d3-array');

var _d3Scale = require('d3-scale');

function updatePercentiles(featureCollection, school, accessor) {
  var features = featureCollection.features;

  var maxSchool = (0, _d3Array.max)(features.map(accessor));

  var scale = (0, _d3Scale.scaleLinear)().domain([0, 1]).rangeRound(school === 'UA' ? [0, 9] : [10, 19]);
  features.forEach(function (f) {
    var value = accessor(f);
    f.properties.value = value;
    f.properties.percentile = scale(value / maxSchool);
  });
}

function getSchoolContribution(data, year, school, county) {
  var entry = data[year][county][0];
  entry.value = entry[school] / entry.Total * 100;
  return entry.value;
}