"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailedCompetitionResultsDocument = exports.SortDirection = exports.EventType_Iwf = exports.EventClass_Iwf = void 0;
/** Enumeration of classes for men and women in a iwf competition. */
var EventClass_Iwf;
(function (EventClass_Iwf) {
    EventClass_Iwf["M_55"] = "M_55";
    EventClass_Iwf["M_61"] = "M_61";
    EventClass_Iwf["M_67"] = "M_67";
    EventClass_Iwf["M_73"] = "M_73";
    EventClass_Iwf["M_81"] = "M_81";
    EventClass_Iwf["M_89"] = "M_89";
    EventClass_Iwf["M_96"] = "M_96";
    EventClass_Iwf["M_102"] = "M_102";
    EventClass_Iwf["M_109"] = "M_109";
    EventClass_Iwf["MP109"] = "M_P109";
    EventClass_Iwf["W_45"] = "W_45";
    EventClass_Iwf["W_49"] = "W_49";
    EventClass_Iwf["W_55"] = "W_55";
    EventClass_Iwf["W_59"] = "W_59";
    EventClass_Iwf["W_64"] = "W_64";
    EventClass_Iwf["W_71"] = "W_71";
    EventClass_Iwf["W_76"] = "W_76";
    EventClass_Iwf["W_81"] = "W_81";
    EventClass_Iwf["W_87"] = "W_87";
    EventClass_Iwf["WP87"] = "W_P87";
})(EventClass_Iwf || (exports.EventClass_Iwf = EventClass_Iwf = {}));
/** Enumeration of event types for a weightlifting competition */
var EventType_Iwf;
(function (EventType_Iwf) {
    EventType_Iwf["CleanJerk"] = "CleanJerk";
    EventType_Iwf["Snatch"] = "Snatch";
})(EventType_Iwf || (exports.EventType_Iwf = EventType_Iwf = {}));
var SortDirection;
(function (SortDirection) {
    /** Sort by field values in ascending order. */
    SortDirection["Asc"] = "ASC";
    /** Sort by field values in descending order. */
    SortDirection["Desc"] = "DESC";
})(SortDirection || (exports.SortDirection = SortDirection = {}));
exports.DetailedCompetitionResultsDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "DetailedCompetitionResults" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "where" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "CompetitionWhere" } } }, { "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "competitionsConnectionWhere2" } }, "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "AthleteCompetitionsConnectionWhere" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "competitions" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "where" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "date" } }, { "kind": "Field", "name": { "kind": "Name", "value": "sports" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "dataSourcesConnection" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "edges" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "entityId" } }, { "kind": "Field", "name": { "kind": "Name", "value": "node" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" } }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "events" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "genderClass" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weightClass" } }, { "kind": "Field", "name": { "kind": "Name", "value": "attempts" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "successful" } }, { "kind": "Field", "name": { "kind": "Name", "value": "weight" } }, { "kind": "Field", "name": { "kind": "Name", "value": "number" } }, { "kind": "Field", "name": { "kind": "Name", "value": "nation" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "athlete" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "birthday" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "verified" } }, { "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "competitionsConnection" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "where" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "competitionsConnectionWhere2" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "edges" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "rank" } }, { "kind": "Field", "name": { "kind": "Name", "value": "group" } }, { "kind": "Field", "name": { "kind": "Name", "value": "bodyweight" } }] } }] } }] } }] } }] } }] } }] } }] };
