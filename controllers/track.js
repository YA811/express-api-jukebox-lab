const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();


//Create 
router.post('/' , async (req, res)=>{
try{
    const track = new Track(req.body);
    await track.save();
    res.status(201).json(track);
}
catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find({});
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get by id
router.get('/:id', async (req, res) => {
    try {
      const track = await Track.findById(req.params.id);
      if (track) res.json(track);
      else res.status(404).json({ message: 'Track not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
});

//update
router.put('/:id', async (req, res) => {
    try {
      const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (track) res.json(track);
      else res.status(404).json({ message: 'Track not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

//delete
router.delete('/:id', async (req, res) => {
    try {
      const track = await Track.findByIdAndDelete(req.params.id);
      if (track) res.json(track);
      else res.status(404).json({ message: 'Track not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});


module.exports = router;