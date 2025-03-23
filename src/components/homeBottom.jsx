import React from "react";

export default function homeBottom() {
  return (
    <div
      className="overflow-hidden"
      style={{
        width: "80vw",
        marginLeft: "10vw",
        marginTop: "850px",
        position: "relative",
      }}
    >
      <h1
        className="font-medium font-style: normal; text-5xl mt-0 mb-2 text-gray-400"
        style={{
          letterSpacing: "-0.02em",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "4em",
        }}
      >
        Departments
      </h1>
      {/* Development Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0 flex items-center">
            <img
              className="w-48 h-48 object-cover object-center rounded"
              alt="Development"
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Development
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              The development Department in our club encompasses Web Development, Android/iOS Development, Open Source Projects and much more. The tech stack for various developments are ever evolving. The role of this department is to keep the community updated with these techs and provide opportunities for projects.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
      {/* AI Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0 flex items-center">
            <img
              className="w-48 h-48 object-cover object-center rounded"
              alt="Artificial Intelligence"
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Artificial Intelligence
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              Artificial intelligence (AI) is a wide-ranging branch of computer science. AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
      {/* Security Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0 flex items-center">
            <img
              className="w-48 h-48 object-cover object-center rounded"
              alt="Network and Security"
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Network and Security
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              Network security is a domain designed to protect the usability and integrity of your network and data. It includes both hardware and software technologies. The role of this department is to educate our community with these technologies and provide a peer group for people with same interest.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
      {/* CP Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-1/4 md:w-1/2 w-5/6 mb-10 md:mb-0 flex items-center">
            <img
              className="w-48 h-48 object-cover object-center rounded"
              alt="Competitive Programming"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
              Competitive Programming
            </h1>
            <p className="mb-8 leading-relaxed text-gray-200">
              Competitive Programming is a mental sport which enables you to code a given problem under provided constraints. Our CP department guides every individual possessing a desire to excel in this sport. We also conduct regular workshops and provide roadmaps and peer groups for students interested in Competitive Programming.
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}