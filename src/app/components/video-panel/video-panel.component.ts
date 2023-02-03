import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-video-panel',
  templateUrl: './video-panel.component.html',
  styleUrls: ['./video-panel.component.scss']
})
export class VideoPanelComponent {
 
player:any= [];
timer:any = [];
timespent:any = [];


  items: MenuItem[] = [];
  public videoJsConfigObj = {
    preload: "metadata",
    controls: true,
    autoplay: true,
    overrideNative: true,
    techOrder: ["html5", "flash"],
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
  ngOnInit() {
    
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    
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
                icon:'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon:'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon:'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon:'pi pi-fw pi-align-justify'
            }
        ]
        },
        {
        label: 'Debugging',
        
        items: [
            {
                label: 'New',
                icon:'pi pi-fw pi-user-plus',

            },
            {
                label: 'Delete',
                icon:'pi pi-fw pi-user-minus',
            },
            {
                label: 'Search',
                icon:'pi pi-fw pi-users',
                items: [
                    {
                    label: 'Filter',
                    icon:'pi pi-fw pi-filter',
                    items: [
                        {
                            label: 'Print',
                            icon:'pi pi-fw pi-print'
                        }
                    ]
                    },
                    {
                    icon:'pi pi-fw pi-bars',
                    label: 'List'
                    }
                ]
            }
        ]
        },
        {
        label: 'Components & Databinding Deep Dive',
        
        items: [
            {
                label: 'Edit',
                icon:'pi pi-fw pi-pencil',
                items: [
                    {
                    label: 'Save',
                    icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                    label: 'Delete',
                    icon:'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon:'pi pi-fw pi-calendar-times',
                items: [
                    {
                    label: 'Remove',
                    icon:'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
        },
        {
          label: 'Course Project - Components & Databinding',
          
          items: [
              {
                  label: 'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items: [
                      {
                      label: 'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                      },
                      {
                      label: 'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                      }
                  ]
              },
              {
                  label: 'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items: [
                      {
                      label: 'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                      }
                  ]
              }
          ]
          },
          {
            label: 'Components & Databinding Deep Dive',
            
            items: [
                {
                    label: 'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items: [
                        {
                        label: 'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                        label: 'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items: [
                        {
                        label: 'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
            },
            {
              label: 'Exercise!  Building a Typing Game',
              
              items: [
                  {
                      label: 'Edit',
                      icon:'pi pi-fw pi-pencil',
                      items: [
                          {
                          label: 'Save',
                          icon:'pi pi-fw pi-calendar-plus'
                          },
                          {
                          label: 'Delete',
                          icon:'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  },
                  {
                      label: 'Archieve',
                      icon:'pi pi-fw pi-calendar-times',
                      items: [
                          {
                          label: 'Remove',
                          icon:'pi pi-fw pi-calendar-minus'
                          }
                      ]
                  }
              ]
              },
              {
                label: 'Using Services & Dependency Injection',
                
                items: [
                    {
                        label: 'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items: [
                            {
                            label: 'Save',
                            icon:'pi pi-fw pi-calendar-plus'
                            },
                            {
                            label: 'Delete',
                            icon:'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items: [
                            {
                            label: 'Remove',
                            icon:'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
                },
                {
                  label: 'Course Project - Services & Dependency Injection',
                  
                  items: [
                      {
                          label: 'Edit',
                          icon:'pi pi-fw pi-pencil',
                          items: [
                              {
                              label: 'Save',
                              icon:'pi pi-fw pi-calendar-plus'
                              },
                              {
                              label: 'Delete',
                              icon:'pi pi-fw pi-calendar-minus'
                              }
                          ]
                      },
                      {
                          label: 'Archieve',
                          icon:'pi pi-fw pi-calendar-times',
                          items: [
                              {
                              label: 'Remove',
                              icon:'pi pi-fw pi-calendar-minus'
                              }
                          ]
                      }
                  ]
                  },
                  {
                    label: 'Routing and Navigation Between Pages',
                    
                    items: [
                        {
                            label: 'Edit',
                            icon:'pi pi-fw pi-pencil',
                            items: [
                                {
                                label: 'Save',
                                icon:'pi pi-fw pi-calendar-plus'
                                },
                                {
                                label: 'Delete',
                                icon:'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archieve',
                            icon:'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                label: 'Remove',
                                icon:'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                    },
                    {
                      label: 'Components & Databinding Deep Dive',
                      
                      items: [
                          {
                              label: 'Edit',
                              icon:'pi pi-fw pi-pencil',
                              items: [
                                  {
                                  label: 'Save',
                                  icon:'pi pi-fw pi-calendar-plus'
                                  },
                                  {
                                  label: 'Delete',
                                  icon:'pi pi-fw pi-calendar-minus'
                                  }
                              ]
                          },
                          {
                              label: 'Archieve',
                              icon:'pi pi-fw pi-calendar-times',
                              items: [
                                  {
                                  label: 'Remove',
                                  icon:'pi pi-fw pi-calendar-minus'
                                  }
                              ]
                          }
                      ]
                      }
    ]
} 



onYouTubeIframeAPIReady() {console.log("Player is Ready")

	this.player = new YT.Player( 'player', {
		events: { 'onStateChange': this.onPlayerStateChange }
	});
}

 onPlayerStateChange(event:any) {
console.log(event);
	if(event.data === 1) { // Started playing
  console.log("Started Playing");
        if(!this.timespent.length){
            for(var i=0, l=parseInt(this.player.getDuration()); i<l; i++) this.timespent.push(false);
        }
	    this.timer = setInterval(this.record,100);
    } else {
		clearInterval(this.timer);
	}
}

 record(){
	this.timespent[ parseInt(this.player.getCurrentTime()) ] = true;
	this.showPercentage();
}

 showPercentage(){
    var percent = 0;
    for(var i=0, l=this.timespent.length; i<l; i++){
        if(this.timespent[i]) percent++;
    }
    percent = Math.round(percent / this.timespent.length * 100);
    let display  = document.getElementById('display');
      if(display != null)
        display.innerHTML = percent + "%";
    
    
}

}
