/* eslint-disable */
var exec = require('child_process').exec;
var nodeVersionRequired = '8.1';

console.log("---------------------------------------------");
console.log("         EL PROCESO DE NODE.JS         ");
console.log("Id del proceso ........... " + process.pid);
console.log("Título.................... " + process.title);
console.log("Directorio de Node........ " + process.execPath);
console.log("Directorio Actual......... " + process.cwd());
console.log("Versión de Node........... " + process.version);
console.log("Release Version de Node........... " + JSON.stringify(process.release));
console.log("Versiones Dependencias.... " + process.versions);
console.log("Plataforma (S.O.)......... " + process.platform);
console.log("Arquitectura (S.O.)....... " + process.arch);
console.log("Tiempo activo de Node..... " + process.uptime());
console.log("Argumentos del proceso.... " + process.argv);

console.log("---------------------------------------------");
exec('node -v', function (err, stdout, stderr) {
  if (err) throw err;
  var nodeCurrentVersion = stdout.replace('v', '')
  console.log('You should install the project with a version greater than: ' + nodeVersionRequired);
  if (parseFloat(nodeCurrentVersion) < parseFloat(nodeVersionRequired)) {
    throw new Error(`ERROR: Requires node ${nodeVersionRequired} or greater.`);
    process.exit(1);
  }
  else {
    console.log('You are running the tool with node version: ' + stdout);
  }
});