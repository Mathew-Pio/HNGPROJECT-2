const express = require('express');

const userSchema = require('../models/user')

const app = express();

//POST

app.post('/api', async(req, res) => {
    try{
        // check if there is an existing user
        const existingUser = await userSchema.findOne({name: req.body.name});

        if(existingUser){
            return res.status(400).json({error: 'User with the same name already exists'});
        }

        const user = new userSchema(req.body);
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(error){
        console.log(error);
    }
})

// PUT
app.put('/api/:user_id', async (req, res) => {
    try {
        const upId = req.params.user_id;
        const upName = req.body.name;

        // Use await with findOneAndUpdate to wait for the update to complete
        const updatedUser = await userSchema.findOneAndUpdate(
            { _id: upId }, // Use _id to find the user
            { name: upName },
            { new: true } // Return the updated document
        );

        if(!updatedUser){
            return res.status(404).json({ message: 'Updated User not found'})
        }

        res.status(200).send(updatedUser);
    } catch (error) {
        console.log("Error updating user:", error);
        res.status(500).send("Error Updating user please enter a valid id Name already in use");
    }

});

// FETCH GET
app.get('/api/:user_id', async (req, res) => {
    try {
        const fetchId = req.params.user_id;
        const val = await userSchema.find({ _id: fetchId }).exec();
        if (val.length === 0) {
            res.status(404).send("Nothing found");
        } else {
            res.send(val);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete('/api/:user_id', async(req, res) => {
    try{
        const user = await userSchema.findByIdAndDelete(req.params.user_id);

        if(!user){
            return res.status(404).json({ message: 'User not found'})
        }

        res.json({message: 'User deleted successfully'});
    }catch(error){
        res.status(500).json({error: error.message})
        console.log(err);
    }
})



module.exports = app;