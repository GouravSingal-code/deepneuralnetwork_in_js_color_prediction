let brain;
let train_data = [];
let xi= 700;
let xh= 900;
let xo= 1100;
let r="NULL";
let g="NULL";
let b="NULL";
let index;
let color ="NULL";
let b1;
let text_data="Before Training";
let img;
let x;

function preload() {
  img = loadImage('img5.jpg');
}



function setup() {
   brain = new NeuralNetwork(3 , 8 , 5);
   createCanvas(windowWidth, windowHeight);
   background(128,128,128);

   b1 = createButton("TRAIN DATA");
   col = fill(25, 23, 200, 50);
   b1.style('background-color', col);
   b1.style('font-size' , '40px' );
   b1.size(150 , 100);
   b1.position(1430 , 700);
   b1.mousePressed(train);



   image(img , 0  , 0 )



	 train_data[0] =
		 {
			 input:[0 , 0 , 0],
			 output:[1 , 0 , 0 , 0 , 0]
		 };

	 train_data[1] =
		 {
       input:[255 , 0 , 0],
			 output:[0 , 1 , 0 , 0 , 0]
		 };

	 train_data[2] =
		 {
       input:[0 , 0 , 255],
			 output:[0 , 0 , 1 , 0 , 0]
		 };

	 train_data[3] =
		 {
       input:[255 , 255 , 0],
			 output:[0 , 0 , 0 , 1 , 0]
		 };

   train_data[4] =
      {
           input:[0, 128 , 0],
    			 output:[0 , 0 , 0 , 0 , 1]
      };


   stroke(255);
   noFill();
   ellipse( 1500 , 400 , 200 , 200 );



}



function mousePressed() {



     if( mouseX >=200 && mouseX<=300 ){
       if( mouseY>=50 && mouseY<=150 ){
          index=0;
          r=0;
          g=0;
          b=0;
          color="black";
       }
     }

     if( mouseX >=200 && mouseX<=300 ){
       if( mouseY>=200 && mouseY<=300 ){
          index=1;
          r=255;
          g=0;
          b=0;
          color="red";
       }
     }

     if( mouseX >=200 && mouseX<=300 ){
       if( mouseY>=350 && mouseY<=450 ){
         index=2;
         r=0;
         g=0;
         b=255;
         textSize(50);
         text( "blue" ,  xi , 400 );
         color="blue";
       }
     }

     if( mouseX >=200 && mouseX<=300 ){
       if( mouseY>=500 && mouseY<=600 ){
         index=3;
         r=255;
         g=255;
         b=0;
         color="yellow";
       }
     }

     if( mouseX >=200 && mouseX<=300 ){
       if( mouseY>=650 && mouseY<=750 ){
         index=4;
         r=0;
         g=128;
         b=0;
         color="green";
       }
     }




}




function train(){

   text_data="Training is in Progress";
   x=0;
   b1.size( 140 , 90 );
  	 for( let i = 0 ; i<50000; i++ ){
  		 let data = random(train_data);
       brain.backpropogation(data.input , data.output);
  	 }

}

function draw(){

     background(128,128,128);


       image(img  , 1220, 700 );
       img.resize(150 , 100)




       if( text_data=="Before Training"){
       fill(162, 255, 51 );
       }

       if( text_data=="Training is in Progress"){
        fill(51 , 255 , 206)
       }

       if( text_data=="After Training"){
         fill(218, 247, 166);
       }

       stroke(0);
       textSize(50);
       text( text_data , 1500  , 100 );

       stroke(0);
       if( color=="NULL"){
         fill(255);
       }
       if( color=="black"){
         fill(0);
       }
       if( color=="red"){
         fill(255 , 0 , 0 );
       }
       if( color=="blue"){
         fill(0 , 0 , 255);
       }
       if( color=="yellow"){
         fill(255 , 255 , 0);
       }
       if( color=="green"){
         fill(0 , 128 , 0 );
       }

       textSize(50);
       text( color , xi-200  , 400 );
       line( xi-130 , 400 , xi , 300 );
        line( xi-130 , 400 , xi , 400 );
         line( xi-130 , 400 , xi , 500 );

       stroke(255);
       noFill();
       ellipse( 1500 , 400 , 200 , 200 );


       fill(0);
       rect( 200 , 50 , 100 , 100 );

       fill(255 , 0 , 0);
       rect( 200 , 200 , 100 , 100 );

       fill(0 , 0 , 255);
       rect( 200 , 350 , 100 , 100 );

       fill(255 , 255 , 0);
       rect( 200 , 500 , 100 , 100 );

       fill(0, 128 , 0);
       rect( 200 , 650 , 100 , 100 );

       stroke(255);
       fill(255);
       textSize(20);
       textAlign(CENTER , CENTER);
       text("Click Me" , 100 , 400 );
       fill(255);


//input neurons


      fill(255);
      ellipse( xi , 300 , 50 , 50 );
      ellipse( xi , 400 , 50 , 50 );
      ellipse( xi , 500 , 50 , 50 );




      stroke(0);
      fill(0);
      textSize(25);
      textAlign(CENTER , CENTER);
      text( r , xi , 300 );
      text(g , xi , 400);
      text( b , xi , 500);
      fill(255);


//hidden neurons

      ellipse( xh , 100 , 50 , 50 );
      ellipse( xh , 200 , 50 , 50 );
      ellipse( xh , 300 , 50 , 50 );
      ellipse( xh , 400 , 50 , 50 );
      ellipse( xh , 500 , 50 , 50 );
      ellipse( xh , 600 , 50 , 50 );
      ellipse( xh , 700 , 50 , 50 );



//output neurons
       fill(0 , 0 , 0 );
      ellipse( xo , 200 , 50 , 50 );
      fill( 255 , 0 , 0 );
      ellipse( xo , 300 , 50 , 50 );
      fill( 0 , 0 , 255 );
      ellipse( xo , 400 , 50 , 50 );
      fill( 255 , 255 , 0 );
      ellipse( xo , 500 , 50 , 50 );
      fill( 0 , 128 , 0 );
      ellipse( xo , 600 , 50 , 50 );




   var no = false;

    if( text_data=="Training is in Progress"){
      console.log(1);
      no = true;
      stroke(Math.round(random(0 , 255 )));
      fill(255);
      for( var j=300 ; j<600 ; j+=100 ){
       for( var i=100 ; i<800 ; i+=100 ){
        line( xi+25 , j , xh , i );
       }
      }


      stroke(Math.round(random(0 , 255)));
      for( var j=100 ; j<800 ; j+=100 ){
       for( var i=200 ; i<700 ; i+=100 ){
        line( xh , j , xo-25 , i );
       }
      }

      var counter = setInterval(function(){
        x++;
         if( x==3 ){
           text_data ='After Training';
           clearInterval(counter);
         }

      } , 2000);

    }else{



      stroke(255);
      for( var j=300 ; j<600 ; j+=100 ){
       for( var i=100 ; i<800 ; i+=100 ){
        line( xi+25 , j , xh , i );
       }
      }


      stroke(255);
      for( var j=100 ; j<800 ; j+=100 ){
       for( var i=200 ; i<700 ; i+=100 ){
        line( xh , j , xo-25 , i );
       }
      }

    }


    if(index!=undefined){

     data = train_data[index];
     let output = brain.feedforward(data.input , data.output);

     stroke(255 );
     fill(255  );
     textSize(25);
     textAlign(CENTER , CENTER);
     text( nf(output[0] , 1 , 2) , xo , 200 );
     stroke(255 , 255 , 0 );
     fill(255,  255 , 0  );
     text( nf(output[1] , 1 , 2), xo , 300);
     text( nf(output[2] , 1 , 2) , xo , 400);
     stroke(128 , 0 , 0 );
     fill(128 ,  0 , 0  );
     text( nf(output[3] , 1 , 2) , xo , 500);
     text( nf(output[4] , 1 , 2) , xo , 600);
     fill(255);


     let max =-1;
     let indice=-1;
     for( let i=0 ; i<output.length ; i++ ){
       if( max < output[i] ){
         max=output[i];
         indice=i;
       }
     }



     data = train_data[indice];
     fill(data.input[0] , data.input[1] , data.input[2]);
     ellipse( 1500 , 400 , 200 , 200 );

     }







}
