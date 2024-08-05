import { EntityState } from '@ngrx/entity';

export const convertArrayToEntityState = (array: any[]): EntityState<any> => {
  return {
    ids: [...array.map((value) => value.id)],
    entities: {
      ...array.reduce((acc, value) => {
        return { ...acc, [value.id.toString()]: value };
      }, {}),
    },
  };
};

export const capitalizeFirstLetter = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export const isNullOrEmpty = (value: string | null | undefined): boolean => {
  return !value || value.trim().length === 0;
};

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
