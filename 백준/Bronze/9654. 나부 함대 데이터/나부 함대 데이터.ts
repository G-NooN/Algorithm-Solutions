type ShipData = {
  shipName: string;
  shipClass: string;
  shipDeployment: string;
  shipInService: string;
};

const title = {
  shipName: "SHIP NAME",
  shipClass: "CLASS",
  shipDeployment: "DEPLOYMENT",
  shipInService: "IN SERVICE",
};

const data: ShipData[] = [
  {
    shipName: "N2 Bomber",
    shipClass: "Heavy Fighter",
    shipDeployment: "Limited",
    shipInService: "21",
  },
  {
    shipName: "J-Type 327",
    shipClass: "Light Combat",
    shipDeployment: "Unlimited",
    shipInService: "1",
  },
  {
    shipName: "NX Cruiser",
    shipClass: "Medium Fighter",
    shipDeployment: "Limited",
    shipInService: "18",
  },
  {
    shipName: "N1 Starfighter",
    shipClass: "Medium Fighter",
    shipDeployment: "Unlimited",
    shipInService: "25",
  },
  {
    shipName: "Royal Cruiser",
    shipClass: "Light Combat",
    shipDeployment: "Limited",
    shipInService: "4",
  },
];

const formatTable = (data: ShipData) => {
  const { shipName, shipClass, shipDeployment, shipInService } = data;

  return (
    shipName.padEnd(15) +
    shipClass.padEnd(15) +
    shipDeployment.padEnd(11) +
    shipInService.padEnd(10)
  );
};

const result: string[] = [];

result.push(formatTable(title));

data.forEach((value) => result.push(formatTable(value)));

console.log(result.join("\n"));