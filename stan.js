//this creates new sections with random order of all the images and populates each, applies styles

Stanlee = {
  setup: function() {

    sect2 = $('<section>').attr('style', 'position:absolute;margin-top:3000px;margin-left:20%;')
    .attr('id', 'vids');
    Stanlee.vids.forEach( function( vid, vidNum ) {
      sect2.append(
        $( '<img>' ).attr('src', 'imgs/vid/' + vid)
      );
      sect2.append($('<br>'));
    });
        
    $( 'body' ).append( sect2 );

    var abt = true;
    var rep = true;
    var tmpStan = Stanlee.imgs;
    var bkgStan = Stanlee.bkgs;
    
    tmpStan.shuffle();  
    bkgStan.shuffle();
    
    tmpStan.forEach( function( img, imgNum ) {
      var st = ""
      sect = $('<section>').attr( 'id', (abt ? 'home' : 'about') );
      
      if (!abt) {
        st = 'box-shadow: 0 0 150px rgba(0,0,0,0.8);-webkit-box-shadow: 0 0 150px #' + Stanlee.colors[Math.round(Math.random()*Stanlee.colors.length-1)];
      }
            
      sect.attr( 'data-type', 'background').attr('data-speed', Math.round(Math.random()*40) ).attr('data-offset', Math.round(Math.random()*80)+ "%")
      .attr( 'style', 'background: url(imgs/bkgs/' + bkgStan[imgNum % bkgStan.length]  + ') 0 0 ' + (rep ? 'repeat-x':'repeat-y') 
        + ' fixed;height:' + (Math.round(Math.random()*800)+400)  + 'px;' + st
       /* + 'background-color:#' + Stanlee.colors[Math.round(Math.random()*Stanlee.colors.length-1)]*/)
      .append(
        $( '<section>' ).attr('id', 'animate')
        .append(
          $( '<img>' ).attr( 'src', 'imgs/imgs/' + img)
          .attr('style', /*'top:' + Math.round(Math.random()*70) + '%; +*/ 'left:' + Math.round(Math.random()*80) +'%;position:absolute')
        )
      ); 
      
      abt = !abt;
      rep = Math.random() < 0.66 ? true : false;
      
      
      $( 'body' ).append( sect );
       
    });
    
     
  },
  
  imgs: [
  'IMG_0001.png',
  'IMG_0003.png',
  'IMG_0005.png',
  'IMG_0006.png',
  'IMG_0008.png',
  'IMG_0009.png',
  'IMG_0010.png',
  'IMG_0012.png',
  'IMG_0013.png',
  'IMG_0015.png',
  'IMG_0016.png',
  'IMG_0017.png',
  'IMG_0018.png',
  'IMG_0019.png',
  'jpeg-2.png',
  'jpeg-5.png',
  'jpeg-7.png',
  'jpeg-8.png',
  'jpeg-9.png',
  'jpeg-10.png',
  'jpeg-11.png',
  'jpeg-12.png',
  'jpeg-13.png',
  'jpeg.png',
  'photo-1-.png',
  'photo-1.png',
  'photo-2.png',
  'photo-3.png',
  'photo-4.png',
  'photo-5.png',
  'photo-6.png',
  'photo-7.png',
  'photo-8.png',
  'photo-9.png',
  'photo-10.png',
  'photo.png',
  'photo113.png'
  ],
  bkgs: [
  'jpeg-2.png',
  'jpeg-11.png',
  'jpeg-12.png',
  'jpeg-13.png',
  'photo-8.png',
  'photo113.png'
  
  ],
  
  vids: [
	'0000Layer162.jpg',
	'0001Layer161.jpg',
	'0002Layer160.jpg',
	'0003Layer159.jpg',
	'0004Layer158.jpg',
	'0005Layer157.jpg',
	'0006Layer156.jpg',
	'0007Layer155.jpg',
	'0008Layer154.jpg',
	'0009Layer153.jpg',
	'0010Layer152.jpg',
	'0011Layer151.jpg',
	'0012Layer150.jpg',
	'0013Layer149.jpg',
	'0014Layer148.jpg',
	'0015Layer147.jpg',
	'0016Layer146.jpg',
	'0017Layer145.jpg',
	'0018Layer144.jpg',
	'0019Layer143.jpg',
	'0020Layer142.jpg',
	'0021Layer141.jpg',
	'0022Layer140.jpg',
	'0023Layer139.jpg',
	'0024Layer138.jpg',
	'0025Layer137.jpg',
	'0026Layer136.jpg',
	'0027Layer135.jpg',
	'0028Layer134.jpg',
	'0029Layer133.jpg',
	'0030Layer132.jpg',
	'0031Layer131.jpg',
	'0032Layer130.jpg',
	'0033Layer129.jpg',
	'0034Layer128.jpg',
	'0035Layer127.jpg',
	'0036Layer126.jpg',
	'0037Layer125.jpg',
	'0038Layer124.jpg',
	'0039Layer123.jpg',
	'0040Layer122.jpg',
	'0041Layer121.jpg',
	'0042Layer120.jpg',
	'0043Layer119.jpg',
	'0044Layer118.jpg',
	'0045Layer117.jpg',
	'0046Layer116.jpg',
	'0047Layer115.jpg',
	'0048Layer114.jpg',
	'0049Layer113.jpg',
	'0050Layer112.jpg',
	'0051Layer111.jpg',
	'0052Layer110.jpg',
	'0053Layer109.jpg',
	'0054Layer108.jpg',
	'0055Layer107.jpg',
	'0056Layer106.jpg',
	'0057Layer105.jpg',
	'0058Layer104.jpg',
	'0059Layer103.jpg',
	'0060Layer102.jpg',
	'0061Layer101.jpg',
	'0062Layer100.jpg',
	'0063Layer99.jpg',
	'0064Layer98.jpg',
	'0065Layer97.jpg',
	'0066Layer96.jpg',
	'0067Layer95.jpg',
	'0068Layer94.jpg',
	'0069Layer93.jpg',
	'0070Layer92.jpg',
	'0071Layer91.jpg',
	'0072Layer90.jpg',
	'0073Layer89.jpg',
	'0074Layer88.jpg',
	'0075Layer87.jpg',
	'0076Layer86.jpg',
	'0077Layer85.jpg',
	'0078Layer84.jpg',
	'0079Layer83.jpg',
	'0080Layer82.jpg',
	'0081Layer81.jpg',
	'0082Layer80.jpg',
	'0083Layer79.jpg',
	'0084Layer78.jpg',
	'0085Layer77.jpg',
	'0086Layer76.jpg',
	'0087Layer75.jpg',
	'0088Layer74.jpg',
	'0089Layer73.jpg',
	'0090Layer72.jpg',
	'0091Layer71.jpg',
	'0092Layer70.jpg',
	'0093Layer69.jpg',
	'0094Layer68.jpg',
	'0095Layer67.jpg',
	'0096Layer66.jpg',
	'0097Layer65.jpg',
	'0098Layer64.jpg',
	'0099Layer63.jpg',
	'0100Layer62.jpg',
	'0101Layer61.jpg',
	'0102Layer60.jpg',
	'0103Layer59.jpg',
	'0104Layer58.jpg',
	'0105Layer57.jpg',
	'0106Layer56.jpg',
	'0107Layer55.jpg',
	'0108Layer54.jpg',
	'0109Layer53.jpg',
	'0110Layer52.jpg',
	'0111Layer51.jpg',
	'0112Layer50.jpg',
	'0113Layer49.jpg',
	'0114Layer48.jpg',
	'0115Layer47.jpg',
	'0116Layer46.jpg',
	'0117Layer45.jpg',
	'0118Layer44.jpg',
	'0119Layer43.jpg',
	'0120Layer42.jpg',
	'0121Layer41.jpg',
	'0122Layer40.jpg',
	'0123Layer39.jpg',
	'0124Layer38.jpg',
	'0125Layer37.jpg',
	'0126Layer36.jpg',
	'0127Layer35.jpg',
	'0128Layer34.jpg',
	'0129Layer33.jpg',
	'0130Layer32.jpg',
	'0131Layer31.jpg',
	'0132Layer30.jpg',
	'0133Layer29.jpg',
	'0134Layer28.jpg',
	'0135Layer27.jpg',
	'0136Layer26.jpg',
	'0137Layer25.jpg',
	'0138Layer24.jpg',
	'0139Layer23.jpg',
	'0140Layer22.jpg',
	'0141Layer21.jpg',
	'0142Layer20.jpg',
	'0143Layer19.jpg',
	'0144Layer18.jpg',
	'0145Layer17.jpg',
	'0146Layer16.jpg',
	'0147Layer15.jpg',
	'0148Layer14.jpg',
	'0149Layer13.jpg',
	'0150Layer12.jpg',
	'0151Layer11.jpg',
	'0152Layer10.jpg',
	'0153Layer9.jpg',
	'0154Layer8.jpg',
	'0155Layer7.jpg',
	'0156Layer6.jpg',
	'0157Layer5.jpg',
	'0158Layer4.jpg',
	'0159Layer3.jpg',
	'0160Layer2.jpg',
	'0161Layer1.jpg'
    
  ],
  
  colors: [
    '0000CC',	
    '0000FF',
    '0033CC',	
    '0033FF',
    '0066CC',	
    '0066FF',
    '0099CC',	
    '0099FF',
    '00CCCC',	
    '00CCFF',
    '00FFCC',	
    '00FFFF',
    '3300CC',	
    '3300FF',
    '3333CC',	
    '3333FF',
    '3366CC',	
    '3366FF',
    '3399CC',	
    '3399FF',
    '33CCCC',	
    '33CCFF',
    '33FFCC',	
    '33FFFF',
    '6600CC',	
    '6600FF',
    '6633CC',	
    '6633FF',
    '6666CC',	
    '6666FF',
    '6699CC',	
    '6699FF',
    '66CCCC',	
    '66CCFF',
    '66FFFF',
    '9900CC',	
    '9900FF',
    '9933CC',	
    '9933FF',
    '9966CC',	
    '9966FF',
    '9999CC',	
    '9999FF',
    '99CCCC',	
    '99CCFF',
    '99FFCC',	
    '99FFFF',
    'CC00CC',	
    'CC00FF',
    'CC33CC',	
    'CC33FF',
    'CC66CC',	
    'CC66FF',
    'CC99CC',	
    'CC99FF',
    'CCCCCC',	
    'CCCCFF',
    'CCFFCC',	
    'CCFFFF',
    'FF00CC',	
    'FF00FF',
    'FF33CC',	
    'FF33FF',
    'FF66CC',	
    'FF66FF',
    'FF99CC',	
    'FF99FF',
    'FFCCCC',	
    'FFCCFF',
    'FFFFCC',	
    'FFFFFF'    
  ]
}


$( document ).ready( Stanlee.setup );


//a function to randomly sort lists of images
Array.prototype.shuffle = function (){
  var i = this.length, j, temp;
  if ( i == 0 ) return;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
};
