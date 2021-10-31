// https://blog.fireheart.in/a?ID=00050-141b04fd-7501-4ff2-b4df-1381334c179e
// JScript version of QuickSort
// The quick sort method is a classic algorithm, which is generally more efficient than the bubble method, and is very useful in sorting tabular data on the web client. The jscript implementation of the algorithm is given below.
// Since the algorithm is very simple, no comments are added. 

function quickSort( data, low ,high, bgreater) {
    var mid = data[ low ];
    var index = low;
    for( var i = low+1; i <= high; i++)  {
        var needswap = false;
        if( bgreater )
            needswap = data[ i] <mid;
        else
            needswap = data[ i]> mid;
        if( needswap) {
            index++;
            swap( data, i, index );
        }
    }
    swap( data, index, low );
    if( index - 1 >  low) quickSort( data, low ,index-1 ,bgreater);
    if( index + 1 < high) quickSort( data, index + 1, high ,bgreater);
}

function swap( data_input, i ,low) {
    var temp = data_input[ i ];
    data_input[ i] = data_input[ low ];
    data_input[low] = temp;
}

//The test procedure is as follows:
var data = new Array( 7 , -9, 38, 75, 6, -18, 204, 2, 0, 1, 42 );
WScript.Echo( data );
quickSort( data, 0, data.length-1 ,true);
WScript.Echo( data ); 
