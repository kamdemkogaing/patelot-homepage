// Ermittelt die Standardsprache ohne externe Dienste (keine IP-Weitergabe):
// 1. Region der Browsersprache (z. B. fr-CH, de-AT), 2. Sprache, 3. Zeitzone.
const COUNTRY_LANGUAGE = {
  DE: "de", AT: "de", LI: "de",
  FR: "fr", BE: "fr", LU: "fr", MC: "fr", SN: "fr", CI: "fr", CM: "fr", CD: "fr", MG: "fr", HT: "fr",
  GB: "en", IE: "en", US: "en", CA: "en", AU: "en", NZ: "en", IN: "en", ZA: "en",
};

const TIMEZONE_LANGUAGE = {
  "Europe/Berlin": "de", "Europe/Vienna": "de", "Europe/Zurich": "de", "Europe/Busingen": "de",
  "Europe/Paris": "fr", "Europe/Brussels": "fr", "Europe/Luxembourg": "fr", "Europe/Monaco": "fr",
  "Europe/London": "en", "Europe/Dublin": "en",
};

export function detectLanguage(supported, fallback = "de") {
  const isSupported = (code) => code && Object.hasOwn(supported, code);
  try {
    const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const locale of locales) {
      if (!locale) continue;
      const [lang, region] = locale.split("-");
      const byCountry = region && COUNTRY_LANGUAGE[region.toUpperCase()];
      if (isSupported(byCountry)) return byCountry;
      if (isSupported(lang?.toLowerCase())) return lang.toLowerCase();
    }
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (isSupported(TIMEZONE_LANGUAGE[zone])) return TIMEZONE_LANGUAGE[zone];
  } catch (error) {
    console.warn("Spracherkennung fehlgeschlagen:", error);
  }
  return fallback;
}
