"use strict";

// Selecting DOM elements
const inputEl = document.querySelector(".input-chat");
const btnEl = document.querySelector(".fa-paper-plane");
const cardBodyEl = document.querySelector(".card-body");

// API key and URL for OpenAI
const API_KEY = "APIKEY";
const URL = "https://api.openai.com/v1/chat/completions";

// Function to generate response
const chatGenerator = (userMessage) => {
  // Check if user typed "crocin"
  const userMessageLowerCase = userMessage.toLowerCase();
  if (userMessageLowerCase === "crocin") {
    return "Crocin is a popular pain relief medication used to treat headaches, fever, and body aches. It contains paracetamol which helps to reduce pain and lower fever.";
  } 

  else if(userMessageLowerCase === "combiflam") {
    return "Combiflam, a combination medication comprising ibuprofen and paracetamol, offers a dual-action approach to pain relief and fever reduction.";
  }

  else if(userMessageLowerCase === "benadryl") {
    return "Benadryl, also known by its generic name diphenhydramine, serves as a popular antihistamine medication utilized to relieve allergy symptoms such as itching, sneezing, and runny nose.";
  }

  else if(userMessageLowerCase === "dolo") {
    return "Dolo 650 is a brand of paracetamol-based medication widely used for its analgesic (pain-relieving) and antipyretic (fever-reducing) properties. Each Dolo 650 tablet typically contains 650 milligrams of paracetamol. It is commonly prescribed or recommended for various types of pain, including headache, toothache, muscle aches, and menstrual cramps, as well as for reducing fever associated with infections. ";
  }

  else if(userMessageLowerCase === "paracetamol") {
    return "Paracetamol, also known as acetaminophen, is a widely used over-the-counter medication renowned for its analgesic and antipyretic effects. Available in various formulations, including tablets, capsules, syrup, and effervescent tablets, Paracetamol is a versatile option for relieving pain and reducing fever associated with numerous conditions, such as headaches, toothaches, muscular pain, and common colds or flu. While generally considered safe when used appropriately, exceeding the recommended dosage of Paracetamol can lead to severe liver damage or even failure.";
  }

  else if(userMessageLowerCase === "aspirin") {
    return "Aspirin is a common pain reliever that belongs to the class of drugs known as nonsteroidal anti-inflammatory drugs (NSAIDs). It is often used to reduce fever, relieve minor aches and pains, and alleviate inflammation.Aspirin works by inhibiting the production of prostaglandins, which are chemicals in the body that promote inflammation, pain, and fever.";
  }

  else if(userMessageLowerCase === "acetaminophen") {
    return "Acetaminophen, also known as paracetamol, is a widely used over-the-counter medication for relieving pain and reducing fever. It is commonly found in many prescription and non-prescription products, including cold and flu remedies, as well as various types of pain relievers.Unlike aspirin and other NSAIDs, acetaminophen does not possess significant anti-inflammatory properties. Instead, it works by inhibiting the production of prostaglandins in the brain, which helps to reduce pain and fever.";
  }

  else if(userMessageLowerCase === "ibuprofen") {
    return "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that is commonly used to relieve pain, reduce inflammation, and lower fever. It is available over-the-counter and by prescription in various formulations, including tablets, capsules, and liquid suspensions.Ibuprofen works by inhibiting the activity of cyclooxygenase (COX) enzymes, which play a key role in the production of prostaglandins. ";
  }


  else if(userMessageLowerCase === "lisinopril") {
    return "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor commonly prescribed to treat high blood pressure (hypertension), heart failure, and to improve survival after a heart attack. It works by relaxing blood vessels, allowing blood to flow more smoothly and reducing the workload on the heart.By lowering blood pressure and improving blood flow, lisinopril helps to reduce the risk of stroke, heart attack, and other cardiovascular complications. It is usually taken orally once daily, with or without food, and dosage may vary depending on the individual's condition and response to treatment. ";
  }


  else if(userMessageLowerCase === "levothyroxine") {
    return "Levothyroxine is a synthetic form of thyroid hormone used to treat hypothyroidism, a condition characterized by an underactive thyroid gland. It is also prescribed to prevent the recurrence of thyroid cancer and to suppress the growth of goiters.Levothyroxine works by replacing or supplementing the natural thyroid hormone that the body is unable to produce in sufficient amounts. ";
  }


  else if(userMessageLowerCase === "metformin") {
    return "Metformin is a first-line medication for the treatment of type 2 diabetes mellitus. It belongs to the class of biguanide drugs and works by reducing the production of glucose in the liver and improving insulin sensitivity in the body's cells.Metformin helps to lower blood sugar levels, control hyperglycemia, and reduce the risk of complications associated with diabetes, such as heart disease, kidney damage, and nerve damage. ";
  }


  else if(userMessageLowerCase === "atorvastatin") {
    return "Atorvastatin is a statin medication used to lower cholesterol levels and reduce the risk of cardiovascular events such as heart attack and stroke. It works by inhibiting the enzyme HMG-CoA reductase, which plays a key role in cholesterol production in the liver.By lowering levels of LDL cholesterol (often referred to as 'bad' cholesterol) and triglycerides while increasing levels of HDL cholesterol (or 'good' cholesterol), atorvastatin helps to improve lipid profiles and reduce the accumulation of plaque in the arteries.";
  }


  else if(userMessageLowerCase === "omeprazole") {
    return "Omeprazole is a proton pump inhibitor (PPI) medication used to treat conditions such as gastroesophageal reflux disease (GERD), peptic ulcers, and Zollinger-Ellison syndrome. It works by reducing the production of stomach acid, thereby helping to relieve symptoms such as heartburn, acid reflux, and indigestion.";
  }


  else if(userMessageLowerCase === "alprazolam") {
    return "Alprazolam, commonly known by the brand name Xanax, is a benzodiazepine medication used to treat anxiety disorders, panic disorders, and occasionally for the short-term relief of symptoms of anxiety or anxiety associated with depression.Alprazolam works by enhancing the activity of gamma-aminobutyric acid (GABA), a neurotransmitter in the brain that helps to calm excessive neuronal activity. ";
  }


  else if(userMessageLowerCase === "cetirizine") {
    return "Cetirizine is a second-generation antihistamine used to relieve symptoms of allergic rhinitis (hay fever), such as sneezing, runny or itchy nose, and itchy or watery eyes. It is also used to alleviate symptoms of chronic urticaria (hives) and other allergic skin conditions.Cetirizine works by blocking the action of histamine, a substance in the body that is released during allergic reactions. ";
  }


  else if(userMessageLowerCase === "escitalopram") {
    return "Escitalopram is a selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat major depressive disorder and generalized anxiety disorder. It works by increasing the levels of serotonin, a neurotransmitter in the brain associated with mood regulation, by blocking its reabsorption into nerve cells.Escitalopram is typically taken orally once daily, with or without food, and dosage may vary depending on the individual's condition and response to treatment.";
  }


  else if(userMessageLowerCase === "warfarin") {
    return "Warfarin is an anticoagulant medication used to prevent blood clots from forming or growing larger in the blood vessels or heart. It is commonly prescribed to reduce the risk of stroke, heart attack, and other thromboembolic events in individuals with conditions such as atrial fibrillation, deep vein thrombosis, and pulmonary embolism.Warfarin works by inhibiting the synthesis of vitamin K-dependent clotting factors in the liver, thereby interfering with the body's ability to form blood clots.";
  }


  else if(userMessageLowerCase === "sertraline") {
    return "Sertraline is a selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder (OCD), panic disorder, post-traumatic stress disorder (PTSD), and social anxiety disorder. It works by increasing the levels of serotonin, a neurotransmitter in the brain that influences mood and emotional well-being.";
  }


  else if(userMessageLowerCase === "metoprolol") {
    return "Metoprolol is a beta-blocker medication used to treat high blood pressure (hypertension), angina (chest pain), heart failure, and to prevent migraine headaches. It works by blocking the effects of adrenaline on the heart, thereby slowing the heart rate, reducing blood pressure, and improving blood flow.Metoprolol is typically taken orally once or twice daily, with or without food. Dosage may vary depending on the condition being treated and individual response to the medication.";
  }

  
  else if(userMessageLowerCase === "lorazepam") {
    return "Lorazepam is a benzodiazepine medication used to treat anxiety disorders, insomnia, seizures, and alcohol withdrawal symptoms. It works by enhancing the activity of gamma-aminobutyric acid (GABA), a neurotransmitter in the brain that has a calming effect on the central nervous system.Lorazepam is typically taken orally as needed for anxiety symptoms or insomnia, with dosage and frequency determined by the healthcare provider based on the individual's condition and response to treatment.";
  }

  
  else if(userMessageLowerCase === "penicillin") {
    return "Penicillin is a group of antibiotics derived from Penicillium fungi, originally discovered by Scottish bacteriologist Alexander Fleming in 1928. It was the first widely used antibiotic medication and revolutionized the treatment of bacterial infections.Penicillin works by inhibiting the growth of bacteria and interfering with their ability to form cell walls, ultimately leading to bacterial cell death. It is effective against a wide range of bacterial infections, including streptococcal infections, staphylococcal infections, and pneumococcal infections.";
  }

  else if(userMessageLowerCase === "azithromycin") {
    return "Azithromycin is a broad-spectrum macrolide antibiotic used to treat bacterial infections such as respiratory tract infections, skin and soft tissue infections, and sexually transmitted infections. It is commonly prescribed for conditions such as pneumonia, bronchitis, sinusitis, and chlamydia.Azithromycin works by inhibiting bacterial protein synthesis, thereby preventing the growth and reproduction of susceptible bacteria. ";
  }


  


  else {
    // If not "crocin", provide generic response
    return "I'm sorry, I don't have information on that right now.";
  }
};

// Function to manage chat
function manageChat() {
  // Get user input
  const userMessage = inputEl.value.trim();
  
  // If user input is empty, return
  if (!userMessage) return;

  // Clear input field
  inputEl.value = "";

  // Append user message to chat
  cardBodyEl.appendChild(messageEl(userMessage, "user"));

  // Generate response
  const response = chatGenerator(userMessage);

  // Append response to chat
  cardBodyEl.appendChild(messageEl(response, "chat-bot"));
}

// Function to create chat message element
const messageEl = (message, className) => {
  const chatEl = document.createElement("div");
  chatEl.classList.add("chat", `${className}`);
  let chatContent =
    className === "chat-bot"
      ? `<span class="user-icon"><i class="fa fa-robot"></i></span>
  <p class='robot'>${message}</p>`
      : ` <span class="user-icon"><i class="fa fa-user"></i></span>
  <p>${message}</p>`;
  chatEl.innerHTML = chatContent;
  return chatEl;
};

// Event listeners
btnEl.addEventListener("click", manageChat);
inputEl.addEventListener("input", (e) => {
  e.preventDefault();
  e.target.addEventListener("keydown", (keyboard) => {
    if (keyboard.key === "Enter") {
      manageChat();
    }
  });
});