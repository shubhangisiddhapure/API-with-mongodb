const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
   name: {
    type: String,
    required: true  
   },
   subject:{
       type: String,
       required: true
   },
   age:{
       type: Number,
       required: true

   },

});

module.exports = mongoose.model('Student', StudentSchema);