// A theme's presentation, drawn with the screen kit in whichever theme is active.
const THEME = {
  id: "hive",
  es: "Hive (VRV Legacy)",
  en: "Hive (VRV Legacy)",
  hook: "Tus canales favoritos en un solo lugar.",
  hookEn: "Your favorite channels in one place.",
  desc: "Nostalgia geométrica. Superficies oscuras, ángulos rectos y un acento amarillo eléctrico inspirado en la interfaz clásica de VRV.",
  descEn: "Geometric nostalgia. Dark surfaces, sharp angles, and an electric yellow accent inspired by the classic VRV interface."
};

const t = (es, en) => ({ text: es, textEn: en });

export async function screen({ activeTheme }) {
  const on = activeTheme === THEME.id;
  return {
    type: "Column", 
    padding: { compact: 16, expanded: 32 }, 
    gap: 16,
    children: [
      { type: "Text", ...t(THEME.es, THEME.en), style: "h1" },
      { type: "Text", ...t(THEME.hook, THEME.hookEn), style: "h3", color: "primary" },
      { type: "Text", ...t(THEME.desc, THEME.descEn) },
      { 
        type: "Card", 
        children: [
          { 
            type: "Column", 
            gap: 12, 
            children: [
              { type: "Text", ...t("Qué cambia", "What changes"), style: "h3" },
              { type: "Text", ...t("Menús oscuros, botones cuadrados y acentos en amarillo brillante para máximo contraste.", "Dark menus, square buttons, and bright yellow accents for maximum contrast."), color: "muted" },
            ] 
          }
        ] 
      },
      {
        type: "ElevatedButton",
        labelText: on ? "Desactivar" : "Activar",
        labelTextEn: on ? "Turn off" : "Turn on",
        onPressed: { go: { useTheme: { theme: on ? null : THEME.id } } },
      },
    ],
  };
}

export async function screenEvent() {
  return null;
}
