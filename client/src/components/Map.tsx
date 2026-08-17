/* Vista Jakkur — standalone Google Maps loader. Add VITE_GOOGLE_MAPS_API_KEY to enable the interactive map. */
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

declare global { interface Window { google?: typeof google; } }

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
let mapsLoader: Promise<void> | null = null;

function loadMaps() {
  if (window.google?.maps) return Promise.resolve();
  if (!apiKey) return Promise.reject(new Error("Google Maps key unavailable"));
  if (!mapsLoader) {
    mapsLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&libraries=marker`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Google Maps could not load"));
      document.head.appendChild(script);
    });
  }
  return mapsLoader;
}

interface MapViewProps { className?: string; initialCenter?: google.maps.LatLngLiteral; initialZoom?: number; onMapReady?: (map: google.maps.Map) => void; }

export function MapView({ className, initialCenter = { lat: 12.9716, lng: 77.5946 }, initialZoom = 14, onMapReady }: MapViewProps) {
  const container = useRef<HTMLDivElement>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;
    loadMaps().then(() => {
      if (!active || !container.current || !window.google) return;
      const map = new window.google.maps.Map(container.current, { center: initialCenter, zoom: initialZoom, disableDefaultUI: true, zoomControl: true, mapTypeControl: false, streetViewControl: false });
      onMapReady?.(map);
    }).catch(() => active && setUnavailable(true));
    return () => { active = false; };
  }, [initialCenter.lat, initialCenter.lng, initialZoom, onMapReady]);

  if (unavailable) {
    return <div className={cn("grid place-items-center bg-graphite-900 p-6 text-center text-white", className)}><div><MapPin className="mx-auto h-7 w-7 text-brass-400" /><p className="mt-3 text-sm font-bold">Vista Jakkur, Bengaluru</p><a className="mt-2 inline-block text-xs text-cobalt-300 underline" href="https://maps.google.com/?q=Main+Guard+Cross+Road+MG+Road+Bengaluru" target="_blank" rel="noreferrer">Open in Google Maps</a></div></div>;
  }
  return <div ref={container} className={cn("h-[500px] w-full", className)} aria-label="Office location map" />;
}
