import { NextResponse } from "next/server";

// Save to Google Sheets via Apps Script webhook
async function saveToGoogleSheets(data) {
  try {
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    
    if (!webhookUrl || webhookUrl === "your-apps-script-web-app-url") {
      console.log("Google Sheets webhook URL not configured");
      return false;
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        message: data.message,
      }),
    });

    const result = await response.json();
    console.log("Data saved to Google Sheets:", result);
    return result.success;
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    return false;
  }
}

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Save to Google Sheets
    const sheetsSaved = await saveToGoogleSheets({ name, email, phone, message });

    // Return success even if sheets failed (for testing)
    return NextResponse.json(
      { message: "Form submitted successfully", sheetsSaved },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
