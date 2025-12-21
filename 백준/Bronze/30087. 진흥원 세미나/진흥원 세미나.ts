import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...seminars] = input.split("\n");

const seminarRoom: Record<string, string> = {
  Algorithm: "204",
  DataAnalysis: "207",
  ArtificialIntelligence: "302",
  CyberSecurity: "B101",
  Network: "303",
  Startup: "501",
  TestStrategy: "105",
};

const result: string[] = [];

seminars.forEach((seminar) =>
  result.push(seminarRoom[seminar as keyof typeof seminarRoom])
);

console.log(result.join("\n"));
