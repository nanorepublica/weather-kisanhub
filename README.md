
# Weather Data Technical Tests

**[Live Demo](https://kisanhub.akmiller.co.uk)**

To run locally:

```
npm install
npm install -g @angular/cli
ng serve --open
```

## To do

* Fix error in bar chart when we load a lot of data collapsing into one line
* Fix issue with data not loading on first load (but does on second?)
* Fix data for country, display and metric reseting to defaults
* add tests

## nice to have features

* add more graphs!
* progress bar for data loading
* multi-select on metric and country to enable grouped charts for comparison
* make the tables nicer (pagination)
* do more complex graphs (Tmin & Tmax on the same chart)
* sampling across large date ranges (only show an average for the year, when range is greater than X years)
* gestures (eg pinch to zoom on the graph)
