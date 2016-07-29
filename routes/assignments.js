var router = require('express').Router();

var Assignment = require('../models/assignments');

//GET RQST
router.get('/', function(request, response){
Assignments.find({}, function(err, assignments){
    if(err){
      console.log('Router error', err);
      response.sendStatus(500);
    }else {
      response.send(assignments);
    }
  });
});

//POST
router.post('/createAssignment', function(request, response){
  console.log('Creating Assignment');
  var data = request.body;
 var createdAssignment = new Assignment ({
    assignment_number: data.assignment_number,
    student_name: data.student_name,
    score: data.score,
    date_completed: data.date_completed,
   });

   createdAssignment.save(function(err){
     if(err){
       console.log('Error Saving new assignment', err);
       response.sendStatus(500);
     } else {
       console.log('Data saved!', data);
       response.sendStatus(200);
     }
   });

 });

//REMOVE
 router.delete('/removeWithId/:id', function(request, response){
   var id = request.params.id;

   Assignment.findById(id, function(err, assignment){
     if (err){
       console.log('deletion error', err);
       response.sendStatus(500);
     } else {
       assignment.remove(function(err){
         if(err){
         console.log('Error removing assignments', err);
         response.sendStatus(500);
       }
     });

     console.log('assignment deleted', id);
     response.sendStatus(200);
   }

 });
 });


 // Remove button to remove assignments
 router.delete('/removeWithId/:id', function(request, response){
  var id = request.params.id;

  Assignment.findById(id, function(err, assignment){
    if (err){
      console.log('deletion error', err);
      response.sendStatus(500);
    } else {
      assignment.remove(function(err){
        if(err){
        console.log('removal error', err);
      }
    });

    console.log('assignment deleted', id);
    response.sendStatus(200);
  }

});
});

// Router for remove button
router.delete('/removeWithId/:id', function(request, response){
 var id = request.params.id;

 Assignment.findById(id, function(err, assignment){
   if (err){
     console.log('deletion error', err);
     response.sendStatus(500);
   } else {
     assignment.remove(function(err){
       if(err){
       console.log('removal error', err);
     }
   });

   console.log('assignment deleted', id);
   response.sendStatus(200);
 }

});
});

module.exports = router;
