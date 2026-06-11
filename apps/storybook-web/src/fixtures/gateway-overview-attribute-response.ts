import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewAttributeResponse = {
  "context": {
    "type": "activity-type",
    "id": "attribute:familien",
    "title": "Familien",
    "slug": "familien",
    "description": "",
    "imageUrl": null,
    "numberOfActivities": 885
  },
  "staticSections": [
    {
      "id": "attribute_hero",
      "component": "hero",
      "variant": "centered_title",
      "breadcrumbs": [
        {
          "label": "Schweiz",
          "href": "/freizeitaktivitaeten/"
        },
        {
          "label": "Familien",
          "href": "/familien/"
        }
      ],
      "title": "Familien",
      "imageUrl": null,
      "description": null
    },
    {
      "id": "attribute_filters",
      "component": "filters",
      "endpoint": "/app/v1/attributes/familien/filter",
      "items": [],
      "groups": [
        {
          "id": "interests",
          "type": "checkbox",
          "title": "Interessen",
          "param": "tags",
          "options": [
            {
              "id": "tag:exercise",
              "label": "Bewegung",
              "value": "exercise",
              "count": 365,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:learning",
              "label": "Lernen",
              "value": "learning",
              "count": 314,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:sightseeing",
              "label": "Sehenswürdigkeiten",
              "value": "sightseeing",
              "count": 234,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:adventure",
              "label": "Abenteuer",
              "value": "adventure",
              "count": 180,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:entertainment",
              "label": "Unterhaltung",
              "value": "entertainment",
              "count": 174,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 161,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:culture",
              "label": "Kultur",
              "value": "culture",
              "count": 74,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:food",
              "label": "Essen",
              "value": "food",
              "count": 64,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:animals",
              "label": "Tiere",
              "value": "animals",
              "count": 47,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:relaxation",
              "label": "Entspannung",
              "value": "relaxation",
              "count": 43,
              "selected": false,
              "disabled": false
            }
          ]
        },
        {
          "id": "weather",
          "type": "checkbox",
          "title": "Wetter",
          "param": "tags",
          "options": [
            {
              "id": "tag:any",
              "label": "Any",
              "value": "any",
              "count": 315,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:snow_required",
              "label": "Schnee erforderlich",
              "value": "snow_required",
              "count": 251,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:fair_weather",
              "label": "Schönwetter",
              "value": "fair_weather",
              "count": 207,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:hot_weather",
              "label": "Heisses Wetter",
              "value": "hot_weather",
              "count": 88,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:rain_friendly",
              "label": "Regentauglich",
              "value": "rain_friendly",
              "count": 3,
              "selected": false,
              "disabled": false
            }
          ]
        },
        {
          "id": "seasonTime",
          "type": "checkbox",
          "title": "Saison & Zeit",
          "param": "tags",
          "options": [
            {
              "id": "tag:year_round",
              "label": "Ganzjährig",
              "value": "year_round",
              "count": 335,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:summer",
              "label": "Sommer",
              "value": "summer",
              "count": 260,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:winter",
              "label": "Winter",
              "value": "winter",
              "count": 254,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:spring",
              "label": "Frühling",
              "value": "spring",
              "count": 167,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:autumn",
              "label": "Herbst",
              "value": "autumn",
              "count": 167,
              "selected": false,
              "disabled": false
            }
          ]
        },
        {
          "id": "audience",
          "type": "checkbox",
          "title": "Geeignet für",
          "param": "tags",
          "options": [
            {
              "id": "tag:groups",
              "label": "Gruppen",
              "value": "groups",
              "count": 398,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:solo",
              "label": "Alleinreisende",
              "value": "solo",
              "count": 81,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:teens",
              "label": "Jugendliche",
              "value": "teens",
              "count": 53,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:couples",
              "label": "Paare",
              "value": "couples",
              "count": 40,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:seniors",
              "label": "Seniors",
              "value": "seniors",
              "count": 9,
              "selected": false,
              "disabled": false
            }
          ]
        },
        {
          "id": "duration",
          "type": "checkbox",
          "title": "Dauer",
          "param": "tags",
          "options": [
            {
              "id": "tag:1_to_3h",
              "label": "1-3 Std.",
              "value": "1_to_3h",
              "count": 376,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:full_day",
              "label": "Ganzer Tag",
              "value": "full_day",
              "count": 195,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:half_day",
              "label": "Halber Tag",
              "value": "half_day",
              "count": 88,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:under_1h",
              "label": "Unter 1 Std.",
              "value": "under_1h",
              "count": 39,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:multi_day",
              "label": "Mehrtägig",
              "value": "multi_day",
              "count": 4,
              "selected": false,
              "disabled": false
            }
          ]
        },
        {
          "id": "difficulty",
          "type": "checkbox",
          "title": "Schwierigkeit",
          "param": "tags",
          "options": [
            {
              "id": "tag:moderate",
              "label": "Mittel",
              "value": "moderate",
              "count": 302,
              "selected": false,
              "disabled": false
            }
          ]
        },
        {
          "id": "price",
          "type": "checkbox",
          "title": "Preis",
          "param": "tags",
          "options": [
            {
              "id": "tag:premium",
              "label": "Premium",
              "value": "premium",
              "count": 248,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:budget",
              "label": "Budget",
              "value": "budget",
              "count": 220,
              "selected": false,
              "disabled": false
            }
          ]
        }
      ]
    }
  ],
  "sections": [
    {
      "id": "attribute_activities",
      "component": "activity_grid",
      "title": "Familien",
      "data": [
        {
          "id": "346",
          "type": "activity",
          "bookingActivityId": 108,
          "title": "Beatenberg Gleitschirmfliegen Tandem ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/37f230b87aaf197d0213fb0538fefd64.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 190",
          "startingPrice": {
            "amount": 190,
            "currency": "CHF",
            "formatted": "CHF 190"
          },
          "rating": 4.94,
          "reviewCount": 93,
          "path": "/paragliding/gleitschirmfliegen-tandem-beatenberg-interlaken/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-beatenberg-interlaken/",
          "distanceKm": null,
          "lat": 46.6863125,
          "lng": 7.857765599999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/37f230b87aaf197d0213fb0538fefd64.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d97a9b7f57afeacd4cd3913706e1c649.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6d09a4afd626faaf44f9e8a699e57697.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4b912bdf339cc50e0eab79da69e31425.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/618074aad49677b608979826cc42fbe4.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/edecf1691637d96b1f0294f9b653e831.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0aee0b488122bda73b9582e49e1d570b.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/599b28c297e0176ce28f2a86659d9343.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c278371eec3de5212899aca598b676a4.JPG"
          ]
        },
        {
          "id": "88831",
          "type": "activity",
          "bookingActivityId": 2703,
          "title": "Reservation Bernina Express Bus ab Lugano oder Tirano",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9abbaee2b92c03c49be4eb0b5b2a0a5a.jpg",
          "subtitle": "Lugano",
          "priceFormatted": "CHF 18",
          "startingPrice": {
            "amount": 18,
            "currency": "CHF",
            "formatted": "CHF 18"
          },
          "rating": 4.63,
          "reviewCount": 30,
          "path": "/bernina-express-panoramazug/bernina-express-bus-reservation/",
          "webPath": "/bernina-express-panoramazug/bernina-express-bus-reservation/",
          "distanceKm": null,
          "lat": 46.00501999999999,
          "lng": 8.946959999999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9abbaee2b92c03c49be4eb0b5b2a0a5a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f259a36fe4a5032fa88ab749512d4e50.jpg"
          ]
        },
        {
          "id": "612",
          "type": "activity",
          "bookingActivityId": 400,
          "title": "Schynige Platte Ticket Zahnradbahn ab Wilderswil",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Schynige_Platte_Bahn_Panorama_Eiger_Moench_Jungfrau_86b1982139.jpg",
          "subtitle": "Wilderswil",
          "priceFormatted": "CHF 34",
          "startingPrice": {
            "amount": 34,
            "currency": "CHF",
            "formatted": "CHF 34"
          },
          "rating": 4.78,
          "reviewCount": 191,
          "path": "/schynige-platte/schynige-platte-ticket-retour-zahnradbahn/",
          "webPath": "/schynige-platte/schynige-platte-ticket-retour-zahnradbahn/",
          "distanceKm": null,
          "lat": 46.665402,
          "lng": 7.869097099999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Schynige_Platte_Bahn_Panorama_Eiger_Moench_Jungfrau_86b1982139.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schynige_Platte_Bahn_Berglandschaft_4ea75d5659.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schynige_Platte_Jungfrau_535b733ba8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_Schynige_Platte_Bahn_Huette_jungfrau_798a04c250.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Zahnradbahn_Schynige_Platte_5e49c2cc31.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schynige_Platte_Wandern_Oberberghorn_Jungfrau_4e645bbdea.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schynige_Platte_Zahnradbahn_Dampflokomotive_9e4854ee1f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_Schynige_Platte_Bergrestaurant_Terrasse_Jungfrau_ee6d816fd8.jpg"
          ]
        },
        {
          "id": "1874",
          "type": "activity",
          "bookingActivityId": 1656,
          "title": "Ticket Stoosbahn ab Schwyz ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Stoos_valley_station_Foto_Schweiz_Tourismus_Lorenz_Richard_307432742e.jpg",
          "subtitle": "Schwyz",
          "priceFormatted": "CHF 11.60",
          "startingPrice": {
            "amount": 11.6,
            "currency": "CHF",
            "formatted": "CHF 11.60"
          },
          "rating": 4.89,
          "reviewCount": 44,
          "path": "/stoosbahn-standseilbahn/standseilbahn-schwyz-stoos/",
          "webPath": "/stoosbahn-standseilbahn/standseilbahn-schwyz-stoos/",
          "distanceKm": null,
          "lat": 46.9913555,
          "lng": 8.673339600000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Stoos_valley_station_Foto_Schweiz_Tourismus_Lorenz_Richard_307432742e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schwyz_Stoos_funicular_Foto_Schweiz_Tourismus_Stoosbahnen_AG_Mirielle_Schmidig_b894a3abc4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Stoos_picnic_break_Foto_Schweiz_Tourismus_Lorenz_Richard_71581e02f5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Stoosbahn_unsplash_639b8d5392.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Stoos_mountain_station_Foto_Schweiz_Tourismus_Lorenz_Richard_8c2ce868e7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kopie_von_Stoos_Dorf_pixabay_3b37d816ad.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Stoos_3_Seraina_8c4e4fa669.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Stoos_1_Seraina_1c744d21f4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Stoos_2_Seraina_b594dff2ce.jpg"
          ]
        },
        {
          "id": "90670",
          "type": "activity",
          "bookingActivityId": 2781,
          "title": "3A 30 Minuten Rundfahrt zum Rheinfall mit dem Schiff",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/07faf4277f845319b242dc6296a52116.jpg",
          "subtitle": "Neuhausen am Rheinfall  ",
          "priceFormatted": "CHF 10",
          "startingPrice": {
            "amount": 10,
            "currency": "CHF",
            "formatted": "CHF 10"
          },
          "rating": 4.84,
          "reviewCount": 32,
          "path": "/rheinfall/rheinfall-kleine-rundfahrt/",
          "webPath": "/rheinfall/rheinfall-kleine-rundfahrt/",
          "distanceKm": null,
          "lat": 47.6775375,
          "lng": 8.6113906,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/07faf4277f845319b242dc6296a52116.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2f16ea3b64a9db026f726ecfcfa4a593.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/94963c230bde26024774ecef449909f7.jpg"
          ]
        },
        {
          "id": "2241",
          "type": "activity",
          "bookingActivityId": 2006,
          "title": "Ticket Maison Cailler Schokoladenfabrik",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0_Maison_Cailler_Experience3_6a2ed8cccc.jpg",
          "subtitle": "Broc",
          "priceFormatted": "CHF 17",
          "startingPrice": {
            "amount": 17,
            "currency": "CHF",
            "formatted": "CHF 17"
          },
          "rating": 4.69,
          "reviewCount": 107,
          "path": "/maison-cailler/maison-cailler-ticket/",
          "webPath": "/maison-cailler/maison-cailler-ticket/",
          "distanceKm": null,
          "lat": 46.6068782,
          "lng": 7.1087393,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0_Maison_Cailler_Experience3_6a2ed8cccc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_Atelierdu_Chocolat_95e2ec745f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_Cafe_c804bb2ce1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_Experience2_2f171d150f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_Facade_55588ba243.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_Tasting_7f618dbde2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Photo_Maison_Cailler_Ateliers_Champion_Foot_DEF_0ae4f05703.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Cailler_Train_Chocolat_Express_dbb0ce6260.jpg"
          ]
        },
        {
          "id": "613",
          "type": "activity",
          "bookingActivityId": 401,
          "title": "Ticket Firstbahn auf Grindelwald First - Top of Adventure",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg",
          "subtitle": "Grindelwald",
          "priceFormatted": "CHF 38",
          "startingPrice": {
            "amount": 38,
            "currency": "CHF",
            "formatted": "CHF 38"
          },
          "rating": 4.71,
          "reviewCount": 722,
          "path": "/first-cliff-walk-tissot-grindelwald/grindelwald-first-ticket-retour-seilbahn/",
          "webPath": "/first-cliff-walk-tissot-grindelwald/grindelwald-first-ticket-retour-seilbahn/",
          "distanceKm": null,
          "lat": 46.625125,
          "lng": 8.0417791,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Grindelwald_First_Cliff_Walk_Panorama_43675eaf94.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0915e5bdb14c547d32f23923b5d6dd3c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_First_Glider_Grindelwald_First_200a1b1564.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_First_Mountaincart_Panorama_Eiger_Wetterhorn_Grindelwald_7f3042f622.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Grindelwald_First_Sommer_Mountaincart_f4be437be9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Grindelwald_First_Flieger_Tyrolienne_Jungfrau_9d1bad9f97.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Grindelwald_First_Flieger_Winter_Grindelwald_First_Jungfrau_dc3b243119.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Trottibike_Jungfrau_ab_7b2765b0c1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Trottibike_Grindelwald_First_ff8b2c8db6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_First_Flieger_Adventure_Grindelwald_06a400cb73.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Eismeer_Jungfrau_6e46d01ccf.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schneewandern_Jungfrau_cab081325d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Winterwandern_Grindelwald_First_8173fcb785.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Snowpark_Grindelwald_First_Kinder_352be90f2a.jpg"
          ]
        },
        {
          "id": "1371",
          "type": "activity",
          "bookingActivityId": 1143,
          "title": "Ab Wengen: Ticket Männlichen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Luftseilbahn_Wengen_Maennlichen_Maennlichen_746c3f207d.jpg",
          "subtitle": "Wengen",
          "priceFormatted": "CHF 31",
          "startingPrice": {
            "amount": 31,
            "currency": "CHF",
            "formatted": "CHF 31"
          },
          "rating": 4.93,
          "reviewCount": 15,
          "path": "/maennlichen/ticket-maennlichen-ab-wengen/",
          "webPath": "/maennlichen/ticket-maennlichen-ab-wengen/",
          "distanceKm": null,
          "lat": 46.6054748,
          "lng": 7.921099299999998,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Luftseilbahn_Wengen_Maennlichen_Maennlichen_746c3f207d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maennlichen_Aussicht_Maennlichen_b4b2dcd9d5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Royal_Ride_Maennlichen_c8666b877e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gondel_ab_Wengen_Maennlichen_dd5eb6c4d2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Royal_Walk_Maennlichen_bb0d3a5726.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Wandern_auf_dem_Maennlichen_Maennlichen_ca8390171a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Sennenspielplatz_Maennlichen_Sommer_7_acc0eaeb68.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Sennenspielplatz_Maennlichen_Sommer_14_1ac2b64355.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Sennenspielplatz_Maennlichen_Sommer_25_a804026d75.jpg"
          ]
        },
        {
          "id": "1954",
          "type": "activity",
          "bookingActivityId": 1736,
          "title": "Stanserhorn Ticket: Standseilbahn und CabriO",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Cabrio_Cabri_O_Stanserhorn_Bahn_768b708a09.jpg",
          "subtitle": "Stans",
          "priceFormatted": "CHF 41",
          "startingPrice": {
            "amount": 41,
            "currency": "CHF",
            "formatted": "CHF 41"
          },
          "rating": 4.92,
          "reviewCount": 13,
          "path": "/stanserhorn/ticket-stanserhorn-stans-kaelti/",
          "webPath": "/stanserhorn/ticket-stanserhorn-stans-kaelti/",
          "distanceKm": null,
          "lat": 46.9585819,
          "lng": 8.3634724,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Cabrio_Cabri_O_Stanserhorn_Bahn_768b708a09.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Cabrio_3_Cabri_O_Stanserhorn_Bahn_bb586e77a5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Cabrio_1_Cabri_O_Stanserhorn_Bahn_446c01d196.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Bergstation_Cabri_O_Stanserhorn_Bahn_14bdf0676f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Standseilbahn_1_Cabri_O_Stanserhorn_Bahn_c9308f205c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Standseilbahn_Cabri_O_Stanserhorn_Bahn_b9e6ab341c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Murmeltier_Cabri_O_Stanserhorn_Bahn_6adef88b6d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Cabrio_2_Cabri_O_Stanserhorn_Bahn_19b6ae3d71.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Restaurant_Cabri_O_Stanserhorn_Bahn_5d90798935.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Restaurant_1_Cabri_O_Stanserhorn_Bahn_1fe484a3cd.jpg"
          ]
        },
        {
          "id": "337",
          "type": "activity",
          "bookingActivityId": 99,
          "title": "Klettersteig Mürren für Anfänger",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_658732cc79.jpg",
          "subtitle": "Mürren",
          "priceFormatted": "CHF 179",
          "startingPrice": {
            "amount": 179,
            "currency": "CHF",
            "formatted": "CHF 179"
          },
          "rating": 4.93,
          "reviewCount": 72,
          "path": "/klettersteig/klettersteig-muerren/",
          "webPath": "/klettersteig/klettersteig-muerren/",
          "distanceKm": null,
          "lat": 46.560036,
          "lng": 7.894743999999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_658732cc79.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_78a4bfa5b82c76bacb3ef0941dde03e9_a62eb0a55e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_772a88d22315602844b6d2e6bdafaf32_d36312ac24.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_a03889e60d6b0ec5ba477ab4f20d4e72_4dd28f5ec4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_a07780369124daa3aacbc7e9ae8c3528_efcf929833.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_6f1350ec88efff69ecb3e44ae3be7151_1fb1c041cc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/b44de0ca421a49d356093c89d84d4e49.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/68db5a3f569339d98f145440e794c13d.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0cb27eec01d6e4ff9851d72c6fa702a5.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/3f58aefbfc4043928cd2dd8b0aea7c60.JPG"
          ]
        },
        {
          "id": "1593",
          "type": "activity",
          "bookingActivityId": 1376,
          "title": "Ab Lauterbrunnen: Ticket Jungfraujoch inkl. Zugreservation",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/jungfraubahn_kleine_scheidegg_eiger_moench_jungfrau_d3e361b056.jpg",
          "subtitle": "Lauterbrunnen",
          "priceFormatted": "CHF 260",
          "startingPrice": {
            "amount": 260,
            "currency": "CHF",
            "formatted": "CHF 260"
          },
          "rating": 4.67,
          "reviewCount": 45,
          "path": "/jungfraujoch/ab-lauterbrunnen-ticket-jungfraujoch/",
          "webPath": "/jungfraujoch/ab-lauterbrunnen-ticket-jungfraujoch/",
          "distanceKm": null,
          "lat": 46.5984189,
          "lng": 7.908088500000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/jungfraubahn_kleine_scheidegg_eiger_moench_jungfrau_d3e361b056.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_station_eismeer_jungfraujoch_top_of_europe_4f9bb7509e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Jungfraujoch_Sphinx_Gletscher_b531e625fa.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_aletschgletscher_jungfraujoch_top_of_europe_01_d40a93bf66.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_a818069856.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Eispalast_Jungfrau_f2f840c7ce.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_berghaus_aletschgletscher_jungfraujoch_top_of_europe_bfa5921e32.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_aletschgletscher_jungfraujoch_top_of_europe_02_1ce6c506f9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_alpine_sensation_360grad_kinoerlebnis_jungfraujoch_top_of_europe_7aa30a8971.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Jungfraujoch_top_of_Europe_Eismee_0d55f43d1e.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_sphinx_aletschgletscher_jungfraujoch_top_of_europe_02_d6cd903c15.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_uebersicht_snowfun_jungfraujoch_top_of_europe_1bd93339a1.jpg"
          ]
        },
        {
          "id": "753",
          "type": "activity",
          "bookingActivityId": 532,
          "title": "Stadtführung Basel Altstadtgeschichten",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/04_Basel_Stadtfuehrung_Altsdadt_Tinguely_Brunnen_Gruppe_e8dc11992d.jpg",
          "subtitle": "Basel",
          "priceFormatted": "CHF 25",
          "startingPrice": {
            "amount": 25,
            "currency": "CHF",
            "formatted": "CHF 25"
          },
          "rating": 4.87,
          "reviewCount": 47,
          "path": "/stadtfuehrung/stadtfuehrung-basel-altstadtgeschichten/",
          "webPath": "/stadtfuehrung/stadtfuehrung-basel-altstadtgeschichten/",
          "distanceKm": null,
          "lat": 47.553693,
          "lng": 7.590611299999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/04_Basel_Stadtfuehrung_Altsdadt_Tinguely_Brunnen_Gruppe_e8dc11992d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_01_Basel_Stadtfuehrung_Altsdadt_a58225788c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_02_Basel_Stadtfuehrung_Altsdadt_Kreuzgang_d23bc3cd09.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_03_Basel_Stadtfuehrung_Altsdadt_tinguely_brunnen_stadtbegleiter_7caa66bb26.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_09_Basel_Stadtfuehrung_Altsdadt_Tinguely_Brunnen_8286a2b058.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_05_Basel_Stadtfuehrung_Altsdadt_rathaushof_5e4485ec9a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_07_Basel_Stadtfuehrung_Altsdadt_martinskirchplatz_92099ef573.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_08_Basel_Stadtfuehrung_Altsdadt_37c527c2ec.jpg"
          ]
        },
        {
          "id": "2266",
          "type": "activity",
          "bookingActivityId": 2031,
          "title": "\"Schokoladengenuss für Gross und Klein\" Workshop Maison Cailler",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Maison_Cailler_ADC_1_7428ba4b23.jpg",
          "subtitle": "Broc",
          "priceFormatted": "CHF 45",
          "startingPrice": {
            "amount": 45,
            "currency": "CHF",
            "formatted": "CHF 45"
          },
          "rating": 5,
          "reviewCount": 5,
          "path": "/maison-cailler/schokoladen-genuss-gross-klein-workshop/",
          "webPath": "/maison-cailler/schokoladen-genuss-gross-klein-workshop/",
          "distanceKm": null,
          "lat": 46.6068782,
          "lng": 7.1087393,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Maison_Cailler_ADC_1_7428ba4b23.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ee6a8196b472417d1ccf6355efcb8fe6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_ADC_2_12b3d192c2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/742147b4e1fdea58796b6e89ab2d61cc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_atelier_plaisir_chocolate_010218_8aef017b2a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_ADC_3_27213dac6b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_ADC_5_ef64bef86f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_ADC_6_8a233aeca2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_ADC_7_ad18da13b4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Maison_Cailler_ADC_8_5c4a39e790.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8e4623456a637185856659e217fefddd.jpg"
          ]
        },
        {
          "id": "1936",
          "type": "activity",
          "bookingActivityId": 1718,
          "title": "Schifffahrt Lugano - Morcote Ticket",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b7f1c138d9a53de0a14e8542c928c737.jpg",
          "subtitle": "Lugano",
          "priceFormatted": "CHF 27.60",
          "startingPrice": {
            "amount": 27.6,
            "currency": "CHF",
            "formatted": "CHF 27.60"
          },
          "rating": 4.92,
          "reviewCount": 12,
          "path": "/luganersee/luganersee-lugano-morcote/",
          "webPath": "/luganersee/luganersee-lugano-morcote/",
          "distanceKm": null,
          "lat": 46.00293749999999,
          "lng": 8.9515625,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b7f1c138d9a53de0a14e8542c928c737.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/abdef0b7f8fc0d0090dafe331b17adfd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e034543eda0831aa813f31069b45e398.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f7ec7a59279237da8fd52c2ed3c72908.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fc75536a0bdd324fd1df8d458441d114.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Morcote_unsplash_28e81612ad.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2e6a22570ff2402f4b5620c7af05504d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/da69fe925a290acb3c3f0eb234bb8e70.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b6242108604f9ffe055b6d8c2c43b1ae.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/98d3d21a8b61e7ae7de6bc90ee624cc8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Morcote_Pixabay_23da1dfc25.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/63e2b00675072b99f07e706f9877a2de.jpg"
          ]
        },
        {
          "id": "32655",
          "type": "activity",
          "bookingActivityId": 2135,
          "title": "Monte Generoso Ticket Zahnradbahn",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/bb63d3d6178527a6ed9dbeb6642ffad8.jpg",
          "subtitle": "Capolago",
          "priceFormatted": "CHF 48",
          "startingPrice": {
            "amount": 48,
            "currency": "CHF",
            "formatted": "CHF 48"
          },
          "rating": 5,
          "reviewCount": 4,
          "path": "/monte-generoso/monte-generoso-zahnradbahn-ticket/",
          "webPath": "/monte-generoso/monte-generoso-zahnradbahn-ticket/",
          "distanceKm": null,
          "lat": 45.9027671,
          "lng": 8.978813299999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/bb63d3d6178527a6ed9dbeb6642ffad8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/03a8f834519cc7995eab46bb6daf79c0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/35c260d444e0b2200f4cdc702392f31c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/b7d116e6bbb36e88e0563fa398328f49.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/2f6b9bc8b3d256f67dbffefe78d26658.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/f5f5b087ac166a5e266967ae37d30e42.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/7158eb0675af62cb33e9ece5d1a2de8e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/5cd81cb71f0a54d27a869a435ed72f2a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/987281ebe7e9f3cba0669d6770c5a560.jpg"
          ]
        },
        {
          "id": "713",
          "type": "activity",
          "bookingActivityId": 494,
          "title": "Jetboat Interlaken Brienzersee ab Bönigen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/53869cce3c6f66a22534d3fd26bb1327.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 79",
          "startingPrice": {
            "amount": 79,
            "currency": "CHF",
            "formatted": "CHF 79"
          },
          "rating": 4.89,
          "reviewCount": 66,
          "path": "/brienzersee/jetboat-interlaken-brienzersee/",
          "webPath": "/brienzersee/jetboat-interlaken-brienzersee/",
          "distanceKm": null,
          "lat": 46.6893953,
          "lng": 7.8977869,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/53869cce3c6f66a22534d3fd26bb1327.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c692e22cd3a36780539192159dbb5abf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3d44ac202e306a579fe76a2e13616246.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e29c49e9ba843559d9a289b150635f03.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5ca251eef39874af47bb2503c9182cb4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0e27e44954cd0c2154f9ff3da63ac2c5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/922550582c7e0b63a9956729c8e9b849.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/16c3d6de5c10c9b015ac9aab8037ca48.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/853f5f76afb6e2ea84bc05c0fa21e335.jpg"
          ]
        },
        {
          "id": "1863",
          "type": "activity",
          "bookingActivityId": 1645,
          "title": "Grosse Seerundfahrt Zürichsee ab Zürich",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/749142df9c3f8a4d8c81286f921c3519.jpg",
          "subtitle": "Zürich",
          "priceFormatted": "CHF 36",
          "startingPrice": {
            "amount": 36,
            "currency": "CHF",
            "formatted": "CHF 36"
          },
          "rating": 4.89,
          "reviewCount": 9,
          "path": "/zuerichsee/grosse-seerundfahrt-zuerichsee/",
          "webPath": "/zuerichsee/grosse-seerundfahrt-zuerichsee/",
          "distanceKm": null,
          "lat": 47.36564772997511,
          "lng": 8.540995717048645,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/749142df9c3f8a4d8c81286f921c3519.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/11546fe4b8939328fb6b0081feb2b924.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Grosse_Rundfahrt_Foto_ZVV_f052f1af78.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9c55f3ed6c444457b0440b716fb02901.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/22306387a2a549bf424a0276a17d95be.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c315f3bb327299e041cf32bb7b34dcf6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Island_paradise_Ufenau_rapperswil_Foto_Schweiz_Tourismus_Melanie_Duchene_52a23296d7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5808491cfce3975017f5317bbd4e2ce7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Zurich_city_panorama_Switzerland_Tourism_Jan_Geerk_51cbbf424c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a87282dedf6abf1c00d016f223b8c912.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Freienbach_Island_Ufenau_Foto_Schweiz_Tourismus_Andre_Meier_b434c0cdaa.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Richterswil_Island_Schoenenwerd_Foto_Schweiz_Tourismus_jpg_6aa9948dea.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_henrique_ferreira_unsplash_c892c27d36.jpg"
          ]
        },
        {
          "id": "1733",
          "type": "activity",
          "bookingActivityId": 1515,
          "title": "Ab Vevey: Riviera Tour Schiffsrundfahrt",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Francey_Riviera_Tour_Genfersee_Schiffahrt_2576d92ffe.JPG",
          "subtitle": "Vevey",
          "priceFormatted": "CHF 38",
          "startingPrice": {
            "amount": 38,
            "currency": "CHF",
            "formatted": "CHF 38"
          },
          "rating": 5,
          "reviewCount": 5,
          "path": "/genfersee/schifffahrt-genfersee-vevey-riviera-rundfahrt/",
          "webPath": "/genfersee/schifffahrt-genfersee-vevey-riviera-rundfahrt/",
          "distanceKm": null,
          "lat": 46.4598,
          "lng": 6.83808,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Francey_Riviera_Tour_Genfersee_Schiffahrt_2576d92ffe.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Vevey_Riviera_Tour_Genfersee_Schiffahrt_d3b1228e14.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Chateau_Chillon_Riviera_Tour_Genfersee_Schiffahrt_66c91e76ea.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Chateau_Chillon_Schiff_Riviera_Tour_Genfersee_Schiffahrt_d2299cb149.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Dampfschiff_Francey_Riviera_Tour_Genfersee_Schiffahrt_24bb88633b.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Italie_Schiff_Abend_Riviera_Tour_genfersee_6a61c822c3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Italie_Schiff_Innen_Belle_Epoque_Riviera_Tour_genfersee_de438b6003.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Italie_Schiff_Riviera_Tour_genfersee_45d3453166.jpg"
          ]
        },
        {
          "id": "2088",
          "type": "activity",
          "bookingActivityId": 1863,
          "title": "Klosterkirche Einsiedeln öffentliche Führung",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Kloster_Einsiedeln_Rapperswil_Zuerichsee_Tourismus_c22a01cea9.jpg",
          "subtitle": "Einsiedeln",
          "priceFormatted": "CHF 20",
          "startingPrice": {
            "amount": 20,
            "currency": "CHF",
            "formatted": "CHF 20"
          },
          "rating": 4.87,
          "reviewCount": 15,
          "path": "/kloster-einsiedeln/klosterkirche-einsiedeln-oeffentliche-fuehrung/",
          "webPath": "/kloster-einsiedeln/klosterkirche-einsiedeln-oeffentliche-fuehrung/",
          "distanceKm": null,
          "lat": 47.1268298,
          "lng": 8.7495918,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Kloster_Einsiedeln_Rapperswil_Zuerichsee_Tourismus_c22a01cea9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Bibliothek_Rapperswil_Zuerichsee_Tourismus_4daca4dafe.jpg"
          ]
        },
        {
          "id": "1933",
          "type": "activity",
          "bookingActivityId": 1715,
          "title": "Schifffahrt Ascona - Brissago Ticket",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/11e4dec8b150d67fc79ac3cb6c91d9da.jpg",
          "subtitle": "Ascona",
          "priceFormatted": "CHF 12.20",
          "startingPrice": {
            "amount": 12.2,
            "currency": "CHF",
            "formatted": "CHF 12.20"
          },
          "rating": 5,
          "reviewCount": 3,
          "path": "/lago-maggiore/lago-maggiore-ascona-brissago/",
          "webPath": "/lago-maggiore/lago-maggiore-ascona-brissago/",
          "distanceKm": null,
          "lat": 46.153793,
          "lng": 8.768725,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/11e4dec8b150d67fc79ac3cb6c91d9da.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f23ebe94f053c5f4c1bcc32382e433bf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b2acbbd92c7f76c3fcd2419b4b35ba4d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Ascona_waterfront_Foto_Schweiz_Tourismus_1a25448079.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3f7e3701a8d79a1e5fd4399288b4710e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Brissago_Inseln_unsplash_5b97a87df4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/dde9ae7a43c2c7c25c375c5bdf057a07.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_00_Ascona5_unsplash_c34271dec8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Ronco_Brissago_Foto_Schweiz_Tourismus_32c15a6bca.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_06_Ascona_unsplash_Kopie_329a0ac49e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5d403ec77917a61759444d2a3fe8ef18.jpg"
          ]
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "perPage": 20,
          "total": 885,
          "hasMore": true
        }
      }
    }
  ],
  "content": [
    {
      "html": "<p>Für Familien hat die Schweiz eine sehr breite Palette an Aktivitäten zu bieten. Bevor wir mit unseren Ideen für dich loslegen, teilen wir einige allgemeine Tipps für deinen Familienausflug mit dir.</p>\n<h2>Swiss Activities Tipps für Familien</h2>\n<ul>\n<li>Ein Must-have bei jedem Besuch der Schweiz mit Kindern ist die <a href=\"https://www.myswitzerland.com/de-ch/planung/transport-aufenthalt/billette/swiss-family-card/\">Swiss Family Card</a>. Mit ihr reisen Kinder ab dem 6. und vor dem 16. Geburtstag in Begleitung eines Elternteils gratis mit den öffentlichen Verkehrsmitteln mit. Die Swiss Family Card ist kostenlos und wird ausgestellt, wenn du einen beliebigen Fahrausweis des Swiss Travel Systems kaufst. Falls du in der Schweiz lebst, gibt es als Alternative zur Swiss Family Card die <a href=\"https://www.sbb.ch/de/abos-billette/abonnemente/junior-karte.html\">Junior-Karte</a>. Sie kostet 30 CHF für ein ganzes Jahr und lässt dich dein Kind ebenfalls gratis auf jeden Tagesausflug mit dem ÖV mitnehmen.</li>\n<li>Immer mehr Regionen richten sich auf Familien aus oder kreieren Angebote, die für Familien geeignet sind. Schweiz Tourismus hat eine Übersichtsseite erstellt mit sogenannten <a href=\"https://www.myswitzerland.com/de-ch/reiseziele/ferienorte-und-staedte/familienorte/familienorte-suche/\">“Familienorten”</a>. Zudem findest du auf der Webseite der <a href=\"https://reka.ch/de/rekaferien/familienferien\">Reka</a> (Schweizerische Reisekasse) eine grosse Fülle an Inspiration für deinen Familienurlaub. </li>\n<li>Liebst du eine gute Grillade ebenso wie wir? Oder wie deine Kinder? Dann bist du bei den <a href=\"https://www.schweizerfeuerstellen.ch/\">Schweizer Familie Feuerstellen</a> genau richtig. Knapp 600 Feuerstellen sind gratis und öffentlich zugänglich und bieten einen unterschiedlichen Standard an Infrastruktur. Einen Grill mit Feuerholz haben sie ziemlich alle. Einige sind zusätzlich mit WCs, Parkplätzen und teilweise sogar Spielplätzen ausgerüstet. Sie bieten die perfekte Grundlage für eine stärkende Pause auf einer Wanderung oder für einen Ausflug in die Natur. </li>\n<li>In der ganzen Schweiz verteilt gibt es unzählige Themen-, Märchen- und Lehrpfade. Sie unterrichten die Kinder in einem speziellen Thema, widmen sich einem Märchen und bieten oft eine grandiose Aussicht auf die umliegende Landschaft. So entdeckst du die schönsten Ecken der Schweiz mit deinen Kindern. Schweiz Tourismus hat eine Übersicht mit über 200 <a href=\"https://www.myswitzerland.com/de-ch/erlebnisse/sommer-herbst/ausfluege/themen-und-erlebnispfade-suche/\">Themenpfaden</a> zusammengestellt.</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<p>In der Schweiz gibt es zahlreiche Ausflüge, die du mit deiner Familie unternehmen kannst. Ob im Sommer oder im Winter, mit aktiven Teenagern oder lebendigen Kleinkindern, zu Fuss oder mit dem Kinderwagen – hier findest du Inspiration für den nächsten Familienausflug. </p>\n<h2>Ausflüge Schweiz für abenteuerlustige Familien</h2>\n<p>Abenteuer für einen Familienausflug in der Schweiz warten an jeder Ecke. Du musst sie nur finden</p>\n<h3>Monstertrotti</h3>\n<p>Fahre mit dem <a href=\"/monster-scooter/\">Monstertrotti</a> den Berg hinunter und geniesse dabei die schöne Aussicht. Die überdimensionalen Trottinetts machen gerade abenteuerlichen Kindern richtig Spass. Dank der breiten Reifen ist dieses Gefährt sehr stabil, sicher, und einfach zu benutzen. Monstertrottis, oft auch Monster Scooter genannt, kannst du in der Schweiz an vielen verschiedenen Orten, oft in der Nähe von Bergbahnen, ausleihen.</p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Schulkinder und Teenager</li>\n</ul>\n<p><em>Swiss Activities Tipp: Beim Fahren mit dem Monstertrotti in Matten hast du eine atemberaubende Aussicht auf Eiger. Mönch und Jungfrau. Oberhalb des Lauterbrunnentals bist du von 72 Wasserfällen umgeben. Aber auch im Wallis in Saas-Grund oder im Tessin in Bosco Gurin ist die Talfahrt ein Spass für die ganze Familie.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/01_Familie_Ausflug_Schweiz_Trottinett_Adelboden_Tourismus_Adelboden_Lenk_Kandersteg_Stephan_Boegli_1f797bb685.jpg",
          "caption": "(Foto: Tourismus Adelboden Lenk Kandersteg Stephan Boegli)",
          "alt": "Familie Ausflug Schweiz Trottinett Adelboden"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/02_Familie_Ausflug_Schweiz_Monstertotti_Hohsaas_Saastal_Bergbahnen_AG_033aec5b2a.jpg",
          "caption": "(Foto: Saastal Bergbahnen AG)",
          "alt": "Familie Ausflug Schweiz Monstertotti Hohsaas "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Seilpark</h3>\n<p>Umgeben von Natur kletterst du im Seilpark durch Bäume und verschiedene Hindernisse. Die über 50 <a href=\"/seilpark/\">Seilparks in der Schweiz</a> haben verschiedene Schwierigkeitsstufen und Höhen für jedes Niveau. Dadurch eignen sie sich ideal für einen Familienausflug. Seilparks findest du unter anderem im Gantrisch, in Interlaken, in Arosa oder sogar in den Städten Zürich und Bern. </p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Kinder über 120 cm, Teenager</li>\n<li>Mindestalter, Grösse und / oder Gewicht hängt vom Seilpark ab</li>\n</ul>\n<p><em>Swiss Activities Tipp: Der <a href=\"/seilpark/seilpark-interlaken-outdoor-mit-9-adventure-parcours/\">Seilpark Interlaken</a> verfügt über einen Schmetterling Parcours ohne Gurt für die ganz Kleinen. Eltern dürfen auch gratis mit rein, um ihnen zu helfen. So haben auch die kleinsten Kinder ihren Spass.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/03_Familie_Ausflug_Schweiz_Seilpark_Interlaken_Outdoor_Interlaken_bd493b2bec.jpg",
          "caption": "(Foto: Outdoor Interlaken)",
          "alt": "Familie Ausflug Schweiz Seilpark Interlaken "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/04_Familie_Ausflug_Schweiz_Seilpark_Fiesch_Aletscharena_AG_b5a1499257.jpg",
          "caption": "(Foto: Aletscharena AG)",
          "alt": "Familie Ausflug Schweiz Seilpark Fiesch "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Klettersteig</h3>\n<p>Für die sportlichen und schwindelfreien Familien ist ein Klettersteig ein abenteuerlicher Ausflug. Bei einem Klettersteig bist du mit Seilen gesichert und kletterst den Weg mithilfe von Eisenleitern, Eisenstiften und Klammern. Je nach Ort, Alter und Erfahrung gibt es verschiedene Schwierigkeitsstufen. Schöne Klettersteige, welche auch für Kinder angepasst sind, findest du unter anderem in den <a href=\"/klettersteig/klettersteig-schweifinen-fortgeschrittene-zermatt/\">Zermatter Klettersteigen</a>, auf dem Tälli oder dem Schwarzhorn in Grindelwald.</p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Schulkinder, Teenager</li>\n</ul>\n<p><em>Swiss Activities Tipp: Informiere dich vorab, ob du die Aktivität an einem spezifischen Ort mit deinen Kindern machen darfst. Viele Destinationen erwarten ein Mindestalter von 18 Jahren. Es gibt allerdings durchaus Klettersteige, die mit Kindern ab 120 cm unternommen werden können.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/05_Familie_Ausflug_Schweiz_Engelberg_Brunni_Klettersteig_Rock_Safety_Engelberg_Titlis_Tourismus_AG_56a09f1f9b.jpg",
          "caption": "(Foto: Engelberg-Titlis Tourismus AG)",
          "alt": "Familie Ausflug Schweiz Engelberg Brunni Klettersteig Rock Safety "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/06_Familie_Ausflug_Schweiz_Klettersteig_Via_Ferrata_Grindelwald_Sports_c70b136c9b.jpg",
          "caption": "(Foto: Grindelwald Sports)",
          "alt": " Familie Ausflug Schweiz Klettersteig Via Ferrata "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Mit dem First Glider wie ein Adler ins Tal fliegen</h3>\n<p>Träumst du davon, einmal wie ein Adler durch die Lüfte zu schweben? In Grindelwald kann dieser Traum wahr werden. Der <a href=\"/paragliding/paragliding-grindelwald-first/\">Grindelwald First Glider</a> ist ein grosser, am Stahlseil befestigter Adler. Er bringt vier Personen gleichzeitig 800 m hinunter nach Schreckfeld. Das Tal bewunderst du mit deiner Familie dabei wortwörtlich aus der Vogelperspektive.</p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Schulkinder ab 10 Jahre, Teenager</li>\n<li>Mindestgrösse: 130 cm</li>\n<li>Körpergewicht: max. 125 kg</li>\n</ul>\n<p><em>Swiss Activities Tipp: Familienmitglieder, die lieber auf festen Boden bleiben, finden als Alternative zum Adlerflug wunderschöne Wanderrouten in diesem bezaubernden Gebiet. Dazu gehört beispielsweise der Murmeltierpfad mit Blick auf den Brienzer- und Thunersee und das bekannte Dreigestirn Eiger, Mönch und Jungfrau.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/07_Familie_Ausflug_Schweiz_Grindelwald_First_Glider_Grindelwald_First_Jungfraubahnen_Management_AG_f2afe0c3eb.jpg",
          "caption": "(Foto: Jungfraubahnen AG)",
          "alt": "Familie Ausflug Schweiz Grindelwald First-Glider-Grindelwald-First "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/08_Familie_Ausflug_Schweiz_First_Flieger_Adventure_Grindelwald_Jungfrau_Bahnen_Management_AG_79051e3dab.jpg",
          "caption": "(Foto: Jungfraubahnen AG)",
          "alt": "Familie Ausflug Schweiz First Flieger Adventure Grindelwald "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>An einer Schweizer Familie Feuerstelle eine Wurst braten</h3>\n<p>Zu einer erfolgreichen Wanderung gehört in der Schweiz ein Feuer, um eine leckere Wurst zu braten. Feuerstellen, die von der “Schweizer Familie” unterhalten werden, findest du über das ganze Land verteilt. Sie verfügen über eine ausgezeichnete Infrastruktur und können gratis benutzt werden. Du musst nur noch ein paar Äste finden, um die Wurst aufzuspiessen und schon hast du ein Festmahl für die ganze Familie gezaubert. Es ist quasi das I-Tüpfelchen für einen gelungenen Familienausflug.</p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Jedes Alter</li>\n<li>Kostenlos</li>\n</ul>\n<p><em>Swiss Activities Tipp: Auf dem Hexenweg in Wirzweli in Nidwalden liegt eine Feuerstelle mitten auf dem Abenteuerspielplatz des Hexenwegs. Es ist ein toller Ort für Kinder, die sich auf grossen Holzkonstruktionen austoben möchten.</em></p>\n<h3>Sommerrodeln</h3>\n<p>Sause mit dem Wind in den Haaren und einem Panoramablick den Hang hinunter. Auf den Rodelbahnen kannst du entweder alleine oder zu zweit fahren. Je nachdem, wie alt und wie abenteuerlustig deine Kinder sind. <a href=\"/sommerrodeln/\">Sommerrodeln</a> ist eine rasante Aktivität für Gross und Klein. Atemberaubende Rodelbahnen findest du unter anderem beim Oeschinensee, in Monte Tamaro oder hoch oben auf dem Alpine Coaster im Kanton Waadt.</p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Kleinkinder bis Teenager</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/09_Familie_Ausflug_Schweiz_Monte_Tamaro_Rodelbahn_Tessiner_Tourismusagentur_ATT_SA_3278dd158d.jpg",
          "caption": "Rodeln am Monte Tamaro (Foto: Tessiner Tourismusagentur)",
          "alt": "Familie Ausflug Schweiz Monte Tamaro Rodelbahn  "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/10_Familie_Ausflug_Schweiz_Rodeln_Kinder_Monte_Tamaro_Monte_Tamaro_c8f75f32c4.jpg",
          "caption": "Rondeln am Monte Tamaro (Foto: Monte Tamaro)",
          "alt": "Familie Ausflug Schweiz Rodeln Kinder Monte Tamaro - Monte Tamaro"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Tyrolienne</h3>\n<p>Eine Aktivität, die garantiert für Nervenkitzel bei der ganzen Familie sorgt, ist eine Tyrolienne mitten in den Bergen. Auf einem Stahlseil befestigt, rast du den Berg hinunter und hast dabei eine wunderschöne Panoramaaussicht. Aussichtsvolle Orte, welche für einen Familienausflug gut geeignet sind, findest du auf dem Monte Tamaro im Tessin, dem Mont Fort in Wallis oder in Hoch-Ybrig. </p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Schulkinder ab ungefähr 9 Jahren und Teenager.</li>\n</ul>\n<p><em>Swiss Activities Tipp: In Monte Tamaro findest du die längste Tyrolienne der Schweiz. Dazu gibt es dort zahlreiche weitere Aktivitäten für abenteuerliche Familien.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/11_Familie_Ausflug_Schweiz_Grindelwald_First_Flieger_Tyrolienne_Jungfraubahnen_Management_AG_483deea831.jpg",
          "caption": "Tyrolienne in Grindelwald (Foto: Jungfraubahnen AG)",
          "alt": "Familie Ausflug Schweiz Grindelwald First Flieger Tyrolienne "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/12_Familie_Ausflug_Schweiz_Monte_Tamaro_Tyrolienne_Tessiner_Tourismusagentur_ATT_SA_903e019626.jpg",
          "caption": "Ziplining (Foto: Tessiner Tourismusagentur)",
          "alt": "Familie Ausflug Schweiz Monte Tamaro Tyrolienne "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Böötle</h3>\n<p>Wie wärs mit einem Familienausflug auf dem Wasser? Ob <a href=\"/boeoetle/bootsfahrt-aare-guide-thun-bis-bern/\">Aare Böötle</a>, Limmat Böötle oder Rhein Böötle: in der Schweiz gibt es viele Möglichkeiten für das beliebte Schlauchbootfahren. Zum Beispiel kannst du mit dem Schlauchboot in Thun anfangen und dich auf der schnellen Aare bis nach Bern treiben lassen.</p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Kinder und Teenager, Wasserratten</li>\n</ul>\n<p><em>Swiss Activities Tipp: Wenn du ein Schlauchboot oder eine aufblasbares Einhorn besitzt, kannst du problemlos alleine Böötle. Mit Kindern kann es allerdings stressig werden, den richtigen Aussstieg zu finden.&quot;Ein <a href=\"/boeoetle/\">Aare Böötle mit Guide</a> für ein Familienböötle zu buchen, erspart dir die ganze Organisation. So könnt ihr sorglos den Ausflug geniessen.</em></p>\n<h3>Jetboat Tour</h3>\n<p>Mit höchster Geschwindigkeit auf dem Brienzersee unterwegs zu sein, ist ein Spass für die ganze Familie. Auf einer <a href=\"/brienzersee/jetboat-interlaken-brienzersee/\">Jetboat Tour in Interlaken</a>  siehst du die Giessbachfälle und lernst spannende Geschichten über die Region. Dabei erlebst du eine aufregende Bootsfahrt mit 360 Grad Umdrehungen und High Speed.</p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Kinder ab 5 Jahren</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/13_Familie_Ausflug_Schweiz_Jetboat_Brienzersee_Jetboat_Interlaken_494bdb0645.jpg",
          "caption": "Jetboat Brienzersee (Foto: Jetboat Interlaken)",
          "alt": "Familie Ausflug Schweiz Jetboat Brienzersee "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/14_Familie_Ausflug_Schweiz_Jetboat_Brienzersee_Jetboat_Interlaken_5467389a94.jpg",
          "caption": "Jetboat Brienzersee (Foto: Jetboat Interlaken)",
          "alt": "Familie Ausflug Schweiz Jetboat Brienzersee"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Rafting</h3>\n<p><a href=\"/rafting/\">Rafting</a> ist eine spannende Aktivität, die auch für Kinder ohne Erfahrung geeignet ist. In der ganzen Schweiz gibt es sehr viele Angebote, die sich für einen Familienausflug eignen. Da ist beispielsweise die Giarsun Schlucht im Engadin oder auf der Gletscherfluss Vispa im Wallis. Auch die Lütschine in Interlaken ist für Familien und Anfänger geeignet. </p>\n<ul>\n<li>Saison: Mai bis Oktober</li>\n<li>Geeignet für: Schulkinder ab 8 Jahre</li>\n</ul>\n<p><em>Swiss Activities Tipp: Kombiniere Rafting mit einem Grillplausch bei der Giarsun Schlucht im Engadin oder auf der Rhone im Wallis.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/15_Familie_Ausflug_Schweiz_Familien_Rafting_Engadin_Engadin_Outdoor_Center_f671854413.jpg",
          "caption": "Rafting im Engadin (Foto: Engadin Outdoor Center)",
          "alt": "Familie Ausflug Schweiz Familien Rafting Engadin "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/16_Familie_Ausflug_Schweiz_Familien_Rafting_Engadin_Engadin_Outdoor_Center_96061a6cfc.jpg",
          "caption": "(Foto: Engadin Outdoor Center)",
          "alt": "Familie Ausflug Schweiz Familien Rafting Engadin "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Canyoning</h3>\n<p>Du scheust dich nicht davor, nass zu werden und magst hin und wieder einen richtigen Adrenalin-Kick? Dann ist Canyoning die perfekte Herausforderung für dich und deine Familie. Bei diesem abenteuerlichen Erlebnissport geht es ziemlich wild zu und her. Mut und Herzklopfen werden aber mit ganz viel freudigem Jauchzen und unvergesslichen Erlebnissen in tiefen Schluchten, bergigen Regionen und abgelegener Natur belohnt. </p>\n<ul>\n<li>Saison: Ganzjährig, mehrheitlich Mai bis Oktober</li>\n<li>Geeignet für: alle Adrenalin-Junkies, Familien und Gruppen, sogar für Anfänger und (je nach Tour) Kinder ab 8 Jahren. </li>\n<li>Gute gesundheitliche Verfassung vorausgesetzt</li>\n</ul>\n<p><em>Swiss Activities Tipp: Dank zahlreichen Bergbächen und Schluchten bietet die Schweiz unbegrenzten <a href=\"/canyoning/\">Canyoning Spass</a>. Vom Berner Oberland bis ins Tessin ist hier für jeden die passende Tour dabei.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/17_Familie_Ausflug_Schweiz_Kajak_Familie_Brienzersee_Hightide_Kayak_Brienzersee_93c04c5827.jpg",
          "caption": "Kajak auf dem Brienzersee (Foto: Hightide Kayak Brienzersee)",
          "alt": "Familie Ausflug Schweiz Kajak Familie Brienzersee"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/18_Familie_Ausflug_Schweiz_Familientour_Brienzersee_Hightide_Kayak_Brienzersee_d41fb23fce.jpg",
          "caption": "(Foto: Hightide Kayak Brienzersee)",
          "alt": "Familie Ausflug Schweiz Familientour Brienzersee "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Europapark</h3>\n<p>Möchtest du 15 Länder an einem Tag besuchen? Dann ab in den Europapark! Hier wird bestimmt die ganze Familie glücklich. Die Mutigen beweisen sich auf rasanten Achterbahnen wie der ‘Blue Fire’ oder der ‘Silver Star’, die Hungrigen schlemmen sich von Region zu Region und die Träumer lassen sich von Kobolden auf hohen Stelzen, Prinzessinnen auf Schlittschuhen oder der Euro-Maus in andere Welten entführen. Mit mehr als 100 verschiedenen Attraktionen und Shows bleiben bestimmt keine Wünsche unerfüllt. Es ist der perfekter Familienausflug!</p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: Jung bis Alt und alle dazwischen</li>\n</ul>\n<p><em>Swiss Activities Tipp: Du bist zwar überglücklich aber auch etwas erschöpft nach so viel Lachen, Kreischen, Bibbern und Staunen? Dann lass dich vom Chauffeur heim fahren und schwelge auf der Busfahrt vom Europapark zurück in die Schweiz in Erinnerungen an den erlebnisreichen Tag in Rust.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/21_Familie_Ausflug_Schweiz_Familie_Pegasus_Europapark_2_d2279d8f37.jpg",
          "caption": "(Foto: Europapark)",
          "alt": "Familie Ausflug Schweiz Familie Pegasus "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/22_Familie_Ausflug_Schweiz_Kinder_Euromaus_Europapark_bf2a5eff50.jpg",
          "caption": "(Foto: Europapark)",
          "alt": "Familie Ausflug Schweiz Kinder Euromaus Europapark"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Indoor Spielplatz</h3>\n<p>Es regnet in Strömen und die Kinder wollen raus auf den Spielplatz? Wie wär&#39;s mit einer Surf-Session in den Hallen eines Einkaufszentrums? Oder doch lieber Rutschen, Klettern, Abseilen, Bouldern oder Trampolin hüpfen? Die nächste Schönwetterfront kommt bestimmt… Bis dahin wird euch mit all den <a href=\"/indoorfreizeitpark/\">Indoor Freizeitparks</a> bestimmt nicht langweilig.</p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: je nach Aktivität von ganz Klein bis ganz Gross</li>\n</ul>\n<p><em>Swiss Activities Tipp: Der grösste <a href=\"/seilpark/\">Indoor Seilpark</a> Europas befindet sich in Grindelwald. Fünf Parcours mit über 40 Elementen und bis zu 15 m Höhe sorgen für stundenlangen Kletterspass und ganz viel Adrenalin. Mach dich besser darauf gefasst, dass die Kinder hier auch bei gutem Wetter wieder hin wollen…</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/23_Familie_Ausflug_Schweiz_Indoor_Seilpark_Grindelwald_Outdoor_Interlaken_516230678f.jpg",
          "caption": "Indoor Seilpark (Foto: Outdoor Interlaken)",
          "alt": "Familie Ausflug Schweiz Indoor Seilpark Grindelwald "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/24_Familie_Ausflug_Schweiz_Indoor_Freizeitpark_Kinder_Freiruum_2507afdaba.jpg",
          "caption": "Freizeitpark für Kinder (Foto: Freiruum)",
          "alt": "Familie Ausflug Schweiz Indoor Freizeitpark Kinder "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Hundeschlitten fahren</h3>\n<p>Um wunderschöne Landschaften, glasklare Schneeluft und Hundeschlitten zu geniessen, musst du für deinen Famlienausflug keinesfalls nach Grönland reisen. Dieses einmalige Abenteuer kannst du auch in der Schweiz erleben. Angebote gibt es zum Beispiel im Berner Oberland rund um Gstaad, in der Region Walensee, dem Muotathal im Kanton Schwyz, im Toggenburg und an vielen weiteren Orten. Die aufregenden Stunden mit den Huskies im Schnee werden bestimmt der ganzen Familie auf ewig in guter Erinnerung bleiben.</p>\n<ul>\n<li>Saison: November bis April</li>\n<li>Geeignet für: Schulkinder und Teenager</li>\n<li>Mindestalter je nach Tour und Anbieter unterschiedlich</li>\n</ul>\n<p><em>Swiss Activities Tipp: Am besten trägst du warme Winterstiefel und Ski- oder Regenhosen mit schneedichtem Abschluss oder Gamaschen. So bleibst du trocken und hast auf der Schlittenfahrt schön warm.</em></p>\n<h3>Schlitteln</h3>\n<p>Kaum etwas macht im Winter mehr Spass, als auf einem Schlitten in vollem Tempo einen Berg hinunter zu rodeln. Durch verschneite Wälder, entlang kurviger Pisten, bei Sonnenschein oder im Schneegestöber: <a href=\"/schlitteln/\">Schlitteln</a> ist der ultimative Schneespass für die ganze Familie. Du hast keinen eigenen Schlitten? Überhaupt kein Problem; in den meisten Schweizer Skigebieten lassen sie sich stunden-, halbtags- oder tageweise buchen. </p>\n<ul>\n<li>Saison: November bis April</li>\n<li>Geeignet für: die ganze Familie</li>\n</ul>\n<p><em>Swiss Activities Tipp: Miete direkt einen Schlitten bei der Talstation einer Bergbahn und lasse dich in luftige Höhen transportieren. Du sparst dir so den strengen Aufstieg zu Fuss und mit einer Mehrfahrtenkarte kannst du gleich mehrmals hinunter schlitteln.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/25_Familie_Ausflug_Schweiz_Schlitteln_Wengen_Jungfraubahnen_Management_AG_47f696dcaf.jpg",
          "caption": "(Foto: Jungfraubahnen AG)",
          "alt": "Familie Ausflug Schweiz Schlitteln Wengen "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/26_Familie_Ausflug_Schweiz_Schlitteln_zu_Fuss_Jungfraubahnen_Management_AG_1ff94c9990.jpg",
          "caption": "(Foto: Jungfraubahnen AG)",
          "alt": "Familie Ausflug Schweiz Schlitteln zu Fuss"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Iglu selbst bauen</h3>\n<p>Warum nicht mal ein Iglu selber bauen? Rüste dich und deine Familie mit Schaufeln aus und los gehts. Am einfachsten schaufelt ihr einen grossen Haufen Schnee zusammen, klopft diesen rundum schön fest und fängt danach vorsichtig an, den Schneehaufen auszuhöhlen. Das gibt ganz schön warm. Die Zeit danach im kühlen Iglu wird dadurch aber umso schöner.</p>\n<ul>\n<li>Saison: November bis April</li>\n<li>Geeignet für: die ganze Familie</li>\n</ul>\n<p><em>Swiss Activities Tipp: Hast du zu wenig Schnee im eigenen Garten oder nicht genug Werkzeug für die ganze Familie? Dann fahr ins nächste Skigebiet und baue unter fachkundiger Anleitung mit Säge und Schaufel Schnee-Block um Schnee-Block ein richtiges Iglu. Dies kannst du zum Beispiel im wunderschönen Grindelwald im Berner Oberland tun.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Ausflüge Schweiz für Entdecker Familien</h2>\n<p>Begib dich mit deiner Familie bei  Ausflügen in der Schweiz auf Entdeckungstour und verbringe einen Tag mit unterhaltsamen Aktivitäten. Es gibt bestimmt etwas, was du noch nie ausprobiert hast.</p>\n<h3>Rätselwanderungen</h3>\n<p>Du wanderst fürs Leben gern, hast aber den einen oder anderen Wander-Muffel in der Familie? Dann solltest du dich unbedingt auf eine Rätselwanderung begeben. Dabei sorgen Geschicklichkeitsspiele und Rätselspass für ganz viel Abwechslung und Vergnügen. Gepaart mit wunderschönem Bergpanorama und viel Frischluft sind glückliche Gesichter am Tagesende vorprogrammiert.</p>\n<ul>\n<li>Saison: Je nach Region unterschiedlich</li>\n<li>Geeignet für: Gross und Klein</li>\n</ul>\n<h3>Gletscherschlucht</h3>\n<p>Entdecke die einmalige Gletscherschlucht in Grindelwald mit deiner Familie. Eine leichte Wanderung führt über Steige, durch Tunnel und Felsgalerien innerhalb der Schlucht am Fusse der Eiger Nordwand entlang. Ein riesiges Highlight dieses Familienausfluges ist zudem ein begehbares Drahtseil-Spinnennetz. Es lädt über 170 m² zum Klettern und Balancieren auf einer Höhe von sieben Metern ein.</p>\n<ul>\n<li>Saison: Mai bis November</li>\n<li>Geeignet für: Familien mit Kindern unter Aufsicht</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/27_Familie_Ausflug_Schweiz_Gletscherschlucht_Grindelwald_Familie_Outdoor_Interlaken_1d3dc22440.jpg",
          "caption": "Gletscherschlucht (Foto: Outdoor Interlaken)",
          "alt": "Familie Ausflug Schweiz Gletscherschlucht Grindelwald Familie "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/28_Familie_Ausflug_Schweiz_Gletscherschlucht_Grindelwald_Outdoor_Interlaken_04564d8ad4.jpg",
          "caption": "Gletscherschlucht Grindelwald (Foto: Outdoor Interlaken)",
          "alt": " Familie Ausflug Schweiz Gletscherschlucht Grindelwald "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Höhlenwanderung</h3>\n<p>Du bist in Wanderlaune und es regnet oder es ist zu heiss draussen, um an der Sonne zu wandern? Dann ist eine kleine Indoor-Wanderung genau das Richtige für dich und deine Familie. In den St. Beatushöhlen am Thunersee in der Nähe von Interlaken könnt ihr auf ca. einem Kilometer das Innere des Berges erforschen. Natürlich auf gut ausgebauten und beleuchteten Wegen, so dass das Abenteuer für die ganze Familie sicher und zugänglich ist.</p>\n<ul>\n<li>Saison: März bis Oktober</li>\n<li>Geeignet für: jedes Alter</li>\n</ul>\n<p><em>Swiss Activities Tipp: Ein Erlebnis der ganz besonderen Art ist das exklusive <a href=\"/hoelloch-hoehle-muotathal/fuehrung-hoehle-hoelloch-muotathal-raclette/\">Candle Light Höhlen Raclette</a> Bei Feuerknistern und Kerzenschein geniesst du ein Abendessen in spektakulärer Umgebung.</em></p>\n<h3>Wasserfall</h3>\n<p>Ob sanft-plätschernd und idyllisch oder atemberaubend hoch und laut tosend; Wasserfälle findest du in der Schweiz in allen denkbaren Formen und in allen möglichen Regionen. In einigen Wasserfallbecken kannst du natürlich auch baden und dich im Sommer vom Wandern erholen. Wieso also nicht mal eine Wanderung mit Ausflugsziel “Wasserfall” planen? </p>\n<ul>\n<li>Saison: Je nach Region und Wetter ganzes Jahr möglich </li>\n<li>Geeignet für: Jung und Alt</li>\n</ul>\n<p><em>Swiss Activities Tipp: Mit seinen 72 Wasserfällen ist das Lauterbrunnental im Kanton Bern <strong>die</strong> Destination für alle Wasserfall Fans. Hier findest du auch die Trümmelbachfälle; die grössten unterirdischen Gletscherwasserfälle Europas.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/29_Familie_Ausflug_Schweiz_Truemmelbachfaelle_My_Switzerland_257a843249.jpg",
          "caption": "Trümmelbachfälle (Foto: MySwitzerland)",
          "alt": "Familie Ausflug Schweiz Trümmelbachfälle "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/30_Familie_Ausflug_Schweiz_Staubbachfall_My_Switzerland_Tourism_Iris_Kuerschner_7583ee6814.jpg",
          "caption": "Staubbachfall (Foto: Schweiz Tourismus Iris Kuerschner)",
          "alt": "Familie Ausflug Schweiz Staubbachfall "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Goldwaschen</h3>\n<p>Die Suche nach Gold ist in der Schweiz an vielen Orten möglich und begeistert Gross und Klein. Goldschürfen kannst du zum Beispiel beim Familienausflug im schönen Napfgebiet oder im Bündnerland. Bestimmt schlägt dein Herz gleich etwas schneller, wenn es zum ersten Mal funkelt in deiner Goldwaschpfanne. Also los; Gummistiefel montieren, Cowboy-Hut aufsetzen und los geht die Goldsuche. </p>\n<ul>\n<li>Saison: Je nach Wetter von Mai bis Oktober</li>\n<li>Geeignet für: Kinder ab ca. 6 Jahren</li>\n</ul>\n<p><em>Swiss Activities Tipp: Um erfolgreich auf ein paar Goldkörnchen zu stossen, lohnt es sich, einen Kurs zu buchen. Diese werden an verschiedenen Orten und in unterschiedlicher Dauer angeboten. Besonders erfolgversprechend ist wohl Disentis und Umgebung: die Gegend zählt nämlich zu den goldhaltigsten der Schweiz.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/31_Familie_Ausflug_Schweiz_Goldwaschen_My_Switzerland_Tourism_Jan_Geerk_4ff0fef33b.jpg",
          "caption": "Goldwaschen (Foto: Schweiz Tourismus Jan Geerk)",
          "alt": "Familie Ausflug Schweiz Goldwaschen "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/32_Familie_Ausflug_Schweiz_Goldwaschen_My_Switzerland_d2d1389a5a.jpg",
          "caption": "Goldwaschen (Foto: MySwitzerland)",
          "alt": "Familie Ausflug Schweiz Goldwaschen"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Barfusswanderweg</h3>\n<p>Saftiges Gras, warmes Laub, schlammiger Lehm, kühle Kieselsteine oder kristallklares Wasser unter den Füssen; Barfusswandern ist ein riesiges Vergnügen für die ganze Familie. Mal ehrlich, wie oft gönnst du deinen Füssen etwas Frischluft? Es wird Zeit, mal wieder richtig Kind zu sein und die Schweiz auf nackten Sohlen zu erkunden.</p>\n<ul>\n<li>Saison: je nach Wetter und Region von April bis Oktober</li>\n<li>Geeignet für: Jung und Alt</li>\n</ul>\n<p><em>Swiss Activities Tipp: Tolle Barfusswanderwege findest du in der ganzen Schweiz und es kommen jährlich neue dazu. Und gibt es einen reizenderen Namen für eine Barfusswanderung als “Auf dem Kitzelpfad zum Härzlisee”?</em></p>\n<h3>Foxtrail</h3>\n<p>Falls du eine neue Region oder Stadt entdecken möchtest, dann haben wir eine Idee für dich. Bei einem von über 60 Foxtrails in der ganzen Schweiz begibst du dich mit deiner Familie auf eine interaktive Spurensuche der Extraklasse. Durch das Lösen kniffliger Rätsel und dem Bewältigen von lustigen Aufgaben gelangst du von Posten zu Posten. So lernst du spielerisch eine neue Umgebung kennen. </p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: Kinder ab ca. 6 Jahren, Familien und Gruppen</li>\n</ul>\n<p><em>Swiss Activities Tipp: Für noch mehr Spass teilt ihr euch in Gruppen auf und startet zeitversetzt. So geht es nicht nur mehr darum, von Posten zu Posten zu finden, sondern die ganze Fuchsjagd schneller als die anderen Teams zu bewältigen. Auf die Plätze, fertig, los.</em></p>\n<h3>Escape Game Outdoor</h3>\n<p>Mittels kniffliger Rätselspiele und lustiger Abenteuer lernst du einen Ort auf einmalig spannende Art und Weise kennen. Die <a href=\"/escape-room/\">Outdoor Escape Games</a> werden in der ganzen Schweiz und zu verschiedenen Themen angeboten. Je nach Alter der Kinder bieten sich so ganz verschiedene Spiele an. </p>\n<ul>\n<li>Saison: je nach Spiel und Ort ganzjährig möglich</li>\n<li>Geeignet für: Kinder und Erwachsene</li>\n</ul>\n<p><em>Swiss Activities Tipp: Du willst die Hauptstadt der Schweiz aus einer neuen Perspektive kennenlernen? Dann mach dich auf die Suche nach dem <a href=\"/escape-room/online-outdoor-escape-game-magische-portal/\">magischen Portal</a> und hilf dabei, Bern vor gefährlichen Kreaturen aus der Vergangenheit zu bewahren.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/33_Familie_Ausflug_Schweiz_Familie_Escape_Room_Spassvogel_83e88282d9.jpg",
          "caption": "Escape Game (Foto: Spassvogel Event GmbH)",
          "alt": " Familie Ausflug Schweiz Familie Escape Room "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/34_Familie_Ausflug_Schweiz_Das_magische_Portal_Escape_Room_Spassvogel_351e0ffbb6.jpg",
          "caption": "Escape Game (Foto: Spassvogel Event GmbH)",
          "alt": "Familie Ausflug Schweiz Familie Escape Room"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Escape Room Indoor</h3>\n<p>Die Escape Rooms bieten dir und deiner Familie eine aufregende Möglichkeit, auch bei schlechtem Wetter richtig viel Spass zu haben. Zuerst entscheidest du dich für einen Ort, wählst einen Schwierigkeitsgrad und dann [das passende <a href=\"/escape-room/\">Escape Room Spiel</a>. Danach lässt du dich freiwillig einschliessen und knobelst, rätselst, rechnest und tüftelst dich anschliessend zusammen mit deinem Team zurück in die Freiheit. </p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: die ganze Familie, Mindestalter variiert je nach Spiel</li>\n</ul>\n<p><em>Swiss Activities Tipp: In der Region Aargau löst du Rätsel in kleinen Teams und kurzer Zeit. Oder du rettest sogar die Welt im <a href=\"/escape-room/escape-room-lebensrettende-beweise-aargau/\">Escape Room Niederwil</a>.</em> </p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/35_Familie_Ausflug_Schweiz_Escape_Room_Spassvogel_Event_Gmb_H_0e4ad245e4.jpg",
          "caption": "Escape Room (Foto: Spassvogel Event GmbH)",
          "alt": "Familie Ausflug Schweiz Escape Room  "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/36_Familie_Ausflug_Schweiz_Escape_Room_Spassvogel_Event_Gmb_H_5079422fcd.jpg",
          "caption": "Escape Room (Foto: Spassvogel Event GmbH)",
          "alt": "Familie Ausflug Schweiz Escape Room "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Verkehrshaus</h3>\n<p>Das beliebteste Museum der Schweiz befindet sich gleich ausserhalb von Luzern. Im Verkehrshaus erwartet dich nicht nur ganz viel Wissenswertes rund um das Thema Verkehr und Kommunikation, sondern auch das Kino mit der grössten fest installierten Leinwand der Schweiz. Zudem verfügt das Verkehrshaus über ein Planetarium, einen Teich zum Pedalofahren, ein Schokoladenmuseum, diverse Restaurants und Läden und ganz viel mehr. Da staunen nicht nur die Kleinen. Hierher lohnt sich ein Familienausflug für den ganzen Tag.</p>\n<ul>\n<li>Saison: 365 Tage im Jahr geöffnet</li>\n<li>Geeignet für: Gross und Klein. Kino und Planetarium wird ab 6 Jahren empfohlen.</li>\n</ul>\n<p><em>Swiss Activities Tipp: Von Luzern aus gelangst du <a href=\"/schifffahrten/\">per Schifffahrt</a> direkt vor die Tore des Verkehrshauses.</em> </p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/37_Familie_Ausflug_Schweiz_Gartenbahn_Kinder_Verkehrshaus_Luzern_69d4b24266.jpg",
          "caption": "Gartenbahn für Kinder (Foto: Verkehrshaus Luzern)",
          "alt": "Familie Ausflug Schweiz Gartenbahn Kinder "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/38_Familie_Ausflug_Schweiz_Schokolade_Verkehrshaus_Luzern_46b69447f1.jpg",
          "caption": "(Foto: Verkehrshaus Luzern)",
          "alt": "Familie Ausflug Schweiz Schokolade  "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Velotour</h3>\n<p>Velofahren in der Schweiz ist eindeutig etwas anstrengender als beispielsweise in Holland. Dafür wird die Anstrengung hier auf unzähligen Hügeln und Bergen mit einmaligen Panoramablicken belohnt. Und wo es rauf geht, muss es ja auch wieder runtergehen. Und das macht dann umso mehr Spass. Die Schweiz bietet über 12’000 km ausgeschilderte Velowege. Da ist bestimmt auch für dich und deine Familie etwas dabei.</p>\n<ul>\n<li>Saison: Je nach Wetter und Region ganzjährig möglich</li>\n<li>Geeignet für: die ganze Familie, abhängig von der Route und dem Alter der Kinder</li>\n</ul>\n<h3>Botanischer Garten</h3>\n<p>Lass dich von Blumen und Pflanzen in allen Formen und Farben verzaubern. Besonders an grauen Tagen tut ein Besuch im botanischen Garten richtig gut. In Zürich gibt es zum Beispiel einen neuen Garten mit futuristischen Gewächshäusern, der zur Universität gehört. Zudem findest du einen alten botanischen Garten in der Innenstadt, der 1837 angelegt wurde und noch heute durch seine Sammlung an exotischen und alten Bäumen besticht. </p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: Gross und Klein, je nach Garten auch problemlos mit dem Kinderwagen möglich</li>\n</ul>\n<p><em>Swiss Activities Tipp: In vielen botanischen Gärten ist der Eintritt gratis. So zum Beispiel in St. Gallen – oder auch in die beiden oben erwähnten in Zürich.</em> </p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/39_Botanischer_Garten_St_Gallen_Seraina_a9f24b260c.jpg",
          "caption": "Botanischer Garten St. Gallen",
          "alt": "Familie Ausflug Schweiz  Botanischer Garten St.Gallen"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/40_Botanischer_Garten_St_Gallen_Seraina_cc5feb7cf8.jpg",
          "caption": "Botanischer Garten St. Gallen",
          "alt": "Familie Ausflug Schweiz Botanischer Garten St.Gallen"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Museum</h3>\n<p>Gemäss der Museumsstatistik 2020 des Bundesamts für Kultur, verzeichnet die Schweiz rund 1129 Museen! Wer die Wahl hat, hat die Qual… Aber da es hier ja auch öfters mal regnet, lassen sich pro Jahr gut mehrere <a href=\"/museen/\">aussergewöhnliche Museen in der Schweiz</a> entdecken. Von A wie dem Alpinen Museum in Bern bis Z wie dem Zentrum der Fotografie in Winterthur ist für jedes Alter und jeden Geschmack was dabei.</p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: Jung und Alt, Gross und Klein, je nach Museum unterschiedlich</li>\n</ul>\n<p><em>Swiss Activities Tipp: Wusstest du, dass es auch Outdoor-Museen gibt? Im einzigartigen Freilichtmuseum Ballenberg findest du über 100 historische Gebäude aus der ganzen Schweiz, lernst traditionelle Kunsthandwerke kennen und kannst auf Tuchfühlung mit herzigen Bauernhoftieren gehen.</em></p>\n<h3>Burgen und Schlösser</h3>\n<p>Welches Kind träumt nicht davon, einmal Ritter, König oder Prinzessin zu sein? Und spätestens seit ‘Game of Thrones’, müsste die Begeisterung für <a href=\"/schloesser/\">Burgen und Schlösser</a> auch bei den Erwachsenen wieder gross ein. Das wohl berühmteste Schloss der Schweiz, das Chateau Chillon, befindet sich im pittoresken Montreux am Genfersee.</p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: für kleine Könige und grosse Hofnarren</li>\n</ul>\n<p><em>Swiss Activities Tipp: Du willst deinen Kleinen etwas ganz Besonderes bieten? Dann begib dich vor dem Ausflug ins nächstgelegene Brockenhaus und schau dich auf der Kinderabteilung nach Schwertern, Kronen und Perlenketten um, mit denen sich die Kinder beim Ausflug dann verkleiden dürfen.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/41_Familie_Ausflug_Schweiz_Chateau_Chillon_Genfersee_Chateau_de_Chillon_08b289fd0d.jpg",
          "caption": "Schloss am Genfersee (Foto: Château de Chillon)",
          "alt": "Familie Ausflug Schweiz Chateau Chillon Genfersee "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/42_Familie_Ausflug_Schweiz_Winter_Chateau_Chillon_Genfersee_Chateau_de_Chillon_8035f619c7.jpg",
          "caption": "Schloss im Winter (Foto: Château de Chillon)",
          "alt": "Familie Ausflug Schweiz Chateau Chillon Genfersee "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Zoo / Tierpark</h3>\n<p>Vom kleinen, bunten Schmetterling über die tollpatschigen Pinguine bis hin zu runzligen Elefanten oder stolzen Antilopen; in den Schweizer Zoos findest du eine wunderbare Vielfalt an faszinierenden Tieren. Hier wird das Bilderbuch plötzlich lebendig und der Zeigefinger wandert den ganzen Tag lang begeistert von Tier zu Tier. Einige Tierparks wie z.B. der Wildnispark Zürich, der Tierpark Biel oder der Wildpark Peter und Paul in St. Gallen sind sogar gratis.</p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: Jung und Alt</li>\n</ul>\n<p><em>Swiss Activities Tipp: Für Familien, die in der Nähe eines Zoos wohnen, lohnt sich oft eine Jahreskarte. So kannst du auch mal nur für einen kurzen Besuch vorbei. Das eine Mal zu den Zebras aus Afrika, das nächste Mal zu den Chamäleons im Dschungel. Quasi eine Expedition durch das Tierreich in Etappen...</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Ausflüge Schweiz für gemütliche Familien</h2>\n<p>Es gibt auch zahlreiche entspannende Optionen, wie du einen Tag mit deiner Familie bei Ausflügen in der Schweiz verbringen kannst.</p>\n<h3>Angeln</h3>\n<p>Mehr als 100&#39;000 Schweizer werfen mindestens an einem Tag pro Jahr die Rute aus und angeln in den Bächen, Flüssen und Seen des Landes nach Fischen. Du hast selbst noch nie einen Fisch gefangen, würdest es aber gerne mal probieren? Dann begib dich an den Forellensee in Gstaad zum Angeln oder zum Angeln in Kreuzboden in Saas-Grund und lass es dir vom Profi zeigen.</p>\n<ul>\n<li>Saison: von April bis Oktober</li>\n<li>Geeignet für: Kinder ab ca. 6 Jahren</li>\n</ul>\n<p><em>Swiss Activities Tipp: In der Schweiz gibt es diverse Gewässer, in denen nur mit Patent und Angelschein gefischt werden darf. Es lohnt sich also, vorher kurz abzuklären, wo was erlaubt ist.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/43_Familie_Ausflug_Schweiz_Fischen_Gstaad_Forellensee_Gastro_903c0140cb.jpg",
          "caption": "Fischen am Forellensee (Foto: Forellensee Gastro)",
          "alt": "Familie Ausflug Schweiz  Fischen Gstaad "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/44_Familie_Ausflug_Schweiz_Fischen_Gstaad_Forellensee_Gastro_2b76606017.jpg",
          "caption": "Mittagessen mit Familie (Foto: Forellensee Gastro) ",
          "alt": "Familie Ausflug Schweiz  Fischen Gstaad"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Abenteuerspielplätze</h3>\n<p>Wenn du mit deiner Familie raus an die frische Luft möchtest, dann bieten sich zahlreiche Abenteuerspielplätze an. Es ist dabei nicht einmal eine anstrengende Wanderung oder ein langer Spaziergang notwendig. Fahre einfach mit dem Zug, dem Bus oder der Gondel raus in die Natur und während die Kinder sich auf einem Abenteuerspielplatz austoben, geniesst du in aller Ruhe ein Picknick und ein Gläschen Wein.</p>\n<ul>\n<li>Saison: Je nach Region und Wetter unterschiedlich </li>\n<li>Geeignet für: kleine und grosse Kinder</li>\n</ul>\n<p><em>Swiss Activities Tipp: Verbringe in atemberaubender Landschaft einen unvergesslichen Tag mit der Familie auf dem Allmendhubel. Bahnticket, Mittagessen und Abenteuerspielplatz “Flower Park” sind inbegriffen.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/45_Familie_Ausflug_Schweiz_Allmendhubel_Blumen_Labyrinth_Schilthorn_5d6972cee3.jpg",
          "caption": "Blumen Labyrinth (Foto: Schilthornbahn AG)",
          "alt": "Familie Ausflug Schweiz Allmendhubel Blumen Labyrinth "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/46_Familie_Ausflug_Schweiz_Spielplatz_Schilthorn_Schilthorn_592b372251.jpg",
          "caption": "Spielplatz auf Schilthorn (Foto: Schilthornbahn AG)",
          "alt": "Familie Ausflug Schweiz Spielplatz Schilthorn "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Outdoor Fondue</h3>\n<p>Die Schweizer lieben ihr Fondue. Eine lästige Nebenwirkung von einem leckeren Fondue ist allerdings, dass danach die Haare, die Kleider und die ganze Wohnung danach riechen. Die perfekte Lösung dagegen ist ein <a href=\"/essen-und-trinken/outdoor-fondue-zermatt/\">Outdoor Fondue</a>. Mach entweder selbst ein Feuer oder suche eine von über 500 öffentlichen Feuerstellen auf. Ganz wichtig; einen guten Weisswein dazu nicht vergessen.</p>\n<ul>\n<li>Saison: Fondue schmeckt besser im Winter, aber die Geschmäcker sind bekanntlich verschieden. Daher ganzjährig möglich</li>\n<li>Geeignet für: Gross und Klein</li>\n</ul>\n<p><em>Swiss Activities Tipp: Neben übergrossen Fonduepfannen für Gruppen und überlangen Fonduegabeln, damit man nicht zu nahe an das heisse Feuer muss, gibt es sogar Extra-Schürzen. Sie sind mit einer grossen Tasche für die Brot-Mocken und einer Halterung fürs Weinglas versehen.</em></p>\n<h3>Schokoladenmuseum</h3>\n<p>Leckermäuler aufgepasst. In der Schweiz gibt es über <a href=\"/schokoladenfabrik/\">9 Schokoladenfabriken</a>, die du besuchen kannst. Im Maestrani Chocolarium begibst du dich auf einen interaktiven Erlebnis-Rundgang durch die Schokoladenfabrik, siehst den Chocolatiers beim Produzieren zu, erfährst in einem spannenden Kinofilm mehr zum Thema ‘Glück und Schokolade’ und darfst einem Show-Confiseur all deine Fragen über die Welt der Schokolade stellen. Und ja, du darfst natürlich auch ganz viel degustieren dabei. Spätestens beim Anblick des Schokoladenbrunnens fehlt nicht mehr viel bis zum Schlaraffenland. </p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: Schokoladenliebhaber jeden Alters</li>\n</ul>\n<p><em>Swiss Activities Tipp: Das Chocolarium ist die einzige Schweizer Schokoladenfabrik, die dir einen Einblick in ihre Live-Produktion gibt. In einer 80 m langen Glasgalerie siehst du direkt zu, wie beispielsweise die berühmten “Munz Prügeli” hergestellt werden.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/47_Familie_Ausflug_Schweiz_Laederach_Schokoladenfabrik_Seraina_4982a1aa17.jpg",
          "caption": "Schokoladenbrunnen Läderach",
          "alt": "Familie Ausflug Schweiz Läderach Schokoladenfabrik "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/48_Familie_Ausflug_Schweiz_Chocolarium_Schokoladenfabrik_Maestrani_Seraina_d31ad7324f.jpg",
          "caption": "Einblick in die Schokoladenfabrik ",
          "alt": "Familie Ausflug Schweiz Chocolarium Schokoladenfabrik Maestrani "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Lama- und Alpaka Trekking</h3>\n<p>Erst kam das Einhorn, dann der Flamingo – und nun können wir alle nicht genug kriegen von den knuffigen, herzigen Lamas und Alpakas. Wie toll, dass du nicht mehr bis Peru reisen musst, um mit den flauschigen Tieren auf Tuchfühlung zu gehen. Wie wäre es zum Beispiel mit einem <a href=\"/lama-und-alpakatrekking/\">Lama und Alpaka Trekking</a> in Liechtenstein? </p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: Wanderspass für Gross und Klein</li>\n</ul>\n<p><em>Swiss Activities Tipp: Lamas und Alpakas gelten als sehr kontaktfreudig und freuen sich über menschliche Begleitung. Vor allem Kinder haben mit den Tieren eine Menge Spass. Und keine Angst; Lamas und Alpakas spucken vor allem untereinander; du solltest also sicher sein.</em></p>\n<h3>Schifffahrt</h3>\n<p>Was gibt es Schöneres, als gemütlich vom Schiff aus die herrlichsten Küsten, Bergpanoramen und Landschaften der Schweiz zu bestaunen? <a href=\"/schifffahrten/\">Schifffahrten</a> gibt es auf zahlreichen Seen und Flüssen in der Schweiz – unter anderem auf dem Genfersee, dem Neuenburgersee, dem Thuner- und Brienzersee, auf dem Vierwaldstättersee, dem Bodensee und vielen mehr. Du hast also die Qual der Wahl, mit welchem Gewässer du beginnen willst...</p>\n<ul>\n<li>Saison: Ganzjährig</li>\n<li>Geeignet für: die ganze Familie</li>\n</ul>\n<p><em>Swiss Activities Tipp: Den besten Blick aufs Schloss Chillon hast du eindeutig vom Wasser aus. Also kombiniere deinen Besuch dort am besten gleich mit einer <a href=\"/schifffahrten/\">Schifffahrt</a> auf dem Genfersee.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/49_Familie_Ausflug_Schweiz_Schiff_Thunersee_Seraina_9c8de3d606.jpg",
          "caption": "Schifffahrt auf dem Thunersee",
          "alt": "Familie Ausflug Schweiz Schiff Thunersee "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/50_Familie_Ausflug_Schweiz_Dampfschiff_Gallia_Vierwaldstaettersee_SGV_2aa5d7b358.jpg",
          "caption": "Dampfschiff Gallia ",
          "alt": "Familie Ausflug Schweiz Dampfschiff Gallia Vierwaldstättersee - SGV"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Bergbahnen</h3>\n<p>Wusstest du, dass es mehr als 300 Bergbahnen in der Schweiz gibt? Sie bringen dich nicht nur im Winter zum Skifahren in die Berge, sondern das ganze Jahr über auch zum <a href=\"/wandern/\">Wandern</a> oder Biken. Wenn du mit deiner Familie also nicht aus Eigenantrieb auf den Gipfel steigen magst, könnt ihr mit der Bergbahn wunderbar entspannt entweder vom Tal zum Gipfel gelangen oder umgekehrt.</p>\n<ul>\n<li>Saison: Je nach Region unterschiedlich </li>\n<li>Geeignet für: Familien (Kinder meist nur in Begleitung Erwachsener)</li>\n</ul>\n<p><em>Swiss Activities Tipp: Mit der <a href=\"/rigi/rigi-bahn-ticket/\">Tageskarte der Rigi Bergbahnen</a> hast du mit deiner Familie unlimitierten Zugang zu allen Bahnen auf die Königin der Berge. Dazu gehören zwei Zahnradbahnen, wobei eine die älteste Bergbahn Europas ist, und zwei Seilbahnen.</em></p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/51_Familie_Ausflug_Schweiz_Allmendhubel_Schilthorn_Bahn_Schilthorn_0c30d7a5ba.jpg",
          "caption": "Standseilbahn (Foto: Schilthornbahn AG)",
          "alt": "Familie Ausflug Schweiz Allmendhubel Schilthorn Bahn "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/52_Familie_Ausflug_Schweiz_Titlis_Bergbahn_Rotair_Titlis_Bergbahnen_0b75cbce3c.jpg",
          "caption": "(Foto: Titlis Bergbahnen)",
          "alt": "Familie Ausflug Schweiz Titlis Bergbahn Rotair "
        }
      ],
      "youtubeUrl": null
    }
  ]
} satisfies TGatewayHome;
