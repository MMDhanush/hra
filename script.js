// --- 1. NEW QUESTION SET (SECTIONS A-G) ---
// Question structure and points strictly follow the "New Ques in HRA" document.
const sections = [
    {
        id: "modal1",
        title: "Section A: Basic Profile (Non-scoring)",
        fields: [
            // Request 6: Service Length as numeric
            { id: "serviceLength", label: "Service Length (Years)", type: "number" },
            // Request 1: Department field
            { 
                id: "department", 
                label: "Department", 
                type: "select", 
                options: ["Human Resources (HR)", "Finance / Accounts", "Operations / Administration", "Sales / Marketing", "Information Technology (IT)", "Other"] 
            },
            { id: "age", label: "Age", type: "number" },
            { id: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
            // Request 5: Job Type restriction
            { id: "occupationType", label: "Type of Job", type: "select", options: ["Desk Job", "Field Job"] },
            // Request 5: Shift Type separation
            { id: "shiftType", label: "Shift Type", type: "select", options: ["Day Shift", "Night Shift", "Rotational Shift"] },
            { id: "workLocation", label: "Work location", type: "text" },
            // Request 4: Height & Weight for BMI calculation
            { id: "height_cm", label: "Height (cm)", type: "number" },
            { id: "weight_kg", label: "Weight (kg)", type: "number" },
            
            // Request 7: Family History multi-select
            { 
                id: "familyHistoryNCDs", 
                label: "Family History of Major NCDs (Select all that apply)", 
                type: "multicheckbox", 
                options: [
                    "CVDs (Heart Diseases)",
                    "Diabetes",
                    "Cancer (Awareness & Screening)",
                    "Chronic Respiratory Diseases",
                    "Obesity & Metabolic Syndrome",
                    "Mental Health Disorders",
                    "CKD (Kidney)",
                    "Musculoskeletal Disorders"
                ]
            }
        ]
    },
    {
        id: "modal2",
        title: "Section B: Lifestyle & Habits (20 points)",
        fields: [
            { id: "exercise", label: "Exercise ≥30 min/week", type: "select", options: ["0 days (0)", "1–2 days (5)", "3–4 days (10)", "5+ days (15)"] },
            { id: "fruitsVeg", label: "Fruits & vegetables intake", type: "select", options: ["Rarely (0)", "3–4 times/week (5)", "Daily (10)"] },
            { id: "processedFood", label: "Fried/processed food consumption", type: "select", options: ["4+ times/week (0)", "2–3 times/week (5)", "Rarely (10)"] },
            { id: "tobaccoAlcohol", label: "Tobacco/alcohol usage", type: "select", options: ["Regular (0)", "Occasionally (5)", "None (10)"] },
            { id: "water", label: "Water intake/day (Glasses)", type: "select", options: ["<4 glasses (0)", "4–6 (2)", "7–8 (3)", "8+ (5)"] }
        ]
    },
    {
        id: "modal3",
        title: "Section C: Physical Health & NCD Risk (30 points)",
        fields: [
            // CVD
            { id: "bpDiagnosis", label: "High BP diagnosed/known?", type: "select", options: ["Yes (0)", "No (5)"] },
            { id: "chestPain", label: "Chest pain/palpitations?", type: "select", options: ["Yes (0)", "Sometimes (2)", "No (5)"] },
            { id: "cvdFamilyHistory", label: "Family history of CVDs (Heart Diseases)?", type: "select", options: ["Yes (0)", "No (3)"] },
            // Diabetes
            { id: "sugarDiagnosis", label: "High blood sugar diagnosed?", type: "select", options: ["Yes (0)", "No (5)"] },
            { id: "excessiveThirst", label: "Excessive thirst/frequent urination/unexplained weight change?", type: "select", options: ["Yes (0)", "Sometimes (2)", "No (5)"] },
            { id: "diabetesFamilyHistory", label: "Family history of diabetes?", type: "select", options: ["Yes (0)", "No (3)"] },
            // Obesity & Metabolic Syndrome
            { id: "waistCircumference", label: "Waist circumference >90cm (men)/>80cm (women)?", type: "select", options: ["Yes (0)", "No (5)"] },
            // Chronic Respiratory Diseases
            { id: "asthmaCOPD", label: "Asthma/COPD/frequent cough/wheezing?", type: "select", options: ["Yes (0)", "Sometimes (2)", "No (5)"] },
            { id: "smokeExposure", label: "Exposure to smoke/pollution/occupational dust?", type: "select", options: ["Yes (0)", "No (3)"] },
            // Cancer Awareness & Screening
            { id: "cancerAwareness", label: "Aware of recommended cancer screenings?", type: "select", options: ["Yes (5)", "No (0)"] },
            { id: "cancerFamilyHistory", label: "Family history of cancer?", type: "select", options: ["Yes (0)", "No (3)"] },
            // Chronic Kidney Disease (CKD)
            { id: "swellingKidney", label: "Swelling in legs/face or known kidney issues?", type: "select", options: ["Yes (0)", "No (5)"] },
            { id: "diabetesHypertension", label: "Have diabetes/long-standing hypertension?", type: "select", options: ["Yes (0)", "No (3)"] },
            // Musculoskeletal Disorders
            { id: "jointBackPain", label: "Persistent joint/back pain or difficulty in daily activity?", type: "select", options: ["Yes (0)", "Sometimes (2)", "No (5)"] }
        ]
    },
    {
        id: "modal4",
        title: "Section D: Mental & Emotional Wellbeing (15 points) & Section F: Sleep & Fatigue (10 points)",
        fields: [
            // Section D
            { id: "stressedAnxious", label: "Feeling stressed or anxious", type: "select", options: ["Almost every day (0)", "Often (5)", "Occasionally (10)", "Rarely (15)"] },
            { id: "sadnessBurnout", label: "Persistent sadness/burnout", type: "select", options: ["Yes (0)", "Sometimes (5)", "No (10)"] },
            { id: "workLifeBalance", label: "Work-life balance", type: "select", options: ["Poorly (0)", "Average (5)", "Well (10)"] },
            { id: "relaxationCoping", label: "Relaxation & coping", type: "select", options: ["Rarely (0)", "Sometimes (5)", "Often (10)"] },
            // Section F
            { id: "avgSleep", label: "Average sleep/day", type: "select", options: ["<5 hrs (0)", "5–6 hrs (5)", "7–8 hrs (10)"] },
            { id: "daytimeTiredness", label: "Daytime tiredness", type: "select", options: ["Always (0)", "Sometimes (5)", "Rarely (10)"] },
            { id: "screenTimeBed", label: "Screen usage 30 min before bed", type: "select", options: ["Always (0)", "Sometimes (2)", "Rarely/Never (5)"] }
        ]
    },
    {
        id: "modal5",
        title: "Section G: Digital & Social Wellness (15 points) & Section E: Preventive Health (10 points)",
        final: true,
        fields: [
            // Section G
            { id: "dailyScreenTime", label: "Daily screen time (non-work)", type: "select", options: [">5 hrs (0)", "3–5 hrs (5)", "<3 hrs (10)"] },
            // Request 9: Simplified wording
            { id: "offlineLeisure", label: "How often do you engage in non-screen leisure or outdoor activities?", type: "select", options: ["Rarely (0)", "Once/week (5)", "Multiple times/week (10)"] },
            { id: "socialConnections", label: "Social connections", type: "select", options: ["Rarely (0)", "Occasionally (5)", "Regularly (10)"] },
            { id: "digitalWLB", label: "Work-life balance (digital overload)", type: "select", options: ["Poor (0)", "Average (5)", "Well (10)"] },
            // Section E
            { id: "lastCheckup", label: "Last full-body checkup", type: "select", options: ["Never (0)", ">2 yrs ago (5)", "Within 1 yr (10)", "Within 6 months (15)"] },
            { id: "awarenessVitals", label: "Awareness of BP, sugar, cholesterol, BMI", type: "select", options: ["No (0)", "Partially (5)", "Yes (10)"] },
            // Request 8: Updated field name
            { id: "vaccinations", label: "Awareness of Vaccinations/Preventive Screenings", type: "select", options: ["No (0)", "Partially (5)", "Yes (10)"] }
        ]
    }
];

let formData = {};
const modalContainer = document.getElementById("modals-container");

// --- MODAL GENERATION ---
sections.forEach((section, index) => {
    let modalHTML = `
        <div id="${section.id}" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${section.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        ${section.fields.map(field => generateField(field)).join("")}
                    </div>
                    <div class="modal-footer">
                        ${index > 0 ? `<button class="btn btn-secondary" onclick="prevModal('${section.id}', '${sections[index - 1].id}')">Back</button>` : ""}
                        ${section.final ? `<button class="btn btn-success" onclick="validateAndGeneratePDF()">Submit & Generate PDF</button>` : `<button class="btn btn-primary" onclick="validateAndNext('${section.id}', '${sections[index + 1].id}')">Next</button>`}
                    </div>
                </div>
            </div>
        </div>
    `;
    modalContainer.innerHTML += modalHTML;
});

// --- CORE SCORING LOGIC & CALCULATIONS (Unchanged for brevity) ---

// Helper function to extract the score number from the option string
function extractScore(value) {
    if (!value) return 0;
    const match = value.match(/\(([^)]+)\)/);
    return match ? parseInt(match[1]) : 0;
}

// Function to calculate BMI score
function calculateBMI() {
    const H = parseFloat(formData.height_cm);
    const W = parseFloat(formData.weight_kg);
    
    if (isNaN(H) || H <= 0 || isNaN(W) || W <= 0) {
        return { score: 0, bmi: 0, risk: "High Risk - Data Missing" };
    }

    const BMI = W / ((H / 100) * (H / 100));
    const roundedBMI = Math.round(BMI * 10) / 10;
    let score = 0;
    let risk = "";

    if (BMI >= 18.5 && BMI <= 24.9) {
        score = 5;
        risk = "Low Risk - Healthy Weight";
    } else if (BMI < 18.5) {
        score = 0; 
        risk = "At Risk - Underweight";
    } else if (BMI >= 25 && BMI <= 29.9) {
        score = 0; 
        risk = "Moderate Risk - Overweight";
    } else { 
        score = 0; 
        risk = "High Risk - Obese";
    }

    return { score, bmi: roundedBMI, risk };
}

// Detailed NCD Risk Assessment (Used by recommendations, but table is removed)
function getNCDsDetailedRisk() {
    const riskMap = (rawScore, maxScore) => {
        const percentage = (rawScore / maxScore) * 100;
        if (percentage >= 80) return "Low Risk";
        if (percentage >= 50) return "Moderate Risk";
        return "High Risk";
    };

    const bmiResult = calculateBMI();
    const bmiScore = bmiResult.score; 

    // CVD Risk (Max 13: 5(BP)+5(Chest Pain)+3(FH))
    const cvdRaw = extractScore(formData.bpDiagnosis) + extractScore(formData.chestPain) + extractScore(formData.cvdFamilyHistory);
    // Diabetes Risk (Max 13: 5(Sugar)+5(Symptoms)+3(FH))
    const diabetesRaw = extractScore(formData.sugarDiagnosis) + extractScore(formData.excessiveThirst) + extractScore(formData.diabetesFamilyHistory);
    // Obesity & Metabolic Risk (Max 10: 5 for waist + 5 for BMI)
    const metabolicRaw = extractScore(formData.waistCircumference) + bmiScore;

    return {
        "CVD Risk (Heart)": {
            score: cvdRaw,
            max: 13,
            risk: riskMap(cvdRaw, 13)
        },
        "Diabetes Risk": {
            score: diabetesRaw,
            max: 13,
            risk: riskMap(diabetesRaw, 13)
        },
        "Obesity / Metabolic Syndrome": {
            score: metabolicRaw,
            max: 10,
            risk: riskMap(metabolicRaw, 10),
            details: `BMI: ${bmiResult.bmi} kg/m²`
        },
    };
}


function calculateHealthScore() {
    // Max Raw Scores 
    const MAX_RAW_B = 50; 
    const MAX_RAW_D = 45; 
    const MAX_RAW_E = 35; 
    const MAX_RAW_F = 25; 
    const MAX_RAW_C = 65; 
    const MAX_RAW_G = 40; 

    const bmiResult = calculateBMI();
    const bmiScore = bmiResult.score;

    // Calculate Raw Scores
    const rawScoreB = extractScore(formData.exercise) + extractScore(formData.fruitsVeg) + extractScore(formData.processedFood) + extractScore(formData.tobaccoAlcohol) + extractScore(formData.water);
    const rawScoreC = extractScore(formData.bpDiagnosis) + extractScore(formData.chestPain) + extractScore(formData.cvdFamilyHistory) + extractScore(formData.sugarDiagnosis) + extractScore(formData.excessiveThirst) + extractScore(formData.diabetesFamilyHistory) + extractScore(formData.waistCircumference) + bmiScore + extractScore(formData.asthmaCOPD) + extractScore(formData.smokeExposure) + extractScore(formData.cancerAwareness) + extractScore(formData.cancerFamilyHistory) + extractScore(formData.swellingKidney) + extractScore(formData.diabetesHypertension) + extractScore(formData.jointBackPain);
    const rawScoreD = extractScore(formData.stressedAnxious) + extractScore(formData.sadnessBurnout) + extractScore(formData.workLifeBalance) + extractScore(formData.relaxationCoping);
    const rawScoreE = extractScore(formData.lastCheckup) + extractScore(formData.awarenessVitals) + extractScore(formData.vaccinations);
    const rawScoreF = extractScore(formData.avgSleep) + extractScore(formData.daytimeTiredness) + extractScore(formData.screenTimeBed);
    const rawScoreG = extractScore(formData.dailyScreenTime) + extractScore(formData.offlineLeisure) + extractScore(formData.socialConnections) + extractScore(formData.digitalWLB);

    // Scale Raw Scores to 100-Point Total based on Weights: B(20), C(30), D(15), E(10), F(10), G(15)
    let score = (rawScoreB / MAX_RAW_B * 20) +
                (rawScoreC / MAX_RAW_C * 30) +
                (rawScoreD / MAX_RAW_D * 15) +
                (rawScoreE / MAX_RAW_E * 10) +
                (rawScoreF / MAX_RAW_F * 10) +
                (rawScoreG / MAX_RAW_G * 15);

    score = Math.round(Math.max(0, Math.min(score, 100)));

    let riskStatus;
    if (score >= 81) {
        riskStatus = "Low Risk"; 
    } else if (score >= 61) {
        riskStatus = "Moderate Risk"; 
    } else if (score >= 41) {
        riskStatus = "At Risk"; 
    } else {
        riskStatus = "High Risk"; 
    }

    return { score, riskStatus };
}

// --- Parameter Score Logic and Helpers (omitted for brevity) ---

function calculateParameterScore(parameter) {
    let rawScore = 0;
    let maxRaw = 1;
    const bmiResult = calculateBMI();
    const bmiScore = bmiResult.score;

    switch (parameter) {
        case "Lifestyle & Habits":
            rawScore = extractScore(formData.exercise) + extractScore(formData.fruitsVeg) + extractScore(formData.processedFood) + extractScore(formData.tobaccoAlcohol) + extractScore(formData.water);
            maxRaw = 50;
            break;
        case "Physical Health & NCD Risk":
            rawScore = extractScore(formData.bpDiagnosis) + extractScore(formData.chestPain) + extractScore(formData.cvdFamilyHistory) +
                       extractScore(formData.sugarDiagnosis) + extractScore(formData.excessiveThirst) + extractScore(formData.diabetesFamilyHistory) +
                       extractScore(formData.waistCircumference) + bmiScore + 
                       extractScore(formData.asthmaCOPD) + extractScore(formData.smokeExposure) +
                       extractScore(formData.cancerAwareness) + extractScore(formData.cancerFamilyHistory) +
                       extractScore(formData.swellingKidney) + extractScore(formData.diabetesHypertension) +
                       extractScore(formData.jointBackPain);
            maxRaw = 65;
            break;
        case "Mental & Emotional Wellbeing":
            rawScore = extractScore(formData.stressedAnxious) + extractScore(formData.sadnessBurnout) + extractScore(formData.workLifeBalance) + extractScore(formData.relaxationCoping);
            maxRaw = 45;
            break;
        case "Preventive Health & Awareness":
            rawScore = extractScore(formData.lastCheckup) + extractScore(formData.awarenessVitals) + extractScore(formData.vaccinations);
            maxRaw = 35;
            break;
        case "Sleep & Fatigue":
            rawScore = extractScore(formData.avgSleep) + extractScore(formData.daytimeTiredness) + extractScore(formData.screenTimeBed);
            maxRaw = 25;
            break;
        case "Digital & Social Wellness":
            rawScore = extractScore(formData.dailyScreenTime) + extractScore(formData.offlineLeisure) + extractScore(formData.socialConnections) + extractScore(formData.digitalWLB);
            maxRaw = 40;
            break;
    }

    return Math.round((rawScore / maxRaw) * 10);
}

function getHealthAreas() {
    const areas = {
        "Lifestyle & Habits": "Lifestyle & Habits", 
        "Physical Health & NCD Risk": "Physical Health & NCD Risk", 
        "Mental & Emotional Wellbeing": "Mental & Emotional Wellbeing", 
        "Preventive Health & Awareness": "Preventive Health & Awareness", 
        "Sleep & Fatigue": "Sleep & Fatigue", 
        "Digital & Social Wellness": "Digital & Social Wellness" 
    };

    function determineRisk(parameter) {
        const paramScore = calculateParameterScore(parameter);
        if (paramScore <= 2) return "High Risk";
        if (paramScore <= 4) return "At Risk";
        if (paramScore <= 7) return "Moderate Risk";
        return "Low Risk";
    }

    return {
        "Lifestyle & Habits": determineRisk(areas["Lifestyle & Habits"]),
        "Physical Health & NCD Risk": determineRisk(areas["Physical Health & NCD Risk"]),
        "Mental & Emotional Wellbeing": determineRisk(areas["Mental & Emotional Wellbeing"]),
        "Preventive Health & Awareness": determineRisk(areas["Preventive Health & Awareness"]),
        "Sleep & Fatigue": determineRisk(areas["Sleep & Fatigue"]),
        "Digital & Social Wellness": determineRisk(areas["Digital & Social Wellness"])
    };
}


// --- SUGGESTIONS LOGIC (omitted for brevity) ---
function getOverallHealthSuggestion(score, riskStatus) {
    if (riskStatus === "Low Risk") {
        return [
            "Excellent Health! Continue your healthy habits and maintain regular checkups to stay on track.",
            "Your score indicates optimal wellbeing. Keep focusing on stress management and activity consistency.",
            "Congratulations on your low-risk status. Share your success and motivate others."
        ];
    } else if (riskStatus === "Moderate Risk") {
        return [
            "Some risk factors, consider targeted wellness interventions.",
            "Focus on consistent physical activity and stress control to move to Low Risk.",
            "Identify your weakest areas for small, consistent changes."
        ];
    } else if (riskStatus === "At Risk") {
        return [
            "Early warning, schedule preventive screenings & Nizcare programs.",
            "Your responses indicate a need for immediate attention to lifestyle or stress concerns.",
            "Book your annual preventive health checkup now and start targeted Nizcare programs."
        ];
    } else { // High Risk
        return [
            "Multiple risk factors; urgent attention and guided wellness plan recommended.",
            "Seek medical advice immediately to manage and mitigate critical risks.",
            "A detailed health check-up and a personalized, guided wellness plan are strongly recommended."
        ];
    }
}

function getRiskColor(risk) {
    if (risk.includes("Low")) return [34, 139, 34]; // Forest Green
    if (risk.includes("Moderate")) return [255, 165, 0]; // Orange
    if (risk.includes("At Risk") || risk.includes("Overweight")) return [255, 69, 0]; // Red-Orange
    if (risk.includes("High") || risk.includes("Obese")) return [255, 0, 0]; // Red
    return [100, 100, 100]; // Gray
}

function getDetailedRiskSubtitle(parameter, riskLevel) {
    const subtitles = {
        "CVD Risk (Heart)": { 
            "Low Risk": ["On Track", "Your current lifestyle and medical responses indicate a low risk for this condition. Maintain vigilance."], 
            "Moderate Risk": ["Monitor Closely", "Minor risk factors identified. Schedule BP and Cholesterol check if not done recently."],
            "High Risk": ["URGENT INTERVENTION", "Known diagnosis or multiple severe symptoms/high-risk factors. Seek immediate medical attention."] 
        },
        "Diabetes Risk": { 
            "Low Risk": ["On Track", "Your current lifestyle and medical responses indicate a low risk for this condition. Maintain vigilance."], 
            "Moderate Risk": ["Monitor Closely", "Minor risk factors identified. Schedule a blood sugar (HbA1c) test for baseline data."], 
            "High Risk": ["URGENT INTERVENTION", "Known diagnosis or multiple severe symptoms/high-risk factors. Seek immediate medical attention."] 
        },
        "Obesity / Metabolic Syndrome": { 
            "Low Risk": ["On Track", "Your BMI is in the healthy range. Focus on maintaining muscle mass and core health."], 
            "Moderate Risk": ["Monitor Closely", "Risk factors (like high BMI or waist circumference) identified. Focus on increasing activity and healthy eating."], 
            "High Risk": ["URGENT INTERVENTION", "High BMI and/or high waist circumference. Consult a dietitian and physician for a personalized metabolic plan."] 
        },
        "Physical Health & NCD Risk": { 
            "Low Risk": ["Proactive Care", "Good awareness of your body and vital signs. Keep up the good work."], 
            "Moderate Risk": ["Monitor Vitals", "Pay attention to any symptoms (thirst, pain) and schedule a checkup."], 
            "At Risk": ["Screening Required", "High-risk factors present. Consult a a doctor for targeted NCD screening (CVDs (Heart Diseases), Diabetes)."], 
            "High Risk": ["Immediate Medical Care", "Known high BP/Sugar or multiple severe symptoms require urgent specialist consultation."] 
        },
        "Mental & Emotional Wellbeing": { 
            "Low Risk": ["Excellent Balance", "You cope well with stress. Keep up relaxation techniques."], 
            "Moderate Risk": ["Need for Breaks", "Stress and balance are slipping. Prioritize time for relaxation and coping strategies."], 
            "At Risk": ["Professional Support", "Persistent sadness or frequent anxiety is present. Seek professional counseling."], 
            "High Risk": ["Crisis Point", "High distress/burnout indicated. Urgent mental health support is critical."] 
        },
        "Preventive Health & Awareness": { 
            "Low Risk": ["Proactive Care", "You are aware of your vitals and up-to-date on checkups."], 
            "Moderate Risk": ["Annual Checkup Due", "If >1 year since last checkup, schedule one immediately. Know your numbers."], 
            "At Risk": ["High Unawareness", "Lack of recent checkups AND unawareness of vitals. Requires urgent screening."], 
            "High Risk": ["Mandatory Screening", "No awareness and no checkups. Requires immediate comprehensive health screening."] 
        },
        "Sleep & Fatigue": { 
            "Low Risk": ["Restorative Sleep", "Consistent 7-8 hours of quality sleep. This aids recovery."], 
            "Moderate Risk": ["Improve Hygiene", "Sleep is inconsistent or tiredness is sometimes present. Reduce screen time before bed."], 
            "At Risk": ["Urgent Change Needed", "Chronic sleep deprivation (<6 hours) or constant daytime fatigue is indicated. Review your routine."], 
            "High Risk": ["Medical Consultation", "Severe sleep issues are indicated. Seek consultation for chronic insomnia or persistent fatigue."] 
        },
        "Digital & Social Wellness": { 
            "Low Risk": ["Healthy Balance", "Good digital habits and strong social connections. Keep prioritizing offline activities."], 
            "Moderate Risk": ["Reduce Screen Time", "Cut back on non-work screen time and ensure one offline hobby per week."], 
            "At Risk": ["Re-Prioritize Offline", "High screen time and rare offline/social engagement are putting you at risk for burnout."], 
            "High Risk": ["Digital Detox Required", "Excessive digital overload and isolation are indicated. Immediate reduction of screen time is mandatory."] 
        },
        "Lifestyle & Habits": { 
            "Low Risk": ["Excellent Habits", "Great score on diet, exercise, and hydration. Keep this positive momentum."], 
            "Moderate Risk": ["Improve Consistency", "Some habits (exercise/diet) are inconsistent. Aim for 3-4 days of activity and daily fruits/veg."], 
            "At Risk": ["Urgent Change Needed", "High consumption of processed food/alcohol OR low activity. Address tobacco/alcohol use and increase daily exercise."], 
            "High Risk": ["Major Lifestyle Overhaul", "Multiple poor habits across exercise, diet, and substance use are indicated. Consult a health coach immediately."] 
        },
    };

    const simpleRisk = riskLevel.includes("High Risk") || riskLevel.includes("Obese") ? "High Risk" : (riskLevel.includes("Moderate Risk") || riskLevel.includes("At Risk") || riskLevel.includes("Underweight") || riskLevel.includes("Overweight") ? "Moderate Risk" : "Low Risk");
    
    if (subtitles[parameter]) {
         return subtitles[parameter][riskLevel] || subtitles[parameter][simpleRisk];
    }
    return ["Suggestion Error", "No specific suggestions available."];
}


function getDetailedSuggestions(parameter, riskLevel) {
    const suggestions = {
        "CVD Risk (Heart)": {
            "Low Risk": ["• Maintain a low-salt, low-fat diet.", "• Ensure annual blood pressure checks.", "• Continue regular, moderate-intensity exercise."],
            "Moderate Risk": ["• Schedule a follow-up with your physician if you have symptoms like chest pain or thirst.", "• Track your BMI and waist circumference monthly.", "• Increase activity levels to manage weight and prevent NCDs."],
            "High Risk": ["• Seek urgent consultation with a cardiologist.", "• Follow all prescribed medication plans strictly.", "• Adopt a low-sodium and DASH-style diet immediately."],
        },
        "Diabetes Risk": {
            "Low Risk": ["• Maintain balanced meals and limit sugary drinks.", "• Stay physically active (30 mins, 5 days/week).", "• If over 40 or overweight, check fasting blood sugar annually."],
            "Moderate Risk": ["• Reduce intake of all refined sugars and carbohydrates.", "• Increase fiber intake from whole grains, fruits, and vegetables.", "• Increase physical activity to improve insulin sensitivity."],
            "High Risk": ["• Consult an endocrinologist immediately to manage sugar levels.", "• Strictly adhere to a low-glycemic, portion-controlled diet.", "• Increase physical activity to improve insulin sensitivity."],
        },
        "Obesity / Metabolic Syndrome": {
            "Low Risk": ["• Continue to maintain your healthy BMI and waist circumference.", "• Focus on strength training to maintain muscle mass and metabolism."],
            "Moderate Risk": ["• Increase daily step count to at least 8,000 steps.", "• Re-evaluate portion sizes, especially for dinner.", "• If Waist Circumference is high, focus on core-strengthening exercises."],
            "High Risk": ["• Consult a dietitian for a personalized weight loss plan.", "• Request testing for metabolic markers (cholesterol, triglycerides).", "• If BMI is >30, a medical weight management program is strongly recommended."],
        },
        // General Area Suggestions (using includes for flexible risk mapping)
        "Lifestyle & Habits": {
            "Low Risk": ["• Maintain your current excellent activity and dietary habits.", "• Continue to limit or avoid tobacco and alcohol.", "• Keep drinking 8+ glasses of water daily."],
            "Moderate Risk": ["• Aim for 3-4 days of 30-minute exercise per week.", "• Ensure 3-4 servings of fruits/vegetables daily.", "• Limit fried/processed food to once per week."],
            "At Risk": ["• Join a fitness program to ensure 1-2 days of exercise.", "• Eliminate daily tobacco/alcohol use.", "• Prioritize water intake (8+ glasses) and balanced meals immediately."],
            "High Risk": ["• Consult a health coach for a full lifestyle overhaul.", "• Enroll in a tobacco cessation program (if applicable).", "• Prioritize water intake (8+ glasses) and balanced meals immediately."],
        },
        "Physical Health & NCD Risk": {
            "Low Risk": ["• Maintain regular health checkups to track your vitals.", "• Continue regular exercise to keep your body strong.", "• Stay informed about preventive screening guidelines."],
            "Moderate Risk": ["• Schedule a follow-up with your physician if you have symptoms like chest pain or thirst.", "• Track your BMI and waist circumference monthly.", "• Increase activity levels to manage weight and prevent NCDs."],
            "At Risk": ["• Book an appointment for a comprehensive NCD screening immediately (blood tests, BP, etc.).", "• Implement targeted interventions based on your highest specific NCD risk (CVD, Diabetes, etc.).", "• If suffering from chronic pain, seek a physical therapy consultation."],
            "High Risk": ["• Seek immediate specialist consultation for known conditions (e.g., cardiologist, endocrinologist).", "• Do not delay any recommended screenings or diagnostic tests.", "• Adhere strictly to all prescribed treatments and medical advice."],
        },
        "Mental & Emotional Wellbeing": {
            "Low Risk": ["• Continue practicing self-care routines like mindfulness or journaling.", "• Maintain strong social connections and open communication.", "• Engage in a hobby or activity you enjoy weekly for relaxation."],
            "Moderate Risk": ["• Dedicate 10 minutes daily to mindfulness or deep breathing.", "• Set clear 'off-limits' times for work communication.", "• Engage in a hobby or activity you enjoy weekly for relaxation."],
            "At Risk": ["• Seek professional support from a psychologist or counselor for persistent stress/sadness.", "• Prioritize sleep, nutrition, and hydration to stabilize your body's response to stress.", "• Actively manage work-life balance by setting boundaries."],
            "High Risk": ["• Urgent referral for counseling/therapy is mandatory.", "• Communicate burnout/distress to HR/management for supportive changes.", "• Focus solely on self-care and recovery until stable."]
        },
        "Preventive Health & Awareness": {
            "Low Risk": ["• Ensure you always know your latest BP, Sugar, and BMI readings.", "• Stay up-to-date on all recommended vaccinations and screenings.", "• Continue being proactive in seeking health information."],
            "Moderate Risk": ["• Book a full-body checkup within the next 3 months.", "• Keep a log of your BP, sugar, and cholesterol numbers.", "• Research common lifestyle diseases and their prevention."],
            "At Risk": ["• A comprehensive diagnostic panel is mandatory immediately.", "• Work with a health coach to track and interpret your vitals.", "• Do not postpone any preventive screenings."],
            "High Risk": ["• A comprehensive diagnostic panel is mandatory immediately.", "• Work with a health coach to track and interpret your vitals.", "• Do not postpone any preventive screenings."]
        },
        "Sleep & Fatigue": {
            "Low Risk": ["• Continue to maintain a consistent sleep schedule (7-8 hours).", "• Avoid screen usage close to bedtime to maintain sleep quality.", "• Use your bedroom only for sleep and rest."],
            "Moderate Risk": ["• Ensure bedroom is cool, dark, and quiet.", "• Avoid caffeine and heavy meals close to bedtime.", "• Reduce screen time before bed to one hour."],
            "At Risk": ["• Establish a strict, non-negotiable bedtime and wake-up time.", "• If fatigue is persistent, consult a physician for a sleep assessment.", "• Eliminate all screen time in the hour before bed."],
            "High Risk": ["• If fatigue is persistent, consult a physician for a sleep assessment.", "• Eliminate all screen time in the hour before bed.", "• Seek consultation for chronic insomnia or persistent fatigue."]
        },
        "Digital & Social Wellness": {
            "Low Risk": ["• Maintain a low non-work screen time and ensure one offline hobby per week.", "• Keep prioritizing offline activities and regular social interaction.", "• Continue to have clear boundaries between work/digital life."],
            "Moderate Risk": ["• Aim to spend less than 3 hours on non-work screens daily.", "• Schedule at least one hour of offline/outdoor leisure weekly.", "• Intentionally call or meet a friend/family member weekly."],
            "At Risk": ["• Institute a 'digital sunset' rule (e.g., no non-essential screens after 9 pm).", "• Join a club or group to boost social connections.", "• Dedicate a specific time slot to an outdoor activity every week."],
            "High Risk": ["• Consult a coach to help with digital detox and boundary setting.", "• Prioritize in-person social interaction over digital scrolling.", "• Dedicate a specific time slot to an outdoor activity every week."]
        },
    };

    const simpleRisk = riskLevel.includes("High Risk") || riskLevel.includes("Obese") ? "High Risk" : (riskLevel.includes("Moderate Risk") || riskLevel.includes("At Risk") || riskLevel.includes("Underweight") || riskLevel.includes("Overweight") ? "Moderate Risk" : "Low Risk");
    
    // For NCDs, we use the exact riskLevel determined by riskMap. For general areas, we use the 4-level system.
    if (suggestions[parameter] && suggestions[parameter][simpleRisk]) {
        return suggestions[parameter][simpleRisk];
    }
    return suggestions[parameter][riskLevel] || ["No specific suggestions available."];
}

// --- 5. PDF GENERATION FUNCTIONS ---

// Function to generate the Overall Summary Table
function generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion, startY) {
    const ACCENT_COLOR = [29, 166, 154];
    const TEXT_COLOR = [44, 62, 80];
    const bmiResult = calculateBMI();
    let y = startY;

    // Title: Overall Health Summary
    doc.setFont("helvetica", "bold"); 
    doc.setTextColor(TEXT_COLOR);
    doc.setFontSize(14); // Standard title size
    doc.text("Overall Health Summary", 105, y, { align: "center" });
    y += 8;

    const tableStyles = { 
        fontSize: 12, // Standard content size
        font: "helvetica", 
        textColor: TEXT_COLOR 
    };

    let summaryData = [
        ["Overall Health Score", `${score}/100`],
        ["Risk Status", { content: riskStatus, styles: { textColor: getRiskColor(riskStatus), fontStyle: 'bold' } }],
        ["BMI (Calculated)", `${bmiResult.bmi} kg/m²`],
        ["BMI Status", { content: bmiResult.risk.replace(/.*- /, ''), styles: { textColor: getRiskColor(bmiResult.risk) } }]
    ]; 

    doc.autoTable({
        startY: y,
        head: [["Metric", "Value"]],
        body: summaryData,
        theme: "grid",
        headStyles: { fillColor: ACCENT_COLOR, textColor: 255, fontStyle: 'bold', fontSize: 12 },
        styles: tableStyles, 
        columnStyles: { 1: { fontStyle: 'bold' } }
    });
    y = doc.autoTable.previous.finalY + 8;

    // Basic Profile Data
    let profileData = [
        ["Age", formData.age],
        ["Gender", formData.gender],
        ["Department", formData.department],
        ["Service Length", `${formData.serviceLength} years`],
        ["Job Type / Shift", `${formData.occupationType} / ${formData.shiftType}`],
    ];

    doc.autoTable({
        startY: y,
        head: [["Basic Profile", "Value"]],
        body: profileData,
        theme: "grid",
        headStyles: { fillColor: [44, 62, 80], textColor: 255, fontStyle: 'bold', fontSize: 12 },
        styles: tableStyles,
    });
    y = doc.autoTable.previous.finalY + 10;

    // Overall Health Suggestions
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12); // Suggestions Title size
    doc.text("Overall Health Suggestions:", 14, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12); // Suggestions text size
    let suggestionLines = doc.splitTextToSize(overallHealthSuggestion.map(s => `• ${s}`).join("\n"), 180);
    doc.text(suggestionLines, 14, y);
    y += suggestionLines.length * 6 + 10; 

    return y;
}


// Function to generate the Detailed Risk Recommendations (Page 2 onwards)
function generateRiskDetails(doc, y, healthAreas) {
    const ACCENT_COLOR = [44, 62, 80];
    const NCD_COLOR = [29, 166, 154];
    const TEXT_COLOR = [44, 62, 80];
    const ncdRisks = getNCDsDetailedRisk();
    
    // Order the sections: NCDs first, then the 6 Health Areas
    const orderedKeys = [
        "CVD Risk (Heart)", "Diabetes Risk", "Obesity / Metabolic Syndrome",
        "Lifestyle & Habits", "Physical Health & NCD Risk", "Mental & Emotional Wellbeing", 
        "Preventive Health & Awareness", "Sleep & Fatigue", "Digital & Social Wellness"
    ];

    doc.setFont("helvetica", "bold");
    doc.setTextColor(ACCENT_COLOR);
    doc.setFontSize(16); // Main page title
    doc.text("Detailed Risk Profile & Recommendations", 105, y, { align: "center" });
    y += 12;

    orderedKeys.forEach((key) => {
        const isNCD = ncdRisks.hasOwnProperty(key);
        const areaData = isNCD ? ncdRisks[key] : healthAreas[key];
        
        // Skip if key doesn't exist (e.g., if ncdRisks/healthAreas structure changes)
        if (!areaData) return; 

        // Determine risk level
        const riskLevel = isNCD ? areaData.risk : areaData;
        const subtitleData = getDetailedRiskSubtitle(key, riskLevel);

        // Page break logic
        if (y > doc.internal.pageSize.height - 70) {
            doc.addPage();
            y = 20;
        }

        // --- 1. Area Title ---
        doc.setFont("helvetica", "bold");
        doc.setTextColor(ACCENT_COLOR);
        doc.setFontSize(14); // Area Title size
        doc.text(key, 14, y);
        y += 8;

        // --- 2. Subtitle (Risk/Action Status) ---
        doc.setFont("helvetica", "bold");
        doc.setTextColor(isNCD ? NCD_COLOR : ACCENT_COLOR);
        doc.setFontSize(12); // Subtitle size
        doc.text(subtitleData[0], 14, y);
        y += 6;

        // --- 3. Subtitle Description ---
        doc.setFont("helvetica", "normal");
        doc.setTextColor(TEXT_COLOR);
        doc.setFontSize(12); // Subtitle Description size
        let descLines = doc.splitTextToSize(subtitleData[1], 180);
        doc.text(descLines, 14, y);
        y += descLines.length * 6 + 4;
        
        // --- 4. Additional NCD Details (If applicable) ---
        if (isNCD && areaData.details) {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(12);
            doc.text(areaData.details, 14, y);
            y += 6;
        }

        // --- 5. How to Improve Title ---
        let suggestions = getDetailedSuggestions(key, riskLevel);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(TEXT_COLOR);
        doc.setFontSize(12); // Suggestions Title size
        doc.text("How to Improve:", 14, y);
        y += 6;

        // --- 6. Suggestions Text ---
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12); // Suggestions text size
        let suggestionLines = doc.splitTextToSize(suggestions.map(s => `${s}`).join("\n"), 180);
        doc.text(suggestionLines, 14, y);
        y += suggestionLines.length * 6 + 10;
        
        // Horizontal line separator
        if (y < doc.internal.pageSize.height - 50) {
            doc.setDrawColor(200);
            doc.line(10, y - 5, 200, y - 5);
        }
    });
    return y;
}

// Function to generate the main PDF document (Now Synchronous, no Image loading)
// --- 5. PDF GENERATION FUNCTION (Updated for robust error handling) ---

function generatePDF() {
    // 1. CRITICAL: Start the overarching try...catch block
    try { 
        // Get jsPDF from the window object
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // 2. CRITICAL: Check if AutoTable is available
        if (typeof doc.autoTable !== "function") {
            alert("FATAL ERROR: jsPDF AutoTable plugin is not loaded. Please ensure the link in index.html is correct.");
            return;
        }

        // Save data before proceeding
        saveData("modal5"); 
        
        const currentDate = new Date().toLocaleDateString();
        const currentTime = new Date().toLocaleTimeString();
        const { score, riskStatus } = calculateHealthScore();
        const overallHealthSuggestion = getOverallHealthSuggestion(score, riskStatus);
        const healthAreas = getHealthAreas();

        // Logo Handling: Set image source
        const logo = new Image();
        logo.src = "logo.png";
        
        // --- PDF Content Generation Start ---

        // Attempt to add Logo (Safely inside a separate try/catch)
        try {
            // Check if image is loaded and has dimensions
            if (logo.complete && logo.naturalWidth > 0) {
                doc.addImage(logo, "PNG", 10, 10, 65, 15);
            } else {
                // If the logo failed to load, log it but continue
                console.warn("Logo image failed to load or is not present. Skipping logo addition.");
            }
        } catch (e) {
            console.warn("Could not add logo image to PDF:", e.message);
        }
        
        // Set document header font and colors
        doc.setFont("helvetica", "bold"); 
        doc.setTextColor(44, 62, 80); // Dark Blue/Gray
        doc.setFontSize(16);
        doc.text("NIZCARE HEALTH RISK ASSESSMENT", 105, 35, { align: "center" });

        // Date/Time
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Date: ${currentDate}`, 200, 15, { align: "right" });
        doc.text(`Time: ${currentTime}`, 200, 22, { align: "right" });

        let y = 45;
        // Reset text color to primary for body content
        doc.setTextColor(44, 62, 80); 

        // 1. Overall Summary (Includes BMI and Basic Profile)
        y = generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion, y);
        
        // 2. Detailed NCD Risk Table 
        y = generateNCDsRiskTable(doc, y);

        // 3. Health Area Risk Table
        y = generateHealthRiskTable(doc, y, healthAreas);

        doc.addPage();
        y = 20;
        
        // 4. Detailed Risk Recommendations 
        y = generateRiskDetails(doc, y, healthAreas);

        // FINAL STEP: Save the PDF
        doc.save("NIZCARE_Health_Scorecard.pdf");

        // Hide the final modal after successful generation
        const modalElement = document.getElementById("modal5");
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }


    } catch (error) {
        // This alert will show the exact reason the page is crashing
        alert("PDF Generation Failed! \n\nError: " + error.message + "\n\n(Check the browser console for more details by pressing F12.)");
        console.error("Critical PDF Generation Error:", error);

        // You might want to keep the modal open to let the user see the error/try again
    }
}

// --- Generic Functions & Field Generation (Unchanged for brevity) ---
function generateField(field) {
    if (field.type === "select") {
        const optionsHTML = field.options.map(option => {
            const cleanText = option.replace(/\s*\([^)]+\)$/, '');
            return `<option value="${option}">${cleanText}</option>`;
        }).join("");
        return `
            <div class="mb-3">
                <label class="form-label">${field.label}</label>
                <select id="${field.id}" class="form-select" onchange="handleFieldChange('${field.id}', this.value)">
                    <option value="">Select an option</option>
                    ${optionsHTML}
                </select>
            </div>
        `;
    } else if (field.type === "multicheckbox") {
        const checkboxesHTML = field.options.map((option, index) => {
            const checkboxId = `${field.id}_${index}`;
            return `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${option}" id="${checkboxId}" 
                           onchange="handleMulticheckboxChange('${field.id}')">
                    <label class="form-check-label" for="${checkboxId}">${option}</label>
                </div>
            `;
        }).join("");

        // A hidden input to store the joined values
        return `
            <div class="mb-3" id="${field.id}_group">
                <label class="form-label">${field.label}</label>
                <div>${checkboxesHTML}</div>
                <input type="hidden" id="${field.id}" value="" />
            </div>
        `;

    } else if (field.type === "number") {
         return `
            <div class="mb-3">
                <label class="form-label">${field.label}</label>
                <input type="number" id="${field.id}" class="form-control" onchange="handleFieldChange('${field.id}', this.value)" min="0">
            </div>
        `;
    } else { // type === "text"
        return `
            <div class="mb-3">
                <label class="form-label">${field.label}</label>
                <input type="text" id="${field.id}" class="form-control" onchange="handleFieldChange('${field.id}', this.value)">
            </div>
        `;
    }
}

function handleFieldChange(id, value) {
    formData[id] = value;
}

function handleMulticheckboxChange(id) {
    const checkboxes = document.querySelectorAll(`#${id}_group input[type="checkbox"]:checked`);
    const values = Array.from(checkboxes).map(cb => cb.value);
    document.getElementById(id).value = values.join("; ");
    formData[id] = values.join("; ");
}

function openModal(id) {
    const modalElement = document.getElementById(id);
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

function prevModal(currentId, prevId) {
    const currentModal = bootstrap.Modal.getInstance(document.getElementById(currentId));
    currentModal.hide();
    openModal(prevId);
}

function validateAndNext(currentId, nextId) {
    if (validateInputs(currentId)) {
        saveData(currentId);
        const currentModal = bootstrap.Modal.getInstance(document.getElementById(currentId));
        currentModal.hide();
        openModal(nextId);
    } else {
        alert("Please fill in all required fields.");
    }
}

function validateAndGeneratePDF() {
    if (validateInputs("modal5")) {
        saveData("modal5");
        const finalModal = bootstrap.Modal.getInstance(document.getElementById("modal5"));
        // Hide the modal immediately, PDF generation will now start synchronously.
        finalModal.hide(); 
        generatePDF();
    } else {
        alert("Please fill in all required fields.");
    }
}

function saveData(modalId) {
    const section = sections.find(s => s.id === modalId);
    section.fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (input) {
            if (field.type === "multicheckbox") {
                // Multicheckbox is handled by its dedicated change handler
                // The value should already be stored in the hidden input and formData
                const values = Array.from(document.querySelectorAll(`#${field.id}_group input[type="checkbox"]:checked`)).map(cb => cb.value);
                formData[field.id] = values.join("; ");
            } else if (field.type === "select") {
                formData[field.id] = input.value;
            } else {
                formData[field.id] = input.value.trim();
            }
        }
    });
}

function validateInputs(modalId) {
    let allFilled = true;
    
    // Validate standard inputs (select, text, number)
    let inputs = document.querySelectorAll(`#${modalId} input:not([type="checkbox"]), #${modalId} select`);
    inputs.forEach(input => {
        if ((input.type === "select-one" && input.value.trim() === "") || (input.type !== "select-one" && !input.value.trim())) {
            if (input.id !== "familyHistoryNCDs") { // Family History is optional/handled differently in PDF but mandatory to proceed
                 input.classList.add("is-invalid");
                 allFilled = false;
            }
        } else {
            input.classList.remove("is-invalid");
        }
    });

    // Specific check for Height, Weight, Age, Service Length to ensure they are positive numbers
    if (modalId === "modal1") {
        const fieldsToCheck = ["height_cm", "weight_kg", "age", "serviceLength"];
        fieldsToCheck.forEach(id => {
            const inputElement = document.getElementById(id);
            const value = parseFloat(inputElement.value);
            const isServiceLength = id === "serviceLength";
            
            if (isNaN(value) || (isServiceLength ? value < 0 : value <= 0)) {
                inputElement.classList.add("is-invalid");
                allFilled = false;
            } else {
                inputElement.classList.remove("is-invalid");
            }
        });
    }

    return allFilled;
}