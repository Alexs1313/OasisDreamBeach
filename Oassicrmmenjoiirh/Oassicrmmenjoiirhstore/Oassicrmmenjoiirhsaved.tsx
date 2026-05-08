import React, {createContext, useContext, useMemo, useState} from 'react';

type OassicrmmenjoiirhSavedContextValue = {
  oassicrmmenjoiirhSavedLocations: string[];
  oassicrmmenjoiirhSavedStories: string[];
  oassicrmmenjoiirhIsLocationSaved: (id: string) => boolean;
  oassicrmmenjoiirhIsStorySaved: (id: string) => boolean;
  oassicrmmenjoiirhToggleLocationSaved: (id: string) => void;
  oassicrmmenjoiirhToggleStorySaved: (id: string) => void;
};

const OassicrmmenjoiirhSavedContext =
  createContext<OassicrmmenjoiirhSavedContextValue | null>(null);

export const OassicrmmenjoiirhSavedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [oassicrmmenjoiirhSavedLocations, setOassicrmmenjoiirhSavedLocations] =
    useState<string[]>([]);
  const [oassicrmmenjoiirhSavedStories, setOassicrmmenjoiirhSavedStories] =
    useState<string[]>([]);

  const value: OassicrmmenjoiirhSavedContextValue = useMemo(() => {
    const oassicrmmenjoiirhIsLocationSaved = (id: string) =>
      oassicrmmenjoiirhSavedLocations.includes(id);

    const oassicrmmenjoiirhIsStorySaved = (id: string) =>
      oassicrmmenjoiirhSavedStories.includes(id);

    const oassicrmmenjoiirhToggleLocationSaved = (id: string) => {
      setOassicrmmenjoiirhSavedLocations(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev],
      );
    };

    const oassicrmmenjoiirhToggleStorySaved = (id: string) => {
      setOassicrmmenjoiirhSavedStories(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev],
      );
    };

    return {
      oassicrmmenjoiirhSavedLocations,
      oassicrmmenjoiirhSavedStories,
      oassicrmmenjoiirhIsLocationSaved,
      oassicrmmenjoiirhIsStorySaved,
      oassicrmmenjoiirhToggleLocationSaved,
      oassicrmmenjoiirhToggleStorySaved,
    };
  }, [oassicrmmenjoiirhSavedLocations, oassicrmmenjoiirhSavedStories]);

  return (
    <OassicrmmenjoiirhSavedContext.Provider value={value}>
      {children}
    </OassicrmmenjoiirhSavedContext.Provider>
  );
};

export const useOassicrmmenjoiirhSaved = () => {
  const ctx = useContext(OassicrmmenjoiirhSavedContext);
  if (!ctx) {
    throw new Error('useOassicrmmenjoiirhSaved must be used within provider');
  }
  return ctx;
};

