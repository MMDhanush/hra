// --- 1. NEW QUESTION SET (SECTIONS A-G) ---
// The questions are grouped into five modals for a smooth user flow.
const sections = [
    {
        id: "modal1",
        title: "Section A: Basic Profile (Non-scoring)",
        fields: [
            { id: "age", label: "Age", type: "number" },
            { id: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
            { id: "occupationType", label: "Occupation type", type: "select", options: ["Desk job", "Field job", "Shift work"] },
            { id: "workLocation", label: "Work location", type: "text" },
            // Family history of major NCDs is gathered as a single text field
            { id: "familyHistoryNCDs", label: "Family history of major NCDs (CVD, Diabetes, Cancer, CKD, Hypertension)", type: "text" }
        ]
    },
    {
        id: "modal2",
        title: "Section B: Lifestyle & Habits (20 points)",
        fields: [
            { id: "exercise", label: "Exercise ≥30 min/week", type: "select", options: ["0 days", "1–2 days", "3–4 days", "5+ days"] },
            { id: "fruitsVeg", label: "Fruits & vegetables intake", type: "select", options: ["Rarely", "3–4 times/week", "Daily"] },
            { id: "processedFood", label: "Fried/processed food consumption", type: "select", options: ["4+ times/week", "2–3 times/week", "Rarely"] },
            { id: "tobaccoAlcohol", label: "Tobacco/alcohol usage", type: "select", options: ["Regular", "Occasionally", "None"] },
            { id: "water", label: "Water intake/day", type: "select", options: ["<4 glasses", "4–6", "7–8", "8+"] }
        ]
    },
    {
        id: "modal3",
        title: "Section C: Physical Health & NCD Risk (30 points)",
        fields: [
            // CVD
            { id: "bpDiagnosis", label: "High BP diagnosed/known?", type: "select", options: ["Yes", "No"] },
            { id: "chestPain", label: "Chest pain/palpitations?", type: "select", options: ["Yes", "Sometimes", "No"] },
            { id: "cvdFamilyHistory", label: "Family history of CVD?", type: "select", options: ["Yes", "No"] },
            // Diabetes
            { id: "sugarDiagnosis", label: "High blood sugar diagnosed?", type: "select", options: ["Yes", "No"] },
            { id: "excessiveThirst", label: "Excessive thirst/frequent urination/unexplained weight change?", type: "select", options: ["Yes", "Sometimes", "No"] },
            { id: "diabetesFamilyHistory", label: "Family history of diabetes?", type: "select", options: ["Yes", "No"] },
            // Obesity & Metabolic Syndrome
            { id: "waistCircumference", label: "Waist circumference >90cm (men)/>80cm (women)?", type: "select", options: ["Yes", "No"] },
            { id: "bmiOver25", label: "BMI >25 kg/m²?", type: "select", options: ["Yes", "No"] },
            // Chronic Respiratory Diseases
            { id: "asthmaCOPD", label: "Asthma/COPD/frequent cough/wheezing?", type: "select", options: ["Yes", "Sometimes", "No"] },
            { id: "smokeExposure", label: "Exposure to smoke/pollution/occupational dust?", type: "select", options: ["Yes", "No"] },
            // Cancer Awareness & Screening
            { id: "cancerAwareness", label: "Aware of recommended cancer screenings?", type: "select", options: ["Yes", "No"] },
            { id: "cancerFamilyHistory", label: "Family history of cancer?", type: "select", options: ["Yes", "No"] },
            // Chronic Kidney Disease (CKD)
            { id: "swellingKidney", label: "Swelling in legs/face or known kidney issues?", type: "select", options: ["Yes", "No"] },
            { id: "diabetesHypertension", label: "Have diabetes/long-standing hypertension?", type: "select", options: ["Yes", "No"] },
            // Musculoskeletal Disorders
            { id: "jointBackPain", label: "Persistent joint/back pain or difficulty in daily activity?", type: "select", options: ["Yes", "Sometimes", "No"] }
        ]
    },
    {
        id: "modal4",
        title: "Section D: Mental & Emotional Wellbeing (15 points) & Section F: Sleep & Fatigue (10 points)",
        fields: [
            // Section D
            { id: "stressedAnxious", label: "Feeling stressed or anxious", type: "select", options: ["Almost every day", "Often", "Occasionally", "Rarely"] },
            { id: "sadnessBurnout", label: "Persistent sadness/burnout", type: "select", options: ["Yes", "Sometimes", "No"] },
            { id: "workLifeBalance", label: "Work-life balance", type: "select", options: ["Poorly", "Average", "Well"] },
            { id: "relaxationCoping", label: "Relaxation & coping", type: "select", options: ["Rarely", "Sometimes", "Often"] },
            // Section F
            { id: "avgSleep", label: "Average sleep/day", type: "select", options: ["<5 hrs", "5–6 hrs", "7–8 hrs"] },
            { id: "daytimeTiredness", label: "Daytime tiredness", type: "select", options: ["Always", "Sometimes", "Rarely"] },
            { id: "screenTimeBed", label: "Screen usage 30 min before bed", type: "select", options: ["Always", "Sometimes", "Rarely/Never"] }
        ]
    },
    {
        id: "modal5",
        title: "Section G: Digital & Social Wellness (15 points) & Section E: Preventive Health (10 points)",
        final: true,
        fields: [
            // Section G
            { id: "dailyScreenTime", label: "Daily screen time (non-work)", type: "select", options: [">5 hrs", "3–5 hrs", "<3 hrs"] },
            { id: "offlineLeisure", label: "Outdoor/offline leisure", type: "select", options: ["Rarely", "Once/week", "Multiple times/week"] },
            { id: "socialConnections", label: "Social connections", type: "select", options: ["Rarely", "Occasionally", "Regularly"] },
            { id: "digitalWLB", label: "Work-life balance (digital overload)", type: "select", options: ["Poor", "Average", "Well"] },
            // Section E
            { id: "lastCheckup", label: "Last full-body checkup", type: "select", options: ["Never", ">2 yrs ago", "Within 1 yr", "Within 6 months"] },
            { id: "awarenessVitals", label: "Awareness of BP, sugar, cholesterol, BMI", type: "select", options: ["No", "Partially", "Yes"] },
            { id: "vaccinations", label: "Vaccinations/Preventive screenings", type: "select", options: ["No", "Partially", "Yes"] }
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

// --- CORE SCORING LOGIC ---

// Rewritten extractScore function based on the new point values
function extractScore(fieldId, value) {
    if (!value) return 0;

    // Direct mapping for irregular scores (not 0, 5, 10, 15) or binary
    const scoreMap = {
        // Section B
        "exercise": { "0 days": 0, "1–2 days": 5, "3–4 days": 10, "5+ days": 15 },
        "fruitsVeg": { "Rarely": 0, "3–4 times/week": 5, "Daily": 10 },
        "processedFood": { "4+ times/week": 0, "2–3 times/week": 5, "Rarely": 10 },
        "tobaccoAlcohol": { "Regular": 0, "Occasionally": 5, "None": 10 },
        "water": { "<4 glasses": 0, "4–6": 2, "7–8": 3, "8+": 5 }, // Irregular 0, 2, 3, 5

        // Section C - CVD
        "bpDiagnosis": { "Yes": 0, "No": 5 },
        "chestPain": { "Yes": 0, "Sometimes": 2, "No": 5 },
        "cvdFamilyHistory": { "Yes": 0, "No": 3 },
        // Section C - Diabetes
        "sugarDiagnosis": { "Yes": 0, "No": 5 },
        "excessiveThirst": { "Yes": 0, "Sometimes": 2, "No": 5 },
        "diabetesFamilyHistory": { "Yes": 0, "No": 3 },
        // Section C - Obesity
        "waistCircumference": { "Yes": 0, "No": 5 },
        "bmiOver25": { "Yes": 0, "No": 5 },
        // Section C - Respiratory
        "asthmaCOPD": { "Yes": 0, "Sometimes": 2, "No": 5 },
        "smokeExposure": { "Yes": 0, "No": 3 },
        // Section C - Cancer
        "cancerAwareness": { "Yes": 5, "No": 0 },
        "cancerFamilyHistory": { "Yes": 0, "No": 3 },
        // Section C - CKD
        "swellingKidney": { "Yes": 0, "No": 5 },
        "diabetesHypertension": { "Yes": 0, "No": 3 },
        // Section C - Musculoskeletal
        "jointBackPain": { "Yes": 0, "Sometimes": 2, "No": 5 },

        // Section D
        "stressedAnxious": { "Almost every day": 0, "Often": 5, "Occasionally": 10, "Rarely": 15 },
        "sadnessBurnout": { "Yes": 0, "Sometimes": 5, "No": 10 },
        "workLifeBalance": { "Poorly": 0, "Average": 5, "Well": 10 },
        "relaxationCoping": { "Rarely": 0, "Sometimes": 5, "Often": 10 },

        // Section E
        "lastCheckup": { "Never": 0, ">2 yrs ago": 5, "Within 1 yr": 10, "Within 6 months": 15 }, // Irregular 0, 5, 10, 15
        "awarenessVitals": { "No": 0, "Partially": 5, "Yes": 10 },
        "vaccinations": { "No": 0, "Partially": 5, "Yes": 10 },
        
        // Section F
        "avgSleep": { "<5 hrs": 0, "5–6 hrs": 5, "7–8 hrs": 10 },
        "daytimeTiredness": { "Always": 0, "Sometimes": 5, "Rarely": 10 },
        "screenTimeBed": { "Always": 0, "Sometimes": 2, "Rarely/Never": 5 }, // Irregular 0, 2, 5

        // Section G
        "dailyScreenTime": { ">5 hrs": 0, "3–5 hrs": 5, "<3 hrs": 10 },
        "offlineLeisure": { "Rarely": 0, "Once/week": 5, "Multiple times/week": 10 },
        "socialConnections": { "Rarely": 0, "Occasionally": 5, "Regularly": 10 },
        "digitalWLB": { "Poor": 0, "Average": 5, "Well": 10 },
    };

    return scoreMap[fieldId] ? scoreMap[fieldId][value] || 0 : 0;
}

function calculateHealthScore() {
    // New Max Raw Scores based on document calculation:
    const MAX_RAW_B = 50; // 15 + 10 + 10 + 10 + 5
    const MAX_RAW_C = 65; // 13 + 13 + 10 + 8 + 8 + 8 + 5
    const MAX_RAW_D = 45; // 15 + 10 + 10 + 10
    const MAX_RAW_E = 35; // 15 + 10 + 10
    const MAX_RAW_F = 25; // 10 + 10 + 5
    const MAX_RAW_G = 40; // 10 + 10 + 10 + 10

    // 2.2. Calculate Raw Scores
    // B. Lifestyle & Habits (20%)
    const rawScoreB = extractScore("exercise", formData.exercise) +
                      extractScore("fruitsVeg", formData.fruitsVeg) +
                      extractScore("processedFood", formData.processedFood) +
                      extractScore("tobaccoAlcohol", formData.tobaccoAlcohol) +
                      extractScore("water", formData.water);

    // C. Physical Health & NCD Risk (30%)
    const rawScoreC = extractScore("bpDiagnosis", formData.bpDiagnosis) + extractScore("chestPain", formData.chestPain) + extractScore("cvdFamilyHistory", formData.cvdFamilyHistory) +
                      extractScore("sugarDiagnosis", formData.sugarDiagnosis) + extractScore("excessiveThirst", formData.excessiveThirst) + extractScore("diabetesFamilyHistory", formData.diabetesFamilyHistory) +
                      extractScore("waistCircumference", formData.waistCircumference) + extractScore("bmiOver25", formData.bmiOver25) +
                      extractScore("asthmaCOPD", formData.asthmaCOPD) + extractScore("smokeExposure", formData.smokeExposure) +
                      extractScore("cancerAwareness", formData.cancerAwareness) + extractScore("cancerFamilyHistory", formData.cancerFamilyHistory) +
                      extractScore("swellingKidney", formData.swellingKidney) + extractScore("diabetesHypertension", formData.diabetesHypertension) +
                      extractScore("jointBackPain", formData.jointBackPain);

    // D. Mental & Emotional Wellbeing (15%)
    const rawScoreD = extractScore("stressedAnxious", formData.stressedAnxious) +
                      extractScore("sadnessBurnout", formData.sadnessBurnout) +
                      extractScore("workLifeBalance", formData.workLifeBalance) +
                      extractScore("relaxationCoping", formData.relaxationCoping);
    
    // E. Preventive Health & Awareness (10%)
    const rawScoreE = extractScore("lastCheckup", formData.lastCheckup) +
                      extractScore("awarenessVitals", formData.awarenessVitals) +
                      extractScore("vaccinations", formData.vaccinations);
    
    // F. Sleep & Fatigue (10%)
    const rawScoreF = extractScore("avgSleep", formData.avgSleep) +
                      extractScore("daytimeTiredness", formData.daytimeTiredness) +
                      extractScore("screenTimeBed", formData.screenTimeBed);

    // G. Digital & Social Wellness (15%)
    const rawScoreG = extractScore("dailyScreenTime", formData.dailyScreenTime) +
                      extractScore("offlineLeisure", formData.offlineLeisure) +
                      extractScore("socialConnections", formData.socialConnections) +
                      extractScore("digitalWLB", formData.digitalWLB);

    // 2.3. Scale Raw Scores to 100-Point Total based on Weights
    let score = (rawScoreB / MAX_RAW_B * 20) +
                (rawScoreC / MAX_RAW_C * 30) +
                (rawScoreD / MAX_RAW_D * 15) +
                (rawScoreE / MAX_RAW_E * 10) +
                (rawScoreF / MAX_RAW_F * 10) +
                (rawScoreG / MAX_RAW_G * 15);

    // Ensure score stays within 0-100 range and is an integer
    score = Math.round(Math.max(0, Math.min(score, 100)));

    // 2.4. Determine Risk Status based on new ranges 
    let riskStatus;
    if (score >= 81) {
        riskStatus = "Low Risk"; // 81–100 
    } else if (score >= 61) {
        riskStatus = "Moderate Risk"; // 61–80 
    } else if (score >= 41) {
        riskStatus = "At Risk"; // 41–60 
    } else {
        riskStatus = "High Risk"; // 0–40 
    }

    return { score, riskStatus };
}

// --- Parameter Score Logic and Helpers ---

function getHealthAreas() {
    // New health areas based on document sections B, C, D, E, F, G
    const areas = {
        "Lifestyle & Habits": "Lifestyle & Habits", // B
        "Physical Health & NCD Risk": "Physical Health & NCD Risk", // C
        "Mental & Emotional Wellbeing": "Mental & Emotional Wellbeing", // D
        "Preventive Health & Awareness": "Preventive Health & Awareness", // E
        "Sleep & Fatigue": "Sleep & Fatigue", // F
        "Digital & Social Wellness": "Digital & Social Wellness" // G
    };

    function determineRisk(parameter) {
        const paramScore = calculateParameterScore(parameter);
        // Scaling a 10-point parameter score to 4 risk levels
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

// Updated Parameter Score Logic (Max 10 points per area, scaled from Max Raw)
function calculateParameterScore(parameter) {
    let rawScore = 0;
    let maxRaw = 1;

    // Must replicate the raw score calculation logic from calculateHealthScore
    switch (parameter) {
        case "Lifestyle & Habits": // Section B
            rawScore = extractScore("exercise", formData.exercise) + extractScore("fruitsVeg", formData.fruitsVeg) + extractScore("processedFood", formData.processedFood) + extractScore("tobaccoAlcohol", formData.tobaccoAlcohol) + extractScore("water", formData.water);
            maxRaw = 50;
            break;

        case "Physical Health & NCD Risk": // Section C
            rawScore = extractScore("bpDiagnosis", formData.bpDiagnosis) + extractScore("chestPain", formData.chestPain) + extractScore("cvdFamilyHistory", formData.cvdFamilyHistory) +
                       extractScore("sugarDiagnosis", formData.sugarDiagnosis) + extractScore("excessiveThirst", formData.excessiveThirst) + extractScore("diabetesFamilyHistory", formData.diabetesFamilyHistory) +
                       extractScore("waistCircumference", formData.waistCircumference) + extractScore("bmiOver25", formData.bmiOver25) +
                       extractScore("asthmaCOPD", formData.asthmaCOPD) + extractScore("smokeExposure", formData.smokeExposure) +
                       extractScore("cancerAwareness", formData.cancerAwareness) + extractScore("cancerFamilyHistory", formData.cancerFamilyHistory) +
                       extractScore("swellingKidney", formData.swellingKidney) + extractScore("diabetesHypertension", formData.diabetesHypertension) +
                       extractScore("jointBackPain", formData.jointBackPain);
            maxRaw = 65;
            break;

        case "Mental & Emotional Wellbeing": // Section D
            rawScore = extractScore("stressedAnxious", formData.stressedAnxious) + extractScore("sadnessBurnout", formData.sadnessBurnout) + extractScore("workLifeBalance", formData.workLifeBalance) + extractScore("relaxationCoping", formData.relaxationCoping);
            maxRaw = 45;
            break;

        case "Preventive Health & Awareness": // Section E
            rawScore = extractScore("lastCheckup", formData.lastCheckup) + extractScore("awarenessVitals", formData.awarenessVitals) + extractScore("vaccinations", formData.vaccinations);
            maxRaw = 35;
            break;

        case "Sleep & Fatigue": // Section F
            rawScore = extractScore("avgSleep", formData.avgSleep) + extractScore("daytimeTiredness", formData.daytimeTiredness) + extractScore("screenTimeBed", formData.screenTimeBed);
            maxRaw = 25;
            break;
            
        case "Digital & Social Wellness": // Section G
            rawScore = extractScore("dailyScreenTime", formData.dailyScreenTime) + extractScore("offlineLeisure", formData.offlineLeisure) + extractScore("socialConnections", formData.socialConnections) + extractScore("digitalWLB", formData.digitalWLB);
            maxRaw = 40;
            break;
    }

    // Scale parameter raw score to a 10-point score
    let score = (rawScore / maxRaw) * 10;
    
    return Math.round(Math.max(score, 0));
}

// Updated Overall Health Suggestion based on document meanings 
function getOverallHealthSuggestion(score, riskStatus) {
    if (riskStatus === "Low Risk") {
        return [
            "Healthy habits, maintain lifestyle & preventive care.",
            "Continue your healthy habits and stay proactive with checkups.",
            "Your score indicates a strong foundation for long-term health."
        ];
    } else if (riskStatus === "Moderate Risk") {
        return [
            "Some risk factors, consider targeted wellness interventions.",
            "Focus on consistent physical activity and stress control to move to Low Risk.",
            "Identify your weakest areas (in the table below) for small, consistent changes."
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

// --- Generic Functions (No content change needed, just structural integrity) ---

// Generate form fields dynamically (No change needed)
function generateField(field) {
    if (field.type === "select") {
        return `
            <label>${field.label}</label>
            <select id="${field.id}" class="form-select mb-2" onchange="handleFieldChange('${field.id}', this.value)">
                <option value="">Select an option</option>
                ${field.options.map(option => `<option value="${option}">${option}</option>`).join("")}
            </select>
        `;
    } else {
        return `
            <label>${field.label}</label>
            <input type="${field.type}" id="${field.id}" class="form-control mb-2">
        `;
    }
}

// Open, Next, Prev modal functions (No change needed)
function openModal(id) {
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

// Basic Validation (No change needed)
function validateInputs(modalId) {
    let inputs = document.querySelectorAll(`#${modalId} input, #${modalId} select`);
    let allFilled = true;
    inputs.forEach(input => {
        if (input.type === "select-one" && input.value.trim() === "") {
             // For select, if the value is empty string (default option)
            input.classList.add("is-invalid");
            allFilled = false;
        }
        else if (input.type !== "select-one" && !input.value.trim()) {
            // For other inputs
            input.classList.add("is-invalid");
            allFilled = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });
    return allFilled;
}

// Field Change Handler (No change needed)
function handleFieldChange(id, value) {
    // Left empty as no conditional fields exist in the new HRA.
}

// Save form data (No change needed)
function saveData(modalId) {
    let inputs = document.querySelectorAll(`#${modalId} input, #${modalId} select`);
    inputs.forEach(input => {
        formData[input.id] = input.value.trim();
    });
}

// PDF Helper Functions (Keeping the generic structure)

function getRiskColor(riskLevel) {
    if (riskLevel === "High Risk") return [255, 0, 0]; // Red
    if (riskLevel === "At Risk") return [255, 165, 0]; // Orange
    if (riskLevel === "Moderate Risk") return [255, 255, 0]; // Yellow
    return [0, 128, 0]; // Green (Low Risk)
}

// Placeholders for detailed content (you should customize this content)
function getRiskSubtitle(parameter, riskLevel) {
    // Placeholders based on general health areas
    const subtitles = {
        "Lifestyle & Habits": { "Low Risk": ["Great job!", "Maintain your excellent activity and diet habits."], "Moderate Risk": ["Focus on Diet", "Increase fruit/veg and reduce processed food intake."], "At Risk": ["Urgent Change Needed", "Address tobacco/alcohol use and increase daily exercise."], "High Risk": ["Critical Risk", "Immediate intervention needed across all habits."] },
        "Physical Health & NCD Risk": { "Low Risk": ["Excellent Screening", "Low risk for major NCDs. Maintain vigilance."], "Moderate Risk": ["Monitor Vitals", "Pay attention to any symptoms (thirst, pain) and schedule a checkup."], "At Risk": ["Screening Required", "High-risk factors present. Consult a doctor for targeted NCD screening (CVD, Diabetes)."], "High Risk": ["Immediate Medical Care", "Known high BP/Sugar or multiple severe symptoms require urgent specialist consultation."] },
        "Mental & Emotional Wellbeing": { "Low Risk": ["Excellent Balance", "You cope well with stress. Keep up relaxation techniques."], "Moderate Risk": ["Need for Breaks", "Stress and balance are slipping. Prioritize time for relaxation and coping strategies."], "At Risk": ["Professional Support", "Persistent sadness or frequent anxiety is present. Seek professional counseling."], "High Risk": ["Crisis Point", "High distress/burnout indicated. Urgent mental health support is critical."] },
        "Preventive Health & Awareness": { "Low Risk": ["Proactive Care", "You are aware of your vitals and up-to-date on checkups."], "Moderate Risk": ["Annual Checkup Due", "If >1 year since last checkup, schedule one immediately. Know your numbers."], "At Risk": ["High Unawareness", "Lack of recent checkups AND unawareness of vitals. Requires urgent screening."], "High Risk": ["Mandatory Screening", "No awareness and no checkups. Requires immediate comprehensive health screening."] },
        "Sleep & Fatigue": { "Low Risk": ["Restorative Sleep", "Consistent 7-8 hours of quality sleep. This aids recovery."], "Moderate Risk": ["Improve Hygiene", "Sleep is inconsistent or tiredness is sometimes present. Reduce screen time before bed."], "At Risk": ["Chronic Fatigue", "Low average sleep and constant tiredness. Requires medical input for sleep quality."], "High Risk": ["Severe Sleep Debt", "Chronic sleep deprivation. Address underlying cause (stress/sleep disorder) immediately."] },
        "Digital & Social Wellness": { "Low Risk": ["Balanced Life", "Low screen time, strong social and offline connections."], "Moderate Risk": ["Reduce Screen Time", "Cut back on non-work screen time and ensure one offline hobby per week."], "At Risk": ["Risk of Isolation", "High screen use and poor social connections. Actively seek social engagement and outdoor time."], "High Risk": ["Digital Overload", "Severe screen addiction/social isolation. Seek help to rebalance digital and real-world life."] }
    };
    return subtitles[parameter][riskLevel] || ["No detailed subtitle available.", "Please consult the overall recommendations."];
}

function getDetailedSuggestions(parameter, riskLevel) {
    // Detailed suggestions corresponding to the new health areas
    const suggestions = {
        "Lifestyle & Habits": { 
            "Moderate Risk": ["• Aim for 3-4 days of 30-minute exercise per week.", "• Ensure 3-4 servings of fruits/vegetables daily.", "• Limit fried/processed food to once per week."], 
            "At Risk": ["• Join a fitness program to ensure 1-2 days of exercise.", "• Eliminate daily tobacco/alcohol use.", "• Replace sodas/juice with water to hit 7-8 glasses."], 
            "High Risk": ["• Seek formal counseling for substance use (if applicable).", "• Consult a dietitian for a full diet plan.", "• Start with 15 minutes of walking daily."] 
        },
        "Physical Health & NCD Risk": {
            "Moderate Risk": ["• Schedule a follow-up with your physician if you have symptoms like chest pain or thirst.", "• Track your BMI and waist circumference monthly.", "• Increase activity levels to manage weight and prevent NCDs."],
            "At Risk": ["• Immediately book NCD risk screening for BP/Sugar/Cholesterol.", "• Consult a physiotherapist for persistent joint/back pain.", "• If you have existing conditions (Diabetes/HTN), ensure strict adherence to medication."],
            "High Risk": ["• Urgent consultation with a cardiologist or endocrinologist is required.", "• Do not delay comprehensive diagnostic tests.", "• Implement all recommended lifestyle changes immediately to stabilize vitals."]
        },
        "Mental & Emotional Wellbeing": {
            "Moderate Risk": ["• Dedicate 10 minutes daily to mindfulness or deep breathing.", "• Set clear 'off-limits' times for work communication.", "• Engage in a hobby or activity you enjoy weekly for relaxation."],
            "At Risk": ["• Contact NIZCARE for a mental wellness workshop.", "• Start a journal to track triggers for stress and sadness.", "• Schedule an initial consultation with a mental health professional."],
            "High Risk": ["• Urgent referral for counseling/therapy is mandatory.", "• Communicate burnout/distress to HR/management for supportive changes.", "• Focus solely on self-care and recovery until stable."]
        },
        "Preventive Health & Awareness": {
            "Moderate Risk": ["• Book a full-body checkup within the next 3 months.", "• Keep a log of your BP, sugar, and cholesterol numbers.", "• Research recommended screenings (e.g., age-appropriate cancer screenings)."],
            "At Risk": ["• Schedule your full health checkup immediately.", "• Take a basic health education session to understand key vital signs.", "• Ensure childhood vaccinations are up-to-date."],
            "High Risk": ["• A comprehensive diagnostic panel is mandatory immediately.", "• Work with a health coach to track and interpret your vitals.", "• Do not postpone any preventive screenings."]
        },
        "Sleep & Fatigue": {
            "Moderate Risk": ["• Ensure bedroom is cool, dark, and quiet.", "• Avoid caffeine and heavy meals close to bedtime.", "• Reduce screen time before bed to one hour."],
            "At Risk": ["• Establish a consistent sleep schedule (even on weekends).", "• If daytime tiredness persists, consult a physician to rule out sleep disorders.", "• Practice relaxation techniques before sleep."],
            "High Risk": ["• Seek specialist consultation for chronic sleep issues (insomnia, apnea).", "• Eliminate all screens and work-related materials from the bedroom.", "• Use the bedroom only for sleep (and intimacy)."]
        },
        "Digital & Social Wellness": {
            "Moderate Risk": ["• Aim to spend less than 3 hours on non-work screens daily.", "• Schedule at least one hour of offline/outdoor leisure weekly.", "• Intentionally call or meet a friend/family member weekly."],
            "At Risk": ["• Designate one evening per week as a 'no-screens' night.", "• Sign up for a group class or club to improve social connections.", "• Take short walks outdoors during the workday."],
            "High Risk": ["• Implement a strict digital detox plan.", "• Seek support to address social anxiety or isolation.", "• Prioritize face-to-face interactions over digital communication."]
        }
    };
    
    const levelKey = riskLevel === "Low Risk" ? "Moderate Risk" : riskLevel;

    return suggestions[parameter][levelKey] || ["No specific suggestions available."];
}


// Function to Get Risk Color (No change needed)
function getRiskColor1(riskLevel) {
    return [0, 0, 0];
}

function generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Overall Health Summary", 105, 50, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Only show Risk Status to the user, not the score.
    let summaryData = [
        ["Risk Status", riskStatus],
    ];

    doc.autoTable({
        startY: 60,
        head: [["Metric", "Value"]],
        body: summaryData,
        theme: "grid",
        styles: { fontSize: 10, halign: "center" },
    });

    let y = doc.autoTable.previous.finalY + 10;

    doc.setFont("helvetica", "bold");
    doc.text("Overall Health Suggestions:", 14, y);
    y += 6;

    doc.setFont("helvetica", "normal");
    overallHealthSuggestion.forEach((suggestion) => {
        doc.text(`• ${suggestion}`, 14, y);
        y += 6;
    });

    return y + 10;
}

function generateHealthRiskTable(doc, y, healthAreas) {
    doc.setFont("helvetica", "bold");
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
        styles: { fontSize: 10, halign: "center" },
    });

    return doc.autoTable.previous.finalY + 10;
}

function generateRiskDetails(doc, y, healthAreas) {
    Object.keys(healthAreas).forEach((key) => {
        if (y > doc.internal.pageSize.height - 60) {
            doc.addPage();
            y = 20;
        }

        let riskLevel = healthAreas[key];
        let riskScore = calculateParameterScore(key);
        let subtitleText = getRiskSubtitle(key, riskLevel);
        let riskColor = getRiskColor(riskLevel);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(key, 14, y);
        y += 6;

        if (y > doc.internal.pageSize.height - 50) {
            doc.addPage();
            y = 20;
        }
        
        // Only showing Risk Level to the user in the detailed table
        doc.autoTable({
            startY: y,
            head: [["Metric", "Value"]],
            body: [
                ["Risk Level", { content: riskLevel, styles: { textColor: riskColor } }]
            ],
            theme: "grid",
            styles: { fontSize: 10, halign: "center" },
        });

        y = doc.autoTable.previous.finalY + 10;

        if (y > doc.internal.pageSize.height - 50) {
            doc.addPage();
            y = 20;
        }
        doc.setFont("helvetica", "bold");
        doc.text(subtitleText[0], 14, y);
        y += 6;
        doc.setFont("helvetica", "normal");

        let lines = doc.splitTextToSize(subtitleText.slice(1).join("\n"), 180);
        doc.text(lines, 14, y);
        y += lines.length * 6 + 10;

        if (riskLevel !== "Low Risk") { // Changed from Excellent Health to Low Risk
            if (y > doc.internal.pageSize.height - 50) {
                doc.addPage();
                y = 20;
            }
            let suggestions = getDetailedSuggestions(key, riskLevel);
            doc.setFont("helvetica", "bold");
            doc.text("How to Improve:", 14, y);
            y += 6;
            doc.setFont("helvetica", "normal");

            let suggestionLines = doc.splitTextToSize(suggestions.join("\n"), 180);
            doc.text(suggestionLines, 14, y);
            y += suggestionLines.length * 6 + 10;
        }

        if (y < doc.internal.pageSize.height - 20) {
            doc.setDrawColor(150, 150, 150);
            doc.setLineWidth(0.5);
            doc.line(10, y, 200, y);
            y += 10;
        }

        if (y > doc.internal.pageSize.height - 50) {
            doc.addPage();
            y = 20;
        }
    });

    return y;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    if (typeof doc.autoTable !== "function") {
        alert("Error: jsPDF AutoTable plugin is not loaded.");
        return;
    }

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const { score, riskStatus } = calculateHealthScore();
    const overallHealthSuggestion = getOverallHealthSuggestion(score, riskStatus);
    const healthAreas = getHealthAreas();

    const logo = new Image();
    logo.src = "logo.png";

    // Define the function that actually generates the PDF content
    const generateContent = function() {
        doc.addImage(logo, "PNG", 10, 10, 65, 15);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(`Date: ${currentDate}`, 200, 15, { align: "right" });
        doc.text(`Time: ${currentTime}`, 200, 22, { align: "right" });

        doc.setFontSize(16);
        doc.text("NIZCARE HEALTH RISK ASSESSMENT", 105, 35, { align: "center" });

        let y = 45;
        // Fix: Passing score to generateSummaryTable so it's available for debugging/future use, but it's not displayed
        y = generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion, y); 
        y = generateHealthRiskTable(doc, y, healthAreas);

        doc.addPage();
        y = 20;
        y = generateRiskDetails(doc, y, healthAreas);

        doc.save("NIZCARE_Health_Scorecard.pdf");
    };

    // Set the onload handler to generate the content
    logo.onload = generateContent;

    // FIX: Prevent double PDF generation if image is already cached
    if (logo.complete) {
        logo.onload = null; // Remove the handler
        generateContent(); // Call directly
    }
}