// import { AssemblyAI } from "assemblyai"
// import { NextResponse } from "next/server";

// const assemblyAi = new AssemblyAI({ apiKey: process.env.ASSEMBLY_API_KEY })
// export async function GET(req) {

//     const token = await assemblyAi.realtime.createTemporaryToken({ expires_in: 3600 });
//     return NextResponse.json(token);

// // }
// import { AssemblyAI } from 'assemblyai';
// import { NextResponse } from 'next/server';

// export async function GET(req) {
//   const apiKey = process.env.ASSEMBLY_API_KEY; 
//   if (!apiKey) {
//     return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
//   }
//   const assemblyClient = new AssemblyAI({ apiKey });
//   const tokenData = await assemblyClient.streaming.createTemporaryToken({ expires_in_seconds: 3600 });
//   return NextResponse.json(tokenData);
// }



// app/api/getToken/route.jsx
import { NextResponse } from "next/server";

/**
 * Server route to generate a temporary AssemblyAI streaming token.
 * Uses the documented endpoint: GET https://streaming.assemblyai.com/v3/token
 *
 * Notes:
 *  - expires_in_seconds must be <= 600 (10 minutes). The docs enforce this.
 *  - This route MUST run server-side so your full API key stays private.
 */

export async function GET() {
  const apiKey = process.env.ASSEMBLY_API_KEY || process.env.ASSEMBLYAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing AssemblyAI API key on server (ASSEMBLY_API_KEY or ASSEMBLYAI_API_KEY)." },
      { status: 500 }
    );
  }

  try {
    const url = new URL("https://streaming.assemblyai.com/v3/token");
    // <= 600 seconds according to docs
    url.searchParams.set("expires_in_seconds", String(600));

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: apiKey,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("AssemblyAI token generation failed:", res.status, text);
      return NextResponse.json({ error: "Failed to generate streaming token", details: text }, { status: res.status });
    }

    const data = await res.json(); // { token: "...", expires_in_seconds: 600 }
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error generating AssemblyAI streaming token:", err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
