import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayHomeResponse = {
  "sections": [
    {
      "id": "hero",
      "component": "hero",
      "text": "Hi aus der Schweiz. Bewölkt in der Schweiz – was Reisende aus der Schweiz zuerst buchen.",
      "destination": null,
      "forecast": {
        "title": "Zürich",
        "data": [
          {
            "date": "2026-06-09",
            "day": "Heute",
            "dayFull": "Heute",
            "tempMin": 14,
            "tempMax": 17,
            "icon": "rainy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-10",
            "day": "Mi",
            "dayFull": "Mittwoch",
            "tempMin": 10,
            "tempMax": 16,
            "icon": "rainy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-11",
            "day": "Do",
            "dayFull": "Donnerstag",
            "tempMin": 9,
            "tempMax": 19,
            "icon": "cloudy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-12",
            "day": "Fr",
            "dayFull": "Freitag",
            "tempMin": 11,
            "tempMax": 20,
            "icon": "cloudy",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-13",
            "day": "Sa",
            "dayFull": "Samstag",
            "tempMin": 14,
            "tempMax": 25,
            "icon": "sunny",
            "description": "Bewölkt"
          },
          {
            "date": "2026-06-14",
            "day": "So",
            "dayFull": "Sonntag",
            "tempMin": 14,
            "tempMax": 26,
            "icon": "sunny",
            "description": "Meist klar"
          },
          {
            "date": "2026-06-15",
            "day": "Mo",
            "dayFull": "Montag",
            "tempMin": 14,
            "tempMax": 28,
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
      "id": "suggested_types",
      "component": "suggested_types",
      "title": "Was unternehmen",
      "data": [
        {
          "id": "fireplaces",
          "title": "Grillstellen",
          "iconUrl": "/distributor/icons/fireplaces.svg",
          "imageUrl": "https://api.grillstelle.ch/images/1700/4001.jpg",
          "href": "/app/v1/non-bookable/fireplaces",
          "webPath": "/fireplaces/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "hiking-routes",
          "title": "Wanderrouten",
          "iconUrl": "/distributor/icons/hiking-routes.svg",
          "imageUrl": "https://images.schweizmobil.ch/image-master/WL_043_05_19_nach_Guarda_R_F_M.jpg",
          "href": "/app/v1/non-bookable/hiking-routes",
          "webPath": "/hiking-routes/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "swimming-bathing",
          "title": "Seen & Badis",
          "iconUrl": "/distributor/icons/swimming-bathing.svg",
          "imageUrl": "https://static.stnet.ch/sospo/images/829/1450-m.jpg",
          "href": "/app/v1/non-bookable/swimming-bathing",
          "webPath": "/swimming-bathing/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "mountainbike-routes",
          "title": "Mountainbike-Routen",
          "iconUrl": "/distributor/icons/mountainbike-routes.svg",
          "imageUrl": "https://images.schweizmobil.ch/image-master/ML_646_IMG_9317_F_M.jpg",
          "href": "/app/v1/non-bookable/mountainbike-routes",
          "webPath": "/mountainbike-routes/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "cycling-routes",
          "title": "Velorouten",
          "iconUrl": "/distributor/icons/cycling-routes.svg",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/routes/a/a/aare%20route/aare%20route%203/images%20all%20season/19741_32001800.jpeg",
          "href": "/app/v1/non-bookable/cycling-routes",
          "webPath": "/cycling-routes/",
          "weatherFit": "great",
          "betterOn": null
        },
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
          "id": "city-tour-guided",
          "title": "Stadtführungen",
          "iconUrl": "/distributor/icons/city-tour-guided.svg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Altstadt_Fuehrung_Einkaufsstrasse_House_of_Winterthur_354b28d6d9.jpg",
          "href": "/app/v1/activity-types/stadtfuehrung",
          "webPath": "/stadtfuehrung/",
          "weatherFit": "great",
          "betterOn": null
        },
        {
          "id": "castles-ruins",
          "title": "Burgen & Ruinen",
          "iconUrl": "/distributor/icons/castles-ruins.svg",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/experience/c/a/castle%20hegi/images%20all%20season/45295_32001800.jpeg",
          "href": "/app/v1/non-bookable/castles-ruins",
          "webPath": "/castles-ruins/",
          "weatherFit": "great",
          "betterOn": null
        }
      ]
    },
    {
      "id": "popular_this_week",
      "component": "carousel",
      "title": "Was die Schweiz diese Woche bucht",
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
          "rating": 4.93,
          "reviewCount": 92,
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
          "lng": 7.742350999999999
        }
      ]
    },
    {
      "id": "reviews",
      "component": "carousel",
      "title": "Von Reisenden wie dir",
      "data": [
        {
          "id": "752",
          "type": "review",
          "title": "Schynige Platte Ticket Zahnradbahn ab Wilderswil",
          "activityId": "612",
          "bookingActivityId": 400,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Schynige_Platte_Bahn_Panorama_Eiger_Moench_Jungfrau_86b1982139.jpg",
          "path": "/schynige-platte/schynige-platte-ticket-retour-zahnradbahn/",
          "rating": 5,
          "body": "Sehr tolle Erfahrung !",
          "reviewerName": "Tania",
          "reviewerCountry": "CH"
        },
        {
          "id": "12148",
          "type": "review",
          "title": "Gornergrat Bahn Ticket ab Zermatt",
          "activityId": "919",
          "bookingActivityId": 732,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/751abdee68d094ca8a49a2daa3633f55.jpg",
          "path": "/gornergrat/bahnticket-retour-gornergrat-bahn/",
          "rating": 5,
          "body": "Der Ausblick.",
          "reviewerName": "Valentyna Siryk",
          "reviewerCountry": "CH"
        },
        {
          "id": "641",
          "type": "review",
          "title": "Reservation Bernina Express Bus ab Lugano oder Tirano",
          "activityId": "88831",
          "bookingActivityId": 2703,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9abbaee2b92c03c49be4eb0b5b2a0a5a.jpg",
          "path": "/bernina-express-panoramazug/bernina-express-bus-reservation/",
          "rating": 4,
          "body": "Sehr schöne Fahrt und vorallem ein „super Driver“!!!! Danke",
          "reviewerName": "Vreni",
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
          "id": "11883",
          "type": "review",
          "title": "Ticket Stoosbahn ab Schwyz ",
          "activityId": "1874",
          "bookingActivityId": 1656,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Stoos_valley_station_Foto_Schweiz_Tourismus_Lorenz_Richard_307432742e.jpg",
          "path": "/stoosbahn-standseilbahn/standseilbahn-schwyz-stoos/",
          "rating": 5,
          "body": "Alles ist wunderschön, sehr nettes Personal. Immer wieder gerne. Top!",
          "reviewerName": "Enikő",
          "reviewerCountry": "CH"
        }
      ]
    },
    {
      "id": "seasonal.summer.water",
      "component": "carousel",
      "title": "Sommer am Wasser, in deiner Nähe",
      "data": [
        {
          "id": "143662",
          "type": "activity",
          "bookingActivityId": 3456,
          "title": "Rafting halber Tag Vorderrhein ab Ilanz",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f497bd21083d61e73d065f92fe4fd0a3.JPG",
          "subtitle": "Ilanz",
          "priceFormatted": "CHF 125",
          "startingPrice": {
            "amount": 125,
            "currency": "CHF",
            "formatted": "CHF 125"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/rafting/rafting-halbtags-vorderrhein/",
          "webPath": "/rafting/rafting-halbtags-vorderrhein/",
          "distanceKm": null,
          "lat": 46.7750326,
          "lng": 9.2084828,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/f497bd21083d61e73d065f92fe4fd0a3.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3150d605155c88caac92a772066aecd5.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/43c6b08e8f82806367e4654626dfc595.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/fe3a7b35237510db0a3c6c205368c034.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d1775b0940ffc64ecc24696e10450239.JPG"
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
          "distanceKm": null,
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
          "distanceKm": null,
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
          "id": "626",
          "type": "activity",
          "bookingActivityId": 415,
          "title": "Verzascatal Canyoning Corippo Schlucht Basic für Anfänger ",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/38bb4464406d003d77f104a17cac57ed.jpg",
          "subtitle": "Verzasca",
          "priceFormatted": "CHF 159",
          "startingPrice": {
            "amount": 159,
            "currency": "CHF",
            "formatted": "CHF 159"
          },
          "rating": 4.8,
          "reviewCount": 10,
          "path": "/corippo-schlucht-verzascatal/canyoning-tessin-anfaenger-verzascatal/",
          "webPath": "/corippo-schlucht-verzascatal/canyoning-tessin-anfaenger-verzascatal/",
          "distanceKm": null,
          "lat": 46.24070727665202,
          "lng": 8.84461131421903,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/38bb4464406d003d77f104a17cac57ed.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8aa29d40ab767a41576636c286e98d88.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/449989db231b5301d202b95145f8b8d8.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7a7c7cea005bda03d9bb7dc2c4a1e68f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/df53b56d47b1c4cc17024bf91d1ae042.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/521cc5525390870654fe6c2ee9d943a0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/023b18166dc7145b2b7e09e09aef2597.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/71d8a1d4e964989380fea36e0c727367.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c0efe47e93e7562fcbe6f52d07336230.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/7e12d3cd261bbf0fb27fc040bf67ad15.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3bb2551ccc0ef738913b171a60a01755.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/c32c487cb0ec2dddeeafa70724541884.jpg"
          ]
        },
        {
          "id": "505",
          "type": "activity",
          "bookingActivityId": 308,
          "title": "Boggera Canyoning für Einsteiger",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GP_Temp_Download_199_773d7e8232.jpg",
          "subtitle": "Riviera",
          "priceFormatted": "CHF 135",
          "startingPrice": {
            "amount": 135,
            "currency": "CHF",
            "formatted": "CHF 135"
          },
          "rating": 4.83,
          "reviewCount": 6,
          "path": "/canyoning/canyoning-tessin-anfaenger-boggera/",
          "webPath": "/canyoning/canyoning-tessin-anfaenger-boggera/",
          "distanceKm": null,
          "lat": 46.31197299999999,
          "lng": 8.9870632,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GP_Temp_Download_199_773d7e8232.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_187_67a60f8054.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Boggera_Anfaenger_Canyoning_432f7527c5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_209_145fe49dd1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Boggera_Anfaenger_Canyoning_Wasser_98a0d5aaa7.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_141_31ab332029.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rutsche_Boggera_Canyoning_289f8ea478.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Canyoning_Boggera_d77267b016.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Boggera_Canyoning_164670c422.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Boggera_10m_jump_fdfb009d82.webp",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GH_011946_164521b0aa.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_GP_Temp_Download_170_6093a280f0.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_173_ccab4ba533.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_174_51bc7a3f6b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_175_5056721ced.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_188_24fbe66060.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_201_aa59e97fd3.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_210_da087341b4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_271_58108d04ae.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GP_Temp_Download_292_23103083e3.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GX_011939_54f6140d82.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GX_011943_3d2218e8ce.jpg"
          ]
        },
        {
          "id": "717",
          "type": "activity",
          "bookingActivityId": 498,
          "title": "Rafting Tour Vorderrhein Rheinschlucht",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/3_Rafting_Vorderrhein_Rheinschlucht_Stromschnelle_c8e7e91a08.jpg",
          "subtitle": "Ilanz",
          "priceFormatted": "CHF 125",
          "startingPrice": {
            "amount": 125,
            "currency": "CHF",
            "formatted": "CHF 125"
          },
          "rating": 4.9,
          "reviewCount": 30,
          "path": "/rafting/rafting-vorderrhein-rheinschlucht/",
          "webPath": "/rafting/rafting-vorderrhein-rheinschlucht/",
          "distanceKm": null,
          "lat": 46.77522620000001,
          "lng": 9.207651799999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/3_Rafting_Vorderrhein_Rheinschlucht_Stromschnelle_c8e7e91a08.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_1_Rafting_Vorderrhein_Rheinschlucht_cff7183e91.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2_Rafting_Vorderrhein_Rheinschlucht_f9cc486a1d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_4_Rafting_Vorderrhein_Rheinschlucht_Aussicht_Berge_ed41bea242.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_5_Rafting_Vorderrhein_Rheinschlucht_Stromschnelle_76a5b2b5d2.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_5_Rafting_Vorderrhein_Rheinschlucht_Wellen_258362f97c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rheinschlucht_Rafting_850287417c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Rheinschlucht_Unesco_Ruinaulta_ec2b173384.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Ruinaulta_Rheinschlucht_a05100e65b.jpg"
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
          "distanceKm": null,
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
      "id": "feature_band",
      "component": "feature_band",
      "data": [
        {
          "id": "experiences",
          "icon": {
            "provider": "lucide",
            "name": "globe"
          },
          "title": "12'000+ Schweizer Erlebnisse",
          "description": "Buchbare Aktivitäten, kostenlose Ausflugsziele und Geschichten - der komplette Guide."
        },
        {
          "id": "curated",
          "icon": {
            "provider": "lucide",
            "name": "house"
          },
          "title": "Von Schweizer Redakteuren kuratiert",
          "description": "Jeder Eintrag wird lokal geprüft. Kein Copy-Paste aus globalen Verzeichnissen."
        },
        {
          "id": "cancellation",
          "icon": {
            "provider": "lucide",
            "name": "check"
          },
          "title": "Kostenlose Stornierung",
          "description": "Bei jeder buchbaren Aktivität bis 24 Stunden vorher."
        },
        {
          "id": "support",
          "icon": {
            "provider": "lucide",
            "name": "user-round"
          },
          "title": "5-Sterne Support aus der Schweiz",
          "description": "Lokales Team in Zürich. Antworten in DE, FR, IT, EN innerhalb einer Stunde."
        }
      ]
    },
    {
      "id": "planAhead.fallback",
      "component": "carousel",
      "title": "Beliebt in der Schweiz: 10 Erlebnisse zum Buchen.",
      "data": [
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
        }
      ],
      "alternates": [
        {
          "id": "planAhead.weekend.sunny.nb",
          "title": "Wochenend-Feuerstellen",
          "pillarPath": "/app/v1/non-bookable/fireplaces"
        },
        {
          "id": "planAhead.weekend.rainy.museums.nb",
          "title": "Wochenend-Museen",
          "pillarPath": "/app/v1/non-bookable/museums"
        }
      ]
    },
    {
      "id": "region_map",
      "component": "region_map",
      "title": "Schweizer Regionen entdecken",
      "data": [
        {
          "id": "194",
          "slug": "aargau-region",
          "title": "Region Aargau",
          "path": "/app/v1/regions/region-aargau",
          "webPath": "/region-aargau/",
          "numberOfActivities": 81,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/river_5581185_7ccbbc22e5.jpg"
        },
        {
          "id": "196",
          "slug": "bern-region",
          "title": "Region Bern",
          "path": "/app/v1/regions/region-bern",
          "webPath": "/region-bern/",
          "numberOfActivities": 69,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg"
        },
        {
          "id": "195",
          "slug": "basel-region",
          "title": "Region Basel",
          "path": "/app/v1/regions/region-basel",
          "webPath": "/region-basel/",
          "numberOfActivities": 51,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/pier_5992676_eca67c3aac.jpg"
        },
        {
          "id": "201",
          "slug": "jura-three-lakes-region",
          "title": "Region Jura & Drei-Seen-Land",
          "path": "/app/v1/regions/region-jura-und-drei-seen-land",
          "webPath": "/region-jura-und-drei-seen-land/",
          "numberOfActivities": 33,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Roland_Gerth_Creux_Du_Van_Valde_Travers_437c3db73e.jpg"
        },
        {
          "id": "198",
          "slug": "geneva-region",
          "title": "Region Genf",
          "path": "/app/v1/regions/region-genf",
          "webPath": "/region-genf/",
          "numberOfActivities": 43,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Lavaux_2_e712fa8659.jpg"
        },
        {
          "id": "202",
          "slug": "lucerne-region-lake-lucerne",
          "title": "Region Luzern - Vierwaldstättersee",
          "path": "/app/v1/regions/region-luzern-vierwaldstaettersee",
          "webPath": "/region-luzern-vierwaldstaettersee/",
          "numberOfActivities": 214,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/alpine_2872095_1920_d8c570e3cc.jpg"
        },
        {
          "id": "197",
          "slug": "fribourg-region",
          "title": "Region Fribourg",
          "path": "/app/v1/regions/region-fribourg",
          "webPath": "/region-fribourg/",
          "numberOfActivities": 17,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/fribourg_4120764_1920_6c2c0f0963.jpg"
        },
        {
          "id": "217",
          "slug": "lake-geneva-region",
          "title": "Region Genfersee",
          "path": "/app/v1/regions/region-genfersee",
          "webPath": "/region-genfersee/",
          "numberOfActivities": 73,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Tour_du_Leman_14_09689a5141.jpg"
        },
        {
          "id": "203",
          "slug": "region-eastern-switzerland-liechtenstein",
          "title": "Region Ostschweiz / Liechtenstein",
          "path": "/app/v1/regions/region-ostschweiz-lichtenstein",
          "webPath": "/region-ostschweiz-lichtenstein/",
          "numberOfActivities": 135,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/mountains_5237939_1920_4686181037.jpg"
        },
        {
          "id": "205",
          "slug": "valais-region",
          "title": "Region Wallis",
          "path": "/app/v1/regions/region-wallis",
          "webPath": "/region-wallis/",
          "numberOfActivities": 102,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/flowers_1516734_1920_ccb46d8716.jpg"
        },
        {
          "id": "206",
          "slug": "zurich-region",
          "title": "Region Zürich",
          "path": "/app/v1/regions/region-zuerich",
          "webPath": "/region-zuerich/",
          "numberOfActivities": 211,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/henrique_ferreira_6v_K4_Pp_CH_Vw_unsplash_cec30c61c0.jpg"
        },
        {
          "id": "200",
          "slug": "graubunden-region",
          "title": "Region Graubünden",
          "path": "/app/v1/regions/region-graubuenden",
          "webPath": "/region-graubuenden/",
          "numberOfActivities": 84,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/alps_5538752_1920_b41e7b0be9.jpg"
        },
        {
          "id": "204",
          "slug": "ticino-region",
          "title": "Region Tessin",
          "path": "/app/v1/regions/region-tessin",
          "webPath": "/region-tessin/",
          "numberOfActivities": 112,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/bergdorf_3543253_1920_e6bbbe70dc.jpg"
        }
      ]
    },
    {
      "id": "points_of_interest",
      "component": "carousel",
      "title": "Sehenswürdigkeiten",
      "data": [
        {
          "id": "321",
          "type": "point-of-interest",
          "title": "Zürichsee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/zuerichsee_Foto_Schweiz_Tourismus_9c52cd6675.jpg",
          "path": "/app/v1/pois/zuerichsee",
          "webPath": "/zuerichsee/",
          "distanceKm": null,
          "lat": 47.2225216,
          "lng": 8.752711399999999
        },
        {
          "id": "178",
          "type": "point-of-interest",
          "title": "Vierwaldstättersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Dapmfschiff_Vierwaldstaettersee_Pia_Zellweger_3905b46c7c.jpg",
          "path": "/app/v1/pois/vierwaldstaettersee",
          "webPath": "/vierwaldstaettersee/",
          "distanceKm": null,
          "lat": 47.0136401,
          "lng": 8.4371598
        },
        {
          "id": "322",
          "type": "point-of-interest",
          "title": "Genfersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Genfersee_1_6254ae82ad.jpg",
          "path": "/app/v1/pois/genfersee",
          "webPath": "/genfersee/",
          "distanceKm": null,
          "lat": 46.44141949999999,
          "lng": 6.5295235
        },
        {
          "id": "177",
          "type": "point-of-interest",
          "title": "Brienzersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/IMG_6055_fbdbf7bfba.jpeg",
          "path": "/app/v1/pois/brienzersee",
          "webPath": "/brienzersee/",
          "distanceKm": null,
          "lat": 46.72674259999999,
          "lng": 7.9674729
        },
        {
          "id": "497",
          "type": "point-of-interest",
          "title": "Maison Cailler",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Cailler_12_Seraina_9b670e7869.jpg",
          "path": "/app/v1/pois/maison-cailler",
          "webPath": "/maison-cailler/",
          "distanceKm": null,
          "lat": 46.6042074,
          "lng": 7.0974945
        },
        {
          "id": "64888",
          "type": "point-of-interest",
          "title": "Schloss Thun",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5b3ebff774b899f857d6f40ef932c791.jpg",
          "path": "/app/v1/pois/schloss-thun",
          "webPath": "/schloss-thun/",
          "distanceKm": null,
          "lat": 46.75991666666667,
          "lng": 7.629861111111111
        },
        {
          "id": "353",
          "type": "point-of-interest",
          "title": "Flumserberg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Flumserberg_Foto_Heidiland_Tourismus_49800cc4e0.jpg",
          "path": "/app/v1/pois/heidiland-flumserberg",
          "webPath": "/heidiland-flumserberg/",
          "distanceKm": null,
          "lat": 47.0805436,
          "lng": 9.2748578
        },
        {
          "id": "146",
          "type": "point-of-interest",
          "title": "Rhätische Bahn",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/RHB_03794_b3f3e7e5a4.jpg",
          "path": "/app/v1/pois/rhaetische-bahn-erlebniszuege",
          "webPath": "/rhaetische-bahn-erlebniszuege/",
          "distanceKm": null,
          "lat": 46.8507835,
          "lng": 9.5319859
        },
        {
          "id": "179",
          "type": "point-of-interest",
          "title": "Thunersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Thunersee_Seraina_96a142589c.jpg",
          "path": "/app/v1/pois/thunersee",
          "webPath": "/thunersee/",
          "distanceKm": null,
          "lat": 46.6958354,
          "lng": 7.7212158
        },
        {
          "id": "519",
          "type": "point-of-interest",
          "title": "House of Läderach",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/00_Laederach_2_Seraina_36a20b1783.jpg",
          "path": "/app/v1/pois/house-of-laederach",
          "webPath": "/house-of-laederach/",
          "distanceKm": null,
          "lat": 47.15253,
          "lng": 9.02622
        }
      ]
    },
    {
      "id": "hidden_gems.non_bookable",
      "component": "carousel",
      "title": "Kostenlose Geheimtipps in deiner Nähe",
      "subtitle": "Top bewertet, noch kaum gebucht",
      "data": [
        {
          "id": "8cfcec49-6698-46cf-95ec-292511820fa0",
          "type": "non-bookable",
          "title": "Eggberge Aussichtspunkt",
          "imageUrl": "https://maps.app.goo.gl/4EMVBFRvftUHo8P6A",
          "subtitle": null,
          "category": "viewpoints",
          "distanceKm": null,
          "detailPath": null,
          "webPath": null,
          "lat": 46.9036197,
          "lng": 8.6444107
        },
        {
          "id": "94d0c34c-9fc0-4c96-99aa-1543f52c4aab",
          "type": "non-bookable",
          "title": "Château de Villa",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/experience/c/h/chateau%20de%20villa/images%20all%20season/52713_32001800.jpeg",
          "subtitle": "Sierre",
          "category": "castles-ruins",
          "distanceKm": null,
          "detailPath": "/app/v1/castles-ruins/94d0c34c-9fc0-4c96-99aa-1543f52c4aab",
          "webPath": null,
          "lat": 46.29419917839737,
          "lng": 7.521238698911274
        },
        {
          "id": "e13e43db-c99b-44dd-a300-247b3dac3d23",
          "type": "non-bookable",
          "title": "Das 1x1 der Burgen im Domleschg",
          "imageUrl": "https://static.stnet.ch/offers/images/a5d09bdf-f95a-4a64-bc9a-ad7d1047a3c2-o.jpg",
          "subtitle": "Splügen",
          "category": "castles-ruins",
          "distanceKm": null,
          "detailPath": "/app/v1/castles-ruins/e13e43db-c99b-44dd-a300-247b3dac3d23",
          "webPath": null,
          "lat": 46.5535833,
          "lng": 9.3239048
        },
        {
          "id": "93233fc7-a7f4-4788-a860-0d2d45483464",
          "type": "non-bookable",
          "title": "Schloss Hegi",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/experience/c/a/castle%20hegi/images%20all%20season/45295_32001800.jpeg",
          "subtitle": "Winterthur",
          "category": "castles-ruins",
          "distanceKm": null,
          "detailPath": "/app/v1/castles-ruins/93233fc7-a7f4-4788-a860-0d2d45483464",
          "webPath": null,
          "lat": 47.5083333,
          "lng": 8.7692002
        },
        {
          "id": "89aacaae-b2a2-42b8-99b1-aa4abc7a5355",
          "type": "non-bookable",
          "title": "Aussichtspunkt (46.651, 7.787)",
          "imageUrl": "https://www.meielisalp.ch/images/boxen/2_Platz_2020.jpg",
          "subtitle": null,
          "category": "viewpoints",
          "distanceKm": null,
          "detailPath": null,
          "webPath": null,
          "lat": 46.6506738,
          "lng": 7.7872914
        },
        {
          "id": "720d6cfb-3401-4215-9006-05c554ef1dd1",
          "type": "non-bookable",
          "title": "Aussichtspunkt (46.519, 10.398)",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/09/Stelvio-pass-2.JPG",
          "subtitle": null,
          "category": "viewpoints",
          "distanceKm": null,
          "detailPath": null,
          "webPath": null,
          "lat": 46.5188619,
          "lng": 10.3983964
        },
        {
          "id": "270c61f4-a344-43eb-8ce0-17ac82837caa",
          "type": "non-bookable",
          "title": "Schloss Leuk",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/experience/f/r/from%20the%20romans%20to%20botta/images%20all%20season/51789_32001800.jpeg",
          "subtitle": "Susten",
          "category": "castles-ruins",
          "distanceKm": null,
          "detailPath": "/app/v1/castles-ruins/270c61f4-a344-43eb-8ce0-17ac82837caa",
          "webPath": null,
          "lat": 46.31154228154866,
          "lng": 7.642513261875084
        },
        {
          "id": "72c7028b-0649-4de8-8a0e-34e3801629b7",
          "type": "non-bookable",
          "title": "Schloss Laupen",
          "imageUrl": "https://www.myswitzerland.com/-/media/st/gadmin/images/attractions/architecture/schloss_laupen_160754.jpg",
          "subtitle": "Laupen BE",
          "category": "castles-ruins",
          "distanceKm": null,
          "detailPath": "/app/v1/castles-ruins/72c7028b-0649-4de8-8a0e-34e3801629b7",
          "webPath": null,
          "lat": 46.90229280374926,
          "lng": 7.24186667287228
        },
        {
          "id": "59b53a84-cd0e-4e1f-94b4-4247855f8d8a",
          "type": "non-bookable",
          "title": "Château de Glérolles",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/experience/c/h/chateau%20de%20glerolles/images%20all%20season/52710_32001800.jpeg",
          "subtitle": "Saint-Saphorin",
          "category": "castles-ruins",
          "distanceKm": null,
          "detailPath": "/app/v1/castles-ruins/59b53a84-cd0e-4e1f-94b4-4247855f8d8a",
          "webPath": null,
          "lat": 46.4307314291166,
          "lng": 6.912179813843935
        },
        {
          "id": "391f328b-d714-4511-a4fe-61c8606ba4d8",
          "type": "non-bookable",
          "title": "Burg Hohenklingen",
          "imageUrl": "https://www.myswitzerland.com/-/media/dam/resources/experience/h/o/hohenklingen%20castle/images%20all%20season/64482_32001800.jpeg",
          "subtitle": "Stein am Rhein",
          "category": "castles-ruins",
          "distanceKm": null,
          "detailPath": "/app/v1/castles-ruins/391f328b-d714-4511-a4fe-61c8606ba4d8",
          "webPath": null,
          "lat": 47.6667619890548,
          "lng": 8.858372559033638
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
          "path": "/travel-guide/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-genf/",
          "webPath": "/travel-guide/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-genf/"
        },
        {
          "id": "401",
          "type": "blog-post",
          "title": "2 Tage Schweiz - 12 Reiserouten ab Zürich",
          "description": "Wenn du zwei Tage in der Schweiz verbringst und auf der Suche nach deiner perfekten Reiseroute bist, hilft dir diese Auswahl von 12 Reiserouten bei der Planung deiner Reise. Auch wenn zwei Tage in der Schweiz nur eine sehr kurze Dauer sind, gibt es dennoch viele Möglichkeiten für dich. Unsere Sammlung zeigt dir verschiedene Reiserouten, die alle in zwei Tagen von Zürich aus machbar sind.",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Aareschlucht_1_Seraina_ddc3e880da.jpg",
          "path": "/travel-guide/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-zuerich/",
          "webPath": "/travel-guide/reiserouten-schweiz/reiseroute-zwei-tage-schweiz-zuerich/"
        }
      ]
    }
  ]
} satisfies TGatewayHome;
