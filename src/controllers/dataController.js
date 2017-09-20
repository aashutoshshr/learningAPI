import Info from '../models/info';
import axios from 'axios';

// fetching data from DB

exports.fetchData = function(req, res) {
    // res.send("Hello world");

    Info.find({}, function(error, infos) {
        
       return res.json(infos);
    });
};

// inserting data into the DB
exports.addData = function(req, res) {
    console.log(req.body);
    // 
    Info.insertMany(req.body);  
    // res.redirect('/data');  
};

// deleting data from DB
exports.deleteData = function(req, res) {
    const dataRcv = req.params.id;
    console.log(dataRcv);

    Info.remove(({ _id: dataRcv }), (err, user) => {
        // if (err) {
        //   return res.json({
        //     status: "error",
        //     message: "error deleting user with id " + req.params.id
        //   });
        // }
        // return res.json({
        //   status: "success",
        //   message: "User successfully deleted with id " + req.params.id
        // });
      });
};

//editing data in DB
exports.editData = function(req, res){
    console.log(req.params.id);
    Info.update({_id: req.params.id, name: req.body.name, address: req.body.address, comment: req.body.comment});
};


