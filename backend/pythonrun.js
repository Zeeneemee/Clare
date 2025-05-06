const fs = require('fs');
const path = require("path");

// ✅ Define image path
const filePath = path.join(__dirname, 'uploads', 'C7436C0B-12C6-46A4-87A8-1FD639E89C87_1_105_c.jpeg');

// ✅ Read image file as base64
const imageBuffer = fs.readFileSync(filePath);
const base64Image = imageBuffer.toString('base64');

// ✅ Execute Python script
const { spawn } = require("child_process");
const pythonProcess = spawn("python3", ["/Users/tt/Documents/Coding/Claire/backend/ml/master.py"]);

let stdoutData = "";

// ✅ Send base64 data to Python stdin
pythonProcess.stdin.write(base64Image);
pythonProcess.stdin.end();

// ✅ Handle Python stdout
pythonProcess.stdout.on("data", (data) => {
    stdoutData += data.toString();
});

// ✅ Handle Python stderr
pythonProcess.stderr.on("data", (data) => {
    console.error("🐍 Python stderr:", data.toString());
});

// ✅ Handle close event
pythonProcess.on("close", (code) => {
    console.log("✅ Python process exited with code:", code);
    let jsonStart = stdoutData.indexOf("{");
    let jsonEnd = stdoutData.lastIndexOf("}");
    if (jsonStart === -1 || jsonEnd === -1) {
        console.error("❌ No valid JSON found in Python response");
        return;
    }
    let jsonString = stdoutData.substring(jsonStart, jsonEnd + 1).trim();
    try {
        let pythonResponse = JSON.parse(jsonString);
        console.log("✅ Parsed Python Response:", JSON.stringify(pythonResponse, null, 2));
    } catch (parseError) {
        console.error("❌ Error parsing Python response:", parseError);
    }
});
