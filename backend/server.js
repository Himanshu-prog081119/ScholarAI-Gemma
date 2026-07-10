const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMMA_API_KEY);

app.get("/", (req, res) => {
  res.send("ScholarAI Gemma Backend is running");
});

app.post("/api/recommend", async (req, res) => {
  try {
    const { student, scholarship } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are an AI scholarship advisor.

Student Profile:
- Education: ${student.education}
- State: ${student.state}
- Category: ${student.category}
- Gender: ${student.gender}
- Current Year: ${student.currentYear}
- Annual Family Income: ${student.annualFamilyIncome}

Scholarship Details:
- Title: ${scholarship.title}
- Provider: ${scholarship.provider}
- Eligibility: ${scholarship.eligibility}

Explain in 2-3 simple sentences why this scholarship is a good match for the student.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ explanation: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to generate recommendation",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
