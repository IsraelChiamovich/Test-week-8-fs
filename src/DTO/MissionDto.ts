// src/DTO/MissionDto.ts

import { MissionStatus } from "../enums/MissionStatus";

export interface MissionDTO {
  id?: string;
  name: string;
  status: MissionStatus;
  priority: string;
  description: string;
}
