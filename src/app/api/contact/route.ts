import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // The user's actual Google Apps Script Web App URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwI3q5I3Vb-4f01hv68sY5_wqomcUtYRdNArhYofUktIrG6O59c0cNomYAgJUU6JScllA/exec";

    // Server-to-server fetch eliminates browser CORS issues entirely
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Google Script returned ${response.status}`);
      return NextResponse.json({ error: "Failed to connect to Google Sheets" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
