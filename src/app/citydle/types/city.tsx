import type { LatLng } from "@/app/citydle/types/location";

export interface City {
  name: string;
  country: string;
  continent: string;
  location: LatLng;
  population: number;
  fact: string;
}
