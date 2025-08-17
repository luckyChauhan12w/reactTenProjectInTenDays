import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProfileHeader from "./components/ProfileHeader";
import HighlightStories from "./components/HighlightStories";
import TabNavigation from "./components/TabNavigation";
import PhotoGrid from "./components/PhotoGrid";
import Modal from "./components/Modal";
import {
  profileData,
  highlightStories,
  postsData,
  reelsData,
  taggedData,
} from "./data/mockData";

function App() {
  const [activeTab, setActiveTab] = useState("posts");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "reels":
        return reelsData;
      case "tagged":
        return taggedData;
      default:
        return postsData;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <div className="lg:ml-64">
        {/* Profile Header */}
        <ProfileHeader profileData={profileData} />

        <div className="py-4 border-b border-gray-200">
          <HighlightStories stories={highlightStories} />
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

        <div className="py-4">
          <PhotoGrid data={getCurrentData()} onPhotoClick={handlePhotoClick} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        photo={selectedPhoto}
      />
    </div>
  );
}

export default App;
