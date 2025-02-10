import { POKEMON_DATA } from "@/mocks";

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
  column: number,
  focusedId: number,
  updateFocusedPokemon: (id: number) => void,
  togglePokemon: (id: number) => void
) {
  const maxId = POKEMON_DATA.at(-1)?.id ?? -1;
  let nextFocusedId = -1;
  switch (key) {
    case KeyAction.RIGHT:
      nextFocusedId = focusedId + 1 <= maxId ? focusedId + 1 : 1;
      break;
    case KeyAction.LEFT:
      nextFocusedId = focusedId - 1 > 0 ? focusedId - 1 : maxId;
      break;
    case KeyAction.UP:
      nextFocusedId = (focusedId + maxId - column) % maxId || maxId;
      break;
    case KeyAction.DOWN:
      nextFocusedId = (focusedId + column) % maxId || maxId;
      break;
    case KeyAction.ENTER:
      return togglePokemon(focusedId);
    default:
      break;
  }

  if (nextFocusedId === -1) return;
  updateFocusedPokemon(nextFocusedId);
}
