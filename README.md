# angular-graphael

A set of AngularJS directives to make charts using [gRaphaël](http://g.raphaeljs.com/).

Now available on bower: `bower install angular-graphael --save`

## Examples

### Pie Chart

You set up your options and data in the controller. [Pie Chart Reference](http://g.raphaeljs.com/reference.html#Paper.piechart)

```
$scope.piechart = {
    options: {
        legend: ['small','medium','large']
    },
    data: {
        small:100,
        medium: 126,
        large: 247
    }
};
```

In the view, you just pass the appropriate attributes.

```
<piechart values="piechart.data" options="piechart.options"></piechart>
```

That's it, you have a pie chart!

### Dot Chart

You set up your options and data in the controller. [Dot Chart Reference](http://g.raphaeljs.com/reference.html#Paper.dotchart)

```
$scope.dotchart = {
    options: {
        axis: "0 0 1 0",
        axisxstep: 3,
        axisystep: 3,
        axisxlabels: ['5','10','15'],
        axisxtype: " ",
        heat: true,
        max: 50
    },
    data: {
        5: 42,
        10: 50,
        15: 25
    },
    valsX: [5,10,15],
    valsY: [0,1,2]
};
```

In the view, you just pass the appropriate attributes.

```
<dotchart size="dotchart.data" valuesx="dotchart.valX" valuesy="dotchart.valY" options="dotchart.options"></dotchart>
```

That's it, you have a dot chart!

### Bar Chart

You set up your options and data in the controller. [Bar Chart Reference](http://g.raphaeljs.com/reference.html#Paper.barchart)

```
$scope.barchart = {
    options: {},
    data: {}
};
```

In the view, you just pass the appropriate attributes.

```
<barchart values="barchart.data" options="barchart.options"></barchart>
```

That's it, you have a bar chart!

### Line Chart

You set up your options and data in the controller. [Line Chart Reference](http://g.raphaeljs.com/reference.html#Paper.linechart)

```
$scope.linechart = {
	options: {}
	dataX: [],
	dataY: []
};
```

In the view, you just pass the appropriate attributes.

```
<linechart values-x="linechart.dataX" values-y="linechart.dataY" options="linechart.options"></linechart>
```

That's it, you have a line chart!
