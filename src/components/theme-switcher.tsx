// Theme Switcher Component
// Allows users to switch between 8 dark themes only

import { useState, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { THEMES, applyTheme, getDefaultTheme, saveThemePreference } from "../lib/themes";

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentThemeId, setCurrentThemeId] = useState(getDefaultTheme());
  const currentMode = 'dark'; // Always dark mode

  // Apply theme on mount and when changed
  useEffect(() => {
    applyTheme(currentThemeId, currentMode);
  }, [currentThemeId]);

  const handleThemeChange = (themeId: string) => {
    setCurrentThemeId(themeId);
    saveThemePreference(themeId, currentMode);
    applyTheme(themeId, currentMode);
  };

  const currentTheme = THEMES.find(t => t.id === currentThemeId);

  return (
    <>
      {/* Theme Switcher Button - Top Right Corner */}
      <div className="fixed right-6 top-6 z-[100]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-4 py-2.5 text-sm font-medium text-white shadow-2xl backdrop-blur-xl transition-all hover:border-white/20 hover:bg-black/90"
          aria-label="Change theme"
        >
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Theme</span>
        </button>

        {/* Theme Panel */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <div className="fixed right-6 top-20 z-[99] w-[360px] max-h-[600px] overflow-y-auto rounded-2xl border border-white/10 bg-black/95 p-6 shadow-2xl backdrop-blur-xl">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Choose Your Theme</h3>
                  <p className="text-sm text-neutral-400">8 Professional Dark Themes</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-white"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Theme Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Color Themes ({THEMES.length})
                </h4>
                
                {THEMES.map((theme) => {
                  const colors = theme.colors[currentMode];
                  const isActive = theme.id === currentThemeId;

                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(theme.id)}
                      className={`group relative w-full rounded-xl border p-4 text-left transition-all ${
                        isActive
                          ? 'border-white/30 bg-white/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Color Preview */}
                        <div className="flex gap-1">
                          <div
                            className="h-10 w-3 rounded-md"
                            style={{ backgroundColor: colors.primary }}
                          />
                          <div
                            className="h-10 w-3 rounded-md"
                            style={{ backgroundColor: colors.secondary }}
                          />
                          <div
                            className="h-10 w-3 rounded-md"
                            style={{ backgroundColor: colors.accent }}
                          />
                        </div>

                        {/* Theme Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h5 className="font-semibold text-white">{theme.name}</h5>
                            {isActive && (
                              <Check className="h-4 w-4 text-green-400" />
                            )}
                          </div>
                          <p className="text-xs text-neutral-400">{theme.description}</p>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100" 
                           style={{ 
                             background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)` 
                           }} 
                      />
                    </button>
                  );
                })}
              </div>

              {/* Current Theme Info */}
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Palette className="h-3.5 w-3.5" />
                  <span>Current: {currentTheme?.name} (Dark Mode)</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
