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
  '_0000_Layer_162.jpg',
  '_0001_Layer_161.jpg',
  '_0002_Layer_160.jpg',
  '_0003_Layer_159.jpg',
  '_0004_Layer_158.jpg',
  '_0005_Layer_157.jpg',
  '_0006_Layer_156.jpg',
  '_0007_Layer_155.jpg',
  '_0008_Layer_154.jpg',
  '_0009_Layer_153.jpg',
  '_0010_Layer_152.jpg',
  '_0011_Layer_151.jpg',
  '_0012_Layer_150.jpg',
  '_0013_Layer_149.jpg',
  '_0014_Layer_148.jpg',
  '_0015_Layer_147.jpg',
  '_0016_Layer_146.jpg',
  '_0017_Layer_145.jpg',
  '_0018_Layer_144.jpg',
  '_0019_Layer_143.jpg',
  '_0020_Layer_142.jpg',
  '_0021_Layer_141.jpg',
  '_0022_Layer_140.jpg',
  '_0023_Layer_139.jpg',
  '_0024_Layer_138.jpg',
  '_0025_Layer_137.jpg',
  '_0026_Layer_136.jpg',
  '_0027_Layer_135.jpg',
  '_0028_Layer_134.jpg',
  '_0029_Layer_133.jpg',
  '_0030_Layer_132.jpg',
  '_0031_Layer_131.jpg',
  '_0032_Layer_130.jpg',
  '_0033_Layer_129.jpg',
  '_0034_Layer_128.jpg',
  '_0035_Layer_127.jpg',
  '_0036_Layer_126.jpg',
  '_0037_Layer_125.jpg',
  '_0038_Layer_124.jpg',
  '_0039_Layer_123.jpg',
  '_0040_Layer_122.jpg',
  '_0041_Layer_121.jpg',
  '_0042_Layer_120.jpg',
  '_0043_Layer_119.jpg',
  '_0044_Layer_118.jpg',
  '_0045_Layer_117.jpg',
  '_0046_Layer_116.jpg',
  '_0047_Layer_115.jpg',
  '_0048_Layer_114.jpg',
  '_0049_Layer_113.jpg',
  '_0050_Layer_112.jpg',
  '_0051_Layer_111.jpg',
  '_0052_Layer_110.jpg',
  '_0053_Layer_109.jpg',
  '_0054_Layer_108.jpg',
  '_0055_Layer_107.jpg',
  '_0056_Layer_106.jpg',
  '_0057_Layer_105.jpg',
  '_0058_Layer_104.jpg',
  '_0059_Layer_103.jpg',
  '_0060_Layer_102.jpg',
  '_0061_Layer_101.jpg',
  '_0062_Layer_100.jpg',
  '_0063_Layer_99.jpg',
  '_0064_Layer_98.jpg',
  '_0065_Layer_97.jpg',
  '_0066_Layer_96.jpg',
  '_0067_Layer_95.jpg',
  '_0068_Layer_94.jpg',
  '_0069_Layer_93.jpg',
  '_0070_Layer_92.jpg',
  '_0071_Layer_91.jpg',
  '_0072_Layer_90.jpg',
  '_0073_Layer_89.jpg',
  '_0074_Layer_88.jpg',
  '_0075_Layer_87.jpg',
  '_0076_Layer_86.jpg',
  '_0077_Layer_85.jpg',
  '_0078_Layer_84.jpg',
  '_0079_Layer_83.jpg',
  '_0080_Layer_82.jpg',
  '_0081_Layer_81.jpg',
  '_0082_Layer_80.jpg',
  '_0083_Layer_79.jpg',
  '_0084_Layer_78.jpg',
  '_0085_Layer_77.jpg',
  '_0086_Layer_76.jpg',
  '_0087_Layer_75.jpg',
  '_0088_Layer_74.jpg',
  '_0089_Layer_73.jpg',
  '_0090_Layer_72.jpg',
  '_0091_Layer_71.jpg',
  '_0092_Layer_70.jpg',
  '_0093_Layer_69.jpg',
  '_0094_Layer_68.jpg',
  '_0095_Layer_67.jpg',
  '_0096_Layer_66.jpg',
  '_0097_Layer_65.jpg',
  '_0098_Layer_64.jpg',
  '_0099_Layer_63.jpg',
  '_0100_Layer_62.jpg',
  '_0101_Layer_61.jpg',
  '_0102_Layer_60.jpg',
  '_0103_Layer_59.jpg',
  '_0104_Layer_58.jpg',
  '_0105_Layer_57.jpg',
  '_0106_Layer_56.jpg',
  '_0107_Layer_55.jpg',
  '_0108_Layer_54.jpg',
  '_0109_Layer_53.jpg',
  '_0110_Layer_52.jpg',
  '_0111_Layer_51.jpg',
  '_0112_Layer_50.jpg',
  '_0113_Layer_49.jpg',
  '_0114_Layer_48.jpg',
  '_0115_Layer_47.jpg',
  '_0116_Layer_46.jpg',
  '_0117_Layer_45.jpg',
  '_0118_Layer_44.jpg',
  '_0119_Layer_43.jpg',
  '_0120_Layer_42.jpg',
  '_0121_Layer_41.jpg',
  '_0122_Layer_40.jpg',
  '_0123_Layer_39.jpg',
  '_0124_Layer_38.jpg',
  '_0125_Layer_37.jpg',
  '_0126_Layer_36.jpg',
  '_0127_Layer_35.jpg',
  '_0128_Layer_34.jpg',
  '_0129_Layer_33.jpg',
  '_0130_Layer_32.jpg',
  '_0131_Layer_31.jpg',
  '_0132_Layer_30.jpg',
  '_0133_Layer_29.jpg',
  '_0134_Layer_28.jpg',
  '_0135_Layer_27.jpg',
  '_0136_Layer_26.jpg',
  '_0137_Layer_25.jpg',
  '_0138_Layer_24.jpg',
  '_0139_Layer_23.jpg',
  '_0140_Layer_22.jpg',
  '_0141_Layer_21.jpg',
  '_0142_Layer_20.jpg',
  '_0143_Layer_19.jpg',
  '_0144_Layer_18.jpg',
  '_0145_Layer_17.jpg',
  '_0146_Layer_16.jpg',
  '_0147_Layer_15.jpg',
  '_0148_Layer_14.jpg',
  '_0149_Layer_13.jpg',
  '_0150_Layer_12.jpg',
  '_0151_Layer_11.jpg',
  '_0152_Layer_10.jpg',
  '_0153_Layer_9.jpg',
  '_0154_Layer_8.jpg',
  '_0155_Layer_7.jpg',
  '_0156_Layer_6.jpg',
  '_0157_Layer_5.jpg',
  '_0158_Layer_4.jpg',
  '_0159_Layer_3.jpg',
  '_0160_Layer_2.jpg',
  '_0161_Layer_1.jpg'
    
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
