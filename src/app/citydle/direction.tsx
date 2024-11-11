import type { LatLng } from "@/app/citydle/types/location";

function degreesToRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

// Helper function to calculate the initial bearing from one point to another
function calculateBearing(location1: LatLng, location2: LatLng) {
  const phi1 = degreesToRadians(location1.lat);
  const phi2 = degreesToRadians(location2.lat);
  const deltaLon = degreesToRadians(location2.lng - location1.lng);

  const y = Math.sin(deltaLon) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) -
    Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLon);

  const theta = Math.atan2(y, x);

   // Convert to degrees and normalize
  return (theta * 180 / Math.PI + 360) % 360;
}

// Main function to determine the direction
export function calculateDirection(location1: LatLng, location2: LatLng, averageBearings: boolean) {
  if (location1.lat === location2.lat && location1.lng === location2.lng) {
    // If both locations are the same, return the target emoji 🎯
    return "\ud83c\udfaf"; // 🎯
  }

  // Calculate the initial bearing from the specified location to the reference location
  const initialBearing = calculateBearing(location1, location2);

  // Calculate the reverse bearing (from reference location to specified location)
  const reverseBearing = (calculateBearing(location2, location1) + 180) % 360;

  // Determine the angle to use for direction
  let angle;
  if (averageBearings) {
    angle = (initialBearing + reverseBearing) / 2;
  } else {
    angle = initialBearing;
  }

  // Return the corresponding arrow emoji based on the angle
  if (angle < 23 || angle >= 337) {
    return "\u2b06"; // ⬆️ North
  }

  if (angle >= 23 && angle < 63) {
    return "\u2197"; // ↗️ Northeast
  }

  if (angle >= 63 && angle < 113) {
    return "\u27a1"; // ➡️ East
  }

  if (angle >= 113 && angle < 157) {
    return "\u2198"; // ↘️ Southeast
  }

  if (angle >= 157 && angle < 203) {
    return "\u2b07"; // ⬇️ South
  }

  if (angle >= 203 && angle < 247) {
    return "\u2199"; // ↙️ Southwest
  }

  if (angle >= 247 && angle < 293) {
    return "\u2b05"; // ⬅️ West
  }

  return "\u2196"; // ↖️ Northwest
}
