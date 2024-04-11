import React from "react";

const ActivitiesPage = () => {
  const activities = [
    {
      month: "May",
      name: "Learn about the Ocean I",
      mainActivity:
        "Ice-breaking session and introduction to the wonders of the blue planet.",
      subActivities: [
        "Basic talk about the ocean.",
        "Interactive exercise: “Exploring our relationship with the ocean using maps, globe, and images”.",
        "Creative Expression through sketches and posters",
      ],
    },
    {
      month: "May",
      name: "Learn about the Ocean II",
      mainActivity: "Exploring different environments of the ocean.",
      subActivities: [
        "Learn about coral and oyster reefs, mangroves, estuaries, tide pools, open ocean, etc.",
        "Group activity: Build a model coral reef from recycled materials.",
        "Video session: Documentary snippets on marine ecosystems.",
      ],
    },
    {
      month: "June",
      name: "Time in the laboratory",
      mainActivity: "Testing water quality",
      subActivities: [
        "Discuss the importance of water quality.",
        "Simple experiments to test local water samples (salinity, pH, clarity, nutrients), show and tell (equipment and their uses).",
        "Analyzing and presenting findings.",
      ],
    },
    {
      month: "July",
      name: "A voice for the ocean",
      mainActivity: "How to become an advocate for the ocean.",
      subActivities: [
        "Learn to advocate for the ocean through public speaking, storytelling, and writing.",
        "Interactive group exercise: Develop communication materials (i.e. speeches, storyboards, and information sheets) for a chosen ocean problem.",
        "Present materials to all",
      ],
    },
    {
      month: "August",
      name: "Field Trip to the Beach",
      mainActivity:
        "Coastal Discovery Day. Prep session before departure: Safety briefing and an overview of beach ecosystems.",
      subActivities: [
        "A Visit to a local Beach, focusing on exploration and observation of coastal marine life.",
        "Interactive Exploration: Guided tide pool (Next door) or Sandy Beach animal exploration using Google Lens, iNaturalist, and National Geographic field guide",
        "Conservation Activity: Participate in a beach clean-up to understand the impact of pollution on marine environments. Discuss the origin of beach litter and its effects on marine life.",
        "Reflection and journaling of their observations, including sketches of plants, animals, and the general ecosystem.",
        "Discuss the experiences and findings as a group to reinforce learning.",
      ],
    },
    {
      month: "September",
      name: "Pollution",
      mainActivity: "Beating Marine Pollution.",
      subActivities: [
        "Graphical presentation of different types of marine pollution.",
        "Interactive activity: “Sort the Pollution” game with items to categorize into recyclable, non-recyclable, and compostable.",
        "Group project: Making a simple water filtration system (creative activity).",
      ],
    },
    {
      month: "October",
      name: "Second Laboratory Session",
      mainActivity: "Tiny Sealife under the Microscope",
      subActivities: [
        "Microscopic examination of plankton and other small marine organisms.",
        "Drawing and labeling observed organisms.",
        "Discussing the role of microscopic life in marine ecosystems.",
      ],
    },
    {
      month: "November",
      name: "Adventure Camp",
      mainActivity: "A trip to the Keta Ramsar Site",
      subActivities: [
        "Citizen Science with the community",
        "Boat ride on the Anyanui Creek",
        "Sea Turtle Search and Rescue",
      ],
    },
    {
      month: "November",
      name: "Graduation Ceremony",
      mainActivity: "Celebrating Our Ocean Literacy Journey.",
      subActivities: [
        "Showcase of achievements",
        "Project presentations",
        "Presenting certificates and awards.",
      ],
    },
  ];

  return (
    <div className="mx-auto p-5 bg-slate-950 text-white">
      <div className="sm:w-[70%] mx-auto">
        <h1 className="text-2xl font-bold mb-4">Activity Line-up for 2024</h1>
        {activities.map((activity, index) => (
          <div key={index} className="mb-8">
            <h2
              className={`text-2xl font-bold mb-2 ${
                index % 2 === 0 ? "text-sky-500" : "text-yellow-500"
              }`}
            >
              {activity.month}: {activity.name}
            </h2>
            <p className="italic mb-2">{activity.mainActivity}</p>
            <ul className="list-disc list-inside">
              {activity.subActivities.map((subActivity, idx) => (
                <li key={idx}>{subActivity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
