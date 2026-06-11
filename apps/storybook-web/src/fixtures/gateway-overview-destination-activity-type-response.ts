import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewDestinationActivityTypeResponse = {
  "context": {
    "type": "activity-type",
    "id": "34",
    "title": "Paragliding Interlaken",
    "slug": "paragliding",
    "description": "Buche hier deinen nächsten Ausflug beim Paragliding in der Schweiz. Bei einem Tandemflug kannst du unglaubliche Landschaften aus der Vogelperspektive bestaunen. Hotspots für Gleitschirmfliegen sind Interlaken, die Zentralschweiz sowie das Engadin. Aber auch im Wallis gibt es einige atemberaubende Startplätze. Nach ein paar schnellen Schritten befindest du dich in der Luft und kannst die Umgebung geniessen, während dein Tandempilot für einen sicheren Flug sorgt.",
    "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GOPR_1021_1_55d61ae575.JPG",
    "numberOfActivities": 7
  },
  "staticSections": [
    {
      "id": "location_type_hero",
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
          "label": "Paragliding",
          "href": "/interlaken/paragliding/"
        }
      ],
      "title": "Paragliding Interlaken",
      "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GOPR_1021_1_55d61ae575.JPG",
      "description": null
    },
    {
      "id": "location_type_filters",
      "component": "filters",
      "endpoint": "/app/v1/destinations/interlaken/activity-types/paragliding/filter",
      "items": [],
      "groups": [
        {
          "id": "audience",
          "type": "checkbox",
          "title": "Geeignet für",
          "param": "tags",
          "options": [
            {
              "id": "tag:solo",
              "label": "Alleinreisende",
              "value": "solo",
              "count": 5,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:families",
              "label": "Familien",
              "value": "families",
              "count": 2,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:couples",
              "label": "Paare",
              "value": "couples",
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
              "count": 1,
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
              "count": 1,
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
      "title": "Paragliding Interlaken",
      "data": [
        {
          "id": "1128",
          "type": "activity",
          "bookingActivityId": 910,
          "title": "Beatenberg weibliche Pilotin Gleitschirmfliegen Tandem",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Gleitschirm_5_Ladypilot_4819dd4dca.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 220",
          "startingPrice": {
            "amount": 220,
            "currency": "CHF",
            "formatted": "CHF 220"
          },
          "rating": 4.5,
          "reviewCount": 2,
          "path": "/paragliding/tandem-gleitschirmflug-beatenberg-weibliche-pilotin/",
          "webPath": "/paragliding/tandem-gleitschirmflug-beatenberg-weibliche-pilotin/",
          "distanceKm": 0.8,
          "lat": 46.6869056,
          "lng": 7.8594893,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Gleitschirm_5_Ladypilot_4819dd4dca.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gleitschirm_1_Ladypilot_13c834ca91.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gleitschirm_2_Ladypilot_0f4ca0f509.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gleitschirm_3_Ladypilot_387a2200b3.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gleitschirm_4_Ladypilot_96377675ec.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Gleitschirm_6_Ladypilot_6d1e873917.jpg"
          ]
        },
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
          "distanceKm": 0.8,
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
          "id": "1052",
          "type": "activity",
          "bookingActivityId": 851,
          "title": "“The Golden Eagle” Beatenberg Gleitschirmfliegen ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1b5acbe62311587477a1bb880dd44c15.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 190",
          "startingPrice": {
            "amount": 190,
            "currency": "CHF",
            "formatted": "CHF 190"
          },
          "rating": 4.5,
          "reviewCount": 8,
          "path": "/paragliding/tandem-gleitschirmflug-beatenberg-interlaken-sensational/",
          "webPath": "/paragliding/tandem-gleitschirmflug-beatenberg-interlaken-sensational/",
          "distanceKm": 0.8,
          "lat": 46.68564689999999,
          "lng": 7.8565463,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/1b5acbe62311587477a1bb880dd44c15.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d006342027ea106d5ee23264ba20ce06.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9e91b7ab6d719cb25da07d09ef08bb36.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e41bd44eaf4d86b05f8abc2f543ab6a1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/49d3dfd423b3bbd82c1f8c04f1c9fd49.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/8805e9c9569fb078a5565c05ae3a412b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/5320c34c18be78f59b76c22f964eeddf.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/e35f6a82cfe226c940b5062290092714.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/62a630a94bc4943a6f33c620d88c7a2b.jpg"
          ]
        },
        {
          "id": "294",
          "type": "activity",
          "bookingActivityId": 56,
          "title": "Beatenberg Gleitschirmfliegen Tandem im Winter ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_155266e39c.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 180",
          "startingPrice": {
            "amount": 180,
            "currency": "CHF",
            "formatted": "CHF 180"
          },
          "rating": 4.5,
          "reviewCount": 4,
          "path": "/paragliding/gleitschirmfliegen-interlaken-winter/",
          "webPath": "/paragliding/gleitschirmfliegen-interlaken-winter/",
          "distanceKm": 0.8,
          "lat": 46.6883949,
          "lng": 7.8618687,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_155266e39c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_147fb8431e26c1a4fe46eaa820bebe92_4271d721ae.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_1f3a71aa9d597f282e566e5e5a7bc313_8d49f286a4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_78e8cd20657d978b56251f166c909957_f10b586590.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_86da9e77c9f164ac8a92fff67361b068_0cbdda75af.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_44fba8eabafdcaedd7273fa42919aedc_6dd956753e.jpg"
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
          "distanceKm": 0.8,
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
          "id": "296",
          "type": "activity",
          "bookingActivityId": 58,
          "title": "Beatenberg Gleitschirmfliegen im Tandem ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Gleitschirmfliegen_Schweiz_Interlaken_0da344cafd.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 210",
          "startingPrice": {
            "amount": 210,
            "currency": "CHF",
            "formatted": "CHF 210"
          },
          "rating": 4.76,
          "reviewCount": 114,
          "path": "/paragliding/gleitschirmfliegen-tandem-beatenberg-ganzes-jahr/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-beatenberg-ganzes-jahr/",
          "distanceKm": 0.9,
          "lat": 46.68493309999999,
          "lng": 7.8549973,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Gleitschirmfliegen_Schweiz_Interlaken_0da344cafd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Swiss_Paragliding_245d7dd139.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_ae664a9a03b48f671dbb63d05d1fd873_986b435b50.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_600x400_1_50_4aa6a0eabc5e129f7e917f6553ebf69c_56245ce9fe.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_babb875fd5da464206dd898a699f0b90_3377b31a69.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_11dabdd8be267457417c7eabc0f084de_71e75bef15.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_827348075b3c97455eefb86ed9cbc39d_a0149ad571.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_600x400_1_50_65003f2d495dcba1476c1b209b102d5a_c0cd42e84d.jpg"
          ]
        },
        {
          "id": "1084",
          "type": "activity",
          "bookingActivityId": 882,
          "title": "Tandem Delta Flug ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Hanggliding_Interlaken_Bumblebee_5_7ed81a0c00.JPG",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 260",
          "startingPrice": {
            "amount": 260,
            "currency": "CHF",
            "formatted": "CHF 260"
          },
          "rating": 5,
          "reviewCount": 5,
          "path": "/paragliding/tandem-delta-flug-interlaken/",
          "webPath": "/paragliding/tandem-delta-flug-interlaken/",
          "distanceKm": 1,
          "lat": 46.686849699999996,
          "lng": 7.854237899999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Hanggliding_Interlaken_Bumblebee_5_7ed81a0c00.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Hanggliding_Interlaken_Bumblebee_2_2c6c6530ac.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Hanggliding_Interlaken_Bumblebee_3_8cc4f6efb7.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Hanggliding_Interlaken_Bumblebee_4_3309aa479f.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Hanggliding_Interlaken_Bumblebee_6_85f957244a.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Hanggliding_Interlaken_Bumblebee_4180259d22.JPG"
          ]
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "perPage": 20,
          "total": 7,
          "hasMore": false
        }
      }
    }
  ],
  "content": [
    {
      "html": "<p><a href=\"/interlaken/\">Interlaken</a> gilt aus gutem Grund als Mekka in der Gleitschirmflieger Szene. An natürlicher Schönheit ist diese Gegend in der Jungfrauregion kaum zu übertreffen. Türkisblaue Seen und verschneite Berggipfel verzaubern hier das ganze Jahr über und laden zu einem <a href=\"/paragliding/\">Gleitschirmflug</a> ein. Fünf speziell schöne Flüge stellen wir dir in diesem Guide vor. </p>\n<h2>Paragliding Niederhorn</h2>\n<p>Aufgrund der besonderen Stimmung in der Morgensonne eignen sich Gleitschirmflüge ab dem Niederhorn insbesondere in den frühen Morgenstunden. </p>\n<p>Das Niederhorn ist der Hausberg von Beatenberg am nördlichen Ufer des Thunersees. Du erreichst den Berg über eine Gruppenumlaufbahn auf einer Höhe von etwa 2000 Metern Höhe. Neben einem wunderbaren Ausblick auf die Berner Alpenwelt, den Brienzersee und den Thunersee bietet das Niederhorn viele Wanderwege. </p>\n<p>Der Startpunkt für den Gleitschirmflug ab dem Niederhorn liegt auf 1950 m.ü.M. Über die Wälder geht der Flug in zwanzig bis dreissig Minuten hinunter bis ins Zentrum von Interlaken. Dabei überwindest du ca. 1400 Höhenmeter. Für einen Tandemflug ab dem Niederhorn benötigst du total inklusive Anreise ca. 2.5 Stunden.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/01_Gleitschirmfliegen_Interlaken_Tandemflug_Alpin_Air_Paragliding_0d97423885.jpg",
          "caption": "Gleitschirmfliegen über dem Thunersee (Foto: AlpinAir Paragliding)",
          "alt": "Gleitschirmfliegen Interlaken Tandemflug "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/02_Gleitschirmfliegen_Interlaken_Tandemflug_Winter_Paragliding_Interlaken_Gmb_H_4cfb1f1bf1.jpg",
          "caption": "Paragliding im Winter (Foto: Paragliding Interlaken GmbH)",
          "alt": "Gleitschirmfliegen Interlaken Tandemflug Winter "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Gleitschirmfliegen Beatenberg</h2>\n<p>Schon vor deinem Gleitschirmflug ab Beatenberg kannst du einen atemberaubenden Ausblick auf die Berge geniessen. Eiger, Mönch und Jungfrau sind vom Startplatz aus ebenso wunderbar zu sehen wie der Thunersee und etwas westlich der Brienzersee. </p>\n<p>Der Startplatz liegt auf 1350 m ü. M. unterhalb vom Niederhorn bei Amisbühl. Du läufst ein paar Schritte auf dem leicht abfallenden Gelände und schon schwebst du dahin. Die reine Flugzeit zurück nach Interlaken variiert je nach Thermik zwischen zwölf und zwanzig Minuten. </p>\n<p>Während deines Fluges überwindest du einen Höhenunterschied von etwa 800 Metern. Für einen Tandemflug ab Beatenberg benötigst du total inklusive Anreise ca. 1.5 Stunden.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/03_Gleitschirmfliegen_Interlaken_Twin_Paragliding_Seen_Panorama_Tourismus_Organisation_Interlaken_TOI_31a99c8525.jpg",
          "caption": "Geitschirmfliegen mit einem Tandempartner (Foto: Tourismus-Organisation Interlaken (TOI))",
          "alt": "Gleitschirmfliegen InterlakenTwin Paragliding Seen Panorama "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/04_Gleitschirmfliegen_Interlaken_Tourismus_Organisation_Interlaken_TOI_7911ad1f79.jpeg",
          "caption": "Gleitschirmfliegen in Interlaken (Foto: Tourismus-Organisation Interlaken (TOI))",
          "alt": "Gleitschirmfliegen Interlaken "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Gleitschirmfliegen Schynige Platte</h2>\n<p>Für einen Gleitschirmflug ab der Schynigen Platte eignen sich insbesondere die Abendstunden vor dem Sonnenuntergang. Flüge ab der Schynigen Platte sind nicht das ganze Jahr über möglich und werden in der Zeit von Mai bis Oktober durchgeführt. \nDas Alpenpanorama bei diesem Gleitschirmflug ist einmalig schön. Auf der einen Seite schweift dein Blick auf Eiger, Mönch und Jungfrau und auf der anderen Seite ist die Seenlandschaft mit Interlaken zu sehen.</p>\n<p> Von Wilderswil aus fährt dich eine Nostalgiebahn mehr als sieben Kilometer hoch auf die Schynige Platte bis nach Breitlauenen. Dabei überwindet sie 1420 Höhenmeter und benötigt etwa 40 min. </p>\n<p>Der Startplatz liegt auf etwa 1300 m.ü.M und wird nach einer kurzen Wanderung ab der Bergstation erreicht. 750 Höhenmeter werden in einem Flug Richtung Sonnenuntergang überwunden, der etwa zwanzig Minuten dauert. Die orange im Abendlicht schimmernden Berge sind ein besonderes Erlebnis. Für einen Tandemflug ab der Schynigen Platte benötigst du total inklusive Anreise ca. 2.5 Stunden.\n </p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/05_Gleitschirmfliegen_Interlaken_Swiss_Paragliding_Adventure_Gmb_H_30d4ce927f.jpg",
          "caption": "(Foto: Swiss Paragliding _ Adventure GmbH)",
          "alt": "Gleitschirmfliegen Interlaken "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/06_Gleitschirmfliegen_Interlaken_Beatenberg_Tandem_Paragliding_Interlaken_a353f5beb0.jpg",
          "caption": "(Foto: Paragliding Interlaken)",
          "alt": "Gleitschirmfliegen Interlaken Beatenberg Tandem "
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Paragliding Grindelwald-First</h2>\n<p>Der Grindelwald-First ist ein abgeflachter Bergrücken oberhalb von Grindelwald. Hier liegt auf der Sonnenseite der Startplatz für den Gleitschirmflug auf 2150 m.ü.M. Das Panorama zeigt einige imposante Berggipfel – darunter die Grosse Scheidegg, das Wetterhorn, das Schreckhorn bis hin zur Eigernordwand und der Kleinen Scheidegg. </p>\n<p>Mit der Firstbahn gelangst du ab Grindelwald innert ca. 25 min auf den Gipfel. Auf dem First warten neben dem Startplatz zahlreiche weitere Attraktionen wie der First Cliff Walk oder der First Flieger. Letzterer ist eine 800 m lange Zipline, bei der die Adrenalinjunkies an einem Stahlseil mit über 80 km/h durch die Luft fliegen. </p>\n<p>Während deines Gleitschirmfluges ab Grindelwald-First kannst du häufig Steinadler beobachten. Die eigentliche Flugzeit zum Landeplatz in Grindelwald beträgt je nach Thermik zwischen zwölf und zwanzig Minuten. Insgesamt solltest du für den Flug etwa 1.5 Stunden einplanen.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": "<p><strong>Angebot bei Swiss Activities:</strong></p>\n<ul>\n<li><a href=\"/paragliding/paragliding-grindelwald-first/\">Paragliding Grindelwald ab First</a></li>\n</ul>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/GOPR_3781_d5d6cdd9a9.JPG",
          "caption": "Grindelwald First (Foto: Paragliding Jungfrau GmbH)  ",
          "alt": "Gleitschirmfliegen Grindelwald First"
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/GOPR_1021_aea627e679.JPG",
          "caption": "Grindelwald First (Foto: Paragliding Jungfrau GmbH)  ",
          "alt": "Gleitschirmfliegen Grindelwald First"
        }
      ],
      "youtubeUrl": null
    },
    {
      "html": "<h2>Gleitschirmfliegen Schiltgrat</h2>\n<p>Das Paragliding Schiltgrat ist eine Tour mit einem grandiosen winterlichen Erlebnis. Von Mürren aus fährst du mit einem Sessellift auf den Schiltgrat, wo dich ein flach abfallender Startplatz erwartet. Er liegt direkt neben der Skipiste auf 2150 m.ü.M. </p>\n<p>Der Gleitschirmflug ab dem Schiltgrat führt über das Lauterbrunnental bis nach Stechelberg, wo du nach 20 min Flugzeit den Landeplatz bei der Talstation der Schilthornbahn erreichst. Dabei überwindest du etwa 1200 Höhenmeter und passierst unterwegs eine imposante Felswand.</p>\n<p>Im Sommer wird dieser Gleitschirmflug ebenfalls durchgeführt. Allerdings erfolgt dann der Start ab <a href=\"/muerren/\">Mürren</a> auf 1630 m.ü.M.</p>\n",
      "images": [],
      "youtubeUrl": null
    },
    {
      "html": null,
      "images": [
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/09_Gleitschirmfliegen_Interlaken_Tandemflug_Swiss_Paragliding_Adventure_Gmb_H_4247805f83.jpg",
          "caption": "(Foto: Swiss Paragliding Adventure GmbH)",
          "alt": "Gleitschirmfliegen Interlaken Tandemflug  "
        },
        {
          "url": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/10_Gleitschirmfliegen_Interlaken_Tandemflug_Swiss_Paragliding_Adventure_Gmb_H_3b054f9881.jpg",
          "caption": "Tandemflug im Winter (Foto: Swiss Paragliding Adventure GmbH)",
          "alt": "Gleitschirmfliegen Interlaken Tandemflug  "
        }
      ],
      "youtubeUrl": null
    }
  ],
  "faq": {
    "title": null,
    "items": [
      {
        "question": "Für wen ist Paragliding geeignet?",
        "answer": "<p>Als Passagier eines Tandemflugs benötigst du keine Vorkenntnisse. Du wirst vom Piloten vor dem Gleitschirmflug in der Startvorbereitung aufgeklärt, was du bei Start, Landung und auch während des Fluges beachten musst. Beim Alter gibt es ab 16 Jahren keine Einschränkungen, das Gewicht sollte zwischen dreissig und hundert Kilogramm liegen. Das exakte Gewicht hängt vom Angebot und vom Startplatz ab und wird jeweils bei der Buchung separat ausgewiesen. Eine besondere Fitness wird nicht benötigt, aber bei schweren Krankheiten solltest du dich mit deinem Arzt beraten und dies auch bei der Buchung angeben. Festes Schuhwerk, lange Hosen und eine Windjacke sind Pflicht. Für Kinder ab etwa sieben Jahren ist ein Tandemflug in den meisten Fällen zwar möglich, aber es muss eine Genehmigung der Erziehungsberechtigten vorliegen.</p>\n"
      },
      {
        "question": "Was benötigst du, um in der Schweiz im Paragliding als Pilot zu starten?",
        "answer": "<p>Wer in der Schweiz diesen Sport als Pilot ausüben möchte, muss vorher für Einzelplatzgleitschirme zwei Prüfungen bestehen. Eine Prüfung betrifft die in fünf Abschnitte gegliederte theoretische Ausbildung. Die praktische Prüfung wird in maximal drei Gleitschirmflügen absolviert. Damit wird das Beherrschen des Fluggeräts geprüft. Dies erfolgt in drei Abschnitten beim Start, während des Fluges und bei der Landung innerhalb eines vorgegebenen dreissig Meter grossen Kreises. Um für die Ausbildung angerechnet werden zu können, müssen Start- und Landeplatz mindestens eine Höhendifferenz von 300 Metern aufweisen. Für das Führen der Tandemschirme (auch Biplace genannt) benötigst du eine weitere, strenge Prüfung. Die Lizenz heisst im Deutschen Hängegleiter Ausweis (Licence de vol libre, Licenza per aliante da pendio, Hang gliding licence) und wird von der Schweizerischen Eidgenossenschaft ausgestellt. Wer diese Prüfungen bestanden hat, darf als Gleitschirmpilot fliegen.</p>\n<p>Um mit dem Gleitschirm starten zu dürfen, ist in der Schweiz lediglich die Genehmigung des Grundstückeigentümers erforderlich. Die Start- und Landeplätze werden meist von Flugschulen, örtlichen Vereinen oder sogar Bergbahnbetreibern betreut. Eine abgeschlossene Haftpflichtversicherung ist allerdings Bedingung. Als ausländischer Gastpilot musst du dir von deiner Versicherung die Bestätigung einholen, dass deine Versicherung auch im Schweizer Luftraum deine Flüge versichert. Die Garantien und Deckungsbeiträge für Schäden Dritter müssen ausreichend abgedeckt sein. 30-Tage-Versicherungen kannst du als Pilot auch beim Schweizerischen Hängegleiterverband abschliessen.</p>\n"
      },
      {
        "question": "Wie funktioniert Paragliding?",
        "answer": "<p>Der Pilot sitzt in einem Gurt sicher unter dem Gleitschirm, der über Leinen mit dem Gurt verbunden ist. Er steuert den Flug mittels Steuerleinen. Beim Tandemflug sitzt der Passagier in einem zweiten fest verbundenen Gurt direkt vor dem Piloten. Die gesamte Ausrüstung passt in einen Rucksack und wiegt zwischen fünfzehn und zwanzig Kilogramm. In den Bergen wird der Flug meist mit einem Vorwärtsstart durchgeführt. Der Gleitschirm ist hinter dir und du läufst langsam los, bis sich der Gleitschirm mit Luft gefüllt hat und über dir steht. Ist nichts verheddert, geht’s noch einige Schritte beschleunigt bergab und schon bei 20 km/h hebt dich der Gleitschirm in die Luft.</p>\n"
      },
      {
        "question": "Wie gefährlich ist Paragliding?",
        "answer": "<p>Beim Paragliding werden Professionalität und Sicherheit garantiert. Alle Piloten sind ausnahmslos durch den schweizerischen Hängegleiterverband SHV geprüft und besitzen ein Brevet, den Hängegleiter Ausweis. Piloten, die Tandemflüge durchführen dürfen, durchlaufen eine zusätzliche strenge Prüfung. Für die Gleitschirme gibt es ebenfalls sehr strenge Vorschriften. Sämtliche Teile des Gleitschirms müssen in der Lage sein, mindestens eine achtfache Belastung auszuhalten. Heute ist Gleitschirmfliegen die sicherste Flugsportart überhaupt. Zwischen 2000-2017 starben durchschnittlich 8 Personen beim Gleitschirmfliegen gemäss BFU. Bei 16.000 registrierten und lizenzierten Gleitschirmpiloten ein vergleichbar tiefer Wert. Insbesondere wenn man berücksichtigt, dass jeder Pilot mehrmals pro Jahr fliegt.</p>\n"
      },
      {
        "question": "Wie entstand das Paragliding?",
        "answer": "<p>Paragliding gibt es in seinen Anfängen schon seit mehr als siebzig Jahren. Der NASA-Ingenieur Francis Melvin Rogallo erhielt 1948 das erste Patent eines Vorgänger-Gleitschirms. Etwas später entwickelte und testete David Barish ebenfalls ganz ähnliche Schirme. </p>\n<p>In der Schweiz entwickelten die hier lebenden deutschen Brüder Strasilla gemeinsam mit dem Schweizer Andrea Kuhn 1973 den ersten Gleitschirm weltweit aus Schleppschirmen. Sie meldeten ihr eigenes Gleitschirm-Patent als Skywing an. Ihr Schirm verfügte schon damals über ein ausgeklügeltes System von Fang- und Steuerungsleinen. Dieter und Udo Strasilla flogen damals gemeinsam als erste Menschen vom 3466 Meter hohen Jungfraujoch zum etwa sechs Kilometer entfernten Lauterbrunnen und überwanden auf diese Weise 2676 Höhenmeter. Das war die Geburtsstunde des Paragliding in der Schweiz. </p>\n<p>Noch heute kann der erste Gleitschirm der Welt, ein 11-Zeller aus Spinnakerstoff, besichtigt werden. Er befindet sich in der Flugwerft Schleissheim bei München, die zum Deutschen Museum gehört. Die Berner Alpen südlich von Interlaken sind für ihr Dreigestirn aus Eiger, Mönch und Jungfrau bekannt und bieten mit Gipfeln über 4000 Höhenmetern ideale Bedingungen für das Gleitschirmfliegen bzw. Paragliding.</p>\n"
      },
      {
        "question": "Wo treffe ich meinen Tandempiloten, wenn ich einen Gleitschirmflug gebucht habe?",
        "answer": "<p>Wenn du über Swiss Activities einen Paragliding Tandemflug buchst, teilen wir dir den Treffpunkt mit. Je nach Flug musst du allerdings nach der Buchung mit dem Anbieter Kontakt aufnehmen, um die Details mit ihm zu besprechen, da der Treffpunkt leicht abweichen kann. Wenn dies der Fall ist, haben wir das im Text des Fluges beschrieben, damit du Bescheid weisst, wann du aktiv werden musst. </p>\n<p>Auch wenn der Treffpunkt klar definiert ist, kann es beim Gleitschirmfliegen witterungsbedingt zu kurzfristigen Änderungen kommen. Das Wetter ist nicht kontrollierbar und manchmal muss der Pilot einen anderen Startplatz auswählen, damit ihr den Flug durchführen könnt. Deshalb ist es wichtig, dass du am Tag der Aktivität (und auch schon einen Tag vorher) telefonisch und per Mail erreichbar bist. Der Anbieter erhält deine E-Mail Adresse sowie deine Telefonnummer, wenn du buchst. Er wird dich also kontaktieren, falls es eine Änderung gibt.</p>\n"
      },
      {
        "question": "Gibt es einen Foto- und Videoservice für mich und was kostet er?",
        "answer": "<p>Alle Anbieter von Tandemflügen bieten einen Foto- und Videoservice an. So fliegst du ganz entspannt und bekommst anschliessend einzigartige Erinnerungsstücke mit. Du solltest für diesen Service mit 40 bis 45 CHF rechnen.</p>\n"
      },
      {
        "question": "Darf ich auch eine eigene Kamera mitnehmen?",
        "answer": "<p>Eine kleine Kompaktkamera oder eine GoPro kann meistens mitgenommen werden, wenn sie gut am Gurtzeug festgemacht werden kann. Mobiltelefone und Selfie Sticks mitzunehmen, ist nicht erlaubt.</p>\n"
      }
    ]
  }
} satisfies TGatewayHome;
