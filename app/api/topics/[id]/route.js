import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export async function PUT(req,{params}){
    try{
        await connectMongoDB()
        const {id} = await params
        const body = await req.json()
        await Topic.findByIdAndUpdate(id,body)
        return NextResponse.json({
            message:"Topic Updated"
        })
    }catch(err){
        console.log(err)
    }
}










