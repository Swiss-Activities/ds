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
              "count": 42,
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
              "count": 36,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 35,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:learning",
              "label": "Lernen",
              "value": "learning",
              "count": 30,
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
              "count": 52,
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
              "count": 62,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:spring",
              "label": "Frühling",
              "value": "spring",
              "count": 48,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:autumn",
              "label": "Herbst",
              "value": "autumn",
              "count": 48,
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
              "count": 9,
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
              "count": 62,
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
              "count": 19,
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
              "count": 43,
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
      "text": "Bewölkter Nachmittag in Interlaken bei 16°C. Lässt sich trotzdem was draus machen.",
      "destination": "Interlaken",
      "forecast": {
        "title": "Interlaken",
        "data": [
          {
            "date": "2026-06-09",
            "day": "Heute",
            "dayFull": "Heute",
            "tempMin": 13,
            "tempMax": 17,
            "icon": "rainy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-10",
            "day": "Mi",
            "dayFull": "Mittwoch",
            "tempMin": 9,
            "tempMax": 15,
            "icon": "rainy",
            "description": "Leichter Regen"
          },
          {
            "date": "2026-06-11",
            "day": "Do",
            "dayFull": "Donnerstag",
            "tempMin": 8,
            "tempMax": 18,
            "icon": "cloudy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-12",
            "day": "Fr",
            "dayFull": "Freitag",
            "tempMin": 10,
            "tempMax": 20,
            "icon": "sunny",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-13",
            "day": "Sa",
            "dayFull": "Samstag",
            "tempMin": 12,
            "tempMax": 24,
            "icon": "sunny",
            "description": "Teilweise bewölkt"
          },
          {
            "date": "2026-06-14",
            "day": "So",
            "dayFull": "Sonntag",
            "tempMin": 13,
            "tempMax": 26,
            "icon": "sunny",
            "description": "Meist klar"
          },
          {
            "date": "2026-06-15",
            "day": "Mo",
            "dayFull": "Montag",
            "tempMin": 13,
            "tempMax": 27,
            "icon": "sunny",
            "description": "Meist klar"
          }
        ]
      },
      "weather": "cloudy",
      "weatherLabel": "Bewölkt",
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
          "date": "2026-06-09",
          "day": "Heute",
          "dayFull": "Heute",
          "tempMin": 13,
          "tempMax": 17,
          "icon": "rainy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-10",
          "day": "Mi",
          "dayFull": "Mittwoch",
          "tempMin": 9,
          "tempMax": 15,
          "icon": "rainy",
          "description": "Leichter Regen"
        },
        {
          "date": "2026-06-11",
          "day": "Do",
          "dayFull": "Donnerstag",
          "tempMin": 8,
          "tempMax": 18,
          "icon": "cloudy",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-12",
          "day": "Fr",
          "dayFull": "Freitag",
          "tempMin": 10,
          "tempMax": 20,
          "icon": "sunny",
          "description": "Bewölkt"
        },
        {
          "date": "2026-06-13",
          "day": "Sa",
          "dayFull": "Samstag",
          "tempMin": 12,
          "tempMax": 24,
          "icon": "sunny",
          "description": "Teilweise bewölkt"
        },
        {
          "date": "2026-06-14",
          "day": "So",
          "dayFull": "Sonntag",
          "tempMin": 13,
          "tempMax": 26,
          "icon": "sunny",
          "description": "Meist klar"
        },
        {
          "date": "2026-06-15",
          "day": "Mo",
          "dayFull": "Montag",
          "tempMin": 13,
          "tempMax": 27,
          "icon": "sunny",
          "description": "Meist klar"
        }
      ]
    },
    {
      "id": "suggested_types",
      "component": "suggested_types",
      "title": "Was unternehmen",
      "data": [
        {
          "id": "churches-chapels",
          "title": "Kirchen & Kapellen",
          "iconUrl": "/distributor/icons/churches-chapels.svg",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dreifaltigkeitskirche_Bern_Basilika_Turm_20150312_DSC05192.JPG/399px-Dreifaltigkeitskirche_Bern_Basilika_Turm_20150312_DSC05192.JPG",
          "href": "/app/v1/non-bookable/churches-chapels",
          "webPath": "/churches-chapels/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "escape-room",
          "title": "Escape Room und Games",
          "iconUrl": "/distributor/icons/escape-room.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Swiss_Activities_Bt_B_1_d8cac4017e.jpg",
          "href": "/app/v1/activity-types/escape-room",
          "webPath": "/escape-room/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "food-and-drink",
          "title": "Essen & Trinken",
          "iconUrl": "/distributor/icons/food-and-drink.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/zvieri_zur03898_webalbum_gall_a8478e3ac9.jpg",
          "href": "/app/v1/activity-types/essen-und-trinken",
          "webPath": "/essen-und-trinken/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "creative-workshop",
          "title": "Workshop",
          "iconUrl": "/distributor/icons/creative-workshop.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f417c427099a459a7d48d6a37320d7fe.jpg",
          "href": "/app/v1/activity-types/kreativer-workshop",
          "webPath": "/kreativer-workshop/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "brunch",
          "title": "Brunch",
          "iconUrl": "/distributor/icons/brunch.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/145_1_5782fac03a.jpg",
          "href": "/app/v1/activity-types/brunch",
          "webPath": "/brunch/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "virtual-reality-games",
          "title": "Virtual Reality Games",
          "iconUrl": "/distributor/icons/virtual-reality-games.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/84292c2a1a999fba8625b2f332ab561b.jpg",
          "href": "/app/v1/activity-types/virtual-reality-games",
          "webPath": "/virtual-reality-games/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "cooking-course",
          "title": "Kochkurs",
          "iconUrl": "/distributor/icons/cooking-course.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/17529405d30118618f4b24f09c539eb9.jpg",
          "href": "/app/v1/activity-types/kochkurs",
          "webPath": "/kochkurs/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "fireplaces",
          "title": "Grillstellen",
          "iconUrl": "/distributor/icons/fireplaces.svg",
          "imageUrl": "https://api.grillstelle.ch/images/1259/2909.jpg",
          "href": "/app/v1/non-bookable/fireplaces",
          "webPath": "/fireplaces/",
          "weatherFit": "ok",
          "betterOn": null
        }
      ]
    },
    {
      "id": "proximity",
      "component": "carousel",
      "title": "Heute regnet's. Beliebt in deiner Nähe.",
      "data": [
        {
          "id": "137922",
          "type": "activity",
          "bookingActivityId": 3256,
          "title": "\"Find-the-Code: Fall Hacked\" Outdoor Escape Game Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e909e04bc337a34b521a2735466dfeeb.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 47.50",
          "startingPrice": {
            "amount": 47.5,
            "currency": "CHF",
            "formatted": "CHF 47.50"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/escape-room/hacked-findthecode-interlaken/",
          "webPath": "/escape-room/hacked-findthecode-interlaken/",
          "distanceKm": 0.6,
          "lat": 46.6904314,
          "lng": 7.869051,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e909e04bc337a34b521a2735466dfeeb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2723c82f5d48d03476ba08cbae444295.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a12f123a42f02462e9c2ff34a6bb316c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/11fb4aa552508783d804a547dbffce3f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b6145f52a6449fbafad48a24082c268b.jpg"
          ]
        },
        {
          "id": "152154",
          "type": "activity",
          "bookingActivityId": 3771,
          "title": "Cocktailkurs im Grand Hotel Belvedere Wengen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7b6e0fc21a1901cb61f1c5ca089c808a.jpg",
          "subtitle": "Wengen",
          "priceFormatted": "CHF 90",
          "startingPrice": {
            "amount": 90,
            "currency": "CHF",
            "formatted": "CHF 90"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/kreativer-workshop/cocktailkurs-grand-hotel-belvedere/",
          "webPath": "/kreativer-workshop/cocktailkurs-grand-hotel-belvedere/",
          "distanceKm": 9.6,
          "lat": 46.608832199999995,
          "lng": 7.919167499999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7b6e0fc21a1901cb61f1c5ca089c808a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/659a7cd46ec75986d8cdc9fde25f6da2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/473ce9562487e7cb881e0ea450e2e53c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7c02b4392cb1f0b41200526dec66b69c.jpg"
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
          "id": "147192",
          "type": "activity",
          "bookingActivityId": 3593,
          "title": "Museumseintritt Schloss Spiez",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9a9fad67ca21700113cd796d98a16b82.jpg",
          "subtitle": "Spiez",
          "priceFormatted": "CHF 12",
          "startingPrice": {
            "amount": 12,
            "currency": "CHF",
            "formatted": "CHF 12"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/schloss-spiez/museum-eintritt-schloss-spiez/",
          "webPath": "/schloss-spiez/museum-eintritt-schloss-spiez/",
          "distanceKm": 13.4,
          "lat": 46.689313999999996,
          "lng": 7.6874742,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9a9fad67ca21700113cd796d98a16b82.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/720162a62701bdc66c2b3cfaa58901fc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/236d475592e5e5b96327a625556cbf83.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8006d2a86a897b3bf95dfb6cf709769e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b9ce5789fba54052089a2d2dfa596631.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cbbfd8599352280bf0213d2fce0bb832.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/08ffec6a38edaf8509fb2118725ab9cc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c6584d1a0034e04544c488fa0f093a73.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/54c99009c83769db52891bc07ef8f647.jpg"
          ]
        },
        {
          "id": "352",
          "type": "activity",
          "bookingActivityId": 114,
          "title": "Schilthorn Brunch inkl. Bahnticket Schilthorn ab Stechelberg oder Mürren",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d7d90924324ab85b7cc999b1e7aced01.jpg",
          "subtitle": "Mürren",
          "priceFormatted": "CHF 106",
          "startingPrice": {
            "amount": 106,
            "currency": "CHF",
            "formatted": "CHF 106"
          },
          "rating": 4.66,
          "reviewCount": 110,
          "path": "/schilthorn-piz-gloria/schilthorn-brunch-schilthorn-inkl-bahnfahrt-retour/",
          "webPath": "/schilthorn-piz-gloria/schilthorn-brunch-schilthorn-inkl-bahnfahrt-retour/",
          "distanceKm": 14.3,
          "lat": 46.5594423,
          "lng": 7.8926688,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d7d90924324ab85b7cc999b1e7aced01.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/526dae69936e1a35f913807ffe432053.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4d62f489f2ee3070aa9e421d885cc0db.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c4cd8058575f951aeb5dfb48ac68709f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2971b1f3c48f8aa77c9acb13489ac0ee.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8552b51e5add3a25d24474d72cfd7c36.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/044a4e66bd5fe85b055333df9193dd01.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/73f979a9c1244e7b79d052a5556a10cc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/67191af70eb20a199fa0fe88b765625d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/54250c8bcb9a7c93aaeaa687d6ff3773.jpg"
          ]
        },
        {
          "id": "1566",
          "type": "activity",
          "bookingActivityId": 1349,
          "title": "Privat Spa im Eiger Mountain & Soul Resort in Grindelwald",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Privat_Spa_Badewanne_6_8f7d029e7a.jpg",
          "subtitle": "Grindelwald",
          "priceFormatted": "CHF 260",
          "startingPrice": {
            "amount": 260,
            "currency": "CHF",
            "formatted": "CHF 260"
          },
          "rating": 5,
          "reviewCount": 1,
          "path": "/wellness/privat-spa-hotel-eiger-selfness/",
          "webPath": "/wellness/privat-spa-hotel-eiger-selfness/",
          "distanceKm": 15.1,
          "lat": 46.62348,
          "lng": 8.03812,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Privat_Spa_Badewanne_6_8f7d029e7a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Spa_ganzes_Areal_157098c711.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Massage_Liegen_4d5ee5333c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Privat_Spa_Badewanne_3_d043908f7a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Spa_Blick_auf_Finnische_Sauna_081a2a550b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Spa_Sauna_4_ff56707ab5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Privat_Spa_Blick_auf_Kamin_c1829b0f22.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Privat_Spa_Handtuch_23e286a354.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Privat_Spa_Kamin_mit_Frottee_53478836b6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Privat_Spa_Panorama_295d14b99a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Privat_SPA_Herzklopfen_8969e3279a.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rueckenmassge_2_4057d13e9b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Selfness_Ruheraum_c60a23bcfc.jpg"
          ]
        },
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
        }
      ]
    },
    {
      "id": "reviews",
      "component": "carousel",
      "title": "Von Reisenden wie dir",
      "data": [
        {
          "id": "708",
          "type": "review",
          "title": "Schilthorn Brunch inkl. Bahnticket Schilthorn ab Stechelberg oder Mürren",
          "activityId": "352",
          "bookingActivityId": 114,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d7d90924324ab85b7cc999b1e7aced01.jpg",
          "path": "/schilthorn-piz-gloria/schilthorn-brunch-schilthorn-inkl-bahnfahrt-retour/",
          "rating": 5,
          "body": "Im Moment viel Baustelle, aber dennoch sehr schön gewesen!",
          "reviewerName": "Nadine",
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
      "id": "whatsOn.cinema.today",
      "component": "carousel",
      "title": "Filme heute im Kino in deiner Nähe",
      "data": [
        {
          "id": "fbfca46a-af7b-4e13-9a35-fb3d2f676145",
          "type": "non-bookable",
          "title": "Marty Supreme",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l316b46c4e-ea35-4fe6-bda8-07139cd60084.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 29.8,
          "detailPath": "/app/v1/movies/fbfca46a-af7b-4e13-9a35-fb3d2f676145",
          "webPath": null,
          "lat": 46.88947053333333,
          "lng": 7.6085987333333325,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "e6816c68-fa73-4187-800d-1c01f193a86a",
          "type": "non-bookable",
          "title": "The Super Mario Galaxy Movie",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l35421c474-1283-47fa-a7cb-592de89010c7.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 22,
          "detailPath": "/app/v1/movies/e6816c68-fa73-4187-800d-1c01f193a86a",
          "webPath": null,
          "lat": 46.8760559953704,
          "lng": 7.78276204629629,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "e251d918-7d5b-4215-8afc-72101b3d9d5d",
          "type": "non-bookable",
          "title": "GOAT",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l37e0891e0-9750-48d6-8823-f75e258788b3.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 19.9,
          "detailPath": "/app/v1/movies/e251d918-7d5b-4215-8afc-72101b3d9d5d",
          "webPath": null,
          "lat": 46.85237475,
          "lng": 7.7669098750000005,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "39a9b0d9-c2c7-49eb-a685-f23fc141d26e",
          "type": "non-bookable",
          "title": "The Drama",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l336e35122-de7f-49b6-8489-54edb4722140.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 23.1,
          "detailPath": "/app/v1/movies/39a9b0d9-c2c7-49eb-a685-f23fc141d26e",
          "webPath": null,
          "lat": 46.89014577083333,
          "lng": 7.8023366354166654,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "62df4cd4-aa1d-41f4-9919-658ea2a64885",
          "type": "non-bookable",
          "title": "Hoppers",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l30cbd12e2-944c-4634-a499-b2fff399e9fd.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 26,
          "detailPath": "/app/v1/movies/62df4cd4-aa1d-41f4-9919-658ea2a64885",
          "webPath": null,
          "lat": 46.914789972972955,
          "lng": 7.935065837837837,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "0226fc86-42db-447e-b067-b164614c5409",
          "type": "non-bookable",
          "title": "Project Hail Mary",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l364f8032f-aff3-4c97-a5ab-8551e6da112c.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 22.3,
          "detailPath": "/app/v1/movies/0226fc86-42db-447e-b067-b164614c5409",
          "webPath": null,
          "lat": 46.88025854430381,
          "lng": 7.788889746835443,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "717a2d84-0349-4ca3-90d9-ccdeb45b8838",
          "type": "non-bookable",
          "title": "Terminal Island",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l36584decf-0801-4408-976f-b9dac017b9d9.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 31.5,
          "detailPath": "/app/v1/movies/717a2d84-0349-4ca3-90d9-ccdeb45b8838",
          "webPath": null,
          "lat": 46.492878,
          "lng": 7.562844,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "d084b0b1-8657-4d49-9d27-60b3826d643c",
          "type": "non-bookable",
          "title": "The Mysterious Gaze of the Flamingo",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l3bdb30cf4-0044-4c20-9ba8-7c401e9dfadc.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 31.5,
          "detailPath": "/app/v1/movies/d084b0b1-8657-4d49-9d27-60b3826d643c",
          "webPath": null,
          "lat": 46.492878,
          "lng": 7.562844,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "74f70ce0-dcbf-4699-b8a3-a3f9f8fc12dc",
          "type": "non-bookable",
          "title": "How to Make a Killing",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l38d9a66f8-9b32-4723-9089-4eec4173efe7.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 34.6,
          "detailPath": "/app/v1/movies/74f70ce0-dcbf-4699-b8a3-a3f9f8fc12dc",
          "webPath": null,
          "lat": 46.990884333333334,
          "lng": 7.958515888888889,
          "availabilityNote": "Showtimes vary"
        },
        {
          "id": "75a15d9f-7ecc-40a2-8879-c758b97ea379",
          "type": "non-bookable",
          "title": "Pillion",
          "imageUrl": "https://img.cinefile.ch/content/images/poster150/c1nef1l398583e08-192b-464b-8cc1-a58cc97465bf.jpg",
          "subtitle": null,
          "category": "movies",
          "distanceKm": 34.8,
          "detailPath": "/app/v1/movies/75a15d9f-7ecc-40a2-8879-c758b97ea379",
          "webPath": null,
          "lat": 46.999642,
          "lng": 7.874019499999999,
          "availabilityNote": "Showtimes vary"
        }
      ],
      "pillarPath": "/app/v1/non-bookable/movies",
      "alternates": [
        {
          "id": "whatsOn.museums.afternoon",
          "title": "Museen am Nachmittag",
          "pillarPath": "/app/v1/non-bookable/museums"
        },
        {
          "id": "weather.indoor_workshops.today",
          "title": "Kochkurse & Workshops",
          "pillarPath": "/app/v1/activity-types/cooking-course"
        },
        {
          "id": "weather.food_drink.today",
          "title": "Essen & Trinken",
          "pillarPath": "/app/v1/activity-types/wine-tasting"
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
          "webPath": null,
          "lat": 46.690741,
          "lng": 7.859368
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
          "webPath": null,
          "lat": 46.6862269,
          "lng": 7.8497462
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
          "webPath": null,
          "lat": 46.697931,
          "lng": 7.887164
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
          "webPath": null,
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
          "webPath": null,
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
          "webPath": null,
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
          "webPath": null,
          "lat": 46.678833,
          "lng": 7.813377
        },
        {
          "id": "3fba306e-ae2d-4b7d-85c3-e9142c1e7c6a",
          "type": "non-bookable",
          "title": "Entenstein",
          "imageUrl": "https://api.grillstelle.ch/images/619/1255.jpg",
          "subtitle": "Niederried bei Interlaken",
          "category": "fireplaces",
          "distanceKm": 5.4,
          "detailPath": "/app/v1/fireplaces/3fba306e-ae2d-4b7d-85c3-e9142c1e7c6a",
          "webPath": null,
          "lat": 46.712451,
          "lng": 7.922154
        },
        {
          "id": "c898e76c-1eae-4824-ae40-37ac27eddb88",
          "type": "non-bookable",
          "title": "Badi Niederried",
          "imageUrl": "https://api.grillstelle.ch/images/620/1258.jpg",
          "subtitle": "Niederried bei Interlaken",
          "category": "fireplaces",
          "distanceKm": 5.8,
          "detailPath": "/app/v1/fireplaces/c898e76c-1eae-4824-ae40-37ac27eddb88",
          "webPath": null,
          "lat": 46.715235,
          "lng": 7.927263
        },
        {
          "id": "735ff12d-c57e-474c-9926-ce1b45b661ad",
          "type": "non-bookable",
          "title": "Grillstelle Senggfluh, Iseltwald",
          "imageUrl": "https://api.grillstelle.ch/images/615/1246.jpg",
          "subtitle": "Iseltwald",
          "category": "fireplaces",
          "distanceKm": 7,
          "detailPath": "/app/v1/fireplaces/735ff12d-c57e-474c-9926-ce1b45b661ad",
          "webPath": null,
          "lat": 46.706089,
          "lng": 7.949835
        }
      ],
      "pillarPath": "/app/v1/non-bookable/viewpoints",
      "alternates": [
        {
          "id": "planAhead.weekend.sunny",
          "title": "Bootsausflüge fürs Wochenende",
          "pillarPath": "/app/v1/activity-types/boat-trips"
        },
        {
          "id": "planAhead.heatwave",
          "title": "Canyoning",
          "pillarPath": "/app/v1/activity-types/canyoning"
        },
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
      "id": "trending",
      "component": "carousel",
      "title": "Gerade im Trend in der Schweiz.",
      "data": [
        {
          "id": "2204",
          "type": "activity",
          "bookingActivityId": 1969,
          "title": "\"Beat the Braut\" in Thun: actionreicher Junggesellinnenabschied",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Swiss_Activities_Bt_Br_1_d40a2e7fcc.jpg",
          "subtitle": "Thun",
          "priceFormatted": "CHF 299",
          "startingPrice": {
            "amount": 299,
            "currency": "CHF",
            "formatted": "CHF 299"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/escape-room/beat-the-braut-thun/",
          "webPath": "/escape-room/beat-the-braut-thun/",
          "distanceKm": 19.4,
          "lat": 46.75489390000001,
          "lng": 7.629724299999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Swiss_Activities_Bt_Br_1_d40a2e7fcc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Thun_1_Tanja_2ffd092211.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Swiss_Activities_Bt_Br_2_6f149410ba.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Swiss_Activities_Bt_Br_3_7ee1659025.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Thun_2_Tanja_231d952049.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Swiss_Activities_Bt_Br_4_78103f1202.jpg"
          ]
        },
        {
          "id": "540",
          "type": "activity",
          "bookingActivityId": 337,
          "title": "Schilthorn Nachmittags Snack \"Piz Gloria Zvieri\" inkl. Bahnticket ab Stechelberg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/zvieri_zur03898_webalbum_gall_a8478e3ac9.jpg",
          "subtitle": "Lauterbrunnen",
          "priceFormatted": "CHF 121",
          "startingPrice": {
            "amount": 121,
            "currency": "CHF",
            "formatted": "CHF 121"
          },
          "rating": 4.74,
          "reviewCount": 19,
          "path": "/schilthorn-piz-gloria/schilthorn-piz-gloria-zvieri/",
          "webPath": "/schilthorn-piz-gloria/schilthorn-piz-gloria-zvieri/",
          "distanceKm": 14.9,
          "lat": 46.555263,
          "lng": 7.901612999999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/zvieri_zur03898_webalbum_gall_a8478e3ac9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_zvieri_zur03898_webalbum_afc6a48d87.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_zvieri_zur_3026_webalbum_ffd1b6bd9d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_zvieri_zur03713_webalbum_55429ae709.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_zvieri_zur_3046_webalbum_c985e6ae63.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Piz_Gloria_Sunset_1_ohne_Logo_webalbum_1_ae4df77f88.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Skyline_Walk_Birg_Schilthorn_e7e7770184.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_zvieri_zur03608_webalbum_gall_746e55444c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_zvieri_zur03768_webalbum_gall_12e3fd1365.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_zvieri_zur03788_webalbum_gall_61061b0135.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/dd6b832fe763412aa6a04166670d8b65.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7543aab745844935d2b030dab059ea13.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/667116ca59d76652c875b71a852248b0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2a2187f464ae2df5735387896a738729.jpg"
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
        },
        {
          "id": "92567",
          "type": "activity",
          "bookingActivityId": 2925,
          "title": "Vollmondfahrt aufs Brienzer Rothorn mit Drei-Gänge-Menü",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cdfbfbea85b78772fbae6e77b1573149.jpg",
          "subtitle": "Brienz",
          "priceFormatted": "CHF 90",
          "startingPrice": {
            "amount": 90,
            "currency": "CHF",
            "formatted": "CHF 90"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/brienzer-rothorn/vollmondfahrt-brienzer-rothorn/",
          "webPath": "/brienzer-rothorn/vollmondfahrt-brienzer-rothorn/",
          "distanceKm": 15.4,
          "lat": 46.75509319999999,
          "lng": 8.038833799999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cdfbfbea85b78772fbae6e77b1573149.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/005e86144771d1bdaebff5c57c7f48c8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7398a774c559f4f74009fb0fd74ad5f6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c3a8cc6aa7f17fcee98a68c8e9d43283.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/697a2ba563a27727f4801c86f7c68ef9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0aa1e081a5b5f68251954e45eaebeefe.jpg"
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
          "id": "1923",
          "type": "activity",
          "bookingActivityId": 1705,
          "title": "Käsefondue Floss auf Aare und Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0cdd0b394821419ed6420b78f22efb39.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 90",
          "startingPrice": {
            "amount": 90,
            "currency": "CHF",
            "formatted": "CHF 90"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/essen-und-trinken/raclette-rafting-interlaken/",
          "webPath": "/essen-und-trinken/raclette-rafting-interlaken/",
          "distanceKm": 0.3,
          "lat": 46.687574999999995,
          "lng": 7.860129000000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0cdd0b394821419ed6420b78f22efb39.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/49dfe259fd6929f1d0e8eab7ae93b418.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/dc4937cfee65f3973818628442e6b3ae.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2a6d4f795abfb4272ada8d9a919293b3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/402629b56fb01833c627dd2631a52d57.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/908a4e4225f5ba450a807c40065ab47e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6ce8643ff464ebe3bf7679b32a38b021.jpg"
          ]
        },
        {
          "id": "950",
          "type": "activity",
          "bookingActivityId": 753,
          "title": "\"Unheimliches Thun\": öffentliche Stadtführung",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/280d199b0ad09838e54445fd30a62ee2.jpg",
          "subtitle": "Thun",
          "priceFormatted": "CHF 25",
          "startingPrice": {
            "amount": 25,
            "currency": "CHF",
            "formatted": "CHF 25"
          },
          "rating": 5,
          "reviewCount": 12,
          "path": "/stadtfuehrung/stadtfuehrung-unheimliches-thun/",
          "webPath": "/stadtfuehrung/stadtfuehrung-unheimliches-thun/",
          "distanceKm": 19.6,
          "lat": 46.7594792,
          "lng": 7.6287744,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/280d199b0ad09838e54445fd30a62ee2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f8b164a176e591de9af0bbe6f57cf513.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/bfdf4947d698c4e1ca3c281e24d46f2f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Unheimliches_Thun_15_Thun_Thunersee_Tourismus_680414da8d.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Unheimliches_Thun_4_Thun_Thunersee_Tourismus_35396d9d28.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Stadtfuehrung_blutiges_Thun_4_Thun_Thunersee_Tourismus_ec19187c11.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/64e846e10f5a7c747ff27af8a8b1fe52.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1e3c6be194cdd79ad4669fabfb677bb1.jpg"
          ]
        },
        {
          "id": "593",
          "type": "activity",
          "bookingActivityId": 386,
          "title": "Ticket Ballenberg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/eb58931366300f77f90d2fd318ce9696.jpg",
          "subtitle": "Brienzwiler",
          "priceFormatted": "CHF 32",
          "startingPrice": {
            "amount": 32,
            "currency": "CHF",
            "formatted": "CHF 32"
          },
          "rating": 4.74,
          "reviewCount": 70,
          "path": "/ballenberg-reisefuehrer/ballenberg-museum/",
          "webPath": "/ballenberg-reisefuehrer/ballenberg-museum/",
          "distanceKm": 19.1,
          "lat": 46.749604,
          "lng": 8.096396,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/eb58931366300f77f90d2fd318ce9696.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/411ca4a1a500cd9f0078a827acca2922.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1918fad06c1a5e274e1dc3bc8eb00f2a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5918b3c66584d597399a35756100b9a1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_00_2023_05_13_dabi_Fruehling_9505_ff31f14921.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/950d9242613d2dcb7ba6976e9ec809d8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2019_09_10_sami_kaesen_6910_7fce481e42.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2019_10_07_sami_hutmachen_0608_4a304eb23f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2018_06_16_mime_Veranst_Seilerei_5036_babb88bc4c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2019_10_10_sami_toepfern_4187_d8ebe5ab33.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2019_11_02_dabi_Saisonschluss_0733_a83cfd1496.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2019_11_02_dabi_Saisonschluss_0851_037c7b5b16.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2020_10_13_dabi_Key_Fotos_207969_1e730dd4dc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2021_06_09_dabi_Landschaft_1213259_21c5c9f4ee.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2021_09_12_dabi_Laden_Ganz_Ohr_Osteria_Familie_3667_cdb881d6e9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2021_09_12_dabi_Laden_Ganz_Ohr_Osteria_Familie_4184_8ff76af1c9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2021_11_10_dabi_Gastronomie_1917_acddcd6134.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2023_04_14_dabi_Sonder_Ausst_Schwingen_3917_68ddd8aae7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2022_06_10_dabi_Gruppe_Grossanlass_75_a2e9cecb33.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2022_06_10_dabi_Gruppe_Grossanlass_136_ef045d4925.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2022_06_10_dabi_Gruppe_Grossanlass_141_f78686322f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2022_06_10_dabi_Gruppe_Grossanlass_325_mini_87ab64cce8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2019_07_05_dabi_Gastronomie_5994_f2f6732afb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2022_07_24_dabi_Seidentage_5415_b96a8efb60.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2022_10_17_dabi_Alphornfestival_2026001_039db7ad80.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2023_04_14_dabi_Sonder_Ausst_Schwingen_4428_b85c40e85c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2023_05_13_dabi_Fruehling_6987_fc05d919c4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2023_05_13_dabi_Fruehling_7118_ad237cb0a0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2023_05_13_dabi_Fruehling_9543_f66bdaabfe.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2023_06_18_dabi_Maerchensonntag_4633_54e3a51139.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_ballenberg3_89fbc55371.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_flm_ballenberg_ausflugsziel_fuer_familien_56dc01d4aa.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_flm_ballenberg_haus_aus_ostermundigen_c999c76a16.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_3_Handwerk_Kaeserei_Freilichtmuseum_Ballenberg_f548134db9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2019_09_09_sami_schmieden_6194_16a3f3bbb3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_5_Handwerk_Spinnen_Freilichtmuseum_Ballenberg_909ad07164.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_10_Familie_Stricken_Freilichtmuseum_Ballenberg_2d255f41fd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/thumbnail_8_Tiere_Ferckel_Freilichtmuseum_Ballenberg_98aefda8a1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/thumbnail_4_Kind_Ziegelei_Freilichtmuseum_Ballenberg_829c3270a8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_11_Handwerk_Satteln_Freilichtmuseum_Ballenberg_42262d0ed1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_12_Handwerk_Ton_Toepfern_Freilichtmuseum_Ballenberg_5bf45af7f9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_13_Handwerk_Schuhmachen_Freilichtmuseum_Ballenberg_c4d597baa7.jpg"
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
          "id": "404",
          "type": "blog-post",
          "title": "2 Tage Schweiz - 9 Reiserouten ab Genf",
          "description": "Diese Auswahl von 9 Reiserouten hilft dir bei der Planung deiner Reise, wenn du zwei Tage in der Schweiz hast. Auch wenn zwei Tage nur eine sehr kurze Zeit sind, gibt es dennoch viele Möglichkeiten für dich. Du kannst den französischen Teil der Schweiz bereisen und einige der Highlights in dieser Region entdecken - wie den Genfersee, die Lavaux-Weinberge und sogar einige Schweizer Schokoladenfabriken. Unsere Sammlung zeigt dir verschiedene Reiserouten, die alle innerhalb von zwei Tagen von Genf aus machbar sind.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/0_Genf_Unsplash_cae75b3dc2.jpg",
          "path": "/travel-guide/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-genf/",
          "webPath": "/travel-guide/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-genf/"
        },
        {
          "id": "383",
          "type": "blog-post",
          "title": "Jungfrau Travel Pass - lohnt es sich, ihn zu kaufen?",
          "description": "Der Jungfrau Travel Pass ist ein Reisepass für Besucher, die die Jungfrau Region an 3 bis 8 Tagen entdecken möchten. Mit dem Jungfrau Travel Pass hast du Zugang zu allen öffentlichen Verkehrsmitteln der Jungfrau Region. Dazu gehören Bahnen, Bergbahnen, Busse und Schiffe. Im Sommer eignet sich der Jungfrau Travel Pass perfekt für Wanderungen und Ausflüge mit dem Schiff. Im Winter kannst du ihn für Winterwanderungen und zum Schlitteln nutzen. (Foto Schynige Platte: © Jungfraubahnen)",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Jungfrau_Tavel_Pass_Schynige_Platte_Foto_Jungfraubahnen_034b2e1fb1.jpg",
          "path": "/travel-guide/reisetipps-schweiz/travel-pass-jungfrau/",
          "webPath": "/travel-guide/reisetipps-schweiz/travel-pass-jungfrau/"
        },
        {
          "id": "374",
          "type": "blog-post",
          "title": "40 interessante Fakten über die Schweiz",
          "description": "Über die Schweiz gibt es viele interessante Fakten, die du bestimmt noch nicht alle kennst. Wenn du dich für deine Reise in die Schweiz informieren möchtest, kommen hier 40 faszinierende, unnütze, interessante und unterhaltsame Fakten über die Schweiz. Damit bist du perfekt ausgerüstet, um mit deinem Wissen anzugeben. Oder wusstest du zum Beispiel, dass Meerschweinchen in der Schweiz nie alleine gehalten werden dürfen? Oder dass der Herr der Ringe durch die Schweiz inspiriert wurde?",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/pexels_pixabay_355952_d7a03beba5.jpg",
          "path": "/travel-guide/schweizer-fakten/swiss-facts/",
          "webPath": "/travel-guide/schweizer-fakten/swiss-facts/"
        },
        {
          "id": "332",
          "type": "blog-post",
          "title": "Schweiz Sprachen: Alles, was du wissen musst und wo sie gesprochen werden",
          "description": "Die offiziellen Sprachen der Schweiz sind Deutsch, Französisch, Italienisch und Rätoromanisch. Neben diesen vier Landessprachen begegnest du vielen Mundart Dialekten und Fremdsprachen. Durch die Schweiz zu navigieren, kann also eine Herausvorderung sein. Deshalb erklären wir dir hier alles, was du über die Sprachen der Schweiz wissen musst.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Sprachen_Schweiz_Flagge_Engadin_Seraina_2e9657eec9.jpg",
          "path": "/travel-guide/schweizer-fakten/sprachen-schweiz/",
          "webPath": "/travel-guide/schweizer-fakten/sprachen-schweiz/"
        },
        {
          "id": "185",
          "type": "blog-post",
          "title": "33 Schweizer Erfindungen, die dich erstaunen werden",
          "description": "Um erstaunliche Schweizer Erfindungen dreht sich dieser Beitrag. Hier triffst du auf den landesweiten Erfindergeist. Innovation geniesst bei uns Tradition. Die Schweiz ist Patentweltmeisterin und damit das erfindungsreichste Land überhaupt. Lass dich überraschen.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Schweizer_Erfindungen_Pixabay_c0363896df.jpg",
          "path": "/travel-guide/schweizer-fakten/schweizer-erfindungen/",
          "webPath": "/travel-guide/schweizer-fakten/schweizer-erfindungen/"
        }
      ]
    }
  ]
} satisfies TGatewayHome;
