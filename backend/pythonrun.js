const path = require("path");
// ✅ Define image path
const filePath = path.join(__dirname,'uploads','messageImage_1742931840475.jpg');
// ✅ Execute Python script
const { spawn } = require("child_process");
const pythonProcess = spawn("python3", ["/Users/tt/Documents/Coding/Claire/backend/ml/master.py", filePath]);
let stdoutData = "";
pythonProcess.stdout.on("data", (data) => {
    stdoutData += data.toString();
});
pythonProcess.stderr.on("data", (data) => {
    console.error("🐍 Python stderr:", data.toString());
});
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
