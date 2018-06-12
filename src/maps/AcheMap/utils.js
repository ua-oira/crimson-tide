import { max } from 'd3-array'
import { scaleLinear } from 'd3-scale'

export function updatePercentiles(featureCollection, school, accessor) {
  const { features } = featureCollection
  const maxSchool = max(features.map(accessor))

  const scale = scaleLinear()
    .domain([0, 1])
    .rangeRound(school === 'UA' ? [0, 9] : [10, 19])
  features.forEach(f => {
    const value = accessor(f)
    f.properties.value = value
    f.properties.percentile = scale(value / maxSchool)
  })
}

export function getSchoolContribution(data, year, school, county) {
  const entry = data[year][county][0]
  entry.value = entry[school] / entry.Total * 100
  return entry.value
}
