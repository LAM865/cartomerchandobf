var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Zonecommerciale_1 = new ol.format.GeoJSON();
var features_Zonecommerciale_1 = format_Zonecommerciale_1.readFeatures(json_Zonecommerciale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonecommerciale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonecommerciale_1.addFeatures(features_Zonecommerciale_1);
var lyr_Zonecommerciale_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonecommerciale_1, 
                style: style_Zonecommerciale_1,
                popuplayertitle: 'Zone commerciale',
                interactive: true,
                title: '<img src="styles/legend/Zonecommerciale_1.png" /> Zone commerciale'
            });
var format_SecteurOuaga_2 = new ol.format.GeoJSON();
var features_SecteurOuaga_2 = format_SecteurOuaga_2.readFeatures(json_SecteurOuaga_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecteurOuaga_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecteurOuaga_2.addFeatures(features_SecteurOuaga_2);
var lyr_SecteurOuaga_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecteurOuaga_2, 
                style: style_SecteurOuaga_2,
                popuplayertitle: 'Secteur Ouaga',
                interactive: true,
                title: '<img src="styles/legend/SecteurOuaga_2.png" /> Secteur Ouaga'
            });
var format_SecteurBoboDsso_3 = new ol.format.GeoJSON();
var features_SecteurBoboDsso_3 = format_SecteurBoboDsso_3.readFeatures(json_SecteurBoboDsso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecteurBoboDsso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecteurBoboDsso_3.addFeatures(features_SecteurBoboDsso_3);
var lyr_SecteurBoboDsso_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecteurBoboDsso_3, 
                style: style_SecteurBoboDsso_3,
                popuplayertitle: 'Secteur Bobo Dsso',
                interactive: true,
                title: '<img src="styles/legend/SecteurBoboDsso_3.png" /> Secteur Bobo Dsso'
            });
var format_NbmerchandsiteOBF_4 = new ol.format.GeoJSON();
var features_NbmerchandsiteOBF_4 = format_NbmerchandsiteOBF_4.readFeatures(json_NbmerchandsiteOBF_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NbmerchandsiteOBF_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NbmerchandsiteOBF_4.addFeatures(features_NbmerchandsiteOBF_4);
var lyr_NbmerchandsiteOBF_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NbmerchandsiteOBF_4, 
                style: style_NbmerchandsiteOBF_4,
                popuplayertitle: 'Nb merchand / site OBF',
                interactive: true,
    title: 'Nb merchand / site OBF<br />\
    <img src="styles/legend/NbmerchandsiteOBF_4_0.png" /> 1 - 100<br />\
    <img src="styles/legend/NbmerchandsiteOBF_4_1.png" /> 100 - 200<br />\
    <img src="styles/legend/NbmerchandsiteOBF_4_2.png" /> 200 - 300<br />\
    <img src="styles/legend/NbmerchandsiteOBF_4_3.png" /> 300 - 500<br />\
    <img src="styles/legend/NbmerchandsiteOBF_4_4.png" /> 500 - 1605<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Zonecommerciale_1.setVisible(true);lyr_SecteurOuaga_2.setVisible(true);lyr_SecteurBoboDsso_3.setVisible(true);lyr_NbmerchandsiteOBF_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Zonecommerciale_1,lyr_SecteurOuaga_2,lyr_SecteurBoboDsso_3,lyr_NbmerchandsiteOBF_4];
lyr_Zonecommerciale_1.set('fieldAliases', {'ZC': 'ZC', 'SIEGE': 'SIEGE', });
lyr_SecteurOuaga_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NUM_SECTEU': 'NUM_SECTEU', 'NOM_SECETE': 'NOM_SECETE', 'NOM_ARROND': 'NOM_ARROND', 'Pop_total': 'Pop_total', });
lyr_SecteurBoboDsso_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'BB2_': 'BB2_', 'BB2_ID': 'BB2_ID', 'ARRDT': 'ARRDT', 'SECTEUR': 'SECTEUR', 'POPULATION': 'POPULATION', 'Menage': 'Menage', 'Rang': 'Rang', 'El_cum': 'El_cum', });
lyr_NbmerchandsiteOBF_4.set('fieldAliases', {'NUM': 'NUM', 'SITE_ID': 'SITE_ID', 'NEW_SITE_ID': 'NEW_SITE_ID', 'NOM_SITE': 'NOM_SITE', 'NOM_SITE_MAWENZI': 'NOM_SITE_MAWENZI', 'SITE_ID_1': 'SITE_ID_1', 'DFF': 'DFF', 'PROPRIETAIRE': 'PROPRIETAIRE', 'DETAIL_PROPRIETAIRE': 'DETAIL_PROPRIETAIRE', '3G_SITE_NAME': '3G_SITE_NAME', '4G_SITE_NAME': '4G_SITE_NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'CURRENT_TECHNO': 'CURRENT_TECHNO', 'BANDS_DETAILS': 'BANDS_DETAILS', '2G/MBC-DBC': '2G/MBC-DBC', 'TYPE_PYL�NE': 'TYPE_PYL�NE', 'HAUTEUR_PYL�NE': 'HAUTEUR_PYL�NE', 'STATUT': 'STATUT', 'TOWN_CLASS': 'TOWN_CLASS', 'LOCALITE': 'LOCALITE', 'DEPARTEMENTS_ADMINISTRATIFS': 'DEPARTEMENTS_ADMINISTRATIFS', 'PROVINCES_ADMINISTATRIVE': 'PROVINCES_ADMINISTATRIVE', 'REGIONS_ADMINISTRATIVES': 'REGIONS_ADMINISTRATIVES', 'REGION_ADMINISTRATIVE_NOMINALE': 'REGION_ADMINISTRATIVE_NOMINALE', 'AREA_TYPE': 'AREA_TYPE', 'DATE_PREMIERE_MES': 'DATE_PREMIERE_MES', 'DATE_DE_SWAP': 'DATE_DE_SWAP', 'DATE_DE_MISE_EN_SERVIC_2G': 'DATE_DE_MISE_EN_SERVIC_2G', 'DATE_ACTIVATION_G900': 'DATE_ACTIVATION_G900', 'DATE_ACTIVATION_G1800': 'DATE_ACTIVATION_G1800', 'DATE_MISE_EN_SERVICE_3G': 'DATE_MISE_EN_SERVICE_3G', 'DATE_ACTIVATION_U900': 'DATE_ACTIVATION_U900', 'DATE_ACTIVATION_U2100': 'DATE_ACTIVATION_U2100', 'DATE_DE_MISE_EN_SERVICE_4G': 'DATE_DE_MISE_EN_SERVICE_4G', 'DATE_ACTIVATION_L800': 'DATE_ACTIVATION_L800', 'DATE_ACTIVATION_L1800': 'DATE_ACTIVATION_L1800', 'DATE_ACTIVATION_L2100': 'DATE_ACTIVATION_L2100', 'AXE_ROUTIER_ARCEP': 'AXE_ROUTIER_ARCEP', 'BACKAULING_TYPE': 'BACKAULING_TYPE', 'PROJET': 'PROJET', '2G_DU_TYPE': '2G_DU_TYPE', '3G_DU_TYPE': '3G_DU_TYPE', '3G_DU_TYPE_1': '3G_DU_TYPE_1', '800_BAND_RU': '800_BAND_RU', '900_BAND_RU': '900_BAND_RU', '1800_BAND_RU': '1800_BAND_RU', '2100_BAND_RU': '2100_BAND_RU', 'SITES_CLASSIFICATION': 'SITES_CLASSIFICATION', 'STATUTSECURITAIRE': 'STATUTSECURITAIRE', 'STATU': 'STATU', 'ZONE_COMMERCIALE': 'ZONE_COMMERCIALE', 'base_unique — TCD_Nombre de msisdn': 'base_unique — TCD_Nombre de msisdn', });
lyr_Zonecommerciale_1.set('fieldImages', {'ZC': 'TextEdit', 'SIEGE': 'TextEdit', });
lyr_SecteurOuaga_2.set('fieldImages', {'OBJECTID': 'Range', 'NUM_SECTEU': 'TextEdit', 'NOM_SECETE': 'TextEdit', 'NOM_ARROND': 'TextEdit', 'Pop_total': 'Range', });
lyr_SecteurBoboDsso_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'BB2_': 'TextEdit', 'BB2_ID': 'TextEdit', 'ARRDT': 'TextEdit', 'SECTEUR': 'Range', 'POPULATION': 'TextEdit', 'Menage': 'TextEdit', 'Rang': 'Range', 'El_cum': 'TextEdit', });
lyr_NbmerchandsiteOBF_4.set('fieldImages', {'NUM': 'Range', 'SITE_ID': 'TextEdit', 'NEW_SITE_ID': 'TextEdit', 'NOM_SITE': 'TextEdit', 'NOM_SITE_MAWENZI': 'TextEdit', 'SITE_ID_1': 'TextEdit', 'DFF': 'TextEdit', 'PROPRIETAIRE': 'TextEdit', 'DETAIL_PROPRIETAIRE': 'TextEdit', '3G_SITE_NAME': 'TextEdit', '4G_SITE_NAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'CURRENT_TECHNO': 'TextEdit', 'BANDS_DETAILS': 'TextEdit', '2G/MBC-DBC': 'TextEdit', 'TYPE_PYL�NE': 'TextEdit', 'HAUTEUR_PYL�NE': 'Range', 'STATUT': 'TextEdit', 'TOWN_CLASS': 'TextEdit', 'LOCALITE': 'TextEdit', 'DEPARTEMENTS_ADMINISTRATIFS': 'TextEdit', 'PROVINCES_ADMINISTATRIVE': 'TextEdit', 'REGIONS_ADMINISTRATIVES': 'TextEdit', 'REGION_ADMINISTRATIVE_NOMINALE': 'TextEdit', 'AREA_TYPE': 'TextEdit', 'DATE_PREMIERE_MES': 'TextEdit', 'DATE_DE_SWAP': 'TextEdit', 'DATE_DE_MISE_EN_SERVIC_2G': 'TextEdit', 'DATE_ACTIVATION_G900': 'TextEdit', 'DATE_ACTIVATION_G1800': 'TextEdit', 'DATE_MISE_EN_SERVICE_3G': 'TextEdit', 'DATE_ACTIVATION_U900': 'TextEdit', 'DATE_ACTIVATION_U2100': 'TextEdit', 'DATE_DE_MISE_EN_SERVICE_4G': 'TextEdit', 'DATE_ACTIVATION_L800': 'TextEdit', 'DATE_ACTIVATION_L1800': 'TextEdit', 'DATE_ACTIVATION_L2100': 'TextEdit', 'AXE_ROUTIER_ARCEP': 'TextEdit', 'BACKAULING_TYPE': 'TextEdit', 'PROJET': 'TextEdit', '2G_DU_TYPE': 'TextEdit', '3G_DU_TYPE': 'TextEdit', '3G_DU_TYPE_1': 'TextEdit', '800_BAND_RU': 'TextEdit', '900_BAND_RU': 'TextEdit', '1800_BAND_RU': 'TextEdit', '2100_BAND_RU': 'TextEdit', 'SITES_CLASSIFICATION': 'TextEdit', 'STATUTSECURITAIRE': 'TextEdit', 'STATU': 'TextEdit', 'ZONE_COMMERCIALE': 'TextEdit', 'base_unique — TCD_Nombre de msisdn': 'Range', });
lyr_Zonecommerciale_1.set('fieldLabels', {'ZC': 'inline label - always visible', 'SIEGE': 'no label', });
lyr_SecteurOuaga_2.set('fieldLabels', {'OBJECTID': 'no label', 'NUM_SECTEU': 'no label', 'NOM_SECETE': 'inline label - always visible', 'NOM_ARROND': 'inline label - always visible', 'Pop_total': 'no label', });
lyr_SecteurBoboDsso_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'BB2_': 'no label', 'BB2_ID': 'no label', 'ARRDT': 'inline label - always visible', 'SECTEUR': 'inline label - always visible', 'POPULATION': 'no label', 'Menage': 'no label', 'Rang': 'no label', 'El_cum': 'no label', });
lyr_NbmerchandsiteOBF_4.set('fieldLabels', {'NUM': 'no label', 'SITE_ID': 'no label', 'NEW_SITE_ID': 'no label', 'NOM_SITE': 'inline label - always visible', 'NOM_SITE_MAWENZI': 'no label', 'SITE_ID_1': 'no label', 'DFF': 'no label', 'PROPRIETAIRE': 'no label', 'DETAIL_PROPRIETAIRE': 'no label', '3G_SITE_NAME': 'no label', '4G_SITE_NAME': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'CURRENT_TECHNO': 'no label', 'BANDS_DETAILS': 'no label', '2G/MBC-DBC': 'no label', 'TYPE_PYL�NE': 'no label', 'HAUTEUR_PYL�NE': 'no label', 'STATUT': 'no label', 'TOWN_CLASS': 'no label', 'LOCALITE': 'no label', 'DEPARTEMENTS_ADMINISTRATIFS': 'no label', 'PROVINCES_ADMINISTATRIVE': 'no label', 'REGIONS_ADMINISTRATIVES': 'no label', 'REGION_ADMINISTRATIVE_NOMINALE': 'no label', 'AREA_TYPE': 'no label', 'DATE_PREMIERE_MES': 'no label', 'DATE_DE_SWAP': 'no label', 'DATE_DE_MISE_EN_SERVIC_2G': 'no label', 'DATE_ACTIVATION_G900': 'no label', 'DATE_ACTIVATION_G1800': 'no label', 'DATE_MISE_EN_SERVICE_3G': 'no label', 'DATE_ACTIVATION_U900': 'no label', 'DATE_ACTIVATION_U2100': 'no label', 'DATE_DE_MISE_EN_SERVICE_4G': 'no label', 'DATE_ACTIVATION_L800': 'no label', 'DATE_ACTIVATION_L1800': 'no label', 'DATE_ACTIVATION_L2100': 'no label', 'AXE_ROUTIER_ARCEP': 'no label', 'BACKAULING_TYPE': 'no label', 'PROJET': 'no label', '2G_DU_TYPE': 'no label', '3G_DU_TYPE': 'no label', '3G_DU_TYPE_1': 'no label', '800_BAND_RU': 'no label', '900_BAND_RU': 'no label', '1800_BAND_RU': 'no label', '2100_BAND_RU': 'no label', 'SITES_CLASSIFICATION': 'no label', 'STATUTSECURITAIRE': 'no label', 'STATU': 'no label', 'ZONE_COMMERCIALE': 'no label', 'base_unique — TCD_Nombre de msisdn': 'no label', });
lyr_NbmerchandsiteOBF_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});