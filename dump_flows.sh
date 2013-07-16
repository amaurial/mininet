#!/bin/bash

#start port 6634

port=$1

if [ "$port" = "all" ];then
   for i in `seq 6634 6653`;
   do
       echo ""
       echo "FLOWS FOR PORT $i"
       echo ""
       
       dpctl dump-flows tcp:127.0.0.1:$i
   done

else
    dpctl dump-flows tcp:127.0.0.1:$port
fi                                                                                   
