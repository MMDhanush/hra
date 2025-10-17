// --- 1. NEW QUESTION SET (SECTIONS A-F) ---
// Note: Values are set to the score points (0, 1, 2, 3) for direct calculation.
const sections = [
    {
        id: "modal1",
        title: "Section 1: Basic Profile (Non-Scoring)",
        fields: [
            { id: "ageGroup", label: "Age Group", type: "select", options: ["<25", "25–34", "35–44", "45–54", "55+"] }, // [cite: 82, 83]
            { id: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] }, // [cite: 84]
            { id: "occupationType", label: "Occupation Type", type: "select", options: ["Desk job", "Field job", "Shift work"] }, // [cite: 85]
            { id: "workLocation", label: "Work Location (City, State)", type: "text" }, // [cite: 86]
            { id: "maritalStatus", label: "Marital Status", type: "text" }, // [cite: 87]
            { id: "existingConditions", label: "Any existing diagnosed conditions?", type: "text" } // [cite: 88]
        ]
    },
    {
        id: "modal2",
        title: "Section 2: Lifestyle & Habits (25% Weight)",
        fields: [
            { id: "exerciseFrequency", label: "How often do you exercise for at least 30 minutes?", type: "select", options: ["Never", "1–2 days", "3–4 days", "5+ days "] }, // [cite: 90, 91]
            { id: "fruitsVeg", label: "How often do you eat fruits and vegetables daily?", type: "select", options: ["Rarely", "1 serving/day", "2 servings/day", "3+ servings/day"] }, // [cite: 92, 93]
            { id: "processedFood", label: "How often do you consume fried or processed food?", type: "select", options: ["Daily", "3–4 times/week", "Occasionally", "Rarely"] }, // [cite: 94, 95]
            { id: "smoking", label: "Do you smoke or use tobacco?", type: "select", options: ["Yes", "Occasionally", "No"] }, // 
            { id: "alcohol", label: "Do you consume alcohol?", type: "select", options: ["Regularly", "Occasionally", "Never"] }, // [cite: 98, 99]
            { id: "water", label: "How many glasses of water do you drink per day?", type: "select", options: ["<4", "4–6", "7–8", "8+"] } // [cite: 100, 101]
        ]
    },
    {
        id: "modal3",
        title: "Section 3: Physical Health & Chronic Risk (30% Weight)",
        fields: [
            { id: "bpSugar", label: "High blood pressure or sugar levels diagnosis?", type: "select", options: ["Yes", "No"] }, // [cite: 103]
            { id: "tired", label: "Do you often feel tired even after normal rest?", type: "select", options: ["Yes", "No"] }, // [cite: 104]
            { id: "waistCircumference", label: "Is your waist circumference above healthy limit (90cm/80cm)?", type: "select", options: ["Yes", "No"] }, // [cite: 105]
            { id: "discomfort", label: "Do you experience frequent headaches, dizziness, or breathlessness?", type: "select", options: ["Yes", "Sometimes", "No"] }, // [cite: 106]
            { id: "doctorVisits", label: "How often do you visit a doctor for general checkups?", type: "select", options: ["Rarely", "Once a year", "Twice or more per year"] } // [cite: 107, 108]
        ]
    },
    {
        id: "modal4",
        title: "Section 4: Mental & Emotional Wellbeing (25% Weight)",
        fields: [
            { id: "stressAnxious", label: "How often do you feel stressed or anxious?", type: "select", options: ["Often", "Sometimes", "Rarely", "Never"] }, // [cite: 110, 111]
            { id: "workLifeBalance", label: "Can you manage work-life balance effectively?", type: "select", options: ["Never (0)", "Sometimes", "Mostly", "Always"] }, // [cite: 112, 113]
            { id: "concentrateMotivated", label: "Do you find it difficult to concentrate or stay motivated?", type: "select", options: ["Often", "Sometimes", "Rarely", "Never"] }, // [cite: 114, 115]
            { id: "sadnessBurnout", label: "Experienced persistent sadness, loss of interest, or burnout recently?", type: "select", options: ["Yes", "Occasionally", "No"] }, // [cite: 116, 117]
            { id: "relaxationBreaks", label: "How often do you take breaks or time for relaxation activities?", type: "select", options: ["Rarely", "Weekly", "Several times/week", "Daily"] } // [cite: 118, 119]
        ]
    },
    {
        id: "modal5",
        title: "Section 5 & 6: Sleep & Preventive Health (20% Weight)",
        fields: [
            // Section F: Sleep & Fatigue (10%) [cite: 120]
            { id: "sleepHours", label: "How many hours do you sleep daily?", type: "select", options: ["<5 hrs", "5–6 hrs", "7–8 hrs", ">8 hrs"] }, // [cite: 121, 122]
            { id: "refreshed", label: "How often do you wake up feeling refreshed?", type: "select", options: ["Rarely", "Sometimes", "Most days", "Always"] }, // [cite: 123, 124]
            { id: "screenTimeBed", label: "Do you use screens within 30 minutes before sleep?", type: "select", options: ["Always", "Sometimes", "Rarely", "Never"] }, // [cite: 125, 126]

            // Section E: Preventive Health Awareness (10%) [cite: 127]
            { id: "checkup12Months", label: "Have you done a health checkup in the last 12 months?", type: "select", options: ["No", "Yes"] }, // [cite: 128]
            { id: "awareVitals", label: "Are you aware of your BMI, BP, or sugar levels?", type: "select", options: ["No", "Yes"] }, // [cite: 129]
            { id: "interestTips", label: "Would you like to receive preventive care tips or consultations?", type: "select", options: ["No", "Yes"] } // [cite: 130]
        ],
        final: true
    }
];

let formData = {};
const modalContainer = document.getElementById("modals-container");

// The modal setup loop remains the same, but it now uses the new 'sections' array
sections.forEach((section, index) => {
    let modalHTML = `
        <div id="${section.id}" class="modal fade" tabindex="-1" inert>
            <div class="modal-dialog">
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

// Helper function to extract the score number from the option string
function extractScore(value) {
    if (!value) return 0;
    const match = value.match(/\(([^)]+)\)/);
    return match ? parseInt(match[1]) : 0;
}

// Generate form fields dynamically (No change needed)
function generateField(field) {
    if (field.type === "select") {
        return `
            <label>${field.label}</label>
            <select id="${field.id}" class="form-select mb-2" onchange="handleFieldChange('${field.id}', this.value)">
                <option value="">Select an option</option>
                ${field.options.map(option => `<option value="${option}">${option}</option>`).join("")}
            </select>
            ${field.id === "smoking" ? '' : ''}
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

// Field Change Handler: Simplified, removing conditional smoking logic
function handleFieldChange(id, value) {
    // No action needed for the new HRA.docx structure as smoking is not conditional.
}

// Save form data (No change needed)
function saveData(modalId) {
    let inputs = document.querySelectorAll(`#${modalId} input, #${modalId} select`);
    inputs.forEach(input => {
        formData[input.id] = input.value.trim();
    });
    // Removed specific smokingDetail logic as it's not in the new HRA.docx
}

// --- 2. NEW WEIGHTED SCORING LOGIC (100 POINTS TOTAL) ---
function calculateHealthScore() {
    // 2.1. Define Max Raw Scores for Weight Scaling
    const MAX_RAW_B = 18; // 6 questions * 3 points max [cite: 91, 93, 95, 97, 99, 101]
    const MAX_RAW_C = 15; // 5 questions * 3 points max [cite: 103, 104, 105, 106, 108]
    const MAX_RAW_D = 15; // 5 questions * 3 points max [cite: 111, 113, 115, 117, 119]
    const MAX_RAW_E = 9;  // 3 questions * 3 points max [cite: 128, 129, 130]
    const MAX_RAW_F = 9;  // 3 questions * 3 points max [cite: 122, 124, 126]
    
    // 2.2. Calculate Raw Scores from Form Data (Section A is non-scoring)
    
    // B. Lifestyle & Habits (25%)
    const rawScoreB = extractScore(formData.exerciseFrequency) +
                      extractScore(formData.fruitsVeg) +
                      extractScore(formData.processedFood) +
                      extractScore(formData.smoking) +
                      extractScore(formData.alcohol) +
                      extractScore(formData.water);

    // C. Physical Health & Chronic Risk (30%)
    const rawScoreC = extractScore(formData.bpSugar) +
                      extractScore(formData.tired) +
                      extractScore(formData.waistCircumference) +
                      extractScore(formData.discomfort) +
                      extractScore(formData.doctorVisits);

    // D. Mental & Emotional Wellbeing (25%)
    const rawScoreD = extractScore(formData.stressAnxious) +
                      extractScore(formData.workLifeBalance) +
                      extractScore(formData.concentrateMotivated) +
                      extractScore(formData.sadnessBurnout) +
                      extractScore(formData.relaxationBreaks);

    // E. Preventive Health & Awareness (10%)
    const rawScoreE = extractScore(formData.checkup12Months) +
                      extractScore(formData.awareVitals) +
                      extractScore(formData.interestTips);

    // F. Sleep & Fatigue (10%)
    const rawScoreF = extractScore(formData.sleepHours) +
                      extractScore(formData.refreshed) +
                      extractScore(formData.screenTimeBed);

    // 2.3. Scale Raw Scores to 100-Point Total based on Weights 
    let score = (rawScoreB / MAX_RAW_B * 25) +
                (rawScoreC / MAX_RAW_C * 30) +
                (rawScoreD / MAX_RAW_D * 25) +
                (rawScoreE / MAX_RAW_E * 10) +
                (rawScoreF / MAX_RAW_F * 10);

    // Ensure score stays within 0-100 range and is an integer
    score = Math.round(Math.max(0, Math.min(score, 100)));

    // 2.4. Determine Risk Status based on new ranges 
    let riskStatus;
    if (score >= 81) {
        riskStatus = "Excellent Health"; // 81–100
    } else if (score >= 61) {
        riskStatus = "Good / Moderate Health"; // 61–80
    } else if (score >= 41) {
        riskStatus = "At Risk"; // 41–60
    } else {
        riskStatus = "High Risk"; // 0–40
    }

    return { score, riskStatus };
}

// --- 3. UPDATED RISK CATEGORY HELPERS ---

// Updated Risk Color to handle 4 categories
function getRiskColor(riskLevel) {
    if (riskLevel === "High Risk") return [255, 0, 0]; // Red
    if (riskLevel === "At Risk") return [255, 165, 0]; // Orange
    if (riskLevel === "Good / Moderate Health") return [255, 255, 0]; // Yellow
    return [0, 128, 0]; // Green (Excellent Health)
}

function getRiskColor1(riskLevel) {
    // Keeping this function dark/black as it's used for the main score table (Good/Moderate text color)
    return [0, 0, 0];
}

function getHealthAreas() {
    // New health areas based on HRA.docx sections B, C, D, E, F
    const areas = {
        "Lifestyle & Habits": "Lifestyle & Habits",
        "Physical Health & Chronic Risk": "Physical Health & Chronic Risk",
        "Mental & Emotional Wellbeing": "Mental & Emotional Wellbeing",
        "Preventive Health & Awareness": "Preventive Health & Awareness",
        "Sleep & Fatigue": "Sleep & Fatigue"
    };

    function determineRisk(parameter) {
        const paramScore = calculateParameterScore(parameter);
        // Scaling a 10-point parameter score to 4 risk levels
        if (paramScore <= 2) return "High Risk";
        if (paramScore <= 4) return "At Risk";
        if (paramScore <= 7) return "Good / Moderate Health";
        return "Excellent Health";
    }

    return {
        "Lifestyle & Habits": determineRisk(areas["Lifestyle & Habits"]),
        "Physical Health & Chronic Risk": determineRisk(areas["Physical Health & Chronic Risk"]),
        "Mental & Emotional Wellbeing": determineRisk(areas["Mental & Emotional Wellbeing"]),
        "Preventive Health & Awareness": determineRisk(areas["Preventive Health & Awareness"]),
        "Sleep & Fatigue": determineRisk(areas["Sleep & Fatigue"])
    };
}

// Updated Parameter Score Logic (Max 10 points per area)
function calculateParameterScore(parameter) {
    let rawScore = 0;
    let maxRaw = 1;

    switch (parameter) {
        // B. Lifestyle & Habits (Max Raw: 18)
        case "Lifestyle & Habits":
            rawScore = extractScore(formData.exerciseFrequency) + extractScore(formData.fruitsVeg) + extractScore(formData.processedFood) + extractScore(formData.smoking) + extractScore(formData.alcohol) + extractScore(formData.water);
            maxRaw = 18;
            break;

        // C. Physical Health & Chronic Risk (Max Raw: 15)
        case "Physical Health & Chronic Risk":
            rawScore = extractScore(formData.bpSugar) + extractScore(formData.tired) + extractScore(formData.waistCircumference) + extractScore(formData.discomfort) + extractScore(formData.doctorVisits);
            maxRaw = 15;
            break;

        // D. Mental & Emotional Wellbeing (Max Raw: 15)
        case "Mental & Emotional Wellbeing":
            rawScore = extractScore(formData.stressAnxious) + extractScore(formData.workLifeBalance) + extractScore(formData.concentrateMotivated) + extractScore(formData.sadnessBurnout) + extractScore(formData.relaxationBreaks);
            maxRaw = 15;
            break;

        // E. Preventive Health & Awareness (Max Raw: 9)
        case "Preventive Health & Awareness":
            rawScore = extractScore(formData.checkup12Months) + extractScore(formData.awareVitals) + extractScore(formData.interestTips);
            maxRaw = 9;
            break;
        
        // F. Sleep & Fatigue (Max Raw: 9)
        case "Sleep & Fatigue":
            rawScore = extractScore(formData.sleepHours) + extractScore(formData.refreshed) + extractScore(formData.screenTimeBed);
            maxRaw = 9;
            break;
    }

    // Scale parameter raw score to a 10-point score
    let score = (rawScore / maxRaw) * 10;
    
    // Ensure score doesn't go below 0
    return Math.round(Math.max(score, 0));
}

// Updated Overall Health Suggestion (Matching HRA.docx ranges )
function getOverallHealthSuggestion(score, riskStatus) {
    if (riskStatus === "Excellent Health") {
        return [
            "You’re doing great! Continue your healthy habits.",
            "Maintain regular checkups to stay on track.",
            "Your health is your greatest asset—keep prioritizing it."
        ];
    } else if (riskStatus === "Good / Moderate Health") {
        return [
            "You’re doing well but have some improvement areas.",
            "Focus on consistent physical activity and stress control.",
            "Small, consistent changes can move you into the 'Excellent' category."
        ];
    } else if (riskStatus === "At Risk") {
        return [
            "Your responses indicate potential lifestyle or stress concerns.",
            "Recommended to take preventive screening and wellness sessions.",
            "Addressing these concerns now is crucial to prevent further health deterioration."
        ];
    } else { // High Risk
        return [
            "You’re showing signs of multiple health risks.",
            "A detailed health check-up and personalized wellness plan are strongly recommended.",
            "Seek medical advice immediately to manage and mitigate these risks."
        ];
    }
}

// --- 4. TEMPORARY STUB FUNCTIONS FOR RISK DETAILS (You must customize these) ---
// Note: Since HRA.docx only provides high-level text for the overall score, 
// I am providing generic, consolidated subtitles and suggestions based on the new risk areas.
// You must refine these with NIZCARE's specific content.

function getRiskSubtitle(parameter, riskLevel) {
    const subtitles = {
        "Lifestyle & Habits": {
            "Excellent Health": ["Affirmation:", "Your habits are a foundation for great health. Keep it up!"],
            "Good / Moderate Health": ["Caution:", "Consistency is key. Focus on regular exercise and balanced eating."],
            "At Risk": ["Warning:", "Your daily habits pose a risk. Prioritize exercise, diet, and water intake."],
            "High Risk": ["Red Alert:", "Significant changes to diet, exercise, and substance use are immediately required."]
        },
        "Physical Health & Chronic Risk": {
            "Excellent Health": ["Affirmation:", "You have a low risk of chronic conditions. Maintain annual checkups."],
            "Good / Moderate Health": ["Caution:", "Monitor vital signs and be mindful of fatigue or discomfort."],
            "At Risk": ["Warning:", "Your score indicates potential chronic risk factors. Consult a physician for screening."],
            "High Risk": ["Red Alert:", "High likelihood of existing or developing chronic conditions. Urgent medical evaluation is needed."]
        },
        "Mental & Emotional Wellbeing": {
            "Excellent Health": ["Affirmation:", "You manage stress effectively and maintain a healthy mindset."],
            "Good / Moderate Health": ["Caution:", "Practice mindfulness and relaxation to prevent stress from escalating."],
            "At Risk": ["Warning:", "Stress and motivation are concerning. Seek resources to improve work-life balance and focus."],
            "High Risk": ["Red Alert:", "Severe stress or mental distress is indicated. Professional psychological support is critical."]
        },
        "Preventive Health & Awareness": {
            "Excellent Health": ["Affirmation:", "You are proactive and aware of your health metrics. Stay vigilant."],
            "Good / Moderate Health": ["Caution:", "Ensure you track key health numbers (BP, Sugar, BMI) regularly."],
            "At Risk": ["Warning:", "Lack of recent checkups or awareness puts you at risk. Book a screening this year."],
            "High Risk": ["Red Alert:", "Immediate health screening is mandatory. You are unaware of potential dangers."]
        },
        "Sleep & Fatigue": {
            "Excellent Health": ["Affirmation:", "You achieve quality, restorative sleep nightly. This boosts all-around health."],
            "Good / Moderate Health": ["Caution:", "Aim for 7-8 hours of consistent, quality rest. Reduce screen time near bedtime."],
            "At Risk": ["Warning:", "Chronic poor sleep is impacting fatigue and health. Improve sleep hygiene immediately."],
            "High Risk": ["Red Alert:", "Severe sleep deprivation is a major health risk. Address sleep patterns with professional help."]
        }
    };
    // Handles all 4 risk levels for all areas
    return subtitles[parameter][riskLevel] || ["No detailed subtitle available.", "Please consult the overall recommendations."];
}

function getDetailedSuggestions(parameter, riskLevel) {
    const suggestions = {
        "Lifestyle & Habits": {
            "Good / Moderate Health": ["• Incorporate 30 minutes of brisk activity 3 times a week.", "• Increase fruit and vegetable intake to 5 servings daily.", "• Limit alcohol to social occasions and avoid smoking."],
            "At Risk": ["• Start a walking routine, 15 minutes per day.", "• Eliminate all sugary drinks and fried snacks.", "• Seek support for reducing or quitting tobacco/alcohol use."],
            "High Risk": ["• Consult a health coach for a full lifestyle overhaul.", "• Enroll in a tobacco cessation program (if applicable).", "• Prioritize water intake (8+ glasses) and balanced meals immediately."]
        },
        "Physical Health & Chronic Risk": {
            "Good / Moderate Health": ["• Learn to check your own blood pressure.", "• Monitor energy levels and report persistent fatigue to a doctor.", "• Maintain a moderate weight to reduce strain."],
            "At Risk": ["• Get screened for diabetes and hypertension immediately.", "• Begin low-impact exercise to address discomfort.", "• Prioritize one doctor visit per year for a general checkup."],
            "High Risk": ["• Urgent appointment with a specialist (Cardiologist/Endocrinologist).", "• Follow all medical advice regarding diet and medication strictly.", "• Take immediate action to reduce waist circumference and manage symptoms."]
        },
        "Mental & Emotional Wellbeing": {
            "Good / Moderate Health": ["• Dedicate 10 minutes daily to mindfulness or breathing exercises.", "• Set clear boundaries between work and personal time.", "• Connect with your support system weekly."],
            "At Risk": ["• Seek basic counseling or peer support to discuss stress triggers.", "• Implement a digital detox one hour before sleep.", "• Develop a new, engaging hobby for relaxation."],
            "High Risk": ["• Urgent referral to a mental health professional (psychologist/counselor).", "• Request flexible work arrangements or schedule changes to ease load.", "• Prioritize self-care over all non-essential commitments."]
        },
        "Preventive Health & Awareness": {
            "Good / Moderate Health": ["• Track your BMI and BP at home regularly.", "• Research common lifestyle diseases and their prevention.", "• Book a dental and vision checkup this year."],
            "At Risk": ["• Schedule a full preventive health checkup within 3 months.", "• Understand the meaning of your key vital signs (BP, Sugar).", "• Opt-in for NIZCARE's wellness tips and consultations."],
            "High Risk": ["• Do not delay; book a comprehensive health screening immediately.", "• Meet with a doctor to discuss personalized preventive steps.", "• Educate yourself on the risks associated with being unaware of your vitals."]
        },
        "Sleep & Fatigue": {
            "Good / Moderate Health": ["• Turn off all screens 30 minutes before bed.", "• Ensure your bedroom is dark, quiet, and cool.", "• Establish a consistent sleep and wake time."],
            "At Risk": ["• Avoid caffeine and heavy meals 3 hours before sleep.", "• Use a relaxation technique (e.g., progressive muscle relaxation) to aid sleep.", "• If refreshed quality is low, consult a doctor to rule out sleep disorders."],
            "High Risk": ["• Seek consultation for chronic insomnia or persistent fatigue.", "• Eliminate screens in the bedroom entirely.", "• Address underlying stress or anxiety that is disrupting sleep."]
        }
    };
    
    // Fallback to Moderate suggestions if the specific risk level text is missing
    const levelKey = riskLevel === "Excellent Health" ? "Good / Moderate Health" : riskLevel;

    return suggestions[parameter][levelKey] || ["No specific suggestions available."];
}


// Remaining functions (generateSummaryTable, generateHealthRiskTable, generateRiskDetails, generatePDF) 
// are generic and will adapt to the new data, thus requiring minimal changes.

// Ensure all supporting PDF generation functions are included (as they were in the original file)
function generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Overall Health Summary", 105, 50, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    let summaryData = [
        ["Overall Health Score", `${score}/100`],
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
        doc.autoTable({
            startY: y,
            head: [["Metric", "Value"]],
            body: [
                ["Risk Score", `${riskScore}/10`],
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

        if (riskLevel !== "Excellent Health") {
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

    logo.onload = function () {
        doc.addImage(logo, "PNG", 10, 10, 65, 15);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.text(`Date: ${currentDate}`, 200, 15, { align: "right" });
        doc.text(`Time: ${currentTime}`, 200, 22, { align: "right" });

        doc.setFontSize(16);
        doc.text("NIZCARE HEALTH RISK ASSESSMENT", 105, 35, { align: "center" }); // Updated Title

        let y = 45;
        y = generateSummaryTable(doc, score, riskStatus, overallHealthSuggestion, y);
        y = generateHealthRiskTable(doc, y, healthAreas);

        doc.addPage();
        y = 20;
        y = generateRiskDetails(doc, y, healthAreas);

        doc.save("NIZCARE_Health_Scorecard.pdf");
    };

    if (logo.complete) {
        logo.onload();
    }
}