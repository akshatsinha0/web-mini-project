import React from 'react';
import '../css/event.css';
import EventCard from '../components/eventCard';

export default function Event() {
    return (
        <>
            <div>
                <section className="dark">
                    <div className="py-4">
                        <h1 className="head text-gray-300 tracking-widest pt-6 pl-10" id="pageHeaderTitle">Events</h1>
                        <div className="flex flex-col text-center w-full mb-20">
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
                                We conduct various events in form of Workshops, Competitions etc to make the community engaging.
                            </p>
                        </div>

                        <EventCard
                            secondCard={false}
                            name="Introduction Machine Learning"
                            type="Workshop"
                            date="26 January 2025" // Updated from 2023
                            desc="This workshop was conducted by the AI-ML Department. The workshop covered various Machine Learning models and the mathematics behind them along with hands-on practice."
                            poster_img="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                            duration="2 hrs"
                            color="red"
                            name2="Codenite"
                            type2="Contest"
                            date2="4 January 2024" // Updated from 2023
                            desc2="This was an intra institute level competitive programming contest organised by Coding Club which saw a massive participation."
                            poster_img2="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            duration2="2 hrs"
                            color2="red"
                        />

                        <EventCard
                            secondCard={true}
                            name2="Introduction to CyberSecurity and diving into Linux"
                            type2="Workshop"
                            date2="13 December 2024" // Updated from 2022
                            desc2="This was the second installment and a continuation of the previous session, conducted by Competitive Programming Department."
                            poster_img2="https://d15cw65ipctsrr.cloudfront.net/aa/69d17c66aa42848a99fa8deb903c93/NYU-intro-to-cybersecurity-2-.png"
                            duration2="2 hrs"
                            color2="green"
                            name="Codenite"
                            type="Contest"
                            date="4 January 2024" // Updated from 2023
                            desc="This was an intra institute level competitive programming contest organised by Coding Club which saw a massive participation."
                            poster_img="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            duration="2 hrs"
                            color="blue"
                        />

                        <EventCard
                            secondCard={true}
                            name2="Introduction to Programming-2"
                            type2="Workshop"
                            date2="8 December 2024" // Updated from 2022
                            desc2="This was the second installment and a continuation of the previous session, conducted by Competitive Programming Department."
                            poster_img2="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                            duration2="2 hrs"
                            color2="blue"
                            name="Introduction to Open Source"
                            type="Workshop"
                            date="9 December 2024" // Updated from 2022
                            desc="This session was conducted by Shubh Karman Singh (4th Year,BTech) in which he covered the basics of how to contribute to open source, remote collaboration and many more like topics were covered."
                            poster_img="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            duration="2 hrs"
                            color="red"
                        />

                        <EventCard
                            secondCard={true}
                            name2="Introduction to Programming"
                            type2="Workshop"
                            date2="19 November 2024" // Updated from 2022
                            desc2="Conducted by the Competitive Programming department in which basics of C++ and DSA were taught. This session was focused on newcomers in the field of programming"
                            poster_img2="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                            duration2="2 hrs"
                            color2="red"
                            name="Introduction to Web Development"
                            type="Workshop"
                            date="22 November 2024" // Updated from 2022
                            desc="This session was conducted by Aman Pratap Singh (4th year BTech) along with the Development department in which basics of HTML and CSS were covered."
                            poster_img="https://miro.medium.com/v2/resize:fit:1200/1*IYQnAWgsoxvm8XPP2Rmzbg.jpeg"
                            duration="2 hrs"
                            color="green"
                        />
                    </div>
                </section>
            </div>
        </>
    );
}