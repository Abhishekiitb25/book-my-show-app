// rafce (shortcut)
import React, { useState } from "react";

// Layout HOC
import DefaultLayoutHoc from "../layout/Default.layout";


// Components
import HeroCarosuel from "../components/HeroCarosuel/HeroCarosuel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.Component";

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies]=useState([]);
    const [premierMovies, setPremierMovies]=useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents]=useState([]);

    return (
      <>
        <HeroCarosuel />
        <div className="container mx-auto px-4 md:px-12 my-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
            The Best of Entertainment
          </h1>
          <EntertainmentCard />
        </div>

        <div className="container mx-auto px-4 md:px-12 my-8">
          <PosterSlider
            title="Recommended Movies"
            subject="List of recommended movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="bg-premier-800 py-12">
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src=""
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              title="Premiers"
              subject="Brand new releases every Friday"
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 my-8 ">
          <PosterSlider
            title="Online Streaming Events"
            subject="Online Streaming Events"
            posters={onlineStreamEvents}
            isDark={false}
          />
        </div>
      </>
    );
    
}

export default DefaultLayoutHoc(HomePage);