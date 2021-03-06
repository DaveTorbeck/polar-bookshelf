
const {PersistenceLayer} = require("../datastore/PersistenceLayer.js");
const {Launcher} = require("./Launcher");

async function persistenceLayerFactory() {

    console.log("Using electron persistence layer and disk store");

    const remote = require('electron').remote;

    console.log("Accessing datastore...");
    let datastore = remote.getGlobal("datastore" );
    console.log("Accessing datastore...done");

    return new PersistenceLayer(datastore);

}

new Launcher(persistenceLayerFactory).launch().then(function () {
    console.log("App now loaded.");
});
