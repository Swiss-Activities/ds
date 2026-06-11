import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewDestinationAttributeResponse = {
  "context": {
    "type": "activity-type",
    "id": "attribute:hund",
    "title": "Mit Hund Interlaken",
    "slug": "hund",
    "description": "",
    "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Interlaken_Hafen_Foto_Schweiz_Tourismus_97b83e15ee.jpg",
    "numberOfActivities": 14
  },
  "staticSections": [
    {
      "id": "location_attribute_hero",
      "component": "hero",
      "variant": "centered_title",
      "breadcrumbs": [
        {
          "label": "Schweiz",
          "href": "/freizeitaktivitaeten/"
        },
        {
          "label": "Region Bern",
          "href": "/region-bern/"
        },
        {
          "label": "Interlaken",
          "href": "/interlaken/"
        },
        {
          "label": "Mit Hund Interlaken",
          "href": "/interlaken/hund/"
        }
      ],
      "title": "Mit Hund Interlaken",
      "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Interlaken_Hafen_Foto_Schweiz_Tourismus_97b83e15ee.jpg",
      "description": null
    },
    {
      "id": "location_attribute_filters",
      "component": "filters",
      "endpoint": "/app/v1/destinations/interlaken/attributes/hund/filter",
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
              "count": 12,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:relaxation",
              "label": "Entspannung",
              "value": "relaxation",
              "count": 6,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:entertainment",
              "label": "Unterhaltung",
              "value": "entertainment",
              "count": 4,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 3,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:exercise",
              "label": "Bewegung",
              "value": "exercise",
              "count": 2,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:learning",
              "label": "Lernen",
              "value": "learning",
              "count": 1,
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
              "id": "tag:hot_weather",
              "label": "Heisses Wetter",
              "value": "hot_weather",
              "count": 7,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:any",
              "label": "Any",
              "value": "any",
              "count": 4,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:fair_weather",
              "label": "Schönwetter",
              "value": "fair_weather",
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
              "id": "tag:summer",
              "label": "Sommer",
              "value": "summer",
              "count": 10,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:year_round",
              "label": "Ganzjährig",
              "value": "year_round",
              "count": 4,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:spring",
              "label": "Frühling",
              "value": "spring",
              "count": 3,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:autumn",
              "label": "Herbst",
              "value": "autumn",
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
              "id": "tag:families",
              "label": "Familien",
              "value": "families",
              "count": 9,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:groups",
              "label": "Gruppen",
              "value": "groups",
              "count": 6,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:couples",
              "label": "Paare",
              "value": "couples",
              "count": 3,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:teens",
              "label": "Jugendliche",
              "value": "teens",
              "count": 1,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:adults_only",
              "label": "Nur Erwachsene",
              "value": "adults_only",
              "count": 1,
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
              "count": 4,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:full_day",
              "label": "Ganzer Tag",
              "value": "full_day",
              "count": 4,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:half_day",
              "label": "Halber Tag",
              "value": "half_day",
              "count": 1,
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
              "count": 6,
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
              "count": 4,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:budget",
              "label": "Budget",
              "value": "budget",
              "count": 3,
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
      "id": "destination_activities",
      "component": "activity_grid",
      "title": "Mit Hund Interlaken",
      "data": [
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
          "distanceKm": 0.6,
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
          "id": "144439",
          "type": "activity",
          "bookingActivityId": 3479,
          "title": "Harder Kulm private Wanderung mit Schweizer Triathlet ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d4ed1ba21ce0f5c6723c5ea35f70bfdb.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 160",
          "startingPrice": {
            "amount": 160,
            "currency": "CHF",
            "formatted": "CHF 160"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/wandern/harder-kulm-wanderung-interlaken-triathlet/",
          "webPath": "/wandern/harder-kulm-wanderung-interlaken-triathlet/",
          "distanceKm": 1,
          "lat": 46.6903958,
          "lng": 7.8679677,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d4ed1ba21ce0f5c6723c5ea35f70bfdb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fd7ec61a2c9dadbdf16c23634f29494a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e4d99cb2a95a206d992ad4c509a6d9dd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/49f5eab0bfb9e5e553d4bf7aad0d33a4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/10778e4376bf59d29467f541aebc21bd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a03a46663a9ade9c0bb2f6d6134d50d4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0455806849528a4fb2ffc9647b504128.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/97a5340f1135ae5d5d0730e2c5fa2e7b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5f05ec4ebedb813ba0fb848b3be3a4e4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5b1c8cecd455744c8bcb291da70cfd6c.jpg"
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
          "distanceKm": 1.1,
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
          "distanceKm": 1.1,
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
          "distanceKm": 1.1,
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
          "id": "133375",
          "type": "activity",
          "bookingActivityId": 3122,
          "title": " \"The Omega Codex\" Outdoor Escape Game Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ac4a1f122629fd52be6c56920b3b4551.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 14",
          "startingPrice": {
            "amount": 14,
            "currency": "CHF",
            "formatted": "CHF 14"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/escape-room/omega-codex-escape-game-interlaken/",
          "webPath": "/escape-room/omega-codex-escape-game-interlaken/",
          "distanceKm": 1.1,
          "lat": 46.684096700000005,
          "lng": 7.8513763999999995,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ac4a1f122629fd52be6c56920b3b4551.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0e682a61fe8e1c23fa21878d95758de4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3a29fe675e5456b890d748434a0e4e16.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/bf64efadafeed7f1891b73501b757bdc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f8cdc924926499aedbdb2cabcece8bb9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/197562f39a8d37c9e2504c288df154cc.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1ec6b38e72c9c9b31aa33eb3fb1940a3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/eb7792df8283efc62427dde822d62bdf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/20695c0aa4598334c39845a6ebeed1c5.jpg"
          ]
        },
        {
          "id": "763",
          "type": "activity",
          "bookingActivityId": 542,
          "title": "Tageskarte Thunersee Winter",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Thunersee_Schiffahrt_a0fff94ff9.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 83",
          "startingPrice": {
            "amount": 83,
            "currency": "CHF",
            "formatted": "CHF 83"
          },
          "rating": 4.8,
          "reviewCount": 10,
          "path": "/thunersee/schifffahrt-thunersee-tageskarte-winter/",
          "webPath": "/thunersee/schifffahrt-thunersee-tageskarte-winter/",
          "distanceKm": 1.1,
          "lat": 46.683151,
          "lng": 7.8508968,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Thunersee_Schiffahrt_a0fff94ff9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Brienzersee_und_Thunersee_Rundfahrt_3f49e1cbcb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Panorama_Blick_Brienzersee_Thunersee_251c0fbaf5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Sonnenuntergangsfahrt_Thunersee_af7a7d5d11.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Thunresee_Schloss_Oberhofen_1cb0ef1a33.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Globi_Familienkarte_Brienzersee_Thunersee_1447fac634.jpg"
          ]
        },
        {
          "id": "1130",
          "type": "activity",
          "bookingActivityId": 913,
          "title": "Thunersee Schiffsticket ab Interlaken West",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Schiffahrt_Brienzersee_Thunersee_b3dde75992.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 34",
          "startingPrice": {
            "amount": 34,
            "currency": "CHF",
            "formatted": "CHF 34"
          },
          "rating": 4.67,
          "reviewCount": 9,
          "path": "/thunersee/schiff-thunersee-streckenticket/",
          "webPath": "/thunersee/schiff-thunersee-streckenticket/",
          "distanceKm": 1.1,
          "lat": 46.68316060000001,
          "lng": 7.8508296,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Schiffahrt_Brienzersee_Thunersee_b3dde75992.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0136_tif_bls_ch_610c71c27a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0305_tif_office_f6d7591d4a.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Sonnenuntergangsfahrt_Thunersee_f766de1b04.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Thunresee_Schloss_Oberhofen_7286630133.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Brienzersee_und_Thunersee_Rundfahrt_38888a2e25.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0058_tif_bls_ch_3f3beadcbd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Thunersee_Schiffahrt_5e55c14bc7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Familie_auf_dem_Schiff_3f2f98842f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0242_tif_office_2f2659d06b.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0351_tif_office_2e500987e2.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0414_tif_office_24ce87ec60.jpg"
          ]
        },
        {
          "id": "358",
          "type": "activity",
          "bookingActivityId": 120,
          "title": "Tageskarte Thunersee und Brienzersee im Sommer",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/BLS_Schifffahrt_2020_0414_tif_office_94467e8d10.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 83",
          "startingPrice": {
            "amount": 83,
            "currency": "CHF",
            "formatted": "CHF 83"
          },
          "rating": 4.59,
          "reviewCount": 58,
          "path": "/thunersee/schifffahrt-auf-dem-thuner-und-brienzersee-mit-tageskarte/",
          "webPath": "/thunersee/schifffahrt-auf-dem-thuner-und-brienzersee-mit-tageskarte/",
          "distanceKm": 1.1,
          "lat": 46.68316060000001,
          "lng": 7.8508296,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/BLS_Schifffahrt_2020_0414_tif_office_94467e8d10.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0242_tif_office_5a70f4fe3d.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Familie_auf_dem_Schiff_3dcf2cb788.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Thunresee_Schloss_Oberhofen_600c64ea62.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Globi_Familienkarte_Brienzersee_Thunersee_5c648cc7df.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0136_tif_bls_ch_bde834042f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Panorama_Blick_Brienzersee_Thunersee_f2ffbd6400.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0058_tif_bls_ch_e0bcb9d5e9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Sonnenuntergangsfahrt_Thunersee_0de9deeaaf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_5914_0f242ce473.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0305_tif_office_4869b5e6b0.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_5913_11fcede583.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Dampfschiff_Brienzersee_Thunersee_e1e8017682.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0271_tif_office_6e79e9ca46.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0351_tif_office_d0c2ebe473.png",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_4_Seraina_700874b675.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_2_Seraina_2934492fba.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_3_Seraina_abe81264a0.jpg"
          ]
        },
        {
          "id": "88233",
          "type": "activity",
          "bookingActivityId": 2675,
          "title": "Interlaken Ost - Iseltwald Schiffsticket Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5dc252536098bc9178218f7384b538f1.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 42",
          "startingPrice": {
            "amount": 42,
            "currency": "CHF",
            "formatted": "CHF 42"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/brienzersee/brienzersee-interlaken-iseltwald/",
          "webPath": "/brienzersee/brienzersee-interlaken-iseltwald/",
          "distanceKm": 1.2,
          "lat": 46.6916299,
          "lng": 7.869144299999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5dc252536098bc9178218f7384b538f1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/096aabd3e2caf990a4f1c29883b0eb89.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/138bf22dca9884f4b1aff7a04a744d47.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7d9e621b8782cadabd94f777e80b01a7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/769f1ca175dae66f896de790fd827a67.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2f206b6a7bb9f51be06579a6480e9c7e.jpg"
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
          "distanceKm": 1.2,
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
          "id": "92205",
          "type": "activity",
          "bookingActivityId": 2860,
          "title": "Interlaken Ost - Brienz Schiffsticket Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fcc633423c96573473e492b33f26b17d.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 39",
          "startingPrice": {
            "amount": 39,
            "currency": "CHF",
            "formatted": "CHF 39"
          },
          "rating": 5,
          "reviewCount": 1,
          "path": "/brienzersee/brienzersee-schiffsticket-ab-interlaken-ost-nach-brienz/",
          "webPath": "/brienzersee/brienzersee-schiffsticket-ab-interlaken-ost-nach-brienz/",
          "distanceKm": 1.2,
          "lat": 46.6916299,
          "lng": 7.869144300000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fcc633423c96573473e492b33f26b17d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_3_Seraina_3d6617accf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0305_tif_office_894f43c1d2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0351_895e7ba2b8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Brienzersee_Loetschberg_Kapitaen_89aa2e98f2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6051_6e7938c4a1.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6055_5fe6757d81.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6097_94b2d721bc.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_4_Seraina_3a725082da.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_6_Seraina_ae53692b81.jpg"
          ]
        },
        {
          "id": "92204",
          "type": "activity",
          "bookingActivityId": 2859,
          "title": "Interlaken Ost - Giessbachfälle Schiffsticket Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ece7b91321ec69ea8e123dc280c90568.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 31",
          "startingPrice": {
            "amount": 31,
            "currency": "CHF",
            "formatted": "CHF 31"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/brienzersee/interlaken-ost-giessbachflle-schiffsticket-brienzersee/",
          "webPath": "/brienzersee/interlaken-ost-giessbachflle-schiffsticket-brienzersee/",
          "distanceKm": 1.2,
          "lat": 46.6916299,
          "lng": 7.869144300000001,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ece7b91321ec69ea8e123dc280c90568.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7958170f2a33b30393e2f2fdc1abc933.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0305_tif_office_894f43c1d2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_BLS_Schifffahrt_2020_0351_895e7ba2b8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Brienzersee_Loetschberg_Kapitaen_89aa2e98f2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6051_6e7938c4a1.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6055_5fe6757d81.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_IMG_6097_94b2d721bc.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_4_Seraina_3a725082da.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_3_Seraina_3d6617accf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Schiff_Brienzersee_6_Seraina_ae53692b81.jpg"
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
          "distanceKm": 1.3,
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
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "perPage": 20,
          "total": 14,
          "hasMore": false
        }
      }
    }
  ],
  "faq": {
    "title": null,
    "items": [
      {
        "question": "Welche Ausflugsziele und Sehenswürdigkeiten gibt es in Interlaken?",
        "answer": "<p>Interlaken liegt verkehrsgünstig zwischen dem Thunersee und dem Brienzersee im Berner Oberland. Zu den wichtigsten Ausflugszielen gehören der Hausberg Harder Kulm, das Jungfraujoch, das Schilthorn, die Schynige Platte, die Jungfrauregion und das Freilichtmuseum Ballenberg. Die Grotten der St. Beatushöhle oberhalb des Tunersees erreichst du in wenigen Minuten zu Fuss. Am südöstlichen Brienzersee triffst du nach einer kurzen Wanderung auf die 500m tief fallenden imposanten Giessbachfälle.</p>\n"
      },
      {
        "question": "Welche Aktivitäten kannst du in Interlaken ausüben?",
        "answer": "<p>Interlaken gilt als die Adrenalin Hauptstadt der Schweiz. Es bieten sich zahlreiche spannende Aktivitäten in Interlaken an wie z.B. Gleitschirmfliegen, Fallschirmspringen, Schifffahrt, Wandern, Canyoning, Rafting, Golf, Seilpark, Schlitteln und Schneeschuhwandern. Auch Touren mit dem Kajak oder Mountainbike werden in Interlaken angeboten.</p>\n"
      }
    ]
  }
} satisfies TGatewayHome;
