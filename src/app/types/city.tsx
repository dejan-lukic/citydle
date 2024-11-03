import type { LatLng } from "@/app/types/location";

export interface City {
  name: string;
  country: string;
  continent: string;
  location: LatLng;
  population: number;
  fact: string;
}
