(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SQpI:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=[],a="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";n.definition={prefix:"fab",iconName:"youtube",icon:[576,512,t,"f167",a]},n.faYoutube=n.definition,n.prefix="fab",n.iconName="youtube",n.width=576,n.height=512,n.ligatures=t,n.unicode="f167",n.svgPathData=a},b9cQ:function(l,n,e){"use strict";e.r(n);var t=e("LoAr"),a=function(){},u=e("C9Ky"),i=e("7tlY"),o=e("WAtv"),s=e("/q0v"),c=e("wwR/"),r=e("iwai"),m=e("FOLC"),d=e("SeAg"),p=e("WT9V"),b=e("//aV"),g=e("U+go"),f=e("ChgE"),h=e("fxml"),y=e("YzpY"),x=e("TeY9"),V=e("fDe+"),O=e("jQpT"),I=e("Jg5f"),v=e("SQpI"),T=e("gX+C"),j=function(){function l(l,n){this._gallery=l,this.arr=L,this.code=N,this.youtubeIcon=v.faYoutube,this.videoIcon=T.faVideo,this.media$=n.asObservable().pipe(Object(I.a)(function(l){return"sm"===l.mqAlias||"xs"===l.mqAlias?{thumbWidth:80,thumbHeight:80}:{thumbWidth:120,thumbHeight:90}}))}return l.prototype.ngOnInit=function(){var l=this._gallery.ref("mixed");this.arr.map(function(n){switch(n.type){case c.c.Image:l.addImage({src:n.src,thumb:n.thumb,title:n.title});break;case c.c.Video:l.addVideo({src:n.src,thumb:n.thumb,poster:n.poster});break;case c.c.Youtube:l.addYoutube({src:n.src});break;default:l.addIframe({src:n.src,thumb:n.thumb})}})},l}(),L=[{type:"image",src:"assets/img/img13.jpg",thumb:"assets/img/thumb/img13.jpg",title:"Scelerisque dapibus fringilla consequat scelerisque torquent senectus porttitor, placerat fames convallis molestie lobortis diam aliquam"},{type:"image",src:"assets/img/img11.jpg",thumb:"assets/img/thumb/img11.jpg",title:"Lorem ipsum curabitur auctor netus facilisis inceptos vivamus fusce inceptos, ullamcorper ipsum id pharetra curabitur leo curabitur."},{type:"image",src:"assets/img/img3.jpg",thumb:"assets/img/thumb/img3.jpg",title:"Iaculis eros leo interdum erat tellus primis pharetra pulvinar, elit risus blandit tempus praesent himenaeos porta, neque elit neque ullamcorper ipsum curabitur at tempus aliquet quam fringilla."},{type:"image",src:"assets/img/img4.jpg",thumb:"assets/img/thumb/img4.jpg",title:"Morbi etiam interdum velit lacinia platea magna libero curae auctor"},{type:"video",src:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",thumb:"http://laza.jalbum.net/Testing%20Base%20as%20site/Media/slides/big_buck_bunny.jpg",poster:"http://laza.jalbum.net/Testing%20Base%20as%20site/Media/slides/big_buck_bunny.jpg"},{type:"youtube",src:"-OvvpsfU3NQ"},{type:"iframe",src:"https://material.angular.io/",thumb:"https://vignette.wikia.nocookie.net/random-ness/images/5/5f/TEH_POOTIS_MAN.jpg/revision/latest?cb=20130508152055"}],N={template:'<gallery id="mixedExample" [thumbTemplate]="thumbTemplate" [itemTemplate]="itemTemplate"></gallery>\n\n\x3c!-- Add custom template to thumbnails --\x3e\n<ng-template #thumbTemplate let-type="type">\n  <span *ngIf="type === \'youtube\'" class="item-type">\n    <fa-icon [icon]="youtubeIcon" size="lg"></fa-icon>\n  </span>\n  <span *ngIf="type === \'video\'" class="item-type">\n    <fa-icon [icon]="videoIcon" size="lg"></fa-icon>\n  </span>\n</ng-template>\n\n\x3c!-- Add custom template to image items --\x3e\n<ng-template #itemTemplate\n             let-index="index"\n             let-type="type"\n             let-data="data"\n             let-currIndex="currIndex">\n  <span *ngIf="type === \'image\' && index === currIndex" [@slideAnimation] class="item-text">\n    {{data?.title}}\n  </span>\n</ng-template>',component:"import { Component, OnInit } from '@angular/core';\nimport { Gallery, GalleryRef } from '@ngx-gallery/core';\n\n@Component({...})\nexport class AppComponent implements OnInit {\n\n  galleryId = 'mixedExample';\n\n  constructor(private gallery: Gallery) { }\n\n  ngOnInit() {\n    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);\n\n    galleryRef.addImage({\n      src: 'IMAGE_URL',\n      thumb: '(OPTIONAL)IMAGE_THUMBNAIL_URL',\n      title: 'Some title'\n    });\n\n    galleryRef.addVideo({\n      src: 'VIDEO_URL',\n      thumb: '(OPTIONAL)VIDEO_THUMBNAIL_URL',\n      poster: '(OPTIONAL)VIDEO_POSTER_URL'\n    });\n\n    galleryRef.addYoutube({\n      src: 'VIDEO_ID'\n    });\n\n    galleryRef.addIframe({\n      src: 'IFRAME_URL',\n      thumb: '(OPTIONAL)IMAGE_THUMBNAIL_URL'\n    });\n  }\n}"},A=e("SPdK"),_=t.Ma({encapsulation:0,styles:[["#mixed{margin:2em 0 3em}  #mixed .item-type{padding:6px;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.5)}  #mixed .item-text{position:absolute;top:0;left:0;right:0;color:#fff;background-color:rgba(0,0,0,.5);margin:3em auto 0;border-radius:4px;width:100%;max-width:500px;padding:10px 15px;text-align:justify}"]],data:{animation:[{type:7,name:"slideAnimation",definitions:[{type:0,name:"in",styles:{type:6,styles:{transform:"translateY(0)",opacity:1},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null},{type:4,styles:null,timings:400}],options:null},{type:1,expr:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateY(-100%)",opacity:0},offset:null},timings:400}],options:null}],options:{}}]}});function M(l){return t.fb(0,[(l()(),t.Oa(0,0,null,null,1,"gallery",[["id","mixed"]],[[2,"g-fluid",null]],null,null,s.b,s.a)),t.Na(1,770048,null,0,c.b,[c.a],{id:[0,"id"],thumbWidth:[1,"thumbWidth"],thumbHeight:[2,"thumbHeight"],itemTemplate:[3,"itemTemplate"],thumbTemplate:[4,"thumbTemplate"]},null)],function(l,n){l(n,1,0,"mixed",n.context.$implicit.thumbWidth,n.context.$implicit.thumbHeight,t.Xa(n.parent,55),t.Xa(n.parent,54))},function(l,n){l(n,0,0,t.Xa(n,1).gallerySize)})}function k(l){return t.fb(0,[(l()(),t.Oa(0,0,null,null,2,"span",[["class","item-type"]],null,null,null,null,null)),(l()(),t.Oa(1,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,r.b,r.a)),t.Na(2,573440,null,0,m.a,[d.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null)],function(l,n){l(n,2,0,n.component.youtubeIcon,"lg")},function(l,n){l(n,1,0,t.Xa(n,2).renderedIconHTML)})}function w(l){return t.fb(0,[(l()(),t.Oa(0,0,null,null,2,"span",[["class","item-type"]],null,null,null,null,null)),(l()(),t.Oa(1,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,r.b,r.a)),t.Na(2,573440,null,0,m.a,[d.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null)],function(l,n){l(n,2,0,n.component.videoIcon,"lg")},function(l,n){l(n,1,0,t.Xa(n,2).renderedIconHTML)})}function z(l){return t.fb(0,[(l()(),t.Fa(16777216,null,null,1,null,k)),t.Na(1,16384,null,0,p.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(16777216,null,null,1,null,w)),t.Na(3,16384,null,0,p.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(0,null,null,0))],function(l,n){l(n,1,0,"youtube"===n.context.type),l(n,3,0,"video"===n.context.type)},null)}function C(l){return t.fb(0,[(l()(),t.Oa(0,0,null,null,1,"span",[["class","item-text"]],[[24,"@slideAnimation",0]],null,null,null,null)),(l()(),t.db(1,null,[" "," "]))],null,function(l,n){l(n,0,0,void 0),l(n,1,0,null==n.parent.context.data?null:n.parent.context.data.title)})}function R(l){return t.fb(0,[(l()(),t.Fa(16777216,null,null,1,null,C)),t.Na(1,16384,null,0,p.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Fa(0,null,null,0))],function(l,n){l(n,1,0,"image"===n.context.type&&n.context.index===n.context.currIndex)},null)}function P(l){return t.fb(0,[(l()(),t.Oa(0,0,null,null,53,"ng-scrollbar",[],null,null,null,b.b,b.a)),t.Na(1,4374528,null,0,g.a,[t.x,t.C,p.d],null,null),(l()(),t.Oa(2,0,null,0,2,"div",[["class","page-title"]],null,null,null,null,null)),(l()(),t.Oa(3,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Advanced"])),(l()(),t.Oa(5,0,null,0,46,"div",[["class","page-content"]],null,null,null,null,null)),(l()(),t.Oa(6,0,null,null,45,"section",[],null,null,null,null,null)),(l()(),t.Oa(7,0,null,null,2,"section-title",[],null,null,null,f.b,f.a)),t.Na(8,49152,null,0,h.a,[],null,null),(l()(),t.db(-1,0,["Overview"])),(l()(),t.Oa(10,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.db(-1,null,["The gallery supports the ability for items and thumbnails to extend their templates. To do so, you have to define your custom template, then the content can be provided as an "])),(l()(),t.Oa(12,0,null,null,0,"code",[["class","hljs"]],[[8,"textContent",0]],null,null,null,null)),(l()(),t.Oa(13,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Use "])),(l()(),t.Oa(15,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),t.db(-1,null,["[itemTemplate]"])),(l()(),t.db(-1,null,[" for items and "])),(l()(),t.Oa(18,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),t.db(-1,null,["[thumbTemplate]"])),(l()(),t.db(-1,null,[" for thumbnails."])),(l()(),t.Oa(21,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Passing in data to a custom template"])),(l()(),t.Oa(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.db(-1,null,["When using a custom template, additional context data can be used to render the data as needed."])),(l()(),t.Oa(25,0,null,null,13,"p",[],null,null,null,null,null)),(l()(),t.Oa(26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Available data:"])),(l()(),t.Oa(28,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),t.db(-1,null,['let-index="index"'])),(l()(),t.db(-1,null,[", "])),(l()(),t.Oa(31,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),t.db(-1,null,['let-type="type"'])),(l()(),t.db(-1,null,[", "])),(l()(),t.Oa(34,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),t.db(-1,null,['let-data="data"'])),(l()(),t.db(-1,null,[" and "])),(l()(),t.Oa(37,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),t.db(-1,null,['let-currIndex="currIndex"'])),(l()(),t.Oa(39,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Example"])),(l()(),t.Fa(16777216,null,null,2,null,M)),t.Na(42,16384,null,0,p.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),t.Za(131072,p.b,[t.h]),(l()(),t.Oa(44,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Template"])),(l()(),t.Oa(46,0,null,null,1,"hl-code",[],null,null,null,y.b,y.a)),t.Na(47,4243456,null,0,x.a,[t.h],{code:[0,"code"],height:[1,"height"]},null),(l()(),t.Oa(48,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.db(-1,null,["Code"])),(l()(),t.Oa(50,0,null,null,1,"hl-code",[],null,null,null,y.b,y.a)),t.Na(51,4243456,null,0,x.a,[t.h],{code:[0,"code"],height:[1,"height"]},null),(l()(),t.Oa(52,0,null,0,1,"footer",[],null,null,null,V.b,V.a)),t.Na(53,49152,null,0,O.a,[],null,null),(l()(),t.Fa(0,[["thumbTemplate",2]],null,0,null,z)),(l()(),t.Fa(0,[["itemTemplate",2]],null,0,null,R))],function(l,n){var e=n.component;l(n,42,0,t.eb(n,42,0,t.Xa(n,43).transform(e.media$))),l(n,47,0,e.code.template,400),l(n,51,0,e.code.component,400)},function(l,n){l(n,12,0,"<ng-template>")})}var E=t.Ka("advanced-example",j,function(l){return t.fb(0,[(l()(),t.Oa(0,0,null,null,1,"advanced-example",[],null,null,null,P,_)),t.Na(1,114688,null,0,j,[c.a,A.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),U=e("y7gG"),H=e("LYzL"),S=e("eXL1"),Y=e("C7Lb"),q=e("s8WJ"),W=e("981U"),F=e("WV+C"),X=e("+3V+"),D=e("Ho7M"),G=e("dgjn"),B=e("/hyk"),K=e("GcYS"),Q=e("rXXt"),J=e("abkR"),$=e("IvSS"),Z=e("V3Ng"),ll=e("a198"),nl=e("w9fW"),el=e("vvyD"),tl=e("AFqu"),al=e("UelK"),ul=e("WgBV"),il=e("LxDK"),ol=e("V7OE"),sl=e("ResS"),cl=e("9LWm"),rl=e("PCNd"),ml=e("rh80");e.d(n,"AdvancedExampleModuleNgFactory",function(){return dl});var dl=t.La(a,[],function(l){return t.Ua([t.Va(512,t.j,t.Aa,[[8,[u.a,i.a,o.a,E]],[3,t.j],t.v]),t.Va(4608,p.m,p.l,[t.s,[2,p.x]]),t.Va(4608,U.c,U.c,[]),t.Va(4608,H.a,H.a,[]),t.Va(4608,S.a,S.a,[S.g,S.c,t.j,S.f,S.d,t.p,t.x,p.d,Y.b]),t.Va(5120,S.h,S.i,[S.a]),t.Va(5120,q.c,q.d,[S.a]),t.Va(4608,q.e,q.e,[S.a,t.p,[2,p.g],[2,q.b],q.c,[3,q.e],S.c]),t.Va(4608,A.k,A.j,[A.d,A.h]),t.Va(5120,t.b,function(l,n){return[A.n(l,n)]},[p.d,t.z]),t.Va(1073742336,p.c,p.c,[]),t.Va(1073742336,W.r,W.r,[[2,W.x],[2,W.o]]),t.Va(1073742336,U.d,U.d,[]),t.Va(1073742336,F.b,F.b,[]),t.Va(1073742336,X.b,X.b,[]),t.Va(1073742336,D.a,D.a,[]),t.Va(1073742336,G.a,G.a,[]),t.Va(1073742336,Y.a,Y.a,[]),t.Va(1073742336,H.d,H.d,[[2,H.b]]),t.Va(1073742336,B.b,B.b,[]),t.Va(1073742336,H.f,H.f,[]),t.Va(1073742336,K.c,K.c,[]),t.Va(1073742336,Q.b,Q.b,[]),t.Va(1073742336,J.g,J.g,[]),t.Va(1073742336,$.b,$.b,[]),t.Va(1073742336,S.e,S.e,[]),t.Va(1073742336,q.j,q.j,[]),t.Va(1073742336,Z.h,Z.h,[]),t.Va(1073742336,ll.b,ll.b,[]),t.Va(1073742336,nl.j,nl.j,[]),t.Va(1073742336,el.a,el.a,[]),t.Va(1073742336,tl.c,tl.c,[]),t.Va(1073742336,A.e,A.e,[]),t.Va(1073742336,al.b,al.b,[]),t.Va(1073742336,ul.a,ul.a,[]),t.Va(1073742336,il.a,il.a,[]),t.Va(1073742336,ol.a,ol.a,[[2,A.l],t.z]),t.Va(1073742336,c.d,c.d,[]),t.Va(1073742336,sl.c,sl.c,[]),t.Va(1073742336,cl.b,cl.b,[]),t.Va(1073742336,g.b,g.b,[]),t.Va(1073742336,m.e,m.e,[]),t.Va(1073742336,rl.a,rl.a,[]),t.Va(1073742336,a,a,[]),t.Va(256,ll.a,{separatorKeyCodes:[ml.f]},[]),t.Va(1024,W.m,function(){return[[{path:"",component:j}]]},[])])})},"gX+C":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=[],a="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z";n.definition={prefix:"fas",iconName:"video",icon:[576,512,t,"f03d",a]},n.faVideo=n.definition,n.prefix="fas",n.iconName="video",n.width=576,n.height=512,n.ligatures=t,n.unicode="f03d",n.svgPathData=a}}]);