interface AudioPlayer{
    audioVolume:number,
    songDuration:number,
    song:string,
    details:{}
}

// interface Details{
//     author:string,
//     year:number
// }

const audioPlayer:AudioPlayer={
    audioVolume:30,
    songDuration:60,
    song:"beatiful things",
    details:{
        author:"ni idea xd",
        year:"ni idea x2 xddddd"
    }
}

const {audioVolume:volume, songDuration:duration, song}=audioPlayer
// console.log(song, volume, duration);

