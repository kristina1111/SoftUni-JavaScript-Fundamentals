function printTrackInfo(arr) {
    let track = {
        'artistName' : arr[1],
        'trackName' : arr[0],
        'duration' : arr[2]
    };

    return `Now Playing: ${track.artistName} - ${track.trackName} [${track.duration}]`;
}

console.log(printTrackInfo(['Number One', 'Nelly', '4:09']));