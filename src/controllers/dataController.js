import Info from '../models/info';

exports.fetchData = function(req, res) {
    // res.send("Hello world");

    Info.find({}, function(error, infos) {
        
       return res.send(infos);
    });
};

exports.addData = function(req, res) {
    let data = [{
            "name":"Bikram",
            "address":"nepal",
            "comment":"namaste"
        },
        {
            "name":"Nischal",
            "address":"kathmandu",
            "comment":"yo"
        }
    ];
    Info.insertMany(data);  
    res.redirect('/data');  
};


