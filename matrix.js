function sigmoid_function(x){
  return 1/(1+Math.exp(-x));
}

function sigmoid_derivative(x){
  return  x*(1-x) ;
}


class Matrix{

constructor(rows , cols){
  this.rows = rows;
  this.cols = cols;
  this.matrix = [];

    for( let i = 0 ; i<this.rows ; i++ ){
      this.matrix[i] = [];
      for( let j=0 ; j<this.cols ; j++ ){
        this.matrix[i][j] = 0;
      }
    }

}

randomize(){

  for( let i = 0 ; i<this.rows ; i++ ){
    for( let j=0 ; j<this.cols ; j++ ){
      this.matrix[i][j] = Math.random()*2 - 1;
    }
  }

}

show(){
  console.table(this.matrix);
}

static transpose(m){
  let result = new Matrix( m.cols , m.rows );

  for( let i=0 ; i<m.cols ; i++ ){
    for( let j=0 ; j<m.rows ; j++ ){
      result.matrix[i][j] = m.matrix[j][i];
    }
  }

  return result;
}

// if we use static method then we use
// m3 = Matrix.add(m1 , m2 );
// else
// m3 = m1.multiply(m2);

static add( a , b ){

  if( a.cols!=b.cols || a.rows!=b.rows ){
    console.log("addition not possible");
  }else{
    let result = new Matrix(a.rows , a.cols)
    for( let i = 0 ; i<a.rows ; i++ ){
      for( let j=0 ; j<a.cols ; j++ ){
        result.matrix[i][j]= a.matrix[i][j] + b.matrix[i][j];
      }
    }
    return result;
  }

}

add(m){

  if( m instanceof Matrix ){
    if( this.cols!=m.cols || this.rows!=m.rows ){
      console.log("addition not possible");
    }else{
      for( let i = 0 ; i<this.rows ; i++ ){
        for( let j=0 ; j<this.cols ; j++ ){
          this.matrix[i][j]+=m.matrix[i][j];
        }
      }
    }
   }else{
    for( let i = 0 ; i<this.rows ; i++ ){
      for( let j=0 ; j<this.cols ; j++ ){
        this.matrix[i][j]+=m;
      }
    }
  }

}


static multiply(a , b ){



  if(a.cols!=b.rows ){
    console.log("unable to do multiplication")
  }else{
  let result= new Matrix(a.rows , b.cols);
  for( let i = 0 ; i<result.rows ; i++ ){
    for( let j=0 ; j<result.cols ; j++ ){
      for( let k=0 ; k<a.cols ; k++ ){
      result.matrix[i][j] += a.matrix[i][k]*b.matrix[k][j];
    }
   }
  }
  return result;
 }

}

 multiply(m){

  if( m instanceof Matrix ){
    if(this.cols!=m.cols || this.rows!=m.rows ){
      console.log("unable to do multiplication")
    }else{
    for( let i = 0 ; i<this.rows ; i++ ){
      for( let j=0 ; j<this.cols ; j++ ){
        this.matrix[i][j]*=m.matrix[i][j];
      }
     }
    }
  }else{
    for( let i = 0 ; i<this.rows ; i++ ){
      for( let j=0 ; j<this.cols ; j++ ){
        this.matrix[i][j]*=m;
      }
    }
  }

}

 static sigmoid_function(m){
   let result = new Matrix(m.rows , m.cols);

     for( let i=0 ; i<m.rows ; i++ ){
       for( let j=0 ; j<m.cols ; j++ ){
         let val = m.matrix[i][j];
         result.matrix[i][j] = 1/(1+Math.exp(-val));
       }
     }

     return result;
}

 static sigmoid_derivative(m){
   let result = new Matrix(m.rows , m.cols);

  for( let i = 0 ; i<m.rows ; i++ ){
    for( let j=0 ; j<m.cols ; j++ ){
      let val = m.matrix[i][j];
      result.matrix[i][j] = val*(1-val);
    }
  }

  return result;
}

static fromArrayToMatrix( a , x ){


  let result = new Matrix(x , 1);

  for( let i=0 ; i<x ; i++ ){
    result.matrix[i][0] = a[i];
  }

  return result;

}

static fromMatrixToArray(m){

  let array = [];
  for( let i=0 ; i<m.rows ; i++ ){
    let sum = 0;
    for( let j=0 ; j<m.cols ; j++ ){
      sum+=m.matrix[i][j];
    }
    array.push(sum);
  }

  return array;

}


}
