import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewPointOfInterestResponse = {
  "context": {
    "type": "point-of-interest",
    "id": "39",
    "title": "Rigi",
    "slug": "rigi",
    "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_83a74a4369c5ac807b486738265ab967_102a3d534a_1_6d5a9bcc82.jpeg",
    "lat": 47.0556684,
    "lng": 8.4848268
  },
  "staticSections": [
    {
      "id": "poi_hero",
      "component": "hero",
      "title": "Rigi",
      "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_83a74a4369c5ac807b486738265ab967_102a3d534a_1_6d5a9bcc82.jpeg",
      "description": null
    },
    {
      "id": "poi_filters",
      "component": "filters",
      "endpoint": "/app/v1/pois/rigi/filter",
      "items": [],
      "groups": [
        {
          "id": "interests",
          "type": "checkbox",
          "title": "Interessen",
          "param": "tags",
          "options": [
            {
              "id": "tag:adventure",
              "label": "Abenteuer",
              "value": "adventure",
              "count": 130,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:exercise",
              "label": "Bewegung",
              "value": "exercise",
              "count": 98,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 84,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:sightseeing",
              "label": "Sehenswürdigkeiten",
              "value": "sightseeing",
              "count": 78,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:driving_fun",
              "label": "Fahrspass",
              "value": "driving_fun",
              "count": 20,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:learning",
              "label": "Lernen",
              "value": "learning",
              "count": 6,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:food",
              "label": "Essen",
              "value": "food",
              "count": 3,
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
              "id": "tag:fair_weather",
              "label": "Schönwetter",
              "value": "fair_weather",
              "count": 126,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:snow_required",
              "label": "Schnee erforderlich",
              "value": "snow_required",
              "count": 44,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:hot_weather",
              "label": "Heisses Wetter",
              "value": "hot_weather",
              "count": 29,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:any",
              "label": "Any",
              "value": "any",
              "count": 6,
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
              "id": "tag:summer",
              "label": "Sommer",
              "value": "summer",
              "count": 149,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:spring",
              "label": "Frühling",
              "value": "spring",
              "count": 118,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:autumn",
              "label": "Herbst",
              "value": "autumn",
              "count": 118,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:winter",
              "label": "Winter",
              "value": "winter",
              "count": 45,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:year_round",
              "label": "Ganzjährig",
              "value": "year_round",
              "count": 8,
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
              "count": 79,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:families",
              "label": "Familien",
              "value": "families",
              "count": 76,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:solo",
              "label": "Alleinreisende",
              "value": "solo",
              "count": 32,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:teens",
              "label": "Jugendliche",
              "value": "teens",
              "count": 23,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:couples",
              "label": "Paare",
              "value": "couples",
              "count": 13,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:adults_only",
              "label": "Nur Erwachsene",
              "value": "adults_only",
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
              "count": 80,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:full_day",
              "label": "Ganzer Tag",
              "value": "full_day",
              "count": 49,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:half_day",
              "label": "Halber Tag",
              "value": "half_day",
              "count": 30,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:under_1h",
              "label": "Unter 1 Std.",
              "value": "under_1h",
              "count": 6,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:multi_day",
              "label": "Mehrtägig",
              "value": "multi_day",
              "count": 3,
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
              "count": 58,
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
              "count": 107,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:budget",
              "label": "Budget",
              "value": "budget",
              "count": 21,
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
      "id": "weather_card",
      "component": "weather_card",
      "title": "Rigi",
      "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_83a74a4369c5ac807b486738265ab967_102a3d534a_1_6d5a9bcc82.jpeg",
      "data": [
        {
          "date": "2026-06-09",
          "day": "Heute",
          "dayFull": "Heute",
          "tempMin": 6,
          "tempMax": 7,
          "icon": "rainy",
          "description": "Leichter Regen"
        },
        {
          "date": "2026-06-10",
          "day": "Mi",
          "dayFull": "Mittwoch",
          "tempMin": 4,
          "tempMax": 6,
          "icon": "rainy",
          "description": "Regen"
        },
        {
          "date": "2026-06-11",
          "day": "Do",
          "dayFull": "Donnerstag",
          "tempMin": 3,
          "tempMax": 9,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-12",
          "day": "Fr",
          "dayFull": "Freitag",
          "tempMin": 6,
          "tempMax": 11,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-13",
          "day": "Sa",
          "dayFull": "Samstag",
          "tempMin": 8,
          "tempMax": 16,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-14",
          "day": "So",
          "dayFull": "Sonntag",
          "tempMin": 7,
          "tempMax": 17,
          "icon": "sunny",
          "description": "Meist klar"
        },
        {
          "date": "2026-06-15",
          "day": "Mo",
          "dayFull": "Montag",
          "tempMin": 7,
          "tempMax": 18,
          "icon": "sunny",
          "description": "Meist klar"
        }
      ]
    },
    {
      "id": "reviews",
      "component": "carousel",
      "title": "Von Reisenden wie dir",
      "data": [
        {
          "id": "12340",
          "type": "review",
          "title": "Beatenberg Gleitschirmfliegen Tandem ab Interlaken",
          "activityId": "346",
          "bookingActivityId": 108,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/37f230b87aaf197d0213fb0538fefd64.jpg",
          "path": "/paragliding/gleitschirmfliegen-tandem-beatenberg-interlaken/",
          "rating": 5,
          "body": "Sehr freundlicher, kompetenter Pilot. Unglaubliche Erfahrung. Ich habe mich sehr sicher und gut aufgehoben gefühlt.",
          "reviewerName": "Lea",
          "reviewerCountry": "CH"
        },
        {
          "id": "12334",
          "type": "review",
          "title": "Ticket Brienz Rothorn Bahn",
          "activityId": "1060",
          "bookingActivityId": 859,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/da71e0ba6195993835a5c992c661d6d5.jpg",
          "path": "/brienzer-rothorn/ticket-brienzer-rothorn-bahn-retour/",
          "rating": 5,
          "body": "Wir hatten zum Glück schönes Wetter und konnten während der Fahrt auf den Brienzersee schauen. Die Mitarbeitenden waren stets freundlich. Einziges Manko war, dass auf der Homepage 3–4 Stunden angegeben sind, wir aber nur 1,2 Stunden hatten und nicht in Planalp aussteigen durften.",
          "reviewerName": "Thomas",
          "reviewerCountry": "CH"
        },
        {
          "id": "12082",
          "type": "review",
          "title": "Tontaubenschiessen in Bülach",
          "activityId": "91249",
          "bookingActivityId": 2794,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5c7c477237b3a1f9a67a65e29e04ff44.jpg",
          "path": "/schiess-und-wurf-sport/tontauben-schiessen-buelach/",
          "rating": 5,
          "body": "Roman ist ein super Instruktor und das Erlebnis war richtig cool. Absolut empfehlenswert!",
          "reviewerName": "Dario Akhavan Safa",
          "reviewerCountry": "CH"
        },
        {
          "id": "11949",
          "type": "review",
          "title": "Indoor Erlebnispaket Schiessen am Zürichsee",
          "activityId": "133613",
          "bookingActivityId": 3129,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/18444f04a10d4ad6c20370e40b9a708a.jpg",
          "path": "/schiess-und-wurf-sport/schiessen-indooranlage-zuerich/",
          "rating": 5,
          "body": "The girl who attended us was amazing, really nice and gave us warm, pleasant treatment and clear explanations of everything needed to have a fantastic experience.",
          "reviewerName": "Pau ",
          "reviewerCountry": "CH"
        },
        {
          "id": "11774",
          "type": "review",
          "title": "Paragliding Grindelwald ab First",
          "activityId": "320",
          "bookingActivityId": 82,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_4d4fcf80f5.jpg",
          "path": "/paragliding/paragliding-grindelwald-first/",
          "rating": 5,
          "body": "Toller Flug mit Pilot Seb.",
          "reviewerName": "Ellie Sik Yin",
          "reviewerCountry": "CH"
        },
        {
          "id": "11658",
          "type": "review",
          "title": "Helikopter Flug Gletscher mit Apéro ab Interlaken",
          "activityId": "87658",
          "bookingActivityId": 2654,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/340444bbe4bcca372e3bb1655ceb569c.jpg",
          "path": "/rundflug/helikopter-rundflug-gletscher-gsteigwiler-interlaken/",
          "rating": 5,
          "body": "Unglaubliche Reise. Total episch. Merci vielmal!",
          "reviewerName": "Simon",
          "reviewerCountry": "CH"
        }
      ]
    },
    {
      "id": "poi_activities",
      "component": "activity_grid",
      "title": "Aktivitäten in der Nähe von Rigi",
      "data": [
        {
          "id": "373",
          "type": "activity",
          "bookingActivityId": 135,
          "title": "Ab Zürich: Tagestour auf die Rigi",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Luftseilbahn_Rigi_Best_of_Switzerland_Tours_54cf2f4b06.jpg",
          "subtitle": "Zürich",
          "priceFormatted": "CHF 150",
          "startingPrice": {
            "amount": 150,
            "currency": "CHF",
            "formatted": "CHF 150"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/rigi/tagestour-rigi-ab-zuerich/",
          "webPath": "/rigi/tagestour-rigi-ab-zuerich/",
          "distanceKm": 36.3,
          "lat": 47.3804368,
          "lng": 8.537723699999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Luftseilbahn_Rigi_Best_of_Switzerland_Tours_54cf2f4b06.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Bergbahn_Rigi_Best_of_Switzerland_Tours_d58b5dbd1c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rigi_Zahnradbahn_Best_of_Switzerland_Tours_7230ed98df.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_gallery_2790d0ec4309edbe917b5528e196d512_5fd6bf1e39.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kuehe_Best_of_Switzerland_Tours_1861fb5978.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kulm_Restaurant_Rigi_Best_of_Switzerland_Tours_d9421352ab.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_gallery_7197b0ac84ee3476333d43a4a4bd59a1_a84dabf651.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Luzern_Schifffahrt_Best_of_Switzerland_Tours_de43728a02.jpg"
          ]
        },
        {
          "id": "345",
          "type": "activity",
          "bookingActivityId": 107,
          "title": "Rigi Tageskarte",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8c605d0571978c9b713cb23bd1bd5452.jpg",
          "subtitle": "Arth-Goldau",
          "priceFormatted": "CHF 39",
          "startingPrice": {
            "amount": 39,
            "currency": "CHF",
            "formatted": "CHF 39"
          },
          "rating": 4.75,
          "reviewCount": 243,
          "path": "/rigi/rigi-bahn-ticket/",
          "webPath": "/rigi/rigi-bahn-ticket/",
          "distanceKm": 5,
          "lat": 47.0490455,
          "lng": 8.5494481,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8c605d0571978c9b713cb23bd1bd5452.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/06e6361b616fde40e69ee69cff805e33.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d3f43f537e4e3eb002122bfd55d289df.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1c00004f13d260657b986bcbe655b9a6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c2f8e1fad77962b187de30509d0a1d22.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ca5dd903b02ee4dae662114c13b2ae8d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/dace3658bbf58ced8f5ffc9aa9489754.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/932481b6e0b3a4f9073f4e6c039cfca4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/02cc6eee0037d85fd88326fbf476d033.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/84c5d751ea20164fb6e886e8a8612c74.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/92fdac67b399760ea9bc1a3bc5db992e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b06422f67e11bb513fd794c94b6c9d7e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/47d558385a0f30de34a69a6889b674e6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2c4125a514a26d4325b52b8f1739765f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4822853b957fdee8275bdd384f180727.jpg"
          ]
        },
        {
          "id": "367",
          "type": "activity",
          "bookingActivityId": 129,
          "title": "Ab Luzern: Rigi Rundfahrt inkl. Schiff und Bahn",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_301225097c.jpg",
          "subtitle": "Luzern",
          "priceFormatted": "CHF 144",
          "startingPrice": {
            "amount": 144,
            "currency": "CHF",
            "formatted": "CHF 144"
          },
          "rating": 4.83,
          "reviewCount": 6,
          "path": "/rigi/tagestour-rigi-ab-luzern/",
          "webPath": "/rigi/tagestour-rigi-ab-luzern/",
          "distanceKm": 13.3,
          "lat": 47.0495111,
          "lng": 8.3088757,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_301225097c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rigi_Zahnradbahn_Best_of_Switzerland_Tours_446ac76d84.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_gallery_0254cf38292bb363d7e260c8938d012a_f572734d04.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Luftseilbahn_Rigi_Best_of_Switzerland_Tours_072747e0cc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kuehe_Best_of_Switzerland_Tours_a06ce4ad66.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_gallery_dde4639369441c9e102f768ad18addf3_61984f8ec5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_gallery_38e545f5984924624e975e95e1d8a9b0_1ae74d9d01.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kulm_Restaurant_Rigi_Best_of_Switzerland_Tours_66a8cda0fe.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Luzern_Schifffahrt_Best_of_Switzerland_Tours_8619b675b4.jpg"
          ]
        },
        {
          "id": "962",
          "type": "activity",
          "bookingActivityId": 763,
          "title": "Rigi Rundfahrt mit Schiff und Bahn ab Luzern selbstgeführt",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/fb47b3b1731a32daecc98e921b852c78.jpg",
          "subtitle": "Luzern",
          "priceFormatted": "CHF 69",
          "startingPrice": {
            "amount": 69,
            "currency": "CHF",
            "formatted": "CHF 69"
          },
          "rating": 4.85,
          "reviewCount": 40,
          "path": "/rigi/rigi-koenigliche-rundreise/",
          "webPath": "/rigi/rigi-koenigliche-rundreise/",
          "distanceKm": 13.2,
          "lat": 47.051433424317615,
          "lng": 8.310121893882751,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/fb47b3b1731a32daecc98e921b852c78.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/c17fba7ce508457deb50fbdb28629ab2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/91e45fea7d33aef0ace46cfad20c6c05.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/c16a3bd40e586590ce8e48a6e7deee9c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/e2a366e4dd20e8ff4746ccfc7579a3fa.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/06cbd43b47dd94b9d5f3361dca62b171.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/51c307df4b7f02597519332cbdfd08d6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/cd4ccdb89ee3d55002477bc09093150a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/ab690a6659e2d1e18684ecf27d9e82f0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/72dad951f06b9e21c2ed4b1696bfe45d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/b969c6c60d68a701ed1a75afba4f810b.jpg"
          ]
        },
        {
          "id": "88719",
          "type": "activity",
          "bookingActivityId": 2698,
          "title": "Ticket Seilpark Rigi  ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/116bc84360a184297c3c54b564ca7cf4.jpg",
          "subtitle": "Küssnacht am Rigi",
          "priceFormatted": "CHF 33.50",
          "startingPrice": {
            "amount": 33.5,
            "currency": "CHF",
            "formatted": "CHF 33.50"
          },
          "rating": 5,
          "reviewCount": 1,
          "path": "/seilpark-rigi/ticket-seilpark-rigi/",
          "webPath": "/seilpark-rigi/ticket-seilpark-rigi/",
          "distanceKm": 3.7,
          "lat": 47.0767854,
          "lng": 8.447586,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/116bc84360a184297c3c54b564ca7cf4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/83d340699f26b70e4413e3b3ba9de8c1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b2421b9ef6561fc1ad725287c97ed4d5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c874e557ae3721cc5bbb2cb3ffbe826f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/98ea39bb90b0d01c7f219e1a56a018a3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f7211b82237f5213e0bfd0f53fed0146.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c0ba6c1bb314e01dafed09ff9bc078ea.jpg"
          ]
        },
        {
          "id": "2221",
          "type": "activity",
          "bookingActivityId": 1986,
          "title": "Seebodenalp Ticket Luftseilbahn ab Küssnacht",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Seebodenalp_Bahn_Kuessnacht_ZUE_3830_c_zuerrer_85050828d0.jpg",
          "subtitle": "Küssnacht am Rigi",
          "priceFormatted": "CHF 15",
          "startingPrice": {
            "amount": 15,
            "currency": "CHF",
            "formatted": "CHF 15"
          },
          "rating": 5,
          "reviewCount": 1,
          "path": "/seebodenalp/seebodenalp-seilbahn-ticket-kuessnacht/",
          "webPath": "/seebodenalp/seebodenalp-seilbahn-ticket-kuessnacht/",
          "distanceKm": 4.1,
          "lat": 47.0760958,
          "lng": 8.439865100000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Seebodenalp_Bahn_Kuessnacht_ZUE_3830_c_zuerrer_85050828d0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_ZUE_3848_c_zuerrer_4f798313a2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_ZUE_3901_c_zuerrer_94a6e8bf67.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_ZUE_3944_c_zuerrer_37cd009733.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_ZUE_3978_c_zuerrer_63d2621915.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_ZUE_3982_c_zuerrer_cd73744f52.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_ZUE_3989_c_zuerrer_c40a8981e2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_ZUE_3859_c_zuerrer_e1cef37623.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_DJI_0293_c_zuerrer_a7233fe6f5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Seebodenalp_Bahn_Kuessnacht_DJI_0294_c_zuerrer_f5d9ed0ce1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Titelbild_Sommerkarte_78f3b1ab37.jpg"
          ]
        },
        {
          "id": "1751",
          "type": "activity",
          "bookingActivityId": 1533,
          "title": "Rigi Paragliding Tandemflug ab Arth-Goldau",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Rigi_2_04017c1cba.jpg",
          "subtitle": "Arth-Goldau",
          "priceFormatted": "CHF 225",
          "startingPrice": {
            "amount": 225,
            "currency": "CHF",
            "formatted": "CHF 225"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/paragliding/rigi-tandemflug-paragliding/",
          "webPath": "/paragliding/rigi-tandemflug-paragliding/",
          "distanceKm": 4.8,
          "lat": 47.0491739,
          "lng": 8.5477978,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Rigi_2_04017c1cba.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rigi_1_9056f31706.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rigi_4_7361352232.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5280718fd4387427ec34b8464bcd9ee7.JPG"
          ]
        },
        {
          "id": "989",
          "type": "activity",
          "bookingActivityId": 790,
          "title": "Rigi Gleitschirmfliegen Tandem ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Tandem_Gleitschirmflug_Rigi_Zurich_Paragliding_3_f0a63cbb4d.jpg",
          "subtitle": "Arth-Goldau",
          "priceFormatted": "CHF 260",
          "startingPrice": {
            "amount": 260,
            "currency": "CHF",
            "formatted": "CHF 260"
          },
          "rating": 5,
          "reviewCount": 1,
          "path": "/paragliding/panorama-tandem-gleitschirmflug-rigi/",
          "webPath": "/paragliding/panorama-tandem-gleitschirmflug-rigi/",
          "distanceKm": 4.8,
          "lat": 47.0491739,
          "lng": 8.5477978,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Tandem_Gleitschirmflug_Rigi_Zurich_Paragliding_3_f0a63cbb4d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Rigi_Zurich_Paragliding_2_fc306d362e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Rigi_Zurich_Paragliding_d330ef1459.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_5_d7ca68c689.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_6_774ebdf3dc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_7_3b071cf992.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_8_900b4d85df.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_10_8c3aac52f9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_11_954acc6f10.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_12_c95fc52698.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_13_07e8b2033e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_14_d3f000b4c7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_16_5a4e06a539.jpg"
          ]
        },
        {
          "id": "2151",
          "type": "activity",
          "bookingActivityId": 1917,
          "title": "Panorama Tandemflug in der Zentralschweiz",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Touch_and_Go_Paragliding_9_18be188f1a.JPG",
          "subtitle": "Arth-Goldau",
          "priceFormatted": "CHF 260",
          "startingPrice": {
            "amount": 260,
            "currency": "CHF",
            "formatted": "CHF 260"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/paragliding/panorama-tandem-paragliding-zentralschweiz/",
          "webPath": "/paragliding/panorama-tandem-paragliding-zentralschweiz/",
          "distanceKm": 5,
          "lat": 47.0490455,
          "lng": 8.5494481,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Touch_and_Go_Paragliding_9_18be188f1a.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_4_8238e7d903.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_1_918ae19a24.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_5_5cb2b1369c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_18_7619070ac5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_19_91df40894d.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_6_fa7cfb378c.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_8_82752466b6.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Touch_and_Go_Paragliding_7_1e33db4612.JPG"
          ]
        },
        {
          "id": "43852",
          "type": "activity",
          "bookingActivityId": 2295,
          "title": "Winter Kajak Trip Vierwaldstättersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c99eaef6c9909794c9c5f7421e7ff258.JPG",
          "subtitle": "Buochs",
          "priceFormatted": "CHF 135",
          "startingPrice": {
            "amount": 135,
            "currency": "CHF",
            "formatted": "CHF 135"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/kajak/winter-kajak-trip-vierwaldstaettersee/",
          "webPath": "/kajak/winter-kajak-trip-vierwaldstaettersee/",
          "distanceKm": 9.9,
          "lat": 46.9788048,
          "lng": 8.419664599999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c99eaef6c9909794c9c5f7421e7ff258.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/34fe53d5eb32a35c5be89cdc2625fa90.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a1771dd965f5ac1b00162e5bd0db8ac0.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/397aceab46dd2fb6b75fa59cc85dfb97.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/94d09805fcd98f68da76394a46d418fc.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5a01c5e799098a789b2dece7c6c7854b.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cf1e7d0cf7e574ceb35417b17660b1da.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4e1a629daa662942d9fd9fc268da4d5d.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0823218067ef55f9fd52cc048a49c2b4.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e4045ea2ca84106d79e9e326631b1079.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1ee366494239488687d6f0a286308cdb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2527e6fa0e7e27f336724ef8229bb7c8.JPG"
          ]
        },
        {
          "id": "35149",
          "type": "activity",
          "bookingActivityId": 2227,
          "title": "Klewenalp Ticket ab Beckenried",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/554ab0474b54538e5a548d7f86d91770.jpg",
          "subtitle": "Beckenried",
          "priceFormatted": "CHF 26",
          "startingPrice": {
            "amount": 26,
            "currency": "CHF",
            "formatted": "CHF 26"
          },
          "rating": 4.75,
          "reviewCount": 4,
          "path": "/klewenalp/ticket-beckenried-klewenalp/",
          "webPath": "/klewenalp/ticket-beckenried-klewenalp/",
          "distanceKm": 10,
          "lat": 46.966353,
          "lng": 8.473058,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/554ab0474b54538e5a548d7f86d91770.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cbf4fce4e0ccb588bbc8c5d48dc29c5a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/19371b8d4844e83869c1b21ea95aaf81.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/47e713b531babd76860953057d023001.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4611f7f2fc8be0b6c6b553e3025f9435.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/013eb28d29a5b1385cf4be95b8788626.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/56639e99563bf7df70688242c0bc1252.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/bd56acc124f59c19d6ceef4949ecde4d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5591032a05e9df3bacd54226d76a0157.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d3e07cd1c567168388ab3ca5a625da37.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6804b67d3cb62edd3a5f38ba97c30dd9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fefc90ca3c6fb052459bb265c0de08a0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e55c0ba7918aa84a1930c85557ef036a.jpeg"
          ]
        },
        {
          "id": "91375",
          "type": "activity",
          "bookingActivityId": 2800,
          "title": "Seekajak oder Kanadier Miete Vierwaldstättersee ab Brunnen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d35706cfb58eab3b4fc8c4ab313b7714.jpg",
          "subtitle": "Brunnen-Ingenbohl",
          "priceFormatted": "CHF 66",
          "startingPrice": {
            "amount": 66,
            "currency": "CHF",
            "formatted": "CHF 66"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/kajak/kanuverleih-vierwaldstaettersee/",
          "webPath": "/kajak/kanuverleih-vierwaldstaettersee/",
          "distanceKm": 11,
          "lat": 46.994844,
          "lng": 8.599109,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d35706cfb58eab3b4fc8c4ab313b7714.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c7c2bc29a2162303c1cbe853d7fc4dd2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c248b82a55768338cb382c48e7c59851.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/16ed2ee7b49a8cecbdcfc9db37c9bc59.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b72b735da46005f116c00ec10b21ccbf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/eecb69f44a0aa98e9f2c111be2b01a66.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c7ca9073fd8a08d9579a788d4e40646c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cc567dc8671d4d4c34e87277b761aee4.jpg"
          ]
        },
        {
          "id": "901",
          "type": "activity",
          "bookingActivityId": 714,
          "title": "Zugerberg Gleitschirmfliegen Tandem",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/G0112691_9e81404cda.JPG",
          "subtitle": "Zug",
          "priceFormatted": "CHF 200",
          "startingPrice": {
            "amount": 200,
            "currency": "CHF",
            "formatted": "CHF 200"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/paragliding/gleitschirmfliegen-tandem-am-zugerberg/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-am-zugerberg/",
          "distanceKm": 11,
          "lat": 47.1513938,
          "lng": 8.5212172,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/G0112691_9e81404cda.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Engelberg_0f0684d3c1.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Your_screen_1920x1080_1024x576_825cebfabc.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_G0083262_73039c919d.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_G0133316_3cedc044ef.JPG"
          ]
        },
        {
          "id": "66775",
          "type": "activity",
          "bookingActivityId": 2561,
          "title": "Waldbaden (Shinrin Yoku) ab Zug",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5370f7c069643845befc7d23376dde85.jpg",
          "subtitle": "Zug",
          "priceFormatted": "CHF 89",
          "startingPrice": {
            "amount": 89,
            "currency": "CHF",
            "formatted": "CHF 89"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/wandern/waldbaden/",
          "webPath": "/wandern/waldbaden/",
          "distanceKm": 11,
          "lat": 47.1515625,
          "lng": 8.5209375,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5370f7c069643845befc7d23376dde85.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ddcc466b86207e1eb7e1d8232960be0d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e1652072fa5d9abbd00101d96e87e9ef.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d1871a4ba735daed6239eb5484020d85.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/264142aa8ed146c39fc8adf9c24f9dc6.jpg"
          ]
        },
        {
          "id": "32367",
          "type": "activity",
          "bookingActivityId": 2062,
          "title": "Luzern Gleitschirmfliegen Thermikflug",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/571ddb42d29d99393fbe67f77893c238.JPG",
          "subtitle": "Emmetten",
          "priceFormatted": "CHF 245",
          "startingPrice": {
            "amount": 245,
            "currency": "CHF",
            "formatted": "CHF 245"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/paragliding/gleitschirmfliegen-thermikflug-luzern/",
          "webPath": "/paragliding/gleitschirmfliegen-thermikflug-luzern/",
          "distanceKm": 11.4,
          "lat": 46.9562371,
          "lng": 8.5192871,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/571ddb42d29d99393fbe67f77893c238.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0eaeddf2bbdcb1f9706d0a48ea74ac1d.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/bfc8be228d83d5bc76478dae3fe36570.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/11b10707b01992130e342aa9fe503de7.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/d475ed37be70c82e8dfd6cec74eef713.jpeg"
          ]
        },
        {
          "id": "32419",
          "type": "activity",
          "bookingActivityId": 2075,
          "title": "“Panoramaflug” Gleitschirm Vierwaldstättersee ab Emmetten",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/b615299a6a261fdca77bc8b092a94402.JPG",
          "subtitle": "Emmetten",
          "priceFormatted": "CHF 180",
          "startingPrice": {
            "amount": 180,
            "currency": "CHF",
            "formatted": "CHF 180"
          },
          "rating": 5,
          "reviewCount": 2,
          "path": "/paragliding/paragliding-panorama-zentralschweiz-emmetten/",
          "webPath": "/paragliding/paragliding-panorama-zentralschweiz-emmetten/",
          "distanceKm": 11.4,
          "lat": 46.9558456,
          "lng": 8.5188939,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/b615299a6a261fdca77bc8b092a94402.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/d0af0b854ff12781b5198aa50331905a.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/014676ecb45916376a26cc2efe11a340.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/34821583ced780382f06f1bcf73e28ca.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/b44ec397872cac63437bb8fa53f4fa6a.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/dcf7d025e951468a6431d3da89d56e45.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/68f691a34d73081319e0bcb08f9860a0.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/4fd0be0c756e7f8cac0d3a51f4a41598.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/9990eb4cf653bebd7be794a8eb2c1c97.JPG"
          ]
        },
        {
          "id": "48996",
          "type": "activity",
          "bookingActivityId": 2504,
          "title": "Ticket Laternenweg Sattel-Hochstuckli",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/55a346ab54e0922f2cc1e378ac0debfa.jpg",
          "subtitle": "Sattel",
          "priceFormatted": "CHF 30",
          "startingPrice": {
            "amount": 30,
            "currency": "CHF",
            "formatted": "CHF 30"
          },
          "rating": 5,
          "reviewCount": 4,
          "path": "/sattel-hochstuckli/ticket-laternenweg-sattel-mostelberg/",
          "webPath": "/sattel-hochstuckli/ticket-laternenweg-sattel-mostelberg/",
          "distanceKm": 11.6,
          "lat": 47.0785472,
          "lng": 8.634498599999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/55a346ab54e0922f2cc1e378ac0debfa.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ea4cdcd368eaf3f61207805cadba7268.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9d7a0e5a3668e0afb48ed42569056c17.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2f9e111eddbc5a34b3c0f143507e229f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6f0d09fced9255ff27ac9062b2a59353.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e1ebda9d22c20d873817111e4474d129.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f4f02d46289b4363ed51e0c1d959f487.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0d1fdb32ba85d2071e24315ed676206a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5027a609b4270118aeecfd7febaa2d79.JPG"
          ]
        },
        {
          "id": "1342",
          "type": "activity",
          "bookingActivityId": 1127,
          "title": "Ab Luzern: Rafting-Abenteuer auf der Lütschine in Interlaken  ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/csm_interlaken_rafting_adventure_lutschine_river_273460c9ab_e10dbd314b.jpg",
          "subtitle": "Luzern",
          "priceFormatted": "CHF 250",
          "startingPrice": {
            "amount": 250,
            "currency": "CHF",
            "formatted": "CHF 250"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/rafting/rafting-abenteuer-interlaken-luzern/",
          "webPath": "/rafting/rafting-abenteuer-interlaken-luzern/",
          "distanceKm": 12.8,
          "lat": 47.0467,
          "lng": 8.3159698,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/csm_interlaken_rafting_adventure_lutschine_river_273460c9ab_e10dbd314b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_rafting_adventure_lutschine_river_1_6eef8f2fdb_18a3675028.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_hoheweg_victoria_jungfrau_hotel_fc6f3c00c5_8cc31773df.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_kursaal_casino_d81514e014_97179f943e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_rafting_adventure_lutschine_river_2_4b4c3a7f85_f59411742c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_rafting_adventure_lutschine_river_3_b5a6060b6f_1db73140eb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_rafting_adventure_lutschine_river_4_f67e72e1ce_3bfc853ebf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_rafting_adventure_lutschine_river_5_08c64b41e9_a4c6e26ad1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_csm_interlaken_village_aerial_view_b07bb56b31_74c3a929f0.jpg"
          ]
        },
        {
          "id": "289",
          "type": "activity",
          "bookingActivityId": 51,
          "title": "Bürgenstock wandern ab Luzern",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_c958f993b5.jpg",
          "subtitle": "Luzern",
          "priceFormatted": "CHF 220",
          "startingPrice": {
            "amount": 220,
            "currency": "CHF",
            "formatted": "CHF 220"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/wandern/wanderung-buergenstock-ab-luzern/",
          "webPath": "/wandern/wanderung-buergenstock-ab-luzern/",
          "distanceKm": 13.2,
          "lat": 47.050799,
          "lng": 8.310842400000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_c958f993b5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_gallery_8557e278624ad6754348419a8de83238_2214f3e4c1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_golden_autumn_2871837_6489eccfd9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_mountains_2871806_1920_ff48a32a11.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_gallery_bdd917e2bd36f1ab13a134137d41b3cb_739cccb54a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_5182_4197d3b469.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_switzerland_6248306_9d6355cd12.jpg"
          ]
        },
        {
          "id": "32483",
          "type": "activity",
          "bookingActivityId": 2091,
          "title": "Geführte Wanderung auf den Pilatus mit Grillerlebnis – inklusive Pilatus Ticket",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f29cf33a78e410d0402da077a008ccb3.jpg",
          "subtitle": "Luzern",
          "priceFormatted": "CHF 190",
          "startingPrice": {
            "amount": 190,
            "currency": "CHF",
            "formatted": "CHF 190"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/wandern/wanderung-pilatus-mittagessen-gefuehrt/",
          "webPath": "/wandern/wanderung-pilatus-mittagessen-gefuehrt/",
          "distanceKm": 13.3,
          "lat": 47.0495874,
          "lng": 8.3096123,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f29cf33a78e410d0402da077a008ccb3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6dc8b8528ba620ebad5c8bf154edb826.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9f7e29f7e723f929ca0d8e2909f3a10f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/75342e3d36daf8f0b293ca2d5ce8e2db.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/58b3d5ebfd695b6985b1cb5c8dbd3e0e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/efd6f2bb60d130332a60a8ecce6880b3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d5c74c476f963b7f3b65f8e4a414ed09.jpg"
          ]
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "perPage": 20,
          "total": 210,
          "hasMore": true
        }
      }
    }
  ]
} satisfies TGatewayHome;
