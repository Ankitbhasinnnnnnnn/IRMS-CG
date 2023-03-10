import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-video-panel',
  templateUrl: './video-panel.component.html',
  styleUrls: ['./video-panel.component.scss'],
})
export class VideoPanelComponent {
  title = 'dummyApp-YTIFrameAPI';
  showVideo = true;

  /* 1. Some required variables which will be used by YT API*/
  public YT: any;
  public video: string = "";
  public player: any;
  public reframed: Boolean = false;
  public timespent: any[]= [];
  public timer: any;
//

  items: MenuItem[] = [];
  itemsTab: MenuItem[] = [];
  public videoJsConfigObj = {
    preload: 'metadata',
    controls: true,
    autoplay: true,
    overrideNative: true,
    techOrder: ['html5', 'flash'],
    html5: {
        nativeVideoTracks: false,
        nativeAudioTracks: false,
        nativeTextTracks: false,
        hls: {
            withCredentials: false,
            overrideNative: true,
            debug: true
        }
    }
    
    
};
 /* 2. Initialize method for YT IFrame API */
//  init() {
//   // Return if Player is already created
//   if (window['YT']) {
//     this.startVideo();
//     return;
//   }  

//   var tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     var firstScriptTag = document.getElementsByTagName('script')[0];
//     if(firstScriptTag.parentNode!=null)
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
//     (window as any).onYouTubeIframeAPIReady = () => this.startVideo()
// }
// toggleVideo() {
//   if (this.showVideo)
//     this.showVideo = false;
//   else {
//     this.showVideo = true;
//     setTimeout(() => {
//       this.init()
//     })
//   }
// }
// startVideo() {
//   this.reframed = false;
//   this.player = new window['YT'].Player('player', {
//     videoId: this.video,
//     playerVars: {
//       autoplay: 1,
//       modestbranding: 1,
//       controls: 1,
//       disablekb: 1,
//       rel: 0,
//       showinfo: 0,
//       fs: 0,
//       playsinline: 1

//     },
//     events: {
//       'onStateChange': this.onPlayerStateChange.bind(this),
//       'onError': this.onPlayerError.bind(this),
//       'onReady': this.onPlayerReady.bind(this),
//     }
//   });
// }
 /* 4. It will be called when the Video Player is ready */
 onPlayerReady(event: any) {

  event.target.playVideo();

}
  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

 
 
  onPlayerError(event:any) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
    
  };
  ngOnInit() {
    
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';

    document.body.appendChild(tag);
    this.items = [
      {
        label: 'Getting Started',

        items: [
            {
                label: 'New',
                
                items: [
                    {
                    label: 'Bookmark',
                    icon:'pi pi-fw pi-bookmark'
                    },
                    {
                    label: 'Video',
                    icon:'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon:'pi pi-fw pi-trash'
            },
            {
                label: 'Export',
                icon:'pi pi-fw pi-external-link'
            }
        ]
        },
        {
        label: 'The Basics',

        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Debugging',

        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Components & Databinding Deep Dive',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Course Project - Components & Databinding',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Components & Databinding Deep Dive',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Exercise!  Building a Typing Game',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Using Services & Dependency Injection',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Course Project - Services & Dependency Injection',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Routing and Navigation Between Pages',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Components & Databinding Deep Dive',

        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
    ];
    this.itemsTab = [
      { label: 'Overview', icon: 'pi pi-fw pi-home' },
      { label: 'Q&A', icon: 'pi pi-fw pi-calendar' },
      { label: 'Notes', icon: 'pi pi-fw pi-pencil' },
      { label: 'Announcements', icon: 'pi pi-fw pi-file' },
      { label: 'Reviews', icon: 'pi pi-fw pi-cog' },
    ];
  }

  //   onYouTubeIframeAPIReady() {
  //     console.log('Player is Ready');


// onYouTubeIframeAPIReady() {console.log("Player is Ready")

// 	this.player = new YT.Player( 'player', {
// 		events: { 'onStateChange': this.onPlayerStateChange }
// 	});
// }

//  onPlayerStateChange(event:any) {
// console.log(event);
// 	if(event.data === 1) { // Started playing
//   console.log("Started Playing");
//         if(!this.timespent.length){
//             for(var i=0, l=parseInt(this.player.getDuration()); i<l; i++) this.timespent.push(false);
//         }
// 	    this.timer = setInterval(this.record,100);
//     } else {
// 		clearInterval(this.timer);
// 	}
// }

//  record(){
// 	this.timespent[ parseInt(this.player.getCurrentTime()) ] = true;
// 	this.showPercentage();
// }

//  showPercentage(){
//     var percent = 0;
//     for(var i=0, l=this.timespent.length; i<l; i++){
//         if(this.timespent[i]) percent++;
//     }
//     percent = Math.round(percent / this.timespent.length * 100);
//     let display  = document.getElementById('display');
//       if(display != null)
//         display.innerHTML = percent + "%";
    
    
// }

}
