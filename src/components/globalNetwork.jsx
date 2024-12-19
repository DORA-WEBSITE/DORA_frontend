import React from 'react'

const GlobalNetwork = () => {
  return (
    <>
    <div className="p-6 bg-gray-50 text-gray-800 mt-[150px]">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">Global Network of IITR Alumni</h1>

      <div className="flex justify-center mb-8">
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=1Y8mcQN3oO70S6lQiLSJ6P2ef2GBBGf4&amp;ehbc=2E312F" 
          width="1200" 
          height="480" 
          className="rounded-lg border border-gray-300">
        </iframe>
      </div>

      <div className="text-lg text-gray-700 mx-[40px]">
        <p className="mb-4">
          <strong className="text-red-600">NOTE:</strong> If you have difficulty in creating/updating your profile, please feel free to email your details (Name, Email, Year of Degree Awarded, Degree, Branch, City/Town, and Country) to:  
          <a href="mailto:alumni-connect@iitr.ac.in" className="text-blue-600 underline"> alumni-connect@iitr.ac.in</a>. We will create/update your profile and send you the User ID and Password.
        </p>

        <p className="mb-4">
          You can also email :
          <a href="mailto:alumni-connect@iitr.ac.in" className="text-blue-600 underline"> alumni-connect@iitr.ac.in</a> or WhatsApp 
          <a href="https://api.whatsapp.com/send?phone=919084729192" target="_blank" className="text-blue-600 underline"> +91-9084729192</a> for any other queries related to alumni database updates. Thank you!
        </p>

        <ul className="list-disc list-inside mb-8">
          <li>
            <a href="https://almamater.iitr.ac.in/alumportal/globalnetwork.aspx" target="_blank" className="text-blue-600 font-semibold text-lg">
              Global Network of IIT Roorkee Alumni
            </a>
            <span className="text-red-600 font-bold ml-2">New!</span>
          </li>
          <li>
            <a href="https://almamater.iitr.ac.in/file/SignInForm1.aspx" target="_blank" className="text-blue-600 font-semibold text-lg">
              Create a new profile
            </a>
          </li>
          <li>
            <a href="https://almamater.iitr.ac.in/alumPortal/Login_website.aspx" target="_blank" className="text-blue-600 font-semibold text-lg">
              Login/Update existing profile
            </a>
          </li>
        </ul>
      </div>

      <hr className="my-8 border-gray-300" />

      <div className='mx-[40px]'>
        <h4 className="text-2xl font-bold mb-4">Other Important Links <span className="text-red-600">New!</span></h4>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://iitr.ac.in/Academics/VerificationTranscriptsCertificates.html" target="_blank" className="text-blue-600 font-semibold">
              Transcripts/Verification/Degree/Duplicate Degree/Duplicate Grade Sheet/Transfer Certificate
            </a>
          </li>
          <li>
            <a href="https://iitr.ac.in/Academics/static/Notifications/General%20Notifications/Calculation_of_SGPACGPA__CGPA_to_Percentage.pdf" target="_blank" className="text-blue-600 font-semibold">
              CGPA to Percentage conversion certificate
            </a>
          </li>
          <li>
            <a href="https://acad.iitr.ac.in/Varsity/ACAD/Notifications/English_Language_Certificate.pdf" target="_blank" className="text-blue-600 font-semibold">
              Certificate for "Medium of Instruction is English"
            </a>
          </li>
          <li>
            <a href="https://acad.iitr.ac.in/Varsity/ACAD/Notifications/Notification(24012019).pdf" target="_blank" className="text-blue-600 font-semibold">
              Revised Rates of Transcripts
            </a>
          </li>
        </ul>
      </div>
    </div>

    </>
  )
}

export default GlobalNetwork
