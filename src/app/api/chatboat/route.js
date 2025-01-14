import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
    const { data } = await request.json();
    // console.log("data : ", data);
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: data.content,
            },
        ],
    });
    
    console.log("response : ",completion.choices[0].message);

    return NextResponse.json({ data: completion.choices[0].message }, { status: 200 })

    // return NextResponse.json({data : "hello"},{status: 200})
}