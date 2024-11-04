import { MatchReader } from "./MatchReader";
import { Summary } from "./summary";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches);