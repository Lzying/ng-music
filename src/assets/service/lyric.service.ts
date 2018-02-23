import { Injectable } from '@angular/core';

@Injectable()
export class LyricService {

    analysisLyric(lyric: any): any {
        let tlyric: any = []
        let lrc;
        lrc = lyric.lrc.lyric.split("\n");
        if (lyric.tlyric.lyric) {
            tlyric = lyric.tlyric.lyric.split("\n");
        } else {
            let tlyric = null;
        }
        console.log(lyric);
        console.log(tlyric);
        return {
            lrc: lrc,
            tlyric: tlyric
        };
    }

}
