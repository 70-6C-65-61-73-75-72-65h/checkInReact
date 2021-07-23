export enum Type {
  ActionType1,
  ActionType2,
}

export const ActionCreator11 = (info1: any) => ({
  type: Type.ActionType1,
  payload: info1,
});
export const ActionCreator12 = (info2: any) => ({
  type: Type.ActionType2,
  payload: info2,
});
