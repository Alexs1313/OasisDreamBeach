import React, {createContext, useContext, useMemo, useState} from 'react';

type OssdrmeexplrbechhSavedContextValue = {
  ossdrmeexplrbechhSavedLocations: string[];
  ossdrmeexplrbechhSavedStories: string[];
  ossdrmeexplrbechhIsLocationSaved: (id: string) => boolean;
  ossdrmeexplrbechhIsStorySaved: (id: string) => boolean;
  ossdrmeexplrbechhToggleLocationSaved: (id: string) => void;
  ossdrmeexplrbechhToggleStorySaved: (id: string) => void;
};

const OssdrmeexplrbechhSavedContext =
  createContext<OssdrmeexplrbechhSavedContextValue | null>(null);

export const OssdrmeexplrbechhSavedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ossdrmeexplrbechhSavedLocations, setOssdrmeexplrbechhSavedLocations] =
    useState<string[]>([]);
  const [ossdrmeexplrbechhSavedStories, setOssdrmeexplrbechhSavedStories] =
    useState<string[]>([]);

  const value: OssdrmeexplrbechhSavedContextValue = useMemo(() => {
    const ossdrmeexplrbechhIsLocationSaved = (id: string) =>
      ossdrmeexplrbechhSavedLocations.includes(id);

    const ossdrmeexplrbechhIsStorySaved = (id: string) =>
      ossdrmeexplrbechhSavedStories.includes(id);

    const ossdrmeexplrbechhToggleLocationSaved = (id: string) => {
      setOssdrmeexplrbechhSavedLocations(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev],
      );
    };

    const ossdrmeexplrbechhToggleStorySaved = (id: string) => {
      setOssdrmeexplrbechhSavedStories(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [id, ...prev],
      );
    };

    return {
      ossdrmeexplrbechhSavedLocations,
      ossdrmeexplrbechhSavedStories,
      ossdrmeexplrbechhIsLocationSaved,
      ossdrmeexplrbechhIsStorySaved,
      ossdrmeexplrbechhToggleLocationSaved,
      ossdrmeexplrbechhToggleStorySaved,
    };
  }, [ossdrmeexplrbechhSavedLocations, ossdrmeexplrbechhSavedStories]);

  return (
    <OssdrmeexplrbechhSavedContext.Provider value={value}>
      {children}
    </OssdrmeexplrbechhSavedContext.Provider>
  );
};

export const useOssdrmeexplrbechhSaved = () => {
  const ctx = useContext(OssdrmeexplrbechhSavedContext);
  if (!ctx) {
    throw new Error('useOssdrmeexplrbechhSaved must be used within provider');
  }
  return ctx;
};

