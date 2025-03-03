const { exec } = require("child_process");

// ✅ Define image path
const filePath = "/Users/tt/Documents/Coding/Claire/backend/uploads/latest-image.jpg";

// ✅ Execute Python script
exec(`python3 /Users/tt/Documents/Coding/Claire/backend/ml/master.py ${filePath}`, (error, stdout, stderr) => {
    console.log("🚀 Running Python script...");

    // ✅ Capture execution errors
    if (error) {
        console.error("❌ Error executing Python script:", error);
        return;
    }

    // ✅ Capture Python errors
    if (stderr) {
        console.error("🐍 Python stderr:", stderr);
    }

    // ✅ Log full output from Python
    console.log("📝 Raw Python stdout:", stdout);

    // ✅ Extract JSON from output
    let jsonStart = stdout.indexOf("{");
    let jsonEnd = stdout.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
        console.error("❌ No valid JSON found in Python response");
        return;
    }

    let jsonString = stdout.substring(jsonStart, jsonEnd + 1).trim();

    // ✅ Parse JSON safely
    let pythonResponse;
    try {
        pythonResponse = JSON.parse(jsonString);
        console.log("✅ Parsed Python Response:", JSON.stringify(pythonResponse, null, 2));
    } catch (parseError) {
        console.error("❌ Error parsing Python response:", parseError);
    }
});
