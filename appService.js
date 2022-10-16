
module.exports = {
    getHighestBitratePossible(videoFrameSize, availableVideoBitrates) {
        if (!videoFrameSize || !availableVideoBitrates || availableVideoBitrates.length === 0)
            return false;

        highestBitrate = Math.max(...availableVideoBitrates.map(track => track.bitrate))
        return highestBitrate > videoFrameSize.bitrate;
    },
    getTooManyBitrateSwitches(bitrateSwitches) {

        if (!bitrateSwitches || bitrateSwitches.length === 0) return false
        const lastBitrateSwitch = bitrateSwitches[bitrateSwitches.length - 1];
        return bitrateSwitches.filter(x => x.timestamp > lastBitrateSwitch.timestamp - 10000).length > 2

    },
    getTooManyBuffering(timeSpentInbufferingState) {
        if (!timeSpentInbufferingState || timeSpentInbufferingState.length === 0) return false
        const lastBufferingState = timeSpentInbufferingState[timeSpentInbufferingState.length - 1];
        return timeSpentInbufferingState.some(x => x.duration > 1000) || (timeSpentInbufferingState.filter(x => x.duration > 500 && x.timestamp >= lastBufferingState - 30000).length > 3)
    }

}

