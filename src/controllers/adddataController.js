import Info from '../models/info';


function addData(req, res) {
    Info.insertMany({
        "name":"Bikram",
        "address":"nepal",
        "comment":"namaste"
    });    
}
module.exports = addData;