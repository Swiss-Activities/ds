import type { TGatewayHome } from "@swiss-activities/data";

export const gatewayOverviewActivityTypeResponse = {
  "context": {
    "type": "activity-type",
    "id": "34",
    "title": "Paragliding",
    "slug": "paragliding",
    "description": "Buche hier deinen nächsten Ausflug beim Paragliding in der Schweiz. Bei einem Tandemflug kannst du unglaubliche Landschaften aus der Vogelperspektive bestaunen. Hotspots für Gleitschirmfliegen sind Interlaken, die Zentralschweiz sowie das Engadin. Aber auch im Wallis gibt es einige atemberaubende Startplätze. Nach ein paar schnellen Schritten befindest du dich in der Luft und kannst die Umgebung geniessen, während dein Tandempilot für einen sicheren Flug sorgt.",
    "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GOPR_1021_1_55d61ae575.JPG",
    "numberOfActivities": 98
  },
  "staticSections": [
    {
      "id": "activity_type_hero",
      "component": "hero",
      "variant": "centered_title",
      "title": "Paragliding",
      "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GOPR_1021_1_55d61ae575.JPG",
      "description": "Buche hier deinen nächsten Ausflug beim Paragliding in der Schweiz. Bei einem Tandemflug kannst du unglaubliche Landschaften aus der Vogelperspektive bestaunen. Hotspots für Gleitschirmfliegen sind Interlaken, die Zentralschweiz sowie das Engadin. Aber auch im Wallis gibt es einige atemberaubende Startplätze. Nach ein paar schnellen Schritten befindest du dich in der Luft und kannst die Umgebung geniessen, während dein Tandempilot für einen sicheren Flug sorgt."
    },
    {
      "id": "activity_type_filters",
      "component": "filters",
      "endpoint": "/app/v1/activity-types/paragliding/filter",
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
          "id": "interests",
          "type": "checkbox",
          "title": "Interessen",
          "param": "tags",
          "options": [
            {
              "id": "tag:sightseeing",
              "label": "Sehenswürdigkeiten",
              "value": "sightseeing",
              "count": 86,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:nature",
              "label": "Natur",
              "value": "nature",
              "count": 7,
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
              "id": "tag:solo",
              "label": "Alleinreisende",
              "value": "solo",
              "count": 34,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:couples",
              "label": "Paare",
              "value": "couples",
              "count": 14,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:families",
              "label": "Familien",
              "value": "families",
              "count": 13,
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
              "id": "tag:teens",
              "label": "Jugendliche",
              "value": "teens",
              "count": 5,
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
              "count": 54,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:under_1h",
              "label": "Unter 1 Std.",
              "value": "under_1h",
              "count": 12,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:half_day",
              "label": "Halber Tag",
              "value": "half_day",
              "count": 5,
              "selected": false,
              "disabled": false
            },
            {
              "id": "tag:full_day",
              "label": "Ganzer Tag",
              "value": "full_day",
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
              "count": 3,
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
              "count": 69,
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
      "id": "activity_type_activities",
      "component": "activity_grid",
      "title": "Beliebte Paragliding Aktivitäten",
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
          "id": "296",
          "type": "activity",
          "bookingActivityId": 58,
          "title": "Beatenberg Gleitschirmfliegen im Tandem ab Interlaken",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Gleitschirmfliegen_Schweiz_Interlaken_0da344cafd.jpg",
          "subtitle": "Interlaken",
          "priceFormatted": "CHF 220",
          "startingPrice": {
            "amount": 220,
            "currency": "CHF",
            "formatted": "CHF 220"
          },
          "rating": 4.76,
          "reviewCount": 114,
          "path": "/paragliding/gleitschirmfliegen-tandem-beatenberg-ganzes-jahr/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-beatenberg-ganzes-jahr/",
          "distanceKm": null,
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
          "id": "1712",
          "type": "activity",
          "bookingActivityId": 1494,
          "title": "Flums Gleitschirmfliegen Tandem",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/900x600_1_50_1b9d8a0e24e9a2145c6d955c8de6f889_d5c6fd516e.jpg",
          "subtitle": "Flums",
          "priceFormatted": "CHF 190",
          "startingPrice": {
            "amount": 190,
            "currency": "CHF",
            "formatted": "CHF 190"
          },
          "rating": 4.83,
          "reviewCount": 6,
          "path": "/paragliding/flums-gleitschirmfliegen-tandem/",
          "webPath": "/paragliding/flums-gleitschirmfliegen-tandem/",
          "distanceKm": null,
          "lat": 47.0879375,
          "lng": 9.352437499999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/900x600_1_50_1b9d8a0e24e9a2145c6d955c8de6f889_d5c6fd516e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_1b9d8a0e24e9a2145c6d955c8de6f889_452b41f879.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_2bae4f1a688d4d9599f55bb32783b0e9_08d9e68bc5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_4d9484bb7ebf0d64759ce70f122ccee1_07fb455c47.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_6b3572ba443a27edc99ac4a421c4cffd_d72f146209.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_9ba3da7a49df3d3b2b5f37775d7b347f_52c6739f82.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_ab372bcf7316c8ce8816d15d8d8df938_4ebdd9835a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_9e27bb0ac226f543a9c5390ce1f40e49_cffcc8b435.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_12d2168edd2c415b9dfdf0cb8223e8cd_3f6e51a849.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_b7476a1a5bd5b687dc2b8b0a06735f70_4876127c61.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_c96d9c16c15360f30095c6d86e861471_1a2043eaa6.jpg"
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
          "distanceKm": null,
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
          "id": "88338",
          "type": "activity",
          "bookingActivityId": 2680,
          "title": "Gleitschirmflug “The Spectacular” in Zermatt",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9915fccea8f191e192de872ffe6f5f18.jpg",
          "subtitle": "Zermatt",
          "priceFormatted": "CHF 240",
          "startingPrice": {
            "amount": 240,
            "currency": "CHF",
            "formatted": "CHF 240"
          },
          "rating": 4.6,
          "reviewCount": 5,
          "path": "/paragliding/matterhorn-paragliding-zermatt/",
          "webPath": "/paragliding/matterhorn-paragliding-zermatt/",
          "distanceKm": null,
          "lat": 46.0225138,
          "lng": 7.7517867,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/9915fccea8f191e192de872ffe6f5f18.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/abc36401e24b59b637f7ecb925b51f89.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/4911828ffb9abfe9cd001a36f60caf0c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/0644f3fc4cedc5dde7345cd1e08b05bb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3f66d983cc714652e2f2270396634cf1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3450191588e0ecb12073aee5906725ab.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a720b3f2f7f683bb2a083672ee299807.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/3bab4e001c45a2499aa299e06072c609.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/debc108aa430074938ce72b6f73e1c50.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/a7255403259b6cc81a6f1a1d1f8dc671.jpg"
          ]
        },
        {
          "id": "995",
          "type": "activity",
          "bookingActivityId": 796,
          "title": "Pilatus Gleitschirmfliegen Tandem ab Kriens",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Tandem_Gleitschirmflug_Pilatus_Zurich_Paragliding_2_c25bb27794.jpg",
          "subtitle": "Kriens",
          "priceFormatted": "CHF 280",
          "startingPrice": {
            "amount": 280,
            "currency": "CHF",
            "formatted": "CHF 280"
          },
          "rating": 5,
          "reviewCount": 2,
          "path": "/paragliding/spezial-tandem-gleitschirmflug-pilatus/",
          "webPath": "/paragliding/spezial-tandem-gleitschirmflug-pilatus/",
          "distanceKm": null,
          "lat": 47.0304204,
          "lng": 8.278028899999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Tandem_Gleitschirmflug_Pilatus_Zurich_Paragliding_2_c25bb27794.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Pilatus_Zurich_Paragliding_3_063aa19d79.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Pilatus_Zurich_Paragliding_0d087d998e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_16_372a7a25c9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_17_9726efb0c4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_18_ffb2a8ff97.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_19_28a5615fd6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_20_738b393b52.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_21_b74cd95066.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_22_2061102b64.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_23_5be445814e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_24_9c8731c6ab.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_25_2d7d3c0d1c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_26_17e29b08f4.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_27_bed01ab006.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem_Gleitschirmflug_Zurich_Paragliding_28_c9127320b4.jpg"
          ]
        },
        {
          "id": "503",
          "type": "activity",
          "bookingActivityId": 263,
          "title": "Rosswald Gleitschirmfliegen Tandem im Wallis",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_80046ee3dd.jpg",
          "subtitle": "Brig",
          "priceFormatted": "CHF 150",
          "startingPrice": {
            "amount": 150,
            "currency": "CHF",
            "formatted": "CHF 150"
          },
          "rating": 5,
          "reviewCount": 5,
          "path": "/paragliding/gleitschirmfliegen-tandem-ab-rosswald-wallis/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-ab-rosswald-wallis/",
          "distanceKm": null,
          "lat": 46.31251750000001,
          "lng": 8.024664200000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_80046ee3dd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_0a014e2411e90e5b4344add6f911e560_95dbd63a6a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Fluggebiet_dae95029c9.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Prep_e988d4714a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_69eb753427b0df34eb41f8057e24ffb1_dd6f248aae.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_3904f4bc984b22587ad6b3572da3364a_e294b32649.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/small_Horn_2497642f6c.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_2e914280f05e618e1e2013001d9ba15a_54e1f7ed35.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_gallery_725fc9772297ce00137a538cb0019434_629d54c4eb.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GOPR_7140_50f2114909_627ac3e710.jpg"
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
          "distanceKm": null,
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
        },
        {
          "id": "543",
          "type": "activity",
          "bookingActivityId": 340,
          "title": "Aletscharena Gleitschirmfliegen Tandem ab Fiesch",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GOPR_6550_b20f54cc38.JPG",
          "subtitle": "Fiesch",
          "priceFormatted": "CHF 150",
          "startingPrice": {
            "amount": 150,
            "currency": "CHF",
            "formatted": "CHF 150"
          },
          "rating": 4.67,
          "reviewCount": 3,
          "path": "/paragliding/gleitschirmfliegen-tandem-ab-fiesch-im-wallis/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-ab-fiesch-im-wallis/",
          "distanceKm": null,
          "lat": 46.40965509999999,
          "lng": 8.136671399999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/GOPR_6550_b20f54cc38.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GOPR_0227_d46763e3d3.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GOPR_2202_b3a24a48b1.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GOPR_0502_2a54009c8c.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_GOPR_5796_29b7ed11d0.JPG"
          ]
        },
        {
          "id": "902",
          "type": "activity",
          "bookingActivityId": 715,
          "title": "Niederbauen Gleitschirmfliegen Tandem am Vierwaldstättersee",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/G0112691_5b3e2647f9.JPG",
          "subtitle": "Emmetten",
          "priceFormatted": "CHF 200",
          "startingPrice": {
            "amount": 200,
            "currency": "CHF",
            "formatted": "CHF 200"
          },
          "rating": 4.8,
          "reviewCount": 10,
          "path": "/paragliding/gleitschirmfliegen-tandem-niederbauen/",
          "webPath": "/paragliding/gleitschirmfliegen-tandem-niederbauen/",
          "distanceKm": null,
          "lat": 46.956253,
          "lng": 8.519289700000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/G0112691_5b3e2647f9.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_G0045759_5ab42946b2.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Your_screen_1920x1080_1024x576_785730a49f.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_G0083262_ef95591004.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_G0045761_db976692ba.JPG",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_G0133316_cfa5b7ad49.JPG"
          ]
        },
        {
          "id": "2162",
          "type": "activity",
          "bookingActivityId": 1927,
          "title": "Verbier Gleitschirmfliegen Tandem",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Master_9_copy_2_4bcd9706ba.jpg",
          "subtitle": "Verbier",
          "priceFormatted": "CHF 190",
          "startingPrice": {
            "amount": 190,
            "currency": "CHF",
            "formatted": "CHF 190"
          },
          "rating": 5,
          "reviewCount": 5,
          "path": "/paragliding/verbier-tandem-gleitschirmfliegen/",
          "webPath": "/paragliding/verbier-tandem-gleitschirmfliegen/",
          "distanceKm": null,
          "lat": 46.0904641,
          "lng": 7.251974299999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Master_9_copy_2_4bcd9706ba.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Tandem1_copy_2_077dcc8b5a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_DSC_03621_copy_2_dd269ce97b.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Home_Page_copy_2_e7f2f327e6.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Master_2_copy_2_088d1baf72.jpg"
          ]
        },
        {
          "id": "1750",
          "type": "activity",
          "bookingActivityId": 1532,
          "title": "Engelberg Paragliding Tandemflug ab Engelberg",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Engelberg_1_c29dd53420.jpg",
          "subtitle": "Engelberg",
          "priceFormatted": "CHF 200",
          "startingPrice": {
            "amount": 200,
            "currency": "CHF",
            "formatted": "CHF 200"
          },
          "rating": 5,
          "reviewCount": 2,
          "path": "/paragliding/engelberg-tandemflug-paragliding/",
          "webPath": "/paragliding/engelberg-tandemflug-paragliding/",
          "distanceKm": null,
          "lat": 46.81878810000001,
          "lng": 8.4151182,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Engelberg_1_c29dd53420.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Engelberg_2_6a4d6e2a5d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_Engelberg_Titlis_badb1d725c.jpg"
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
          "distanceKm": null,
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
          "id": "384",
          "type": "activity",
          "bookingActivityId": 146,
          "title": "Silvaplana Sky Sommer Gleitschirmfliegen",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Sky_Sommer_dd7daa2016.jpeg",
          "subtitle": "Silvaplana",
          "priceFormatted": "CHF 230",
          "startingPrice": {
            "amount": 230,
            "currency": "CHF",
            "formatted": "CHF 230"
          },
          "rating": 4.86,
          "reviewCount": 7,
          "path": "/paragliding/gleitschirmfliegen-st-moritz-sommer/",
          "webPath": "/paragliding/gleitschirmfliegen-st-moritz-sommer/",
          "distanceKm": null,
          "lat": 46.45560500000001,
          "lng": 9.814831000000002,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Sky_Sommer_dd7daa2016.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/large_2000x2000_0_70_a86755fb1efe2859f75585d63caaca05_e327ca112a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_Adrenalin_Junkie_3bc1b5b512.jpeg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/054cb717f13748d672a6793d045b07af.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/8c5da2e53c5fdc1271c6dbd97e661dca.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/b1bb90d44f79df13b053ecb99acd0bde.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/4868c0593b197eda81447363abcd104d.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/646ac4ac31536d10043c62897e4f036f.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/c3df1f11bc9c45c2b3b81e0167816406.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/18bc0b819c27e52f0f0875aadf735fe9.jpg"
          ]
        },
        {
          "id": "1718",
          "type": "activity",
          "bookingActivityId": 1500,
          "title": "Early Bird Paragliding Davos",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/900x600_1_50_0a89bb2d411cd3f2ff17a36e8f204a82_699c776852.jpg",
          "subtitle": "Davos  ",
          "priceFormatted": "CHF 170",
          "startingPrice": {
            "amount": 170,
            "currency": "CHF",
            "formatted": "CHF 170"
          },
          "rating": null,
          "reviewCount": null,
          "path": "/paragliding/air-davos-paraglide-early-bird-davos/",
          "webPath": "/paragliding/air-davos-paraglide-early-bird-davos/",
          "distanceKm": null,
          "lat": 46.790766,
          "lng": 9.819128699999998,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/900x600_1_50_0a89bb2d411cd3f2ff17a36e8f204a82_699c776852.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_0a89bb2d411cd3f2ff17a36e8f204a82_722c2b09bd.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_1a5d04cb4372cc28c1a1d88d1ce92249_13b626e665.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_21bd719e70f9ac056c73c4a5075633e0_d8c9b0313a.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_573da768bfb040a3859ab263d15d7014_1b76470063.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_1835b77d355daf482fe8d9351ff2eb9c_1ab61ee3e5.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/medium_900x600_1_50_d31513a88a258d6a76dee54ab72dc244_4fc955603a.jpg"
          ]
        },
        {
          "id": "1753",
          "type": "activity",
          "bookingActivityId": 1535,
          "title": "Luzern Paragliding Tandemflug ab Luzern",
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/158bcfda87fc18b13a5869ea93d637b1.jpg",
          "subtitle": "Luzern",
          "priceFormatted": "CHF 195",
          "startingPrice": {
            "amount": 195,
            "currency": "CHF",
            "formatted": "CHF 195"
          },
          "rating": 5,
          "reviewCount": 1,
          "path": "/paragliding/luzern-tandemflug-paragliding/",
          "webPath": "/paragliding/luzern-tandemflug-paragliding/",
          "distanceKm": null,
          "lat": 47.0493125,
          "lng": 8.308734399999999,
          "imageUrls": [
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/158bcfda87fc18b13a5869ea93d637b1.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/d52b5edb92f33bca12a446ce1c7f507e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/ac2e2b21a384d3acdce018a01cf1611e.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/2f003cb5c552dcdc81cf5c7d28cc6a75.jpg",
            "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/6d1a8c2b36df791902905b4d6d452fa0.jpg"
          ]
        }
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "perPage": 20,
          "total": 95,
          "hasMore": true
        }
      }
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
          "id": "309",
          "type": "review",
          "title": "Davos Gleitschirmfliegen Tandem",
          "activityId": "1714",
          "bookingActivityId": 1496,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/900x600_1_50_529919a2c61ec187798c093d4c3669d4_dcafd32430.jpg",
          "path": "/paragliding/gleitschirmfliegen-tandem-jakobshorn-davos/",
          "rating": 5,
          "body": "Einfach genial, die Organisation war super.",
          "reviewerName": "Cécile",
          "reviewerCountry": "CH"
        },
        {
          "id": "875",
          "type": "review",
          "title": "Flums Gleitschirmfliegen Tandem",
          "activityId": "1712",
          "bookingActivityId": 1494,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/900x600_1_50_1b9d8a0e24e9a2145c6d955c8de6f889_d5c6fd516e.jpg",
          "path": "/paragliding/flums-gleitschirmfliegen-tandem/",
          "rating": 5,
          "body": "Ein wunderschönes Erlebnis, ohne Stress nur zu empfehlen",
          "reviewerName": "Dominik ",
          "reviewerCountry": "CH"
        },
        {
          "id": "1294",
          "type": "review",
          "title": "Beatenberg Gleitschirmfliegen im Tandem ab Interlaken",
          "activityId": "296",
          "bookingActivityId": 58,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Gleitschirmfliegen_Schweiz_Interlaken_0da344cafd.jpg",
          "path": "/paragliding/gleitschirmfliegen-tandem-beatenberg-ganzes-jahr/",
          "rating": 5,
          "body": "Super Coach, toller Flug mit vielen Überraschungen. Sehr zu empfehlen.",
          "reviewerName": "Nathalie",
          "reviewerCountry": "CH"
        },
        {
          "id": "1495",
          "type": "review",
          "title": "Gleitschirm Tandemflug am Schwarzsee",
          "activityId": "70508",
          "bookingActivityId": 2568,
          "imageUrl": "https://contentapi-swissactivities.imgix.net/contentapi.staging.swissactivities/20c3b5a06b379dcfbd62d64c61646d46.jpg",
          "path": "/paragliding/gleitschirm-tandem-schwarzsee/",
          "rating": 5,
          "body": "Von Anfang an fühlte ich mich gut aufgehoben bei Yanick. Seine ruhige und professionelle Art gab mir die nötige Sicherheit, mich dieser wahnsinnig tollen Erfahrung zu stellen. Der Schwarzsee ist ideal für einen sicheren Tandemflug. Wenn man Lust auf ein bisschen Action hat, dann dreht Yanick auch gerne eine Spirale.\nBei Yanick steht die Sicherheit an erster Stelle. Ist beim Landeplatz zu viel Wind, fliegt er nicht mit kleinen Kindern. Die Landung kann etwas ruppig sein, wenn der Schirm einen wegziehen will.",
          "reviewerName": "Anna",
          "reviewerCountry": "CH"
        }
      ]
    }
  ]
} satisfies TGatewayHome;
