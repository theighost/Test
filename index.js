function VpaidAd(){

    this.attributes = {
        'companions' : '',
        'desiredBitrate' : 256,
        'duration': 30,
        'expanded' : false,
        'height' : 0,
        'icons' : false,
        'linear' : true,
        'remainingTime' : 13,
        'skippableState' : false,
        'viewMode' : 'normal',
        'width' : 0,
        'volume' : 1.0
      };


    this.adParams = {}

    var sendMessage = function(){

    }

    this.handle = function(){
        return '2.1.05';
    }
    this.subscribe = function(){

    }

    this.initad = function(width, height, viewMode, bitRate, creativeData, enviromentalVars){
        let player = document.createElement('video');
        player.src = "//thewordstreets.nyc3.digitaloceanspaces.com/videoplayback.mp4"
        player.style.width = width+"px";
        player.style.height = height+"px";
        player.autoplay = true;
        player.volume = 1;
        player.muted = false;
        document.body.appendChild(player);

        this.attributes['width'] = width;
        this.attributes['height'] = height;
        this.attributes['viewMode'] = viewMode;
        this.attributes['desiredBitrate'] = desiredBitrate;

        this.slot_ = environmentVars.slot;
        this.videoSlot_ = environmentVars.videoSlot;

    }
}


function getVPAIDAd(){
    return new VpaidAd();
}
