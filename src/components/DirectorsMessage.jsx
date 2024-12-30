import React from "react";

const DirectorsMessage = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-[150px] mb-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Director's Message
      </h1>
      <div className="flex flex-col items-center">
        <img
          src="https://alumni.iitr.ac.in/media/website/media/DSC_7196.JPG"
          alt="Director"
          className="border-4 border-gray-300 rounded-lg w-52 h-auto mb-4"
        />
      </div>
      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          It is a great pleasure and honor for me to serve as the Director of
          Indian Institute of Technology Roorkee. I take this as a privilege to
          extend my warm welcome to all alumni of Indian Institute of
          Technology Roorkee.
        </p>
        <p>
          The Indian Institute of Technology with a legacy of more than 175
          years has been a tradition for excellence. The mission of our
          institution is “To create an environment that shall foster the growth
          of intellectually capable, innovative and entrepreneurial
          professionals, who shall contribute to the growth of Science and
          Technology in partnership with Industry and develop and harness it
          for the welfare of the nation and mankind”.
        </p>
        <p>
          Ours is a bond of a lifetime. The campus may have let you go, but we
          expect you to come back – though some of you do come back every year
          to receive the Distinguished Alumnus Award (DAA), the Distinguished
          Young Alumnus Award (DYAA) and the Outstanding Service Award (OSA) –
          to inspire our students, to raise the bar, to expand our idea of the
          possible. To realize these objectives, the Institute has established
          ‘Office of Resources & Alumni Affairs’, the primary communication
          link between you and the Institute. The Office of Resources & Alumni
          Affairs has always been instrumental in setting up faculty and
          student awards, organizing in-house alumni meetings, and conducting
          social outreach activities through chapters. Increasing recognition
          and constant support from the alumni bears testimony to the fact that
          the department has been successful so far in achieving its goal.
        </p>
        <p>
          The institute recognizes, acknowledges, and embraces our alumni as
          vital stakeholders in the developments of the Institute and to take
          it to even greater heights.
        </p>
        <p>
          I am hopeful that the networking among the alumni and with the
          Institute will be augmented along with strategizing more effective
          alumni service and outreach programs. I also hope that the Office of
          Resources & Alumni Affairs will be able to set up a grand reunion
          fund bringing together the alumni to support social outreach and
          welfare activities benefitting the students, faculty, staff,
          infrastructure, alumni, and the people of India at large.
        </p>
        <p>
          Our target is to ensure that no member of the family feels
          disconnected. I believe that the alumni, having a plethora of
          experience, can mentor students on the right path and help the
          institute achieve greater heights.
        </p>
        <p>Hearty greetings from your beloved alma mater.</p>
        <div className="mt-6">
          <p>Warm regards,</p>
          <p className="font-semibold">Prof. K. K. Pant</p>
          <p>Director</p>
          <p>Indian Institute of Technology</p>
          <p>Roorkee</p>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;
