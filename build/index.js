"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dotenv = __importStar(require("dotenv"));
const graphql_request_1 = require("graphql-request");
const detailedCompetitionResults_1 = __importDefault(require("./lib/graph/competition/query/detailedCompetitionResults"));
const dayjs_1 = __importDefault(require("dayjs"));
function formatAndWriteToCSV(competitions) {
    const formattedData = competitions
        .map((competition) => {
        return competition.events
            .map((event) => {
            return event.attempts.map((attempt) => {
                // Define the two dates
                const date1 = (0, dayjs_1.default)(competition.date);
                const date2 = (0, dayjs_1.default)(attempt.athlete.birthday);
                // Calculate the difference in days
                const differenceInDays = date1.diff(date2, "day");
                return {
                    Sport: competition.sports[0].name,
                    Season: (0, dayjs_1.default)(competition.date).year(),
                    DataSourceName: competition.dataSourcesConnection.edges[0].node.name,
                    CompetitionDataSourceId: competition.dataSourcesConnection.edges[0].entityId,
                    Competition: competition.name,
                    EventID: event.id,
                    EventNameShort: event.weightClass,
                    EventGender: event.genderClass,
                    CompetitionDate: competition.date,
                    PersonAgeDays: differenceInDays,
                    PersonID: attempt.athlete.id,
                    Country: attempt.nation.code,
                    Competitor: attempt.athlete.name,
                    CompetitorWeight: attempt.athlete.competitionsConnection.edges[0].bodyweight,
                    CompetitorRank: attempt.athlete.competitionsConnection.edges[0].rank,
                    CompetitorGroup: attempt.athlete.competitionsConnection.edges[0].group,
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
    fs_1.default.writeFileSync(filePath, csvData, "utf-8");
}
(async () => {
    //// env stuff
    dotenv.config();
    const { GRAPH_URI } = process.env;
    if (GRAPH_URI === undefined) {
        throw new Error("Undefined environment variable, GRAPH_URI");
    }
    const client = new graphql_request_1.GraphQLClient(GRAPH_URI);
    const query = await client
        .request(detailedCompetitionResults_1.default, {
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
