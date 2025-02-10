import { SetStateAction } from "react";

export const KeyAction = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  ENTER: "ENTER",
} as const;
type KeyActionType = keyof typeof KeyAction;
export default KeyActionType;

export const keyMappings: Record<KeyActionType, string[]> = {
  [KeyAction.UP]: ["W", "w", "ArrowUp"],
  [KeyAction.DOWN]: ["S", "s", "ArrowDown"],
  [KeyAction.LEFT]: ["A", "a", "ArrowLeft"],
  [KeyAction.RIGHT]: ["D", "d", "ArrowRight"],
  [KeyAction.ENTER]: ["Enter"],
};

export function getKeyMapping(key: string): KeyActionType | null {
  const entry = Object.entries(keyMappings).find((keyMapping) =>
    keyMapping[1].includes(key)
  );
  return entry ? (entry[0] as KeyActionType) : null;
}

export function executeKeyAction(
  key: KeyActionType,
  maxId: number,
  column: number,
  setFocusedId: React.Dispatch<SetStateAction<number>>,
  onEnterAction: () => void
) {
  switch (key) {
    case KeyAction.RIGHT:
      return setFocusedId((prev) => (prev + 1 <= maxId ? prev + 1 : 1));
    case KeyAction.LEFT:
      return setFocusedId((prev) => (prev - 1 > 0 ? prev - 1 : maxId));
    case KeyAction.UP:
      return setFocusedId((prev) => (prev + maxId - column) % maxId || maxId);
    case KeyAction.DOWN:
      return setFocusedId((prev) => (prev + column) % maxId || maxId);
    case KeyAction.ENTER:
      return onEnterAction();
    default:
      break;
  }
}
