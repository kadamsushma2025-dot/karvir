var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_karvir_clipclipped_2 = new ol.format.GeoJSON();
var features_karvir_clipclipped_2 = format_karvir_clipclipped_2.readFeatures(json_karvir_clipclipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_karvir_clipclipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_karvir_clipclipped_2.addFeatures(features_karvir_clipclipped_2);
var lyr_karvir_clipclipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_karvir_clipclipped_2, 
                style: style_karvir_clipclipped_2,
                popuplayertitle: 'karvir_clip — clipped',
                interactive: true,
                title: '<img src="styles/legend/karvir_clipclipped_2.png" /> karvir_clip — clipped'
            });
var format_building_3 = new ol.format.GeoJSON();
var features_building_3 = format_building_3.readFeatures(json_building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_3.addFeatures(features_building_3);
var lyr_building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_3, 
                style: style_building_3,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_3.png" /> building'
            });
var format_contour_4 = new ol.format.GeoJSON();
var features_contour_4 = format_contour_4.readFeatures(json_contour_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_contour_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contour_4.addFeatures(features_contour_4);
var lyr_contour_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_contour_4, 
                style: style_contour_4,
                popuplayertitle: 'contour',
                interactive: true,
                title: '<img src="styles/legend/contour_4.png" /> contour'
            });
var format_landuse_5 = new ol.format.GeoJSON();
var features_landuse_5 = format_landuse_5.readFeatures(json_landuse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_5.addFeatures(features_landuse_5);
var lyr_landuse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landuse_5, 
                style: style_landuse_5,
                popuplayertitle: 'landuse',
                interactive: true,
                title: '<img src="styles/legend/landuse_5.png" /> landuse'
            });
var format_Railway_6 = new ol.format.GeoJSON();
var features_Railway_6 = format_Railway_6.readFeatures(json_Railway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_6.addFeatures(features_Railway_6);
var lyr_Railway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_6, 
                style: style_Railway_6,
                popuplayertitle: 'Railway',
                interactive: true,
                title: '<img src="styles/legend/Railway_6.png" /> Railway'
            });
var format_roads_7 = new ol.format.GeoJSON();
var features_roads_7 = format_roads_7.readFeatures(json_roads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_7.addFeatures(features_roads_7);
var lyr_roads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_7, 
                style: style_roads_7,
                popuplayertitle: 'roads',
                interactive: true,
                title: '<img src="styles/legend/roads_7.png" /> roads'
            });
var format_water_8 = new ol.format.GeoJSON();
var features_water_8 = format_water_8.readFeatures(json_water_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_8.addFeatures(features_water_8);
var lyr_water_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_8, 
                style: style_water_8,
                popuplayertitle: 'water',
                interactive: true,
                title: '<img src="styles/legend/water_8.png" /> water'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_karvir_clipclipped_2.setVisible(true);lyr_building_3.setVisible(true);lyr_contour_4.setVisible(true);lyr_landuse_5.setVisible(true);lyr_Railway_6.setVisible(true);lyr_roads_7.setVisible(true);lyr_water_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_karvir_clipclipped_2,lyr_building_3,lyr_contour_4,lyr_landuse_5,lyr_Railway_6,lyr_roads_7,lyr_water_8];
lyr_karvir_clipclipped_2.set('fieldAliases', {'fid': 'fid', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'HASC_3': 'HASC_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'VALIDFR_3': 'VALIDFR_3', 'VALIDTO_3': 'VALIDTO_3', 'REMARKS_3': 'REMARKS_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_building_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_contour_4.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_landuse_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Railway_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_roads_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_water_8.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_karvir_clipclipped_2.set('fieldImages', {'fid': '', 'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'ID_2': '', 'NAME_2': '', 'ID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'HASC_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'VALIDFR_3': '', 'VALIDTO_3': '', 'REMARKS_3': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_building_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_contour_4.set('fieldImages', {'ID': '', 'ELEV': '', });
lyr_landuse_5.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Railway_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_roads_7.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_water_8.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_karvir_clipclipped_2.set('fieldLabels', {'fid': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'HASC_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'VALIDFR_3': 'no label', 'VALIDTO_3': 'no label', 'REMARKS_3': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_building_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_contour_4.set('fieldLabels', {'ID': 'no label', 'ELEV': 'no label', });
lyr_landuse_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_Railway_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_roads_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_water_8.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_water_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});