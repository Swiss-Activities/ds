import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewActivitiesResponse = {
  "context": {
    "type": "activity-type",
    "id": "activities",
    "title": "Die besten Freizeitaktivitäten Schweiz 2026",
    "slug": "activities",
    "description": "Finde und buche deine passende Aktivität 2026 in der Schweiz. Als vielfältiges Land bietet die Schweiz unzählige Aktivitäten und Ideen für einen Tagesausflug.",
    "imageUrl": null,
    "numberOfActivities": 2710
  },
  "staticSections": [
    {
      "id": "activities_overview_hero",
      "component": "hero",
      "variant": "centered_title",
      "title": "Die besten Freizeitaktivitäten Schweiz 2026",
      "imageUrl": null,
      "description": "Finde und buche deine passende Aktivität 2026 in der Schweiz. Als vielfältiges Land bietet die Schweiz unzählige Aktivitäten und Ideen für einen Tagesausflug."
    },
    {
      "id": "activities_overview_filters",
      "component": "filters",
      "endpoint": "/app/v1/activities-overview/filter",
      "items": [],
      "groups": [
        {
          "id": "interests",
          "type": "checkbox",
          "title": "Interessen",
          "param": "tags",
          "options": [
            {
              "id": "tag:sightseeing",
              "label": "Sehenswürdigkeiten",
              "value": "sightseeing",
              "count": 869,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:exercise",
              "label": "Bewegung",
              "value": "exercise",
              "count": 853,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:learning",
              "label": "Lernen",
              "value": "learning",
              "count": 712,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:adventure",
              "label": "Abenteuer",
              "value": "adventure",
              "count": 643,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 515,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:entertainment",
              "label": "Unterhaltung",
              "value": "entertainment",
              "count": 394,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:food",
              "label": "Essen",
              "value": "food",
              "count": 303,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:culture",
              "label": "Kultur",
              "value": "culture",
              "count": 292,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:relaxation",
              "label": "Entspannung",
              "value": "relaxation",
              "count": 110,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:driving_fun",
              "label": "Fahrspass",
              "value": "driving_fun",
              "count": 110,
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
              "count": 841,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:fair_weather",
              "label": "Schönwetter",
              "value": "fair_weather",
              "count": 834,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:snow_required",
              "label": "Schnee erforderlich",
              "value": "snow_required",
              "count": 515,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:hot_weather",
              "label": "Heisses Wetter",
              "value": "hot_weather",
              "count": 267,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:rain_friendly",
              "label": "Regentauglich",
              "value": "rain_friendly",
              "count": 7,
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
              "count": 938,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:year_round",
              "label": "Ganzjährig",
              "value": "year_round",
              "count": 921,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:spring",
              "label": "Frühling",
              "value": "spring",
              "count": 664,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:autumn",
              "label": "Herbst",
              "value": "autumn",
              "count": 664,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:winter",
              "label": "Winter",
              "value": "winter",
              "count": 528,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:weekend",
              "label": "Wochenende",
              "value": "weekend",
              "count": 3,
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
              "count": 1325,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:families",
              "label": "Familien",
              "value": "families",
              "count": 999,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:solo",
              "label": "Alleinreisende",
              "value": "solo",
              "count": 244,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:teens",
              "label": "Jugendliche",
              "value": "teens",
              "count": 224,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:couples",
              "label": "Paare",
              "value": "couples",
              "count": 196,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:adults_only",
              "label": "Nur Erwachsene",
              "value": "adults_only",
              "count": 91,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:seniors",
              "label": "Seniors",
              "value": "seniors",
              "count": 38,
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
              "count": 972,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:full_day",
              "label": "Ganzer Tag",
              "value": "full_day",
              "count": 630,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:half_day",
              "label": "Halber Tag",
              "value": "half_day",
              "count": 312,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:under_1h",
              "label": "Unter 1 Std.",
              "value": "under_1h",
              "count": 85,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:multi_day",
              "label": "Mehrtägig",
              "value": "multi_day",
              "count": 50,
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
              "count": 750,
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
              "count": 1030,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:budget",
              "label": "Budget",
              "value": "budget",
              "count": 449,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:moderate_cost",
              "label": "Moderate Cost",
              "value": "moderate_cost",
              "count": 9,
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
      "id": "activities_overview_grid",
      "component": "activity_grid",
      "title": "Die besten Freizeitaktivitäten Schweiz 2026",
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
          "id": "919",
          "type": "activity",
          "bookingActivityId": 732,
          "title": "Gornergrat Bahn Ticket ab Zermatt",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/751abdee68d094ca8a49a2daa3633f55.jpg",
          "subtitle": "Zermatt",
          "priceFormatted": "CHF 66",
          "startingPrice": {
            "amount": 66,
            "currency": "CHF",
            "formatted": "CHF 66"
          },
          "rating": 4.74,
          "reviewCount": 156,
          "path": "/gornergrat/bahnticket-retour-gornergrat-bahn/",
          "webPath": "/gornergrat/bahnticket-retour-gornergrat-bahn/",
          "distanceKm": null,
          "lat": 46.0239501,
          "lng": 7.7484824,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/751abdee68d094ca8a49a2daa3633f55.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9f2837a557a415de64a22c043fe3306b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8d13f2322bec91c5871a2557bbd6af3f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/682bfe2cfb5d2eff1e6be5544b064476.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gleitschirm_Simulator_Zooom_the_Matterhorn_be6b682611.webp",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_3_D_Kino_Zooom_the_Matterhorn_1d4f354e6a.webp",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fb674b17ac1ea5c70cd84725ac2f55cd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cac65f9b5e6558c8a99db1d86b1429ad.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e414d399c923773684701ee3a50b8e5a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cb5ef5a1779cf2a6541899c2e79b40a4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Aussicht_Gornergratbahn_Bergsee_6b1760abe6.jpeg"
          ]
        },
        {
          "id": "320",
          "type": "activity",
          "bookingActivityId": 82,
          "title": "Paragliding Grindelwald ab First",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_4d4fcf80f5.jpg",
          "subtitle": "Grindelwald",
          "priceFormatted": "CHF 220",
          "startingPrice": {
            "amount": 220,
            "currency": "CHF",
            "formatted": "CHF 220"
          },
          "rating": 4.8,
          "reviewCount": 209,
          "path": "/paragliding/paragliding-grindelwald-first/",
          "webPath": "/paragliding/paragliding-grindelwald-first/",
          "distanceKm": null,
          "lat": 46.625125,
          "lng": 8.0417791,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_4d4fcf80f5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_0e9daa757b5b08394a277442b85e92d8_98726710e6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_gallery_0838d99da9a03e494e0fcf6e22ee00ac_a44646a3cd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/98fb8d7165c5838b5b928a2ad9f715b2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_3f7f7ba6a387249b084b82beb476e991_5fb1fb46d9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GOPR_3781_4a3ed7de3b.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/55f2c3e667d11a453fe19d4855620584.jpg"
          ]
        },
        {
          "id": "43984",
          "type": "activity",
          "bookingActivityId": 2307,
          "title": "Lauterbrunnental Gleitschirmfliegen ab Mürren",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/dd3a4085915a1faeaed44f0c070051ab.jpeg",
          "subtitle": "Mürren",
          "priceFormatted": "CHF 190",
          "startingPrice": {
            "amount": 190,
            "currency": "CHF",
            "formatted": "CHF 190"
          },
          "rating": 5,
          "reviewCount": 7,
          "path": "/paragliding/gleitschirmfliegen-lauterbrunnental-muerren/",
          "webPath": "/paragliding/gleitschirmfliegen-lauterbrunnental-muerren/",
          "distanceKm": null,
          "lat": 46.5577125,
          "lng": 7.8912656,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/dd3a4085915a1faeaed44f0c070051ab.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/056da5c4e5d34c2494970963593e5b47.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/99947ccabcbb96a29d67bc8812dcb2a3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/131836fc016b152a438dc91f3e9aa835.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/b8758f005c71700d19839dbb75e8ccb5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/edc36c5bbd08c6a3e18ef9465e97c6ad.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ff5ce2ed253cff102bbc8708819d367f.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/17625d1154a1fb1101fa98b85eef3d21.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/762bbc61992b5709ebd1e0051359857d.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/22c31cb2475bf0d94d6dfbc0cea59ce9.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ed57851143638e7f0e03e1a6c40ebe63.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/34928bf154223e430d60e25949ab65e4.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/15ec277125dd900892e430a54457922c.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a7833579530227c6f1db5a75634236b6.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/654d2d1f9aa1ee07b59a3e92dbb5bafd.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1388cca8a1ad07f539baf6a2c078e510.JPG"
          ]
        },
        {
          "id": "1059",
          "type": "activity",
          "bookingActivityId": 858,
          "title": "Lauterbrunnental Gleitschirmfliegen Tandem ab Mürren",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/airtime_paragliding_team_buzz_9acc113e61.jpg",
          "subtitle": "Mürren",
          "priceFormatted": "CHF 199",
          "startingPrice": {
            "amount": 199,
            "currency": "CHF",
            "formatted": "CHF 199"
          },
          "rating": 4.94,
          "reviewCount": 50,
          "path": "/paragliding/paragliding-lauterbrunnental-tandemflug/",
          "webPath": "/paragliding/paragliding-lauterbrunnental-tandemflug/",
          "distanceKm": null,
          "lat": 46.5576875,
          "lng": 7.8913125,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/airtime_paragliding_team_buzz_9acc113e61.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_airtime_paragliding_landscape_11_4173cbbbba.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_airtime_paragliding_team_beni_ed1f85945a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_airtime_paragliding_team_bruno_0a588b94ed.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_airtime_paragliding_team_michi_bfb3f460af.jpg"
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
          "id": "1908",
          "type": "activity",
          "bookingActivityId": 1690,
          "title": "Jungfrauregion Fallschirmspringen aus dem Flugzeug",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fa2c932e6e7ff750a988cb075df355de.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 425",
          "startingPrice": {
            "amount": 425,
            "currency": "CHF",
            "formatted": "CHF 425"
          },
          "rating": 5,
          "reviewCount": 6,
          "path": "/fallschirmspringen/fallschirmspringen-bern-reichenbach/",
          "webPath": "/fallschirmspringen/fallschirmspringen-bern-reichenbach/",
          "distanceKm": null,
          "lat": 46.687574999999995,
          "lng": 7.860129000000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fa2c932e6e7ff750a988cb075df355de.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6540133c153c738601c28416c95ce5e9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_1525ab1db3f868f690428c3cc3cf2800_d7451bfbe6_b9ae16d740.avif",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/skydive_switzerland_interlaken_tandem_skydiving_exit_81bdcbb6a0_cec45fd453.avif",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_3c63443f610bc3bd133c2deca32dc15b_4c2032cfc7_0d69852082.avif",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_6a9c78285f40005db449e94e40f323a7_236c3f0e39_b34ebd215e.avif",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_54c0131a82148fc576b586a0f3935043_070f688d33_8ebafaf135.avif",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/skydive_switzerland_interlaken_tandem_skydiving_11_18e55927d5_21cfc4fb88.avif"
          ]
        },
        {
          "id": "43403",
          "type": "activity",
          "bookingActivityId": 2279,
          "title": "Brunch Schiff Zürichsee ab Rapperswil ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/90ee65c172f4421bb91da6640d2a5e1c.jpg",
          "subtitle": "Rapperswil-Jona",
          "priceFormatted": "CHF 75",
          "startingPrice": {
            "amount": 75,
            "currency": "CHF",
            "formatted": "CHF 75"
          },
          "rating": 4.9,
          "reviewCount": 10,
          "path": "/zuerichsee/hensa-brunch-plausch-rapperswil/",
          "webPath": "/zuerichsee/hensa-brunch-plausch-rapperswil/",
          "distanceKm": null,
          "lat": 47.2255872,
          "lng": 8.8147012,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/90ee65c172f4421bb91da6640d2a5e1c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9aaaa4d09b33080551f4d47b36d586b4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0cad11d5ed5402166dd03ebe44999d24.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d8bd59be16a3de48191639d308bf49d0.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7834214ffb81c90df3e8ebb4bacc3295.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/cde63a4266f1b40385627b6f384a8f74.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/447c9eb2e07205e2e4078957429f30a4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a853080f326b9a0bc252021466ea9148.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c21b1a515528752f1ccfc290f16254c4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/46d0676e58cb929d3a5ccb563db2c500.jpg"
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
          "id": "1949",
          "type": "activity",
          "bookingActivityId": 1731,
          "title": "Zürich Card für 24 oder 72 Stunden",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Stadtfuehrung_Zuerich_Tourismus_657dc1063f.jpg",
          "subtitle": "Zürich",
          "priceFormatted": "CHF 29",
          "startingPrice": {
            "amount": 29,
            "currency": "CHF",
            "formatted": "CHF 29"
          },
          "rating": 4.72,
          "reviewCount": 75,
          "path": "/city-pass/sbb-zuerich-card/",
          "webPath": "/city-pass/sbb-zuerich-card/",
          "distanceKm": null,
          "lat": 47.3768866,
          "lng": 8.541694,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Stadtfuehrung_Zuerich_Tourismus_657dc1063f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_04_Museum_Zuerich_Tourismus_55d466d006.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_03_Schiff_Zuerich_Tourismus_4c7383f2bb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_01_Tram_Zuerich_Seraina_c4065041df.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Buerkliterrasse_849af11c01.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Zuerich_Card_Zuerich_Tourismus_e520dd13ab.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_02_Bahnhof_Zuerich_Seraina_7392cbec15.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Huerlimann_Zuerich_Tourismus_f12ba44ebc.jpg"
          ]
        },
        {
          "id": "1546",
          "type": "activity",
          "bookingActivityId": 1329,
          "title": "Jungfrau Travel Pass Sommer - 3 bis 8 Tage",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/berner_oberlandbahn_sommer_natur_f1b8d5241e.jpeg",
          "subtitle": "Grindelwald",
          "priceFormatted": "CHF 210",
          "startingPrice": {
            "amount": 210,
            "currency": "CHF",
            "formatted": "CHF 210"
          },
          "rating": 4.82,
          "reviewCount": 28,
          "path": "/bahnpaesse/jungfrau-travel-pass/",
          "webPath": "/bahnpaesse/jungfrau-travel-pass/",
          "distanceKm": null,
          "lat": 46.6907975,
          "lng": 7.8702139,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/berner_oberlandbahn_sommer_natur_f1b8d5241e.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Geltungsbereich_Jungfrau_Travel_Pass_97fd2f8314.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_grindelwald_first_snowpark_abendstimmung_2_aafd38b016.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_grindelwald_first_sommer_first_cliff_walk_02_b9c7c96057.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Harder_Kulm_Zwei_Seen_Steg_Sommer_c131501434.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_harderbahn_harder_kulm_interlaken_abendfahrten_13b231a4b0.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_jungfraubahn_eiger_moench_jungfrau_winter_02_56ce0e7df1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_jungfraubahn_kleine_scheidegg_eiger_moench_jungfrau_f2911dc473.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_3500e124c5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_kleine_scheidegg_familie_schlitteln_eiger_run_winter_17734a9333.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kleine_Scheidegg_Wandern_Sommer_Eiger_Trail01_8d9625797d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kleine_Scheidegg_Wandern_Sommer_Jungfrau_Eiger_Walk_Fallbodensee02_795f72e3cf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kleine_Scheidegg_Wandern_Sommer02_da140ec25f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kleine_Scheidegg_Wandern_Sommer10_f04fa1f8f5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Kleine_Scheidegg_Wandern_Sommer13_52d908169e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_muerren_luftseilbahn_sommer_395d340b82.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_schynige_platte_bahn_hot_tub_1c3d74d443.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_schynige_platte_bahn_naturkino_familie_bb8e1268bb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schynige_Platte_Wandern_Schynige_Platte_Bahn_a5a06a6863.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_wengernalpbahn_grindelwald_wetterhorn_sommer_3_43cc5b3d68.jpeg"
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
          "id": "634",
          "type": "activity",
          "bookingActivityId": 422,
          "title": "Breithorn Bergtour ab Zermatt geführt: Privat oder Gruppe",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Breithorn_Zermatters_Bergtour_4000er_Alpen_c71af704d7.jpg",
          "subtitle": "Zermatt",
          "priceFormatted": "CHF 225",
          "startingPrice": {
            "amount": 225,
            "currency": "CHF",
            "formatted": "CHF 225"
          },
          "rating": 4.81,
          "reviewCount": 42,
          "path": "/bergtour/breithorn-tour-mit-guide-wallis/",
          "webPath": "/bergtour/breithorn-tour-mit-guide-wallis/",
          "distanceKm": null,
          "lat": 46.014423,
          "lng": 7.742350999999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Breithorn_Zermatters_Bergtour_4000er_Alpen_c71af704d7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Breithorn_Aussicht_4e1b0c9dbd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Breithorn_Besteigung_911db86389.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Breithorn_Tour_Zermatt_4034cf541c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_Breithorn_Zermatt_2c42a20b50.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Breithorn_4a3da83428.jpg"
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
          "id": "272",
          "type": "activity",
          "bookingActivityId": 34,
          "title": "Beatenberg Gleitschirmfliegen Tandem im Sommer ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Beatenberg_Gleitschirmflug_Interlaken_07ce71666f.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 199",
          "startingPrice": {
            "amount": 199,
            "currency": "CHF",
            "formatted": "CHF 199"
          },
          "rating": 4.82,
          "reviewCount": 17,
          "path": "/paragliding/gleitschirmfliegen-tandem-interlaken-beatenberg/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-interlaken-beatenberg/",
          "distanceKm": null,
          "lat": 46.6884041,
          "lng": 7.861844599999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Beatenberg_Gleitschirmflug_Interlaken_07ce71666f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Gleitschirmfliegen_Interlaken_afb1cea8d3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Harder_Kulm_Gleitschirm_69c4e7c2bc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Interlaken_Landeanflug_06efd9c31e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Paragliding_Interlaken_Tandem_5894ecb323.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandemflug_Gleitschirm_Beatenberg_95886e52ce.jpg"
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
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "perPage": 20,
          "total": 2710,
          "hasMore": true
        }
      }
    }
  ],
  "content": [
    {
      "html": "<p>Das ganze Jahr über findest du Freizeitaktivitäten für jeden Anlass. Ob du nun einen Ausflug mit deiner Familie planst, einen Polterabend organisierst, eine Outdoor Aktivität oder Inspiration für dein Schlechtwetterprogramm suchst, hier findest du etwas. Auf Swiss Activities kannst du deinen Tagesausflug planen und gleich buchen.</p>",
      "images": [],
      "youtubeUrl": null
    }
  ]
} satisfies TGatewayHome;
