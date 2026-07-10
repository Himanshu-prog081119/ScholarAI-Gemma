# ScholarAI-Gemma

ScholarAI-Gemma is an AI-powered scholarship recommendation platform built for Indian students. It helps students discover relevant scholarships by matching their profile details with scholarship eligibility criteria and generating personalized explanations using Gemma.

## Problem Statement

Many Indian students miss scholarship opportunities because scholarship information is scattered across different portals and eligibility criteria can be difficult to compare. Students often spend a lot of time checking whether they qualify for a scholarship.

## Solution

ScholarAI-Gemma centralizes scholarship discovery and provides AI-powered recommendation explanations. A student enters details such as education, state, category, gender, current year, and family income. The system then:
- Filters scholarships based on eligibility.
- Ranks scholarships using a match score.
- Generates a personalized explanation using Gemma.
- Displays why each scholarship is relevant to the student.

## Features

- AI-powered scholarship recommendations.
- Search scholarships by title or provider.
- Filter scholarships by education, state, category, and gender.
- Match score calculation for ranking recommendations.
- Gemma-generated explanations in the “Why Recommended?” section.
- Responsive and user-friendly interface.

## Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS

Backend:
- Node.js
- Express.js

AI Integration:
- Gemma via Google AI Studio API

Other Tools:
- JavaScript
- GitHub

## Project Architecture

React Frontend  
↓  
Express Backend API  
↓  
Gemma API  
↓  
AI-generated explanation  
↓  
Scholarship recommendation card

## How Gemma Is Used

Gemma is used as the primary inference engine for generating natural-language explanations for scholarship recommendations. For each eligible scholarship, the backend sends the student profile and scholarship details to Gemma. Gemma then generates a concise explanation describing why the scholarship matches the student.

**Example:**  
“This scholarship is recommended because the student is a B.Tech student from West Bengal, and the family income meets the eligibility criteria.”

## Installation and Setup

Clone the repository:
```bash
git clone https://github.com/Himanshu-prog081119/ScholarAI-Gemma.git