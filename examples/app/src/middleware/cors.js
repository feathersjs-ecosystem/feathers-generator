'use strict';

const cors = require('cors');

export default function (options = {}) {
  return cors(options.whitelist);
}

// module.exports = function(options = {}) {
//   return function() {
//     const app = this;
//     let corsOptions;

//     if (options.whitelist) {
//       corsOptions = {
//         origin (origin, callback) {
//           callback(null, options.whitelist.indexOf(origin) !== -1);
//         }
//       };
//     }

//     app.options('*', cors(corsOptions));
//     app.use(cors(options.whitelist));
//   };
// };
