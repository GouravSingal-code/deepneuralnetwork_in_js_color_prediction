function sigmoid_function(x){
  return 1/(1+Math.exp(-x));
}

function sigmoid_derivative(x){
  return  x*(1-x) ;
}

class NeuralNetwork{

  constructor(input_nodes , hidden_nodes , output_nodes){
   this.input_nodes = input_nodes;
   this.hidden_nodes = hidden_nodes;
   this.output_nodes = output_nodes;
   this.lr = 0.1;
   this.weight_i_to_h = new Matrix(this.hidden_nodes , this.input_nodes );
   this.weight_i_to_h.randomize();

   this.weight_h_to_o = new Matrix(this.output_nodes , this.hidden_nodes );
   this.weight_h_to_o.randomize();

   this.bias_h = new Matrix( this.hidden_nodes , 1);
   this.bias_o = new Matrix( this.output_nodes , 1);

  }

  feedforward(input_data){
    //input data is in form of object;

    let input_data_matrix = Matrix.fromArrayToMatrix(input_data , input_data.length);

    let hidden_data = Matrix.multiply(this.weight_i_to_h , input_data_matrix);
    hidden_data.add(this.bias_h);
    let hidden_new_data = Matrix.sigmoid_function(hidden_data);




    let output_data = Matrix.multiply(this.weight_h_to_o , hidden_new_data);
    output_data.add(this.bias_o);
    let output_new_data = Matrix.sigmoid_function(output_data);


    return Matrix.fromMatrixToArray(output_new_data);

   }


   backpropogation( input_data , target ){

     let input_data_matrix = Matrix.fromArrayToMatrix(input_data , input_data.length);

     let hidden_data = Matrix.multiply(this.weight_i_to_h , input_data_matrix);
     hidden_data.add(this.bias_h);
     let hidden_new_data = Matrix.sigmoid_function(hidden_data);




     let output_data = Matrix.multiply(this.weight_h_to_o , hidden_new_data);
     output_data.add(this.bias_o);
     let output_new_data = Matrix.sigmoid_function(output_data);

     output_new_data.multiply(-1);
     let target_Matrix = Matrix.fromArrayToMatrix(target , target.length);
     let error_matrix_h_o = Matrix.add( target_Matrix , output_new_data );
     output_new_data.multiply(-1);

    // backpropogation

     let transpose_weight_h_o = Matrix.transpose(this.weight_h_to_o);
     let error_matrix_i_h = Matrix.multiply(transpose_weight_h_o , error_matrix_h_o);


     let output_new_data_matrix = Matrix.sigmoid_derivative(output_new_data);
     output_new_data_matrix.multiply(error_matrix_h_o);
     output_new_data_matrix.multiply(this.lr);
     this.bias_o.add(output_new_data_matrix);


     let transpose_hidden = Matrix.transpose(hidden_new_data);
     let delta_weight_matrix_h_o = Matrix.multiply(output_new_data_matrix , transpose_hidden);
     this.weight_h_to_o.add(delta_weight_matrix_h_o);

     let hidden_new_data_matrix = Matrix.sigmoid_derivative(hidden_new_data)
     hidden_new_data_matrix.multiply(error_matrix_i_h);
     hidden_new_data_matrix.multiply(this.lr);
     this.bias_h.add(hidden_new_data_matrix);

     let transpose_input = Matrix.transpose(input_data_matrix);
     let delta_weight_matrix_i_h = Matrix.multiply(hidden_new_data_matrix, transpose_input );
     this.weight_i_to_h.add(delta_weight_matrix_i_h);

   }


}
