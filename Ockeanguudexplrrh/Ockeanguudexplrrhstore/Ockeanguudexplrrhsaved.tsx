import React, {createContext, useContext, useMemo, useState} from 'react';

type OckeanguudexplrrhSavedContextValue = {
  ockeanguudexplrrhSavedLocations: string[];
  ockeanguudexplrrhSavedStories: string[];
  ockeanguudexplrrhIsLocationSaved: (id: string) => boolean;
  ockeanguudexplrrhIsStorySaved: (id: string) => boolean;
  ockeanguudexplrrhToggleLocationSaved: (id: string) => void;
  ockeanguudexplrrhToggleStorySaved: (id: string) => void;
};

const OckeanguudexplrrhSavedContext =
  createContext<OckeanguudexplrrhSavedContextValue | null>(null);

export const OckeanguudexplrrhSavedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ockeanguudexplrrhSavedLocations, setOckeanguudexplrrhSavedLocations] =
    useState<string[]>([]);
  const [ockeanguudexplrrhSavedStories, setOckeanguudexplrrhSavedStories] =
    useState<string[]>([]);

  const value: OckeanguudexplrrhSavedContextValue = useMemo(() => {
    const ockeanguudexplrrhIsLocationSaved = (id: string) =>
      ockeanguudexplrrhSavedLocations.includes(id);

    const ockeanguudexplrrhIsStorySaved = (id: string) =>
      ockeanguudexplrrhSavedStories.includes(id);

    const ockeanguudexplrrhToggleLocationSaved = (id: string) => {
      setOckeanguudexplrrhSavedLocations(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev],
      );
    };

    const ockeanguudexplrrhToggleStorySaved = (id: string) => {
      setOckeanguudexplrrhSavedStories(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev],
      );
    };

    return {
      ockeanguudexplrrhSavedLocations,
      ockeanguudexplrrhSavedStories,
      ockeanguudexplrrhIsLocationSaved,
      ockeanguudexplrrhIsStorySaved,
      ockeanguudexplrrhToggleLocationSaved,
      ockeanguudexplrrhToggleStorySaved,
    };
  }, [ockeanguudexplrrhSavedLocations, ockeanguudexplrrhSavedStories]);

  return (
    <OckeanguudexplrrhSavedContext.Provider value={value}>
      {children}
    </OckeanguudexplrrhSavedContext.Provider>
  );
};

export const useOckeanguudexplrrhSaved = () => {
  const ctx = useContext(OckeanguudexplrrhSavedContext);
  if (!ctx) {
    throw new Error('useOckeanguudexplrrhSaved must be used within provider');
  }
  return ctx;
};

