import { NextResponse } from "next/server";
import { users } from "@/app/util/db";
export function GET(_, response) {
    const data =users
    const user=data.filter(user=>user.id==response.params.id);
    return NextResponse.json({
        result:user,
        staus:'Success',
        created_by:'Saleh Mangrio'
    });
}