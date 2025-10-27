// --- 1. NEW QUESTION SET (SECTIONS A-G) ---
// Question structure and points strictly follow the "New Ques in HRA" document.
const sections = [
    {
        id: "modal1",
        title: "Section A: Basic Profile (Non-scoring)",
        fields: [
            { id: "age", label: "Age", type: "number" },
            { id: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
            { id: "occupationType", label: "Occupation type", type: "select", options: ["Desk job", "Field job", "Shift work"] },
            { id: "workLocation", label: "Work location", type: "text" },
            { id: "familyHistoryNCDs", label: "Family history of major NCDs (CVD, Diabetes, Cancer, CKD, Hypertension)", type: "text" }
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
            { id: "water", label: "Water intake/day", type: "select", options: ["<4 glasses (0)", "4–6 (2)", "7–8 (3)", "8+ (5)"] }
        ]
    },
    {
        id: "modal3",
        title: "Section C: Physical Health & NCD Risk (30 points)",
        fields: [
            // CVD
            { id: "bpDiagnosis", label: "High BP diagnosed/known?", type: "select", options: ["Yes (0)", "No (5)"] },
            { id: "chestPain", label: "Chest pain/palpitations?", type: "select", options: ["Yes (0)", "Sometimes (2)", "No (5)"] },
            { id: "cvdFamilyHistory", label: "Family history of CVD?", type: "select", options: ["Yes (0)", "No (3)"] },
            // Diabetes
            { id: "sugarDiagnosis", label: "High blood sugar diagnosed?", type: "select", options: ["Yes (0)", "No (5)"] },
            { id: "excessiveThirst", label: "Excessive thirst/frequent urination/unexplained weight change?", type: "select", options: ["Yes (0)", "Sometimes (2)", "No (5)"] },
            { id: "diabetesFamilyHistory", label: "Family history of diabetes?", type: "select", options: ["Yes (0)", "No (3)"] },
            // Obesity & Metabolic Syndrome
            { id: "waistCircumference", label: "Waist circumference >90cm (men)/>80cm (women)?", type: "select", options: ["Yes (0)", "No (5)"] },
            { id: "bmiOver25", label: "BMI >25 kg/m²?", type: "select", options: ["Yes (0)", "No (5)"] },
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
            { id: "offlineLeisure", label: "Outdoor/offline leisure", type: "select", options: ["Rarely (0)", "Once/week (5)", "Multiple times/week (10)"] },
            { id: "socialConnections", label: "Social connections", type: "select", options: ["Rarely (0)", "Occasionally (5)", "Regularly (10)"] },
            { id: "digitalWLB", label: "Work-life balance (digital overload)", type: "select", options: ["Poor (0)", "Average (5)", "Well (10)"] },
            // Section E
            { id: "lastCheckup", label: "Last full-body checkup", type: "select", options: ["Never (0)", ">2 yrs ago (5)", "Within 1 yr (10)", "Within 6 months (15)"] },
            { id: "awarenessVitals", label: "Awareness of BP, sugar, cholesterol, BMI", type: "select", options: ["No (0)", "Partially (5)", "Yes (10)"] },
            { id: "vaccinations", label: "Vaccinations/Preventive screenings", type: "select", options: ["No (0)", "Partially (5)", "Yes (10)"] }
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

// Helper function to extract the score number from the option string
function extractScore(value) {
    if (!value) return 0;
    // This regex looks for a number inside parentheses, like "(15)"
    const match = value.match(/\(([^)]+)\)/);
    return match ? parseInt(match[1]) : 0;
}


function calculateHealthScore() {
    // Max Raw Scores based on document calculation (Total max raw score: 250)
    const MAX_RAW_B = 50; 
    const MAX_RAW_C = 65; 
    const MAX_RAW_D = 45; 
    const MAX_RAW_E = 35; 
    const MAX_RAW_F = 25; 
    const MAX_RAW_G = 40; 

    // 2.2. Calculate Raw Scores
    // B. Lifestyle & Habits (20%)
    const rawScoreB = extractScore(formData.exercise) +
                      extractScore(formData.fruitsVeg) +
                      extractScore(formData.processedFood) +
                      extractScore(formData.tobaccoAlcohol) +
                      extractScore(formData.water);

    // C. Physical Health & NCD Risk (30%)
    const rawScoreC = extractScore(formData.bpDiagnosis) + extractScore(formData.chestPain) + extractScore(formData.cvdFamilyHistory) +
                      extractScore(formData.sugarDiagnosis) + extractScore(formData.excessiveThirst) + extractScore(formData.diabetesFamilyHistory) +
                      extractScore(formData.waistCircumference) + extractScore(formData.bmiOver25) +
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

    // G. Digital & Social Wellness (15%)
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

    // 2.4. Determine Risk Status based on document ranges
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
    // Health areas based on document sections B, C, D, E, F, G
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

// Parameter Score Logic (Max 10 points per area, scaled from Max Raw)
function calculateParameterScore(parameter) {
    let rawScore = 0;
    let maxRaw = 1;

    switch (parameter) {
        case "Lifestyle & Habits": // Section B
            rawScore = extractScore(formData.exercise) + extractScore(formData.fruitsVeg) + extractScore(formData.processedFood) + extractScore(formData.tobaccoAlcohol) + extractScore(formData.water);
            maxRaw = 50;
            break;

        case "Physical Health & NCD Risk": // Section C
            rawScore = extractScore(formData.bpDiagnosis) + extractScore(formData.chestPain) + extractScore(formData.cvdFamilyHistory) +
                       extractScore(formData.sugarDiagnosis) + extractScore(formData.excessiveThirst) + extractScore(formData.diabetesFamilyHistory) +
                       extractScore(formData.waistCircumference) + extractScore(formData.bmiOver25) +
                       extractScore(formData.asthmaCOPD) + extractScore(formData.smokeExposure) +
                       extractScore(formData.cancerAwareness) + extractScore(formData.cancerFamilyHistory) +
                       extractScore(formData.swellingKidney) + extractScore(formData.diabetesHypertension) +
                       extractScore(formData.jointBackPain);
            maxRaw = 65;
            break;

        case "Mental & Emotional Wellbeing": // Section D
            rawScore = extractScore(formData.stressedAnxious) + extractScore(formData.sadnessBurnout) + extractScore(formData.workLifeBalance) + extractScore(formData.relaxationCoping);
            maxRaw = 45;
            break;

        case "Preventive Health & Awareness": // Section E
            rawScore = extractScore(formData.lastCheckup) + extractScore(formData.awarenessVitals) + extractScore(formData.vaccinations);
            maxRaw = 35;
            break;

        case "Sleep & Fatigue": // Section F
            rawScore = extractScore(formData.avgSleep) + extractScore(formData.daytimeTiredness) + extractScore(formData.screenTimeBed);
            maxRaw = 25;
            break;
            
        case "Digital & Social Wellness": // Section G
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

// --- Generic Functions ---

// FIXED: generateField function to remove score brackets from display
function generateField(field) {
    if (field.type === "select" && field.options) {
        const optionsHTML = field.options.map(option => {
            // Remove the score in brackets, e.g., "5+ days (15)" -> "5+ days"
            const cleanText = option.replace(/\s*\([^)]+\)$/, ''); 
            // The value attribute still holds the original string with the score for scoring logic
            return `<option value="${option}">${cleanText}</option>`;
        }).join("");

        return `
            <label>${field.label}</label>
            <select id="${field.id}" class="form-select mb-2" onchange="handleFieldChange('${field.id}', this.value)">
                <option value="">Select an option</option>
                ${optionsHTML}
            </select>
        `;
    } else {
        return `
            <label>${field.label}</label>
            <input type="${field.type}" id="${field.id}" class="form-control mb-2">
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
    let inputs = document.querySelectorAll(`#${modalId} input, #${modalId} select`);
    let allFilled = true;
    inputs.forEach(input => {
        if (input.type === "select-one" && input.value.trim() === "") {
            input.classList.add("is-invalid");
            allFilled = false;
        }
        else if (input.type !== "select-one" && !input.value.trim()) {
            input.classList.add("is-invalid");
            allFilled = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });
    return allFilled;
}

function handleFieldChange(id, value) {
    formData[id] = value.trim();
}

function saveData(modalId) {
    let inputs = document.querySelectorAll(`#${modalId} input, #${modalId} select`);
    inputs.forEach(input => {
        formData[input.id] = input.value.trim();
    });
}

// PDF Helper Functions

function getRiskColor(riskLevel) {
    if (riskLevel === "High Risk") return [255, 0, 0]; // Red
    if (riskLevel === "At Risk") return [255, 128, 0]; // Orange
    if (riskLevel === "Moderate Risk") return [255, 215, 0]; // Yellow
    return [0, 255, 0]; // Green (Low Risk)
}

function getRiskColor1(riskLevel) {
    return [0, 0, 0];
}

// Placeholders for detailed content 
function getRiskSubtitle(parameter, riskLevel) {
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
    // FIX: Ensure all four risk levels are explicitly defined to prevent 'Cannot read properties of undefined' TypeError
    const suggestions = {
        "Lifestyle & Habits": { 
            "Low Risk": ["• Maintain your current excellent activity and dietary habits.", "• Continue to limit or avoid tobacco and alcohol.", "• Keep drinking 8+ glasses of water daily."], 
            "Moderate Risk": ["• Aim for 3-4 days of 30-minute exercise per week.", "• Ensure 3-4 servings of fruits/vegetables daily.", "• Limit fried/processed food to once per week."], 
            "At Risk": ["• Start a walking routine, 15 minutes per day.", "• Eliminate all sugary drinks and fried snacks.", "• Seek support for reducing or quitting tobacco/alcohol use."], 
            "High Risk": ["• Consult a health coach for a full lifestyle overhaul.", "• Enroll in a tobacco cessation program (if applicable).", "• Prioritize water intake (8+ glasses) and balanced meals immediately."] 
        },
        "Physical Health & NCD Risk": {
            "Low Risk": ["• Maintain annual checkups and track key health numbers (BP, BMI, Sugar).", "• Continue physical activity to support joint and muscle health.", "• Report any persistent or unusual symptoms promptly."],
            "Moderate Risk": ["• Schedule a follow-up with your physician if you have symptoms like chest pain or thirst.", "• Track your BMI and waist circumference monthly.", "• Increase activity levels to manage weight and prevent NCDs."],
            "At Risk": ["• Immediately book NCD risk screening for BP/Sugar/Cholesterol.", "• Consult a physiotherapist for persistent joint/back pain.", "• If you have existing conditions (Diabetes/HTN), ensure strict adherence to medication."],
            "High Risk": ["• Urgent consultation with a cardiologist or endocrinologist is required.", "• Do not delay comprehensive diagnostic tests.", "• Implement all recommended lifestyle changes immediately to stabilize vitals."]
        },
        "Mental & Emotional Wellbeing": {
            "Low Risk": ["• Continue using your preferred relaxation and stress management techniques.", "• Ensure a healthy separation between work and personal life.", "• Stay connected with your social support network."],
            "Moderate Risk": ["• Dedicate 10 minutes daily to mindfulness or deep breathing.", "• Set clear 'off-limits' times for work communication.", "• Engage in a hobby or activity you enjoy weekly for relaxation."],
            "At Risk": ["• Contact NIZCARE for a mental wellness workshop.", "• Start a journal to track triggers for stress and sadness.", "• Schedule an initial consultation with a mental health professional."],
            "High Risk": ["• Urgent referral for counseling/therapy is mandatory.", "• Communicate burnout/distress to HR/management for supportive changes.", "• Focus solely on self-care and recovery until stable."]
        },
        "Preventive Health & Awareness": {
            "Low Risk": ["• Ensure you always know your latest BP, Sugar, and BMI readings.", "• Stay up-to-date on all recommended vaccinations and screenings.", "• Continue being proactive in seeking health information."],
            "Moderate Risk": ["• Book a full-body checkup within the next 3 months.", "• Keep a log of your BP, sugar, and cholesterol numbers.", "• Research common lifestyle diseases and their prevention."],
            "At Risk": ["• Schedule a full preventive health checkup immediately.", "• Take a basic health education session to understand key vital signs.", "• Ensure childhood vaccinations are up-to-date."],
            "High Risk": ["• A comprehensive diagnostic panel is mandatory immediately.", "• Work with a health coach to track and interpret your vitals.", "• Do not postpone any preventive screenings."]
        },
        "Sleep & Fatigue": {
            "Low Risk": ["• Continue to maintain a consistent sleep schedule (7-8 hours).", "• Avoid screen usage close to bedtime to maintain sleep quality.", "• Use your bedroom only for sleep and rest."],
            "Moderate Risk": ["• Ensure bedroom is cool, dark, and quiet.", "• Avoid caffeine and heavy meals close to bedtime.", "• Reduce screen time before bed to one hour."],
            "At Risk": ["• Establish a consistent sleep schedule (even on weekends).", "• If daytime tiredness persists, consult a physician to rule out sleep disorders.", "• Practice relaxation techniques before sleep."],
            "High Risk": ["• Seek consultation for chronic insomnia or persistent fatigue.", "• Eliminate all screens and work-related materials from the bedroom.", "• Address underlying stress or anxiety that is disrupting sleep."]
        },
        "Digital & Social Wellness": {
            "Low Risk": ["• Continue balancing screen time with offline leisure and maintain strong social bonds.", "• Avoid using digital devices for personal tasks during work hours.", "• Keep a regular schedule for offline social activities."],
            "Moderate Risk": ["• Aim to spend less than 3 hours on non-work screens daily.", "• Schedule at least one hour of offline/outdoor leisure weekly.", "• Intentionally call or meet a friend/family member weekly."],
            "At Risk": ["• Designate one evening per week as a 'no-screens' night.", "• Sign up for a group class or club to improve social connections.", "• Take short walks outdoors during the workday."],
            "High Risk": ["• Implement a strict digital detox plan.", "• Seek support to address social anxiety or isolation.", "• Prioritize face-to-face interactions over digital communication."]
        }
    };
    
    return suggestions[parameter][riskLevel] || ["No specific suggestions available."];
}


// --- 5. PDF GENERATION FUNCTIONS (Aesthetic Improvements) ---

function generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion) {
    const ACCENT_COLOR = [44, 62, 80]; // Dark blue/gray for professional look

    doc.setFont("calibri", "bold");
    doc.setFontSize(14);
    doc.text("Overall Health Summary", 105, 50, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("calibri", "normal");

    let summaryData = [
        ["Overall Health Score", `${score}/100`],
        ["Risk Status", riskStatus],
    ];

    doc.autoTable({
        startY: 60,
        head: [["Metric", "Value"]],
        body: summaryData,
        theme: "grid",
        headStyles: { fillColor: ACCENT_COLOR, textColor: 255, fontStyle: 'bold' },
        styles: { fontSize: 12, halign: "center" },
        alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    let y = doc.autoTable.previous.finalY + 10;

    doc.setFont("calibri", "bold");
    doc.setFontSize(14);
    doc.text("Overall Health Suggestions:", 14, y);
    y += 6;

    doc.setFont("calibri", "normal");
    doc.setFontSize(12);
    overallHealthSuggestion.forEach((suggestion) => {
        doc.text(`• ${suggestion}`, 14, y);
        y += 6;
    });

    return y + 10;
}

function generateHealthRiskTable(doc, y, healthAreas) {
    const ACCENT_COLOR = [44, 62, 80];

    doc.setFont("calibri", "bold");
    doc.setFontSize(14);
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
        styles: { fontSize: 12, halign: "center" },
        alternateRowStyles: { fillColor: [240, 240, 240] }
    });

    return doc.autoTable.previous.finalY + 10;
}

function generateRiskDetails(doc, y, healthAreas) {
    const ACCENT_COLOR = [44, 62, 80];

    Object.keys(healthAreas).forEach((key) => {
        if (y > doc.internal.pageSize.height - 60) {
            doc.addPage();
            y = 20;
        }

        let riskLevel = healthAreas[key];
        let riskScore = calculateParameterScore(key);
        let subtitleText = getRiskSubtitle(key, riskLevel);
        let riskColor = getRiskColor(riskLevel);

        doc.setFont("calibri", "bold");
        doc.setFontSize(12);
        doc.text(key, 14, y);
        y += 6;

        if (y > doc.internal.pageSize.height - 50) {
            doc.addPage();
            y = 20;
        }
        
        doc.autoTable({
            startY: y,
            head: [["Metric", "Value"]],
            body: [
                ["Risk Score", `${riskScore}/10`],
                ["Risk Level", { content: riskLevel, styles: { textColor: riskColor, fontStyle: 'bold' } }] // Added bold for emphasis
            ],
            theme: "grid",
            headStyles: { fillColor: ACCENT_COLOR, textColor: 255, fontStyle: 'bold' },
            styles: { fontSize: 12, halign: "center" },
            alternateRowStyles: { fillColor: [240, 240, 240] }
        });

        y = doc.autoTable.previous.finalY + 10;

        if (y > doc.internal.pageSize.height - 50) {
            doc.addPage();
            y = 20;
        }
        // Bold title for subtitle/meaning section
        doc.setFont("calibri", "bold");
        doc.text(subtitleText[0], 14, y);
        y += 6;
        doc.setFont("calibri", "normal");

        let lines = doc.splitTextToSize(subtitleText.slice(1).join("\n"), 180);
        doc.text(lines, 14, y);
        y += lines.length * 6 + 10;

        if (riskLevel !== "Low Risk") { // Changed check to "Low Risk" from "Excellent Health"
            if (y > doc.internal.pageSize.height - 50) {
                doc.addPage();
                y = 20;
            }
            let suggestions = getDetailedSuggestions(key, riskLevel);
            doc.setFont("calibri", "bold");
            doc.text("How to Improve:", 14, y);
            y += 6;
            doc.setFont("calibri", "normal");

            let suggestionLines = doc.splitTextToSize(suggestions.join("\n"), 180);
            doc.text(suggestionLines, 14, y);
            y += suggestionLines.length * 6 + 10;
        }

        // Horizontal line separator
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

    // Ensure final modal data is saved before calculation
    saveData("modal5"); 

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const { score, riskStatus } = calculateHealthScore();
    const overallHealthSuggestion = getOverallHealthSuggestion(score, riskStatus);
    const healthAreas = getHealthAreas();

    const logo = new Image();
    // Assuming your logo is named 'logo.png'
    logo.src = "logo.png";

    // This function contains ALL the PDF drawing logic
    const generateContent = function () {
        // Set document header font and colors
        doc.setFont("calibri", "bold");
        doc.setTextColor(44, 62, 80); // Dark Blue/Gray
        doc.setFontSize(16);
        doc.text("NIZCARE HEALTH RISK ASSESSMENT", 105, 35, { align: "center" });

        // Add Logo (Assuming it's ready)
        doc.addImage(logo, "PNG", 10, 10, 65, 15);

        // Date/Time
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Date: ${currentDate}`, 200, 15, { align: "right" });
        doc.text(`Time: ${currentTime}`, 200, 22, { align: "right" });

        let y = 45;
        // Reset text color to primary for body content
        doc.setTextColor(44, 62, 80); 

        y = generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion, y);
        y = generateHealthRiskTable(doc, y, healthAreas);

        doc.addPage();
        y = 20;
        y = generateRiskDetails(doc, y, healthAreas);

        doc.save("NIZCARE_Health_Scorecard.pdf");
    };

    // FIX: Conditional execution to prevent double PDF generation when image is cached.
    // We check if the image is already complete (cached).
    if (logo.complete) {
        generateContent(); // Execute immediately if complete
    } else {
        logo.onload = generateContent; // Wait for the load event otherwise
    }
}