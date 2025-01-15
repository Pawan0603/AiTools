import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
    const { data } = await request.json();
    console.log(data);
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: data.prompt,
            n: 1,
            size: data.size,
        });
        console.log(response.data[0].url);
        return NextResponse.json({ data: response.data[0].url }, { status: 200 })
    } catch (error) {
        console.log("error : ", error.message);
        return NextResponse.json({ data: error.message}, { status: 400 })
    }



}