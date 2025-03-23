import React from 'react'
import TeamCards from '../components/TeamCards'
import SahajPic from '../assets/memberImages/Sahaj image.jpg';

// Image imports removed

export default function about() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">CORE TEAM</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team of core members who are always ready to give back to the community</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <TeamCards name="Sahaj Gaur" post="Coordinator" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/sahaj-gaur/"} phone="1234567890" twitter={"https://twitter.com/sahajgaur"} github={"https://github.com/sahajgaur"} img={SahajPic} />
            <TeamCards name="Akshat Sinha" post="Co-Coordinator" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/akshat-sinha/"} phone="9876543210" twitter={"https://twitter.com/akshat_sinha"} github={"https://github.com/akshat-sinha"} />
          </div>

          {/* Removed Advising Committee section */}
        </div>
      </section>
    </div>
  )
}