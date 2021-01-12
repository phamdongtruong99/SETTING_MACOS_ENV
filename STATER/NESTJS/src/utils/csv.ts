import glob from("glob")

export async function getAllCSVs(path) {
  return new Promise((resolve, reject)=>{
    glob(path+"/*.csv", {}, function (er, files) {
      if (er) reject(er);
      else resolve(files);
    }
  });
}
