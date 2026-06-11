import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewDestinationResponse = {
  "context": {
    "type": "destination",
    "id": "58",
    "title": "Interlaken",
    "slug": "berner-oberland-interlaken",
    "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Interlaken_Hafen_Foto_Schweiz_Tourismus_038251bb34.jpg",
    "lat": 46.6863481,
    "lng": 7.863204899999999
  },
  "staticSections": [
    {
      "id": "destination_hero",
      "component": "hero",
      "breadcrumbs": [
        {
          "label": "Schweiz",
          "href": "/freizeitaktivitaeten/"
        },
        {
          "label": "Interlaken",
          "href": "/berner-oberland-interlaken/"
        }
      ],
      "title": "Interlaken",
      "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Interlaken_Hafen_Foto_Schweiz_Tourismus_038251bb34.jpg",
      "description": null
    },
    {
      "id": "destination_filters",
      "component": "filters",
      "endpoint": "/app/v1/destinations/berner-oberland-interlaken/filter",
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
              "count": 41,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:exercise",
              "label": "Bewegung",
              "value": "exercise",
              "count": 38,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:sightseeing",
              "label": "Sehenswürdigkeiten",
              "value": "sightseeing",
              "count": 37,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 34,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:learning",
              "label": "Lernen",
              "value": "learning",
              "count": 29,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:food",
              "label": "Essen",
              "value": "food",
              "count": 19,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:culture",
              "label": "Kultur",
              "value": "culture",
              "count": 13,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:entertainment",
              "label": "Unterhaltung",
              "value": "entertainment",
              "count": 12,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:relaxation",
              "label": "Entspannung",
              "value": "relaxation",
              "count": 7,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:driving_fun",
              "label": "Fahrspass",
              "value": "driving_fun",
              "count": 5,
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
              "count": 51,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:any",
              "label": "Any",
              "value": "any",
              "count": 39,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:snow_required",
              "label": "Schnee erforderlich",
              "value": "snow_required",
              "count": 20,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:hot_weather",
              "label": "Heisses Wetter",
              "value": "hot_weather",
              "count": 14,
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
              "count": 61,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:spring",
              "label": "Frühling",
              "value": "spring",
              "count": 47,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:autumn",
              "label": "Herbst",
              "value": "autumn",
              "count": 47,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:year_round",
              "label": "Ganzjährig",
              "value": "year_round",
              "count": 40,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:winter",
              "label": "Winter",
              "value": "winter",
              "count": 20,
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
              "count": 55,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:families",
              "label": "Familien",
              "value": "families",
              "count": 49,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:solo",
              "label": "Alleinreisende",
              "value": "solo",
              "count": 19,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:couples",
              "label": "Paare",
              "value": "couples",
              "count": 10,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:teens",
              "label": "Jugendliche",
              "value": "teens",
              "count": 8,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:adults_only",
              "label": "Nur Erwachsene",
              "value": "adults_only",
              "count": 4,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:seniors",
              "label": "Seniors",
              "value": "seniors",
              "count": 4,
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
              "count": 61,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:half_day",
              "label": "Halber Tag",
              "value": "half_day",
              "count": 20,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:full_day",
              "label": "Ganzer Tag",
              "value": "full_day",
              "count": 18,
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
              "count": 42,
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
              "count": 56,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:budget",
              "label": "Budget",
              "value": "budget",
              "count": 15,
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
      "id": "hero",
      "component": "hero",
      "text": "In Interlaken regnet's weiter. Drinnen ist's gemütlich.",
      "destination": "Interlaken",
      "forecast": {
        "title": "Interlaken",
        "data": [
          {
            "date": "2026-06-10",
            "day": "Mi",
            "dayFull": "Mittwoch",
            "tempMin": 9,
            "tempMax": 13,
            "icon": "rainy",
            "description": "Leichter Regen"
          },
          {
            "date": "2026-06-11",
            "day": "Heute",
            "dayFull": "Heute",
            "tempMin": 9,
            "tempMax": 18,
            "icon": "cloudy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-12",
            "day": "Fr",
            "dayFull": "Freitag",
            "tempMin": 11,
            "tempMax": 22,
            "icon": "cloudy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-13",
            "day": "Sa",
            "dayFull": "Samstag",
            "tempMin": 12,
            "tempMax": 26,
            "icon": "sunny",
            "description": "Klar"
          },
          {
            "date": "2026-06-14",
            "day": "So",
            "dayFull": "Sonntag",
            "tempMin": 14,
            "tempMax": 25,
            "icon": "sunny",
            "description": "Meist klar"
          },
          {
            "date": "2026-06-15",
            "day": "Mo",
            "dayFull": "Montag",
            "tempMin": 13,
            "tempMax": 24,
            "icon": "sunny",
            "description": "Teilweise bewölkt"
          },
          {
            "date": "2026-06-16",
            "day": "Di",
            "dayFull": "Dienstag",
            "tempMin": 13,
            "tempMax": 25,
            "icon": "sunny",
            "description": "Teilweise bewölkt"
          }
        ]
      },
      "weather": "rainy",
      "weatherLabel": "Regnerisch",
      "timeOfDay": "afternoon",
      "timeOfDayLabel": "Nachmittag"
    },
    {
      "id": "weather_card",
      "component": "weather_card",
      "title": "Interlaken",
      "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Interlaken_Hafen_Foto_Schweiz_Tourismus_038251bb34.jpg",
      "data": [
        {
          "date": "2026-06-10",
          "day": "Mi",
          "dayFull": "Mittwoch",
          "tempMin": 9,
          "tempMax": 13,
          "icon": "rainy",
          "description": "Leichter Regen"
        },
        {
          "date": "2026-06-11",
          "day": "Heute",
          "dayFull": "Heute",
          "tempMin": 9,
          "tempMax": 18,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-12",
          "day": "Fr",
          "dayFull": "Freitag",
          "tempMin": 11,
          "tempMax": 22,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-13",
          "day": "Sa",
          "dayFull": "Samstag",
          "tempMin": 12,
          "tempMax": 26,
          "icon": "sunny",
          "description": "Klar"
        },
        {
          "date": "2026-06-14",
          "day": "So",
          "dayFull": "Sonntag",
          "tempMin": 14,
          "tempMax": 25,
          "icon": "sunny",
          "description": "Meist klar"
        },
        {
          "date": "2026-06-15",
          "day": "Mo",
          "dayFull": "Montag",
          "tempMin": 13,
          "tempMax": 24,
          "icon": "sunny",
          "description": "Teilweise bewölkt"
        },
        {
          "date": "2026-06-16",
          "day": "Di",
          "dayFull": "Dienstag",
          "tempMin": 13,
          "tempMax": 25,
          "icon": "sunny",
          "description": "Teilweise bewölkt"
        }
      ]
    },
    {
      "id": "suggested_types",
      "component": "suggested_types",
      "title": "Was unternehmen",
      "data": [
        {
          "id": "hiking",
          "title": "Wandern",
          "iconUrl": "/distributor/icons/hiking.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/75b606556fc973e1fcaed00145d6897f.jpg",
          "href": "/app/v1/activity-types/wandern",
          "webPath": "/wandern/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "e-bike",
          "title": "E-Bike",
          "iconUrl": "/distributor/icons/e-bike.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cd6fe6e11ee25e01cdbc7f688cbd4ecd.JPEG",
          "href": "/app/v1/activity-types/e-bike",
          "webPath": "/e-bike/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "canyoning",
          "title": "Canyoning",
          "iconUrl": "/distributor/icons/canyoning.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/968da072290a5237c7cb4dd8943fa0b0.jpg",
          "href": "/app/v1/activity-types/canyoning",
          "webPath": "/canyoning/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "city-tour-guided",
          "title": "Stadtführungen",
          "iconUrl": "/distributor/icons/city-tour-guided.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1134a64abee69b7d7d1df21b57f9c2f1.jpg",
          "href": "/app/v1/activity-types/stadtfuehrung",
          "webPath": "/stadtfuehrung/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "kayak",
          "title": "Kajak ",
          "iconUrl": "/distributor/icons/kayak.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/4f0f3edfa2437a2d94578807c0c6140c.jpg",
          "href": "/app/v1/activity-types/kajak",
          "webPath": "/kajak/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "boat-tour",
          "title": "Bootstour",
          "iconUrl": "/distributor/icons/boat-tour.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6d99c8cd1a4bda0f2a439d27b53b4d06.jpg",
          "href": "/app/v1/activity-types/bootstour",
          "webPath": "/bootstour/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "rafting",
          "title": "Rafting",
          "iconUrl": "/distributor/icons/rafting.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8e7cddf6f0f74db783475b227b7c257f.JPG",
          "href": "/app/v1/activity-types/rafting",
          "webPath": "/rafting/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "boat-trips",
          "title": "Schifffahrten",
          "iconUrl": "/distributor/icons/boat-trips.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Schiffahrt_Brienzersee_Thunersee_b3dde75992.jpg",
          "href": "/app/v1/activity-types/schifffahrten",
          "webPath": "/schifffahrten/",
          "weatherFit": "great",
          "betterOn": null
        }
      ]
    },
    {
      "id": "proximity",
      "component": "carousel",
      "title": "Heute bewölkt. Beliebt in deiner Nähe.",
      "data": [
        {
          "id": "146955",
          "type": "activity",
          "bookingActivityId": 3586,
          "title": "E-Bike Tour zu den Wasserfällen in Lauterbrunnen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8f53cc4c0ead9c683ec130493e4e3b1f.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 199",
          "startingPrice": {
            "amount": 199,
            "currency": "CHF",
            "formatted": "CHF 199"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/e-bike/ebike-gefuehrt-lauterbrunnen-wasserfaelle/",
          "webPath": "/e-bike/ebike-gefuehrt-lauterbrunnen-wasserfaelle/",
          "distanceKm": 0.3,
          "lat": 46.687574999999995,
          "lng": 7.860129000000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8f53cc4c0ead9c683ec130493e4e3b1f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/03b10bbb3f8c7ca337451b595d21b4c7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/549637ed4fcea3df22b0283d7a7f0cdf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0d45bf44ccb7e906ed0dc64e673094ae.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/99915aacf314d01d3bdd5b5bf5079116.jpg"
          ]
        },
        {
          "id": "147702",
          "type": "activity",
          "bookingActivityId": 3608,
          "title": "Schokoladen Workshop im Funky Chocolate Club Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0f5b0c1b78e28f2a284fc7b27f1a8adc.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 75",
          "startingPrice": {
            "amount": 75,
            "currency": "CHF",
            "formatted": "CHF 75"
          },
          "rating": 5,
          "reviewCount": 1,
          "path": "/kreativer-workshop/schokoladen-workshop-funky-interlaken/",
          "webPath": "/kreativer-workshop/schokoladen-workshop-funky-interlaken/",
          "distanceKm": 0.6,
          "lat": 46.685970399999995,
          "lng": 7.8549294,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0f5b0c1b78e28f2a284fc7b27f1a8adc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e15553513531f45a1bc905c8bccd575a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1119d76e0e176a7941be77f2f76277fc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/dedd8f0dc20858287062a01454a57d9d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7be424645b4a79802c4771d5316149cd.jpg"
          ]
        },
        {
          "id": "969",
          "type": "activity",
          "bookingActivityId": 770,
          "title": "Brienzersee Elektro Quad Schnupper Tour ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/6936094a36d3cb9e1d0da218e7fdf263.JPG",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 30",
          "startingPrice": {
            "amount": 30,
            "currency": "CHF",
            "formatted": "CHF 30"
          },
          "rating": 5,
          "reviewCount": 2,
          "path": "/quad/brienzersee-quad-tour/",
          "webPath": "/quad/brienzersee-quad-tour/",
          "distanceKm": 0.6,
          "lat": 46.6813181,
          "lng": 7.8634553,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/6936094a36d3cb9e1d0da218e7fdf263.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/bc092de85799afac8ca329cfc7a0f404.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/9c9107385f7386977800caf7baad8788.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/76507db2bb33c0d08eaac5461e874167.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/64e6397d2c4d72f61a379f6aed22f5c3.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/98b5b4247fb449f5ccc3562e2ec35983.JPG"
          ]
        },
        {
          "id": "1743",
          "type": "activity",
          "bookingActivityId": 1525,
          "title": "Ticket Golden Pass Express ab Interlaken Ost oder Montreux (ohne Reservation)",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/MOB_Schoenried_Morgen_94018_1_cb43f1c986.jpg",
          "subtitle": "Luzern",
          "priceFormatted": "CHF 56",
          "startingPrice": {
            "amount": 56,
            "currency": "CHF",
            "formatted": "CHF 56"
          },
          "rating": 4.29,
          "reviewCount": 14,
          "path": "/golden-pass-line/ticket-golden-pass-express/",
          "webPath": "/golden-pass-line/ticket-golden-pass-express/",
          "distanceKm": 0.6,
          "lat": 46.6904314,
          "lng": 7.869051,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/MOB_Schoenried_Morgen_94018_1_cb43f1c986.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_MOB_Rougemont_94016_1_253a7f250d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GPX_94026_78f6c04920.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GPX_94037_1bbf23ff2b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GPX_94042_d76bf21f2a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GPX_94044_13548d45e0.jpg"
          ]
        },
        {
          "id": "150251",
          "type": "activity",
          "bookingActivityId": 3683,
          "title": "Canyoning Saxeten Einsteiger Tour ab Interlaken ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/17c30c1c28890c6b7c2a2ef753fd4244.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 159",
          "startingPrice": {
            "amount": 159,
            "currency": "CHF",
            "formatted": "CHF 159"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/canyoning/canyoning-saxeten-einsteiger-interlaken/",
          "webPath": "/canyoning/canyoning-saxeten-einsteiger-interlaken/",
          "distanceKm": 0.6,
          "lat": 46.6904314,
          "lng": 7.869051,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/17c30c1c28890c6b7c2a2ef753fd4244.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/216e3d545c8ead5d745753ab3d345d1c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e719f957ef765d47b7776f749cf3b9ef.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c78147893820343f15054d3dbd7f4aef.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7eecde7e124ec82c193b04c8d7caa7f9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/64ecb01eadec1ec0a6bfc30a4e51800f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/53155d102658db64cbc107b8a63f98d4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/468505a0ca9c491b605a9c8114102c5e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/155bcd02f8bc750edd2d4db46ed85cd5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/63dfcefbb564b1af96b1e1a99f890c8f.jpg"
          ]
        },
        {
          "id": "610",
          "type": "activity",
          "bookingActivityId": 398,
          "title": "Ticket Standseilbahn Harder Kulm ab Interlaken Ost",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Harder_Kulm_Aussicht_Jungfrau_2474c23b27.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 22",
          "startingPrice": {
            "amount": 22,
            "currency": "CHF",
            "formatted": "CHF 22"
          },
          "rating": 4.68,
          "reviewCount": 1326,
          "path": "/harder-kulm/harder-kulm-ticket-retour-standseilbahn/",
          "webPath": "/harder-kulm/harder-kulm-ticket-retour-standseilbahn/",
          "distanceKm": 0.5,
          "lat": 46.691014,
          "lng": 7.865387000000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Harder_Kulm_Aussicht_Jungfrau_2474c23b27.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_interlaken_4382834_1920_209a420849.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_harderbahn_harder_kulm_interlaken_01_b442dde4ac.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Harder_Kulm_Panorama_Interlaken_Jungfrau_ff9df7131f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Harder_Kulm_Key_Visual_bff5d30b35.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Aussichtsplattform_Harder_Kulm_b60ece8997.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_harder_kulm_interlaken_sommer_brienzersee_fec176a399.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Harder_Kulm_Jungfrau_4749980a96.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Harder_Kulm_Zwei_Seen_Steg_mit_Personen_778c186fc1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Harder_Kulm_Panorama_Restaurant_Jungfrau_c771371a95.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_harder_kulm_interlaken_restaurant_chaesschnitte_3d031cd7a5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_harder_kulm_interlaken_sommer_abendfahrten_02_8cfc37ec1d.jpg"
          ]
        },
        {
          "id": "147566",
          "type": "activity",
          "bookingActivityId": 3604,
          "title": "Geführte Wanderung zu versteckten Juwelen in den Alpen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/91a343d8aab58013637a98cb99a401a0.JPG",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 215",
          "startingPrice": {
            "amount": 215,
            "currency": "CHF",
            "formatted": "CHF 215"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/wandern/schweizer-alpen-gefuehrte-wanderung-versteckte-juwelen/",
          "webPath": "/wandern/schweizer-alpen-gefuehrte-wanderung-versteckte-juwelen/",
          "distanceKm": 0,
          "lat": 46.686348100000004,
          "lng": 7.8632048999999995,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/91a343d8aab58013637a98cb99a401a0.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9bee2e07279654082d5f3065a1f3db7b.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/07657d53d807534637af6bb06536f291.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fbb2b325364c5aa52e49adad05393eda.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cfcdd03654f1f249476fabde22fa31c9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4edd438d06a2fcce9ebda60449adbc1a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/148d1330b8132fb0d93ed4092aa1cad4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b354d4f79bdc21c1d6cd88d011cd5f42.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/91edb2d1e174b63403e170ca5cdbfc09.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f31a0412e9a6e2be21539744e5c74cc6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f8c36e6d4e7c7e07ae82a349d17ca99e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/486b6382e2dad16b6cc72abdf2960ab8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6472a9f417bb7be3408e60bd495be6b5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4ce020502a4004fe926c7d66e88b9401.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6b1bf12dc61b3548721f218b58c71559.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cadb0008115c808f1b3e17c83bb36d5e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7cec88a35b893ecb2db742b27aa9315d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f37e7bac961e8fd1aa2a1933da1dc978.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ab7abb129046b3ff37aa5443a12c1333.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4262f4d13693ee326693d1314acb1488.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f6e2918688ec9e2ab5d1e7821a892f24.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a1439229971f254eb6d9328888c2c5e4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2a6473f65178b2ad6abcd6e29048414d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2107e63bebdaf890823876b6e3f19777.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/378b8b15ac54c6df3227e6ec9c23f40d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8aa21d1dbdde4e4aefb14180b8d36ff9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/722d5944598a6059e579d3d92f6380db.jpg"
          ]
        },
        {
          "id": "1129",
          "type": "activity",
          "bookingActivityId": 912,
          "title": "Tageskarte Brienzersee mit dem Schiff",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Loetschberg_bei_Brienz_Brienzersee_Sommer_a245a01184.JPG",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 75",
          "startingPrice": {
            "amount": 75,
            "currency": "CHF",
            "formatted": "CHF 75"
          },
          "rating": 4.79,
          "reviewCount": 33,
          "path": "/brienzersee/schifffahrt-auf-dem-brienzersee-tageskarte/",
          "webPath": "/brienzersee/schifffahrt-auf-dem-brienzersee-tageskarte/",
          "distanceKm": 0.7,
          "lat": 46.6916299,
          "lng": 7.869144300000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Loetschberg_bei_Brienz_Brienzersee_Sommer_a245a01184.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6097_0672bf6288.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Familie_auf_dem_Schiff_4acf5d27e4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Globi_Familienkarte_Brienzersee_Thunersee_89360f8beb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Sonnenuntergangsfahrt_Thunersee_63aa6ebea4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6050_9bbe111618.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6051_0e06ec53c3.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_1_Seraina_b0daf4fe54.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_2_Seraina_57e39a9205.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_3_Seraina_b875eb96be.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_4_Seraina_69769f7168.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_5_Seraina_e7087516b5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_6_Seraina_6c4478dabd.jpg"
          ]
        },
        {
          "id": "90308",
          "type": "activity",
          "bookingActivityId": 2765,
          "title": "Rafting auf der Simme ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/24057bed167194c6f537df19c8bd1e43.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 139",
          "startingPrice": {
            "amount": 139,
            "currency": "CHF",
            "formatted": "CHF 139"
          },
          "rating": 3,
          "reviewCount": 2,
          "path": "/rafting/spass-rafting-simme-interlaken/",
          "webPath": "/rafting/spass-rafting-simme-interlaken/",
          "distanceKm": 0.8,
          "lat": 46.67951499999999,
          "lng": 7.8645103,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/24057bed167194c6f537df19c8bd1e43.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e6584ac4046a0210e22de52818f82146.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/36175e52bf37a10bef6ea403767f9b53.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/257be7b233288313af01b341e6eb7306.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/58f087a6047972859f9d694b36fd48f2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/417fbe6d024c8d3909507dfba5a111b0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/360959b9b3dc0ebba1d14e93f2f83ae1.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/54f6849a4667c32af1fa3e37e42d1dda.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b25d1235ccf3516345971138a3fcef11.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/74fed2e1d7f29c2d324e07263953d704.jpg"
          ]
        },
        {
          "id": "1883",
          "type": "activity",
          "bookingActivityId": 1665,
          "title": "Interlaken interaktive Schnitzeljagd mit dem Smartphone",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/INT_carousel_1_EN_b53b723521.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 14",
          "startingPrice": {
            "amount": 14,
            "currency": "CHF",
            "formatted": "CHF 14"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/escape-room/interlaken-mobile-schnitzeljagd-interaktiv/",
          "webPath": "/escape-room/interlaken-mobile-schnitzeljagd-interaktiv/",
          "distanceKm": 1,
          "lat": 46.6826875,
          "lng": 7.8515625,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/INT_carousel_1_EN_b53b723521.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_INT_carousel_3_1de025ef54.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_INT_carousel_2_210affd7b2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_INT_carousel_1_DE_9cda8586af.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_INT_carousel_4_f319cd2499.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_INT_carousel_5_0a21add139.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_INT_carousel_6_5dff78a77b.jpg"
          ]
        }
      ]
    },
    {
      "id": "reviews",
      "component": "carousel",
      "title": "Von Reisenden wie dir",
      "data": [
        {
          "id": "1296",
          "type": "review",
          "title": "Rafting auf der Simme ab Interlaken",
          "activityId": "90308",
          "bookingActivityId": 2765,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/24057bed167194c6f537df19c8bd1e43.jpg",
          "path": "/rafting/spass-rafting-simme-interlaken/",
          "rating": 5,
          "body": "Ein tolles Rafting!",
          "reviewerName": "Sabine",
          "reviewerCountry": "CH"
        },
        {
          "id": "12348",
          "type": "review",
          "title": "Schokoladen Workshop im Funky Chocolate Club Interlaken",
          "activityId": "147702",
          "bookingActivityId": 3608,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0f5b0c1b78e28f2a284fc7b27f1a8adc.jpg",
          "path": "/kreativer-workshop/schokoladen-workshop-funky-interlaken/",
          "rating": 5,
          "body": "Wonderful experience! The chocolate shoppe is worth a visit on its own, but the class tops it off. Our instructor was informative, sweet and fun, and the intimate setting made it easy to meet new people, learn new things and bring home delicious chocolate. A very fun hour and a half — highly recommend!",
          "reviewerName": "Beverly ",
          "reviewerCountry": "US"
        },
        {
          "id": "625",
          "type": "review",
          "title": "Ticket Standseilbahn Harder Kulm ab Interlaken Ost",
          "activityId": "610",
          "bookingActivityId": 398,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Harder_Kulm_Aussicht_Jungfrau_2474c23b27.jpg",
          "path": "/harder-kulm/harder-kulm-ticket-retour-standseilbahn/",
          "rating": 4,
          "body": "da wir einen älteren Herren bei uns hatten wäre es gut hätte es in der Bahn auch Sitzplätze gegeben",
          "reviewerName": "Anje Ina",
          "reviewerCountry": "CH"
        },
        {
          "id": "10832",
          "type": "review",
          "title": "Tageskarte Brienzersee mit dem Schiff",
          "activityId": "1129",
          "bookingActivityId": 912,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Loetschberg_bei_Brienz_Brienzersee_Sommer_a245a01184.JPG",
          "path": "/brienzersee/schifffahrt-auf-dem-brienzersee-tageskarte/",
          "rating": 5,
          "body": "Sehr zufrieden",
          "reviewerName": "Verena",
          "reviewerCountry": "CH"
        },
        {
          "id": "11589",
          "type": "review",
          "title": "Ticket Golden Pass Express ab Interlaken Ost oder Montreux (ohne Reservation)",
          "activityId": "1743",
          "bookingActivityId": 1525,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/MOB_Schoenried_Morgen_94018_1_cb43f1c986.jpg",
          "path": "/golden-pass-line/ticket-golden-pass-express/",
          "rating": 5,
          "body": "Des tables moins glissantes",
          "reviewerName": "Robert",
          "reviewerCountry": "CH"
        }
      ]
    },
    {
      "id": "weather.hiking_routes.today",
      "component": "carousel",
      "title": "Wanderrouten mit Start in deiner Nähe",
      "data": [
        {
          "id": "e3aaebc4-6e41-49ec-8d2b-39ae50cf14b9",
          "type": "non-bookable",
          "title": "Unterseener-Uferweg",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/routes/u/n/unterseener-uferweg/images%20all%20season/36487_32001800.jpeg",
          "subtitle": "Interlaken West",
          "category": "hiking-routes",
          "distanceKm": 0.7,
          "detailPath": "/app/v1/routes/e3aaebc4-6e41-49ec-8d2b-39ae50cf14b9",
          "webPath": "/nb/detail/e3aaebc4-6e41-49ec-8d2b-39ae50cf14b9/",
          "lat": 46.68497688,
          "lng": 7.854647624
        },
        {
          "id": "5074656a-16a8-4c2b-9c20-c7b0fe9dafeb",
          "type": "non-bookable",
          "title": "Panorama Rundweg Thunersee, Etappe 3/4",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_026_03_19_Meielisalp_R_F_M.jpg",
          "subtitle": "Interlaken",
          "category": "hiking-routes",
          "distanceKm": 0.7,
          "detailPath": "/app/v1/routes/5074656a-16a8-4c2b-9c20-c7b0fe9dafeb",
          "webPath": "/nb/detail/5074656a-16a8-4c2b-9c20-c7b0fe9dafeb/",
          "lat": 46.68497688,
          "lng": 7.854647624
        },
        {
          "id": "201f61e3-e53c-456c-bbd7-9e337c34d345",
          "type": "non-bookable",
          "title": "Brienzersee Drei Wasserfälleweg, Etappe 1/2",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_360_01_003_nach_Boenigen_R_F_M.jpg",
          "subtitle": "Bönigen",
          "category": "hiking-routes",
          "distanceKm": 2.4,
          "detailPath": "/app/v1/routes/201f61e3-e53c-456c-bbd7-9e337c34d345",
          "webPath": "/nb/detail/201f61e3-e53c-456c-bbd7-9e337c34d345/",
          "lat": 46.6859548189,
          "lng": 7.8952953142
        },
        {
          "id": "bac292d6-e42d-47f7-94a3-fa17c0a695ea",
          "type": "non-bookable",
          "title": "Brienzersee Drei Wasserfälleweg",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_360_01_078_vor_Iseltwald_R_F_M.jpg",
          "subtitle": "Bönigen",
          "category": "hiking-routes",
          "distanceKm": 2.4,
          "detailPath": "/app/v1/routes/bac292d6-e42d-47f7-94a3-fa17c0a695ea",
          "webPath": "/nb/detail/bac292d6-e42d-47f7-94a3-fa17c0a695ea/",
          "lat": 46.6859548189,
          "lng": 7.8952953142
        },
        {
          "id": "5e5798d2-fca5-4262-8b76-b215ce609fea",
          "type": "non-bookable",
          "title": "Panoramaweg Schynige Platte",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/routes/p/a/panoramaweg%20schynige%20platte/images%20all%20season/58611_32001800.jpeg",
          "subtitle": "Schynige Platte",
          "category": "hiking-routes",
          "distanceKm": 5.3,
          "detailPath": "/app/v1/routes/5e5798d2-fca5-4262-8b76-b215ce609fea",
          "webPath": "/nb/detail/5e5798d2-fca5-4262-8b76-b215ce609fea/",
          "lat": 46.65211969081407,
          "lng": 7.91132585365681
        },
        {
          "id": "ebe19927-7f0d-47ac-8567-bada3273751a",
          "type": "non-bookable",
          "title": "Niederhorn-Panoramaweg",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_342_102_Gemmenalphorn_F_M.jpg",
          "subtitle": "Niederhorn",
          "category": "hiking-routes",
          "distanceKm": 7.2,
          "detailPath": "/app/v1/routes/ebe19927-7f0d-47ac-8567-bada3273751a",
          "webPath": "/nb/detail/ebe19927-7f0d-47ac-8567-bada3273751a/",
          "lat": 46.71066808408486,
          "lng": 7.775686226376341
        },
        {
          "id": "9ba840b9-f316-416d-b9f1-8af0d1e709f7",
          "type": "non-bookable",
          "title": "Brienzersee Drei Wasserfälleweg, Etappe 2/2",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_360_02_015_Muehlibachfall_R_F_M.jpg",
          "subtitle": "Iseltwald",
          "category": "hiking-routes",
          "distanceKm": 8.2,
          "detailPath": "/app/v1/routes/9ba840b9-f316-416d-b9f1-8af0d1e709f7",
          "webPath": "/nb/detail/9ba840b9-f316-416d-b9f1-8af0d1e709f7/",
          "lat": 46.7110599008,
          "lng": 7.9646506161
        },
        {
          "id": "22d47b60-64b3-414a-af53-951da444c818",
          "type": "non-bookable",
          "title": "Lauberhorn Trail",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_352_074_Schlafbiel_F_M.jpg",
          "subtitle": "Wengen (Allmend)",
          "category": "hiking-routes",
          "distanceKm": 10.2,
          "detailPath": "/app/v1/routes/22d47b60-64b3-414a-af53-951da444c818",
          "webPath": "/nb/detail/22d47b60-64b3-414a-af53-951da444c818/",
          "lat": 46.6040789642,
          "lng": 7.9228877758
        },
        {
          "id": "42bdc6bc-7694-46a8-ad3c-a09db9ba70f0",
          "type": "non-bookable",
          "title": "Mountain View Trail",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_351_067_Bletschenalp_F_M.jpg",
          "subtitle": "Lauterbrunnen (Grütschalp)",
          "category": "hiking-routes",
          "distanceKm": 10.3,
          "detailPath": "/app/v1/routes/42bdc6bc-7694-46a8-ad3c-a09db9ba70f0",
          "webPath": "/nb/detail/42bdc6bc-7694-46a8-ad3c-a09db9ba70f0/",
          "lat": 46.5985093786467,
          "lng": 7.90794559402416
        },
        {
          "id": "35dc3987-d0cf-4849-b620-99d278666d32",
          "type": "non-bookable",
          "title": "Via Alpina, Etappe 12/20",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/routes/v/i/via%20alpina/via%20alpina%2012/images%20all%20season/38828_32001800.jpeg",
          "subtitle": "Lauterbrunnen",
          "category": "hiking-routes",
          "distanceKm": 10.5,
          "detailPath": "/app/v1/routes/35dc3987-d0cf-4849-b620-99d278666d32",
          "webPath": "/nb/detail/35dc3987-d0cf-4849-b620-99d278666d32/",
          "lat": 46.59564,
          "lng": 7.90138
        }
      ],
      "pillarPath": "/app/v1/non-bookable/hiking-routes",
      "alternates": [
        {
          "id": "whatsOn.cinema.today",
          "title": "Filme heute",
          "pillarPath": "/app/v1/non-bookable/movies"
        },
        {
          "id": "whatsOn.museums.afternoon",
          "title": "Museen am Nachmittag",
          "pillarPath": "/app/v1/non-bookable/museums"
        }
      ]
    },
    {
      "id": "seasonal.summer.water",
      "component": "carousel",
      "title": "Sommer am Wasser, in deiner Umgebung",
      "data": [
        {
          "id": "87275",
          "type": "activity",
          "bookingActivityId": 2638,
          "title": "Pedalo Miete Thunersee ab Spiez",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/83c579ddc9e6770b975363071c23d363.jpg",
          "subtitle": "Spiez",
          "priceFormatted": "CHF 30",
          "startingPrice": {
            "amount": 30,
            "currency": "CHF",
            "formatted": "CHF 30"
          },
          "rating": 5,
          "reviewCount": 2,
          "path": "/thunersee/miete-padalo-thunersee/",
          "webPath": "/thunersee/miete-padalo-thunersee/",
          "distanceKm": 13.3,
          "lat": 46.68880619999999,
          "lng": 7.688507199999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/83c579ddc9e6770b975363071c23d363.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2d9b1727469fca8752504887bd911f1e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0c72024ad21f0cfef4e5299424044575.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7ff051219a600e7abb018c20f397bf60.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cc608595c04cd15afdd819279f3f4f5c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e0c221208abb8835ee3b5e210537a305.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/82f02e51d63378e4ec5b89bc6d455668.jpg"
          ]
        },
        {
          "id": "323",
          "type": "activity",
          "bookingActivityId": 85,
          "title": "Saxetenschlucht Canyoning für Anfänger in Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Saxetenschlucht_Einsteiger_Canyoning_Wasserfall_50e38b6fc3.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 139",
          "startingPrice": {
            "amount": 139,
            "currency": "CHF",
            "formatted": "CHF 139"
          },
          "rating": 4.76,
          "reviewCount": 33,
          "path": "/canyoning/canyoning-interlaken-anfaenger/",
          "webPath": "/canyoning/canyoning-interlaken-anfaenger/",
          "distanceKm": 2.1,
          "lat": 46.6708669,
          "lng": 7.8784707,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Saxetenschlucht_Einsteiger_Canyoning_Wasserfall_50e38b6fc3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Anfaenger_Canyoning_Saxetenschlucht_eb88c7bde8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Floating_Canyoning_Einsteiger_Saxetenschlucht_e808fec59c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Abseilen_Anfaenger_Canyoning_Saxetenschlucht_685a759bea.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Schluchtenwandern_Interlaken_Beginner_Saxetenschlucht_217adc296e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Gruppenausflug_Canyoning_Beginner_Saxetenschlucht_7618d3425d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Canyoning_Interlaken_Anfaenger_Saxetenschlucht_e5398d5c26.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Abseilen_10_Meter_Anfaenger_Canyoning_Saxetenschlucht_f59b15483e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Einsteiger_Canyoning_Saxetenschlucht_80a151cceb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Sprung_Canyoning_Anfaenger_Saxetenschlucht_5fedfd9197.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Gruppenausflug_Canyoning_Einsteiger_Saxetenschlucht_93d9ad0b70.jpg"
          ]
        },
        {
          "id": "32535",
          "type": "activity",
          "bookingActivityId": 2104,
          "title": "Surfski Basiskurs in Därligen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/455e637568fff2b91408e130a1d882cc.jpg",
          "subtitle": "Därligen",
          "priceFormatted": "CHF 190",
          "startingPrice": {
            "amount": 190,
            "currency": "CHF",
            "formatted": "CHF 190"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/kajak/surfski-basiskurs-daerligen/",
          "webPath": "/kajak/surfski-basiskurs-daerligen/",
          "distanceKm": 5,
          "lat": 46.6642388,
          "lng": 7.8067648,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/455e637568fff2b91408e130a1d882cc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/c49d98cb8fc7b91f54146ae5b10ab439.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/bf60e4523d738fd28ff65b6b3949bd8b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/3c21b4e88037dcd03c6fc9f064ef8331.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/a2de61a9550627deb7b2ebd786356d78.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/afe9a4a14fb91bffe3b37d723d355fef.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/8af73061aaa5ad26b653db4e9988c738.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/ee5b386caf17c6ef5a8e59f0cce64894.jpg"
          ]
        },
        {
          "id": "276",
          "type": "activity",
          "bookingActivityId": 38,
          "title": "Kajak Tour im Sommer auf dem Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_fb0b4fa6b4.jpg",
          "subtitle": "Bönigen",
          "priceFormatted": "CHF 115",
          "startingPrice": {
            "amount": 115,
            "currency": "CHF",
            "formatted": "CHF 115"
          },
          "rating": 4.7,
          "reviewCount": 10,
          "path": "/kajak/kajaktour-sommer-brienzerse/",
          "webPath": "/kajak/kajaktour-sommer-brienzerse/",
          "distanceKm": 2.7,
          "lat": 46.6881192,
          "lng": 7.897935899999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_fb0b4fa6b4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_11d6da80569d3627fe2b2d10ac1e2b3c_a567960fee.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gruppentour_Kajak_Brienzersee_ac06a32b02.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_915e272a874959b64c618f2a36244764_57b7755d9a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_e35eeb3bf34157c38c1cd0fa2ba58d3e_f03a596d78.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_445e7060f9b1c82c9a685e888b48cce5_1c75fc5510.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Halbtagestour_Kajak_ccd1b03f96.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_Kajak_Schule_Brienzersee_ff5964209d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gefuehrte_Kajaktour_Brienzersee_942144149e.jpg"
          ]
        },
        {
          "id": "87338",
          "type": "activity",
          "bookingActivityId": 2641,
          "title": "Chli Schliere Canyoning ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4869bcf863b7dac36f474eebc62dd301.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 250",
          "startingPrice": {
            "amount": 250,
            "currency": "CHF",
            "formatted": "CHF 250"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/chli-schliere-schlucht/canyoning-chli-schliere-interlaken-ost/",
          "webPath": "/chli-schliere-schlucht/canyoning-chli-schliere-interlaken-ost/",
          "distanceKm": 0.7,
          "lat": 46.6907975,
          "lng": 7.8702139,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4869bcf863b7dac36f474eebc62dd301.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4ca83f18dd70095a0bc5593422d74243.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/06715ab56fe3850b164841a5bb3f370f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/27e0bbd67f02136f7ae4ae17511fc202.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b99dd45be3094680605880a08ea32d2a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/058c7d00f417886b0bb7cca65659de32.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c8197d7ae97ff42a99b4ef973864bc08.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1dc4b68f8dbe7616ee2e3a6923148d61.jpg"
          ]
        },
        {
          "id": "32323",
          "type": "activity",
          "bookingActivityId": 2051,
          "title": "SUP mieten auf dem Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/ae1dbf6b56e401cb32306dca8fca439e.jpeg",
          "subtitle": "Bönigen",
          "priceFormatted": "CHF 40",
          "startingPrice": {
            "amount": 40,
            "currency": "CHF",
            "formatted": "CHF 40"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/stand-up-paddle/stand-up-paddle-board-mieten-boenigen/",
          "webPath": "/stand-up-paddle/stand-up-paddle-board-mieten-boenigen/",
          "distanceKm": 2.4,
          "lat": 46.6912508,
          "lng": 7.893693600000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/ae1dbf6b56e401cb32306dca8fca439e.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/4349a28e4520525ce94655acb639d41a.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/2c151b373985fd32389b06c7175f10eb.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/dd8a61d01af27027f3d1e78add2ba078.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0ac3b5c10d16eb83f3b6615e0827d37d.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/e3075afb513ed2cfcb3b5aab1254c032.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/41e54a667a9a6cbef064907b45704bde.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/69a6a3fa18882cb1a50b3a5077569855.jpeg"
          ]
        },
        {
          "id": "130668",
          "type": "activity",
          "bookingActivityId": 3046,
          "title": "Lounge Boot mieten Brienzersee ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c3788faa67ac8c3fd5c730a29c2a6256.jpg",
          "subtitle": "Brienz",
          "priceFormatted": "CHF 300",
          "startingPrice": {
            "amount": 300,
            "currency": "CHF",
            "formatted": "CHF 300"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/brienzersee/lounge-boot-mieten-brienzersee/",
          "webPath": "/brienzersee/lounge-boot-mieten-brienzersee/",
          "distanceKm": 15.4,
          "lat": 46.7545659,
          "lng": 8.039040500000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c3788faa67ac8c3fd5c730a29c2a6256.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3dd112dcfdaa15347ad647d1be6db277.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/34c91e77ac429b879dab5a69e5d2d390.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b445058e16b39ab4797fab5defab0601.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d29e836bcb9dedb51a5b8227e3448dde.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8821e5c14043a1963c8e01b5f7c7e96e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3d424397eaf2613648dfcaad16330fe5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7c9ddb21f150e6b2e101245f1e2443fd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/83737fb0e984e208e5aa6dc7ecfde321.jpg"
          ]
        }
      ],
      "pillarPath": "/app/v1/activity-types/boat-trips",
      "alternates": [
        {
          "id": "seasonal.summer.lakes",
          "title": "Badeseen",
          "pillarPath": "/app/v1/non-bookable/swimming-bathing"
        },
        {
          "id": "seasonal.summer.waterfalls_nb",
          "title": "Wasserfälle",
          "pillarPath": "/app/v1/non-bookable/viewpoints"
        },
        {
          "id": "seasonal.summer.biking",
          "title": "Bike-Touren",
          "pillarPath": "/app/v1/activity-types/mountain-bike"
        }
      ]
    },
    {
      "id": "planAhead.weekend.sunny.nb",
      "component": "carousel",
      "title": "Sonniges Wochenende voraus. Ausflugsziele für draussen.",
      "data": [
        {
          "id": "c1092c9c-5d22-444d-b3ef-139524e92227",
          "type": "non-bookable",
          "title": "Grillstelle Badi Bödeli",
          "imageUrl": "https://api.grillstelle.ch/images/550/1142.jpg",
          "subtitle": "Interlaken",
          "category": "fireplaces",
          "distanceKm": 0.6,
          "detailPath": "/app/v1/fireplaces/c1092c9c-5d22-444d-b3ef-139524e92227",
          "webPath": "/nb/detail/c1092c9c-5d22-444d-b3ef-139524e92227/",
          "lat": 46.690741,
          "lng": 7.859368
        },
        {
          "id": "560f13c2-1ca8-4d9b-a7fd-d59fd3e6e123",
          "type": "non-bookable",
          "title": "Bödelibad Interlaken",
          "imageUrl": "https://static.stnet.ch/sospo/images/198/1152-m.jpg",
          "subtitle": "Unterseen",
          "category": "swimming-bathing",
          "distanceKm": 0.6,
          "detailPath": "/app/v1/swimming-bathing/560f13c2-1ca8-4d9b-a7fd-d59fd3e6e123",
          "webPath": "/nb/detail/560f13c2-1ca8-4d9b-a7fd-d59fd3e6e123/",
          "lat": 46.69032490857198,
          "lng": 7.858296920938717
        },
        {
          "id": "2661c817-b8bf-43e1-be70-324b9b76ae98",
          "type": "non-bookable",
          "title": "Schloss Unterseen",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Unterseen_Schloss.JPG/800px-Unterseen_Schloss.JPG",
          "subtitle": null,
          "category": "castles-ruins",
          "distanceKm": 1,
          "detailPath": "/app/v1/castles-ruins/2661c817-b8bf-43e1-be70-324b9b76ae98",
          "webPath": "/nb/detail/2661c817-b8bf-43e1-be70-324b9b76ae98/",
          "lat": 46.6862269,
          "lng": 7.8497462
        },
        {
          "id": "524ff5ea-785b-4a43-a1c5-9038124bf762",
          "type": "non-bookable",
          "title": "Naturstrandbad Burgseeli",
          "imageUrl": "https://static.stnet.ch/sospo/images/199/2196-m.jpg",
          "subtitle": "Goldswil b. Interlaken",
          "category": "swimming-bathing",
          "distanceKm": 2.2,
          "detailPath": "/app/v1/swimming-bathing/524ff5ea-785b-4a43-a1c5-9038124bf762",
          "webPath": "/nb/detail/524ff5ea-785b-4a43-a1c5-9038124bf762/",
          "lat": 46.69813318349044,
          "lng": 7.886664387211095
        },
        {
          "id": "961449a0-33c5-4ef5-aeb4-0275dd154ad3",
          "type": "non-bookable",
          "title": "Naturstrandbad Burgseeli",
          "imageUrl": "https://api.grillstelle.ch/images/617/1250.jpg",
          "subtitle": "Ringgenberg",
          "category": "fireplaces",
          "distanceKm": 2.2,
          "detailPath": "/app/v1/fireplaces/961449a0-33c5-4ef5-aeb4-0275dd154ad3",
          "webPath": "/nb/detail/961449a0-33c5-4ef5-aeb4-0275dd154ad3/",
          "lat": 46.697931,
          "lng": 7.887164
        },
        {
          "id": "36e89346-439f-46ec-8f76-c2f922348742",
          "type": "non-bookable",
          "title": "Strandbad Bönigen",
          "imageUrl": "https://static.stnet.ch/sospo/images/208/1654-m.jpg",
          "subtitle": "B&#246;nigen b. Interlaken",
          "category": "swimming-bathing",
          "distanceKm": 2.7,
          "detailPath": "/app/v1/swimming-bathing/36e89346-439f-46ec-8f76-c2f922348742",
          "webPath": "/nb/detail/36e89346-439f-46ec-8f76-c2f922348742/",
          "lat": 46.69139687546558,
          "lng": 7.8976160574231535
        },
        {
          "id": "950a3629-2e76-4d5d-867e-f214855791ff",
          "type": "non-bookable",
          "title": "Grillplatz Oberallmi, Bönigen",
          "imageUrl": "https://api.grillstelle.ch/images/614/1243.jpg",
          "subtitle": "Bönigen",
          "category": "fireplaces",
          "distanceKm": 2.8,
          "detailPath": "/app/v1/fireplaces/950a3629-2e76-4d5d-867e-f214855791ff",
          "webPath": "/nb/detail/950a3629-2e76-4d5d-867e-f214855791ff/",
          "lat": 46.681304,
          "lng": 7.899467
        },
        {
          "id": "2578672b-e85f-47a9-99e9-6e95da5c1c65",
          "type": "non-bookable",
          "title": "Burgruine Ringgenberg",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ringgenberg_Kirche_und_Burgruine_DSC06225.jpg/800px-Ringgenberg_Kirche_und_Burgruine_DSC06225.jpg",
          "subtitle": null,
          "category": "castles-ruins",
          "distanceKm": 3,
          "detailPath": "/app/v1/castles-ruins/2578672b-e85f-47a9-99e9-6e95da5c1c65",
          "webPath": "/nb/detail/2578672b-e85f-47a9-99e9-6e95da5c1c65/",
          "lat": 46.7009512,
          "lng": 7.8968558
        },
        {
          "id": "0fd9d298-a1ac-4d9d-929b-19465dcdada0",
          "type": "non-bookable",
          "title": "Uferweg Ringgenberg",
          "imageUrl": "https://api.grillstelle.ch/images/618/1252.jpg",
          "subtitle": "Ringgenberg",
          "category": "fireplaces",
          "distanceKm": 3.3,
          "detailPath": "/app/v1/fireplaces/0fd9d298-a1ac-4d9d-929b-19465dcdada0",
          "webPath": "/nb/detail/0fd9d298-a1ac-4d9d-929b-19465dcdada0/",
          "lat": 46.7027,
          "lng": 7.899559
        },
        {
          "id": "4163ebe5-b247-4587-94bc-7bbcb78e917a",
          "type": "non-bookable",
          "title": "Kifferinseli, Seestrasse 145, 3800 Unterseen, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/568/1171.jpg",
          "subtitle": "Unterseen",
          "category": "fireplaces",
          "distanceKm": 3.9,
          "detailPath": "/app/v1/fireplaces/4163ebe5-b247-4587-94bc-7bbcb78e917a",
          "webPath": "/nb/detail/4163ebe5-b247-4587-94bc-7bbcb78e917a/",
          "lat": 46.678833,
          "lng": 7.813377
        }
      ],
      "pillarPath": "/app/v1/non-bookable/viewpoints",
      "alternates": [
        {
          "id": "planAhead.heatwave.nb",
          "title": "Badis & Seen",
          "pillarPath": "/app/v1/non-bookable/swimming-bathing"
        }
      ]
    },
    {
      "id": "points_of_interest",
      "component": "carousel",
      "title": "Sehenswürdigkeiten",
      "data": [
        {
          "id": "34225",
          "type": "point-of-interest",
          "title": "Golden Pass Line",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/872849322c2cfac8002611f3f7d61230.jpg",
          "path": "/app/v1/pois/golden-pass-line",
          "webPath": "/golden-pass-line/",
          "distanceKm": 0.7,
          "lat": 46.69083333333333,
          "lng": 7.869833333333334
        },
        {
          "id": "177",
          "type": "point-of-interest",
          "title": "Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/IMG_6055_fbdbf7bfba.jpeg",
          "path": "/app/v1/pois/brienzersee",
          "webPath": "/brienzersee/",
          "distanceKm": 9.1,
          "lat": 46.72674259999999,
          "lng": 7.9674729
        },
        {
          "id": "36",
          "type": "point-of-interest",
          "title": "Männlichen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Maennlichen_Panorama_maennlichen_ch_091d073298.jpg",
          "path": "/app/v1/pois/maennlichen",
          "webPath": "/maennlichen/",
          "distanceKm": 10,
          "lat": 46.6136349,
          "lng": 7.9411866
        },
        {
          "id": "179",
          "type": "point-of-interest",
          "title": "Thunersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Thunersee_Seraina_96a142589c.jpg",
          "path": "/app/v1/pois/thunersee",
          "webPath": "/thunersee/",
          "distanceKm": 10.9,
          "lat": 46.6958354,
          "lng": 7.7212158
        },
        {
          "id": "398",
          "type": "point-of-interest",
          "title": "Kleine Scheidegg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/kleine_scheidegg_bahnhof_eiger_moench_jungfrau_sommer_Foto_Jungfraubahnen_c97aabbc4c.webp",
          "path": "/app/v1/pois/kleine-scheidegg",
          "webPath": "/kleine-scheidegg/",
          "distanceKm": 13.5,
          "lat": 46.5850153,
          "lng": 7.961225199999999
        },
        {
          "id": "384",
          "type": "point-of-interest",
          "title": "Bodmi Arena",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Bodmi_Arena_Foto_Grindelwaldsports_3ee395701f.jpg",
          "path": "/app/v1/pois/grindelwald-bodmi-arena",
          "webPath": "/grindelwald-bodmi-arena/",
          "distanceKm": 15.1,
          "lat": 46.62884589999999,
          "lng": 8.041907799999999
        },
        {
          "id": "43",
          "type": "point-of-interest",
          "title": "Jungfraujoch",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Sphinx_Gletscher_Sonnenuntergang_a75f65b03c.jpg",
          "path": "/app/v1/pois/jungfraujoch",
          "webPath": "/jungfraujoch/",
          "distanceKm": 17.8,
          "lat": 46.5482766,
          "lng": 7.9806434
        },
        {
          "id": "64888",
          "type": "point-of-interest",
          "title": "Schloss Thun",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5b3ebff774b899f857d6f40ef932c791.jpg",
          "path": "/app/v1/pois/schloss-thun",
          "webPath": "/schloss-thun/",
          "distanceKm": 19.6,
          "lat": 46.75991666666667,
          "lng": 7.629861111111111
        },
        {
          "id": "55285",
          "type": "point-of-interest",
          "title": "VogellisiBerg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/556c1f11656c197725bc65d911f8c470.jpg",
          "path": "/app/v1/pois/vogellisiberg",
          "webPath": "/vogellisiberg/",
          "distanceKm": 35.5,
          "lat": 46.47202777777778,
          "lng": 7.518527777777778
        },
        {
          "id": "33",
          "type": "point-of-interest",
          "title": "Titlis",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Titlis_Rotair_Engelberg_Titlis_Titlis_Bergbahnen_Hotels_Restaurants_d097056ec7.jpeg",
          "path": "/app/v1/pois/titlis",
          "webPath": "/titlis/",
          "distanceKm": 44.8,
          "lat": 46.772048,
          "lng": 8.4377704
        }
      ]
    },
    {
      "id": "just_added.bookable",
      "component": "carousel",
      "title": "Neu für dich entdeckt",
      "subtitle": "In den letzten 30 Tagen dazugekommen",
      "data": [
        {
          "id": "155395",
          "type": "activity",
          "bookingActivityId": 3867,
          "title": "Ticket Schlosserlebnis Oberhofen am Thunersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7b5d6a05200115a3f666a13d047ac321.jpg",
          "subtitle": "Oberhofen am Thunersee",
          "priceFormatted": "CHF 15",
          "startingPrice": {
            "amount": 15,
            "currency": "CHF",
            "formatted": "CHF 15"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/schloss-oberhofen-thunersee/ticket-schlosserlebnis-oberhofen-thunersee/",
          "webPath": "/schloss-oberhofen-thunersee/ticket-schlosserlebnis-oberhofen-thunersee/",
          "distanceKm": 15.6,
          "lat": 46.7297489,
          "lng": 7.6684472,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7b5d6a05200115a3f666a13d047ac321.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/56c72d77d378580ffd5b5c3747ca05b6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/81a684ad2b1d5d05aded6c4dd4fb6fa8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/669c28b219c09d98dae1a6323a4d351b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a6b7ae1bab98e554838e944b1f125fe7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f60a002002c83a7ba562134a24af3cb7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/82944a88922ddb8879515ee292b103a8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ff623655f97e98a0991d980d27814f9c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2721f122200db444464f01fcf5feb95d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fa9b4d7427d7ee416c90051bc27fbdcb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0f773c75693e1a2cdc5929c1b7f18824.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1e11ca298a8a26ee5a0a8cac94091f1c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f2abc793af688af6c9f72a6ea92a9021.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/aa5e1f78b16970758317134305876b31.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9af41638db0d0c9876f501268cad0762.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/41e80310eb31bf72a45def89d54f253f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1b52a2787d07f19566b589f67421c9fe.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6f754de2886ed1b3d90c96cd2703e7ea.jpg"
          ]
        },
        {
          "id": "155292",
          "type": "activity",
          "bookingActivityId": 3863,
          "title": "Gletscher Erlebnis Plaine Morte ab Crans-Montana",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/93a0f545dda9c6dd9409ff6340d27e4e.jpg",
          "subtitle": "Crans-Montana",
          "priceFormatted": "CHF 105",
          "startingPrice": {
            "amount": 105,
            "currency": "CHF",
            "formatted": "CHF 105"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/bergtour/gletscher-erlebnis-plaine-morte-crans-montana/",
          "webPath": "/bergtour/gletscher-erlebnis-plaine-morte-crans-montana/",
          "distanceKm": 49.3,
          "lat": 46.320300599999996,
          "lng": 7.499053,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/93a0f545dda9c6dd9409ff6340d27e4e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0f38fcb18da9d86f89a594f78bef03c9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/870e20f8e81680b7cbc11e5a89ec5479.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0f51e6f638dd3af21d034d3e99b9ade9.jpg"
          ]
        },
        {
          "id": "157839",
          "type": "activity",
          "bookingActivityId": 3939,
          "title": "Traditionelles Alp Erlebnis in Adelboden",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d89c24c18d01c981f919dbe5d37797c6.jpg",
          "subtitle": "Adelboden",
          "priceFormatted": "CHF 29",
          "startingPrice": {
            "amount": 29,
            "currency": "CHF",
            "formatted": "CHF 29"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/wandern/alp-trdition-adelboden/",
          "webPath": "/wandern/alp-trdition-adelboden/",
          "distanceKm": 29.9,
          "lat": 46.505338699999996,
          "lng": 7.5736791,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d89c24c18d01c981f919dbe5d37797c6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/43e39a7d0fc35dbd59fea93da2e92192.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/95e63a9f370865e406a28a2e69c73c41.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fc3e40ecf364684d8096e1b88e5f4197.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2f1ae652f6d842438918cca8548b111d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c41d6891a1966ea5b94c5b068b636b99.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a45b9f0894bd02f9011cb7a6dceca27f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/847729364de7eb995a810e276addadd0.jpg"
          ]
        },
        {
          "id": "155803",
          "type": "activity",
          "bookingActivityId": 3879,
          "title": "Foxtrail GO Interlaken digitale Schnitzeljagd",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/271f3153f132142947b5143e0cf1a3fb.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 19",
          "startingPrice": {
            "amount": 19,
            "currency": "CHF",
            "formatted": "CHF 19"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/escape-room/foxtrail-go-interlaken/",
          "webPath": "/escape-room/foxtrail-go-interlaken/",
          "distanceKm": 1,
          "lat": 46.686887999999996,
          "lng": 7.849850999999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/271f3153f132142947b5143e0cf1a3fb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7ad399d7885fe52a51a4b158d41e8a01.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5008d0c999f2fe37743c5100874f031e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d2add57c35f03840a191698da87ebe87.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3fc71804271be207806692152a8d9892.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3b8296cd0d8a4747de684fa70ee30a03.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/aff2e25c22b238d11a2eef622d875c53.jpg"
          ]
        },
        {
          "id": "155531",
          "type": "activity",
          "bookingActivityId": 3871,
          "title": "Gender Reveal Fotoshooting in Bern ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/98c3d9bd1144ecd9b42386b7c3fb7038.jpg",
          "subtitle": "Bern",
          "priceFormatted": "CHF 310",
          "startingPrice": {
            "amount": 310,
            "currency": "CHF",
            "formatted": "CHF 310"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/fotokurs/gender-reveal-fotoshooting-bern/",
          "webPath": "/fotokurs/gender-reveal-fotoshooting-bern/",
          "distanceKm": 43.3,
          "lat": 46.9464075,
          "lng": 7.440099499999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/98c3d9bd1144ecd9b42386b7c3fb7038.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ba7ea3672f2952a9f7619728ff2e29b8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ddc841fd005aff28ae75afb86bf3cd2b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3a62c41c964c95112c36c03766063f9f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0e3654e3d60cca87ad23a8ca93ef5c7a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9b919fca702fcdf25e1c8599138e791c.jpg"
          ]
        },
        {
          "id": "154238",
          "type": "activity",
          "bookingActivityId": 3832,
          "title": "Ticket Seilpark Ropetech in Bern",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/22302b60c69dcc5de912459686c26d72.JPG",
          "subtitle": "Bern",
          "priceFormatted": "CHF 42",
          "startingPrice": {
            "amount": 42,
            "currency": "CHF",
            "formatted": "CHF 42"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/ropetech-seilpark-bern/ticket-seilpark-ropetech-bern/",
          "webPath": "/ropetech-seilpark-bern/ticket-seilpark-ropetech-bern/",
          "distanceKm": 41.7,
          "lat": 46.939443999999995,
          "lng": 7.459117,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/22302b60c69dcc5de912459686c26d72.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3a0a8b81a1e1d7ad3ffb1268334ebf4f.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/31fa290e6e50ee84e006c4e5f0a3a695.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/570360e3a2e371e08d25052c5a467e92.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8c238eb2667be7e6794ee6c8e458a7ce.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0a56411d02122c3a16a919b955b75f58.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6eccfeec6aae7080087de1be126ac32c.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8484fb1d2e8645268aed956fa7fa3bd4.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5bbd588298886fc8656e69b2e1da43b8.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a3037c6848114631ddbe3ce26124ad27.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/90673e9f2369fa5731f440b43d16397d.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f09413380de348a669d2b7e6671d3459.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7d1691fcf3c55e6e2b8d06df0be668df.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fa25a31cd0b3656fd04e850cdff70d2b.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/bff034b7b49df0b846578d1631385111.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c42d7525ca421d58f490d02feb22a6fb.JPG"
          ]
        },
        {
          "id": "158144",
          "type": "activity",
          "bookingActivityId": 3948,
          "title": "Nature Reset in Crans-Montana",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/462c67431eca1835788ee8d8538875e6.jpg",
          "subtitle": "Crans-Montana",
          "priceFormatted": "CHF 100",
          "startingPrice": {
            "amount": 100,
            "currency": "CHF",
            "formatted": "CHF 100"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/wandern/nature-reset-crans-montana/",
          "webPath": "/wandern/nature-reset-crans-montana/",
          "distanceKm": 51.6,
          "lat": 46.30466000195933,
          "lng": 7.4806809425354,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/462c67431eca1835788ee8d8538875e6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e2f4724160a87c5fd954379dc08a2319.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fb4b02aac432d288e5399ded51316ddc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b543c1ab53aa50b1d919c169139251b9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9fa52b1f3a948f7ca7256c12759ad124.jpg"
          ]
        },
        {
          "id": "157941",
          "type": "activity",
          "bookingActivityId": 3942,
          "title": "Neugeborenen Fotoshooting im Kanton Waadt",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/709f466ee7fb148947c57caca365e4af.jpg",
          "subtitle": "Lausanne",
          "priceFormatted": "CHF 350",
          "startingPrice": {
            "amount": 350,
            "currency": "CHF",
            "formatted": "CHF 350"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/fotokurs/neugeborenen-fotoshooting-ropraz/",
          "webPath": "/fotokurs/neugeborenen-fotoshooting-ropraz/",
          "distanceKm": 85.4,
          "lat": 46.6122535,
          "lng": 6.7499891,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/709f466ee7fb148947c57caca365e4af.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d51674f0d9142e58c13f3c0ca0d928da.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f77d0abd86df07f03da0407ecaa6d4ec.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2ab4a9cc83587d3ef1fac54bf946b896.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/63ec75bfde7f7286b9102db7b64bff08.jpg"
          ]
        },
        {
          "id": "157499",
          "type": "activity",
          "bookingActivityId": 3929,
          "title": "Ticket Galleria Baumgartner Modelleisenbahnmuseum in Mendrisio",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/17ad7f305d4d4d3c98e74624586a0571.jpg",
          "subtitle": "Capolago",
          "priceFormatted": "CHF 12",
          "startingPrice": {
            "amount": 12,
            "currency": "CHF",
            "formatted": "CHF 12"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/galleria-baumgartner/ticket-galleria-baumgartner-modelleisenbahnmuseum-mendrisio/",
          "webPath": "/galleria-baumgartner/ticket-galleria-baumgartner-modelleisenbahnmuseum-mendrisio/",
          "distanceKm": 124.9,
          "lat": 45.870550099999996,
          "lng": 8.981036699999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/17ad7f305d4d4d3c98e74624586a0571.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/25be5e830a47c60877c79721f280deb8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2eba6b52636deea5e5c99c3479a60c51.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f884e0ca945e161b4960a892ce4f6e10.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/aebb233a61a04dfa9b0ac246c53bb8fc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3d1da9aec844da12874f2ac1eca770af.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/789f20d55903612faca9c55c88b50188.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ed0b7e6e1fb7e76a471d90a046f3d252.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c9a5226744bb7c129c4cc0c27809c8bc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d9830b6755639d035268b9a22148fee5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3aa7234165707874c893263b411d7b6a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6cf185ae1657c81d780aa390801545fb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d322915bc14ca8e2d56491862f5b19d2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/83a50a0e322b7136d8b9b690cf68760d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0eefe56c18b97488fc90fe04c9588062.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fcc2bd2dd11f796d90f25d3f10b2d63b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4ccdf1a029be4196015fc3693b87d2e9.jpg"
          ]
        },
        {
          "id": "156819",
          "type": "activity",
          "bookingActivityId": 3909,
          "title": "\"Find-the-Code: Hacked\" Outdoor Escape Game Genf",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/09f7785a856b881c049a91bbc4033dd9.jpg",
          "subtitle": "Genf",
          "priceFormatted": "CHF 47.50",
          "startingPrice": {
            "amount": 47.5,
            "currency": "CHF",
            "formatted": "CHF 47.50"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/escape-room/hacked-findthecode-genf/",
          "webPath": "/escape-room/hacked-findthecode-genf/",
          "distanceKm": 142.3,
          "lat": 46.200714,
          "lng": 6.1445519,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/09f7785a856b881c049a91bbc4033dd9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f45574909a340200215f5f09055177a6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/bb29d095ea2ee13a2c8921020f0b96ec.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6cf9cd8d8bf48de05b802fd48872ee16.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/53f4424a1c96d7a4bbdb9baef40800ad.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/37c5e51625d7428be726cfdf688771ec.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/409954eb28da7d8cfecc3a7323b27507.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2b292a7ab36856b86efe0598a9891f50.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/706a68c95d2e5cab945243322b8c7620.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/522b39d091d56e4e88f85b614fb79041.jpg"
          ]
        }
      ]
    },
    {
      "id": "blog",
      "component": "carousel",
      "title": "Aus dem Journal",
      "data": [
        {
          "id": "31331",
          "type": "blog-post",
          "title": "Fitpass",
          "description": "Der Fitpass gewährt dir innerhalb der Schweiz einen unlimitierten Zugang zu mehr als 400 Sportanlagen. So kannst du zahlreiche Sportarten ausüben oder Neues ausprobieren. Der Fitpass ist wie ein Generalabonnement (GA) für Sport, Fitness und Wellness. Du kannst das Abo für eine Woche, einen Monat oder ein ganzes Jahr kaufen. Ab einem Halbjahresabo bleibst du dennoch flexibel. Du kannst es unterbrechen, wenn dir eine Krankheit oder ein Auslandsaufenthalt dazwischen kommt. Viele Krankenkassen in der Schweiz beteiligen sich übrigens an den Kosten des Fitpasses.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/feeee219deea09703710c1b9df585301.jpg",
          "path": "/travel-guide/reisetipps-schweiz/fitpass/",
          "webPath": "/travel-guide/reisetipps-schweiz/fitpass/"
        },
        {
          "id": "507",
          "type": "blog-post",
          "title": "Swiss Activities Team Tipps - 17 Tipps für deine Reise",
          "description": "Erhalte Reisetipps für deine Reise durch die Schweiz direkt vom Swiss Activities Team. Wir befassen uns täglich mit diesem vielseitigen Land und teilen gerne unsere Tipps mit dir. Von Ideen, wie du beim Essen-Retten Geld sparen kannst, bis zu unseren Lieblingsaktivitäten ist alles dabei.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0_SA_Team_Tipps_41dbc3ba15.jpg",
          "path": "/travel-guide/reisetipps-schweiz/swiss-activities-team-tipps/",
          "webPath": "/travel-guide/reisetipps-schweiz/swiss-activities-team-tipps/"
        },
        {
          "id": "506",
          "type": "blog-post",
          "title": "So nutzt du deinen Swiss Travel Pass - Schritt für Schritt",
          "description": "Mit dem Swiss Travel Pass reist du ohne Einschränkungen mit den öffentlichen Verkehrsmitteln durch die Schweiz. Doch vielleicht stellen sich dir einige Fragen, bevor du deine Reise antrittst? In diesem Artikel erklären wir dir in fünf Schritten, wie du deinen Swiss Travel Pass auswählst, kaufst, aktivierst und nutzt.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Swiss_Travel_Pass_Mobile_Foto_Swiss_Travel_System_AG_c5f150d169.jpg",
          "path": "/travel-guide/reisetipps-schweiz/swiss-travel-pass-aktivieren/",
          "webPath": "/travel-guide/reisetipps-schweiz/swiss-travel-pass-aktivieren/"
        },
        {
          "id": "405",
          "type": "blog-post",
          "title": "Geld sparen in der Schweiz - 33 Tipps für deine Reise",
          "description": "Die Schweiz ist zwar eines der teuersten Länder der Welt, aber trotzdem gibt es Wege, wie du mit kleinem Budget durchs Land kommst. Dieser Beitrag zeigt dir, wie du in der Schweiz Geld sparen kannst während deiner Reise. Wir helfen dir bei deiner preisbewussten Reiseplanung. Hier erhältst du 33 wertvolle Tipps, wie du beim Essen, beim Übernachten, in deiner Freizeit und auch bei deiner Anreise Geld sparen kannst.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0_Geld_sparen_Unsplash_d1d158f905.jpg",
          "path": "/travel-guide/reisetipps-schweiz/geld-sparen-schweiz/",
          "webPath": "/travel-guide/reisetipps-schweiz/geld-sparen-schweiz/"
        },
        {
          "id": "404",
          "type": "blog-post",
          "title": "2 Tage Schweiz - 9 Reiserouten ab Genf",
          "description": "Diese Auswahl von 9 Reiserouten hilft dir bei der Planung deiner Reise, wenn du zwei Tage in der Schweiz hast. Auch wenn zwei Tage nur eine sehr kurze Zeit sind, gibt es dennoch viele Möglichkeiten für dich. Du kannst den französischen Teil der Schweiz bereisen und einige der Highlights in dieser Region entdecken - wie den Genfersee, die Lavaux-Weinberge und sogar einige Schweizer Schokoladenfabriken. Unsere Sammlung zeigt dir verschiedene Reiserouten, die alle innerhalb von zwei Tagen von Genf aus machbar sind.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0_Genf_Unsplash_cae75b3dc2.jpg",
          "path": "/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-genf/",
          "webPath": "/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-genf/"
        },
        {
          "id": "374",
          "type": "blog-post",
          "title": "40 interessante Fakten über die Schweiz",
          "description": "Über die Schweiz gibt es viele interessante Fakten, die du bestimmt noch nicht alle kennst. Wenn du dich für deine Reise in die Schweiz informieren möchtest, kommen hier 40 faszinierende, unnütze, interessante und unterhaltsame Fakten über die Schweiz. Damit bist du perfekt ausgerüstet, um mit deinem Wissen anzugeben. Oder wusstest du zum Beispiel, dass Meerschweinchen in der Schweiz nie alleine gehalten werden dürfen? Oder dass der Herr der Ringe durch die Schweiz inspiriert wurde?",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/pexels_pixabay_355952_d7a03beba5.jpg",
          "path": "/travel-guide/schweizer-fakten/swiss-facts/",
          "webPath": "/travel-guide/schweizer-fakten/swiss-facts/"
        }
      ]
    }
  ]
} satisfies TGatewayHome;
