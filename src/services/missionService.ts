// src/services/missionService.ts

import { MissionDTO } from "../DTO/MissionDto";
import { MissionStatus } from "../enums/MissionStatus";

const BASE_URL = "https://reactexambackend.onrender.com/missions";
const MY_API_KEY = "9023407";

const getMissions = async (): Promise<MissionDTO[]> => {
  const response = await fetch(`${BASE_URL}/${MY_API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch missions");
  }
  return response.json();
};

const addMission = async (mission: MissionDTO): Promise<MissionDTO> => {
  const response = await fetch(`${BASE_URL}/${MY_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mission),
  });
  if (!response.ok) {
    throw new Error("Failed to add mission");
  }
  return response.json();
};

const deleteMission = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${MY_API_KEY}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete mission");
  }
};

const updateMissionStatus = async (id: string, status: MissionStatus): Promise<MissionDTO> => {
  const response = await fetch(`${BASE_URL}/${MY_API_KEY}/progress/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error("Failed to update mission status");
  }
  return response.json();
};

export { getMissions, addMission, deleteMission, updateMissionStatus };