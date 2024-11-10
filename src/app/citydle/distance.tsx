import type { LatLng } from "@/app/citydle/types/location";

const EARTH_RADIUS_KM = 6371;

// Helper function to convert degrees to radians
function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

// Helper function to calculate the Haversine distance between two points
export function haversineDistance(location1: LatLng, location2: LatLng) {
  const deltaLat = degreesToRadians(location2.lat - location1.lat);
  const deltaLon = degreesToRadians(location2.lng - location1.lng);

  const lat1 = degreesToRadians(location1.lat);
  const lat2 = degreesToRadians(location2.lat);

  // a is the square of half the chord length between the points
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

  // c is the angular distance in radians
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Earth's radius in kilometers
  return EARTH_RADIUS_KM * c;
}
