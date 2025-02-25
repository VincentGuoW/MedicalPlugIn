

export function parseMetrics(text, local_map) {
  //const metrics = {};
  const metrics = local_map;

  const lines = text.split("\n");

  for (const line of lines) {
    for (const [key, value] of Object.entries(local_map)) {
      const regex = new RegExp(`${key}\\s*[:: ]?\\s*(\\d+(?:\\.\\d+)?)`, "i");
      const match = regex.exec(line);

      if (match) {
        if(metrics[key]==""){
          metrics[key] = match[1];
        }
        else{
          metrics[key] = "Error xxx";
        }
      }
    }
  }

  return metrics;
}
