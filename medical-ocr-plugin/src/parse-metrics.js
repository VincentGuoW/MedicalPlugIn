

export function parseMetrics(imageTextArray, local_map) {
  const totalMetrics = {};
  const count = 0;

  imageTextArray.forEach(imageText => {
    //Shallow copy, make sure each pic has new local_map
    const imageMetris = { ...local_map }
    count++;

    if (imageText === "") {
      imageMetris["Error"] = "Picture unable to read";

    }
    else {
      const lines = imageText.split("\n");

      for (const line of lines) {
        for (const [key, value] of Object.entries(local_map)) {
          const regex = new RegExp(`${key}\\s*[:: ]?\\s*(\\d+(?:\\.\\d+)?)`, "i");
          const match = regex.exec(line);

          if (match) {
            imageMetris[key] = imageMetris[key] === "" ? match[1] : "Value repeated"
          }
        }
      }

    }
    totalMetrics["pic" + count] = imageMetris;
  });

  return totalMetrics;



  //const metrics = local_map;

  //if(imageTextArray==""){
  //  metrics["Error"] = " Picture unable to read";
  //  return metrics;
  //}
  //const lines = imageTextArray.split("\n");
  //
  //for (const line of lines) {
  //  for (const [key, value] of Object.entries(local_map)) {
  //    const regex = new RegExp(`${key}\\s*[:: ]?\\s*(\\d+(?:\\.\\d+)?)`, "i");
  //    const match = regex.exec(line);
  //
  //    if (match) {
  //      metrics[key]=metrics[key]==="" ? match[1]:"Value repeated"
  //    }
  //  }
  //}
  //
  //return metrics;
}
