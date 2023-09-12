"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __generated__1 = require("../../../../__generated__");
const detailedCompetitionResults = (0, __generated__1.gql)(`

query DetailedCompetitionResults($where: CompetitionWhere, $competitionsConnectionWhere2: AthleteCompetitionsConnectionWhere) {
    competitions(where: $where) {
      id
      name
      date
      sports {
        name
      }
      dataSourcesConnection {
        edges {
          entityId
          node {
            name
          }
        }
      }
      events {
        id
        genderClass
        weightClass
        attempts {
          successful
          weight
          number
          nation {
            code
          }
          athlete {
            birthday
            name
            verified
            id
            competitionsConnection(where: $competitionsConnectionWhere2) {
              edges {
                rank
                group
                bodyweight
              }
            }
          }
        }
      }
    }
  }

`);
exports.default = detailedCompetitionResults;
