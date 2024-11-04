"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const summary_1 = require("./summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
