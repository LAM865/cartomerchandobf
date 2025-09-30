var size = 0;
var placement = 'point';

var style_NbmerchandsiteOBF_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("base_unique — TCD_Nombre de msisdn");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 1.000000 && value <= 100.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 3.2 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.519)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(207,3,108,0.519)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 100.000000 && value <= 200.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.3999999999999995 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.519)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(207,3,108,0.519)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 200.000000 && value <= 300.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.599999999999999 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.519)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(207,3,108,0.519)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 300.000000 && value <= 500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 9.799999999999997 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.519)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(207,3,108,0.519)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 500.000000 && value <= 1605.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.999999999999996 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.519)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(207,3,108,0.519)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
