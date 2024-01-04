'use server'

import { revalidatePath } from "next/cache"
import executeQuery from "./api/schools/route"


const mysqlserveraction = (prevState, formData) => {
    const name = formData.get("name")
    const number = formData.get("number")
    const state = formData.get("state")
    const city = formData.get("city")
    const address = formData.get("address")
    const image = formData.get("image")
    const bname = formData.get("submit")
    if(bname === "insert"){
        if(name != '' && number !='' && address != ''){
            const result = executeQuery("insert into schools values(?,?,?,?,?,?,)",[name,number,state,city,address,image]);
            if(result.affectedRows){
                revalidatePath("/create-school")
            return { message: "Your School Registered."}
            }else{
                revalidatePath("/create-school")
            return { message: "Some Error occured."}
            }
        }else{
            revalidatePath("/create-school")
            return { message: "Some field are empty."}
        }
    }
  return (
    <div>mysqlserveraction</div>
  )
};

export default mysqlserveraction
