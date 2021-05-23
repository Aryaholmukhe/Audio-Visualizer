class ChooseSong{
    constructor(){
        crd = this.cradlesSong = createButton("Cradles - Sub Urban")
        tfi = this.thereforeIAmSong = createButton("Therefore I am - Billie Eilish")
        beatsong = this.beatSong = createButton("Some cheerful Beats")
        md = this.mAd = createButton("Mad at Disney - Salem Ilese")
     }
    display(){
        this.cradlesSong.position(width/10, 50)
        this.thereforeIAmSong.position(width/10, 150)
        this.beatSong.position(width/10, 250)
        this.mAd.position(width/10, 350)

        this.cradlesSong.mousePressed(()=>{
            if(song===s2|| song ===s3|| song === s4){
                song.stop()
            }
            song = s1;
            if(song.isPlaying()===false&&song===s1 ){
                song.play()
                this.cradlesSong.html("Cradles - Sub Urban: pause")
            }else{
                song.pause()
                this.cradlesSong.html("Cradles - Sub Urban: play")
            }
        })
        this.thereforeIAmSong.mousePressed(()=>{
            if(song === s1 || song === s3 || song === s4){
                song.stop()
            }
            song = s2;
            if(song.isPlaying()===false&&song === s2){
                song.play()
                this.thereforeIAmSong.html("Therefore I am - Billie Eilish: pause")
            }else{
                song.pause()
                this.thereforeIAmSong.html("Therefore I am - Billie Eilish: play")
            }
        })
        
        this.beatSong.mousePressed(()=>{
            if(song===s2 || song === s1 || song === s4){
                song.stop()
            }
            song = s3;
            if(song.isPlaying()===false&&song===s3){
                song.play()
                this.beatSong.html("Some cheerful Beats: pause")
            }else{
                song.pause()
                this.beatSong.html("Some cheerful Beats: play")
            }
        })

        this.mAd.mousePressed(()=>{
            if(song===s2 || song === s1 ||song === s3){
                song.stop()
            }
            song = s4;
            if(song.isPlaying()===false&&song===s4){
                song.play()
                this.mAd.html("Mad at Disney - Salem Ilese: pause")
            }else{
                song.pause()
                this.mAd.html("Mad at Disney - Salem Ilese: play")
            }
        })
    
}
}