// src/components/MissionList.tsx

import { MissionDTO } from "../DTO/MissionDto";
import MissionItem from "./MissionItem";

export interface MissionListProps {
    missions: MissionDTO[]
}

export function MissionList({ missions,  }: MissionListProps) {
  return (
    <div className="mission-list">
      {missions.map((mission) => (
        <MissionItem
          key={mission.id}
          mission={mission}
          onDelete={() => {}}
          onUpdateStatus={() => {}}
        />
      ))}
    </div>
  );
}