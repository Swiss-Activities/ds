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
      "breadcrumbs": [
        {
          "label": "Schweiz",
          "href": "/freizeitaktivitaeten/"
        },
        {
          "label": "Region Luzern - Vierwaldstättersee",
          "href": "/region-luzern-vierwaldstaettersee/"
        },
        {
          "label": "Arth-Goldau",
          "href": "/arth-goldau/"
        },
        {
          "label": "Rigi",
          "href": "/rigi/"
        }
      ],
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
              "count": 129,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:exercise",
              "label": "Bewegung",
              "value": "exercise",
              "count": 97,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 85,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:sightseeing",
              "label": "Sehenswürdigkeiten",
              "value": "sightseeing",
              "count": 79,
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
              "count": 127,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:snow_required",
              "label": "Schnee erforderlich",
              "value": "snow_required",
              "count": 43,
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
              "count": 150,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:spring",
              "label": "Frühling",
              "value": "spring",
              "count": 119,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:autumn",
              "label": "Herbst",
              "value": "autumn",
              "count": 119,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:winter",
              "label": "Winter",
              "value": "winter",
              "count": 44,
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
              "count": 80,
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
              "count": 79,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:full_day",
              "label": "Ganzer Tag",
              "value": "full_day",
              "count": 50,
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
          "date": "2026-06-10",
          "day": "Mi",
          "dayFull": "Mittwoch",
          "tempMin": 3,
          "tempMax": 4,
          "icon": "rainy",
          "description": "Regen"
        },
        {
          "date": "2026-06-11",
          "day": "Heute",
          "dayFull": "Heute",
          "tempMin": 2,
          "tempMax": 8,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-12",
          "day": "Fr",
          "dayFull": "Freitag",
          "tempMin": 6,
          "tempMax": 13,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-13",
          "day": "Sa",
          "dayFull": "Samstag",
          "tempMin": 9,
          "tempMax": 17,
          "icon": "sunny",
          "description": "Teilweise bewölkt"
        },
        {
          "date": "2026-06-14",
          "day": "So",
          "dayFull": "Sonntag",
          "tempMin": 9,
          "tempMax": 16,
          "icon": "sunny",
          "description": "Teilweise bewölkt"
        },
        {
          "date": "2026-06-15",
          "day": "Mo",
          "dayFull": "Montag",
          "tempMin": 7,
          "tempMax": 15,
          "icon": "sunny",
          "description": "Meist klar"
        },
        {
          "date": "2026-06-16",
          "day": "Di",
          "dayFull": "Dienstag",
          "tempMin": 6,
          "tempMax": 17,
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
          "id": "345",
          "type": "activity",
          "bookingActivityId": 107,
          "title": "Rigi Tageskarte",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8c605d0571978c9b713cb23bd1bd5452.jpg",
          "subtitle": "Arth-Goldau",
          "priceFormatted": "CHF 84",
          "startingPrice": {
            "amount": 84,
            "currency": "CHF",
            "formatted": "CHF 84"
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
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4822853b957fdee8275bdd384f180727.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f81e41c3a926b0e814cc90afa22743d6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c6af664d7eeeeea8c991f3ebb8c73f0e.jpg"
          ]
        },
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
          "priceFormatted": "CHF 137",
          "startingPrice": {
            "amount": 137,
            "currency": "CHF",
            "formatted": "CHF 137"
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
  ],
  "content": [
    {
      "html": "<p>Mit herrlicher Natur und einem Rundumausblick auf Berge, Seen und Wälder erhielt die mächtige Rigi ihren Beinamen Königin der Berge.</p>\n<h2>10 Highlights der Rigi</h2>\n<ul>\n<li>In wenigen Minuten sind Besucher zum Wandern, Paragliden, Skifahren und Schlitteln in 1.752 Metern Höhe auf der Rigi. </li>\n<li>Auf der Rigi gibt es zu jeder Jahreszeit eine breite Palette an Freizeitaktivitäten</li>\n<li>Von den Berggipfeln der Rigi geniessen alle Akteure eine atemberaubende Aussicht über den Vierwaldstättersee, die Schweizer Alpen und das Schweizer Mittelland.</li>\n<li>Die 12 Berggipfel und Erhebungen am Bergmassiv sind beliebte Ziele für kurze und lange Wanderungen. Etliche werden direkt mit einer der 9 Bergbahnen angefahren.</li>\n<li>Die 5 Höhlen am Rigimassiv werden hier Balmen genannt. Zwei von ihnen fährt die Zahnradbahn ab Vitznau direkt an. In der Grübisbalm finden regelmässig Veranstaltungen für bis zu 300 Personen statt.</li>\n<li>Die Hohle Gasse zwischen Immensee und Küssnacht machte Wilhelm Tell bekannt. Er soll hier den Landvogt Gessler getötet haben.</li>\n<li>10 hübsche Kapellen sind am Bergmassiv der Rigi verteilt. Eine von ihnen ist direkt am Vierwaldstättersee, am Fusse der Rigi, gelegen. Eine andere ist die Bergkapelle am Kulm, die als einzige nicht ständig geöffnet ist.</li>\n<li>Die Sprudelsitze mit Bergpanorama und Wellnessanwendungen im Mineralbad &amp; Spa im Hotel Rigi Kaltbad sind sehr beliebt. Im Alpenwellness Chäserenholz gibt es ein Molkebad mitten in der Natur.</li>\n<li>4 Startplätze für Gleitschirmfliegen und 5 Landeplätze machen die Auswahl schwer.</li>\n<li>Kutschenfahrten auf der Rigi gibt es v.a. ab Kaltbad: Im Sommer mit der Pferdekutsche, im Winter mit Pferdeschlitten.</li>\n</ul>\n<p>Die Rigi ist im Winter wie im Sommer ein beliebtes Ziel. Die Rigibahnen bringen Besucher von allen Seiten des Bergmassivs zu den Feriensiedlungen sowie auf die Berggipfel der Rigi.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/01_Rigi_im_Sommer_Rigi_Bahnen_AG_86f1cf9d3e.jpg",
          "caption": "Sommer (Foto: Rigi Bahnen)",
          "alt": "Rigi im Sommer"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/02_Rigi_im_Winter_Schlitteln_Rigi_Bahnen_AG_bd8d56385a.jpg",
          "caption": "Winter (Foto: Rigi Bahnen)",
          "alt": "Rigi im Winter"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Bergbahnen auf die Rigi</h3>\n<p>Während die vier Rigibahnen Vitznau-Rigi-Bahn, Arth-Rigi-Bahn, Weggis-Rigi Kaltbad und Kräbel-Rigi Scheidegg von der Rigi Bahnen AG betrieben werden, stehen die restlichen Luftseilbahnen unter der Betreuung der jeweils eigens gegründeten Luftseilbahn-Gesellschaften.</p>\n<ul>\n<li><a href=\"/rigi/rigi-bahn-ticket/\">Rigi Bergbahn Tagespass</a> der Rigi Bahnen AG</li>\n<li><a href=\"/essen-und-trinken/rigi-tageskarte-mittagessen/\">Rigi Bergbahn Tageskarte mit Mittagessen</a></li>\n</ul>\n<h4>Vitznau-Rigi-Zahnradbahn</h4>\n<p>Die historische Zahnradbahn ab <a href=\"/vitznau/\">Vitznau</a> benötigt etwa eine halbe Stunde bis zum Rigi Kulm. Diese Fahrt wird gern ab <a href=\"/stadt-luzern/\">Luzern</a> mit einer <a href=\"/vierwaldstaettersee/schiffsrundfahrt-vierwaldstaettersee-ticket/\">Schifffahrt über den Vierwaldstättersee</a> verbunden. Noch heute zieht diese Bahn häufig eine Dampflok. Die Vitznau-Rigi-Bahn wurde am 21. Mai 1871 als erste Zahnradbahn Europas in Betrieb genommen. Sie feierte im Jahr 2021 ihr 150-jähriges Jubiläum. Die Bahn fährt ab Vitznau und startet somit direkt am Ufer des Vierwaldstättersees.</p>\n<p>In Rigi Kaltbad gibt es einen direkten Anschluss auf die Luftseilbahn nach Weggis. Ab Rigi Staffelhöhe wechselt die Aussicht vom See zum Mittelland bis hin zum Jura. Sogar der Schwarzwald und die Vogesen rücken hinter dem Zugersee ins Blickfeld. Mit der Zahnradbahn kann die Aussicht durch die langsame Fahrt besonders intensiv genossen werden.</p>\n<p>Die Bahn fährt auf der Südseite der Rigi von der Talstation Vitznau auf 7 Kilometern bis zur Rigi Kulm. Eine Zwischenstation der historischen Zahnradbahn bildet Rigi Staffelhöhe, wo die Vitznau-Rigi-Bahn und die Arth-Rigi-Bahn aufeinander treffen.</p>\n<p>Alle Stationen der Vitznau Rigi Bahn:</p>\n<ul>\n<li>Vitznau (435 m ü. M.)</li>\n<li>Mittlerschwanden</li>\n<li>Grubisbalm</li>\n<li>Freibergen</li>\n<li>Romiti Felsentor</li>\n<li>Kaltbad First</li>\n<li>Staffelhöhe</li>\n<li>Staffel</li>\n<li>Kulm (1.752 m ü. M.)</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/05_Rigi_Vitznau_Bergbahn_Winter_Vierwaldstaettersee_Rigi_Bahnen_AG_802caf20b5.jfif",
          "caption": "Vitznau (Foto: Rigi Bahnen)",
          "alt": "Rigi Vitznau"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/06_Rigi_Vitznau_Panoramafahrt_Bergbahn_Rigi_Bahnen_AG_5502eeede0.jpg",
          "caption": "Vitznau (Foto: Rigi Bahnen)",
          "alt": "Rigi Vitznau"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Goldau-Rigi-Zahnradbahn</h4>\n<p>Die zweite Zahnradbahn beginnt ihre Fahrt auf der anderen Seite der Rigi in Arth-Goldau und benötigt eine halbe Stunde bis zum Kulm. Seit 1875 fährt die Bahn von der Talstation am Zugersee auf 8.55 Kilometern Länge bis auf den Rigi Kulm.  </p>\n<p>Alle Stationen der Arth Rigi Bahn:</p>\n<ul>\n<li>Arth-Goldau</li>\n<li>Kräbel</li>\n<li>Fruttli</li>\n<li>Klösterli</li>\n<li>Wölfertschen-First</li>\n<li>Staffel</li>\n<li>Kulm (1752 m ü. M.)</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/03_Rigi_Goldau_Arth_Bergbahn_Rigi_Bahnen_AG_f250c99108.jfif",
          "caption": "Goldau Arth (Foto: Rigi Bahnen)",
          "alt": "Rigi Goldau"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/04_Rigi_Goldau_Winter_Zahnradbahn_Bergbahn_Rigi_Bahnen_AG_9c9b1306d8.jfif",
          "caption": "Goldau Winter (Foto: Rigi Bahnen)  ",
          "alt": "Rigi Goldau"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Vitznau – Hinterbergen Luftseilbahn</h4>\n<p>Ebenfalls in Vitznau starten zwei Luftseilbahnen. Eine davon ist die Luftseilbahn Vitznau-Hinterbergen, die Besucher zu den Gehöften und Weilern des Ortsteils Hinterbergen bringt. Die Luftseilbahn ist rund um die Uhr geöffnet, da es einen Kassenautomaten gibt. Besonders schön sind abendliche Fahrten, am besten kombiniert mit einer eindrucksvollen Vollmond-Nachtwanderung. </p>\n<p>Eine Besonderheit dieser Luftseilbahn ist der Umstand, dass es keinen offiziellen Fahrplan gibt. Gefahren wird nur bei Bedarf und Gruppen ab acht Personen sollten sich vorab anmelden.</p>\n<h4>Vitznau-Wissifluh Luftseilbahn</h4>\n<p>Auch die Luftseilbahn Vitznau-Wissifluh verkehrt rund um die Uhr auf Abruf. Der erfolgt über das dortige Berghotel über die Tel.-Nr. 041 397 13 27. Die Gondeln der Luftseilbahn überwinden einen Kilometer Länge und 448 Höhenmeter ohne eine Zwischenstütze.</p>\n<p>Mit dieser Bahn wurde erstmals eine Kombination aus Umlaufbahn und Pendelbahn konstruiert. </p>\n<h4>Weggis – Kaltbad Luftseilbahn</h4>\n<p>In 10 Minuten erreicht man von der Talstation Weggis am Vierwaldstättersee das Bergdorf Kaltbad. Vom beliebten Ferienort besteht ein direkter Anschluss zur Vitznau-Rigi-Bahn, die auf 2,3 Kilometer bis auf den höchsten Gipfel Rigi-Kulm in 1.752 Metern Höhe fährt, und zum Gratalp-Skilift. Die Luftseilbahn Weggis-Kaltbad gehört zu den vier von der Rigi Bahnen AG betreuten Bergbahnen. Sie fährt als Pendelbahn mit Gondeln, die für 76 Personen ausgerichtet sind. In einer Stunde können 640 Gäste transportiert werden.</p>\n<h4>Kräbel – Rigi-Scheidegg Luftseilbahn</h4>\n<p>Die erst im Jahr 2017 komplett neu in Betrieb genommene Luftseilbahn Kräbel-Rigi Scheidegg, die zu den vier von der Rigi Bahnen AG betreuten Bergbahnen gehört, bringt Gäste in zwei Kabinen á 15 Personen von der Talstation Kräbel in der Nähe von Arth-Goldau in sechs Minuten auf den 1.658 Meter Hohen Gipfel Rigi Scheidegg. Kräbel besitzt auch eine Station der Goldau-Rigi-Zahnradbahn, die bis zum Kulm hinauf fährt.</p>\n<h4>Küssnacht – Seebodenalp Luftseilbahn</h4>\n<p>Von der Ortschaft Küssnacht, die sich auf einer Landzunge zwischen dem Vierwaldstättersee und dem Zugersee erstreckt, bringt die Luftseilbahn Küssnacht-Seebodenalp jede halbe Stunde die Besucher in nur acht Minuten auf das sonnige Plateau der Seebodenalp in 1.030 Metern Höhe. Das beliebte Wander- und Wintersportgebiet befindet sich direkt unterhalb der Rigi Kulm. Die Luftseilbahn wird von der Küssnacht-Seebodenalp AG betreut.</p>\n<h4>Brunnen – Urmiberg Luftseilbahn</h4>\n<p>Ab der Talstation der Ortschaft Brunnen, die am südöstlichen Rand der Rigi an den Ufern des Vierwaldstättersees liegt, geht es mit der Luftseilbahn Brunnen-Urmiberg steil bergauf bis auf 1.135 Meter Höhe auf den Urmiberg. Die von der gleichnamigen Bahngesellschaft betriebene Luftseilbahn fährt im Halbstundentakt.</p>\n<h4>Obergschwend – Rigi Burggeist Luftseilbahn</h4>\n<p>Etwa fünf Kilometer oberhalb von Gersau befindet sich die Talstation Obergschwend, von der die Luftseilbahn zur Station Rigi Burggeist fährt. Die Fahrt auf 1.551 Meter Höhe dauert acht Minuten. Immer zur halben und vollen Stunde fährt die Bahn. Die Luftseilbahn wird von der gleichnamigen Bahngesellschaft betrieben. Zusätzlich ist ein Wintersportbus zwischen Obergschwend und Gersau unterwegs, sobald die Seilbahn im Einsatz ist.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/07_Rigi_Weggis_Luftseilbahn_Bergbahn_Rigi_Bahnen_AG_5aa7e697cd.jfif",
          "caption": "Weggis (Foto: Rigi Bahnen)",
          "alt": "Rigi Weggis Luftseilbahn"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/08_Rigi_Kraeber_Luftseibahn_Rigi_Bahnen_AG_263f8de32c.jfif",
          "caption": "Kräbel (Foto: Rigi Bahnen) ",
          "alt": "Rigi Kräbel Luftseilbahn"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Sehenswürdigkeiten am Rigi-Bergmassiv</h2>\n<p>Sehenswert sind in erster Linie die vielen Berggipfel und Erhebungen der Rigi. In gewisser Weise zählen zu den Sehenswürdigkeiten auch bereits die Bahnen, die täglich tausende Besucher nach oben bringen. Die nostalgischen Zahnradbahnen sind ein Erlebnis, aber auch die modernen Luftseilbahnen sind ein Magnet für Urlauber und Ausflügler. Neben einer enormen Zeitersparnis bieten sie vor allem den Genuss einer einzigartigen Natur über der Seenlandschaft inmitten der vielen Berggipfel.</p>\n<p>Mit einem <a href=\"/rundflug/helikopter-rundflug-luzern-30-minuten/\">Helikopter Rundflug 30 min ab Luzern</a> gewinnst du einen wunderbaren Überblick über die Rigi. Er wird auch als <a href=\"/rundflug/helikopter-rundflug-luzern-20-minuten/\">Helikopter Rundflug ab Luzern in 20 min</a> angeboten.</p>\n<p>Die wichtigsten Sehenswürdigkeiten am Rigi – Bergmassiv sind:</p>\n<ul>\n<li>Berggipfel und Erhebungen am Rigi-Massiv</li>\n<li>Höhlen der Rigi</li>\n<li>Hohle Gasse</li>\n<li>Bergkapellen auf der Rigi</li>\n</ul>\n<h3>Berggipfel und Erhebungen am Rigi-Massiv</h3>\n<p>Die Rigi besitzt als mächtiges Bergmassiv etliche Berggipfel und Erhebungen. Der höchste Gipfel ist der Rigi Kulm mit knapp 1.800 Metern über dem Meeresspiegel. Nicht alle Berggipfel werden mit den Rigibahnen erreicht.</p>\n<h4>Rigi-Kulm</h4>\n<p>Auf 1797 m ü. M. liegt der höchste der Rigi-Gipfel. Auf ihn fahren die zwei Zahnradbahnen von Arth bzw. Vitznau. Oben kann man im Hotel spektakuläre Sonnenauf- und -untergänge geniessen. Tagsüber sind rundum dreizehn Seen und ein ganzes Meer aus Berggipfeln sichtbar. Im Sommer wird auf dem Kulm gewandert oder mit dem Gleitschirm abgesprungen und im Winter sind Schneeschuhwandern und Schlitteln die liebsten Freizeitvergnügen.</p>\n<h4>Rigi-Hochflue</h4>\n<p>1698 m ü. M. misst der Berggipfel westlich des Urmibergs. Man blickt auf den Vierwaldstättersee an seinem südlichen Berghang und auf den Lauerzersee an seiner Nordseite. Der Hochflue (auch Hochfluh) ist der alpinste der drei grossen Gipfel im Rigimassiv und ist nicht per Seilbahn erschlossen.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/09_Rigi_Kulm_Rigi_Bahnen_AG_c8dfecf208.jpg",
          "caption": "Kulm (Foto: Rigi Bahnen)",
          "alt": "Rigi Kulm"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/10_Rigi_Hochflue_Rigi_Bahnen_AG_99de9ae008.jpg",
          "caption": "Hochflue (Foto: Rigi Bahnen)",
          "alt": "Rigi Hochflue"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Rigi Scheidegg</h4>\n<p>1658 m ü. M. ist der dritthöchste Gipfel des Rigi Massivs. Das Scheidegg gibt den Blick auf <a href=\"/arth-goldau/\">Goldau</a> und Gersau mit dem Gersauerbecken an der Südseite. Die 160 Meter östlich gelegene Seilbahnstation heisst Rigi Scheidegg. Die Arche auf dem höchsten Punkt lässt eine 360-Grad-Rundsicht zu. Hoch über dem Nebelmeer scheint hier die Sonne besonders lang. Der Blick bis zum Schwarzwald und in die Bündner Berge. Auf der anderen Seite sind die Berner Alpen mit Eiger, Mönch und Jungfrau zu sehen.</p>\n<h4>Rigi Rotstock</h4>\n<p>Auf 1650 m ü. M. liegt der Berggipfel Rotstock. Von Rigi Staffel führt der Weg mit einem kurzen Aufstieg zum Rotstock-Bänkli. Von hier aus geht der Blick über den Vierwaldstättersee und die Zentralschweizer Alpen. Die Wetterkamera der Rigi Bahnen ist auf dem Rotstock angelegt. Der atemberaubende 360° Blick auf Seen und Berge macht diesen Aussichtspunkt einzigartig.</p>\n<h4>Rigi Dossen</h4>\n<p>Der Dossen ist 1684 m ü. M. hoch und wird auf Wanderungen als schöner Aussichtspunkt über den Vierwaldstätter See geschätzt.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/11_Rigi_Scheidegg_Rigi_Bahnen_AG_05b76fcbcb.jpg",
          "caption": "Scheidegg (Foto: Rigi Bahnen)",
          "alt": "Rigi Scheidegg"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/12_Rigi_Rotstock_Rigi_Bahnen_AG_d2b9f6aad5.jpg",
          "caption": "Rotstock (Foto: Rigi Bahnen)",
          "alt": "Rigi Rotstock"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Rigi Staffel</h4>\n<p>Auf 1603 m ü. M. ist der Gipfel Staffel gelegen. Ihn erreichen die Zahnradbahnen von Vitznau und von Arth. Wanderwege von hier führen nach Kaltbad, zur Seebodenalp oder ins Klösterli. Die Restaurants Bärggnuss und Bahnhöfli finden sich hier.</p>\n<h4>Rigi Kaltbad</h4>\n<p>Rigi Kaltbad liegt auf 1433 m ü. M. und ist eine Wellness-Oase. Der Gipfel wird mit der Zahnradbahn ab Vitznau und per Luftseilbahn von Weggis erreicht. Kaltbad ist bei Ausflüglern schon wegen des Thermalbades sehr beliebt. Die autofreie Gegend hat mehrere Hotels, einen Dorfladen mit Delikatessen und ein Sportgeschäft. Am Aussichtspunkt Chänzeli (Känzeli) ist der Sonnenuntergang legendär.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/13_Rigi_Kaltbad_Rigi_Bahnen_AG_81282c77fc.jpg",
          "caption": "Staffel (Foto: Rigi Bahnen)",
          "alt": "Rigi Staffel"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/14_Rigi_Staffel_Rigi_Bahnen_AG_a82957f009.jpg",
          "caption": "Kaltbad (Foto: Rigi Bahnen)",
          "alt": "Rigi Kaltbad"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Rigi Klösterli</h4>\n<p>Der Weiler Rigi Klösterli liegt auf 1316 m ü. M., eingebettet in die Hänge der Rigi-Ostseite. In dem geschichtsträchtigen Wallfahrtsort lebten früher zahlreiche Kapuzinermönche. Die Kapelle „Maria zum Schnee“ wurde vor mehr als 300 Jahren erbaut. Sie liegt in der Nähe der für diese Gegend charakteristischen Höhlen und Grotten. Hier rauscht die Rigi Aa, ein Nebenfluss der Lorze. Die hübsche Wallfahrtskapelle zählt weltweit zu den schönsten Bergkapellen.</p>\n<h4>Urmiberg</h4>\n<p>Urmiberg ist auf 1135 m ü. M. gelegen, etwa 700 m oberhalb von Brunnen. Die Luftseilbahn bringt Besucher aus Brunnen auf den Urmiberg. Tief unten glitzert der Urnersee, der von steil aufragenden Bergen umrahmt ist. Der Urmiberg ist Ausgangspunkt für Gleitschirmflüge und für anspruchsvolle Wanderungen, die weit ins Rigi-Gebiet führen.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/15_Rigi_Kloesterli_Rigi_Bahnen_AG_fb96a7de02.jpg",
          "caption": "Klösterli (Foto: Rigi Bahnen)",
          "alt": "Rigi Klösterli"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/16_Rigi_Urmiberg_Rigi_Bahnen_AG_9716945302.jpg",
          "caption": "Urmiberg (Foto: Rigi Bahnen)",
          "alt": "Rigi Urmiberg"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Hinterbergen-Wissifluh</h4>\n<p>Auf 1.100 Metern Höhe liegt Hinterbergen-Wissifluh. Der sehr beliebte Wanderort wird von der Luftseilbahn aus Vitznau in wenigen Minuten erreicht. Hinterbergen liegt an der Rigi-Südseite in einer intakten Naturlandschaft. Es besitzt eine eindrückliche biologische Vielfalt und eine besonders schöne Aussicht.</p>\n<h4>Seebodenalp</h4>\n<p>Die auf 1.030 Metern über Meer liegende Seebodenalp ist ein Hochplateau zum Geniessen. Die Luftseilbahn ab Küssnacht erreicht jede halbe Stunde die Seebodenalp, die wie eine vorgelagerte Terrasse zwischen dem Rigi Kulm und dem Vierwaldstättersee liegt. Urchige Gasthäuser verwöhnen die zahlreichen Wanderer und besonders beliebt ist eine Fackelwanderung durch die Nacht auf der Seebodenalp. Mit dem Auto kann man innerhalb 15 Minuten von Küssnacht aus die Seebodenalp erreichen, die auch über Parkplätze verfügt.</p>\n<h4>Obergschwend</h4>\n<p>Obergschwend liegt unterhalb der Hochflue auf 1012 Metern Höhe. Die Hochflue wird über Felsen mittels Ketten und Drahtseilen auf einer schweren Bergwanderung erreicht. Von Hochflue gibt es wunderbare Ausblicke. Von Gersau nach Obergschwend fährt ein Bergbus. Zwischen Obergschwend und Burggeist gibt es eine Verbindung über eine Luftseilbahn.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/17_Rigi_Hinterbergen_Wissifluh_Rigi_Bahnen_AG_b764b6e185.jpg",
          "caption": "Hinterbergen Wissifluh (Foto: Rigi Bahnen)",
          "alt": "Rigi Hinterbergen Wissifluh"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/18_Rigi_Seebodenalp_Rigi_Bahnen_AG_63e2b77657.jpg",
          "caption": "Seebodenalp (Foto: Rigi Bahnen)",
          "alt": "Rigi Seebodenalp"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Höhlen der Rigi</h3>\n<p>Höhlen nennt man auf der Rigi „Balm&quot;. Der Begriff stammt aus dem Keltischen und heisst so viel wie „nischenartige Höhlung“. Innerhalb der Rigi wurden bereits mehrere interessante Höhlen entdeckt. Sie sind gehäuft in den Nagelfluhwänden der Rigi zu finden. Durch Verwitterung der Mergelschichten entstanden sie vor allem dort, wo auch der Frost hineinkam. In den Kalkwänden des Vitznauer Stockes und der Hochflue entstanden die Höhlen ebenfalls durch Verwitterung.</p>\n<p>Die zwei bekanntesten Balmen befinden sich oberhalb von Vitznau und sind mit der Zahnradbahn ab Vitznau erreichbar. In einer der Höhlen finden regelmässig Feierlichkeiten statt, die andere ist in archäologischer Hinsicht einmalig. \nWeitere bekannte Höhlen sind das Drachenloch, die Brüdersbalm und die Ziltenersbalm.</p>\n<h4>Höhle Steigelfadbalm</h4>\n<p>Die Höhle wurde nachweislich von Neandertalern bewohnt. Hier gefundene Steinartefakte belegen dies. Zudem brachten Ausgrabungen Reste von Höhlenbären zutage. Die Höhle Steigelfadbalm ist ab Hinterbergen auf einem Bergwanderweg erreichbar. Von Vitznau aus kann mit der Zahnradbahn die Station Mittlerschwanden erreicht werden. Von hier aus ist die Höhle bequem zu Fuss erreichbar. Archäologische Einblicke gibt eine Informationstafel vor Ort.</p>\n<h4>Höhle Gruebisbalm</h4>\n<p>Diese Höhle ist bereits 100.000 Jahre alt und die grösste Höhle der Rigi. Sie hat einen Wasserfall am Eingang und innen einen kleinen See. Die austretende Quelle begünstigt die Verwitterung und begünstigt die Aushöhlung. Die Höhle Gruebisbalm wird für spektakuläre Feierlichkeiten genutzt. Sie wird daher nur auf Vorbestellung geöffnet. Bis zu 300 Personen finden in der Höhle Platz, die über die Zahnradbahn ab Vitznau erreicht wird. Angeboten werden Buffet, magische Unterhaltung und Alphornbläser. Dem Höhlenklima angepasste Kleidung ist wichtig.\nBergfahrt ab Vitznau mit der Rigi-Bahn, ab 18:15 Uhr, Buffet ab 19:00 Uhr, Talfahrt nach Vitznau, ab 23:08 Uhr.</p>\n<h4>Höhle Drachenloch</h4>\n<p>Die bekannteste Höhle am Vitznauer Stock ist leider unzugänglich. Drachenloch wird diese Höhle und Drachensessel der darüber vorspringende Felskopf genannt. Zu sehen ist beides im Westen des Gipfels des Vitznauer Stockes, oberhalb der Stockrübi. Der Rigidrachen soll hier gehaust haben. Angeblich flog er mit lautem Getöse von hier aus über den Vierwaldstättersee zu seinem Artgenossen am Pilatus. Beschrieben wurde er als fliegender Lindwurm mit Panthertatzen, stachelbewehrtem Rückgrat und feuerspeiendem Atem.</p>\n<h4>Höhlen Brüdersbalm und Ziltenersbalm</h4>\n<p>Die Brüdersbalm ist die am höchsten gelegene bekannte Höhle an der Rigi. Sie liegt auf etwa 1.500 m.ü.M. südlich vom Rigi Kulm und etwa vier Kilometer östlich von Kaltbad. Vor dem Wasserfall gibt es eine offizielle Feuerstelle. Gemeinsam mit der etwa sieben Meter tiefer gelegenen Ziltenersbalm bildet die Bruedersbalm eine Doppel-Balm. </p>\n<p>Neben der Brüdersbalm befindet sich an Felsnischen neben einem kleinen Wasserfall eine offizielle Feuerstelle. Sie ist idyllisch gelegen und daher ein kleiner Geheimtipp für Wanderer. Erreicht wird die Feuerstelle nach einem 30 minütigen Fussmarsch ab Rigi Staffel, zwischen Alphütte Trieb und Des Alpes.  </p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/Steigelfadbalm_977afe457d.jpg",
          "caption": "Steigelfadbalm (Foto: Rigi Bahnen)",
          "alt": "Rigi Steigelfadbalm"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/gruebisbalm_8373eefd67.jpg",
          "caption": "Grübisbalm (Foto: Rigi Bahnen)",
          "alt": "Rigi Grübisbalm"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Hohle Gasse</h3>\n<p>Die Hohle Gasse ist eines der bekanntesten Wegstücke der Schweiz. Es befindet sich zwischen Immensee und Küssnacht. Die Hohle Gasse ist 250 Meter lang und verbindet die Hauptstrasse und die 1638 erbaute Tellskapelle. Der gepflasterte Weg wurde mit groben Steinen aus Riginagelfluh eingefasst. Hier soll das Armbrustgeschoss von Wilhelm Tell den Landvogt Gessler getötet haben.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/22_Rigi_Hohle_Gasse_im_Herbst_Rigi_Bahnen_AG_13caf16dc7.jpg",
          "caption": "Hohle Gasse Herbst (Foto: Rigi Bahnen)",
          "alt": "Rigi Hohle Gasse Herbst"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/22_Rigi_Hohle_Gasse_Rigi_Bahnen_AG_25640aa90a.jpg",
          "caption": "Hohle Gasse Herbst (Foto: Rigi Bahnen)",
          "alt": "Rigi Hohle Gasse "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Kapellen</h3>\n<p>Die Kapellen auf der Rigi sind gern besuchte Ausflugsziele. Sie werden zudem gern für Hochzeiten genutzt. Ausser der Bergkapelle am Kulm sind die Kapellen rund um die Uhr geöffnet. Die Rigi hat am Bergmassiv insgesamt neun Kapellen, weitere liegen am Fusse der Rigi:</p>\n<ul>\n<li>Bergkapelle Rigi Kulm </li>\n<li>Reformierte Bergkirche Kaltbad</li>\n<li>Kapelle Scheidegg</li>\n<li>Wallfahrtskapelle Maria zum Schnee</li>\n<li>St Wendelinskapelle Seebodenalp</li>\n<li>St Josef-Kapelle </li>\n<li>Kapelle Langberg</li>\n<li>Felsenkapelle St. Michael </li>\n<li>Heiligkreuz Kapelle Weggis </li>\n<li>Kindlikapelle Gersau (am See) - älteste und sehr beliebte Kapelle an der Rigi</li>\n</ul>\n<p>Einige der interessantesten Kapellen sind hier näher vorgestellt:</p>\n<h4>Wallfahrtskapelle Maria zum Schnee</h4>\n<p>Sie gilt als eine der schönsten Bergkapellen überhaupt. 1688 für die Sennen der Rigi erbaut, gilt sie heute als eine der schönsten Bergkapellen weltweit. Wegen grosser Pilgerströme wurde die Kapelle Maria zum Schnee schon 1721 durch eine grössere Wallfahrtskapelle ersetzt. Die kleine Kapelle Maria zum Schnee wird heute für romantische Hochzeitszeremonien genutzt. In der Kirche haben 150 Personen Platz.</p>\n<h4>Bergkapelle Rigi Kulm «Regina Montium»</h4>\n<p>Die Bergkapelle steht auf dem Rigi Kulm. Auf dem Gebiet der Pfarrei Arth ist diese Kapelle die jüngste. Sie wurde aus schlichtem Naturstein erbaut und am Ostermontag 1967 eingeweiht. Sie wird gern für Hochzeiten und Taufen genutzt und bietet Platz für 80 Personen. Um die Bergkapelle zu besichtigen, muss beim Rigi Kulm Hotel nachgefragt werden.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/23_Rigi_Kapelle_Scheidegg_Rigi_Bahnen_AG_55de1d6545.jpg",
          "caption": "Kapelle Scheidegg (Foto: Rigi Bahnen)",
          "alt": "Rigi Kapelle Scheidegg"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/24_Rigi_Kapelle_Kuessnacht_Rigi_Bahnen_AG_11ad91005a.jpg",
          "caption": "Kapelle Küssnacht (Foto: Rigi Bahnen)",
          "alt": "Rigi Kapelle Küssnacht"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Felsenkapelle St. Michael</h4>\n<p>Die katholische Felsenkapelle St. Michael steht am Känzeliweg. Sie wurde eingebettet zwischen Felswänden 1779 an der Stelle einer früheren Kapelle erbaut. Für Einheimische und Besucher gilt diese Kapelle als besonderer Kraftort.</p>\n<p>Zu diesem Ort, der früher Schwesternborn genannt wurde, gibt es eine Sage. Drei fromme Schwestern sollen sich zu Beginn des 14. Jahrhunderts hierher zurückgezogen haben. Sie seien vor gewalttägigen Vögten geflüchtet. Nach dem Tod der Schwestern, die hier ein heiliges Leben geführt haben sollen, sei hier eine Heilquelle entsprungen. Seitdem suchen viele Menschen Heilung durch ein Bad im kalten Quellwasser. Der Name Kaltbad stammt auch daher.\nDie zur Gemeinde Weggis gehörende Kapelle hat Platz für 120 Personen und eignet sich gut für Hochzeiten und Taufen.</p>\n<h4>Kindlikapelle Gersau (Maria Hilf)</h4>\n<p>Die Kindlikapelle liegt am Fusse der Rigi direkt am See. Sie wurde im Jahr 1570 eingeweiht und 1707 vergrössert. Durch Gemälde und Fotografien wurde sie weltweit bekannt und ist wegen der idyllischen Umgebung besonders beliebt. Etwa 80 Personen haben in der Kapelle Platz, die eigentlich den Namen „Maria Hilf“ trägt, im Volksmund jedoch „Käppeli zum Kindli“ genannt wird.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/25_Rigi_Felsenkapelle_St_Michael_Rigi_Bahnen_AG_f57e429061.jpg",
          "caption": "Felsenkapelle St Michael (Foto: Rigi Bahnen)",
          "alt": "Rigi Felsenkapelle St Michael"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/26_Rigi_Kapelle_Kindli_Gersau_Rigi_Bahnen_AG_2d4947e42c.jpg",
          "caption": "Kapelle Kindli Gersau (Foto: Rigi Bahnen)",
          "alt": "Rigi Kapelle Kindli Gersau"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Aktivitäten am Rigimassiv</h2>\n<p>Im Sommer ist die Rigi ein besonders beliebtes Ziel für Freizeitaktivitäten. Da das Bergmassiv über die Bergbahnen sehr gut erschlossen ist, verteilen sich die Aktivitäten über das gesamte Gebiet.</p>\n<ul>\n<li>Wandern über die Rigi</li>\n<li>Trailrunning</li>\n<li>schwere Bergtouren</li>\n<li>Mountainbiking und Velofahren</li>\n<li>Seilpark Rigi</li>\n<li>Kinderspielplätze auf dem Rigimassiv</li>\n<li>Minigolfplatz an der Rigi Kaltbad</li>\n<li>Lamatrekking an der Rigi</li>\n</ul>\n<p>Einige Aktivitäten können das ganze Jahr über ausgeübt werden. Gerade beim Paragliding ist jedoch immer eine genaue Wetterbeobachtung erforderlich. Bei Tandemflügen ist es durchaus möglich, dass diese wetterbedingt kurzfristig verschoben werden müssen.</p>\n<ul>\n<li>Gleitschirmfliegen von der Rigi</li>\n<li>Fahrt mit der historischen Zahnradbahn Vitznau auf die Rigi Kulm</li>\n<li>Wellness auf der Rigi</li>\n<li>Fahrten mit der Pferdekutsche / dem Pferdeschlitten</li>\n</ul>\n<p><strong>Zu den beliebtesten Winteraktivitäten gehören:</strong></p>\n<ul>\n<li>Skifahren und Snowboarden, Freeride – Skifahren</li>\n<li>Schlitteln</li>\n<li>Winterwandern</li>\n<li>Schneeschuhwandern</li>\n<li>Schlittschuhlaufen, Eisstockschiessen und Curling</li>\n<li>Skilanglauf</li>\n</ul>\n<p>An der Rigi sind zahlreiche Pisten vorhanden. An verschiedenen Orten kann die erforderliche Ausrüstung auch gemietet werden.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/27_Rigi_Berg_Wandern_Rigi_Bahnen_AG_89673a00ea.jpg",
          "caption": "Berg Wandern (Foto: Rigi Bahnen)",
          "alt": "Rigi Berg Wandern"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/28_Rigi_Berg_Wandern_Rigi_Bahnen_AG_89cd94d611.jpg",
          "caption": " Berg Wandern (Foto: Rigi Bahnen)",
          "alt": "Rigi Berg Wandern"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Wandern über die Rigi</h3>\n<p>Auf dem Bergmassiv gibt es leichte Wanderwege für die ganze Familie, die auch Kinder und ältere Leute ohne Bergerfahrung gut bewältigen. Als mittelschwer eingestufte Wanderungen erfordern bereits eine gewisse Kondition. Die als schwer bezeichneten Wege sind für erfahrene Berggeher mit sehr guter Kondition gedacht. Die Sommerwanderungen sind in der Zeit von Mai bis Oktober möglich. Insgesamt gibt es auf der Rigi rund 120 Kilometer Wanderwege unterschiedlicher Schwierigkeitsgrade. </p>\n<p>Sehr entspannt geniesst du eine <a href=\"/rigi/tagestour-rigi-ab-luzern/\">geführte Tagestour Rigi ab Luzern</a>. Bahn- und Schiffstickets sind bereits im Preis enthalten. Die <a href=\"/rigi/tagestour-rigi-ab-zuerich/\">Tagestour Rigi ab Zürich</a> enthält zusätzlich einen Bummel durch Luzern.</p>\n<p><strong>Einige Beispiele für Wanderungen:</strong></p>\n<h4>Mark Twain Weg (Weggiser Rigiweg)</h4>\n<p>Dieser Weg ist ein historischer Weg, den früher Pilger nutzten, um die heilende Quelle an der Kapelle aufzusuchen. Später nutzten ihn die Sänftenträger und Pferdekutschen, um berühmte Persönlichkeiten oder Waren auf die Rigi zu bringen.</p>\n<p>Der Mark Twain Weg beginnt in Weggis an der Schifflände. Daher stammt auch der Name Weggiser Rigiweg. Über die Kapelle Heiligkreuz, das Felsentor, das Kaltbad und den Staffel führt er hinauf zum Kulm. Mark Twain beschreibt diesen Weg in einem seiner Bücher und wurde so zum Namensgeber.</p>\n<ul>\n<li>10.8 km</li>\n<li>5:50 Std.</li>\n<li>1361 Höhenmeter Aufstieg</li>\n<li>28 Höhenmeter Abstieg</li>\n</ul>\n<h4>Rigi Panoramaweg</h4>\n<p>Der Panoramaweg ist ein leichter Wanderweg mit moderatem Aufstieg. Innerhalb von zwei Stunden werden knapp sieben Kilometer erwandert. Startpunkt ist der Wölfertschen-First (1478 m), der mit der Zahnradbahn von Arth erreicht wird. Der Panoramaweg ist mit gelben Wegweisern gekennzeichnet. Zusätzlich gibt es Wegweise für die Barrierefreiheit mit grünem Quadrat und der Routennummer 848, die ebenfalls den Panoramaweg markieren. Für Rollstuhlfahrer sind allerdings einige sehr schwierige Passagen enthalten. Der Weg führt entlang der ehemaligen Scheideggbahn bis zum Zielort Scheidegg.</p>\n<ul>\n<li>6.9 km</li>\n<li>2 Std.</li>\n<li>215 Höhenmeter Aufstieg</li>\n<li>51 Höhenmeter Abstieg</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/27_Rigi_Mark_Twain_Weg_Rigi_Bahnen_AG_4086d3459e.jpg",
          "caption": "Mark Twain Weg (Foto: Rigi Bahnen)",
          "alt": "Rigi Mark Twain Weg"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/28_Rigi_Panorama_Weg_Rigi_Bahnen_AG_94bffa988a.jpg",
          "caption": "Panorama Weg (Foto: Rigi Bahnen)",
          "alt": "Rigi Panorama Weg"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Rigi Kaltbad zum Kulm und zurück</h4>\n<p>Diese Rundwanderung beginnt und endet in Kaltbad (1.436 m). Den Weg von Weggis bis Kaltbad kann man mit der Luftseilbahn nehmen. 362 Höhenmeter sind auf einer Länge von etwa vier Kilometern bis zum Kulm ein eher allmählicher Anstieg. Daher wird dieses Wandern als leicht eingestuft.</p>\n<ul>\n<li>8.6 km</li>\n<li>3:00 Std.</li>\n<li>362 Höhenmeter Aufstieg</li>\n<li>362 Höhenmeter Abstieg</li>\n</ul>\n<h4>Rigi Kulm Grat</h4>\n<p>Diese Wanderung gilt als leicht, da der Weg stetig nach unten führt. Allerdings sind mehr als 400 Höhenmeter nach unten zu überwinden und an manchen Stellen ist das nicht zu unterschätzen. Der Weg führt über die Kulmhütte, die Obere Schwändihütte und Des Alpes nach Klösterli.</p>\n<ul>\n<li>4.1 km</li>\n<li>1:15 Std.</li>\n<li>12 Höhenmeter Aufstieg</li>\n<li>444 Höhenmeter Abstieg</li>\n</ul>\n<h4>Kulm – Seebodenalp „Grüezi Weg“</h4>\n<p>Dieser leichte Wanderweg führt nach unten. Er wird besonders bei den Einheimischen sehr gern gegangen. Startpunkt ist die Kulm (1762 m) über Staffel (1604 m) und Holderen (1116 m) bis zum Zielpunkt Seebodenalp (1020 m). Ab Staffel wird der Weg sehr steil.</p>\n<ul>\n<li>4.4 km</li>\n<li>1:30 Std.</li>\n<li>7 Höhenmeter Aufstieg</li>\n<li>744 Höhenmeter Abstieg</li>\n</ul>\n<h4>Rigi Weg der Naturschätze</h4>\n<p>Von Rigi Kaltbad führt die Wanderung entlang der ehemaligen Trasse der Rigi-Bahn zwischen Kaltbad-Scheidegg. Von Rigi First geht es weiter über einen Felsenweg nach Unterstetten. Ab Rigi First informieren 12 grosse Schautafeln über die Naturschätze der Rigi. Über Seeweg, Glettialp kommt man nach Hinterbergen.</p>\n<ul>\n<li>5.7 km</li>\n<li>2:30 Std.</li>\n<li>94 Höhenmeter Aufstieg</li>\n<li>469 Höhenmeter Abstieg</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h4>Rigi Kulm bis Hinterbergen</h4>\n<p>Der leicht und angenehm zu gehende Weg beginnt am Kulm und führt über Staffel, Rigi First, Unterstetten und Glätti  hinunter nach Hinterbergen. Nach der Wanderung fahren Besucher mit der Luftseilbahn von Hinterbergen hinunter nach Vitznau. Die reichlich acht Kilometer lange Wanderung verzeichnet über einhundert Höhenmeter. Mehrheitlich geht es jedoch über etwa achthundert Höhenmeter nach unten.</p>\n<ul>\n<li>8.1 km</li>\n<li>2:38 Std.</li>\n<li>114 Höhenmeter Aufstieg</li>\n<li>799 Höhenmeter Abstieg</li>\n</ul>\n<h4>Rigi Blumenpfad</h4>\n<p>Die kurze und einfach zu gehende Wanderung führt sanft bergab und dauert etwa 90 Minuten. Der Weg beginnt in Staffel und führt via Staffelhöhe, Känzeli, Kaltbad und First zum Felsenweg. Eingerichtet wurde der Blumenpfad von <a href=\"https://www.prorigi.ch/\">Pro Rigi</a>, einer Organisation, die sich hier dem Natur- und Pflanzenschutz widmet. Auf diesem Weg liegen mehrere Einkehrmöglichkeiten und ein Grillstelle.</p>\n<p>Der Abschnitt zwischen Kaltbad und First kann sogar mit dem Kinderwagen gegangen werden. Auf dieser Strecke informiert eine Tafel über die Entstehung des Berges. Die für die Rigi typische Nagelfluh ist zwischen Kaltbad und First besonders gut sichtbar.</p>\n<p>Nach der Wanderung geht es ab den Stationen Wölfertschen-First, Klösterli oder Kaltbad wieder hinunter ins Tal.</p>\n<ul>\n<li>5.1 km</li>\n<li>1:30 Std.</li>\n<li>3 Höhenmeter Aufstieg</li>\n<li>175 Höhenmeter Abstieg</li>\n</ul>\n<h4>Immensee-Scheidegg (9. Etappe der Schweiz-Durchquerung von Basel ins Veltlin)</h4>\n<p>Dieser Teil der Etappe der Schweizdurchquerung beginnt auf den ersten sechs Kilometern mit einem steilen Aufstieg von 1200 Höhenmetern von Immensee auf den Kulm. Der weitere Weg bis zur Scheidegg ist angenehm zu wandern und hier gibt es auch etliche Einkehrmöglichkeiten. Wegen des ersten Teils wird der Weg als schwere Wanderung eingestuft, die viel Kondition erfordert.</p>\n<ul>\n<li>14 km</li>\n<li>5:30 Std.</li>\n<li>1359 Höhenmeter Aufstieg</li>\n<li>176 Höhenmeter Abstieg</li>\n</ul>\n<h4>Tell-Trail Etappe 3: Brunnen – Rigi Kaltbad – Luzern</h4>\n<p>Der dritte Teil des Wilhelm Tell-Trails verbindet eine 5-stündige Wanderung mit der Seilbahnfahrt, einer Zahnradbahnfahrt und einer Schiffsfahrt über den Vierwaldstättersee nach Luzern. Der Weg beginnt am Vierwaldstättersee in Brunnen mit der Seilbahnfahrt hinauf auf den Urmiberg. 740 Höhenmeter Aufstieg sind zu bewältigen, wenn es nun über den Gätterlipass, vorbei am Berggasthaus Burggeist und zum Känzeli – Aussichtspunkt mit der wunderbaren Aussicht auf den See geht. Nun geht es hinunter nach Kaltbad und mit der Zahnradbahn nach Vitznau. In Vitznau wartet das Schiff nach Luzern.</p>\n<p>Für die Anfahrt von Luzern nach Brunnen empfiehlt sich die Fahrt mit der S3 der SBB. Sie dauert etwa eine Dreiviertelstunde.</p>\n<ul>\n<li>37.8 km</li>\n<li>5 Std.</li>\n<li>843 Höhenmeter Aufstieg</li>\n<li>534 Höhenmeter Abstieg</li>\n</ul>\n<h4>Zwärgliweg Rigi Burggeist nach Grossgschwend</h4>\n<p>Ein sehr gut geeigneter Weg für Familien mit kleinen Kindern ist der Zwärgliweg. Er beginnt am Kinderspielplatz des Restaurants Burggeist. Nur 900 Meter entfernt liegt der Spielplatz des Gasthauses Rigi Scheidegg. Der Besuch beider Spielplätze kann somit vor der Wanderung erfolgen. Über den Zwärgliweg wird nach 90 Minuten Obergschwend erreicht. Auf der Wanderung führt der Weg über eine Leiter. Umgekehrt ist der Weg für kleine Kinder weniger gut geeignet, da die mehr als 500 Höhenmeter dann als Anstieg überwunden werden müssten.</p>\n<p>Zum Restaurant Burggeist führt die Luftseilbahn von Obergschwend.</p>\n<ul>\n<li>3.6 km</li>\n<li>1:30 Std.</li>\n<li>3 Höhenmeter Aufstieg</li>\n<li>543 Höhenmeter Abstieg</li>\n</ul>\n<h4>Gletscherspur Seebodenalp</h4>\n<p>Dieser Themenweg informiert über die letzte Eiszeit und die Spuren, die sie hinterlassen hat. Der Weg beginnt am Parkplatz Seebodenalp und führt über die Alp Ruodisegg, den Hinteren Boden und Holderen zurück zum Ausgangspunkt. Nach Seeboden fährt ab Küssnacht eine Luftseilbahn.</p>\n<ul>\n<li>4.9 km</li>\n<li>1:30 Std.</li>\n<li>102 Höhenmeter Aufstieg</li>\n<li>109 Höhenmeter Abstieg</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/31_Rigi_Wandern_Rigi_Bahnen_AG_65fc04a373.jpg",
          "caption": "Wandern (Foto: Rigi Bahnen)",
          "alt": "Rigi Wandern"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/32_Rigi_Wandern_Seebodenalp_Blick_auf_Kulm_Rigi_Bahnen_AG_7443bbd117.jpg",
          "caption": "Seebodenalp (Foto: Rigi Bahnen)",
          "alt": "Rigi Wandern Seebodenalp Blick auf Kulm"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Trailrunning</h3>\n<p>Das Trailrunning (auch Traillauf genannt) ist ein Langstreckenlauf, der abseits asphaltierter Strassen durchgeführt wird. Auf dem Gebiet der Rigi gibt es mehrere dafür bestens geeigneter Strecken.</p>\n<h4>Weggis Talstation auf Rigi Kaltbad</h4>\n<p>Von der Weggis Talstation der Luftseilbahn aus führt eine steile Trailrunning Tour bis auf  Kaltbad. 11,5 Kilometer Weg ist in etwa zweieinviertel Stunden gelaufen. Mehr als 1.000 Höhenmeter sind jeweils nach oben und unten zu überwinden.</p>\n<p>Ab Kaltbad kommt man notfalls mit der Luftseilbahn nach Weggis zurück.</p>\n<ul>\n<li>11.5 km</li>\n<li>2:15 Std.</li>\n<li>1018 Höhenmeter Aufstieg</li>\n<li>1006 Höhenmeter Abstieg</li>\n</ul>\n<h4>Rigi von Vitznau nach Arth</h4>\n<p>Von Vitznau am Ufer des Vierwaldstättersees verläuft das Trailrunning über Eselberg und Gätterlipass nach Goldau-Arth. Die zu absolvierenden Höhenmeter liegen bei etwa 900 auf etwa 13 Kilometer.</p>\n<ul>\n<li>13.2 km</li>\n<li>2:15 Std.</li>\n<li>922 Höhenmeter Aufstieg</li>\n<li>848 Höhenmeter Abstieg</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Schwere Bergtouren</h3>\n<p>Schwere Bergtouren sind ausschliesslich durch erfahrene Berggeher mit absoluter Schwindelfreiheit und Trittsicherheit zu absolvieren. Es gehört ebenfalls eine gute Kondition und das Tragen von Bergschuhen dazu.</p>\n<h4>Seebodenalp – Rigi Kulm Felsenweg</h4>\n<p>Nur drei Kilometer lang ist diese Bergtour, die über Stein und Fels führt. Gesichert ist der Weg durch Treppen und Stahlseile. Knappe zwei Stunden werden für die Bewältigung von beinahe achthundert Höhenmetern benötigt. Tiefster Punkt an der Seebodenalp 1.024 Meter, höchster Punkt 1.795 Meter über Meer. Zur Seebodenalp führt die Luftseilbahn ab Küssnacht.</p>\n<ul>\n<li>3 km</li>\n<li>2 Std.</li>\n<li>771 Höhenmeter Aufstieg</li>\n<li>9 Höhenmeter Abstieg</li>\n</ul>\n<h4>Weggis City – Rigi Kaltbad</h4>\n<p>Ab Weggis beginnt ein Aufstieg über mehr als eintausend Höhenmeter, die später auch im Abstieg wieder zu bewältigen sind. Der Weg führt im Aufstieg über Bodenberg, Obersentiberg, Farmhütte und Grüt nach Kaltbad. Der Rückweg geht über Romiti Felsentor, am Gartenrestaurant Felsentor vorbei zum Obersentiberg, Bannholz und Linde nach Weggis zurück. Mindestens sieben Stunden dauert diese Bergwanderung. Eine lange Eisentreppe sichert den Weg durch Felsen. Für den Abstieg sind gesunde Knie sehr wichtig.</p>\n<ul>\n<li>15.9 km</li>\n<li>7 Std.</li>\n<li>1047 Höhenmeter Aufstieg</li>\n<li>1057 Höhenmeter Abstieg</li>\n</ul>\n<h4>Arth-Goldau – Rigi Kulm – Seebodenalp</h4>\n<p>Beinahe 1300 Höhenmeter Aufstieg von Goldau über Rigi Dächli auf den Kulm sind anstrengend und benötigen vor allem eine sehr gute Kondition. Gefährlich wird dann der Abstieg. Auf den ersten Metern kann es rutschig sein und es gibt hier noch keinerlei Sicherung. Später sind schwierige Stellen gut mit Metallbügeln und Drahtseilen gesichert. Der Abstieg erfolgt via Ronenboden und Grodboden auf die Seebodenalp. Von hier kann man mit der Luftseilbahn nach Küssnacht gelangen. Von hier verkehrt aller 30 Minuten die S3 der SBB nach Arth-Goldau (12 Minuten Fahrzeit).</p>\n<ul>\n<li>11 km</li>\n<li>5:45 Std.</li>\n<li>1290 Höhenmeter Aufstieg</li>\n<li>780 Höhenmeter Abstieg</li>\n</ul>\n<h4>Hochflue – Rundwanderung ab Obergschwend</h4>\n<p>Der Name Rundwanderung trifft es nicht wirklich. Die schwere Bergwanderung enthält knapp 700 Höhenmeter Anstieg, der teilweise direkt über die Felsen verläuft. Vom Obergschwend aus geht es über die Bergstrasse Richtung Käppeliberg und weiter zum Zilistock. Der blau-weiss markierte Alpinweg führt hinauf zur Hochflue. An den Felsen sind Ketten und Drahtseile angebracht, die der Sicherheit dienen. Oben auf der Hochflue kann man die Sicht auf die lange Alpenkette und den Vierwaldstättersee geniessen. Der Abstieg erfolgt über eine steile Treppe senkrecht nach unten, bevor es über den Wanderweg weiter stetig nach unten geht. Von Gersau nach Obergschwend fährt ein Bergbus.</p>\n<ul>\n<li>6.4 km</li>\n<li>3:30 Std.</li>\n<li>687 Höhenmeter Aufstieg</li>\n<li>687 Höhenmeter Abstieg</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/32a_Rigi_natural_treasure_trail_a49eea82cf.jpg",
          "caption": "Nature Trail (Foto: Rigi Bahnen)",
          "alt": "Rigi Nature Trail"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/32_b_Rigi_Seebodenalp_d2df437f73.jpg",
          "caption": "Seebodenalp (Foto: Rigi Bahnen)",
          "alt": "Rigi Seebodenalp"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Mountainbiking und Velofahren</h3>\n<p>Mountainbiking und Velofahren findet teilweise auf Wegen statt, die auch von Wanderern genutzt werden. Hier ist eine unbedingte Rücksichtnahme wichtig. Die Rigibahnen transportieren keinerlei Räder.</p>\n<h4>Arth-Goldau über Rigi Scheidegg und Rigi Kaltbad/Kulm zurück nach Arth-Goldau</h4>\n<p>Knapp vierzig Kilometer lang ist die Mountainbiketour, die von Goldau aus etwa 1.800 Höhenmeter in der An- und Abfahrt bewältigt. Zwischen der Gersaueralp bis hinauf zur Burggeist muss das Rad geschoben werden (30 Min).</p>\n<ul>\n<li>39.3 km</li>\n<li>5:45 Std.</li>\n<li>1777 Höhenmeter Aufstieg</li>\n<li>1777 Höhenmeter Abstieg</li>\n</ul>\n<h4>Rigi Rundtour</h4>\n<p>Diese Radtour verläuft von Bernerhöhe über Klösterli, Rigi Staffel zum Kulm. Weiter geht es wieder über Staffel zur Seebodenalp und den Polenweg zurück zur Bernerhöhe.</p>\n<ul>\n<li>27.2 km</li>\n<li>5:15 Std.</li>\n<li>1388 Höhenmeter Aufstieg</li>\n<li>1388 Höhenmeter Abstieg</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/33_Rigi_Radtoren_Mountain_Bike_Velo_Rigi_Bahnen_AG_0e32c02bb9.jpg",
          "caption": "Radtour (Foto: Rigi Bahnen)",
          "alt": "Rigi Mountain Bike Velo Radtour"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/34_Rigi_Mountain_Bike_Velo_Rigi_Bahnen_AG_7169d7ed75.jpg",
          "caption": "Radtour (Foto: Rigi Bahnen)",
          "alt": "Rigi Mountain Bike Velo Radtour"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Seilpark Rigi</h3>\n<p>Auf der Rigi gibt es einen grossen Seilpark. Er bietet leichte und anspruchsvolle Herausforderungen für die Besucher an. Kinder ab 135 cm Grösse dürfen dabei sein. Mitarbeiter geben eine Einweisung und unterstützen bei der Auswahl und Nutzung der Einrichtungen.</p>\n<p>Ab Mitte April öffnet der Seilpark bis in den Herbst hinein. Am Restaurant Alpenhof <strong>oberhalb von Küssnacht</strong> ist der grosse Seilpark zu finden. Insgesamt sieben Baumgipfelrouten sind auf einer Gesamtlänge von vier Kilometern vorhanden. Die Höhe variiert bei den unterschiedlichen Wipfelwegen. Es kann von Route zu Route gewechselt werden. Verschiedene Herausforderungen warten auf Besucher. Der Seilpark ist als „Safety in Adventures“ zertifiziert. Eine besondere Herausforderung stellt die Route Viper dar. Die 25 Meter hohe Kletterschlange ist auch für geübte Seilparkgänger eine besondere Herausforderung.</p>\n<p>Der Seilpark ist von mittwochs bis sonntags zwischen 10 Und 18 Uhr geöffnet. An Feiertagen und in den Schulferien des Kantons Schwyz ist der Park geöffnet (letzter Einlass 16 Uhr). Ab Küssnacht wird der Seilpark mit dem Auto oder zu Fuss erreicht. Über die Seebodenstrasse, Hofstrasse, Zweimattstrasse, Hofhalde und den Alten Seebodenweg erreicht man den Seilpark nach etwa 1,2 Kilometern.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/seilpark_94c0da9fa2.jpg",
          "caption": "Seilpark (Foto: Rigi Bahnen)",
          "alt": "Rigi Seilpark"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/36_Rigi_Seilpark_Rigi_Bahnen_AG_b8eddfbe57.jpg",
          "caption": "Seilpark (Foto: Rigi Bahnen)",
          "alt": "Rigi Seilpark"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Kinderspielplätze</h3>\n<p>Mehrere Kinderspielplätze sind ein Magnet für die Kinder und können mit leichten Wanderungen (beispielsweise Zwärgliweg) kombiniert werden.</p>\n<p>Auf der Rigi gibt es fünf grosse Kinderspielplätze:</p>\n<ul>\n<li>Spielplatz Rigi Burggeist </li>\n<li>Spielplatz Rigiland </li>\n<li>Spielplatz Rigi Scheidegg </li>\n<li>Abenteuerspielplatz Tierpark </li>\n<li>Robinson-Spielplatz Goldau</li>\n</ul>\n<p>Drei der Spielplätze werden hier näher erläutert. Alle Kinderspielplätze (ausser Tierpark) sind rund um die Uhr geöffnet.</p>\n<h4>Spielplatz Rigi Burggeist</h4>\n<p>Der Kinderspielplatz Rigi Burggeist befindet sich neben dem Berggasthaus Burggeist. Ein sechs mal sechs Meter grosses „Eile mit Weile“ und Mühlespiel ist auf dem Dach der Luftseilbahnstation aufgebaut. Zum Spielplatz kommt man über die Luftseilbahn von Obergschwend oder zu Fuss von Rigi Scheidegg (10 Gehminuten).</p>\n<h4>Spielplatz Rigiland</h4>\n<p>Der Naturspielplatz Rigiland liegt in der Nähe des Dorfplatzes von Rigi Kaltbad. Sandkasten, Spielgeräte und Kletterfelsen sind vorhanden. Hier befinden sich auch in direkter Nähe zwei Feuerstellen inklusive Feuerholz.</p>\n<p>Der Spielplatz wird sowohl über die Zahnradbahn von Vitznau als auch die Luftseilbahn von Weggis erreicht. Ab der Bahnstation sind es nur wenige Minuten zu Fuss. \nHier beginnt auch der <strong>Wildmannli Erlebnispfad</strong>, der bis zum Aussichtspunkt Känzeli führt.</p>\n<h4>Spielplatz Rigi Scheidegg</h4>\n<p>Der Kinderspielplatz Rigi Scheidegg ist neben dem Berggasthaus gelegen. Er hat die vielseitigsten Spielmöglichkeiten aller Rigi-Spielplätze. Neben Klettergeräten gibt es hier ein Abenteuerschiff und ein grosses Bodentrampolin.</p>\n<p>Die Rigi Scheidegg Arche, ein Aussichtspunkt, liegt direkt neben dem Spielplatz. Toiletten und Feuerstellen mit Feuerholz sind vorhanden. Erreicht wird der Spielplatz mit der Luftseilbahn Kräbel-Rigi Scheidegg. Von der Bahnstation aus sind es fünf Gehminuten.  Der Kinderspielplatz Rigi Burggeist ist nur zehn Gehminuten entfernt.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/37_Rigi_Spielplatz_Gersau_im_Sommer_Rigi_Bahnen_AG_909656e8bd.jpg",
          "caption": "Spielplatz Gersau (Foto: Rigi Bahnen)",
          "alt": "Rigi Spielplatz"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/38_Rigi_Kinderspielplatz_Rigi_Bahnen_AG_aab22d7d6f.jpg",
          "caption": "Spielplatz (Foto: Rigi Bahnen)",
          "alt": "Rigi Spielplatz"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Lamatrekking</h3>\n<p>Das Lamatrekking wird von <strong>rigi-lama</strong> auf der Seebodenalp über verschiedene Wanderwege durchgeführt. Der Treffpunkt ist in Grod auf der Seebodenalp oder in Küssnacht an der Talstation der Luftseilbahn. Die Touren enthalten eine Rast.</p>\n<p>Dazu gehören:</p>\n<ul>\n<li>Panoramaweg zwischen Grod (Seebodenalp) und Alpwirtschaft Ruodisegg 2,5 Stunden</li>\n<li>Gletscherweg von Grod über die Alp Holderen zur Alpwirtschaft Ruodisegg oder zurück 2-3,5 Stunden</li>\n<li>Chümimattliweg von Küssnacht bis zur Seebodenalp 2,5 Stunden</li>\n<li>Grüzi-Weg von Seeboden über die Alp Holderen nach Rigi Staffel (mit 800 Höhenmetern) 2,5-3 Stunden</li>\n</ul>\n<p>Auf Wunsch gibt es dazu ein Apero. Das Trekking wird auch für Gruppen/Schulklassen durchgeführt. Lamatrekking wird von April bis Oktober angeboten.</p>\n<h3>Minigolfplatz an der Rigi Kaltbad</h3>\n<p>Die Minigolfanlage ist grosszügig gebaut und im Parkwald nahe der Bergstation Rigi Kaltbad zu finden. Schläger und Bälle können in Kaltbad ausgeliehen werden. Gruppen sollten sich vorab anmelden, da insgesamt nur 60 Schläger zur Verfügung stehen.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/39_Rigi_Lama_Trekking_Rigi_Bahnen_AG_a72ed3b112.jpg",
          "caption": "Lama Trekking (Foto: Rigi Bahnen)",
          "alt": "Rigi Lama Trekking"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/40_Rigi_Minigolf_Rigi_Bahnen_AG_d7a53b3983.jpg",
          "caption": "Mini Golf (Foto: Rigi Bahnen)",
          "alt": "Rigi Mini Golf"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Gleitschirmfliegen von der Rigi</h3>\n<p>Mit dem Gleitschirm von der Rigi zu fliegen ist das ganze Jahr über möglich. Drei Startplätze und drei Landeplätze gibt es. Von drei regionalen Flugschulen für Paragliding werden Tandemflüge angeboten.</p>\n<p>Die Dauer beim Tandem Gleitschirmfliegen von der Rigi bestimmst du selbst. Es sind 10, 20 oder auch 40 min Flug mit einem erfahrenen Tandempiloten möglich.</p>\n<h4>Startplätze:</h4>\n<p>Bedingt durch die Ausdehnung des Rigi-Massivs werden <strong>vier Startplätze</strong> genutzt, die sich nicht nur in der Aussicht, sondern auch in ihrer Schwierigkeit unterscheiden.</p>\n<ul>\n<li><p><strong>Kulm: GPS-Koordinaten: 47° 03′ 25“ N, 8° 29′ 18’’ O Höhe 1752 Meter:</strong> Bei S/SW-Wind wird der eher einfache Startplatz am Ende der Remise genommen. Bei S/SO Wind geht man etwa 4 Minuten am Ende der Remise links nach oben. Unterhalb des Fussweges liegt die flache, ins steile abfallende, Wiese (Schwierigkeit Mittel). Zum Bisen Startplatz muss man etwa zehn Minuten am Ende der Remise über den Wanderweg rechts gehen. An der Scheune geht es links weiter bis zum Kreuz. Die kurze Wiese geht ins Senkrechte über, daher ist dies ein anspruchsvoller Startplatz.</p>\n</li>\n<li><p><strong>Staffelhöhe: GPS-Koordinaten: 47° 02′ 52“ N, 8° 27′ 43’’ O Höhe 1566 Meter:</strong> Bei N/NW Wind nutzbar, am Ende des Skiliftes rechts vom Wanderweg. Ab Station Staffel etwa 10 Minuten zu Fuss, ab Staffelhöhe etwa 4 Minuten. Eine kurze Wiese fällt ins Steilere ab. Schwierigkeit: Mittel.</p>\n</li>\n<li><p><strong>Scheidegg: GPS-Koordinaten: 47° 01′ 44“ N, 8° 31′ 17’’ O Höhe 1650 Meter:</strong> Ideal bei Wind von NO/O. Der Startplatz ist ab Bergstation Scheidegg in etwa 3 Minuten rechts erreichbar. Die kurze und flache Wiese geht ins Steile über. Schwierigkeit: Mittel</p>\n</li>\n<li><p><strong>Urmiberg: GPS-Koordinaten: 47° 00′ 44“ N, 8° 35′ 23“ O Höhe 1140 Meter:</strong> Der Höhenunterschied dieses Fluges beträgt 680 bis 910 Meter nach Brunnen im Tal. Das einfache Fluggebiet ist schön gelegen. Der Flug bietet eine fantastische Aussicht über den Urnersee und den Fronalpstock zu beiden Rigi Mythen. Startmöglichkeiten gibt es in alle Windrichtungen. Da der Start- und Landeplatz direkt neben der Bahn liegt, kann hier optimal das Akrofliegen trainiert werden. Es wird direkt über dem Vierwaldstättersee geflogen.</p>\n</li>\n</ul>\n<h4>Landeplätze:</h4>\n<ul>\n<li><p><strong>Arth-Goldau: 47° 03′ 06“ N, 8° 32′ 38’’ O Höhe 475 Meter:</strong> Parallel zur Hauptstrasse zwischen Arth und Goldau findet man die einfache Landewiese. Sie darf auf der Fläche benutzt werden, die oberhalb des Zufahrtsweges zum Bauernhof verläuft.</p>\n</li>\n<li><p><strong>Arth-Goldau: 47° 03′ 06“ N, 8° 32′ 38’’ O Höhe 475 Meter:</strong>  Parallel zur Hauptstrasse zwischen Arth und Goldau findet man die einfache Landewiese. Sie darf auf der Fläche benutzt werden, die oberhalb des Zufahrtsweges zum Bauernhof verläuft. Ein Windsack ist auf dem Silo angebracht. Kommt der Wind vom Zugersee, wird mit Rechtsvolte angeflogen, bei Bergwind mit Linksvolte. Als Faltplatz dient neben dem Fussweg eine kleine Wiese. Zum Bahnhof oder zur Talstation der Rigibahnen sind es von hier etwa sechs Gehminuten.</p>\n</li>\n<li><p><strong>Greppen: GPS-Koordinaten: 47° 04′ 02.50“ N, 8° 26′ 07.34’’ O Höhe 460 Meter:</strong> Unterhalb des Startplatzes Staffenhöhe ist die einfache Landewiese, parallel zur Hauptstrasse, zu finden. Bis zur Busstation sind es etwa acht Minuten zu Fuss.</p>\n</li>\n<li><p><strong>Weggis: GPS-Koordinaten: 47° 2′ 0.18“ N, 8° 26′ 31.29’’ O Höhe 490 Meter:</strong> Auf der Wiese neben der Talstation der Luftseilbahn Weggis kann auf der Wiese gelandet werden. Die Landung erfolgt parallel zur Zufahrtsstrasse. Sie ist eher schwierig und sollte bei starker Bise (Hochnebel) nicht benutzt werden (LEE).</p>\n</li>\n<li><p><strong>Brunnen: GPS-Koordinaten: 47° 00′ 04“ N, 8° 35′ 31“ O Höhe 440 Meter:</strong> Eine Wiese unterhalb des Startpunktes Staffelhöhe mit acht Minuten Entfernung zur nächsten Bushaltestelle.</p>\n</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/41_Rigi_Gleitschirmfliegen_Mountain_O_Clock_2063037224.jpg",
          "caption": "Gleitschirmfliegen Tandem (Foto: Mountain O´Clock)",
          "alt": "Rigi Gleitschirmfliegen Tandem"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/42_Rigi_Gleitschirmfliegen_Rigi_Bahnen_AG_f46c4bea7b.jpg",
          "caption": "Gleitschirmfliegen (Foto: Rigi Bahnen)",
          "alt": "Rigi Gleitschirmfliegen"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Fahrt mit der historischen Zahnradbahn Vitznau</h3>\n<p>Eine Fahrt in einem der historischen Wagen der Zahnradbahn gilt als ein besonderes Erlebnis. Die Wagen stammen aus den Jahren 1871 bis 1911. In ihnen ist die Rundsicht ungehindert und an frischer Luft gegeben. Die Dampfloks Nr. 16 oder 17 sind Höhepunkte der historischen Fahrten. Sie stammen aus 1923 und 1925 und wurden wie die alten Passagierwägen liebevoll restauriert.</p>\n<p>Folgende Erlebnisse mit der historischen Zahnradbahn werden angeboten:</p>\n<ul>\n<li>Nostalgische Winterdampffahrt </li>\n<li>Jubiläums – Depotführungen </li>\n<li>Lok 7-Pendelfahrten </li>\n<li>Nostalgie-Dinner mit Niklaus Riggenbach</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/44_Rigi_Vitznau_Historisch_Rigi_Bergbahn_Zahnradbahn_Rigi_Bahnen_AG_851bd0d43e.jpg",
          "caption": "historische Dampffahrt (Foto: Rigi Bahnen)",
          "alt": "Rigi historische Dampffahrt"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/43_Rigi_Lok_in_Fahrt_Historisch_Rigi_Bergbahn_Zahnradbahn_Rigi_Bahnen_AG_27ab43c7b5.JPG",
          "caption": "historische Dampffahrt (Foto: Rigi Bahnen)",
          "alt": "Rigi historische Dampffahrt"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Wellness auf der Rigi</h3>\n<p>Auf der Rigi gibt es Natur-Wellness in einer intakten Natur. Die beeindruckende Alpenflora und einmalig schöne Sonnenuntergänge lassen sich prima miteinander zu einem Gesamterlebnis vereinen. Ein paar Tage im Hotel in Kaltbad verwöhnen lassen und zwischendurch auf romantischen Wanderungen Wasserfälle, ausgewaschene Bachläufe und Felsbecken besuchen. Man kann die unterschiedlichen Kraftorte direkt körperlich spüren und Kraft tanken für den Alltag. Eine besondere Zugabe ist die einmalig schöne Aussicht auf die Bergketten und Seenlandschaften rundum. Neben dem zum Hotel Rigi Kaltbad gehörenden Mineralbad &amp; Spa hat die Rigi auch ein Molkebad auf der Alp Chäserenholz zu bieten.</p>\n<h4>Mineralbad &amp; Spa im Hotel Rigi Kaltbad</h4>\n<p>Das Mineralbad &amp; Spa wirbt mit „Entspannung, Erholung und Entschleunigung im autofreien Rigi Kaltbad“.\nEin grosses Innenbecken ist mit riesigen Nischen ausgeprägt. Von hier aus kommen Besucher direkt in das Aussenbecken, das beheizt und mit Mineralien angereichert ist. So kann es das ganze Jahr über genutzt werden. Das Alpen-Panorama rundum lässt das Bad besonders geniessen. Das mineralhaltige Wasser stammt aus der Heilquelle des Drei-Schwestern-Brunnens.</p>\n<p><strong>Folgendes wird im Innen- und Aussenbereich der Badelandschaft angeboten:</strong></p>\n<ul>\n<li>Whirlpool</li>\n<li>Sprudelsitze mit Bergpanorama</li>\n<li>Massagedüsen aufsteigend von Kopf bis Fuss</li>\n<li>Flachwasserzone</li>\n<li>Nackenduschen</li>\n<li>Kräuterdampfbad</li>\n<li>Sprudelliegen</li>\n<li>Liege- und Ruhe-Bereich beim Innenbad</li>\n<li>Sonnendeck mit Liege- und Lounge-Bereich</li>\n</ul>\n<p>Neben der Badelandschaft gibt es im Untergeschoss des Mineralbad &amp; Spa auch Saunen, Spa-Lounges, Massagen und ein Kristallbad. Hier werden Massagen angeboten und Getränke und kleinere Speisen gibt es im «Botta Kaffee».</p>\n<p>Mit einem  Kombiticket kombinierst du <a href=\"/rigi-kaltbad/rigi-kaltbad-mineralbad-spa-tagesticket-schifffahrt/\">Zahnradbahn, Schiff und Wellness auf der Rigi</a> und hast den ganzen Tag Zeit dafür. </p>\n<h4>Alpenwellness Chäserenholz</h4>\n<p>Auf der Alp sind auch Übernachtungen möglich. Inbegriffen ist ein Älplerfrühstück mit hausgemachten Spezialitäten.</p>\n<p><strong>Auf der Alp werden folgende Wellnessanwendungen angeboten:</strong></p>\n<ul>\n<li>Molkebad im Holzbottich (Ende Mai bis Ende August)</li>\n<li>Outdoor-Whirlpool</li>\n<li>Alpensauna</li>\n</ul>\n<p>Von der Rigi Kulm wird die Alp Chäserenholz in etwa zwanzig Minuten Fussmarsch erreicht. Vorherige Anmeldungen sind erforderlich.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/wellnessfass_1e87821f09_d1df9325f9.jpg",
          "caption": "Chäserenholz Molkebad (Foto: Rigi Bahnen)",
          "alt": "Rigi Molkebad auf der Alp Chäserenholz"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/45_Rigi_Kaltbad_Wellness_Paar_Rigi_Bahnen_AG_09aec19f91.jpeg",
          "caption": "Kaltbad Wellness (Foto: Rigi Bahnen)",
          "alt": "Rigi Wellness Kaltbad"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Fahrten mit der Pferdekutsche / dem Pferdeschlitten</h3>\n<p>Im Sommer wie Winter werden Kutschenfahrten auf der Rigi durchgeführt. Nach starkem Schneefall finden die Kutschenfahrten auf dem Pferdeschlitten statt.</p>\n<p>Folgende Fahrten gibt es:</p>\n<p> <strong>Einfache Fahrten ab Kaltbad nach (oder in umgekehrter Richtung):</strong></p>\n<ul>\n<li>First</li>\n<li>Känzeli</li>\n<li>Wölfertschen</li>\n<li>Unterstetten</li>\n<li>Scheidegg</li>\n</ul>\n<p><strong>Rundfahrten:</strong></p>\n<ul>\n<li>Kaltbad-First-Kaltbad (30 min)</li>\n<li>Kaltbad-Känzeli-Kaltbad (30 min)</li>\n<li>Kaltbad-Unterstetten-Kaltbad (60 min)</li>\n</ul>\n<p>Besonders romantisch wird es, wenn die Fahrt mit Pferdekutsche oder Pferdeschlitten mit einem Fondueplausch oder einem Gläschen Rigi-Schaumwein ergänzt wird.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/DSC_5526_reference_db4ad5f226_64b5f88fb5.jpg",
          "caption": "Kutschenfahrt Sommer (Foto: Rigi Bahnen)",
          "alt": "Rigi Kutschenfahrt Sommer"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/pferdeschlitten_91274c989f_817c35bb7b.jpg",
          "caption": "Pferdeschlitten (Foto: Rigi Bahnen)",
          "alt": "Rigi Pferdeschlitten"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Skifahren und Snowboarden, Freeride – Skifahren</h3>\n<p>An der Rigi sind zahlreiche Pisten vorhanden. Die aktuell geöffneten Pisten sind auf diesem [interaktiven Pistenplan] einsehbar. </p>\n<p>Mit einer <a href=\"/rigi/rigi-ski-tageskarte/\">Tageskarte für Ski und Rigi-Bergbahnen</a> geniesst du ganz entspannt deinen Skitag. Sie gilt auf den Pisten der drei Rigi Skigebiete und enthält unbegrenzte Fahrten mit Skiliften und Bergbahnen. </p>\n<h4>Rigi Skiüberschreitung</h4>\n<p>Diese Skitour ist eine Mischung aus Skiwanderung und Freeride.</p>\n<ul>\n<li>12.8 km</li>\n<li>4:00 Std.</li>\n<li>647 Höhenmeter aufwärts</li>\n<li>1941 Höhenmeter abwärts</li>\n</ul>\n<h4>Skifahren Rigi Staffel</h4>\n<p>4 Skilifte sind im Gebiet von Staffel vorhanden. Etliche leichte bis mittelschwere Pisten stehen für Ski- und Snowboardvergnügen zur Verfügung.</p>\n<p><strong>Pistenübersicht Staffel:</strong></p>\n<ol>\n<li>First-Klösterli (rot)</li>\n<li>Wölfertschentäli (rot)</li>\n<li>Ständli Standard (blau)</li>\n<li>Ständli (blau)</li>\n<li>Rotstock (rot)</li>\n<li>Trainer (blau)</li>\n<li>Gratalp (blau)</li>\n</ol>\n<h4>Skifahren Rigi Scheidegg/Burggeist</h4>\n<p>5 km bestens präparierte Alpinpisten warten auf Anfänger, fortgeschrittene Skifahrer und Snowboarder. Zwei Kinderskilifte Scheidegg und Burggeist sind vorhanden. Das Skigebiet  ist Ausgangspunkt für Tourengeher und Langläufer. Die Pisten sind Obermatt (blau) und Burggeist-Gschwänd (blau).</p>\n<p>Nach besonders ergiebigen Schneefällen ist das Skigebiet Burggeist ein Geheimtipp bei allen Freeridern.</p>\n<h4>Skifahren Rigi Seebodenalp</h4>\n<p>Zwei blaue Pisten mit insgesamt zwei Kilometern Länge und eine rote Piste mit 500 Metern Länge sind im Skigebiet Seebodenalp vorhanden. Das eher kleine Skigebiet ist auch für Kinder und Anfänger gut geeignet. Einmal im Monat findet hier Nachtskifahren statt. <a href=\"https://www.skilifte-seebodenalp.ch/\">Liste der Skilifte</a> der Seebodenalp.</p>\n<p>Der Skilift Seebodenalp führt hinauf zur Wissiflue auf 1225 Metern über Meer. im Gebiet Holderen gibt es vor dem Pistenrestaurant Holderen einen Kinderlift. Ab Wissiflue führen drei Pisten: Holderen (blau), Wissiflue (rot) und Grod (blau).</p>\n<h4>Skischule Kaltbad und Familienskilift Gratalp</h4>\n<p>Die Schneesportschule an der Casa Margherita in Kaltbad steht nicht nur für Anfänger bereit, auch Fortgeschrittene lernen hier dazu. Der Schneesportunterricht basiert auf der Einheitsmethodik, die von der Schweizerischen Skischule entwickelt wurde.</p>\n<p>Die Piccolo Gruppe ist für die kleinen Kinder da und dient dem Kennenlernen von Schnee und Ski. Anfänger lernen die Ausrüstung kennen, üben das Gleiten und Bremsen, das Treppensteigen usw. Für Fortgeschrittene gibt es beispielsweise Kurse zum Parallelschwingen in nicht präpariertem Schnee, für Carvingsprünge und Kurzschwingen mit Stockeinsatz auf einer schwierigen Piste.</p>\n<p>Oberhalb von Kaltbad befindet sich der gemütliche Familienskilift Gratalp.  Er ist geeignet, um das Skifahren und Snowboarden zu erlernen. Unterhalb des Skiliftes kann man ins Gratalp-Stübli einkehren.</p>\n<h4>Skifahren für Kinder</h4>\n<p>Die verschiedenen Kinderskilifte an der Rigi stehen auch Anfängern offen.</p>\n<p><strong>Im Einzelnen sind das:</strong></p>\n<ul>\n<li>Pinocchio - Rigi First: Skikarussell und kleiner Schlepplift</li>\n<li>Kidsland - Rigi Staffel: neben dem Rotstock Skilift mit Schlangenpisten und Wellenmulden</li>\n<li>Kinderskilift – Rigi Scheidegg unweit der Terrasse des Berghauses</li>\n<li>Kinderskilift – Rigi Burggeist neben der Terrasse des Berghauses </li>\n<li>Kinderskilift Holdern – Seebodenalp: auf einem sonnigen Hochplateau über Küssnacht</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/49_Rigi_Skifahren_mit_Kindern_Rigi_Bahnen_AG_82e696ed12.jpg",
          "caption": "Skifahren Kinder (Foto: Rigi Bahnen)",
          "alt": "Rigi Skifahren Kinder"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/50_Rigi_Skifahren_Hero_Rigi_Bahnen_AG_033b68649a.jpg",
          "caption": "Skifahren  (Foto: Hero Rigi Bahnen)",
          "alt": "Rigi Skifahren"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Schlitteln</h3>\n<p>Zum Schlitteln sind nicht nur die klassischen Schlitten und Rodel geeignet. Ob Snooc-Ski, Skigibel oder Skibock: sie funktionieren ganz ähnlich. Mieten kann man sie in einem der Vermietungscenter.</p>\n<p>Ein <a href=\"/rigi/schlitteln-rigi-tagesticket-inkl-bahn/\">Tagesticket Bergbahn und Schlitteln</a> ist sehr praktisch. Es lässt dich nach Lust und Laune einen Tag lang alle Schlittelpisten und Bergbahnen der Rigi nutzen.</p>\n<h4>Vermietungscenter für Rodel</h4>\n<p>Auf dem Rigi Kulm steht das Vermietungscenter direkt neben der Bergstation. Vermietet werden:</p>\n<ul>\n<li>gepolsterte Schlitten</li>\n<li>Schlitten mit Kindersitzen\nDas Vermietungscenter Rigi Burggeist vermietet ebenfalls Schlitten.</li>\n</ul>\n<h4>Schlittelweg Rigi Kulm-Schwändi-Rigi Klösterli</h4>\n<p>Der Schlittelweg ist etwa vier Kilometer lang und eher steil. Daher kommt es zu teilweise rasanten Abfahrten. Dennoch handelt es sich um eine eher leichte Schlittelstrecke.</p>\n<p>Der Weg startet am Rigi Kulm am Ende der Gleise der Rigi Bahnen. Er führt an der Alpwirtschaft Chäserenholz vorbei nach Schwändi. Von hier geht es hinunter nach Rigi Klösterli. Die Alpwirtschaft Heirihütte steht am Ende des Schlittelweges. Sportpendelzüge ab Klösterli bringen die Schlittler wieder zurück auf den Kulm zum Startpunkt. Auf den Rigi Kulm fahren die Zahnradbahnen ab Vitznau und ab Arth.</p>\n<ul>\n<li>3.5 km</li>\n<li>0:30 Std.</li>\n<li>36 Höhenmeter aufwärts</li>\n<li>468 Höhenmeter abwärts</li>\n</ul>\n<h4>Schlittelweg Rigi Staffelhöhe-Rigi Kaltbad</h4>\n<p>Ab Staffelhöhe geht der mit 600 m Metern kürzeste Schlittelweg der Rigi in fünfzehn Minuten 121 Meter hinunter nach Kaltbad. Der Schlittelweg führt von der Bahnstation Staffelhöhe entlang der Gleise der Rigi Bahnen.</p>\n<p>Zur Staffelhöhe kommt man mit der Zahnradbahn ab Vitznau, die die Schlittler auch von Kaltbad zurück zur Staffelhöhe bringt.</p>\n<h4>Schlittelweg Rigi Staffel-Tschungeli-Rigi Klösterli</h4>\n<p>Der 2,4 Kilometer lange Weg führt ab Rigi Staffel entlang der Skipiste in Richtung Rotstock Skilift. Die Schlittelpiste liegt mehrheitlich im Wald. Ab Rigi Klösterli bringen Sportpendelzüge die Schlittler wieder zurück zum Start nach Staffel.</p>\n<p>Am Startpunkt steht das Restaurant Bahnhöfli, am Ende der Piste das Restaurant zum Goldenen Hirschen. Nach Staffel kommen Besucher mit der Zahnradbahn ab Vitznau.</p>\n<h4>Schlittelweg Rigi Kulm-Staffel-Klösterli</h4>\n<p>Dieser Schlittelweg vereint zwei kleinere Schlittelpisten: Kulm-Staffel und Staffel-Klösterli. Er ist 3.1 km lang und sehr beliebt bei Rigi-Ausflüglern. Beide Zahnradbahnen fahren von Vitznau bzw. Arth auf den Rigi Kulm. Die Schlittelpiste führt entlang der Gleise. In einer halben Stunde Fahrt werden 439 Meter nach unten überwunden.</p>\n<h4>SNOOC – Schlittelweg Rigi Burggeist-Gschwänd</h4>\n<p>Der Schlittelweg ist vier Kilometer lang und führt von Rigi Burggeist nach Gschwänd. Die Schlittelpiste ist für Anfänger und Profis gleichermassen geeignet.</p>\n<p>Startpunkt ist in Rigi Burggeist auf 1551 Metern über Meer. Die Rodelstrecke führt via Gätterlipass hinunter nach Gschwänd. Von hier aus kann mit der Luftseilbahn Obergschwend-Rigi Burggeist wieder hinaufgefahren werden nach Rigi Burggeist.</p>\n<p>Das Gasthaus Gätterli und das Restaurant Gätterlipass liegen an der Strecke, in Burggeist gibt es das Berggasthaus Burggeist und in Gschwänd das Restaurant Obergschwend.</p>\n<ul>\n<li>3.8 km</li>\n<li>0:13 Std.</li>\n<li>538 Höhenmeter abwärts</li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/52_Rigi_Schlitteln_Hero_Rigi_Bahnen_AG_1c43d0b389.jpg",
          "caption": "Schlitteln (Foto: Hero Rigi Bahnen)",
          "alt": "Rigi Schlitteln"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/51_Rigi_Schlitteln_Rigi_Bahnen_AG_800beaf375.jpg",
          "caption": "Schlitteln (Foto: Rigi Bahnen)",
          "alt": "Rigi Schlitteln"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Winterwandern</h3>\n<p>Auch im Winter kann man auf der Rigi wunderbar wandern und dem Nebel im Tal entfliehen. Traumhafte Winterwanderwege finden sich am Fusse der Kulm. </p>\n<p><strong>Zu den beliebtesten Wanderwegen gehören:</strong></p>\n<ul>\n<li>Wanderweg Seebodenalp</li>\n<li>Kaltbad - Klösterliweg</li>\n<li>Kaltbad - Firstweg</li>\n<li>Winterwanderung Rigi Klassiker</li>\n</ul>\n<h4>Wanderweg Seebodenalp</h4>\n<p>Die Wanderung beginnt und endet an der Seebodenalp. Hierher gelangt man über die Luftseilbahn Küssnacht. Der Weg führt zur Alpwirtschaft Räbalp. Die Holderenhütte und das Grodstübli sind weitere Einkehrmöglichkeiten. Nur 54 Höhenmeter machen den einstündigen Weg zu einem gemütlichen Spaziergang.</p>\n<h4>Kaltbad - Klösterliweg</h4>\n<p>Ab Kaltbad über First führt der Weg nach Klösterli. Nach Kaltbad gelangen Wanderer über die Luftseilbahn von Weggis. Die leichte Wanderung dauert eine Dreiviertelstunde und führt gemächlich bergab. Besonders schöne Ausblicke mit schneebedeckten Gipfeln über dem See gibt es von der Rigi First. Nach dem Abstieg lädt die Alpwirtschaft Heiri-Hütte zum Älpler-Imbiss ein.</p>\n<p>Von Klösterli führt die Zahnradbahn hinab ins Tal nach Arth-Goldau. Zurück nach Weggis geht es mit dem IR der Südostbahn nach Küssnacht und von dort mit dem Bus 502 nach Weggis.</p>\n<h4>Kaltbad - Firstweg</h4>\n<p>Eine halbe Stunde dauert der Weg von Kaltbad nach First und zurück. Ein moderater An- und Abstieg lässt ihn zu einem gemütlichen Spaziergang mit schönem Ausblick werden. Nach Kaltbad gelangen Ausflügler über die Luftseilbahn ab Weggis oder mit der Zahnradbahn von Vitznau.</p>\n<h4>Winterwanderung Rigi Klassiker</h4>\n<p>Der Klassiker der Winterwanderungen von der Rigi Kulm führt über Staffel, Staffelhöhe und Rigi Kaltbad als eher gemütliche Wanderung, es geht stetig bergab. Unterwegs gibt es mehrere Möglichkeiten zum Einkehren.</p>\n<h3>Schneeschuhtouren</h3>\n<p>Die Schneeschuhtouren sind in der Regel ebenso gut beschildert wie Wanderungen. Insbesondere leichte Schneeschuhwanderungen sind ohne grösseres Training zu bewältigen. \nUnter Begleitung eines routinierten Guides kommt man nicht so leicht vom Wege ab. \n<strong>Zu den beliebtesten Schneeschuhtouren gehören:</strong></p>\n<ul>\n<li>Rundwanderung Rigi Burggeist</li>\n<li>Rigi via Chäserenholz</li>\n<li>Einsteigertour</li>\n</ul>\n<h4>Rundwanderung Rigi Burggeist</h4>\n<p>Eine etwa sechs Kilometer lange Schneeschuhwanderung führt von Rigi Burggeist über Hinter Dossen und Schneealp zur Scheidegg. Hier kann die Aussicht genossen werden. Weiter geht die Wanderung über Scheidegghüttli zurück nach Rigi Burggeist. Dieser Trail gilt als ruhig und ist ein besonderer Geheimtipp.</p>\n<p>Schneeschuhe und Stöcke können im Berggasthaus Rigi Burggeist gemietet werden. Ebenfalls im Berggasthaus erhält man eine Karte dieser Schneeschuhtour.</p>\n<h4>Rigi via Chäserenholz</h4>\n<p>Ein zweistündiger leichter Schneeschuhtrail führt von dem Rigi Kulm talwärts zur Oberen Schwändi. Über Chäserenholz geht es zurück zum Kulm. Auf dem Weg liegt die Alp Chäserenholz.</p>\n<h4>Einsteigertour</h4>\n<p>Die leicht zu gehende Tour dauert etwa 1.5 Stunden. Sie verläuft auf markierten Wegen. Staffel ist der Startpunkt des Weges, auf dem gleich zu Beginn 150 Höhenmeter entlang der Bahnlinie erklommen werden müssen. Nach Erreichen des Kulms erfolgt der Abstieg über die Kulmhütte. Südöstlich geht es weiter nach Schwändi. Klösterli ist der Endpunkt der Tour.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/aussicht_rigi_scheidegg_550be8930d_78d96d31dd.jpg",
          "caption": "Schneeschuhwandern Scheidegg (Foto: Rigi Bahnen)",
          "alt": "Rigi Schneeschuhwandern Aussicht von Rigi Scheidegg"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/54_Rigi_Winter_Wandern_Rigi_Bahnen_AG_235b4a4859.jpg",
          "caption": "Schneeschuhwandern (Foto: Rigi Bahnen)",
          "alt": "Rigi Schneeschuhwandern"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Schlittschuhlaufen, Eisstockschiessen und Curling</h3>\n<p>In Kaltbad gibt es im Winter ein Natureisfeld, das für Eisstockschiessen und Schlittschuhlaufen mit Blick auf die Berge genutzt werden kann. Am Fusse der Rigi in Küssnacht stehen zwei Eishallen zur Verfügung, in einer von ihnen ist auch Curling möglich.</p>\n<h4>Natureisfeld Kaltbad</h4>\n<p>Das Eisfeld ist immer dann in Betrieb, wenn die Schneeverhältnisse dies zulassen. \nDas Hotel Rigi Kaltbad verleiht kostenlos Schlittschuhe, die Nutzung des Natureisfeldes ist ebenfalls kostenlos. Es wird häufig zum Eisstockschiessen genutzt. Erreicht wird Kaltbad mit der Zahnradbahn ab Vitznau und mit der Luftseilbahn von Weggis.  </p>\n<h4>Curlinghalle Küssnacht</h4>\n<p>Die 4-Rink Curlinghalle liegt in Küssnacht zentral am Ebnetweg 3. Neben Curlingclubs können in der Halle auch Vereine und Privatpersonen trainieren. Die Curlingsaison geht von September bis März/April. Ausserhalb dieser Zeit wird die Halle für Ausstellungen und Veranstaltungen genutzt.</p>\n<p>In der Curlinghalle gibt es einen Curlingshop. Hier wird man professionell bei der Auswahl der passenden Ausrüstung beraten. Das Curling Bistro bietet kleine Schweizer und Thailändische Gerichte. </p>\n<h4>Eishalle Küssnacht</h4>\n<p>Die zweite Eishalle in Küssnacht steht in Oberdorf 79. Die Rigihalle besitzt neben einem gedeckten Eisfeld auch ein Ausseneisfeld. Während der Eissaison von September bis März/April ist der öffentliche Eislauf wichtigstes Kriterium. Daneben gibt es die Möglichkeit, an Eisstockveranstaltungen teilzunehmen oder Hockey-Plauschspiele (für Vereine oder Firmen) zu buchen. Die Hockeyausrüstung kann gemietet werden.</p>\n<p>Für die Verpflegung gibt es das Bistro Pögg mit Selbstbedienung, das den Blick auf das Treiben auf dem Eisfeld ermöglicht.  </p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/57_Rigi_Schlittschuhlaufen_Rigi_Bahnen_AG_fe8c007f88.jpg",
          "caption": "Schlittschuhlaufen (Foto: Rigi Bahnen)",
          "alt": "Rigi Schlittschuhlaufen"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/58_Rigi_Eisstockschiessen_Rigi_Bahnen_AG_9262578fa1.jpg",
          "caption": " Eisstockschiessen (Foto: Rigi Bahnen)",
          "alt": "Rigi Eisstockschiessen"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Skilanglauf</h3>\n<p>Auf der Rigi sind mehrere Langlaufloipen für Skitouren vorhanden.</p>\n<h4>Seebodenalp zur Rüdisegg / Räpalp</h4>\n<p>Die Skilanglaufstrecke beginnt in der Nähe der Bergstation der Luftseilbahn Küssnacht-Seebodenalp und bewegt sich beinahe eben hinüber in Richtung Hinterboden – Räbalp bis Altruodisegg. Die Langlaufloipe ist leicht coupiert und erstreckt sich auf einer Länge von knapp 5 km. Ein beliebter Ausblick ist am Rüdisegg.</p>\n<h4>Langlaufloipe Panoramaweg Kaltbad – First – Unterstetten – Rigi Scheidegg</h4>\n<p>8,6 Kilometer lang ist diese gespurte Langlaufloipe zwischen Kaltbad und Scheidegg über First. Der Aufstieg ist mit 248 Höhenmetern moderat. Die Langlaufausrüstung kann man im Sport-Shop auf Rigi Kaltbad mieten.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/59_Rigi_Langlauf_Rigi_Bahnen_AG_a3ab0ecbd8.jpg",
          "caption": "Ski Langlauf (Foto: Rigi Bahnen)",
          "alt": "Rigi Ski Langlauf"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/60_Rigi_Langlauf_Rigi_Bahnen_AG_344b6d9796.jpg",
          "caption": "Ski Langlauf (Foto: Rigi Bahnen)",
          "alt": "Rigi Ski Langlauf"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Events auf der Rigi</h2>\n<p>Hierzu gehören wechselnde und wiederkehrende Veranstaltungen wie:</p>\n<ul>\n<li>Kunstausstellungen</li>\n<li>Botanische Wanderungen</li>\n<li>Kräuterwanderungen</li>\n<li>Fotoausstellungen</li>\n<li>Ausstellungen zur Schweizer Geschichte und zu Sonderthemen wie Royals</li>\n<li>Rigi Disco mit Grill am Berggasthaus Chalet Schild in Rigi Kaltbad</li>\n<li>Folkloreabende</li>\n</ul>\n<h3>Märchennachmittage auf der Rigi</h3>\n<p>Im Sommer werden ab etwa Mitte Juli bis ca. Ende August mittwochs Märchennachmittage angeboten. Im Juli finden diese im Hotel Rigi Kaltbad statt, im August im Restaurant Lok 7 (früher Restaurant BärgGnuss). Sie dauern eine Stunde und beginnen jeweils 14 Uhr. Die Teilnahme ist ohne Anmeldung möglich und kostenlos.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/61_Rigi_Events_Innen_Rigi_Bahnen_AG_5af1405231.jpg",
          "caption": "Events innen (Foto: Rigi Bahnen)",
          "alt": "Rigi Events innen"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/62_Rigi_Aelplerchilbi_Rigi_Bahnen_AG_60b75bf731.jpg",
          "caption": "Älplerchilbi (Foto: Rigi Bahnen)",
          "alt": "Rigi Älplerchilbi Event"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Berghütten, Skibars, Feriensiedlungen und Restaurants auf der Rigi</h2>\n<p>Auf der Rigi sind etliche Restaurants und Berghütten, in denen Wanderer sich stärken können. Viele von ihnen werden durch die Rigibahnen betrieben. Zusätzlich sind an etlichen Wanderwegen Grillstellen vorhanden, die jeder Ausflügler nutzen darf. Etliche Hotels stehen in Kaltbad. Diese Aufzählung zeigt nur eine Auswahl. </p>\n<h3>Feriensiedlungen auf der Rigi</h3>\n<p>In Kaltbad, Klösterli und auf der Seebodenalp gibt es kleine Feriensiedlungen. </p>\n<h3>Rigi-Kulm-Hotel</h3>\n<p>Das Kulm-Hotel vermietet 33 Zimmer, in denen sogar WLAN vorhanden ist. Die interessante Ausstellung „Vom Pickel bis zum Selfie Stick – 200 Jahre Rigi Kulm“ zeigt Reise-Utensilien der Hotelgäste seit 1816. Im Jugendstil-Speisesaal des Restaurants wird serviert, für die Terrasse gibt es ein Selbstbedienungs-Restaurant. Das Hotel ist berühmt für die Sonnenaufgänge und den 360 ° Rundumblick.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Berggasthaus Rigi Scheidegg</h3>\n<p>Das Berggasthaus Rigi Scheidegg bietet als Übernachtungsmöglichkeiten Doppelzimmer mit Balkon, Dreibettzimmer, aber auch ein Matratzenlager. Das Restaurant beinhaltet:</p>\n<ul>\n<li>50 Plätze Rustikale Wirtschaft</li>\n<li>30 Plätze Heimeliges Scheideggstübli</li>\n<li>80 Plätze Panorama-Sonnenterasse</li>\n<li>Sommer Kinderspielplatz</li>\n</ul>\n<p>Erreichbar ist das Berggasthaus Scheidegg über die Luftseilbahn ab Kräbel nach Rigi-Scheidegg.</p>\n<h3>Berggasthaus Rigi Burggeist</h3>\n<p>Das Berggasthaus Rigi Burggeist steht an der Bergstation der Luftseilbahn, die von Obergschwend heraufkommt. Übernachtungen sind in Doppelzimmern sowie in 3- und 4-Bettzimmern möglich. Der Wintersportbus fährt (nur bei Skibetrieb an den Wochenenden) von Gersau Rathausplatz zur Talstation Obergschwend 09:30 Uhr und 12:30 Uhr sowie retour 16:30 Uhr.</p>\n<h3>Restaurant Bärggnuss</h3>\n<p>Das Restaurant Bärggnuss ist in Rigi Staffel auf 1588 Metern zu finden. Regionale und saisonale Gerichte werden hier als Genusskulinarik serviert. Familienfeste und Events für 25 bis 100 Personen sind im Restaurant möglich. Für Festlichkeiten wird nach Absprache auch montags und dienstags geöffnet. Eine Kinderspielecke ist vorhanden. Das GnussStübli hat 50 Sitzplätze, das Restaurant weitere 100 Plätze. Die Panoramaterrasse ist vorwiegend im Sommer sehr beliebt.</p>\n<h3>Restaurant Bahnhöfli</h3>\n<p>Auf 1603 Metern über Meer steht das Restaurant Bahnhöfli. Es ist spezialisiert auf Käsefondue, Raclette und saisonale kleine Gerichte. Das Selbstbedienungs-Restaurant steht direkt an der Bahnstation Rigi Staffel. Ein Kinderspielplatz ist vorhanden. An den Wochenenden gibt es Grilladen im Grillwagen auf der Terrasse.</p>\n<h3>Gourmetrestaurant und Bistro Regina Montium</h3>\n<p>Das zum Kräuter Hotel Edelweiss in Rigi Kaltbad gehörende Restaurant Regina Montium hat ein romantisches und familiäres Ambiente. Warme Küche wird in der Zeit von 18:30 bis 21:00 Uhr angeboten. Für die Übernachtung sind Zimmer und Ferienwohnungen vorhanden. Gruppen von 50-100 Personen sind willkommen. Im zugehörigen Bistro wird warme Küche von 11:30 bis 15:00 Uhr angeboten. Es gibt zudem eine Kinderspielecke. Neben 40 Innensitzplätzen sind auch Terrasse und Garten vorhanden.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/63_Rigi_Regina_Montium_Rigi_Bahnen_AG_2d5387ded3.jpg",
          "caption": "Regina Montium  (Foto: Rigi Bahnen)",
          "alt": "Rigi Regina Montium"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/64_Rigi_Kulm_Hotel_Rigi_Bahnen_AG_3bf1bcd2bf.jpg",
          "caption": "Kulm Hotel (Foto: Rigi Bahnen)",
          "alt": "Rigi Kulm Hotel"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Alpwirtschaft Ruodisegg</h3>\n<p>Die auf der Seebodenalp gelegene Alpwirtschaft Ruodisegg ist im Winter nicht geöffnet. Die Saison geht von Mitte April bis Mitte November. Angeboten werden Raclette, gegrillte Wurst und Hüttekafi. Die Sonnenuntergänge sind hier besonders schön.</p>\n<h3>Alpencafé Rigi Maison</h3>\n<p>Auf Rigi Scheidegg steht das Alpencafé Maison. Es besitzt eine Terrasse mit wunderbarem Alpenpanorama. Angeboten werden ein ausgiebiges Alpencafèzmorge, selbstgemachte Kuchen und Biokaffee. Es gibt auch Mittagsmenu oder ein feines Zvieri. Alle Speisen werden frisch zubereitet. An jedem dritten Freitag-Abend im Monat wird ab 17 Uhr ein spezielles Abendmenu angeboten.  </p>\n<h3>Alpwirtschaft Chäserenholz</h3>\n<p>Die Alpwirtschaft Chäserenholz enthält eine Käserei, Wellnesseinrichtungen, ein Restaurant und Übernachtungsmöglichkeiten. Das im Sommer angebotene Molkebad im Holztrog ist beliebt und muss einen Tag vorher angemeldet werden. Auf der Alp werden 2- bis 4-Bettzimmer (bis 13 Personen), Matratzenlager (30 Pers.) und Übernachtungen im Heu (25 Pers.) angeboten. Inbegriffen ist ein Älplerfrühstück mit hausgemachten Spezialitäten. Es wird ausschliesslich Barzahlung akzeptiert.</p>\n<p>Erreicht wird die Alp über die Zahnradbahnen bis zum Rigi Kulm und einen anschliessenden Fussmarsch von etwa 20 Minuten. Der Weg führt bergab.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Restaurant Zum goldenen Hirschen</h3>\n<p>Das Restaurant und Hotel Zum goldenen Hirschen steht in Klösterli auf 1.316 Metern Höhe. Es wird gern für Seminare genutzt. Einzel-, Doppel- und Familienzimmer stehen zur Verfügung. Im Restaurant werden Essen aus frischen, kontrolliert-biologischen Produkten aus der Region serviert.</p>\n<h3>Alpwirtschaft Heirihütte</h3>\n<p>Die rustikale und traditionelle Alpwirtschaft Heirihütte steht in Klösterli. Sie bietet für Einheimische und Wanderer Gerichte an. Dazu gibt es traditionelle Musik und Schlafmöglichkeiten. Neben einem Matratzenlager für etwa 34 Personen werden auch zwei Doppelzimmer angeboten.</p>\n<p>Die gemütliche Alpwirtschaft steht etwas abseits der grossen Touristenströme. Neben dem Restaurant gibt es auch eine Aussenterrasse.  </p>\n<h3>Panoramarestaurant</h3>\n<p>Das Panoramarestaurant steht in Rigi Kaltbad und gehört zum Hotel Kaltbad. Es wird von mehreren Wanderwege gestreift und bietet ein herrliches Panorama. Die Zahnradbahn ab Vitznau und die Luftseilbahn ab Weggis erreichen Kaltbad direkt.</p>\n<h3>Klanghotel Bergsonne</h3>\n<p>In Rigi Kaltbad steht das Klanghotel Bergsonne etwas abseits auf 1.500 Metern Höhe. Neben einfachen Tellergerichten tagsüber, wird abends ein wechselndes 3-Gang-Menu angeboten.</p>\n<p>Das Klanghotel lässt Musiktalente im Speisesaal vor kleinem Publikum Musikstücke darbieten, damit sie vor grossen Auftritten üben können.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/65_Rigi_Chaeserenholz_Rigi_Bahnen_AG_4968977604.jpg",
          "caption": "Chäserenholz",
          "alt": "Rigi Chäserenholz"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/66_Rigi_Klanghotel_Bergsonne_Rigi_Bahnen_AG_0fe88e579b.jpg",
          "caption": "Klanghotel Bergsonne",
          "alt": "Rigi Klanghotel Bergsonne"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h3>Alpwirtschaft Räbalp</h3>\n<p>Die Alpwirtschaft Räbalp steht auf 1124 Metern über Meer an einem einzigartigen Aussichtspunkt. Geöffnet ist sie in der Regel Sommer wie Winter von 10:00-17:00 Uhr.</p>\n<p><strong>Zu sehen sind an dieser Stelle gleich fünf Seen:</strong></p>\n<ul>\n<li>Vierwaldstättersee</li>\n<li>Sempachersee</li>\n<li>Baldeggersee</li>\n<li>Hallwilersee</li>\n<li>Zugersee</li>\n</ul>\n<p>In die Berge hinein ist die Sicht bis zu den Juraketten möglich. Die Alpwirtschaft bietet traditionelle Küche und ein gemütliches Massenlager. Der Wanderweg zwischen Seebodenalp und Känzeli führt direkt an der Alpwirtschaft vorbei.</p>\n<p>Erreicht wird die Räbalp mit dem Auto ab Küssnacht oder zu Fuss. Zu Fuss nimmt man die  Luftseilbahn von Küssnacht zur Seebodenalp und läuft von dort über Ruodisegg etwa 45 min via Ruodisegg zur Räbalp.</p>\n<p>Vom Kulm über Kaltbad benötigt man ungefähr 40 Minuten zu Fuss zur Räbalp. Von Greppen her ist der Zustieg in etwa eineinhalb Stunden über einen steilen Bergpfad möglich.</p>\n<h3>Alpwirtschaft Holderen</h3>\n<p>Die Alpwirtschaft Holderen steht auf 1116 m ü. M. und ist etwa zwanzig Gehminuten von der Seebodenalp entfernt. Im Winter wird die Bewirtschaftung vom Ski- und Snowboardclub Küssnacht übernommen. Die Seebodenalp wird mit der Luftseilbahn oder mit dem Auto von Küssnacht erreicht. Hier führen Wanderwege wie der Gletscherweg vorbei.</p>\n<h3>Grod Beizli</h3>\n<p>Die Alpwirtschaft Grod Beizli steht auf etwa 1000 m Höhe. Sie ist in wenigen Gehminuten vom Parkplatz Seebodenalp und von der Seilbahnstation aus erreichbar. Die Alpwirtschaft ist das ganze Jahr über bewirtschaftet. Sie bietet innen für 40 Personen, aussen für 50 Personen Platz. Wanderwege wie der Grüezi Weg führen hier vorbei.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Klima und Wetter an der Rigi</h2>\n<p>Das Rigi Massiv erreicht maximal 1800 m ü. M. und weist ein angenehmes Klima auf. Die sommerlichen Temperaturen liegen im Hochsommer zwischen 6 und 15 °C, wobei sie gern auch Werte über 22 °C erreichen.</p>\n<p>Dir höchsten Niederschlagsmengen erreichen die Monate Mai bis Juli. Allerdings werden auch in diesen Monaten nicht 100 ml/m2 erreicht. Dennoch ist es für Wanderungen ratsam, Regenbekleidung dabei zu haben. Für schwere Bergtouren ist die entsprechende Ausrüstung unbedingt mitzunehmen. Oft werden 1000 Höhenmeter und mehr auf einer mehrstündigen Wanderung überwunden. Dies kann zu gesundheitlichen Problemen führen, wenn du das nicht gewohnt bist.</p>\n<p>Im Winter liegen die durchschnittlichen Temperaturen tagsüber um den Gefrierpunkt. Nachts erreichen die besonders kalten Nächte auch -16 oder -17 °C. Von Dezember bis März musst du dich ausserdem ab und zu auf stärkere Windböen &gt; 28 km/h einstellen.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Rigi: Lage und Anfahrt</h2>\n<p>Die Rigi liegt inmitten der Zentralschweiz und ist dadurch gut erschlossen. Man erreicht sie nicht nur mit Auto, Bahn und Bus, sondern auch mit dem Schiff. </p>\n<h3>Bahnhöfe und Bergbahn-Talstationen</h3>\n<p>Sieben Bahnhöfe und Talstationen der Bergbahnen gibt es an der Rigi.</p>\n<h4>Vitznau</h4>\n<p>In Vitznau starten eine Zahnradbahn und zwei Luftseilbahnen auf das Bergmassiv. Zur Anfahrt können ab Luzern auch Schiffe genutzt werden. Sie benötigen eine Stunde. Der Bus 502 hält auch in Schwyz, Brunnen, Gersau, Weggis und Küssnacht.</p>\n<p>Von den Autobahnen A2 und A4 gelangt man nach Vitznau über die Route 2. Vitznau besitzt zwei gedeckte Parkhäuser. Sie stehen in der Seestrasse und am Altdorfbachweg. Der Fussweg zur Rigi Bahn Talstation beträgt von dort 100 bzw. 250 Meter.  </p>\n<h4>Goldau</h4>\n<p>Nach Goldau kommt man mit regelmässigen Bahnverbindungen von Zürich, Luzern und anderen Orten. Im Bahnhof Arth-Goldau kommst du von Gleis 5 direkt zum historischen Hochperron der Arth-Rigi-Bahn. Die Talstation der Rigi Bahnen befindet sich hier.</p>\n<p>Mit dem Auto gelngst du über die A4  ab der Ausfahrt Nr. 38 nach Goldau. Nur 200 m nach dem Ortseingang ist ein Parkplatz zu finden. Er liegt direkt an der Bahnlinie der Rigi Bahn. In Goldau Eichmatt befindet sich ein weiterer Parkplatz in der Rigistrasse, in direkter Nähe der Bahnstation. Dieser Parkplatz ist jedoch ausschliesslich für Tagesgäste gedacht.</p>\n<h4>Küssnacht</h4>\n<p>Der Bus Nr. 2 hält auch in Küssnacht. Hier steht für Autos eine begrenzte Anzahl an Parkplätzen zur Verfügung.</p>\n<h4>Kräbel</h4>\n<p>Der Parkplatz in Kräbel wird ab Goldau über die Kräbelstrasse erreicht (2 km).</p>\n<h4>Weggis</h4>\n<p>Sowohl mit dem Schiff als auch mit dem Auto ist der Parkplatz Weggis gut erreichbar. Auch der Bus Nr. 2 hält hier (Schiffsanlegestelle). Der Parkplatz ist in einen unteren und einen oberen Parkplatz geteilt. Die ersten 30 Minuten sind gratis.</p>\n<h4>Brunnen</h4>\n<p>An der Talstation der Luftseilbahn Urmiberg sind 40 gebührenpflichtige Parkplätze vorhanden. Der Bus Nr. 2 hält hier ebenfalls.</p>\n<h4>Obergschwend</h4>\n<p>Der kleine Parkplatz in Obergschwend wird ab Gersau über eine enge Bergstrasse erreicht.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/02a_Rigi_Kraebel_Talstation_Bergbahn_Rigi_Bahnen_AG_fc2000f62d.jpg",
          "caption": "Kräbel (Foto: Rigi Bahnen)",
          "alt": "Rigi Kräbel Talstation Bergbahn"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/02b_Rigi_Eichmatt_Talstation_Bergbahn_Goldau_Rigi_Bahnen_AG_36a2ae5d85.jpg",
          "caption": "Eichmatt Bergbahn Goldau (Foto: Rigi Bahnen)",
          "alt": "Rigi Eichmatt Talstation Goldau Bergbahn"
        }
      ],
      "youtubeUrl": null
    }
  ]
} satisfies TGatewayHome;
