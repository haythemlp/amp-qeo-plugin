const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())

const appService = require('./appService');

app.use(cors());
app.post('/sendLogs', (req, res) => {

    const body = req.body
    res.send({
        HIGHEST_BITRATE_POSSIBLE: appService.getHighestBitratePossible(body.videoFrameSize,body.availableVideoBitrate),
        TOO_MANY_BITRATE_SWITCHES: appService.getTooManyBitrateSwitches(body.bitrateSwitches),
        TOO_MANY_BUFFERING: appService.getTooManyBuffering(body.timeSpentInbufferingState),

    })
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});