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
                interactive: false,
                title: '<img src="styles/legend/Zonecommerciale_1.png" /> Zone commerciale'
            });
var format_SecteurBoboDsso_2 = new ol.format.GeoJSON();
var features_SecteurBoboDsso_2 = format_SecteurBoboDsso_2.readFeatures(json_SecteurBoboDsso_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecteurBoboDsso_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecteurBoboDsso_2.addFeatures(features_SecteurBoboDsso_2);
var lyr_SecteurBoboDsso_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecteurBoboDsso_2, 
                style: style_SecteurBoboDsso_2,
                popuplayertitle: 'Secteur Bobo Dsso',
                interactive: false,
                title: '<img src="styles/legend/SecteurBoboDsso_2.png" /> Secteur Bobo Dsso'
            });
var format_SecteurOuaga_3 = new ol.format.GeoJSON();
var features_SecteurOuaga_3 = format_SecteurOuaga_3.readFeatures(json_SecteurOuaga_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecteurOuaga_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecteurOuaga_3.addFeatures(features_SecteurOuaga_3);
var lyr_SecteurOuaga_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecteurOuaga_3, 
                style: style_SecteurOuaga_3,
                popuplayertitle: 'Secteur Ouaga',
                interactive: false,
                title: '<img src="styles/legend/SecteurOuaga_3.png" /> Secteur Ouaga'
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

lyr_GoogleMaps_0.setVisible(true);lyr_Zonecommerciale_1.setVisible(true);lyr_SecteurBoboDsso_2.setVisible(true);lyr_SecteurOuaga_3.setVisible(true);lyr_NbmerchandsiteOBF_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Zonecommerciale_1,lyr_SecteurBoboDsso_2,lyr_SecteurOuaga_3,lyr_NbmerchandsiteOBF_4];
lyr_Zonecommerciale_1.set('fieldAliases', {'ZC': 'ZC', 'SIEGE': 'SIEGE', });
lyr_SecteurBoboDsso_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'BB2_': 'BB2_', 'BB2_ID': 'BB2_ID', 'ARRDT': 'ARRDT', 'SECTEUR': 'SECTEUR', 'POPULATION': 'POPULATION', 'Menage': 'Menage', 'Rang': 'Rang', 'El_cum': 'El_cum', });
lyr_SecteurOuaga_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NUM_SECTEU': 'NUM_SECTEU', 'NOM_SECETE': 'NOM_SECETE', 'NOM_ARROND': 'NOM_ARROND', 'Pop_total': 'Pop_total', });
lyr_NbmerchandsiteOBF_4.set('fieldAliases', {'NUM': 'NUM', 'SITE_ID': 'SITE_ID', 'NEW_SITE_ID': 'NEW_SITE_ID', 'NOM_SITE': 'NOM_SITE', 'NOM_SITE_MAWENZI': 'NOM_SITE_MAWENZI', 'SITE_ID_1': 'SITE_ID_1', 'VENDOR': 'VENDOR', 'PROPRIETAIRE': 'PROPRIETAIRE', 'DETAIL_PROPRIETAIRE': 'DETAIL_PROPRIETAIRE', '3G_SITE_NAME': '3G_SITE_NAME', '4G_SITE_NAME': '4G_SITE_NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'CURRENT_TECHNO': 'CURRENT_TECHNO', 'BANDS_DETAILS': 'BANDS_DETAILS', '2G/MBC-DBC': '2G/MBC-DBC', 'TYPE_PYL�NE': 'TYPE_PYL�NE', 'HAUTEUR_PYL�NE': 'HAUTEUR_PYL�NE', 'STATUT': 'STATUT', 'TOWN_CLASS': 'TOWN_CLASS', 'LOCALITE': 'LOCALITE', 'DEPARTEMENTS_ADMINISTRATIFS': 'DEPARTEMENTS_ADMINISTRATIFS', 'PROVINCES_ADMINISTATRIVE': 'PROVINCES_ADMINISTATRIVE', 'REGIONS_ADMINISTRATIVES': 'REGIONS_ADMINISTRATIVES', 'REGION_ADMINISTRATIVE_NOMINALE': 'REGION_ADMINISTRATIVE_NOMINALE', 'AREA_TYPE': 'AREA_TYPE', 'DATE_PREMIERE_MES': 'DATE_PREMIERE_MES', 'DATE_DE_SWAP': 'DATE_DE_SWAP', 'DATE_DE_MISE_EN_SERVICE_2G': 'DATE_DE_MISE_EN_SERVICE_2G', 'DATE_ACTIVATION_G900': 'DATE_ACTIVATION_G900', 'DATE_ACTIVATION_G1800': 'DATE_ACTIVATION_G1800', 'DATE_MISE_EN_SERVICE_3G': 'DATE_MISE_EN_SERVICE_3G', 'DATE_ACTIVATION_U900': 'DATE_ACTIVATION_U900', 'DATE_ACTIVATION_U2100': 'DATE_ACTIVATION_U2100', 'DATE_DE_MISE_EN_SERVICE_4G': 'DATE_DE_MISE_EN_SERVICE_4G', 'DATE_ACTIVATION_L800': 'DATE_ACTIVATION_L800', 'DATE_ACTIVATION_L1800': 'DATE_ACTIVATION_L1800', 'DATE_ACTIVATION_L2100': 'DATE_ACTIVATION_L2100', 'AXE_ROUTIER_ARCEP': 'AXE_ROUTIER_ARCEP', 'BACKAULING_TYPE': 'BACKAULING_TYPE', 'PROJET': 'PROJET', '2G_DU_TYPE': '2G_DU_TYPE', '3G_DU_TYPE': '3G_DU_TYPE', '3G_DU_TYPE_1': '3G_DU_TYPE_1', '800_BAND_RU': '800_BAND_RU', '900_BAND_RU': '900_BAND_RU', '1800_BAND_RU': '1800_BAND_RU', '2100_BAND_RU': '2100_BAND_RU', 'SITES_CLASSIFICATION': 'SITES_CLASSIFICATION', 'STATUTSECURITAIRE': 'STATUTSECURITAIRE', 'STATU': 'STATU', 'ZONE_COMMERCIALE': 'ZONE_COMMERCIALE', 'Commune': 'Commune', 'Zone commerciale': 'Zone commerciale', 'Région': 'Région', 'Province': 'Province', 'Nb merchand': 'Nb merchand', 'Arrondissement': 'Arrondissement', 'Secteur': 'Secteur', });
lyr_Zonecommerciale_1.set('fieldImages', {'ZC': 'TextEdit', 'SIEGE': 'TextEdit', });
lyr_SecteurBoboDsso_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'BB2_': 'TextEdit', 'BB2_ID': 'TextEdit', 'ARRDT': 'TextEdit', 'SECTEUR': 'Range', 'POPULATION': 'TextEdit', 'Menage': 'TextEdit', 'Rang': 'Range', 'El_cum': 'TextEdit', });
lyr_SecteurOuaga_3.set('fieldImages', {'OBJECTID': 'Range', 'NUM_SECTEU': 'TextEdit', 'NOM_SECETE': 'TextEdit', 'NOM_ARROND': 'TextEdit', 'Pop_total': 'Range', });
lyr_NbmerchandsiteOBF_4.set('fieldImages', {'NUM': 'Range', 'SITE_ID': 'TextEdit', 'NEW_SITE_ID': 'TextEdit', 'NOM_SITE': 'TextEdit', 'NOM_SITE_MAWENZI': 'TextEdit', 'SITE_ID_1': 'TextEdit', 'VENDOR': 'TextEdit', 'PROPRIETAIRE': 'TextEdit', 'DETAIL_PROPRIETAIRE': 'TextEdit', '3G_SITE_NAME': 'TextEdit', '4G_SITE_NAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'CURRENT_TECHNO': 'TextEdit', 'BANDS_DETAILS': 'TextEdit', '2G/MBC-DBC': 'TextEdit', 'TYPE_PYL�NE': 'TextEdit', 'HAUTEUR_PYL�NE': 'Range', 'STATUT': 'TextEdit', 'TOWN_CLASS': 'TextEdit', 'LOCALITE': 'TextEdit', 'DEPARTEMENTS_ADMINISTRATIFS': 'TextEdit', 'PROVINCES_ADMINISTATRIVE': 'TextEdit', 'REGIONS_ADMINISTRATIVES': 'TextEdit', 'REGION_ADMINISTRATIVE_NOMINALE': 'TextEdit', 'AREA_TYPE': 'TextEdit', 'DATE_PREMIERE_MES': 'TextEdit', 'DATE_DE_SWAP': 'TextEdit', 'DATE_DE_MISE_EN_SERVICE_2G': 'TextEdit', 'DATE_ACTIVATION_G900': 'TextEdit', 'DATE_ACTIVATION_G1800': 'TextEdit', 'DATE_MISE_EN_SERVICE_3G': 'TextEdit', 'DATE_ACTIVATION_U900': 'TextEdit', 'DATE_ACTIVATION_U2100': 'TextEdit', 'DATE_DE_MISE_EN_SERVICE_4G': 'TextEdit', 'DATE_ACTIVATION_L800': 'TextEdit', 'DATE_ACTIVATION_L1800': 'TextEdit', 'DATE_ACTIVATION_L2100': 'TextEdit', 'AXE_ROUTIER_ARCEP': 'TextEdit', 'BACKAULING_TYPE': 'TextEdit', 'PROJET': 'TextEdit', '2G_DU_TYPE': 'TextEdit', '3G_DU_TYPE': 'TextEdit', '3G_DU_TYPE_1': 'TextEdit', '800_BAND_RU': 'TextEdit', '900_BAND_RU': 'TextEdit', '1800_BAND_RU': 'TextEdit', '2100_BAND_RU': 'TextEdit', 'SITES_CLASSIFICATION': 'TextEdit', 'STATUTSECURITAIRE': 'TextEdit', 'STATU': 'TextEdit', 'ZONE_COMMERCIALE': 'TextEdit', 'Commune': 'TextEdit', 'Zone commerciale': 'TextEdit', 'Région': 'TextEdit', 'Province': 'TextEdit', 'Nb merchand': 'Range', 'Arrondissement': 'Range', 'Secteur': 'Range', });
lyr_Zonecommerciale_1.set('fieldLabels', {'ZC': 'hidden field', 'SIEGE': 'hidden field', });
lyr_SecteurBoboDsso_2.set('fieldLabels', {'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'BB2_': 'hidden field', 'BB2_ID': 'hidden field', 'ARRDT': 'hidden field', 'SECTEUR': 'hidden field', 'POPULATION': 'hidden field', 'Menage': 'hidden field', 'Rang': 'hidden field', 'El_cum': 'hidden field', });
lyr_SecteurOuaga_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NUM_SECTEU': 'hidden field', 'NOM_SECETE': 'hidden field', 'NOM_ARROND': 'hidden field', 'Pop_total': 'hidden field', });
lyr_NbmerchandsiteOBF_4.set('fieldLabels', {'NUM': 'hidden field', 'SITE_ID': 'inline label - always visible', 'NEW_SITE_ID': 'hidden field', 'NOM_SITE': 'inline label - always visible', 'NOM_SITE_MAWENZI': 'hidden field', 'SITE_ID_1': 'hidden field', 'VENDOR': 'hidden field', 'PROPRIETAIRE': 'hidden field', 'DETAIL_PROPRIETAIRE': 'hidden field', '3G_SITE_NAME': 'hidden field', '4G_SITE_NAME': 'hidden field', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'CURRENT_TECHNO': 'hidden field', 'BANDS_DETAILS': 'hidden field', '2G/MBC-DBC': 'hidden field', 'TYPE_PYL�NE': 'hidden field', 'HAUTEUR_PYL�NE': 'hidden field', 'STATUT': 'hidden field', 'TOWN_CLASS': 'hidden field', 'LOCALITE': 'hidden field', 'DEPARTEMENTS_ADMINISTRATIFS': 'hidden field', 'PROVINCES_ADMINISTATRIVE': 'hidden field', 'REGIONS_ADMINISTRATIVES': 'hidden field', 'REGION_ADMINISTRATIVE_NOMINALE': 'hidden field', 'AREA_TYPE': 'hidden field', 'DATE_PREMIERE_MES': 'hidden field', 'DATE_DE_SWAP': 'hidden field', 'DATE_DE_MISE_EN_SERVICE_2G': 'hidden field', 'DATE_ACTIVATION_G900': 'hidden field', 'DATE_ACTIVATION_G1800': 'hidden field', 'DATE_MISE_EN_SERVICE_3G': 'hidden field', 'DATE_ACTIVATION_U900': 'hidden field', 'DATE_ACTIVATION_U2100': 'hidden field', 'DATE_DE_MISE_EN_SERVICE_4G': 'hidden field', 'DATE_ACTIVATION_L800': 'hidden field', 'DATE_ACTIVATION_L1800': 'hidden field', 'DATE_ACTIVATION_L2100': 'hidden field', 'AXE_ROUTIER_ARCEP': 'hidden field', 'BACKAULING_TYPE': 'hidden field', 'PROJET': 'hidden field', '2G_DU_TYPE': 'hidden field', '3G_DU_TYPE': 'hidden field', '3G_DU_TYPE_1': 'hidden field', '800_BAND_RU': 'hidden field', '900_BAND_RU': 'hidden field', '1800_BAND_RU': 'hidden field', '2100_BAND_RU': 'hidden field', 'SITES_CLASSIFICATION': 'hidden field', 'STATUTSECURITAIRE': 'hidden field', 'STATU': 'hidden field', 'ZONE_COMMERCIALE': 'inline label - always visible', 'Commune': 'inline label - always visible', 'Zone commerciale': 'inline label - always visible', 'Région': 'inline label - always visible', 'Province': 'inline label - always visible', 'Nb merchand': 'inline label - always visible', 'Arrondissement': 'inline label - always visible', 'Secteur': 'inline label - always visible', });
lyr_NbmerchandsiteOBF_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});