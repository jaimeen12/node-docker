import express from 'express';

import { getPortswigger } from '../controllers/scraperController.js';
import { getHtbInfo, getHtbMachines } from '../controllers/htbApiController.js';

const router = express.Router();
// Route for homepage
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/notes', (req, res) => {
    res.render('notes');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/portswigger', async (req, res) =>{
    const email = "jaimeenlalloo13@gmail.com";
    const password = "_6TW7F_,k[28rTk52x4A_9Hpx|-@+89q";
    const notes = await getPortswigger(email,password);
    //console.log(notes);
    
    res.render('portswigger', {
        solved: notes.solved,unsolved: notes.unsolved,
    })
});

router.get('/htb', async (req, res) =>{
    const info = await getHtbInfo();
    const machines = await getHtbMachines();
    console.log(machines.profile);
    res.render('htb', {
        notes: info.profile,
        machines: machines.profile.operating_systems
    })
});


export default router;