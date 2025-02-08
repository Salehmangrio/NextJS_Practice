import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email } = await req.json();

        if (!name || !email) {
            return NextResponse.json(
                { res: "Failed", ok: false },
                { status: 400 });
        }

        return NextResponse.json(
            { res: "Data Successfully Sent!!", ok: true },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json(
            { res: "Invalid JSON data", ok: false },
            { status: 400 });
    }
}
