import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewNonBookableResponse = {
  "context": {
    "type": "non-bookable",
    "id": null,
    "title": "Grillstellen",
    "category": "fireplaces",
    "description": null,
    "imageUrl": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/categories/fireplaces.avif",
    "numberOfItems": 1766
  },
  "staticSections": [
    {
      "id": "non_bookable_hero",
      "component": "hero",
      "title": "Grillstellen",
      "imageUrl": "https://fra1.digitaloceanspaces.com/contentapi.swissactivities/categories/fireplaces.avif",
      "description": null
    },
    {
      "id": "non_bookable_filters",
      "component": "filters",
      "endpoint": "/app/v1/non-bookable/fireplaces/filter",
      "items": [],
      "groups": [
        {
          "id": "destination",
          "type": "dropdown",
          "title": "Reiseziel",
          "param": "destination",
          "options": [
            {
              "id": "destination:aargau-aarau",
              "label": "Aarau",
              "value": "aargau-aarau",
              "count": 0,
              "selected": false,
              "lat": 47.390434,
              "lng": 8.0457015
            },
            {
              "id": "destination:berner-oberland-adelboden",
              "label": "Adelboden",
              "value": "berner-oberland-adelboden",
              "count": 0,
              "selected": false,
              "lat": 46.4930889,
              "lng": 7.5595123
            },
            {
              "id": "destination:basel-aesch",
              "label": "Aesch",
              "value": "basel-aesch",
              "count": 0,
              "selected": false,
              "lat": 47.4672734,
              "lng": 7.597934399999999
            },
            {
              "id": "destination:emmental-affoltern",
              "label": "Affoltern Emmental",
              "value": "emmental-affoltern",
              "count": 0,
              "selected": false,
              "lat": 47.07183333333334,
              "lng": 7.726861111111111
            },
            {
              "id": "destination:waadt-aigle",
              "label": "Aigle",
              "value": "waadt-aigle",
              "count": 0,
              "selected": false,
              "lat": 46.31542313063717,
              "lng": 6.963530460874656
            },
            {
              "id": "destination:tessin-airolo",
              "label": "Airolo",
              "value": "tessin-airolo",
              "count": 0,
              "selected": false,
              "lat": 46.5286074,
              "lng": 8.612374599999999
            },
            {
              "id": "destination:luzern-alpnach",
              "label": "Alpnach",
              "value": "luzern-alpnach",
              "count": 0,
              "selected": false,
              "lat": 46.9380412,
              "lng": 8.2701754
            },
            {
              "id": "destination:uri-altdorf",
              "label": "Altdorf",
              "value": "uri-altdorf",
              "count": 0,
              "selected": false,
              "lat": 46.88220916459904,
              "lng": 8.640765211890873
            },
            {
              "id": "destination:graubuenden-andeer",
              "label": "Andeer",
              "value": "graubuenden-andeer",
              "count": 0,
              "selected": false,
              "lat": 46.6034023,
              "lng": 9.4263657
            },
            {
              "id": "destination:zuerich-andelfingen-zh",
              "label": "Andelfingen",
              "value": "zuerich-andelfingen-zh",
              "count": 0,
              "selected": false,
              "lat": 47.59482879999999,
              "lng": 8.6789566
            },
            {
              "id": "destination:luzern-andermatt",
              "label": "Andermatt",
              "value": "luzern-andermatt",
              "count": 0,
              "selected": false,
              "lat": 46.6339116,
              "lng": 8.5935627
            },
            {
              "id": "destination:ostschweiz-appenzell",
              "label": "Appenzell",
              "value": "ostschweiz-appenzell",
              "count": 0,
              "selected": false,
              "lat": 47.33493199999999,
              "lng": 9.406594
            },
            {
              "id": "destination:ostschweiz-arbon",
              "label": "Arbon",
              "value": "ostschweiz-arbon",
              "count": 0,
              "selected": false,
              "lat": 47.51409049999999,
              "lng": 9.4268301
            },
            {
              "id": "destination:graubuenden-arosa",
              "label": "Arosa",
              "value": "graubuenden-arosa",
              "count": 0,
              "selected": false,
              "lat": 46.7823704,
              "lng": 9.6799111
            },
            {
              "id": "destination:luzern-arth-goldau",
              "label": "Arth Goldau",
              "value": "luzern-arth-goldau",
              "count": 0,
              "selected": false,
              "lat": 47.0490455,
              "lng": 8.5494481
            },
            {
              "id": "destination:tessin-ascona",
              "label": "Ascona",
              "value": "tessin-ascona",
              "count": 0,
              "selected": false,
              "lat": 46.1615793,
              "lng": 8.775013099999999
            },
            {
              "id": "destination:wallis-ausserberg",
              "label": "Ausserberg",
              "value": "wallis-ausserberg",
              "count": 0,
              "selected": false,
              "lat": 46.31444,
              "lng": 7.850700000000001
            },
            {
              "id": "destination:tessin-avegno-gordevio",
              "label": "Avegno",
              "value": "tessin-avegno-gordevio",
              "count": 0,
              "selected": false,
              "lat": 46.2028357,
              "lng": 8.7481907
            },
            {
              "id": "destination:zug-baar",
              "label": "Baar",
              "value": "zug-baar",
              "count": 0,
              "selected": false,
              "lat": 47.19649999999999,
              "lng": 8.529166666666667
            },
            {
              "id": "destination:ostschweiz-bad-ragaz",
              "label": "Bad Ragaz",
              "value": "ostschweiz-bad-ragaz",
              "count": 0,
              "selected": false,
              "lat": 47.0034141,
              "lng": 9.501106199999999
            },
            {
              "id": "destination:aargau-baden",
              "label": "Baden",
              "value": "aargau-baden",
              "count": 0,
              "selected": false,
              "lat": 47.47288,
              "lng": 8.30809
            },
            {
              "id": "destination:jura-balsthal",
              "label": "Balsthal",
              "value": "jura-balsthal",
              "count": 0,
              "selected": false,
              "lat": 47.3095856,
              "lng": 7.6883283
            },
            {
              "id": "destination:basel-reisefuehrer",
              "label": "Basel",
              "value": "basel-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 47.5595986,
              "lng": 7.5885761
            },
            {
              "id": "destination:bern-beatenberg",
              "label": "Beatenberg",
              "value": "bern-beatenberg",
              "count": 0,
              "selected": false,
              "lat": 46.7035407,
              "lng": 7.809551099999999
            },
            {
              "id": "destination:luzern-beckenried",
              "label": "Beckenried",
              "value": "luzern-beckenried",
              "count": 0,
              "selected": false,
              "lat": 46.9704961,
              "lng": 8.4657007
            },
            {
              "id": "destination:tessin-bellinzona",
              "label": "Bellinzona",
              "value": "tessin-bellinzona",
              "count": 0,
              "selected": false,
              "lat": 46.1946216,
              "lng": 9.0244124
            },
            {
              "id": "destination:wallis-bellwald",
              "label": "Bellwald",
              "value": "wallis-bellwald",
              "count": 0,
              "selected": false,
              "lat": 46.42772222222222,
              "lng": 8.156611111111111
            },
            {
              "id": "destination:bern-belp",
              "label": "Belp",
              "value": "bern-belp",
              "count": 0,
              "selected": false,
              "lat": 46.8914239,
              "lng": 7.499006000000001
            },
            {
              "id": "destination:graubuenden-berguen-bravuogn",
              "label": "Bergün Bravuogn",
              "value": "graubuenden-berguen-bravuogn",
              "count": 0,
              "selected": false,
              "lat": 46.629333333333335,
              "lng": 9.745166666666666
            },
            {
              "id": "destination:berner-oberland-bern",
              "label": "Bern",
              "value": "berner-oberland-bern",
              "count": 0,
              "selected": false,
              "lat": 46.9479739,
              "lng": 7.4474468
            },
            {
              "id": "destination:berner-oberland",
              "label": "Berner Oberland",
              "value": "berner-oberland",
              "count": 0,
              "selected": false,
              "lat": 46.6335708,
              "lng": 7.850828699999998
            },
            {
              "id": "destination:aargau-biberstein",
              "label": "Biberstein",
              "value": "aargau-biberstein",
              "count": 0,
              "selected": false,
              "lat": 47.41371590000001,
              "lng": 8.0813767
            },
            {
              "id": "destination:jura-biel",
              "label": "Biel",
              "value": "jura-biel",
              "count": 0,
              "selected": false,
              "lat": 47.1367785,
              "lng": 7.2467909
            },
            {
              "id": "destination:glarus-bilten",
              "label": "Bilten",
              "value": "glarus-bilten",
              "count": 0,
              "selected": false,
              "lat": 47.15253,
              "lng": 9.02622
            },
            {
              "id": "destination:wallis-blatten-bei-naters",
              "label": "Blatten bei Naters",
              "value": "wallis-blatten-bei-naters",
              "count": 0,
              "selected": false,
              "lat": 46.358611,
              "lng": 7.984444000000001
            },
            {
              "id": "destination:wallis-blatten-im-loetschental",
              "label": "Blatten im Lötschental",
              "value": "wallis-blatten-im-loetschental",
              "count": 0,
              "selected": false,
              "lat": 46.42032,
              "lng": 7.819769999999999
            },
            {
              "id": "destination:bern-boenigen",
              "label": "Bönigen",
              "value": "bern-boenigen",
              "count": 0,
              "selected": false,
              "lat": 46.6859659,
              "lng": 7.8932422
            },
            {
              "id": "destination:aargau-boezberg",
              "label": "Bözberg",
              "value": "aargau-boezberg",
              "count": 0,
              "selected": false,
              "lat": 47.4970603,
              "lng": 8.1546981
            },
            {
              "id": "destination:aargau-bremgarten",
              "label": "Bremgarten",
              "value": "aargau-bremgarten",
              "count": 0,
              "selected": false,
              "lat": 47.34917739999999,
              "lng": 8.3397905
            },
            {
              "id": "destination:berner-oberland-brienz",
              "label": "Brienz",
              "value": "berner-oberland-brienz",
              "count": 0,
              "selected": false,
              "lat": 46.7541541,
              "lng": 8.0316899
            },
            {
              "id": "destination:bern-brienzwiler",
              "label": "Brienzwiler",
              "value": "bern-brienzwiler",
              "count": 0,
              "selected": false,
              "lat": 46.7516401,
              "lng": 8.1007474
            },
            {
              "id": "destination:wallis-brig",
              "label": "Brig",
              "value": "wallis-brig",
              "count": 0,
              "selected": false,
              "lat": 46.3158992,
              "lng": 7.987820800000001
            },
            {
              "id": "destination:surselva-brigels",
              "label": "Brigels",
              "value": "surselva-brigels",
              "count": 0,
              "selected": false,
              "lat": 46.7695626,
              "lng": 9.0613759
            },
            {
              "id": "destination:freiburg-broc",
              "label": "Broc",
              "value": "freiburg-broc",
              "count": 0,
              "selected": false,
              "lat": 46.6042074,
              "lng": 7.0974945
            },
            {
              "id": "destination:aargau-brugg",
              "label": "Brugg",
              "value": "aargau-brugg",
              "count": 0,
              "selected": false,
              "lat": 47.48405555555556,
              "lng": 8.2015
            },
            {
              "id": "destination:luzern-brunnen",
              "label": "Brunnen Ingenbohl",
              "value": "luzern-brunnen",
              "count": 0,
              "selected": false,
              "lat": 46.99545999999999,
              "lng": 8.6065
            },
            {
              "id": "destination:ostschweiz-buchs",
              "label": "Buchs",
              "value": "ostschweiz-buchs",
              "count": 0,
              "selected": false,
              "lat": 47.1655403,
              "lng": 9.4708594
            },
            {
              "id": "destination:zuerich-buchs-zh",
              "label": "Buchs ZH",
              "value": "zuerich-buchs-zh",
              "count": 0,
              "selected": false,
              "lat": 47.4584851,
              "lng": 8.441022199999999
            },
            {
              "id": "destination:luzern-buochs",
              "label": "Buochs",
              "value": "luzern-buochs",
              "count": 0,
              "selected": false,
              "lat": 46.9735985,
              "lng": 8.420352
            },
            {
              "id": "destination:wallis-buerchen",
              "label": "Bürchen",
              "value": "wallis-buerchen",
              "count": 0,
              "selected": false,
              "lat": 46.275333333333336,
              "lng": 7.822027777777778
            },
            {
              "id": "destination:bern-burgdorf",
              "label": "Burgdorf",
              "value": "bern-burgdorf",
              "count": 0,
              "selected": false,
              "lat": 47.05583333333333,
              "lng": 7.627222222222223
            },
            {
              "id": "destination:aargau-buttwil",
              "label": "Buttwil",
              "value": "aargau-buttwil",
              "count": 0,
              "selected": false,
              "lat": 47.273845,
              "lng": 8.310664
            },
            {
              "id": "destination:capolago",
              "label": "Capolago",
              "value": "capolago",
              "count": 0,
              "selected": false,
              "lat": 45.902667,
              "lng": 8.9784787
            },
            {
              "id": "destination:engadin-celerina-schlarigna",
              "label": "Celerina Schlarigna",
              "value": "engadin-celerina-schlarigna",
              "count": 0,
              "selected": false,
              "lat": 46.51233329999999,
              "lng": 9.8589518
            },
            {
              "id": "destination:wallis-champery",
              "label": "Champéry",
              "value": "wallis-champery",
              "count": 0,
              "selected": false,
              "lat": 46.1816543,
              "lng": 6.874759099999999
            },
            {
              "id": "destination:genfersee-chateau-d-oex",
              "label": "Château-d'Oex",
              "value": "genfersee-chateau-d-oex",
              "count": 0,
              "selected": false,
              "lat": 46.4715174,
              "lng": 7.126011399999999
            },
            {
              "id": "destination:tessin-chiasso",
              "label": "Chiasso",
              "value": "tessin-chiasso",
              "count": 0,
              "selected": false,
              "lat": 45.8366999,
              "lng": 9.0246111
            },
            {
              "id": "destination:chur-reisefuehrer",
              "label": "Chur",
              "value": "chur-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.8507835,
              "lng": 9.5319859
            },
            {
              "id": "destination:wallis-collombey-muraz",
              "label": "Collombey-Muraz",
              "value": "wallis-collombey-muraz",
              "count": 0,
              "selected": false,
              "lat": 46.2710282,
              "lng": 6.9459483
            },
            {
              "id": "destination:genf-collonge-bellerive",
              "label": "Collonge Bellerive",
              "value": "genf-collonge-bellerive",
              "count": 0,
              "selected": false,
              "lat": 46.2514024,
              "lng": 6.2022904
            },
            {
              "id": "destination:wallis-conthey",
              "label": "Conthey",
              "value": "wallis-conthey",
              "count": 0,
              "selected": false,
              "lat": 46.2244777,
              "lng": 7.303512
            },
            {
              "id": "destination:bern-courtelary",
              "label": "Courtelary",
              "value": "bern-courtelary",
              "count": 0,
              "selected": false,
              "lat": 47.1783274,
              "lng": 7.072954699999999
            },
            {
              "id": "destination:wallis-crans-montana",
              "label": "Crans-Montana",
              "value": "wallis-crans-montana",
              "count": 0,
              "selected": false,
              "lat": 46.3118579,
              "lng": 7.4823527
            },
            {
              "id": "destination:tessin-cugnasco-gerra",
              "label": "Cugnasco Gerra",
              "value": "tessin-cugnasco-gerra",
              "count": 0,
              "selected": false,
              "lat": 46.166667,
              "lng": 8.916667000000002
            },
            {
              "id": "destination:genfersee-cully",
              "label": "Cully",
              "value": "genfersee-cully",
              "count": 0,
              "selected": false,
              "lat": 46.4895985,
              "lng": 6.7290888
            },
            {
              "id": "destination:luzern-dallenwil",
              "label": "Dallenwil",
              "value": "luzern-dallenwil",
              "count": 0,
              "selected": false,
              "lat": 46.92963888888889,
              "lng": 8.391722222222223
            },
            {
              "id": "destination:bern-daerligen",
              "label": "Därligen",
              "value": "bern-daerligen",
              "count": 0,
              "selected": false,
              "lat": 46.6618804,
              "lng": 7.808208099999999
            },
            {
              "id": "destination:bern-daerstetten",
              "label": "Därstetten",
              "value": "bern-daerstetten",
              "count": 0,
              "selected": false,
              "lat": 46.6591694,
              "lng": 7.493250400000001
            },
            {
              "id": "destination:davos-reisefuehrer",
              "label": "Davos",
              "value": "davos-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.8027453,
              "lng": 9.835970099999999
            },
            {
              "id": "destination:ost-degersheim",
              "label": "Degersheim",
              "value": "ost-degersheim",
              "count": 0,
              "selected": false,
              "lat": 47.37390227192981,
              "lng": 9.199659471029237
            },
            {
              "id": "destination:aargau-densbueren",
              "label": "Densbüren",
              "value": "aargau-densbueren",
              "count": 0,
              "selected": false,
              "lat": 47.4541627,
              "lng": 8.0535125
            },
            {
              "id": "destination:deutschland",
              "label": "Deutschland",
              "value": "deutschland",
              "count": 0,
              "selected": false,
              "lat": 51.165691,
              "lng": 10.451526
            },
            {
              "id": "destination:bern-diemtigen",
              "label": "Diemtigen",
              "value": "bern-diemtigen",
              "count": 0,
              "selected": false,
              "lat": 46.6588931,
              "lng": 7.5767583
            },
            {
              "id": "destination:graubuenden-disentis-muster",
              "label": "Disentis Muster",
              "value": "graubuenden-disentis-muster",
              "count": 0,
              "selected": false,
              "lat": 46.7051127,
              "lng": 8.8523754
            },
            {
              "id": "destination:graubuenden-domat-ems",
              "label": "Domat Ems",
              "value": "graubuenden-domat-ems",
              "count": 0,
              "selected": false,
              "lat": 46.8336355,
              "lng": 9.4473545
            },
            {
              "id": "destination:luzern-ebikon",
              "label": "Ebikon",
              "value": "luzern-ebikon",
              "count": 0,
              "selected": false,
              "lat": 47.0813181,
              "lng": 8.3407402
            },
            {
              "id": "destination:ost-ebnat-kappel",
              "label": "Ebnat-Kappel",
              "value": "ost-ebnat-kappel",
              "count": 0,
              "selected": false,
              "lat": 47.26548500000001,
              "lng": 9.1235471
            },
            {
              "id": "destination:aargau-effingen",
              "label": "Effingen",
              "value": "aargau-effingen",
              "count": 0,
              "selected": false,
              "lat": 47.488744,
              "lng": 8.103871999999999
            },
            {
              "id": "destination:zuerich-eglisau",
              "label": "Eglisau",
              "value": "zuerich-eglisau",
              "count": 0,
              "selected": false,
              "lat": 47.572583333333334,
              "lng": 8.529666666666667
            },
            {
              "id": "destination:schwyz-einsiedeln",
              "label": "Einsiedeln",
              "value": "schwyz-einsiedeln",
              "count": 0,
              "selected": false,
              "lat": 47.127353,
              "lng": 8.7451537
            },
            {
              "id": "destination:luzern-emmetten",
              "label": "Emmetten",
              "value": "luzern-emmetten",
              "count": 0,
              "selected": false,
              "lat": 46.9567523,
              "lng": 8.513415499999999
            },
            {
              "id": "destination:engadin-reisefuehrer",
              "label": "Engadin",
              "value": "engadin-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.650234,
              "lng": 10.0287409
            },
            {
              "id": "destination:engelberg-reisefuehrer",
              "label": "Engelberg",
              "value": "engelberg-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.8200266,
              "lng": 8.4069918
            },
            {
              "id": "destination:luzern-entlebuch",
              "label": "Entlebuch",
              "value": "luzern-entlebuch",
              "count": 0,
              "selected": false,
              "lat": 46.990782,
              "lng": 8.0641318
            },
            {
              "id": "destination:bern-erlenbach-im-simmental",
              "label": "Erlenbach Simmental",
              "value": "bern-erlenbach-im-simmental",
              "count": 0,
              "selected": false,
              "lat": 46.6605558,
              "lng": 7.552995999999999
            },
            {
              "id": "destination:genfersee-etoy",
              "label": "Etoy",
              "value": "genfersee-etoy",
              "count": 0,
              "selected": false,
              "lat": 46.481388888888894,
              "lng": 6.414388888888889
            },
            {
              "id": "destination:wallis-fiesch",
              "label": "Fiesch",
              "value": "wallis-fiesch",
              "count": 0,
              "selected": false,
              "lat": 46.4014491,
              "lng": 8.1333135
            },
            {
              "id": "destination:glaris-filzbach",
              "label": "Filzbach",
              "value": "glaris-filzbach",
              "count": 0,
              "selected": false,
              "lat": 47.12104000000001,
              "lng": 9.13017
            },
            {
              "id": "destination:wallis-finhaut",
              "label": "Finhaut",
              "value": "wallis-finhaut",
              "count": 0,
              "selected": false,
              "lat": 46.08337,
              "lng": 6.97688
            },
            {
              "id": "destination:heidiland-flaesch",
              "label": "Fläsch",
              "value": "heidiland-flaesch",
              "count": 0,
              "selected": false,
              "lat": 47.0266057,
              "lng": 9.5137762
            },
            {
              "id": "destination:ostschweiz-flawil",
              "label": "Flawil",
              "value": "ostschweiz-flawil",
              "count": 0,
              "selected": false,
              "lat": 47.41337069999999,
              "lng": 9.1870297
            },
            {
              "id": "destination:graubuenden-flims",
              "label": "Flims",
              "value": "graubuenden-flims",
              "count": 0,
              "selected": false,
              "lat": 46.8366348,
              "lng": 9.2846923
            },
            {
              "id": "destination:uri-flueelen",
              "label": "Flüelen",
              "value": "uri-flueelen",
              "count": 0,
              "selected": false,
              "lat": 46.90061111111111,
              "lng": 8.623666666666667
            },
            {
              "id": "destination:luzern-fluehli-soerenberg",
              "label": "Flühli-Sörenberg",
              "value": "luzern-fluehli-soerenberg",
              "count": 0,
              "selected": false,
              "lat": 46.8830365,
              "lng": 8.016260599999999
            },
            {
              "id": "destination:heidiland-flums",
              "label": "Flums",
              "value": "heidiland-flums",
              "count": 0,
              "selected": false,
              "lat": 47.09164610000001,
              "lng": 9.3425546
            },
            {
              "id": "destination:frankreich-fr",
              "label": "Frankreich",
              "value": "frankreich-fr",
              "count": 0,
              "selected": false,
              "lat": 46.227638,
              "lng": 2.213749
            },
            {
              "id": "destination:aargau-frick",
              "label": "Frick",
              "value": "aargau-frick",
              "count": 0,
              "selected": false,
              "lat": 47.5085197,
              "lng": 8.0186727
            },
            {
              "id": "destination:bern-frutigen",
              "label": "Frutigen",
              "value": "bern-frutigen",
              "count": 0,
              "selected": false,
              "lat": 46.5897805,
              "lng": 7.646887
            },
            {
              "id": "destination:baselland-fuellinsdorf",
              "label": "Füllinsdorf",
              "value": "baselland-fuellinsdorf",
              "count": 0,
              "selected": false,
              "lat": 47.5055922,
              "lng": 7.7298829
            },
            {
              "id": "destination:ostschweiz-gaechlingen",
              "label": "Gächlingen",
              "value": "ostschweiz-gaechlingen",
              "count": 0,
              "selected": false,
              "lat": 47.7027587,
              "lng": 8.498147900000001
            },
            {
              "id": "destination:tessin-gambarogno",
              "label": "Gambarogno",
              "value": "tessin-gambarogno",
              "count": 0,
              "selected": false,
              "lat": 46.13308,
              "lng": 8.81515
            },
            {
              "id": "destination:baselland-gelterkinden",
              "label": "Gelterkinden",
              "value": "baselland-gelterkinden",
              "count": 0,
              "selected": false,
              "lat": 47.4656125,
              "lng": 7.8560314
            },
            {
              "id": "destination:tessin-gordevio",
              "label": "Gordevio",
              "value": "tessin-gordevio",
              "count": 0,
              "selected": false,
              "lat": 46.2254006,
              "lng": 8.742126299999999
            },
            {
              "id": "destination:tessin-gordola",
              "label": "Gordola",
              "value": "tessin-gordola",
              "count": 0,
              "selected": false,
              "lat": 46.1809063,
              "lng": 8.8608089
            },
            {
              "id": "destination:ost-gossau",
              "label": "Gossau",
              "value": "ost-gossau",
              "count": 0,
              "selected": false,
              "lat": 47.41708333333333,
              "lng": 9.24761111111111
            },
            {
              "id": "destination:wallis-graechen",
              "label": "grächen",
              "value": "wallis-graechen",
              "count": 0,
              "selected": false,
              "lat": 46.19741666666666,
              "lng": 7.84125
            },
            {
              "id": "destination:wallis-grengiols",
              "label": "Grengiols",
              "value": "wallis-grengiols",
              "count": 0,
              "selected": false,
              "lat": 46.62247222222222,
              "lng": 6.2500277777777775
            },
            {
              "id": "destination:grimentz",
              "label": "Grimentz",
              "value": "grimentz",
              "count": 0,
              "selected": false,
              "lat": 46.1805364,
              "lng": 7.5764383
            },
            {
              "id": "destination:berner-oberland-grindelwald",
              "label": "Grindelwald",
              "value": "berner-oberland-grindelwald",
              "count": 0,
              "selected": false,
              "lat": 46.624164,
              "lng": 8.0413962
            },
            {
              "id": "destination:fribourg-gruyeres",
              "label": "Gruyères",
              "value": "fribourg-gruyeres",
              "count": 0,
              "selected": false,
              "lat": 46.57873220673773,
              "lng": 7.067709980532609
            },
            {
              "id": "destination:berner-oberland-gstaad",
              "label": "Gstaad",
              "value": "berner-oberland-gstaad",
              "count": 0,
              "selected": false,
              "lat": 46.4717588,
              "lng": 7.2865728
            },
            {
              "id": "destination:berner-oberland-gsteigwiler",
              "label": "Gsteigwiler",
              "value": "berner-oberland-gsteigwiler",
              "count": 0,
              "selected": false,
              "lat": 46.6551888,
              "lng": 7.873278600000001
            },
            {
              "id": "destination:bern-gunten",
              "label": "Gunten",
              "value": "bern-gunten",
              "count": 0,
              "selected": false,
              "lat": 46.71330999999999,
              "lng": 7.702199999999998
            },
            {
              "id": "destination:bern-gwatt",
              "label": "Gwatt",
              "value": "bern-gwatt",
              "count": 0,
              "selected": false,
              "lat": 46.723,
              "lng": 7.623
            },
            {
              "id": "destination:aargau-hallwil",
              "label": "Hallwil",
              "value": "aargau-hallwil",
              "count": 0,
              "selected": false,
              "lat": 47.32916666666667,
              "lng": 8.174138888888889
            },
            {
              "id": "destination:zuerich-hausen-am-albis",
              "label": "Hausen am Albis",
              "value": "zuerich-hausen-am-albis",
              "count": 0,
              "selected": false,
              "lat": 47.24219444444444,
              "lng": 8.539
            },
            {
              "id": "destination:stgallen-heerbrugg",
              "label": "Heerbrugg",
              "value": "stgallen-heerbrugg",
              "count": 0,
              "selected": false,
              "lat": 47.41013888888889,
              "lng": 9.627083333333333
            },
            {
              "id": "destination:ostschweiz-heiden",
              "label": "Heiden",
              "value": "ostschweiz-heiden",
              "count": 0,
              "selected": false,
              "lat": 47.44416666666666,
              "lng": 9.53088888888889
            },
            {
              "id": "destination:heidiland-reisefuehrer",
              "label": "Heidiland",
              "value": "heidiland-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 47.0016632,
              "lng": 9.4993508
            },
            {
              "id": "destination:aargau-hellikon",
              "label": "Hellikon",
              "value": "aargau-hellikon",
              "count": 0,
              "selected": false,
              "lat": 47.50992919999999,
              "lng": 7.924181799999999
            },
            {
              "id": "destination:luzern-hergiswil",
              "label": "Hergiswil",
              "value": "luzern-hergiswil",
              "count": 0,
              "selected": false,
              "lat": 46.9905821,
              "lng": 8.3083735
            },
            {
              "id": "destination:ostschweiz-herisau",
              "label": "Herisau",
              "value": "ostschweiz-herisau",
              "count": 0,
              "selected": false,
              "lat": 47.3857009,
              "lng": 9.2798472
            },
            {
              "id": "destination:aargau-herznach",
              "label": "Herznach",
              "value": "aargau-herznach",
              "count": 0,
              "selected": false,
              "lat": 47.4742674,
              "lng": 8.0507173
            },
            {
              "id": "destination:berner-oberland-hofstetten-brienz",
              "label": "Hofstetten bei Brienz",
              "value": "berner-oberland-hofstetten-brienz",
              "count": 0,
              "selected": false,
              "lat": 46.7548691,
              "lng": 8.0774025
            },
            {
              "id": "destination:basel-hofstetten-flueh",
              "label": "Hofstetten-Flüh",
              "value": "basel-hofstetten-flueh",
              "count": 0,
              "selected": false,
              "lat": 47.4769723,
              "lng": 7.511779900000001
            },
            {
              "id": "destination:zuerich-horgen",
              "label": "Horgen",
              "value": "zuerich-horgen",
              "count": 0,
              "selected": false,
              "lat": 47.2607854,
              "lng": 8.5963724
            },
            {
              "id": "destination:ostschweiz-hundwil",
              "label": "Hundwil",
              "value": "ostschweiz-hundwil",
              "count": 0,
              "selected": false,
              "lat": 47.3658642,
              "lng": 9.3207148
            },
            {
              "id": "destination:surselva-ilanz",
              "label": "Ilanz",
              "value": "surselva-ilanz",
              "count": 0,
              "selected": false,
              "lat": 46.766667,
              "lng": 9.2
            },
            {
              "id": "destination:berner-oberland-interlaken",
              "label": "Interlaken",
              "value": "berner-oberland-interlaken",
              "count": 0,
              "selected": false,
              "lat": 46.6863481,
              "lng": 7.863204899999999
            },
            {
              "id": "destination:uri-isenthal",
              "label": "Isenthal",
              "value": "uri-isenthal",
              "count": 0,
              "selected": false,
              "lat": 46.91059250000001,
              "lng": 8.5619813
            },
            {
              "id": "destination:italien-1",
              "label": "Italien",
              "value": "italien-1",
              "count": 0,
              "selected": false,
              "lat": 41.87194,
              "lng": 12.56738
            },
            {
              "id": "destination:ostschweiz-jakobsbad",
              "label": "jakobsbad",
              "value": "ostschweiz-jakobsbad",
              "count": 0,
              "selected": false,
              "lat": 47.32079,
              "lng": 9.329060000000002
            },
            {
              "id": "destination:jurapark-aargau",
              "label": "Jurapark Aargau",
              "value": "jurapark-aargau",
              "count": 0,
              "selected": false,
              "lat": 47.47178220000001,
              "lng": 8.129900800000001
            },
            {
              "id": "destination:bern-kandergrund",
              "label": "Kandergrund",
              "value": "bern-kandergrund",
              "count": 0,
              "selected": false,
              "lat": 46.5566132,
              "lng": 7.660905799999999
            },
            {
              "id": "destination:berner-oberland-kandersteg",
              "label": "Kandersteg",
              "value": "berner-oberland-kandersteg",
              "count": 0,
              "selected": false,
              "lat": 46.4947325,
              "lng": 7.674435700000001
            },
            {
              "id": "destination:luzern-kerns",
              "label": "Kerns",
              "value": "luzern-kerns",
              "count": 0,
              "selected": false,
              "lat": 46.9022606,
              "lng": 8.2763586
            },
            {
              "id": "destination:aargau-kienberg",
              "label": "Kienberg",
              "value": "aargau-kienberg",
              "count": 0,
              "selected": false,
              "lat": 47.43968880000001,
              "lng": 7.966170000000001
            },
            {
              "id": "destination:berner-oberland-kiental",
              "label": "Kiental",
              "value": "berner-oberland-kiental",
              "count": 0,
              "selected": false,
              "lat": 46.587988,
              "lng": 7.723818
            },
            {
              "id": "destination:zuerich-kilchberg",
              "label": "Kilchberg",
              "value": "zuerich-kilchberg",
              "count": 0,
              "selected": false,
              "lat": 47.3220092,
              "lng": 8.5452125
            },
            {
              "id": "destination:graubuenden-klosters",
              "label": "Klosters",
              "value": "graubuenden-klosters",
              "count": 0,
              "selected": false,
              "lat": 46.8699029,
              "lng": 9.882869699999999
            },
            {
              "id": "destination:zuerich-kloten",
              "label": "Kloten",
              "value": "zuerich-kloten",
              "count": 0,
              "selected": false,
              "lat": 47.4495116,
              "lng": 8.5821648
            },
            {
              "id": "destination:bern-koeniz",
              "label": "Köniz",
              "value": "bern-koeniz",
              "count": 0,
              "selected": false,
              "lat": 46.925634,
              "lng": 7.416720599999999
            },
            {
              "id": "destination:ostschweiz-kreuzlingen",
              "label": "Kreuzlingen",
              "value": "ostschweiz-kreuzlingen",
              "count": 0,
              "selected": false,
              "lat": 47.6447397,
              "lng": 9.170785799999999
            },
            {
              "id": "destination:luzern-kriens",
              "label": "Kriens",
              "value": "luzern-kriens",
              "count": 0,
              "selected": false,
              "lat": 47.0341978,
              "lng": 8.277255199999999
            },
            {
              "id": "destination:rigi-kuessnacht",
              "label": "Küssnacht am Rigi",
              "value": "rigi-kuessnacht",
              "count": 0,
              "selected": false,
              "lat": 47.08432370000001,
              "lng": 8.4431621
            },
            {
              "id": "destination:aargau-kuettigen",
              "label": "Küttigen",
              "value": "aargau-kuettigen",
              "count": 0,
              "selected": false,
              "lat": 47.4175999,
              "lng": 8.0472144
            },
            {
              "id": "destination:graubuenden-laax",
              "label": "Laax",
              "value": "graubuenden-laax",
              "count": 0,
              "selected": false,
              "lat": 46.8091625,
              "lng": 9.2607783
            },
            {
              "id": "destination:graubuenden-landquart",
              "label": "Landquart",
              "value": "graubuenden-landquart",
              "count": 0,
              "selected": false,
              "lat": 46.9681937,
              "lng": 9.5626299
            },
            {
              "id": "destination:aargau-laufenburg",
              "label": "Laufenburg",
              "value": "aargau-laufenburg",
              "count": 0,
              "selected": false,
              "lat": 47.5596648,
              "lng": 8.058275799999999
            },
            {
              "id": "destination:lausanne-reisefuehrer",
              "label": "Lausanne",
              "value": "lausanne-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.5196535,
              "lng": 6.6322734
            },
            {
              "id": "destination:berner-oberland-lauterbrunnen",
              "label": "Lauterbrunnen",
              "value": "berner-oberland-lauterbrunnen",
              "count": 0,
              "selected": false,
              "lat": 46.5935058,
              "lng": 7.9090981
            },
            {
              "id": "destination:genfersee-le-chenit",
              "label": "Le Chenit",
              "value": "genfersee-le-chenit",
              "count": 0,
              "selected": false,
              "lat": 46.62247222222222,
              "lng": 6.2500277777777775
            },
            {
              "id": "destination:genf-grand-saconnes",
              "label": "Le Grand-Saconnex",
              "value": "genf-grand-saconnes",
              "count": 0,
              "selected": false,
              "lat": 46.2331904,
              "lng": 6.1231633
            },
            {
              "id": "destination:jura-le-locle",
              "label": "Le Locle",
              "value": "jura-le-locle",
              "count": 0,
              "selected": false,
              "lat": 47.0577195,
              "lng": 6.7487354
            },
            {
              "id": "destination:berner-oberland-lenk",
              "label": "Lenk",
              "value": "berner-oberland-lenk",
              "count": 0,
              "selected": false,
              "lat": 46.45630999999999,
              "lng": 7.445280000000001
            },
            {
              "id": "destination:aargau-lenzburg",
              "label": "Lenzburg",
              "value": "aargau-lenzburg",
              "count": 0,
              "selected": false,
              "lat": 47.387199,
              "lng": 8.185355999999999
            },
            {
              "id": "destination:lenzerheide-reisefuehrer",
              "label": "Lenzerheide",
              "value": "lenzerheide-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.7260018,
              "lng": 9.5577484
            },
            {
              "id": "destination:genfersee-les-diablerets",
              "label": "Les Diablerets",
              "value": "genfersee-les-diablerets",
              "count": 0,
              "selected": false,
              "lat": 46.3127778,
              "lng": 7.198611100000001
            },
            {
              "id": "destination:wallis-leuk",
              "label": "Leuk",
              "value": "wallis-leuk",
              "count": 0,
              "selected": false,
              "lat": 46.3169188,
              "lng": 7.6345834
            },
            {
              "id": "destination:wallis-leukerbad",
              "label": "Leukerbad",
              "value": "wallis-leukerbad",
              "count": 0,
              "selected": false,
              "lat": 46.38002400000001,
              "lng": 7.6288344
            },
            {
              "id": "destination:genfersee-leysin",
              "label": "Leysin",
              "value": "genfersee-leysin",
              "count": 0,
              "selected": false,
              "lat": 46.3435634,
              "lng": 7.012033
            },
            {
              "id": "destination:ost-lichtensteig",
              "label": "Lichtensteig",
              "value": "ost-lichtensteig",
              "count": 0,
              "selected": false,
              "lat": 47.3239036,
              "lng": 9.087684399999999
            },
            {
              "id": "destination:basel-liestal",
              "label": "Liestal",
              "value": "basel-liestal",
              "count": 0,
              "selected": false,
              "lat": 47.48583333333333,
              "lng": 7.73425
            },
            {
              "id": "destination:bern-ligerz",
              "label": "Ligerz",
              "value": "bern-ligerz",
              "count": 0,
              "selected": false,
              "lat": 47.0851233,
              "lng": 7.1368597
            },
            {
              "id": "destination:zuerich-lindau",
              "label": "Lindau",
              "value": "zuerich-lindau",
              "count": 0,
              "selected": false,
              "lat": 47.441938,
              "lng": 8.6716296
            },
            {
              "id": "destination:glarus-linthal",
              "label": "Linthal",
              "value": "glarus-linthal",
              "count": 0,
              "selected": false,
              "lat": 46.9218287,
              "lng": 8.9996438
            },
            {
              "id": "destination:tessin-locarno",
              "label": "Locarno",
              "value": "tessin-locarno",
              "count": 0,
              "selected": false,
              "lat": 46.16699879999999,
              "lng": 8.7942643
            },
            {
              "id": "destination:graubuenden-lostallo",
              "label": "Lostallo",
              "value": "graubuenden-lostallo",
              "count": 0,
              "selected": false,
              "lat": 46.31233,
              "lng": 9.1956818
            },
            {
              "id": "destination:lugano-reisefuehrer",
              "label": "Lugano",
              "value": "lugano-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.0036778,
              "lng": 8.951051999999999
            },
            {
              "id": "destination:surselva-lumnezia",
              "label": "Lumnezia",
              "value": "surselva-lumnezia",
              "count": 0,
              "selected": false,
              "lat": 46.71766,
              "lng": 9.17366
            },
            {
              "id": "destination:luzern-luthern",
              "label": "Luthern",
              "value": "luzern-luthern",
              "count": 0,
              "selected": false,
              "lat": 47.05608333333333,
              "lng": 7.910416666666667
            },
            {
              "id": "destination:genfersee-lutry",
              "label": "Lutry",
              "value": "genfersee-lutry",
              "count": 0,
              "selected": false,
              "lat": 46.5088803,
              "lng": 6.6827638
            },
            {
              "id": "destination:luzern-reisefuehrer",
              "label": "Luzern",
              "value": "luzern-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 47.05016819999999,
              "lng": 8.3093072
            },
            {
              "id": "destination:heidiland-maienfeld",
              "label": "Maienfeld",
              "value": "heidiland-maienfeld",
              "count": 0,
              "selected": false,
              "lat": 47.00571000000001,
              "lng": 9.530813
            },
            {
              "id": "destination:0st-malbun",
              "label": "Malbun",
              "value": "0st-malbun",
              "count": 0,
              "selected": false,
              "lat": 47.10169444444445,
              "lng": 9.609722222222222
            },
            {
              "id": "destination:tessin-malvaglia",
              "label": "Malvaglia",
              "value": "tessin-malvaglia",
              "count": 0,
              "selected": false,
              "lat": 46.41102,
              "lng": 8.981180000000002
            },
            {
              "id": "destination:wallis-martigny",
              "label": "Martigny",
              "value": "wallis-martigny",
              "count": 0,
              "selected": false,
              "lat": 46.1049798,
              "lng": 7.075533399999999
            },
            {
              "id": "destination:matten-interlaken",
              "label": "Matten bei Interlaken",
              "value": "matten-interlaken",
              "count": 0,
              "selected": false,
              "lat": 46.6806354,
              "lng": 7.866636499999998
            },
            {
              "id": "destination:zuerich-meilen",
              "label": "Meilen",
              "value": "zuerich-meilen",
              "count": 0,
              "selected": false,
              "lat": 47.2694361,
              "lng": 8.64875
            },
            {
              "id": "destination:berner-oberland-meiringen-hasliberg",
              "label": "Meiringen | Hasliberg",
              "value": "berner-oberland-meiringen-hasliberg",
              "count": 0,
              "selected": false,
              "lat": 46.7251614,
              "lng": 8.1909081
            },
            {
              "id": "destination:aargau-meisterschwanden",
              "label": "Meisterschwanden",
              "value": "aargau-meisterschwanden",
              "count": 0,
              "selected": false,
              "lat": 47.292027777777776,
              "lng": 8.22475
            },
            {
              "id": "destination:tessin-melide",
              "label": "Melide",
              "value": "tessin-melide",
              "count": 0,
              "selected": false,
              "lat": 45.95483333333333,
              "lng": 8.94675
            },
            {
              "id": "destination:aargau-mellingen",
              "label": "Mellingen",
              "value": "aargau-mellingen",
              "count": 0,
              "selected": false,
              "lat": 47.42008333333333,
              "lng": 8.27288888888889
            },
            {
              "id": "destination:heidiland-mels",
              "label": "Mels",
              "value": "heidiland-mels",
              "count": 0,
              "selected": false,
              "lat": 47.0478375,
              "lng": 9.4224018
            },
            {
              "id": "destination:tessin-miglieglia",
              "label": "Miglieglia",
              "value": "tessin-miglieglia",
              "count": 0,
              "selected": false,
              "lat": 46.0237995,
              "lng": 8.8567138
            },
            {
              "id": "destination:tessin-minusio",
              "label": "Minusio",
              "value": "tessin-minusio",
              "count": 0,
              "selected": false,
              "lat": 46.1764501,
              "lng": 8.8130107
            },
            {
              "id": "destination:montreux-reisefuehrer",
              "label": "Montreux",
              "value": "montreux-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.4312213,
              "lng": 6.9106799
            },
            {
              "id": "destination:wallis-moerel-filet",
              "label": "Mörel Filet",
              "value": "wallis-moerel-filet",
              "count": 0,
              "selected": false,
              "lat": 46.333333,
              "lng": 8.049999999999999
            },
            {
              "id": "destination:luzern-morschach",
              "label": "Morschach",
              "value": "luzern-morschach",
              "count": 0,
              "selected": false,
              "lat": 46.980165,
              "lng": 8.6175219
            },
            {
              "id": "destination:luzern-muotathal",
              "label": "Muotathal",
              "value": "luzern-muotathal",
              "count": 0,
              "selected": false,
              "lat": 46.9740171,
              "lng": 8.7622473
            },
            {
              "id": "destination:berner-oberland-muerren",
              "label": "Mürren",
              "value": "berner-oberland-muerren",
              "count": 0,
              "selected": false,
              "lat": 46.55944239999999,
              "lng": 7.892668899999999
            },
            {
              "id": "destination:jura-murten",
              "label": "Murten",
              "value": "jura-murten",
              "count": 0,
              "selected": false,
              "lat": 46.92922110000001,
              "lng": 7.120184
            },
            {
              "id": "destination:wallis-naters",
              "label": "Naters",
              "value": "wallis-naters",
              "count": 0,
              "selected": false,
              "lat": 46.3239282,
              "lng": 7.9916569
            },
            {
              "id": "destination:wallis-nendaz",
              "label": "Nendaz",
              "value": "wallis-nendaz",
              "count": 0,
              "selected": false,
              "lat": 46.18413888888889,
              "lng": 7.294583333333334
            },
            {
              "id": "destination:jura-neuchatel",
              "label": "Neuchâtel",
              "value": "jura-neuchatel",
              "count": 0,
              "selected": false,
              "lat": 46.9899874,
              "lng": 6.9292732
            },
            {
              "id": "destination:luzern-neudorf",
              "label": "Neudorf",
              "value": "luzern-neudorf",
              "count": 0,
              "selected": false,
              "lat": 47.1768919,
              "lng": 8.2090818
            },
            {
              "id": "destination:ostschweiz-neuhausen-am-rheinfall",
              "label": "Neuhausen am Rheinfall",
              "value": "ostschweiz-neuhausen-am-rheinfall",
              "count": 0,
              "selected": false,
              "lat": 47.6837423,
              "lng": 8.6126098
            },
            {
              "id": "destination:aargau-niederwil",
              "label": "Niederwil",
              "value": "aargau-niederwil",
              "count": 0,
              "selected": false,
              "lat": 47.3773998,
              "lng": 8.2952607
            },
            {
              "id": "destination:zuerich-oberaegeri",
              "label": "Oberägeri",
              "value": "zuerich-oberaegeri",
              "count": 0,
              "selected": false,
              "lat": 47.12888888888889,
              "lng": 8.63411111111111
            },
            {
              "id": "destination:bern-oberhofen-thunersee",
              "label": "Oberhofen am Thunersee",
              "value": "bern-oberhofen-thunersee",
              "count": 0,
              "selected": false,
              "lat": 46.726111111111116,
              "lng": 7.678333333333334
            },
            {
              "id": "destination:basel-olten",
              "label": "Olten",
              "value": "basel-olten",
              "count": 0,
              "selected": false,
              "lat": 47.3499624,
              "lng": 7.9037033
            },
            {
              "id": "destination:opfikon-zuerich",
              "label": "Opfikon",
              "value": "opfikon-zuerich",
              "count": 0,
              "selected": false,
              "lat": 47.4346801,
              "lng": 8.567109799999999
            },
            {
              "id": "destination:tessin-pazzallo",
              "label": "Pazzallo",
              "value": "tessin-pazzallo",
              "count": 0,
              "selected": false,
              "lat": 45.98341190000001,
              "lng": 8.937338000000002
            },
            {
              "id": "destination:heidiland-pfaefers",
              "label": "Pfäfers",
              "value": "heidiland-pfaefers",
              "count": 0,
              "selected": false,
              "lat": 46.990488,
              "lng": 9.503193900000001
            },
            {
              "id": "destination:luzern-pfaeffikon-sz",
              "label": "Pfäffikon SZ",
              "value": "luzern-pfaeffikon-sz",
              "count": 0,
              "selected": false,
              "lat": 47.2014965,
              "lng": 8.7809154
            },
            {
              "id": "destination:fribourg-plaffeien",
              "label": "Plaffeien",
              "value": "fribourg-plaffeien",
              "count": 0,
              "selected": false,
              "lat": 46.68919444444444,
              "lng": 7.303333333333333
            },
            {
              "id": "destination:graubuenden-pontresina",
              "label": "Pontresina",
              "value": "graubuenden-pontresina",
              "count": 0,
              "selected": false,
              "lat": 46.4929957,
              "lng": 9.9024964
            },
            {
              "id": "destination:jura-porrentruy",
              "label": "Porrentruy",
              "value": "jura-porrentruy",
              "count": 0,
              "selected": false,
              "lat": 47.416647,
              "lng": 7.0765657
            },
            {
              "id": "destination:wallis-port-valais",
              "label": "Port-Valais",
              "value": "wallis-port-valais",
              "count": 0,
              "selected": false,
              "lat": 46.3830132,
              "lng": 6.860900699999999
            },
            {
              "id": "destination:genfersee-prangins",
              "label": "Prangins",
              "value": "genfersee-prangins",
              "count": 0,
              "selected": false,
              "lat": 46.39886111111111,
              "lng": 6.252
            },
            {
              "id": "destination:basel-pratteln",
              "label": "Pratteln",
              "value": "basel-pratteln",
              "count": 0,
              "selected": false,
              "lat": 47.52027777777778,
              "lng": 7.68825
            },
            {
              "id": "destination:praettigau-graubuenden",
              "label": "Prättigau",
              "value": "praettigau-graubuenden",
              "count": 0,
              "selected": false,
              "lat": 46.91055619999999,
              "lng": 9.8115566
            },
            {
              "id": "destination:genfersee-puidoux",
              "label": "Puidoux",
              "value": "genfersee-puidoux",
              "count": 0,
              "selected": false,
              "lat": 46.4988452,
              "lng": 6.7691772
            },
            {
              "id": "destination:genfersee-pully",
              "label": "Pully",
              "value": "genfersee-pully",
              "count": 0,
              "selected": false,
              "lat": 46.5092681,
              "lng": 6.6654949
            },
            {
              "id": "destination:heidiland-quarten",
              "label": "Quarten",
              "value": "heidiland-quarten",
              "count": 0,
              "selected": false,
              "lat": 47.1132054,
              "lng": 9.2515678
            },
            {
              "id": "destination:ost-rapperswil-jona",
              "label": "Rapperswil-Jona",
              "value": "ost-rapperswil-jona",
              "count": 0,
              "selected": false,
              "lat": 47.2266239,
              "lng": 8.818437399999999
            },
            {
              "id": "destination:uri-realp",
              "label": "Realp",
              "value": "uri-realp",
              "count": 0,
              "selected": false,
              "lat": 46.597944444444444,
              "lng": 8.499833333333333
            },
            {
              "id": "destination:berner-oberland-reichenbach-kandertal",
              "label": "Reichenbach im Kandertal",
              "value": "berner-oberland-reichenbach-kandertal",
              "count": 0,
              "selected": false,
              "lat": 46.6254387,
              "lng": 7.6940529
            },
            {
              "id": "destination:aargau-remigen",
              "label": "Remigen",
              "value": "aargau-remigen",
              "count": 0,
              "selected": false,
              "lat": 47.51576840000001,
              "lng": 8.1893084
            },
            {
              "id": "destination:aargau-rheinfelden",
              "label": "Rheinfelden",
              "value": "aargau-rheinfelden",
              "count": 0,
              "selected": false,
              "lat": 47.55219,
              "lng": 7.7922914
            },
            {
              "id": "destination:wallis-riddes",
              "label": "Riddes",
              "value": "wallis-riddes",
              "count": 0,
              "selected": false,
              "lat": 46.1731437,
              "lng": 7.222514899999998
            },
            {
              "id": "destination:genfersee-rivaz",
              "label": "Rivaz",
              "value": "genfersee-rivaz",
              "count": 0,
              "selected": false,
              "lat": 46.4764133,
              "lng": 6.778613099999999
            },
            {
              "id": "destination:tessin-rivera",
              "label": "Rivera",
              "value": "tessin-rivera",
              "count": 0,
              "selected": false,
              "lat": 46.1266496,
              "lng": 8.9232939
            },
            {
              "id": "destination:tessin-riviera",
              "label": "Riviera",
              "value": "tessin-riviera",
              "count": 0,
              "selected": false,
              "lat": 46.3165999,
              "lng": 8.999818200000002
            },
            {
              "id": "destination:ostschweiz-romanshorn",
              "label": "Romanshorn",
              "value": "ostschweiz-romanshorn",
              "count": 0,
              "selected": false,
              "lat": 47.5657078,
              "lng": 9.3771959
            },
            {
              "id": "destination:fribourg-romont",
              "label": "Romont",
              "value": "fribourg-romont",
              "count": 0,
              "selected": false,
              "lat": 46.693001011936424,
              "lng": 6.911138926156306
            },
            {
              "id": "destination:ost-rorschach",
              "label": "Rorschach",
              "value": "ost-rorschach",
              "count": 0,
              "selected": false,
              "lat": 47.4788825,
              "lng": 9.4916808
            },
            {
              "id": "destination:genfersee-rossiniere",
              "label": "Rossinière",
              "value": "genfersee-rossiniere",
              "count": 0,
              "selected": false,
              "lat": 46.46710420000001,
              "lng": 7.0828407
            },
            {
              "id": "destination:engadin-s-chanf",
              "label": "S-chanf",
              "value": "engadin-s-chanf",
              "count": 0,
              "selected": false,
              "lat": 46.61105555555556,
              "lng": 9.986833333333333
            },
            {
              "id": "destination:wallis-saas-grund",
              "label": "Saas Grund",
              "value": "wallis-saas-grund",
              "count": 0,
              "selected": false,
              "lat": 46.12757,
              "lng": 7.937138000000003
            },
            {
              "id": "destination:saas-fee-reisefuehrer",
              "label": "Saas-Fee",
              "value": "saas-fee-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.1091073,
              "lng": 7.9297122
            },
            {
              "id": "destination:luzern-sachseln",
              "label": "Sachseln",
              "value": "luzern-sachseln",
              "count": 0,
              "selected": false,
              "lat": 46.8671605,
              "lng": 8.2393778
            },
            {
              "id": "destination:bern-saint-imier",
              "label": "Saint Imier",
              "value": "bern-saint-imier",
              "count": 0,
              "selected": false,
              "lat": 47.1522207,
              "lng": 6.9962252
            },
            {
              "id": "destination:jura-saint-ursanne",
              "label": "Saint-Ursanne",
              "value": "jura-saint-ursanne",
              "count": 0,
              "selected": false,
              "lat": 47.3642815,
              "lng": 7.1542802
            },
            {
              "id": "destination:wallis-salgesch",
              "label": "Salgesch",
              "value": "wallis-salgesch",
              "count": 0,
              "selected": false,
              "lat": 46.3117718,
              "lng": 7.570470899999999
            },
            {
              "id": "destination:engadin-samedan",
              "label": "Samedan",
              "value": "engadin-samedan",
              "count": 0,
              "selected": false,
              "lat": 46.5339944,
              "lng": 9.8729339
            },
            {
              "id": "destination:engadin-samnaun",
              "label": "Samnaun",
              "value": "engadin-samnaun",
              "count": 0,
              "selected": false,
              "lat": 46.9497817,
              "lng": 10.3686809
            },
            {
              "id": "destination:zuerich-samstagern",
              "label": "Samstagern",
              "value": "zuerich-samstagern",
              "count": 0,
              "selected": false,
              "lat": 47.191667,
              "lng": 8.682167000000002
            },
            {
              "id": "destination:graubuenden-san-bernardino",
              "label": "San Bernardino",
              "value": "graubuenden-san-bernardino",
              "count": 0,
              "selected": false,
              "lat": 46.46325,
              "lng": 9.190861111111111
            },
            {
              "id": "destination:heidiland-sargans",
              "label": "Sargans",
              "value": "heidiland-sargans",
              "count": 0,
              "selected": false,
              "lat": 47.0478519,
              "lng": 9.4406105
            },
            {
              "id": "destination:luzern-sarnen",
              "label": "Sarnen",
              "value": "luzern-sarnen",
              "count": 0,
              "selected": false,
              "lat": 46.90002777777778,
              "lng": 8.186
            },
            {
              "id": "destination:schwyz-sattel",
              "label": "Sattel",
              "value": "schwyz-sattel",
              "count": 0,
              "selected": false,
              "lat": 47.08330555555556,
              "lng": 8.636777777777777
            },
            {
              "id": "destination:berner-oberland-saxeten",
              "label": "Saxeten",
              "value": "berner-oberland-saxeten",
              "count": 0,
              "selected": false,
              "lat": 46.6363957,
              "lng": 7.8311603
            },
            {
              "id": "destination:ost-schaffhausen",
              "label": "Schaffhausen",
              "value": "ost-schaffhausen",
              "count": 0,
              "selected": false,
              "lat": 47.6958897,
              "lng": 8.6380488
            },
            {
              "id": "destination:uri-schattdorf",
              "label": "Schattdorf",
              "value": "uri-schattdorf",
              "count": 0,
              "selected": false,
              "lat": 46.8642346,
              "lng": 8.648159399999999
            },
            {
              "id": "destination:aargau-schinznach",
              "label": "Schinznach",
              "value": "aargau-schinznach",
              "count": 0,
              "selected": false,
              "lat": 47.4474737,
              "lng": 8.1427966
            },
            {
              "id": "destination:aargau-schupfart",
              "label": "Schupfart",
              "value": "aargau-schupfart",
              "count": 0,
              "selected": false,
              "lat": 47.5134984,
              "lng": 7.9653934
            },
            {
              "id": "destination:bern-schwarzenburg",
              "label": "Schwarzenburg",
              "value": "bern-schwarzenburg",
              "count": 0,
              "selected": false,
              "lat": 46.8184541,
              "lng": 7.341120300000001
            },
            {
              "id": "destination:schweiz",
              "label": "Schweiz",
              "value": "schweiz",
              "count": 0,
              "selected": false,
              "lat": 46.818188,
              "lng": 8.227511999999999
            },
            {
              "id": "destination:ostschweiz-schwende-ruete",
              "label": "Schwende-Rüte",
              "value": "ostschweiz-schwende-ruete",
              "count": 0,
              "selected": false,
              "lat": 47.3210071,
              "lng": 9.4300902
            },
            {
              "id": "destination:luzern-schwyz",
              "label": "Schwyz",
              "value": "luzern-schwyz",
              "count": 0,
              "selected": false,
              "lat": 47.0207138,
              "lng": 8.652988400000002
            },
            {
              "id": "destination:engadin-scuol",
              "label": "Scuol",
              "value": "engadin-scuol",
              "count": 0,
              "selected": false,
              "lat": 46.799179,
              "lng": 10.2974457
            },
            {
              "id": "destination:graubuenden-sedrun",
              "label": "Sedrun",
              "value": "graubuenden-sedrun",
              "count": 0,
              "selected": false,
              "lat": 46.68022222222222,
              "lng": 8.775361111111112
            },
            {
              "id": "destination:luzern-seelisberg",
              "label": "Seelisberg",
              "value": "luzern-seelisberg",
              "count": 0,
              "selected": false,
              "lat": 46.962138888888894,
              "lng": 8.575305555555556
            },
            {
              "id": "destination:engadin-sent",
              "label": "Sent",
              "value": "engadin-sent",
              "count": 0,
              "selected": false,
              "lat": 46.8181833,
              "lng": 10.3680722
            },
            {
              "id": "destination:wallis-sierre",
              "label": "Sierre",
              "value": "wallis-sierre",
              "count": 0,
              "selected": false,
              "lat": 46.29413110000001,
              "lng": 7.533536199999999
            },
            {
              "id": "destination:bern-sigriswil",
              "label": "Sigriswil",
              "value": "bern-sigriswil",
              "count": 0,
              "selected": false,
              "lat": 46.7168545,
              "lng": 7.7132831
            },
            {
              "id": "destination:engadin-sils",
              "label": "Sils",
              "value": "engadin-sils",
              "count": 0,
              "selected": false,
              "lat": 46.4321555,
              "lng": 9.7656899
            },
            {
              "id": "destination:engadin-silvaplana",
              "label": "Silvaplana",
              "value": "engadin-silvaplana",
              "count": 0,
              "selected": false,
              "lat": 46.4599864,
              "lng": 9.7955009
            },
            {
              "id": "destination:wallis-simplon",
              "label": "Simplon",
              "value": "wallis-simplon",
              "count": 0,
              "selected": false,
              "lat": 46.1952777,
              "lng": 8.0559172
            },
            {
              "id": "destination:wallis-sion",
              "label": "Sion",
              "value": "wallis-sion",
              "count": 0,
              "selected": false,
              "lat": 46.2331221,
              "lng": 7.360625999999999
            },
            {
              "id": "destination:basel-solothurn",
              "label": "Solothurn",
              "value": "basel-solothurn",
              "count": 0,
              "selected": false,
              "lat": 47.2088348,
              "lng": 7.532291
            },
            {
              "id": "destination:bern-spiez",
              "label": "Spiez",
              "value": "bern-spiez",
              "count": 0,
              "selected": false,
              "lat": 46.6884826,
              "lng": 7.6791524
            },
            {
              "id": "destination:graubuenden-spluegen",
              "label": "Splügen",
              "value": "graubuenden-spluegen",
              "count": 0,
              "selected": false,
              "lat": 46.5528268,
              "lng": 9.3233581
            },
            {
              "id": "destination:graubuenden-st-antoenien",
              "label": "St. Antönien",
              "value": "graubuenden-st-antoenien",
              "count": 0,
              "selected": false,
              "lat": 46.96958739999999,
              "lng": 9.8142825
            },
            {
              "id": "destination:reisefuehrer-st-gallen",
              "label": "St. Gallen",
              "value": "reisefuehrer-st-gallen",
              "count": 0,
              "selected": false,
              "lat": 47.4244818,
              "lng": 9.3767173
            },
            {
              "id": "destination:stmoritz-reisefuehrer",
              "label": "St. Moritz",
              "value": "stmoritz-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.4907973,
              "lng": 9.8355079
            },
            {
              "id": "destination:fribourg-stadt-fribourg",
              "label": "Stadt Fribourg",
              "value": "fribourg-stadt-fribourg",
              "count": 0,
              "selected": false,
              "lat": 46.8032127,
              "lng": 7.1511741
            },
            {
              "id": "destination:genf-genf",
              "label": "Stadt Genf",
              "value": "genf-genf",
              "count": 0,
              "selected": false,
              "lat": 46.2043907,
              "lng": 6.1431577
            },
            {
              "id": "destination:zuerich-stammheim-zh",
              "label": "Stammheim ZH",
              "value": "zuerich-stammheim-zh",
              "count": 0,
              "selected": false,
              "lat": 47.63775,
              "lng": 8.79711111111111
            },
            {
              "id": "destination:luzern-stans",
              "label": "Stans",
              "value": "luzern-stans",
              "count": 0,
              "selected": false,
              "lat": 46.9571926,
              "lng": 8.3659672
            },
            {
              "id": "destination:thurgau-steckborn",
              "label": "Steckborn",
              "value": "thurgau-steckborn",
              "count": 0,
              "selected": false,
              "lat": 47.66730555555555,
              "lng": 8.982555555555555
            },
            {
              "id": "destination:bern-steffisburg",
              "label": "Steffisburg",
              "value": "bern-steffisburg",
              "count": 0,
              "selected": false,
              "lat": 46.7788438,
              "lng": 7.6347832
            },
            {
              "id": "destination:ost-stein-am-rhein",
              "label": "Stein am Rhein",
              "value": "ost-stein-am-rhein",
              "count": 0,
              "selected": false,
              "lat": 47.6558193,
              "lng": 8.8579556
            },
            {
              "id": "destination:ost-stein-ar",
              "label": "Stein AR",
              "value": "ost-stein-ar",
              "count": 0,
              "selected": false,
              "lat": 47.3744573,
              "lng": 9.3448602
            },
            {
              "id": "destination:luzern-sursee",
              "label": "Sursee",
              "value": "luzern-sursee",
              "count": 0,
              "selected": false,
              "lat": 47.17347222222222,
              "lng": 8.106166666666667
            },
            {
              "id": "destination:wallis-taesch",
              "label": "Täsch",
              "value": "wallis-taesch",
              "count": 0,
              "selected": false,
              "lat": 46.0679692,
              "lng": 7.775904499999999
            },
            {
              "id": "destination:tessin-reisefuehrer",
              "label": "Tessin",
              "value": "tessin-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.16699879999999,
              "lng": 8.7942643
            },
            {
              "id": "destination:aargau-thalheim",
              "label": "Thalheim",
              "value": "aargau-thalheim",
              "count": 0,
              "selected": false,
              "lat": 47.438287,
              "lng": 8.1035688
            },
            {
              "id": "destination:bern-thun",
              "label": "Thun",
              "value": "bern-thun",
              "count": 0,
              "selected": false,
              "lat": 46.7579868,
              "lng": 7.6279881
            },
            {
              "id": "destination:viamala-thusis",
              "label": "Thusis",
              "value": "viamala-thusis",
              "count": 0,
              "selected": false,
              "lat": 46.6960141,
              "lng": 9.439494
            },
            {
              "id": "destination:wallis-trient",
              "label": "Trient",
              "value": "wallis-trient",
              "count": 0,
              "selected": false,
              "lat": 46.056999999999995,
              "lng": 6.995
            },
            {
              "id": "destination:ost-triesenberg",
              "label": "Triesenberg",
              "value": "ost-triesenberg",
              "count": 0,
              "selected": false,
              "lat": 47.1182126,
              "lng": 9.5434092
            },
            {
              "id": "destination:bern-unterseen",
              "label": "Unterseen",
              "value": "bern-unterseen",
              "count": 0,
              "selected": false,
              "lat": 46.6852116,
              "lng": 7.848157400000001
            },
            {
              "id": "destination:ost-unterterzen",
              "label": "Unterterzen",
              "value": "ost-unterterzen",
              "count": 0,
              "selected": false,
              "lat": 47.11307,
              "lng": 9.251159999999999
            },
            {
              "id": "destination:ost-vaduz",
              "label": "Vaduz",
              "value": "ost-vaduz",
              "count": 0,
              "selected": false,
              "lat": 47.1410303,
              "lng": 9.5209277
            },
            {
              "id": "destination:wallis-val-danniviers",
              "label": "Val d’Anniviers",
              "value": "wallis-val-danniviers",
              "count": 0,
              "selected": false,
              "lat": 46.2,
              "lng": 7.6
            },
            {
              "id": "destination:engadin-val-muestair",
              "label": "Val Müstair",
              "value": "engadin-val-muestair",
              "count": 0,
              "selected": false,
              "lat": 46.60628029999999,
              "lng": 10.3804262
            },
            {
              "id": "destination:genfersee-vallorbe",
              "label": "Vallorbe",
              "value": "genfersee-vallorbe",
              "count": 0,
              "selected": false,
              "lat": 46.71199650000001,
              "lng": 6.3791102
            },
            {
              "id": "destination:graubuenden-vals",
              "label": "Vals",
              "value": "graubuenden-vals",
              "count": 0,
              "selected": false,
              "lat": 46.6183577,
              "lng": 9.1800537
            },
            {
              "id": "destination:engadin-valsot",
              "label": "Valsot",
              "value": "engadin-valsot",
              "count": 0,
              "selected": false,
              "lat": 46.8579383,
              "lng": 10.423424
            },
            {
              "id": "destination:verbier-reisefuehrer",
              "label": "Verbier",
              "value": "verbier-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.0960814,
              "lng": 7.2285512
            },
            {
              "id": "destination:genf-versoix",
              "label": "Versoix",
              "value": "genf-versoix",
              "count": 0,
              "selected": false,
              "lat": 46.2876938,
              "lng": 6.1657813
            },
            {
              "id": "destination:tessin-verzasca",
              "label": "Verzasca",
              "value": "tessin-verzasca",
              "count": 0,
              "selected": false,
              "lat": 46.31107309999999,
              "lng": 8.817749599999999
            },
            {
              "id": "destination:genfersee-vevey",
              "label": "Vevey",
              "value": "genfersee-vevey",
              "count": 0,
              "selected": false,
              "lat": 46.4628333,
              "lng": 6.8419192
            },
            {
              "id": "destination:wallis-veysonnaz",
              "label": "Veysonnaz",
              "value": "wallis-veysonnaz",
              "count": 0,
              "selected": false,
              "lat": 46.19533333333333,
              "lng": 7.338805555555555
            },
            {
              "id": "destination:genfersee-veytaux",
              "label": "Veytaux",
              "value": "genfersee-veytaux",
              "count": 0,
              "selected": false,
              "lat": 46.42071019999999,
              "lng": 6.9286409
            },
            {
              "id": "destination:genfersee-villars-sur-ollon",
              "label": "Villars-sur-Ollon",
              "value": "genfersee-villars-sur-ollon",
              "count": 0,
              "selected": false,
              "lat": 46.2984285,
              "lng": 7.0550134
            },
            {
              "id": "destination:genfersee-villeneuve",
              "label": "Villeneuve",
              "value": "genfersee-villeneuve",
              "count": 0,
              "selected": false,
              "lat": 46.39402777777778,
              "lng": 6.930638888888889
            },
            {
              "id": "destination:aargau-villigen",
              "label": "Villigen",
              "value": "aargau-villigen",
              "count": 0,
              "selected": false,
              "lat": 47.5262164,
              "lng": 8.2147881
            },
            {
              "id": "destination:heidiland-vilters-wangs",
              "label": "Vilters Wangs",
              "value": "heidiland-vilters-wangs",
              "count": 0,
              "selected": false,
              "lat": 47.0299988,
              "lng": 9.4484028
            },
            {
              "id": "destination:tessin-vira-gambarogno",
              "label": "Vira Gambarogno",
              "value": "tessin-vira-gambarogno",
              "count": 0,
              "selected": false,
              "lat": 46.1453,
              "lng": 8.84996
            },
            {
              "id": "destination:wallis-visp",
              "label": "Visp",
              "value": "wallis-visp",
              "count": 0,
              "selected": false,
              "lat": 46.2947277,
              "lng": 7.882120400000001
            },
            {
              "id": "destination:vitznau",
              "label": "Vitznau",
              "value": "vitznau",
              "count": 0,
              "selected": false,
              "lat": 47.0094012,
              "lng": 8.482598
            },
            {
              "id": "destination:zuerich-waedenswil",
              "label": "Wädenswil",
              "value": "zuerich-waedenswil",
              "count": 0,
              "selected": false,
              "lat": 47.23013888888889,
              "lng": 8.66638888888889
            },
            {
              "id": "destination:heidiland-walenstadt",
              "label": "Walenstadt",
              "value": "heidiland-walenstadt",
              "count": 0,
              "selected": false,
              "lat": 47.12398,
              "lng": 9.31603
            },
            {
              "id": "destination:aargau-wallbach",
              "label": "Wallbach",
              "value": "aargau-wallbach",
              "count": 0,
              "selected": false,
              "lat": 47.5591058,
              "lng": 7.9042193
            },
            {
              "id": "destination:ostschweiz-weesen",
              "label": "Weesen",
              "value": "ostschweiz-weesen",
              "count": 0,
              "selected": false,
              "lat": 47.1362592,
              "lng": 9.1052748
            },
            {
              "id": "destination:luzern-weggis",
              "label": "Weggis",
              "value": "luzern-weggis",
              "count": 0,
              "selected": false,
              "lat": 47.03597222222222,
              "lng": 8.424249999999999
            },
            {
              "id": "destination:ost-weinfelden",
              "label": "Weinfelden",
              "value": "ost-weinfelden",
              "count": 0,
              "selected": false,
              "lat": 47.56766666666667,
              "lng": 9.110277777777778
            },
            {
              "id": "destination:berner-oberland-wengen",
              "label": "Wengen",
              "value": "berner-oberland-wengen",
              "count": 0,
              "selected": false,
              "lat": 46.6054335,
              "lng": 7.921539900000001
            },
            {
              "id": "destination:stgallen-wil",
              "label": "Wil",
              "value": "stgallen-wil",
              "count": 0,
              "selected": false,
              "lat": 47.46769444444445,
              "lng": 9.050194444444445
            },
            {
              "id": "destination:bern-wilderswil",
              "label": "Wilderswil",
              "value": "bern-wilderswil",
              "count": 0,
              "selected": false,
              "lat": 46.6652174,
              "lng": 7.8689183
            },
            {
              "id": "destination:ostschweiz-alt-st-johann",
              "label": "Wildhaus - Alt  St.Johann",
              "value": "ostschweiz-alt-st-johann",
              "count": 0,
              "selected": false,
              "lat": 47.1972495,
              "lng": 9.3082874
            },
            {
              "id": "destination:luzern-willisau",
              "label": "Willisau",
              "value": "luzern-willisau",
              "count": 0,
              "selected": false,
              "lat": 47.125305555555556,
              "lng": 7.992166666666667
            },
            {
              "id": "destination:zuerich-winterthur",
              "label": "Winterthur",
              "value": "zuerich-winterthur",
              "count": 0,
              "selected": false,
              "lat": 47.4988196,
              "lng": 8.723688899999999
            },
            {
              "id": "destination:vierwaldstaettersee-wolfenschiessen",
              "label": "Wolfenschiessen",
              "value": "vierwaldstaettersee-wolfenschiessen",
              "count": 0,
              "selected": false,
              "lat": 46.9081639,
              "lng": 8.3959084
            },
            {
              "id": "destination:aargau-woelflinswil",
              "label": "Wölflinswil",
              "value": "aargau-woelflinswil",
              "count": 0,
              "selected": false,
              "lat": 47.4610461,
              "lng": 7.998044999999999
            },
            {
              "id": "destination:waadtland-yverdon-les-bains",
              "label": "Yverdon-les-Bains",
              "value": "waadtland-yverdon-les-bains",
              "count": 0,
              "selected": false,
              "lat": 46.78219444444444,
              "lng": 6.643166666666666
            },
            {
              "id": "destination:aargau-zeiningen",
              "label": "Zeiningen",
              "value": "aargau-zeiningen",
              "count": 0,
              "selected": false,
              "lat": 47.5432658,
              "lng": 7.872120499999999
            },
            {
              "id": "destination:zermatt-reisefuehrer",
              "label": "Zermatt",
              "value": "zermatt-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 46.0207133,
              "lng": 7.749117000000001
            },
            {
              "id": "destination:aargau-zofingen",
              "label": "Zofingen",
              "value": "aargau-zofingen",
              "count": 0,
              "selected": false,
              "lat": 47.28958333333333,
              "lng": 7.943944444444445
            },
            {
              "id": "destination:zuerich-zug",
              "label": "Zug",
              "value": "zuerich-zug",
              "count": 0,
              "selected": false,
              "lat": 47.1661672,
              "lng": 8.5154946
            },
            {
              "id": "destination:engadin-zuoz",
              "label": "Zuoz",
              "value": "engadin-zuoz",
              "count": 0,
              "selected": false,
              "lat": 46.6029209,
              "lng": 9.959993299999999
            },
            {
              "id": "destination:zuerich-reisefuehrer",
              "label": "Zürich",
              "value": "zuerich-reisefuehrer",
              "count": 0,
              "selected": false,
              "lat": 47.3768866,
              "lng": 8.541694
            },
            {
              "id": "destination:berner-oberland-zweisimmen",
              "label": "Zweisimmen",
              "value": "berner-oberland-zweisimmen",
              "count": 0,
              "selected": false,
              "lat": 46.5540893,
              "lng": 7.372062799999999
            }
          ]
        },
        {
          "id": "accessibility",
          "type": "checkbox",
          "title": "Barrierefreiheit",
          "param": "tags",
          "options": [
            {
              "id": "wheelchair",
              "label": "Rollstuhlgängig",
              "value": "wheelchair",
              "count": 739,
              "selected": false
            },
            {
              "id": "stroller",
              "label": "Kinderwagen",
              "value": "stroller",
              "count": 4,
              "selected": false
            },
            {
              "id": "dog_friendly",
              "label": "Hundefreundlich",
              "value": "dog_friendly",
              "count": 1080,
              "selected": false
            },
            {
              "id": "public_transport",
              "label": "ÖV erreichbar",
              "value": "public_transport",
              "count": 15,
              "selected": false
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
              "id": "free",
              "label": "Kostenlos",
              "value": "free",
              "count": 1650,
              "selected": false
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
              "id": "families",
              "label": "Familien",
              "value": "families",
              "count": 910,
              "selected": false
            },
            {
              "id": "all_ages",
              "label": "Alle Altersgruppen",
              "value": "all_ages",
              "count": 1205,
              "selected": false
            },
            {
              "id": "toddler_friendly",
              "label": "Kleinkinder",
              "value": "toddler_friendly",
              "count": 12,
              "selected": false
            },
            {
              "id": "kids_6plus",
              "label": "Kinder ab 6",
              "value": "kids_6plus",
              "count": 53,
              "selected": false
            },
            {
              "id": "kids_12plus",
              "label": "Kinder ab 12",
              "value": "kids_12plus",
              "count": 0,
              "selected": false
            }
          ]
        },
        {
          "id": "fireplaces.amenities",
          "type": "checkbox",
          "title": "Ausstattung",
          "param": "tags",
          "options": [
            {
              "id": "shelter",
              "label": "Unterstand",
              "value": "shelter",
              "count": 665,
              "selected": false
            },
            {
              "id": "toilets",
              "label": "Toiletten",
              "value": "toilets",
              "count": 686,
              "selected": false
            },
            {
              "id": "playground_nearby",
              "label": "Spielplatz",
              "value": "playground_nearby",
              "count": 263,
              "selected": false
            },
            {
              "id": "picnic_area",
              "label": "Picknickplatz",
              "value": "picnic_area",
              "count": 891,
              "selected": false
            },
            {
              "id": "parking",
              "label": "Parkplatz",
              "value": "parking",
              "count": 936,
              "selected": false
            },
            {
              "id": "drinking_water",
              "label": "Drinking Water",
              "value": "drinking_water",
              "count": 588,
              "selected": false
            }
          ]
        }
      ]
    }
  ],
  "sections": [
    {
      "id": "non_bookable_grid",
      "component": "non_bookable_grid",
      "title": "Grillstellen",
      "data": [
        {
          "id": "69990f8e-edd4-4ee0-89d0-ed2392074dd4",
          "type": "non-bookable",
          "title": "Zeiher Homberg",
          "imageUrl": "https://api.grillstelle.ch/images/817/1754.jpg",
          "subtitle": "Thalheim",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/69990f8e-edd4-4ee0-89d0-ed2392074dd4",
          "webPath": null,
          "lat": 47.458419,
          "lng": 8.093979
        },
        {
          "id": "a675f425-47f2-453c-b3cd-5d958925f759",
          "type": "non-bookable",
          "title": "Hammerweg",
          "imageUrl": "https://api.grillstelle.ch/images/976/2218.jpg",
          "subtitle": "Wallisellen",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/a675f425-47f2-453c-b3cd-5d958925f759",
          "webPath": null,
          "lat": 47.412015,
          "lng": 8.58917
        },
        {
          "id": "5eb773e2-5bce-4b0a-9aab-e439e6dfaffe",
          "type": "non-bookable",
          "title": "Am Landsberg 39, 8330 Pfäffikon, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/119/220.jpg",
          "subtitle": "Pfäffikon",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/5eb773e2-5bce-4b0a-9aab-e439e6dfaffe",
          "webPath": null,
          "lat": 47.373882,
          "lng": 8.784407
        },
        {
          "id": "f8341208-9c59-45e6-96dc-68473872d0b6",
          "type": "non-bookable",
          "title": "Unter dem Birg",
          "imageUrl": "https://api.grillstelle.ch/images/1259/2909.jpg",
          "subtitle": "Adelboden",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/f8341208-9c59-45e6-96dc-68473872d0b6",
          "webPath": null,
          "lat": 46.456583,
          "lng": 7.564135
        },
        {
          "id": "3b5c97e0-305e-4778-baf0-2daf874af753",
          "type": "non-bookable",
          "title": "Unnamed Road, 9220 Bischofszell, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/977/2220.jpg",
          "subtitle": "Bischofszell",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/3b5c97e0-305e-4778-baf0-2daf874af753",
          "webPath": null,
          "lat": 47.479093,
          "lng": 9.209406
        },
        {
          "id": "07c565da-fd2d-4191-935c-b19a90b3d7e7",
          "type": "non-bookable",
          "title": "Wassergrueb 1210, 8604 Volketswil, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/1735/4131.jpg",
          "subtitle": "Volketswil",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/07c565da-fd2d-4191-935c-b19a90b3d7e7",
          "webPath": null,
          "lat": 47.41038,
          "lng": 8.673345
        },
        {
          "id": "4b9015d6-3ba7-4e95-8b1d-0e7db35a50fb",
          "type": "non-bookable",
          "title": "Schwendistrasse 12, 8615 Freudwil, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/1738/4139.jpg",
          "subtitle": "Freudwil",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/4b9015d6-3ba7-4e95-8b1d-0e7db35a50fb",
          "webPath": null,
          "lat": 47.37796,
          "lng": 8.735209
        },
        {
          "id": "008e85ce-3740-478e-999f-11207810bbfc",
          "type": "non-bookable",
          "title": "5JJR+75 Wädenswil, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/1742/4154.jpg",
          "subtitle": "ZH",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/008e85ce-3740-478e-999f-11207810bbfc",
          "webPath": null,
          "lat": 47.180667,
          "lng": 8.6405
        },
        {
          "id": "3253a65a-c6e9-4c76-8b0d-bdce1c5eaf39",
          "type": "non-bookable",
          "title": "Eschenbergstrasse 33, 8400 Winterthur, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/1758/4195.jpg",
          "subtitle": "Winterthur",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/3253a65a-c6e9-4c76-8b0d-bdce1c5eaf39",
          "webPath": null,
          "lat": 47.485102,
          "lng": 8.741418
        },
        {
          "id": "7d017781-c27f-4982-a9f0-ff217891d38d",
          "type": "non-bookable",
          "title": "Grillstelle, Hütte Eschenberg",
          "imageUrl": "https://api.grillstelle.ch/images/1760/4204.jpg",
          "subtitle": "Winterthur",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/7d017781-c27f-4982-a9f0-ff217891d38d",
          "webPath": null,
          "lat": 47.482437,
          "lng": 8.730399
        },
        {
          "id": "41d4a8c7-99b6-4f62-b4d3-427c3803180e",
          "type": "non-bookable",
          "title": "Grillstelle, Thalwil Seeanlange 1",
          "imageUrl": "https://api.grillstelle.ch/images/1753/4183.jpg",
          "subtitle": "Thalwil",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/41d4a8c7-99b6-4f62-b4d3-427c3803180e",
          "webPath": null,
          "lat": 47.292218,
          "lng": 8.572154
        },
        {
          "id": "bfcfbd71-b25d-4a11-96ed-3cb07d694d5d",
          "type": "non-bookable",
          "title": "Mülitobelweg 1, 8126 Küsnacht, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/628/1280.jpg",
          "subtitle": "Küsnacht",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/bfcfbd71-b25d-4a11-96ed-3cb07d694d5d",
          "webPath": null,
          "lat": 47.323584,
          "lng": 8.624688
        },
        {
          "id": "439eb36f-29c4-442e-aedf-53492c72b267",
          "type": "non-bookable",
          "title": "Rastplatz Schwarzes Loch, Rheinschlucht",
          "imageUrl": "https://api.grillstelle.ch/images/177/340.jpg",
          "subtitle": "Sagogn",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/439eb36f-29c4-442e-aedf-53492c72b267",
          "webPath": null,
          "lat": 46.796297,
          "lng": 9.284273
        },
        {
          "id": "b9edf12e-e027-4d2b-8d2a-de291b65e84d",
          "type": "non-bookable",
          "title": "Grillstelle Bruderhaus",
          "imageUrl": "https://api.grillstelle.ch/images/1755/4187.jpg",
          "subtitle": "Winterthur",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/b9edf12e-e027-4d2b-8d2a-de291b65e84d",
          "webPath": null,
          "lat": 47.475879,
          "lng": 8.728574
        },
        {
          "id": "5c318a59-bac4-4159-a94c-a3d66719160a",
          "type": "non-bookable",
          "title": "Im Rehsprung",
          "imageUrl": "https://api.grillstelle.ch/images/127/235.jpg",
          "subtitle": "Zürich",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/5c318a59-bac4-4159-a94c-a3d66719160a",
          "webPath": null,
          "lat": 47.400891,
          "lng": 8.526724
        },
        {
          "id": "d2a38143-7fe1-4c17-8891-f550b84e03ca",
          "type": "non-bookable",
          "title": "Grillplatz, Hinterer Chrebsbach, Winterthur",
          "imageUrl": "https://api.grillstelle.ch/images/1762/4209.jpg",
          "subtitle": "ZH",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/d2a38143-7fe1-4c17-8891-f550b84e03ca",
          "webPath": null,
          "lat": 47.48029,
          "lng": 8.729829
        },
        {
          "id": "cb5bc424-a2f7-4722-a1dc-2ef21c98a26e",
          "type": "non-bookable",
          "title": "Grillstelle Niederglatt",
          "imageUrl": "https://api.grillstelle.ch/images/1778/4254.jpg",
          "subtitle": "Niederglatt",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/cb5bc424-a2f7-4722-a1dc-2ef21c98a26e",
          "webPath": null,
          "lat": 47.428982,
          "lng": 9.171988
        },
        {
          "id": "247b3177-2c15-42f6-81fc-d1d110184b40",
          "type": "non-bookable",
          "title": "Grunschen, Stoffelbachstrasse 4, 8953 Dietikon, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/1781/4265.jpg",
          "subtitle": "Dietikon",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/247b3177-2c15-42f6-81fc-d1d110184b40",
          "webPath": null,
          "lat": 47.39616,
          "lng": 8.395383
        },
        {
          "id": "483ced04-10bc-4129-8fae-9fb96c0fb51b",
          "type": "non-bookable",
          "title": "Waldhäuschen oberhalb Bözenegg",
          "imageUrl": "https://api.grillstelle.ch/images/850/1861.jpg",
          "subtitle": "AG",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/483ced04-10bc-4129-8fae-9fb96c0fb51b",
          "webPath": null,
          "lat": 47.45651,
          "lng": 8.11976
        },
        {
          "id": "46348fdf-5840-4d6d-99eb-f8c707b77266",
          "type": "non-bookable",
          "title": "6W5C+J6 Tuggen, Schweiz",
          "imageUrl": "https://api.grillstelle.ch/images/1774/4240.jpg",
          "subtitle": "SZ",
          "category": "fireplaces",
          "distanceKm": null,
          "detailPath": "/app/v1/fireplaces/46348fdf-5840-4d6d-99eb-f8c707b77266",
          "webPath": null,
          "lat": 47.209103,
          "lng": 8.920598
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "perPage": 20,
          "total": 1766,
          "hasMore": true
        },
        "nearestKm": null,
        "appliedRadiusKm": null
      }
    }
  ]
} satisfies TGatewayHome;
