import { gql } from "../../../../__generated__";

const detailedCompetitionResults = gql(`

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

export default detailedCompetitionResults;
