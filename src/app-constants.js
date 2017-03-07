var colorMap = require('./constants/color-map.js');

module.exports = {

  jaoa: {

    articleTypes: [
      {
        name: "Standalone",
        value: '',
      },
      {
        name: "Series: First",
        value: 'series-first',
      },
      {
        name: "Series: Middle",
        value: 'series-middle',
      },
      {
        name: "Series: Last",
        value: 'series-last',
      },
    ],

    categories: [
      "Book Reviews",
      "Brief Report",
      "Case Report",
      "Clinical Images",
      "Clinical Practice",
      "Clinical Review",
      "CME Quiz",
      "Editorials",
      "Empathy in Medicine",
      "Evidence-Based Clinical Reviews",
      "Health Policy",
      "In My View",
      "In Your Words",
      "Letters to the Editor",
      "Medical Education",
      "Original Contribution",
      "Review",
      "The Somatic Connection",
      "Special Communication",
      "Special Report",
      "Still Relevant?",
      "SURF",
    ],

    categoryColors: {
      "AOA Communication"               : colorMap.green,
      "Original Contribution"           : colorMap.purple,
      "Review"                          : colorMap.purple,
      "Evidence-Based Clinical Reviews" : colorMap.purple,
      "Clinical Review"                 : colorMap.purple,
      "Clinical Practice"               : colorMap.purple,
      "Brief Report"                    : colorMap.purple,
      "Medical Education"               : colorMap.purple,
      "Case Report"                     : colorMap.purple,
      "Special Communication"           : colorMap.purple,
      "Special Report"                  : colorMap.green,
      "Health Policy"                   : colorMap.green,
      "Still Relevant?"                 : colorMap.green,
      "Editorials"                      : colorMap.green,
      "In My View"                      : colorMap.green,
      "Empathy in Medicine"             : colorMap.red,
      "The Somatic Connection"          : colorMap.red,
      "Clinical Images"                 : colorMap.red,
      "In Your Words"                   : colorMap.red,
      "Letters to the Editor"           : colorMap.green,
      "SURF"                            : colorMap.red,
      "CME Quiz"                        : colorMap.blue,
      "Book Reviews"                    : colorMap.red,
   },

  },
};
