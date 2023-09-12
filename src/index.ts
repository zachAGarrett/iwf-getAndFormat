import fs from "fs";
import * as dotenv from "dotenv";
import { GraphQLClient } from "graphql-request";
import detailedCompetitionResults from "./lib/graph/competition/query/detailedCompetitionResults";
import { DetailedCompetitionResultsQuery } from "./__generated__/graphql";
import dayjs from "dayjs";
function formatAndWriteToCSV(
  competitions: DetailedCompetitionResultsQuery["competitions"]
) {
  const formattedData = competitions
    .map((competition) => {
      return competition.events
        .map((event) => {
          return event.attempts.map((attempt) => {
            // Define the two dates
            const date1 = dayjs(competition.date);
            const date2 = dayjs(attempt.athlete.birthday);

            // Calculate the difference in days
            const differenceInDays = date1.diff(date2, "day");
            return {
              Sport: competition.sports[0].name,
              Season: dayjs(competition.date).year(),
              DataSourceName:
                competition.dataSourcesConnection.edges[0].node.name,
              CompetitionDataSourceId:
                competition.dataSourcesConnection.edges[0].entityId,
              Competition: competition.name,
              EventID: event.id,
              EventNameShort: event.weightClass,
              EventGender: event.genderClass,
              CompetitionDate: competition.date,
              PersonAgeDays: differenceInDays,
              PersonID: attempt.athlete.id,
              Country: attempt.nation.code,
              Competitor: attempt.athlete.name,
              CompetitorWeight:
                attempt.athlete.competitionsConnection.edges[0].bodyweight,
              CompetitorRank:
                attempt.athlete.competitionsConnection.edges[0].rank,
              CompetitorGroup:
                attempt.athlete.competitionsConnection.edges[0].group,
              AttemptNumber: attempt.number,
              AttemptWeight: attempt.weight,
              AttemptSuccessful: attempt.successful,
            };
          });
        })
        .flat();
    })
    .flat(); // Flatten the nested arrays

  console.log(formattedData);

  const header = Object.keys(formattedData[0]).join(",");
  const dataRows = formattedData.map((r) => Object.values(r).join(","));

  // Convert the data array to a CSV string
  const csvData = [header, dataRows.join("\n")].join("\n");

  // Specify the file path where you want to save the CSV
  const filePath = "data.csv";

  // Write the CSV data to the file
  fs.writeFileSync(filePath, csvData, "utf-8");
}

(async () => {
  //// env stuff
  dotenv.config();
  const { GRAPH_URI } = process.env;

  if (GRAPH_URI === undefined) {
    throw new Error("Undefined environment variable, GRAPH_URI");
  }

  const client = new GraphQLClient(GRAPH_URI);
  const query = await client
    .request(detailedCompetitionResults, {
      where: {
        dataSourcesConnection_SINGLE: {
          edge: {
            entityId: "574",
          },
        },
      },
      competitionsConnectionWhere2: {
        node: {
          dataSourcesConnection_SINGLE: {
            edge: {
              entityId: "574",
            },
          },
        },
      },
    })
    .then((query) => {
      console.log(query);
      formatAndWriteToCSV(query.competitions);
    })
    .catch((err) => console.error(err));
})();
