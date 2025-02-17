import local_map from'./local_map.json'assert { type: 'json' };

export function extractMetrics(text){
  const metrics = {};

  const lines = text.split('\n');

  for (const line of lines) {
    for(const [key,value]of Object.entries(local_map)){
      //const regex = new RegExp(`${key}\\s*[:: ]?\\s*(\\S+)`, 'i');
      const regex = new RegExp(`${key}\\s*[:: ]?\\s*(\\d+(?:\\.\\d+)?)`, 'i');
      const match = regex.exec(line);

      if(match){
        metrics[key] = match[1];
      }
      
    }
  }

  return metrics;
}