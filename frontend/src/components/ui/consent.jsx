import { useNavigate } from "react-router-dom"
const Consent = ({state,setState, onClick})=>{
    const navigate = useNavigate()
    return(
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl overflow-hidden">
    <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-h-[350px] sm:max-h-[400px] overflow-y-auto">
      <h2 className="font-lato text-lg font-normal text-darkblue mb-4">
        Biometric Data Processing Consent
      </h2>
      <div className="font-lato font-light text-xs text-gray-700 text-left space-y-4">
        <p>
          The Clare Skin Analysis Service ("Clare") may collect, process, and store biometric identifiers including facial geometry, skin characteristics, and related physiological data ("Biometric Data") through our AI-powered diagnostic platform.
        </p>
        <p>
          <strong>Purpose of Collection:</strong> Your Biometric Data will be used exclusively to generate personalized skin health analysis reports, provide AI-driven treatment recommendations, improve diagnostic algorithms through secure processes, and maintain health records for your clinical history.
        </p>
        <p>
          <strong>Data Management:</strong> All biometric information will be encrypted during storage and transmission, retained for a maximum period of 24 months from last access, and anonymized for research and development purposes.
        </p>
        <p>
          Your consent is governed by our{" "}
          <button onClick={() => navigate("/privacy")} className="text-blue-600 underline mx-1">
            Privacy Policy
          </button>{" "}
          and{" "}
          <button onClick={() => navigate("/terms")} className="text-blue-600 underline mx-1">
            Terms of Service
          </button>
          , which outline your rights under applicable data protection regulations.
        </p>
      </div>
      <div className="flex items-start mt-4 mb-2">
        <input
          type="checkbox"
          id="biometricConsent"
          onChange={(e) =>
                        setState(prev => ({ ...prev, consentGiven: e.target.checked }))
                      }
          className="mt-1 w-20 h-20 mr-3" // Increased size
          />
        <label htmlFor="biometricConsent" className="font-lato text-xs text-gray-700 text-left">
          I hereby explicitly authorize Clare to process my Biometric Data as described above. I affirm that this consent is voluntary and informed, understanding that service access requires data processing and that I may withdraw consent through account deletion.
        </label>
      </div>
      <button
        onClick={onClick}
        disabled={!state.consentGiven}
        className={`font-lato font-light text-sm py-2 px-6 rounded-full mt-4 transition-colors ${
          state.consentGiven ? "bg-darkblue text-white hover:bg-opacity-80" : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Accept and Continue
      </button>
    </div>
  </div>
    )
}
export default Consent
