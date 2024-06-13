import axios from "axios";
import React, { useEffect, useState } from "react";

//"http://localhost:8081/api/v1/students/register"
export const UseCreate = async(URL,data) => {
    try{
        const response =await axios.post(URL,data);
        return response.data;
    }
    catch(err){
        console.log("Error while post data",err)
    }
}

export const useGet = async(URL) => {
    try{
        const response = await axios.get(URL);
        console.log(response.data);
        return response.data;
    }catch(err){
        console.log("error while fetching data",err)
    }
}
