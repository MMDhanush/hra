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

sections.forEach((section, index) => {
    let modalHTML = `
        <div id="${section.id}" class="modal fade" tabindex="-1" inert>
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

// --- CORE SCORING LOGIC & CALCULATIONS ---

// Helper function to extract the score number from the option string
function extractScore(value) {
    if (!value) return 0;
    const match = value.match(/\(([^)]+)\)/);
    return match ? parseInt(match[1]) : 0;
}

// Request 4: New function to calculate BMI score
function calculateBMI() {
    const H = parseFloat(formData.height_cm);
    const W = parseFloat(formData.weight_kg);
    
    // Check for valid inputs
    if (isNaN(H) || H <= 0 || isNaN(W) || W <= 0) {
        return { score: 0, bmi: 0, risk: "High Risk - Data Missing" };
    }

    // BMI Formula: kg / (m*m)
    const BMI = W / ((H / 100) * (H / 100));
    const roundedBMI = Math.round(BMI * 10) / 10;
    let score = 0;
    let risk = "";

    // Scoring: Normal BMI (18.5–24.9) gets 5 points, all others get 0 
    if (BMI >= 18.5 && BMI <= 24.9) {
        score = 5;
        risk = "Low Risk - Healthy Weight";
    } else if (BMI < 18.5) {
        score = 0; // Underweight
        // UPDATED RISK MAPPING FOR BMI
        risk = "Moderate Risk - Underweight"; // Changed "At Risk" to "Moderate Risk"
    } else if (BMI >= 25 && BMI <= 29.9) {
        score = 0; // Overweight
        // UPDATED RISK MAPPING FOR BMI
        risk = "Moderate Risk - Overweight"; // Changed "Moderate Risk" to "Moderate Risk"
    } else { // BMI >= 30
        score = 0; // Obese
        risk = "High Risk - Obese";
    }

    return { score, bmi: roundedBMI, risk };
}

// Request 2 & 3: Detailed NCD Risk Assessment
function getNCDsDetailedRisk() {
    // Scoring logic for risk determination (simplified to 3 levels: Low, Moderate, High)
    const riskMap = (rawScore, maxScore) => {
        const percentage = (rawScore / maxScore) * 100;
        // NEW 3-LEVEL MAPPING: High (0-40), Moderate (41-70), Low (71-100)
        if (percentage >= 71) return "Low Risk";
        if (percentage >= 41) return "Moderate Risk";
        return "High Risk";
    };

    const bmiResult = calculateBMI();
    const bmiScore = bmiResult.score; // 5 points if normal, 0 otherwise

    // Sub-Area Scores (Max Raw Score is based on points in sections)
    
    // CVD Risk (Max 13: 5(BP)+5(Chest Pain)+3(FH))
    const cvdRaw = extractScore(formData.bpDiagnosis) + extractScore(formData.chestPain) + extractScore(formData.cvdFamilyHistory);
    // Diabetes Risk (Max 13: 5(Sugar)+5(Symptoms)+3(FH))
    const diabetesRaw = extractScore(formData.sugarDiagnosis) + extractScore(formData.excessiveThirst) + extractScore(formData.diabetesFamilyHistory);
    // Obesity/Metabolic Risk (Max 10: 5 for waist + 5 for BMI)
    const metabolicRaw = extractScore(formData.waistCircumference) + bmiScore;

    // Report only on the key high-risk NCDs as requested (Diabetes, CVD, Obesity)
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
    const MAX_RAW_C = 65; // Total C remains 65 
    const MAX_RAW_G = 40; // Max score for Digital & Social Wellness 

    // Calculate BMI score (Request 4)
    const bmiResult = calculateBMI();
    const bmiScore = bmiResult.score;

    // 2.2. Calculate Raw Scores
    // B. Lifestyle & Habits (20%)
    const rawScoreB = extractScore(formData.exercise) +
                      extractScore(formData.fruitsVeg) +
                      extractScore(formData.processedFood) +
                      extractScore(formData.tobaccoAlcohol) +
                      extractScore(formData.water);

    // C. Physical Health & NCD Risk (30%) - Incorporates calculated BMI score
    const rawScoreC = extractScore(formData.bpDiagnosis) + extractScore(formData.chestPain) + extractScore(formData.cvdFamilyHistory) +
                      extractScore(formData.sugarDiagnosis) + extractScore(formData.excessiveThirst) + extractScore(formData.diabetesFamilyHistory) +
                      extractScore(formData.waistCircumference) + bmiScore + 
                      extractScore(formData.asthmaCOPD) + extractScore(formData.smokeExposure) +
                      extractScore(formData.cancerAwareness) + extractScore(formData.cancerFamilyHistory) +
                      extractScore(formData.swellingKidney) + extractScore(formData.diabetesHypertension) +
                      extractScore(formData.jointBackPain);

    // D. Mental & Emotional Wellbeing (15%)
    const rawScoreD = extractScore(formData.stressedAnxious) +
                      extractScore(formData.sadnessBurnout) +
                      extractScore(formData.workLifeBalance) +
                      extractScore(formData.relaxationCoping);
    
    // E. Preventive Health & Awareness (10%)
    const rawScoreE = extractScore(formData.lastCheckup) +
                      extractScore(formData.awarenessVitals) +
                      extractScore(formData.vaccinations);
    
    // F. Sleep & Fatigue (10%)
    const rawScoreF = extractScore(formData.avgSleep) +
                      extractScore(formData.daytimeTiredness) +
                      extractScore(formData.screenTimeBed);

    // G. Digital & Social Wellness (15%) - Note: The total weight is 15 for G, and 10 for E and F each, totaling 100%.
    const rawScoreG = extractScore(formData.dailyScreenTime) +
                      extractScore(formData.offlineLeisure) +
                      extractScore(formData.socialConnections) +
                      extractScore(formData.digitalWLB);

    // 2.3. Scale Raw Scores to 100-Point Total based on Weights
    // Weights: B(20), C(30), D(15), E(10), F(10), G(15) -> Total 100
    let score = (rawScoreB / MAX_RAW_B * 20) +
                (rawScoreC / MAX_RAW_C * 30) +
                (rawScoreD / MAX_RAW_D * 15) +
                (rawScoreE / MAX_RAW_E * 10) +
                (rawScoreF / MAX_RAW_F * 10) +
                (rawScoreG / MAX_RAW_G * 15);

    // Ensure score stays within 0-100 range and is an integer
    score = Math.round(Math.max(0, Math.min(score, 100)));

    // 2.4. Determine Risk Status 
    let riskStatus;
    // UPDATED: Mapping the 4 levels (81, 61, 41) to 3 levels (71, 41)
    if (score >= 71) {
        riskStatus = "Low Risk"; // 71–100
    } else if (score >= 41) {
        riskStatus = "Moderate Risk"; // 41–70 (Consolidates old Moderate/At Risk)
    } else {
        riskStatus = "High Risk"; // 0–40
    }

    return { score, riskStatus };
}

// --- Parameter Score Logic and Helpers ---

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
        // NEW 3-Level Mapping for 10-point scale
        if (paramScore >= 8) return "Low Risk"; // Old Low Risk
        if (paramScore >= 4) return "Moderate Risk"; // Old At Risk (3-4) + Old Moderate Risk (5-7) 
        return "High Risk"; // Old High Risk (0-2)
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
        default:
             return 0;
    }

    // Scale parameter raw score to a 10-point score
    let score = (rawScore / maxRaw) * 10;
    
    return Math.round(Math.max(score, 0));
}

function getOverallHealthSuggestion(score, riskStatus) {
    // UPDATED: Suggestions mapped to the new 3-level risk status
    if (riskStatus === "Low Risk") {
        return [
            "Healthy habits, maintain lifestyle & preventive care.",
            "Continue your healthy habits and stay proactive with checkups.",
            "Your score indicates a strong foundation for long-term health."
        ];
    } else if (riskStatus === "Moderate Risk") {
        return [
            "Risk factors present; consider targeted wellness interventions and screenings.",
            "Focus on consistent physical activity, balanced diet, and effective stress control.",
            "Identify your weakest areas (in the table below) for small, consistent changes."
        ];
    } else { // High Risk (0-40)
        return [
            "Multiple risk factors; urgent attention and guided wellness plan recommended.",
            "Seek medical advice immediately to manage and mitigate critical risks.",
            "A detailed health check-up and a personalized, guided wellness plan are strongly recommended."
        ];
    }
}

// --- Generic Functions & Field Generation (No changes needed) ---

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
    } 
    else if (field.type === "multicheckbox") { // Request 7
        const checkboxesHTML = field.options.map((option, index) => {
            const safeId = `${field.id}_${index}`;
            return `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${option}" id="${safeId}" name="${field.id}">
                    <label class="form-check-label" for="${safeId}">
                        ${option}
                    </label>
                </div>
            `;
        }).join("");

        return `
            <div class="mb-3">
                <label class="form-label">${field.label}</label>
                <div id="${field.id}_group">
                    ${checkboxesHTML}
                </div>
            </div>
        `;
    }
    else {
        return `
            <div class="mb-3">
                <label class="form-label">${field.label}</label>
                <input type="${field.type}" id="${field.id}" class="form-control" placeholder="${field.type === 'number' ? 'Enter in numeric format' : ''}">
            </div>
        `;
    }
}

function openModal(id) {
    if (typeof bootstrap === 'undefined' || !bootstrap.Modal) {
        console.error("Bootstrap or its Modal component is not loaded.");
        return;
    }
    let modal = new bootstrap.Modal(document.getElementById(id));
    document.querySelectorAll(".modal").forEach(m => {
        if (m.id !== id) {
            m.setAttribute("inert", "");
        } else {
            m.removeAttribute("inert");
        }
    });
    modal.show();
}

function nextModal(currentId, nextId) {
    saveData(currentId);
    document.activeElement.blur();
    let currentModal = bootstrap.Modal.getInstance(document.getElementById(currentId));
    currentModal.hide();
    openModal(nextId);
}

function prevModal(currentId, prevId) {
    document.activeElement.blur();
    let currentModal = bootstrap.Modal.getInstance(document.getElementById(currentId));
    currentModal.hide();
    openModal(prevId);
}

function validateAndNext(currentId, nextId) {
    if (validateInputs(currentId)) {
        nextModal(currentId, nextId);
    }
}

function validateAndGeneratePDF() {
    if (!validateInputs("modal5")) {
        alert("Please fill out all required fields before generating the report.");
        return;
    }
    saveData("modal5");
    generatePDF();
}

function validateInputs(modalId) {
    let allFilled = true;
    
    // Validate standard inputs (select, text, number)
    let inputs = document.querySelectorAll(`#${modalId} input:not([type="checkbox"]), #${modalId} select`);
    inputs.forEach(input => {
        if ((input.type === "select-one" && input.value.trim() === "") || (input.type !== "select-one" && !input.value.trim())) {
            if (input.id !== "familyHistoryNCDs_group") {
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

            // Special handling for Service Length (can be 0 or 1.5 etc.)
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

function handleFieldChange(id, value) {
    formData[id] = value.trim();
}

function saveData(modalId) {
    let inputs = document.querySelectorAll(`#${modalId} input, #${modalId} select`);
    inputs.forEach(input => {
        if (input.type === "checkbox") {
            // Handle multi-select checkboxes (Request 7)
            const fieldId = input.name;
            if (!formData[fieldId]) {
                formData[fieldId] = [];
            }
            if (input.checked) {
                if (!formData[fieldId].includes(input.value)) {
                    formData[fieldId].push(input.value);
                }
            } else {
                 formData[fieldId] = formData[fieldId].filter(val => val !== input.value);
            }
        } else {
            // Handle standard inputs
            formData[input.id] = input.value.trim();
        }
    });
}

// --- PDF Helper Functions (Keep only getRiskColor and Detailed Suggestions/Subtitles) ---

function getRiskColor(riskLevel) {
    // UPDATED: Adjusted logic to handle the new 3 risk levels (High, Moderate, Low)
    if (riskLevel.includes("High Risk") || riskLevel.includes("Obese")) return [255, 0, 0]; // Red
    // Combine old "At Risk" (Orange) and "Moderate Risk" (Yellow) into one range. Using a Yellow-Orange color.
    if (riskLevel.includes("Moderate Risk") || riskLevel.includes("Underweight") || riskLevel.includes("Overweight")) return [255, 165, 0]; // Orange
    return [0, 128, 0]; // Darker Green for Low Risk
}

function getRiskSubtitle(parameter, riskLevel) {
    // UPDATED: Mapped old 4-level suggestions to the new 3-level structure.
    const subtitles = {
        "Lifestyle & Habits": { "Low Risk": ["Great job!", "Maintain your excellent activity and diet habits."], "Moderate Risk": ["Focus on Diet/Activity", "Increase physical activity and reduce processed food intake."], "High Risk": ["Critical Risk", "Immediate intervention needed across all habits."] },
        "Physical Health & NCD Risk": { "Low Risk": ["Excellent Screening", "Low risk for major NCDs. Maintain vigilance."], "Moderate Risk": ["Monitor & Screen", "Pay attention to any symptoms and schedule a preventive health checkup."], "High Risk": ["Immediate Medical Care", "Known high BP/Sugar or multiple severe symptoms require urgent specialist consultation."] },
        "Mental & Emotional Wellbeing": { "Low Risk": ["Excellent Balance", "You cope well with stress. Keep up relaxation techniques."], "Moderate Risk": ["Need for Focus", "Stress and balance are slipping. Prioritize time for relaxation and coping strategies."], "High Risk": ["Crisis Point", "High distress/burnout indicated. Urgent mental health support is critical."] },
        "Preventive Health & Awareness": { "Low Risk": ["Proactive Care", "You are aware of your vitals and up-to-date on checkups."], "Moderate Risk": ["Checkup and Awareness Due", "If >1 year since last checkup, schedule one immediately. Know your numbers."], "High Risk": ["Mandatory Screening", "No awareness and no checkups. Requires immediate comprehensive health screening."] },
        "Sleep & Fatigue": { "Low Risk": ["Restorative Sleep", "Consistent 7-8 hours of quality sleep. This aids recovery."], "Moderate Risk": ["Improve Hygiene", "Sleep is inconsistent or tiredness is present. Reduce screen time before bed."], "High Risk": ["Severe Sleep Debt", "Chronic sleep deprivation. Address underlying cause immediately."] },
        "Digital & Social Wellness": { "Low Risk": ["Balanced Life", "Low screen time, strong social and offline connections."], "Moderate Risk": ["Reduce Screen Time", "Cut back on non-work screen time and ensure regular offline hobbies and social engagement."], "High Risk": ["Digital Overload", "Severe screen addiction/social isolation. Seek help to rebalance digital and real-world life."] },
        
        // Detailed NCD Risk Subtitles
        "CVD Risk (Heart)": { "Low Risk": ["On Track", "Your current lifestyle and medical responses indicate a low risk for this condition. Maintain vigilance."], "Moderate Risk": ["Monitor Closely", "Minor risk factors identified. Schedule a screening test (e.g., BP/Cholesterol) for baseline data."], "High Risk": ["URGENT INTERVENTION", "Known diagnosis or multiple severe symptoms/high-risk factors. Seek immediate medical attention."] },
        "Diabetes Risk": { "Low Risk": ["On Track", "Your current lifestyle and medical responses indicate a low risk for this condition. Maintain vigilance."], "Moderate Risk": ["Monitor Closely", "Minor risk factors identified. Schedule a blood sugar (HbA1c) test for baseline data."], "High Risk": ["URGENT INTERVENTION", "Known diagnosis or multiple severe symptoms/high-risk factors. Seek immediate medical attention."] },
        "Obesity / Metabolic Syndrome": { "Low Risk": ["On Track", "Your BMI is in the healthy range. Focus on maintaining muscle mass and core health."], "Moderate Risk": ["Monitor Closely", "Risk factors (like high BMI or waist circumference) identified. Focus on increasing activity and healthy eating."], "High Risk": ["URGENT INTERVENTION", "High BMI and/or high waist circumference. Consult a dietitian and physician for a personalized metabolic plan."] },
    };
    
    // Use includes for flexible risk mapping
    // This logic ensures 'At Risk', 'Moderate Risk', 'Underweight', 'Overweight' all map to the new 'Moderate Risk' for subtitle look-up
    const simpleRisk = riskLevel.includes("High Risk") || riskLevel.includes("Obese") ? "High Risk" : (riskLevel.includes("Moderate Risk") || riskLevel.includes("At Risk") || riskLevel.includes("Underweight") || riskLevel.includes("Overweight") ? "Moderate Risk" : "Low Risk");

    if (subtitles[parameter] && subtitles[parameter][simpleRisk]) {
        return subtitles[parameter][simpleRisk];
    }
    
    // Fallback for general categories
    return subtitles[parameter][riskLevel] || ["No detailed subtitle available.", "Please consult the overall recommendations."];
}

function getDetailedSuggestions(parameter, riskLevel) {
    // UPDATED: Mapped old 4-level suggestions to the new 3-level structure.
    const suggestions = {
        "CVD Risk (Heart)": { 
            "Low Risk": ["• Maintain your healthy blood pressure and cholesterol levels with diet and exercise.", "• Regular physical activity (30 min, 5 days/week) is key to cardiovascular health."],
            "Moderate Risk": ["• Reduce intake of sodium and saturated fats. Increase heart-healthy foods (fish, nuts).", "• If you experience chest discomfort, report it to a physician immediately."],
            "High Risk": ["• Seek consultation with a cardiologist for a complete check-up (ECG, Stress Test).", "• Strictly adhere to any medication prescribed for BP or cholesterol.", "• Implement tobacco cessation immediately."]
        },
        "Diabetes Risk": {
            "Low Risk": ["• Continue to prioritize a low-sugar, whole-food diet.", "• Maintain a healthy weight and engage in regular exercise."],
            "Moderate Risk": ["• Limit simple carbohydrates (white bread, sugar) and focus on fiber-rich foods.", "• Request a blood sugar (HbA1c) test during your next health checkup."],
            "High Risk": ["• Consult an endocrinologist if you have a known diagnosis or strong family history combined with symptoms.", "• Maintain weight control and follow a strict, low-glycemic diet.", "• Increase physical activity to improve insulin sensitivity."]
        },
        "Obesity / Metabolic Syndrome": {
            "Low Risk": ["• Continue to maintain your healthy BMI and waist circumference.", "• Focus on strength training to maintain muscle mass and metabolism."],
            "Moderate Risk": ["• Increase daily step count to at least 8,000 steps.", "• Re-evaluate portion sizes, especially for dinner.", "• If Waist Circumference is high, focus on core-strengthening exercises."],
            "High Risk": ["• Consult a dietitian for a personalized weight loss plan.", "• Request testing for metabolic markers (cholesterol, triglycerides).", "• If BMI is >30, a medical weight management program is strongly recommended."]
        },
        // General Area Suggestions (using includes for flexible risk mapping)
        "Lifestyle & Habits": { 
            "Low Risk": ["• Maintain your current excellent activity and dietary habits.", "• Continue to limit or avoid tobacco and alcohol.", "• Keep drinking 8+ glasses of water daily."], 
            "Moderate Risk": ["• Aim for 3-4 days of 30-minute exercise per week.", "• Ensure 3-4 servings of fruits/vegetables daily.", "• Limit fried/processed food to once per week."], 
            "High Risk": ["• Consult a health coach for a full lifestyle overhaul.", "• Enroll in a tobacco cessation program (if applicable).", "• Prioritize water intake (8+ glasses) and balanced meals immediately."] 
        },
        "Physical Health & NCD Risk": {
            "Low Risk": ["• Maintain annual checkups and track key health numbers (BP, BMI, Sugar).", "• Continue physical activity to support joint and muscle health.", "• Report any persistent or unusual symptoms promptly."],
            "Moderate Risk": ["• Schedule a follow-up with your physician if you have symptoms like chest pain or thirst.", "• Track your BMI and waist circumference monthly.", "• Increase activity levels to manage weight and prevent NCDs."],
            "High Risk": ["• Urgent consultation with a cardiologist or endocrinologist is required.", "• Do not delay comprehensive diagnostic tests.", "• Implement all recommended lifestyle changes immediately to stabilize vitals."]
        },
        "Mental & Emotional Wellbeing": {
            "Low Risk": ["• Continue using your preferred relaxation and stress management techniques.", "• Ensure a healthy separation between work and personal life.", "• Stay connected with your social support network."],
            "Moderate Risk": ["• Dedicate 10 minutes daily to mindfulness or deep breathing.", "• Set clear 'off-limits' times for work communication.", "• Engage in a hobby or activity you enjoy weekly for relaxation."],
            "High Risk": ["• Urgent referral for counseling/therapy is mandatory.", "• Communicate burnout/distress to HR/management for supportive changes.", "• Focus solely on self-care and recovery until stable."]
        },
        "Preventive Health & Awareness": {
            "Low Risk": ["• Ensure you always know your latest BP, Sugar, and BMI readings.", "• Stay up-to-date on all recommended vaccinations and screenings.", "• Continue being proactive in seeking health information."],
            "Moderate Risk": ["• Book a full-body checkup within the next 3 months.", "• Keep a log of your BP, sugar, and cholesterol numbers.", "• Research common lifestyle diseases and their prevention."],
            "High Risk": ["• A comprehensive diagnostic panel is mandatory immediately.", "• Work with a health coach to track and interpret your vitals.", "• Do not postpone any preventive screenings."]
        },
        "Sleep & Fatigue": {
            "Low Risk": ["• Continue to maintain a consistent sleep schedule (7-8 hours).", "• Avoid screen usage close to bedtime to maintain sleep quality.", "• Use your bedroom only for sleep and rest."],
            "Moderate Risk": ["• Ensure bedroom is cool, dark, and quiet.", "• Avoid caffeine and heavy meals close to bedtime.", "• Reduce screen time before bed to one hour."],
            "High Risk": ["• Seek consultation for chronic insomnia or persistent fatigue.", "• Eliminate all screens and work-related materials from the bedroom.", "• Address underlying stress or anxiety that is disrupting sleep."]
        },
        "Digital & Social Wellness": {
            "Low Risk": ["• Continue balancing screen time with offline leisure and maintain strong social bonds.", "• Avoid using digital devices for personal tasks during work hours.", "• Keep a regular schedule for offline social activities."],
            "Moderate Risk": ["• Aim to spend less than 3 hours on non-work screens daily.", "• Schedule at least one hour of offline/outdoor leisure weekly.", "• Intentionally call or meet a friend/family member weekly."],
            "High Risk": ["• Implement a strict digital detox plan.", "• Seek support to address social anxiety or isolation.", "• Prioritize face-to-face interactions over digital communication."]
        }
    };
    
    // This logic ensures 'At Risk', 'Moderate Risk', 'Underweight', 'Overweight' all map to the new 'Moderate Risk' for suggestion look-up
    const simpleRisk = riskLevel.includes("High Risk") || riskLevel.includes("Obese") ? "High Risk" : (riskLevel.includes("Moderate Risk") || riskLevel.includes("At Risk") || riskLevel.includes("Underweight") || riskLevel.includes("Overweight") ? "Moderate Risk" : "Low Risk");

    if (suggestions[parameter] && suggestions[parameter][simpleRisk]) {
        return suggestions[parameter][simpleRisk];
    }
    
    return suggestions[parameter][riskLevel] || ["No specific suggestions available."];
}


// --- 5. PDF GENERATION FUNCTIONS (Modified generateRiskDetails for the fix) ---

function generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion) {
    const ACCENT_COLOR = [29, 166, 154]; 
    const bmiResult = calculateBMI();

    doc.setFont("helvetica", "bold"); // FIXED FONT
    doc.setFontSize(14);
    doc.text("Overall Health Summary", 105, 50, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal"); // FIXED FONT

    let summaryData = [
        ["Overall Health Score", `${score}/100`],
        ["Risk Status", riskStatus],
        ["BMI (Calculated)", `${bmiResult.bmi} kg/m²`],
        ["BMI Status", bmiResult.risk.replace(/.*- /, '')] // Display only the status (e.g., "Healthy Weight")
    ];

    // Add Basic Profile Data
    let profileData = [
        ["Age", formData.age],
        ["Gender", formData.gender],
        ["Department", formData.department],
        ["Service Length", `${formData.serviceLength} years`],
        ["Job Type / Shift", `${formData.occupationType} / ${formData.shiftType}`],
    ];

    doc.autoTable({
        startY: 60,
        head: [["Metric", "Value"]],
        body: summaryData,
        theme: "grid",
        headStyles: { fillColor: ACCENT_COLOR, textColor: 255, fontStyle: 'bold' },
        styles: { fontSize: 12, halign: "center", font: "helvetica" }, // FIXED FONT
        alternateRowStyles: { fillColor: [240, 240, 240] }
    });
    
    // Adjusted spacing after the Overall Health Summary table
    let y = doc.autoTable.previous.finalY + 12;

    doc.setFont("helvetica", "bold"); // FIXED FONT
    doc.text("Basic Profile:", 14, y);
    y += 6;

    doc.autoTable({
        startY: y,
        body: profileData,
        theme: "plain",
        styles: { fontSize: 12, cellPadding: 2, font: "helvetica" }, // FIXED FONT
        columnStyles: { 0: { fontStyle: 'bold' }, 1: { halign: 'left' } }
    });

    y = doc.autoTable.previous.finalY + 10;

    doc.setFont("helvetica", "bold"); // FIXED FONT
    doc.text("Overall Health Suggestions:", 14, y);
    y += 8; // Increased space before the first suggestion

    doc.setFont("helvetica", "normal"); // FIXED FONT
    // Adjusted spacing for suggestion points
    overallHealthSuggestion.forEach((suggestion) => {
        doc.text(`• ${suggestion}`, 14, y);
        y += 8;
    });

    return y + 10;
}


// FIX APPLIED HERE: Removed the final unnecessary doc.addPage() check from the loop.
function generateRiskDetails(doc, y, healthAreas) {
    const ACCENT_COLOR = [29, 166, 154];
    const ncdRisks = getNCDsDetailedRisk();
    
    // Combine detailed NCD risks with general health areas for the detailed page
    const orderedKeys = [
        "CVD Risk (Heart)", 
        "Diabetes Risk", 
        "Obesity / Metabolic Syndrome",
        "Lifestyle & Habits", 
        "Mental & Emotional Wellbeing",
        "Sleep & Fatigue", 
        "Digital & Social Wellness",
        "Preventive Health & Awareness"
    ];

    const allAreas = {...ncdRisks, ...healthAreas};
    
    orderedKeys.forEach((key, index) => { // Use index to know if it's the last item
        const item = allAreas[key];
        if (!item) return;

        // Check 1: Page break before starting a new area section
        if (y > doc.internal.pageSize.height - 60) {
            doc.addPage();
            y = 20;
        }

        let isNCDDetail = ncdRisks.hasOwnProperty(key);
        let riskLevel = isNCDDetail ? item.risk : item;
        let riskScore = isNCDDetail ? `${item.score}/${item.max}` : `${calculateParameterScore(key)}/10`;
        let subtitleText = getRiskSubtitle(key, riskLevel);
        let riskColor = getRiskColor(riskLevel);

        doc.setFont("helvetica", "bold"); // FIXED FONT
        doc.setFontSize(12);
        doc.text(key, 14, y);
        y += 6;

        // Check 2: Page break before table
        if (y > doc.internal.pageSize.height - 50) {
            doc.addPage();
            y = 20;
        }
        
        doc.autoTable({
            startY: y,
            head: [["Metric", "Value"]],
            body: [
                ["Risk Score", riskScore],
                ["Risk Level", { content: riskLevel, styles: { textColor: riskColor, fontStyle: 'bold' } }],
                ...(key.includes("Obesity") ? [["BMI", calculateBMI().bmi + ' kg/m²']] : [])
            ],
            theme: "grid",
            headStyles: { fillColor: ACCENT_COLOR, textColor: 255, fontStyle: 'bold' },
            styles: { fontSize: 12, halign: "center", font: "helvetica" }, // FIXED FONT
            alternateRowStyles: { fillColor: [240, 240, 240] }
        });

        y = doc.autoTable.previous.finalY + 10;

        // Check 3: Page break before subtitles
        if (y > doc.internal.pageSize.height - 50) {
            doc.addPage();
            y = 20;
        }
        
        doc.setFont("helvetica", "bold"); // FIXED FONT
        doc.text(subtitleText[0], 14, y);
        y += 6;
        doc.setFont("helvetica", "normal"); // FIXED FONT

        let lines = doc.splitTextToSize(subtitleText.slice(1).join("\n"), 180);
        doc.text(lines, 14, y);
        y += lines.length * 6 + 10;

        // Show improvement suggestions if not Low Risk
        if (!riskLevel.includes("Low Risk") && !riskLevel.includes("Healthy Weight")) { 
            // Check 4: Page break before suggestions
            if (y > doc.internal.pageSize.height - 50) {
                doc.addPage();
                y = 20;
            }
            let suggestions = getDetailedSuggestions(key, riskLevel);
            doc.setFont("helvetica", "bold"); // FIXED FONT
            doc.text("How to Improve:", 14, y);
            y += 6;
            doc.setFont("helvetica", "normal"); // FIXED FONT

            let suggestionLines = doc.splitTextToSize(suggestions.join("\n"), 180);
            doc.text(suggestionLines, 14, y);
            y += suggestionLines.length * 6 + 10;
        }

        // Horizontal line separator (Only draw if it's NOT the last item)
        if (index < orderedKeys.length - 1) {
            // Only draw line if there's enough space
            if (y < doc.internal.pageSize.height - 20) {
                doc.setDrawColor(150, 150, 150);
                doc.setLineWidth(0.5);
                doc.line(10, y, 200, y);
                y += 10;
            }
        }
        
        // REMOVED FINAL CHECK (THE CULPRIT) HERE to prevent a blank page addition for the very last item.

        if (y > doc.internal.pageSize.height - 50) { // This will only be reached if the line drawing pushed it over
             if (index < orderedKeys.length - 1) { // Only add page if more content follows
                doc.addPage();
                y = 20;
            }
        }
    });

    return y;
}

function generateHealthRiskTable(doc, y, healthAreas) {
    const ACCENT_COLOR = [29, 166, 154];

    doc.setFont("helvetica", "bold"); // FIXED FONT
    doc.text("Health Area Risk Levels", 105, y, { align: "center" });

    y += 8;

    let healthData = Object.entries(healthAreas).map(([key, value]) => [
        key,
        {
            content: value,
            styles: { textColor: getRiskColor(value) }
        }
    ]);

    doc.autoTable({
        startY: y,
        head: [["Health Area", "Risk Level"]],
        body: healthData,
        theme: "grid",
        headStyles: { fillColor: ACCENT_COLOR, textColor: 255, fontStyle: 'bold' },
        styles: { fontSize: 12, halign: "center", font: "helvetica" }, // FIXED FONT
        alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    return doc.autoTable.previous.finalY + 10;
}

function generateNCDsRiskTable(doc, y) {
    const ACCENT_COLOR = [29, 166, 154];
    const ncdRisks = getNCDsDetailedRisk();

    doc.setFont("helvetica", "bold"); // FIXED FONT
    doc.text("Key Non-Communicable Disease (NCD) Risk Summary", 105, y, { align: "center" });

    y += 8;

    let ncdData = Object.entries(ncdRisks).map(([key, value]) => [
        key,
        `${value.score}/${value.max}`,
        {
            content: value.risk,
            styles: { textColor: getRiskColor(value.risk) }
        }
    ]);

    doc.autoTable({
        startY: y,
        head: [["Specific NCD Risk", "Raw Score", "Risk Level"]],
        body: ncdData,
        theme: "grid",
        headStyles: { fillColor: ACCENT_COLOR, textColor: 255, fontStyle: 'bold' },
        styles: { fontSize: 12, halign: "center", font: "helvetica" }, // FIXED FONT
        alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    return doc.autoTable.previous.finalY + 10;
}


function generatePDF() {
    // Check for jsPDF availability
    if (typeof window.jspdf === 'undefined' || typeof window.jspdf.jsPDF === 'undefined') {
        alert("FATAL ERROR: PDF libraries are not loaded correctly. Please check index.html script order.");
        console.error("jsPDF or jsPDF.jsPDF is undefined. Cannot generate PDF.");
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    if (typeof doc.autoTable !== "function") {
        alert("Error: jsPDF AutoTable plugin is not loaded.");
        return;
    }

    saveData("modal5"); 

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const { score, riskStatus } = calculateHealthScore();
    const overallHealthSuggestion = getOverallHealthSuggestion(score, riskStatus);
    const healthAreas = getHealthAreas();

    const logo = new Image();
    // Assuming 'logo.png' is in the root directory
    logo.src = "logo.png"; 

    const generateContent = function () {
        // Set document header font and colors
        doc.setFont("helvetica", "bold"); // FIXED FONT
        doc.setTextColor(44, 62, 80); // Dark Blue/Gray
        doc.setFontSize(16);
        doc.text("NIZCARE HEALTH RISK ASSESSMENT", 105, 35, { align: "center" });

        // Add Logo - Use try/catch or a condition to handle load failure gracefully
        try {
            // Add image only if it loaded successfully (width/height > 0)
            if (logo.width > 0 && logo.height > 0) {
                doc.addImage(logo, "PNG", 10, 10, 65, 15);
            }
        } catch (e) {
            console.warn("Could not add logo image to PDF:", e);
        }

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
        
        // Add a page break after the Summary and Suggestions section to start the detailed risk page
        doc.addPage();
        y = 20;

        // 4. Detailed Risk Recommendations (Includes NCD Sub-Risks)
        y = generateRiskDetails(doc, y, healthAreas);

        doc.save("NIZCARE_Health_Scorecard.pdf");
    };

    // The logic to ensure 'generateContent' runs once the image is ready (or fails)
    if (logo.complete) {
        generateContent(); 
    } else {
        logo.onload = generateContent; 
        // Important: Use onerror as a fallback so the PDF still generates even if the logo is missing/broken
        logo.onerror = generateContent; 
    }
}