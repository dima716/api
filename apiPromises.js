(function() {
  'use strict';

  /**
   * Реализация API, не изменяйте ее
   * @param {string} url
   * @param {function} callback
   */

  function getData(url) {
    return new Promise(function (resolve, reject) {
      var RESPONSES = {
          '/countries': [
              {name: 'Cameroon', continent: 'Africa'},
              {name :'Fiji Islands', continent: 'Oceania'},
              {name: 'Guatemala', continent: 'North America'},
              {name: 'Japan', continent: 'Asia'},
              {name: 'Yugoslavia', continent: 'Europe'},
              {name: 'Tanzania', continent: 'Africa'}
          ],
          '/cities': [
              {name: 'Bamenda', country: 'Cameroon'},
              {name: 'Suva', country: 'Fiji Islands'},
              {name: 'Quetzaltenango', country: 'Guatemala'},
              {name: 'Osaka', country: 'Japan'},
              {name: 'Subotica', country: 'Yugoslavia'},
              {name: 'Zanzibar', country: 'Tanzania'},
          ],
          '/populations': [
              {count: 138000, name: 'Bamenda'},
              {count: 77366, name: 'Suva'},
              {count: 90801, name: 'Quetzaltenango'},
              {count: 2595674, name: 'Osaka'},
              {count: 100386, name: 'Subotica'},
              {count: 157634, name: 'Zanzibar'}
          ]
      };

      setTimeout(function () {
          var result = RESPONSES[url];

          if (!result) {
              reject('Unknown url');
          }
          resolve(result);
      }, Math.round(Math.random * 1000));
    });
  }

  /*** Ваши изменения ниже
   */

  Promise.all([getData('/countries'), getData('/cities'), getData('/populations')])
  .then(function (result) {
    var countries = result[0],
        cities = result[1],
        populations = result[2],
        answer = prompt('Введите название страны или города'),
        c = [], cc = [], p = 0;

    if (answer) {
        for (let i = 0; i < cities.length; i++) {
          if (cities[i].country === answer) {
            cc.push(cities[i].name);
          }
        }

        if (cc.length) {
          for (let i = 0; i < populations.length; i++) {
            for (let j = 0; j < cc.length; j++) {
              if (populations[i].name === cc[j]) {
                p += populations[i].count;
              }
            }
          }
        } else {
          for (let i = 0; i < populations.length; i++) {
            if (populations[i].name === answer) {
              p = populations[i].count;
              break;
            }
          }
        }

      if (p) {
        console.log('Population in ' + answer + ': ' + p);
      }
    } else {
      for (let i = 0; i < countries.length; i++) {
          if (countries[i].continent === 'Africa') {c.push(countries[i].name);
          }
      }

      for (let i = 0; i < cities.length; i++) {
          for (let j = 0; j < c.length; j++) {
              if (cities[i].country === c[j]) {
                  cc.push(cities[i].name);
              }
          }
      }

      for (let i = 0; i < populations.length; i++) {
          for (let j = 0; j < cc.length; j++) {
              if (populations[i].name === cc[j]) {
                  p += populations[i].count;
              }
          }
      }

      console.log('Total population in African cities: ' + p);
    }
  })
  .then(null, function (err) {
    console.log(err);
  });
})();
