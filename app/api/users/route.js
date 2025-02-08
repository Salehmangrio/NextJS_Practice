import { NextResponse } from "next/server"
import { users } from "@/app/util/db"

export function GET() {
    return NextResponse.json({
        results: users,
        success:"You Got Data",
        status:'Success',
        statuscode:200,
        created_by:'Saleh Mangrio'
    })
}