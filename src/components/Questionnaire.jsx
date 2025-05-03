import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../authentication/firebase";
import { collection, addDoc } from "firebase/firestore";
import "../styles/Questionnaire.css"

const Question = ({ label, name, options, handleChange }) => (
  <div className="mb-4">
    <label className="block font-semibold">{label}</label>
    {options.map((option) => (
      <div key={option} className="ml-4">
        <input
          type="radio"
          name={name}
          value={option}
          onChange={handleChange}
          className="mr-2"
        />
        {option}
      </div>
    ))}
  </div>
);

const Questionnaire = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState({
    ageGroup: "",
    condition: "",
    diagnosisTime: "",
    therapyStatus: "",
    mobility: "",
    handControl: "",
    walkAbility: "",
    muscleSpasms: "",
    memoryDifficulty: "",
    focus: "",
    problemSolving: "",
    frustration: "",
    motivation: "",
    socialIsolation: "",
    pain: "",
    balance: "",
    numbness: "",
    rehabPreference: "",
    sessionLength: "",
    progressReports: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    if (!e || !e.target) {
      console.error("handleChange error: Event or target is undefined.");
      return;
    }
    const { name, value } = e.target;
    setResponses((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addDoc(collection(db, "questionnaire_responses"), responses);
      alert("Responses saved successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error saving responses:", err);
      setError("Error submitting responses: " + err.message + ". Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="formLeft">
    <form
    onSubmit={handleSubmit}
    className="w-full max-w-3xl mx-auto px-4 py-8 bg-white shadow-lg rounded-xl space-y-8"
  >
  

      <h2 className="text-xl font-bold mb-4" >General Patient Information</h2>
      <Question 
        label="1. What is your age group?"
        name="ageGroup"
        options={["18-30", "31-50", "51-65", "65+"]}
        handleChange={handleChange}
      /> 

      <Question
        label="2. What condition are you recovering from?"
        name="condition"
        options={[
          "Stroke",
          "Post-surgery rehabilitation",
          "Spinal cord injury",
          "Traumatic brain injury",
          "Other",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="3. How long has it been since your diagnosis/injury?"
        name="diagnosisTime"
        options={[
          "Less than 6 months",
          "6 months – 1 year",
          "1 – 2 years",
          "More than 2 years",
        ]}
        handleChange={handleChange}
      /> 

      <Question
        label="4. Are you currently undergoing therapy or rehabilitation?"
        name="therapyStatus"
        options={["Yes, regularly", "Occasionally", "No, self-rehabilitation"]}
        handleChange={handleChange}
      />

      <h2 className="text-xl font-bold mt-4">Motor Function Assessment</h2>
      <Question
        label="5. Do you experience difficulty in moving any part of your body?"
        name="mobility"
        options={[
          "Yes, upper limbs",
          "Yes, lower limbs",
          "Yes, both",
          "No, full mobility",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="6. How much control do you have over your hand movements?"
        name="handControl"
        options={[
          "Full control",
          "Mild difficulty",
          "Moderate difficulty",
          "Severe difficulty",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="7. Can you walk without assistance?"
        name="walkAbility"
        options={[
          "Yes, without difficulty",
          "Yes, but mild imbalance",
          "Yes, with aid",
          "No, full assistance",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="8. Do you experience muscle stiffness or spasms?"
        name="muscleSpasms"
        options={["Rarely", "Occasionally", "Frequently", "Constantly"]}
        handleChange={handleChange}
      />

      <h2 className="text-xl font-bold mt-4">Cognitive Function Assessment</h2>
      <Question
        label="9. How often do you have difficulty remembering things?"
        name="memoryDifficulty"
        options={["Never", "Sometimes", "Often", "Always"]}
        handleChange={handleChange}
      />

      <Question
        label="10. Do you have trouble focusing on a task for a long time?"
        name="focus"
        options={[
          "No, I can focus normally",
          "Sometimes, I get distracted easily",
          "Frequently, I lose focus quickly",
          "Always, I struggle with attention",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="11. Do you find it difficult to solve problems or make decisions?"
        name="problemSolving"
        options={[
          "No, I can solve problems easily",
          "Sometimes, I take more time than before",
          "Frequently, I struggle with decision-making",
          "Always, I need help with problem-solving",
        ]}
        handleChange={handleChange}
      />
                                                                                                                                                        
      <h2 className="text-xl font-bold mt-4">Emotional and Mental Health</h2>
      <Question
        label="12. How often do you feel frustrated or anxious about your recovery?"
        name="frustration"
        options={["Never", "Sometimes", "Often", "Always"]}
        handleChange={handleChange}
      />

      <Question
        label="13. Do you feel motivated to complete therapy exercises?"
        name="motivation"
        options={[
          "Yes, I am motivated",
          "Sometimes, I need encouragement",
          "Rarely, I struggle to stay motivated",
          "No, I find it very difficult",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="14. Do you feel socially isolated due to your condition?"
        name="socialIsolation"
        options={[
          "No, I have good social support",
          "Sometimes, I feel a little isolated",
          "Often, I feel disconnected from others",
          "Always, I feel very isolated",
        ]}
        handleChange={handleChange}
      />

      <h2 className="text-xl font-bold mt-4">Pain and Sensory Perception</h2>
      <Question
        label="15. Do you experience pain during movement?"
        name="pain"
        options={["No pain", "Mild pain", "Moderate pain", "Severe pain"]}
        handleChange={handleChange}
      />

      <Question
        label="16. How would you rate your balance and coordination?"
        name="balance"
        options={[
          "Excellent",
          "Good but slightly off-balance",
          "Poor, I often lose balance",
          "Very poor, I need constant support",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="17. Do you experience numbness or loss of sensation in any part of your body?"
        name="numbness"
        options={[
          "No numbness",
          "Mild numbness in fingers/toes",
          "Moderate numbness in hands/feet",
          "Severe numbness or complete loss of sensation",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="18. What type of rehabilitation activities interest you the most?"
        name="rehabPreference"
        options={[
          "Hand movement games",
          "Walking & balance games",
          "Memory exercises",
          "Relaxation activities",
        ]}
        handleChange={handleChange}
      />

      <Question
        label="19. Would you prefer shorter or longer therapy sessions?"
        name="sessionLength"
        options={["Short (5-10 min)", "Medium (10-20 min)", "Long (20-30 min)"]}
        handleChange={handleChange}
        />
       
      <Question
        label="20. Would you like to receive progress reports?"
        name="progressReports"
        options={[
        "Yes, regular updates",
         "Occasionally",
          "No reports needed"
        ]}
        handleChange={handleChange}
      />
      

      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className={`mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
    </div>
  );
 
};

export default Questionnaire;



      
