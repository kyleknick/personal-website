---
title: Covid Complaint Tracker with React and Mapbox
tags: [mapbox, reactjs, api]
date: 2021-01-04T05:25:44.226Z
path: blog/covid-complaint-tracker
cover: ./covid-complaint-tracker.png
excerpt: An interactive webmap showing covid complaints tracked in Austin, TX.  Built with React and Mapbox and utilizing Austin's Open Data Portal API.
---

WORK IN PROGRESS (inital version [here](https://kyleknick.github.io/covid19-mapbox/))

Github Repo ([link](https://github.com/kyleknick/covid19-mapbox))

Mapbox is an incredibly useful and easy to use tool for developers. I first heard about mapbox a few years back, it looked like it was striking an important middle ground for developers in between less customizable Google Maps and the more intensive and higher entry barrier ArcGIS. I was pretty interested by their developer-centric approach but at the time I was doing a lot of work with ArcGIS and ArcGIS Online at the time and only explored mapbox a little.

My plan is for this to be the first in a series of mapbox projects - in which I'll explore building out different features. For reference, click [here](https://docs.mapbox.com/) for the official mapbox documentation.

A highlight of the features below:

## Using fetch with mapbox API and City of Austin API

The city of Austin has a really great open data portal with well written API documentation that makes using their data a breeze. For this project I thought I'd take a look at the COVID-19 Complaint Cases data and see if I could pull in their dataset API with Mapbox.

Austin Code COVID-19 Complaint Cases data ([link](https://data.austintexas.gov/Public-Safety/Austin-Code-COVID-19-Complaint-Cases-Dashboard/5bvq-24pm))

Austin Code COVID-19 API Docs ([link](https://dev.socrata.com/foundry/data.austintexas.gov/4p54-9544))

To access the data from the API endpoint I'll use `fetch()` function, which is similar to the traditional XMLHttpRequest but provides features that make it preferred alterntive in some cases. It works by taking in a request to the resource you want to fetch (in our case, the City of Austin API JSON) and returns a response to that request.

If it successfully returns the data then you will be able to `console.log` to see the data in the browser console.

```javascript
/**
 * Using fetch to retrieve JSON API
 */
fetch("https://data.austintexas.gov/resource/4p54-9544.json")
.then(response => response.json())
.then(data => {
    console.log(data => {
      console.log(data);
    });
```

Once we confirm that our application is bringing in the dataset, we can then start to look through the data to see what fields we're interesting in showing. To do this we'll use the `forEach` function to go through the different fields in the dataset. In this project, I'm going to use `typeofcomplaint` and in order to map it we'll need the `geocoded_column` field. To be able to use the coordinates in the `geocoded_column` field we'll have to declare the values as their own const.

```javascript
/**
 * Filtering fields from our dataset
 */
fetch("https://data.austintexas.gov/resource/4p54-9544.json")
  .then(response => response.json())
  .then(data => {
    console.log("data is", data)

    data.forEach(data => {
      const { geocoded_column, typeofcomplaint } = data
      const coordinates = geocoded_column.coordinates
      console.log(coordinates, typeofcomplaint)
    })
  })
```

## Visualizing our spatial data with Mapbox

To use the mapbox API, you'll need to create an account. One great feature of mapbox is the tutorials and getting started help in their docs [link](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/). To start using mapbox you'll need to link the api in the `<head>` of your html and inclusion of your public mapbox token.

Set up your new map using a variable and `new mapboxgl.Map`. Next, enter the settings you want for you such as style, zoom level, and the coordinates on where the map will centered.

```javascript
/**
 * Import mapbox and customize settings.
 */
import "https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js"

const mapbox_token = YOUR_MAPBOX_TOKEN

mapboxgl.accessToken = mapbox_token
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  zoom: 10,
  center: [-97.8, 30.3],
})

fetch("https://data.austintexas.gov/resource/4p54-9544.json")
  .then(response => response.json())
  .then(data => {
    console.log("data is", data)

    data.forEach(data => {
      const { geocoded_column, typeofcomplaint } = data
      const coordinates = geocoded_column.coordinates
      console.log(coordinates, typeofcomplaint)
      new mapboxgl.Marker({}).setLngLat(coordinates).addTo(map)
    })
  })
```

Refresh you page and you should now finally see the map with the specified data you selected from the dataset.
