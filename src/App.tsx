import { useEffect, useState } from "react";
import {getMissions, addMission, deleteMission, updateMissionStatus,} from "./services/missionService";
import { MissionDTO } from "./DTO/MissionDto";
import { MissionStatus } from "./enums/MissionStatus";
import MissionItem from "./components/MissionItem";

import "./App.css";
import { MissionPriority } from "./enums/MissionPriority";
import { MissionList } from "./components/MissionList";

export default function App() {
  const [missions, setMissions] = useState<MissionDTO[]>([
    {
      id: "1",
      name: "Mission 1",
      description: "Description of Mission 1",
      status: MissionStatus.Pending,
      priority: MissionPriority.Low,
    },
    {
      id: "2",
      name: "Mission 2",
      description: "Description of Mission 2",
      status: MissionStatus.InProgress,
      priority: MissionPriority.Medium,
    },
    {
      id: "3",
      name: "Mission 3",
      description: "Description of Mission 3",
      status: MissionStatus.Completed,
      priority: MissionPriority.High,
    },
  ]);

  useEffect(() => {
    const loadMissions = async () => {
      try {
        const missions = await getMissions();
        setMissions(missions);
      } catch (error) {
        console.error(error);
      }
    };
    loadMissions();
  }, []);

  return (
    <div className="App">
      <h1>Missions Task Manager</h1>
      <MissionList
        missions={missions}
        />
    </div>
  );
}
